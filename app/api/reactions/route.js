import { getBrand, generateCouponCode } from '@/lib/brands';
import { createReaction, getReactions, initializeDatabase } from '@/lib/db';

// Initialize database on first request
let dbInitialized = false;

async function ensureDatabase() {
  if (!dbInitialized && process.env.POSTGRES_URL) {
    try {
      await initializeDatabase();
      dbInitialized = true;
    } catch (error) {
      console.error('Failed to initialize database:', error);
    }
  }
}

export async function POST(request) {
  try {
    const body = await request.json();
    const { brand, timestamp, video } = body;

    if (!brand || !timestamp) {
      return Response.json(
        { success: false, error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const brandConfig = getBrand(brand);
    if (!brandConfig) {
      return Response.json(
        { success: false, error: 'Unknown brand' },
        { status: 400 }
      );
    }

    const couponCode = generateCouponCode(brandConfig.couponPrefix);

    // Try to store in database
    if (process.env.POSTGRES_URL) {
      await ensureDatabase();
      const reaction = await createReaction({
        brand,
        brandName: brandConfig.name,
        couponCode,
        timestamp,
        videoSize: video ? video.length : 0,
      });

      return Response.json({
        success: true,
        couponCode,
        reactionId: reaction.id.toString(),
      });
    }

    // Fallback response when no database configured
    return Response.json({
      success: true,
      couponCode,
      reactionId: Date.now().toString(),
      note: 'Database not configured - reaction not persisted',
    });
  } catch (error) {
    console.error('Error processing reaction:', error);
    return Response.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    if (process.env.POSTGRES_URL) {
      await ensureDatabase();
      const reactions = await getReactions();

      return Response.json({
        success: true,
        reactions: reactions.map((r) => ({
          id: r.id.toString(),
          brand: r.brand,
          brandName: r.brand_name,
          timestamp: r.timestamp,
          couponCode: r.coupon_code,
          createdAt: r.created_at,
        })),
        total: reactions.length,
      });
    }

    // Fallback when no database configured
    return Response.json({
      success: true,
      reactions: [],
      total: 0,
      note: 'Database not configured',
    });
  } catch (error) {
    console.error('Error fetching reactions:', error);
    return Response.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}

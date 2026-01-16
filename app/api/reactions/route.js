import { getBrand, generateCouponCode } from '@/lib/brands';

// In-memory store for MVP (resets on server restart)
const reactions = [];

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

    // Store reaction metadata (video is stored but truncated for memory in MVP)
    const reaction = {
      id: Date.now().toString(),
      brand,
      brandName: brandConfig.name,
      timestamp,
      couponCode,
      videoSize: video ? video.length : 0,
      createdAt: new Date().toISOString(),
    };

    reactions.push(reaction);

    // Keep only last 100 reactions in memory
    if (reactions.length > 100) {
      reactions.shift();
    }

    return Response.json({
      success: true,
      couponCode,
      reactionId: reaction.id,
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
  return Response.json({
    success: true,
    reactions: reactions.map((r) => ({
      id: r.id,
      brand: r.brand,
      brandName: r.brandName,
      timestamp: r.timestamp,
      couponCode: r.couponCode,
      createdAt: r.createdAt,
    })),
    total: reactions.length,
  });
}

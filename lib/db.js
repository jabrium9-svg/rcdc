import { sql } from '@vercel/postgres';

export async function initializeDatabase() {
  await sql`
    CREATE TABLE IF NOT EXISTS reactions (
      id SERIAL PRIMARY KEY,
      brand VARCHAR(100) NOT NULL,
      brand_name VARCHAR(200) NOT NULL,
      coupon_code VARCHAR(50) NOT NULL,
      timestamp TIMESTAMPTZ NOT NULL,
      video_size INTEGER DEFAULT 0,
      created_at TIMESTAMPTZ DEFAULT NOW()
    )
  `;
}

export async function createReaction({ brand, brandName, couponCode, timestamp, videoSize }) {
  const result = await sql`
    INSERT INTO reactions (brand, brand_name, coupon_code, timestamp, video_size)
    VALUES (${brand}, ${brandName}, ${couponCode}, ${timestamp}, ${videoSize})
    RETURNING id, brand, brand_name, coupon_code, timestamp, created_at
  `;
  return result.rows[0];
}

export async function getReactions() {
  const result = await sql`
    SELECT id, brand, brand_name, coupon_code, timestamp, created_at
    FROM reactions
    ORDER BY created_at DESC
    LIMIT 100
  `;
  return result.rows;
}

export async function getReactionCount() {
  const result = await sql`SELECT COUNT(*) as count FROM reactions`;
  return parseInt(result.rows[0].count, 10);
}

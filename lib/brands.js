export const brands = {
  'sunset-motors': {
    name: 'Sunset Motors',
    slug: 'sunset-motors',
    tagline: 'Your Journey Starts Here',
    description: 'Premium pre-owned vehicles with a sunset guarantee.',
    theme: {
      primary: '#f97316',
      secondary: '#ea580c',
      accent: '#fbbf24',
      background: '#fef3c7',
    },
    couponPrefix: 'SUNSET',
    contentTitle: 'Check Out Our Latest Arrival',
    contentDescription: 'The 2024 model just hit our lot - and we think you\'ll love it.',
  },
  'paradise-jewelers': {
    name: 'Paradise Jewelers',
    slug: 'paradise-jewelers',
    tagline: 'Elegance Crafted for You',
    description: 'Fine jewelry and custom designs since 1985.',
    theme: {
      primary: '#d4af37',
      secondary: '#b8860b',
      accent: '#ffd700',
      background: '#fffbeb',
    },
    couponPrefix: 'PARADISE',
    contentTitle: 'A Special Piece Just For You',
    contentDescription: 'We thought of you when this arrived in our collection.',
  },
  'blue-horizon-boats': {
    name: 'Blue Horizon Boats',
    slug: 'blue-horizon-boats',
    tagline: 'Adventure Awaits on the Water',
    description: 'New and pre-owned boats for every lifestyle.',
    theme: {
      primary: '#0284c7',
      secondary: '#0369a1',
      accent: '#38bdf8',
      background: '#e0f2fe',
    },
    couponPrefix: 'BLUEHORIZON',
    contentTitle: 'Your Dream Boat is Ready',
    contentDescription: 'The perfect vessel for your next adventure is waiting.',
  },
};

export function getBrand(slug) {
  return brands[slug] || null;
}

export function getAllBrandSlugs() {
  return Object.keys(brands);
}

export function generateCouponCode(brandPrefix) {
  const year = new Date().getFullYear();
  const randomPart = Math.random().toString(36).substring(2, 6).toUpperCase();
  return `${brandPrefix}-${year}-${randomPart}`;
}

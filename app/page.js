import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-zinc-100">
        <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold text-zinc-900">RCDC</div>
          <nav className="flex items-center gap-6">
            <Link href="/dashboard" className="text-sm text-zinc-600 hover:text-zinc-900">
              Dashboard
            </Link>
            <Link
              href="#demo"
              className="rounded-full bg-orange-500 px-4 py-2 text-sm font-medium text-white hover:bg-orange-600"
            >
              Request Demo
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="mx-auto max-w-6xl px-6 py-24 text-center">
        <h1 className="mx-auto max-w-4xl text-5xl font-bold tracking-tight text-zinc-900">
          Turn Ghosted Customers Into{" "}
          <span className="text-orange-500">Engaged Fans</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-xl text-zinc-600">
          RCDC helps businesses re-engage prospects who went silent by inviting them
          to record reaction videos — then rewards them with exclusive offers.
        </p>
        <div className="mt-10 flex justify-center gap-4">
          <Link
            href="#demo"
            className="rounded-full bg-orange-500 px-8 py-3 text-lg font-medium text-white hover:bg-orange-600"
          >
            Request a Demo
          </Link>
          <Link
            href="/demo/sunset-motors"
            className="rounded-full border border-zinc-300 px-8 py-3 text-lg font-medium text-zinc-700 hover:border-zinc-400"
          >
            Try Live Demo
          </Link>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-zinc-50 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-center text-3xl font-bold text-zinc-900">How It Works</h2>
          <p className="mx-auto mt-4 max-w-xl text-center text-zinc-600">
            Three simple steps to transform silent prospects into engaged customers.
          </p>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {/* Step 1 */}
            <div className="rounded-xl bg-white p-8 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-100 text-xl font-bold text-orange-600">
                1
              </div>
              <h3 className="mt-6 text-xl font-semibold text-zinc-900">Watch</h3>
              <p className="mt-2 text-zinc-600">
                Customer receives a personalized link and watches your brand content —
                a product video, special offer, or personal message.
              </p>
            </div>

            {/* Step 2 */}
            <div className="rounded-xl bg-white p-8 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-100 text-xl font-bold text-orange-600">
                2
              </div>
              <h3 className="mt-6 text-xl font-semibold text-zinc-900">React</h3>
              <p className="mt-2 text-zinc-600">
                They record a short video reaction sharing their thoughts. Authentic
                engagement you can use for testimonials and insights.
              </p>
            </div>

            {/* Step 3 */}
            <div className="rounded-xl bg-white p-8 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-100 text-xl font-bold text-orange-600">
                3
              </div>
              <h3 className="mt-6 text-xl font-semibold text-zinc-900">Reward</h3>
              <p className="mt-2 text-zinc-600">
                Upon submission, they instantly receive an exclusive coupon code —
                incentivizing the next step in their buying journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Value Props */}
      <section className="py-24">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-center text-3xl font-bold text-zinc-900">
            Why Businesses Choose RCDC
          </h2>

          <div className="mt-16 grid gap-12 md:grid-cols-2">
            <div className="flex gap-4">
              <div className="flex-shrink-0 text-3xl">📹</div>
              <div>
                <h3 className="text-lg font-semibold text-zinc-900">Authentic Video Testimonials</h3>
                <p className="mt-2 text-zinc-600">
                  Capture genuine customer reactions you can use in marketing — with their permission.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 text-3xl">🎯</div>
              <div>
                <h3 className="text-lg font-semibold text-zinc-900">Re-engage Lost Prospects</h3>
                <p className="mt-2 text-zinc-600">
                  Bring back customers who went quiet with a novel, engaging experience.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 text-3xl">💰</div>
              <div>
                <h3 className="text-lg font-semibold text-zinc-900">Incentivized Conversion</h3>
                <p className="mt-2 text-zinc-600">
                  Exclusive coupon rewards drive customers back to complete their purchase.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 text-3xl">📊</div>
              <div>
                <h3 className="text-lg font-semibold text-zinc-900">Customer Insights</h3>
                <p className="mt-2 text-zinc-600">
                  Learn what customers really think through their unscripted video feedback.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Brands */}
      <section id="demo" className="bg-zinc-50 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-center text-3xl font-bold text-zinc-900">Try a Live Demo</h2>
          <p className="mx-auto mt-4 max-w-xl text-center text-zinc-600">
            Experience RCDC from the customer&apos;s perspective with one of our demo brands.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <Link
              href="/demo/sunset-motors"
              className="group rounded-xl bg-white p-6 shadow-sm transition hover:shadow-md"
            >
              <div className="h-32 rounded-lg bg-gradient-to-br from-orange-400 to-amber-500"></div>
              <h3 className="mt-4 text-lg font-semibold text-zinc-900 group-hover:text-orange-600">
                Sunset Motors
              </h3>
              <p className="mt-1 text-sm text-zinc-600">Car Dealership</p>
            </Link>

            <Link
              href="/demo/paradise-jewelers"
              className="group rounded-xl bg-white p-6 shadow-sm transition hover:shadow-md"
            >
              <div className="h-32 rounded-lg bg-gradient-to-br from-yellow-400 to-amber-600"></div>
              <h3 className="mt-4 text-lg font-semibold text-zinc-900 group-hover:text-amber-600">
                Paradise Jewelers
              </h3>
              <p className="mt-1 text-sm text-zinc-600">Jewelry Store</p>
            </Link>

            <Link
              href="/demo/blue-horizon-boats"
              className="group rounded-xl bg-white p-6 shadow-sm transition hover:shadow-md"
            >
              <div className="h-32 rounded-lg bg-gradient-to-br from-sky-400 to-blue-600"></div>
              <h3 className="mt-4 text-lg font-semibold text-zinc-900 group-hover:text-blue-600">
                Blue Horizon Boats
              </h3>
              <p className="mt-1 text-sm text-zinc-600">Boat Dealer</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl font-bold text-zinc-900">Ready to Re-engage Your Customers?</h2>
          <p className="mt-4 text-xl text-zinc-600">
            Get started with RCDC and turn your silent prospects into engaged fans.
          </p>
          <Link
            href="mailto:hello@rcdc.com"
            className="mt-8 inline-block rounded-full bg-orange-500 px-8 py-3 text-lg font-medium text-white hover:bg-orange-600"
          >
            Contact Us
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-100 py-8">
        <div className="mx-auto max-w-6xl px-6 text-center text-sm text-zinc-500">
          &copy; {new Date().getFullYear()} RCDC. Reaction-Driven Customer Engagement.
        </div>
      </footer>
    </div>
  );
}

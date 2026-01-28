export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-zinc-100 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold tracking-tight text-slate">
            Reaction<span className="text-coral">Coupons</span>
          </div>
          <a
            href="#get-started"
            className="rounded-full bg-coral px-5 py-2 text-sm font-medium text-white hover:bg-coral-dark transition-colors"
          >
            Get Started
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 py-24 md:py-32 text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-coral mb-4">
          Reconnect with your audience
        </p>
        <h1 className="mx-auto max-w-4xl text-4xl md:text-6xl font-bold tracking-tight text-slate leading-tight">
          Your audience went quiet.{" "}
          <span className="text-coral">Let&apos;s fix that.</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg md:text-xl text-zinc-500 leading-relaxed">
          Reward your followers for engaging with your content. Reconnect
          through conversation, not algorithms.
        </p>
        <div className="mt-10">
          <a
            href="#get-started"
            className="inline-block rounded-full bg-coral px-8 py-4 text-lg font-semibold text-white hover:bg-coral-dark transition-colors shadow-lg shadow-coral/25"
          >
            Get Started &mdash; Download Jabrium
          </a>
        </div>
      </section>

      {/* The Problem */}
      <section className="bg-slate py-24">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-center text-3xl md:text-4xl font-bold text-white">
            Sound familiar?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-center text-zinc-400">
            You did the hard part. You built an audience. But now...
          </p>

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                  </svg>
                ),
                title: "They're not engaging",
                text: "You built an audience, but posts get crickets. Your members are there — they just stopped showing up.",
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
                  </svg>
                ),
                title: "The algorithm decides",
                text: "Platforms choose who sees your content. Your best posts reach a fraction of the people who signed up for them.",
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
                  </svg>
                ),
                title: "Digital fatigue is real",
                text: "Even your biggest fans scroll past your content. There's too much noise and not enough reason to stop.",
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                  </svg>
                ),
                title: "You don't own the relationship",
                text: "The platform does. If they change the rules tomorrow, you lose access to the audience you built.",
              },
            ].map((item, i) => (
              <div key={i} className="rounded-xl bg-white/5 border border-white/10 p-6">
                <div className="text-coral">{item.icon}</div>
                <h3 className="mt-4 text-lg font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-zinc-400 leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-zinc-50">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-center text-3xl md:text-4xl font-bold text-slate">
            How it works
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-center text-zinc-500">
            Five steps from silent audience to active conversation.
          </p>

          <div className="mt-16 grid gap-8 md:grid-cols-5">
            {[
              {
                step: "1",
                title: "Download Jabrium",
                desc: "Sign up and tell our agent about your audience, your content, and your goals.",
                icon: (
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                  </svg>
                ),
              },
              {
                step: "2",
                title: "Choose your content",
                desc: "Pick the video, post, or message you want your audience to react to.",
                icon: (
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z" />
                  </svg>
                ),
              },
              {
                step: "3",
                title: "Set the reward",
                desc: "Jabrium premium, Vibesetup access, or your own offer — something that says thank you.",
                icon: (
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 11.25v8.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 1 0 9.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1 1 14.625 7.5H12m0 0V21m-8.625-9.75h18a1.5 1.5 0 0 0 1.5-1.5V7.5a1.5 1.5 0 0 0-1.5-1.5h-18a1.5 1.5 0 0 0-1.5 1.5v2.25a1.5 1.5 0 0 0 1.5 1.5Z" />
                  </svg>
                ),
              },
              {
                step: "4",
                title: "Share the link",
                desc: "Post it in your group, email it, pin it — get it in front of your audience.",
                icon: (
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z" />
                  </svg>
                ),
              },
              {
                step: "5",
                title: "They react & reconnect",
                desc: "They watch, record a reaction, get rewarded — and land in a conversation with you.",
                icon: (
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
                  </svg>
                ),
              },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-coral text-white">
                  {item.icon}
                </div>
                <div className="mt-3 text-xs font-bold uppercase tracking-wider text-coral">
                  Step {item.step}
                </div>
                <h3 className="mt-2 text-base font-semibold text-slate">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-zinc-500 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="py-24">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-center text-3xl md:text-4xl font-bold text-slate">
            Who it&apos;s for
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-center text-zinc-500">
            If you built an audience and lost touch with them, this is for you.
          </p>

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Featured: FB admins */}
            <div className="md:col-span-2 lg:col-span-3 rounded-2xl bg-gradient-to-br from-coral to-warm p-8 md:p-12 text-white">
              <div className="max-w-2xl">
                <div className="inline-block rounded-full bg-white/20 px-3 py-1 text-xs font-semibold uppercase tracking-wider mb-4">
                  Primary use case
                </div>
                <h3 className="text-2xl md:text-3xl font-bold">
                  Facebook Group Admins
                </h3>
                <p className="mt-3 text-lg text-white/90 leading-relaxed">
                  You grew a group to thousands of members. Now your posts get
                  buried and notifications are off. ReactionCoupons gives you a
                  reason to reach out and a way to pull them back into a real
                  conversation.
                </p>
              </div>
            </div>

            {[
              {
                title: "YouTubers",
                desc: "Your subscribers don't see your videos. Give them a reason to come back and engage directly.",
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z" />
                  </svg>
                ),
              },
              {
                title: "TikTok Creators",
                desc: "The algorithm giveth and taketh away. Build a direct line to your followers that no algorithm can touch.",
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
                  </svg>
                ),
              },
              {
                title: "Email Marketers",
                desc: "Open rates tanking? Give your list something worth clicking on — and start a two-way conversation.",
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                  </svg>
                ),
              },
              {
                title: "Brands & Businesses",
                desc: "Your customer list is full of people who stopped buying. Rekindle the relationship with authentic engagement.",
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z" />
                  </svg>
                ),
              },
              {
                title: "Anyone with a quiet audience",
                desc: "If you built it and they stopped coming, we can help you bring them back.",
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
                  </svg>
                ),
              },
            ].map((item, i) => (
              <div
                key={i}
                className="rounded-xl border border-zinc-200 p-6 hover:border-coral/30 hover:shadow-sm transition-all"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-coral-light text-coral">
                  {item.icon}
                </div>
                <h3 className="mt-4 text-lg font-semibold text-slate">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-zinc-500 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="bg-zinc-50 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-center text-3xl md:text-4xl font-bold text-slate">
            What you get
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-center text-zinc-500">
            More than views. More than clicks. Real reconnection.
          </p>

          <div className="mt-16 grid gap-8 md:grid-cols-2">
            {[
              {
                title: "Reaction videos",
                desc: "Real engagement from real people. Authentic content you can use, learn from, and build on.",
                accent: "bg-coral",
              },
              {
                title: "Audience members on Jabrium",
                desc: "Every person who reacts lands in a direct conversation thread with you. No middleman, no algorithm.",
                accent: "bg-warm",
              },
              {
                title: "Ongoing conversation",
                desc: "This isn't a one-time interaction. It's the start of an ongoing relationship you actually own.",
                accent: "bg-coral",
              },
              {
                title: "Ownership of the relationship",
                desc: "No platform can bury you. No algorithm can mute you. Your audience is yours.",
                accent: "bg-warm",
              },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className={`mt-1 h-3 w-3 flex-shrink-0 rounded-full ${item.accent}`} />
                <div>
                  <h3 className="text-lg font-semibold text-slate">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-zinc-500 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Reward */}
      <section className="py-24">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-center text-3xl md:text-4xl font-bold text-slate">
            A thank-you that actually means something
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-center text-zinc-500">
            Your audience gives you their attention. You give them something
            valuable in return.
          </p>

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Jabrium Premium",
                desc: "A free month of Jabrium premium features.",
              },
              {
                title: "Special Features",
                desc: "Early access to tools and capabilities.",
              },
              {
                title: "Vibesetup Access",
                desc: "Free month on Vibesetup.com or 2 hours with a vibe jockey.",
              },
              {
                title: "Your Own Offer",
                desc: "Discount codes, exclusive content, whatever makes sense for your audience.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="rounded-xl border border-zinc-200 bg-white p-6 text-center"
              >
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-warm-light text-warm">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 11.25v8.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 1 0 9.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1 1 14.625 7.5H12m0 0V21m-8.625-9.75h18a1.5 1.5 0 0 0 1.5-1.5V7.5a1.5 1.5 0 0 0-1.5-1.5h-18a1.5 1.5 0 0 0-1.5 1.5v2.25a1.5 1.5 0 0 0 1.5 1.5Z" />
                  </svg>
                </div>
                <h3 className="mt-4 font-semibold text-slate">{item.title}</h3>
                <p className="mt-2 text-sm text-zinc-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="get-started" className="bg-slate py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Ready to reconnect?
          </h2>
          <p className="mt-4 text-lg text-zinc-400">
            Download Jabrium to get started. Our agent will walk you through
            setting up your first campaign.
          </p>
          <a
            href="#get-started"
            className="mt-8 inline-block rounded-full bg-coral px-8 py-4 text-lg font-semibold text-white hover:bg-coral-dark transition-colors shadow-lg shadow-coral/25"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-100 py-8">
        <div className="mx-auto max-w-6xl px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-zinc-400">
            A{" "}
            <span className="font-semibold text-zinc-600">
              Jabrium Engage
            </span>{" "}
            Property
          </div>
          <nav className="flex items-center gap-6 text-sm text-zinc-400">
            <a href="#" className="hover:text-zinc-600 transition-colors">
              About
            </a>
            <a href="#" className="hover:text-zinc-600 transition-colors">
              Contact
            </a>
            <a href="#" className="hover:text-zinc-600 transition-colors">
              Terms
            </a>
            <a href="#" className="hover:text-zinc-600 transition-colors">
              Privacy
            </a>
          </nav>
        </div>
      </footer>
    </div>
  );
}

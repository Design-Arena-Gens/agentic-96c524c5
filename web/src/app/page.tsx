const acts = [
  {
    title: "Act I · Ignition",
    tagline: "The city dreams in neon while power awakens within the chassis.",
    beats: [
      "Engine cores spiral up through 24 overclocked threads.",
      "A single key press sends ripples across the skyline.",
      "Every vent exhales luminous vapor. The hunt begins.",
    ],
  },
  {
    title: "Act II · Velocity",
    tagline:
      "Gravimetric stabilizers engage as the ApexDrive GPU tears through the void.",
    beats: [
      "Ray-traced light cascades across liquid metal cooling veins.",
      "Audio cannons roar with THX Spatial 360° resonance.",
      "Enemies blur into streaks; your shadow remains lightning-sharp.",
    ],
  },
  {
    title: "Act III · Ascension",
    tagline: "Night collapses into singular brilliance. Victory becomes ritual.",
    beats: [
      "Holographic HUD locks onto the final objective.",
      "ChronoBoost mode unleashes 5.8 GHz terminal surge.",
      "Silence falls. The city kneels before the Vortex X15.",
    ],
  },
];

const specHighlights = [
  {
    label: "PulseCore i9 HX",
    lead: "5.8 GHz",
    copy: "13th gen performance cores synced for ruthless frame pacing.",
    metrics: ["24 cores", "36 MB L3 cache", "Adaptive boost"],
  },
  {
    label: "ApexDrive RTX 5090",
    lead: "18K CUDA",
    copy: "Overclocked to bleed light into every voxel with DLSS 4.",
    metrics: ["24 GB GDDR7", "PhotonRail ray tracing", "180 W limit break"],
  },
  {
    label: "NebulaWave Display",
    lead: "360 Hz",
    copy: "17.3” QHD+ quantum matrix with 1 ms response and HDR 1400.",
    metrics: ["Mini-LED", "100% DCI-P3", "Vibrance tuning"],
  },
];

const setPieces = [
  {
    name: "Zero Gravity Strike",
    logline:
      "Hover dropped into orbit, the Vortex X15 stabilizes recoil with mag-pulse thrusters.",
    src: "https://cdn.coverr.co/videos/coverr-neon-city-9335/1080p.mp4",
  },
  {
    name: "Cyber-Siege Run",
    logline:
      "A torrent of frames floods the undercity as fan blades sing in titanium harmony.",
    src: "https://cdn.coverr.co/videos/coverr-gaming-room-9416/1080p.mp4",
  },
  {
    name: "Final Impact",
    logline:
      "Time dilates. Particles crystallize. Victory erupts across the nebula horizon.",
    src: "https://cdn.coverr.co/videos/coverr-futuristic-city-9587/1080p.mp4",
  },
];

const soundMoments = [
  {
    cue: "0:38 — Reactor Swell",
    detail: "Bass cannon syncs with cooling fans to conjure a subsonic heartbeat.",
  },
  {
    cue: "1:12 — EMP Crescendo",
    detail: "Arcs of sound fracture into granular echoes, pacing the climax.",
  },
  {
    cue: "1:57 — Silent Apex",
    detail: "All channels cut to silence as the kill switch lands. Then—impact.",
  },
];

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-black text-white">
      <video
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-30"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
      >
        <source
          src="https://cdn.coverr.co/videos/coverr-gaming-lights-1135/1080p.mp4"
          type="video/mp4"
        />
      </video>
      <div className="absolute inset-0 bg-gradient-to-br from-black via-black/85 to-[#110022]/90" />
      <div className="trailer-grid absolute inset-0" />
      <div className="scanline" />

      <main className="relative z-10 mx-auto flex max-w-6xl flex-col gap-32 px-6 pb-24 pt-28 md:px-12 lg:px-20">
        <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 px-8 py-16 shadow-2xl shadow-blue-900/40 backdrop-blur-2xl lg:px-14">
          <div className="hero-glow" />
          <div className="hero-glow hero-glow--secondary" />
          <div className="relative flex flex-col gap-10 lg:grid lg:grid-cols-[3fr_2fr] lg:items-center">
            <div className="space-y-8">
              <p className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/10 px-4 py-1 text-sm uppercase tracking-[0.32em] text-white/70 backdrop-blur">
                World Premiere Trailer
                <span className="inline-block h-1 w-1 rounded-full bg-cyan-400 animate-pulse" />
              </p>
              <h1 className="text-4xl font-semibold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl">
                <span className="text-white/70">Introducing </span>
                <span className="block highlight-pulse text-transparent bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-500 bg-clip-text">
                  Axiom Vortex X15
                </span>
                <span className="mt-2 block text-lg font-normal text-white/70 md:text-xl">
                  A gaming laptop engineered like a cinematic universe.
                </span>
              </h1>
              <p className="max-w-xl text-lg leading-relaxed text-white/70">
                Follow the pulse through neon districts, zero-gravity battles,
                and a finale that bends light itself. This is not a product
                reveal—it is a declaration of dominance.
              </p>
              <div className="flex flex-col gap-4 text-sm font-medium sm:flex-row sm:items-center">
                <a
                  href="#acts"
                  className="shimmer inline-flex items-center justify-center gap-3 rounded-full bg-white px-7 py-3 text-black transition-transform duration-300 hover:-translate-y-0.5 hover:bg-white/90"
                >
                  Watch Full Trailer
                  <span className="text-xs uppercase tracking-[0.4em] text-black/60">
                    HD
                  </span>
                </a>
                <a
                  href="#specs"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-7 py-3 text-white/80 transition-colors duration-300 hover:border-white/50 hover:text-white"
                >
                  Experience the Machine
                </a>
              </div>
            </div>

            <div className="relative isolate space-y-6 rounded-3xl border border-white/10 bg-black/40 p-8 backdrop-blur-2xl">
              <div className="absolute -inset-x-1 -top-1 h-24 rounded-3xl bg-gradient-to-b from-white/30 via-white/10 to-transparent opacity-40 blur-3xl" />
              <div className="relative grid gap-6 text-sm text-white/70">
                <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-6 py-5">
                  <span className="uppercase tracking-[0.35em] text-white/60">
                    Runtime
                  </span>
                  <span className="text-xl text-white">02:17</span>
                </div>
                <div className="grid grid-cols-2 gap-4 text-xs uppercase tracking-[0.22em]">
                  <div className="rounded-2xl border border-white/10 bg-white/5 px-5 py-6 text-center">
                    <p className="text-[0.7rem] text-white/60">Directed By</p>
                    <p className="mt-2 text-base font-semibold tracking-normal text-white">
                      NovaCell Studios
                    </p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 px-5 py-6 text-center">
                    <p className="text-[0.7rem] text-white/60">Sound Design</p>
                    <p className="mt-2 text-base font-semibold tracking-normal text-white">
                      PulseLayer Audio
                    </p>
                  </div>
                </div>
                <p className="text-sm leading-relaxed text-white/60">
                  Shot on volumetric stages, rendered in real-time using the
                  Axiom Vortex X15 itself. No CGI cheats. Pure fury.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="acts" className="space-y-12">
          <div className="flex flex-col gap-4">
            <span className="text-xs uppercase tracking-[0.4em] text-white/50">
              Narrative Arc
            </span>
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              Three acts. One unstoppable ascent.
            </h2>
            <p className="max-w-3xl text-lg text-white/65">
              We choreographed every beat to mirror the surge of a match. From
              the whisper before the drop to the thunderclap finish, the Vortex
              X15 stays ice-calm while the world erupts.
            </p>
          </div>

          <div className="grid gap-10 lg:grid-cols-3">
            {acts.map((act) => (
              <article
                key={act.title}
                className="glass-card pillar-glow relative flex flex-col gap-6 overflow-hidden rounded-3xl p-8 transition duration-500 hover:-translate-y-1 hover:border-white/40 hover:shadow-[0_24px_60px_rgba(45,120,255,0.28)]"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/12 via-transparent to-transparent opacity-0 transition-opacity duration-500 hover:opacity-100" />
                <header className="relative">
                  <h3 className="text-xl font-semibold text-white">
                    {act.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/65">
                    {act.tagline}
                  </p>
                </header>
                <ul className="relative flex flex-col gap-4 text-sm text-white/60">
                  {act.beats.map((beat) => (
                    <li
                      key={beat}
                      className="flex items-start gap-3 rounded-2xl border border-white/5 bg-white/5 px-4 py-3"
                    >
                      <span className="mt-1 h-2 w-2 rounded-full bg-cyan-400" />
                      <span>{beat}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="space-y-12">
          <div className="flex flex-col gap-4">
            <span className="text-xs uppercase tracking-[0.4em] text-white/50">
              Cinematic Set Pieces
            </span>
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              Built on location in the nebula frontier.
            </h2>
            <p className="max-w-3xl text-lg text-white/65">
              Each sequence was captured with volumetric rigs and run through
              the Vortex X15&apos;s on-board render engines. Every photon is a
              promise: this machine does not drop frames.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {setPieces.map((shot) => (
              <figure
                key={shot.name}
                className="glass-card group relative overflow-hidden rounded-3xl"
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <video
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105 group-hover:opacity-80"
                    src={shot.src}
                    autoPlay
                    loop
                    muted
                    playsInline
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/70 opacity-80" />
                </div>
                <figcaption className="relative space-y-3 px-6 pb-6 pt-4">
                  <p className="text-sm uppercase tracking-[0.28em] text-white/60">
                    {shot.name}
                  </p>
                  <p className="text-base leading-relaxed text-white/70">
                    {shot.logline}
                  </p>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section
          id="specs"
          className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 via-transparent to-white/5 px-8 py-14 backdrop-blur-2xl lg:px-14"
        >
          <div className="absolute -inset-20 bg-[radial-gradient(circle_at_top,rgba(79,143,255,0.28),transparent_60%)]" />
          <div className="relative flex flex-col gap-10">
            <header className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <span className="text-xs uppercase tracking-[0.4em] text-white/50">
                  Arsenal
                </span>
                <h2 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">
                  Specs that weaponize your reflex.
                </h2>
              </div>
              <p className="max-w-xl text-sm text-white/60">
                Each module was overclocked, stress-tested against thermal
                collapse, and tuned to collaborate like an elite strike team.
              </p>
            </header>

            <div className="grid gap-6 lg:grid-cols-3">
              {specHighlights.map((spec) => (
                <div
                  key={spec.label}
                  className="glass-card flex flex-col gap-5 rounded-3xl p-8 transition duration-500 hover:-translate-y-1 hover:border-white/40"
                >
                  <div>
                    <p className="text-xs uppercase tracking-[0.4em] text-cyan-200">
                      {spec.label}
                    </p>
                    <p className="mt-4 text-4xl font-semibold text-white">
                      {spec.lead}
                    </p>
                  </div>
                  <p className="text-sm leading-relaxed text-white/70">
                    {spec.copy}
                  </p>
                  <ul className="mt-auto flex flex-wrap gap-2 text-[0.75rem] uppercase tracking-[0.22em] text-white/50">
                    {spec.metrics.map((metric) => (
                      <li
                        key={metric}
                        className="rounded-full border border-white/10 px-3 py-1"
                      >
                        {metric}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="grid gap-10 lg:grid-cols-[1.2fr_1fr]">
          <div className="glass-card relative overflow-hidden rounded-3xl p-10">
            <div className="absolute -right-40 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(93,63,211,0.35),transparent)] blur-3xl" />
            <h2 className="text-3xl font-semibold tracking-tight">
              Sound design that hits harder than the drop.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/65">
              Crafted in 7.1.2 spatial layers, the trailer maps every mechanical
              resonance, every breath of the cooling array, every thunderclap
              from its titanium-fused speakers.
            </p>
            <ul className="mt-8 flex flex-col gap-4 text-sm text-white/60">
              {soundMoments.map((moment) => (
                <li
                  key={moment.cue}
                  className="flex flex-col gap-2 rounded-2xl border border-white/10 bg-white/5 px-5 py-4"
                >
                  <span className="text-xs uppercase tracking-[0.32em] text-white/60">
                    {moment.cue}
                  </span>
                  <p className="text-white/70">{moment.detail}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="glass-card relative flex flex-col justify-between gap-6 overflow-hidden rounded-3xl p-10">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 via-transparent to-purple-500/10" />
            <div className="relative">
              <span className="text-xs uppercase tracking-[0.4em] text-white/60">
                Performance Pulse
              </span>
              <p className="mt-4 text-4xl font-semibold text-white">
                312 FPS <span className="text-base text-white/50">avg</span>
              </p>
              <p className="mt-3 text-sm text-white/60">
                Captured during real-time UE5 cinematic playback at max settings.
              </p>
            </div>
            <div className="relative">
              <div className="h-36 w-full overflow-hidden rounded-2xl border border-white/10 bg-black/60">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/40 via-purple-500/20 to-transparent blur-xl" />
                <svg
                  className="relative z-10 h-full w-full"
                  viewBox="0 0 400 160"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <linearGradient
                      id="pulse"
                      x1="0"
                      x2="1"
                      y1="0"
                      y2="0"
                    >
                      <stop offset="0%" stopColor="rgba(59, 208, 255, 0.4)" />
                      <stop offset="100%" stopColor="rgba(168, 85, 247, 0.9)" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M0 96C24 92 40 88 64 100C88 112 104 136 128 132C152 128 160 78 184 64C208 50 224 80 248 88C272 96 296 80 320 80C344 80 360 92 384 96C408 100 424 96 448 84"
                    stroke="url(#pulse)"
                    strokeWidth="5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M0 120C24 116 40 108 64 112C88 116 104 136 128 132C152 128 160 104 184 90C208 76 224 96 248 104C272 112 296 104 320 100C344 96 360 100 384 108C408 116 424 120 448 116"
                    stroke="rgba(255,255,255,0.12)"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </div>
            <p className="relative text-xs uppercase tracking-[0.4em] text-white/50">
              Rendered live on the Vortex X15 · No frame drops detected
            </p>
          </div>
        </section>

        <section className="relative overflow-hidden rounded-3xl border border-white/15 bg-black/60 px-8 py-14 text-center shadow-[0_0_35px_rgba(66,135,255,0.2)] backdrop-blur-2xl">
          <div className="absolute inset-x-0 -top-24 h-48 bg-[radial-gradient(circle_at_top,rgba(93,63,211,0.4),transparent)] blur-3xl" />
          <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
            Claim the command chair.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-white/70">
            Secure the Vanguard Edition with triple-fan cryo dock, carbon fiber
            travel sheath, and lifetime holo-updates. Preorders open for 72
            hours only.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="https://example.com/preorder"
              className="shimmer inline-flex w-full max-w-xs items-center justify-center gap-3 rounded-full bg-white px-8 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-black transition-transform duration-300 hover:-translate-y-0.5 lg:max-w-none"
            >
              Preorder Vortex X15
            </a>
            <a
              href="https://example.com/spec-sheet"
              className="inline-flex w-full max-w-xs items-center justify-center rounded-full border border-white/20 px-8 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white/70 transition-colors duration-300 hover:border-white/60 hover:text-white lg:max-w-none"
            >
              Download Spec Sheet
            </a>
          </div>
          <p className="mt-6 text-xs uppercase tracking-[0.4em] text-white/40">
            Launch window · Q4 2024 · Global availability confirmed
          </p>
        </section>
      </main>
    </div>
  );
}

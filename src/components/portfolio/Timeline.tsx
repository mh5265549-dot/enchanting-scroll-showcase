const items = [
  {
    when: "2026 — Now",
    title: "Building AI Products in Public",
    body: "Shipping cold-email automation, chatbots, and ML utilities on GitHub. Iterating fast, learning louder.",
  },
  {
    when: "2025",
    title: "Joined the AI / ML Wave",
    body: "Dove deep into LLMs, prompt engineering, and Python-based automation. Started turning ideas into real, public repos.",
  },
  {
    when: "Earlier",
    title: "Foundations in Code",
    body: "Sharpened fundamentals across Python, web development, and data — the toolkit behind everything I build today.",
  },
];

const Timeline = () => {
  return (
    <section id="timeline" className="relative py-32 px-6">
      <div className="mx-auto max-w-4xl">
        <div className="text-center">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">/ journey</p>
          <h2 className="mt-4 font-display text-4xl md:text-5xl font-bold">
            The <span className="text-gradient">road</span> so far
          </h2>
        </div>

        <div className="relative mt-16 pl-8 md:pl-12">
          <div className="absolute left-2 md:left-4 top-2 bottom-2 w-px bg-gradient-to-b from-primary via-secondary to-accent opacity-60" />
          {items.map((it, i) => (
            <div
              key={i}
              className="relative pb-12 last:pb-0 animate-fade-up"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <span className="absolute -left-[26px] md:-left-[34px] top-1.5 grid h-4 w-4 place-items-center rounded-full bg-background ring-2 ring-primary shadow-glow-primary">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              </span>
              <div className="font-mono text-xs uppercase tracking-widest text-primary">
                {it.when}
              </div>
              <h3 className="mt-2 font-display text-2xl font-semibold">{it.title}</h3>
              <p className="mt-2 text-muted-foreground leading-relaxed max-w-2xl">{it.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;

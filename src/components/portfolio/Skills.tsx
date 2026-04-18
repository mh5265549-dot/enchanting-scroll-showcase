const groups = [
  {
    title: "AI / ML",
    items: ["Python", "PyTorch", "TensorFlow", "scikit-learn", "OpenAI", "LangChain", "Hugging Face"],
  },
  {
    title: "Backend & Data",
    items: ["FastAPI", "Node.js", "PostgreSQL", "Supabase", "Pandas", "NumPy", "REST APIs"],
  },
  {
    title: "Frontend & Tooling",
    items: ["TypeScript", "React", "Tailwind CSS", "Vite", "Git", "Docker", "Linux"],
  },
];

const marquee = [
  "Python", "PyTorch", "OpenAI", "LangChain", "TypeScript", "React", "FastAPI",
  "Tailwind", "Supabase", "Hugging Face", "scikit-learn", "Docker", "Node.js",
];

const Skills = () => {
  return (
    <section id="skills" className="relative py-32 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="text-center max-w-2xl mx-auto">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">/ skills</p>
          <h2 className="mt-4 font-display text-4xl md:text-5xl font-bold">
            The <span className="text-gradient">stack</span> behind the magic
          </h2>
          <p className="mt-4 text-muted-foreground">
            Tools I reach for every day to ship intelligent products.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {groups.map((g, i) => (
            <div
              key={g.title}
              className="glass-card rounded-2xl p-6 animate-fade-up"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <h3 className="font-display text-lg font-semibold">{g.title}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {g.items.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-border bg-muted/50 px-3 py-1 text-xs font-mono text-muted-foreground hover:border-primary/50 hover:text-primary transition-colors"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Marquee */}
        <div className="relative mt-16 overflow-hidden">
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />
          <div className="flex w-max marquee-track gap-3">
            {[...marquee, ...marquee].map((t, i) => (
              <span
                key={i}
                className="rounded-full border border-border bg-muted/30 px-4 py-2 text-sm font-mono text-muted-foreground"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

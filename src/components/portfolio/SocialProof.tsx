import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Hashir builds with the speed of a hacker and the taste of a designer. Every project ships polished.",
    name: "A Future Collaborator",
    role: "Engineering Lead",
  },
  {
    quote:
      "Rare combo: deep AI/ML curiosity, real coding chops, and the discipline to actually finish things.",
    name: "Open Source Friend",
    role: "Indie Developer",
  },
  {
    quote:
      "Watching his GitHub is like watching someone level up in real time. The bar keeps moving.",
    name: "Online Mentor",
    role: "ML Researcher",
  },
];

const posts = [
  {
    tag: "AI / Automation",
    title: "Why I built a cold-email engine instead of buying one",
    excerpt:
      "Lessons from wiring up GPT, deliverability, and follow-ups into one Python pipeline.",
  },
  {
    tag: "Engineering",
    title: "Sanitizing data is the most underrated ML skill",
    excerpt: "How a tiny toolkit saved hours of debugging on every dataset I touched.",
  },
  {
    tag: "Prompting",
    title: "Designing characters with prompts: the Naruto chatbot diary",
    excerpt: "Turning prompt engineering into game design — voice, memory, and stakes.",
  },
];

const SocialProof = () => {
  return (
    <section id="writing" className="relative py-32 px-6">
      <div className="mx-auto max-w-6xl">
        {/* Testimonials */}
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">/ kind words</p>
          <h2 className="mt-4 font-display text-4xl md:text-5xl font-bold">
            What people <span className="text-gradient">say</span>
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="glass-card rounded-2xl p-6 animate-fade-up"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <Quote className="h-6 w-6 text-primary opacity-70" />
                <p className="mt-4 text-sm leading-relaxed text-foreground">"{t.quote}"</p>
                <div className="mt-6 pt-4 border-t border-border/60">
                  <div className="font-display font-semibold text-sm">{t.name}</div>
                  <div className="text-xs text-muted-foreground font-mono">{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Writing */}
        <div className="mt-28">
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">/ writing</p>
              <h2 className="mt-4 font-display text-4xl md:text-5xl font-bold">
                Notes from the <span className="text-gradient">build</span>
              </h2>
            </div>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {posts.map((p, i) => (
              <article
                key={i}
                className="glass-card rounded-2xl p-6 cursor-pointer animate-fade-up"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <span className="inline-block rounded-full border border-primary/30 bg-primary/10 px-2.5 py-0.5 text-[11px] font-mono text-primary">
                  {p.tag}
                </span>
                <h3 className="mt-4 font-display text-xl font-semibold leading-snug">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.excerpt}</p>
                <div className="mt-5 text-xs font-mono text-primary">Coming soon →</div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;

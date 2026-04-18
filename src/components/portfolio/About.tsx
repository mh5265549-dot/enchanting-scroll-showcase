import { Brain, Code2, Rocket } from "lucide-react";

const cards = [
  {
    icon: Brain,
    title: "AI / ML Mindset",
    body: "I think in models, embeddings, and pipelines. I love taking raw data and turning it into something that learns, predicts, or talks back.",
  },
  {
    icon: Code2,
    title: "Builder First",
    body: "Code that ships beats code that's perfect. I prototype fast, iterate harder, and obsess over the final user experience.",
  },
  {
    icon: Rocket,
    title: "Always Launching",
    body: "From cold-email engines to chat games — every repo is a step forward. I treat side projects like real products.",
  },
];

const About = () => {
  return (
    <section id="about" className="relative py-32 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 md:grid-cols-2 items-start">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">/ about</p>
            <h2 className="mt-4 font-display text-4xl md:text-5xl font-bold leading-tight">
              An <span className="text-gradient">AI engineer</span> who treats every line of code
              like a small bet on the future.
            </h2>
            <div className="mt-6 space-y-4 text-muted-foreground text-lg leading-relaxed">
              <p>
                I'm Hashir — I spend my days exploring how machines can think, write, and act on
                our behalf. My favorite problems live at the intersection of <span className="text-foreground">automation</span>, <span className="text-foreground">language models</span>, and <span className="text-foreground">good design</span>.
              </p>
              <p>
                I believe the best AI products feel invisible — they just work. So I build with
                care, ship without ego, and learn out loud.
              </p>
            </div>
          </div>

          <div className="grid gap-4">
            {cards.map((c, i) => (
              <div
                key={c.title}
                className="glass-card rounded-2xl p-6 animate-fade-up"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 border border-primary/30 text-primary">
                    <c.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-lg">{c.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{c.body}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

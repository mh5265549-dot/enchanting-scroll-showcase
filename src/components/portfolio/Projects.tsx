import { ExternalLink, Github, Star } from "lucide-react";

type Project = {
  name: string;
  title: string;
  description: string;
  tags: string[];
  url: string;
  language: string;
  highlight?: boolean;
};

const projects: Project[] = [
  {
    name: "cold-connect-showcase",
    title: "Cold Connect — Outreach Showcase",
    description:
      "A polished showcase for an AI-driven cold-email outreach platform. Crafted in TypeScript with a focus on conversion-driven UX and clean, modular components.",
    tags: ["TypeScript", "React", "UX", "Marketing"],
    url: "https://github.com/mh5265549-dot/cold-connect-showcase",
    language: "TypeScript",
    highlight: true,
  },
  {
    name: "cold-email",
    title: "Cold Email — Automation Engine",
    description:
      "A Python automation engine that personalizes and sends cold emails at scale. Built around AI-powered copy generation, deliverability best practices, and follow-up sequencing.",
    tags: ["Python", "Automation", "AI", "Email"],
    url: "https://github.com/mh5265549-dot/cold-email",
    language: "Python",
    highlight: true,
  },
  {
    name: "sanitaizer",
    title: "Sanitaizer — Data Cleaning Toolkit",
    description:
      "A lightweight toolkit for sanitizing messy real-world data — strings, inputs, and datasets — so ML pipelines stop choking on the bad stuff and start learning the good stuff.",
    tags: ["Data", "Utility", "Validation"],
    url: "https://github.com/mh5265549-dot/sanitaizer",
    language: "Python",
  },
  {
    name: "naruto-chat-bot-game",
    title: "Naruto Chat Bot Game",
    description:
      "A character-driven conversational game where players chat with Naruto-inspired AI personas. Combines prompt engineering with game-state logic for an immersive RPG vibe.",
    tags: ["LLM", "Chatbot", "Prompting", "Game"],
    url: "https://github.com/mh5265549-dot/naruto-chat-bot-game",
    language: "Python",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="relative py-32 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">/ projects</p>
            <h2 className="mt-4 font-display text-4xl md:text-5xl font-bold">
              Things I've <span className="text-gradient">shipped</span>
            </h2>
            <p className="mt-3 max-w-xl text-muted-foreground">
              Pulled live from my GitHub. Each one is a real, public repo — open it up and dig in.
            </p>
          </div>
          <a
            href="https://github.com/mh5265549-dot?tab=repositories"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary-glow font-mono"
          >
            <Github className="h-4 w-4" /> View all on GitHub →
          </a>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {projects.map((p, i) => (
            <a
              key={p.name}
              href={p.url}
              target="_blank"
              rel="noreferrer"
              className={`group glass-card rounded-2xl p-7 block animate-fade-up ${
                p.highlight ? "md:row-span-1" : ""
              }`}
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground">
                  <span className="h-2 w-2 rounded-full bg-primary shadow-glow-primary" />
                  {p.language}
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  {p.highlight && (
                    <span className="inline-flex items-center gap-1 text-xs text-accent">
                      <Star className="h-3 w-3 fill-accent" /> Featured
                    </span>
                  )}
                  <ExternalLink className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
                </div>
              </div>

              <h3 className="mt-5 font-display text-2xl font-semibold leading-tight group-hover:text-gradient transition-all">
                {p.title}
              </h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{p.description}</p>

              <div className="mt-5 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-border bg-muted/40 px-2.5 py-0.5 text-[11px] font-mono text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-6 pt-5 border-t border-border/60 flex items-center justify-between text-xs font-mono text-muted-foreground">
                <span>github.com/mh5265549-dot/{p.name}</span>
                <span className="text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                  Open →
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

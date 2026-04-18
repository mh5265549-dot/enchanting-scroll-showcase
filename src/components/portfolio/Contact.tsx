import { Github, Mail, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contact" className="relative py-32 px-6">
      <div className="mx-auto max-w-5xl">
        <div className="relative overflow-hidden rounded-3xl glass-card p-10 md:p-16 text-center">
          <div className="absolute inset-0 -z-0 opacity-60" style={{ background: "var(--gradient-hero)" }} />
          <div className="absolute -top-20 left-1/2 -translate-x-1/2 h-64 w-64 rounded-full bg-primary/30 blur-3xl animate-pulse-glow" />

          <div className="relative z-10">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">/ contact</p>
            <h2 className="mt-4 font-display text-4xl md:text-6xl font-bold leading-tight">
              Let's build something <br className="hidden md:block" />
              <span className="text-gradient">worth remembering.</span>
            </h2>
            <p className="mt-6 max-w-xl mx-auto text-muted-foreground text-lg">
              Got a wild AI idea, a startup that needs an extra brain, or just want to say hi?
              I read every message.
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <Button asChild variant="hero" size="lg" className="rounded-full">
                <a href="mailto:mh5265549@gmail.com">
                  <Mail className="h-4 w-4" />
                  Email me
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </Button>
              <Button asChild variant="neon" size="lg" className="rounded-full">
                <a href="https://github.com/mh5265549-dot" target="_blank" rel="noreferrer">
                  <Github className="h-4 w-4" />
                  Follow on GitHub
                </a>
              </Button>
            </div>
          </div>
        </div>

        <footer className="mt-16 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <div className="font-mono">© {new Date().getFullYear()} Hashir Shoaib · Built with curiosity.</div>
          <div className="flex items-center gap-4">
            <a className="hover:text-primary transition-colors" href="#top">Back to top ↑</a>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default Contact;

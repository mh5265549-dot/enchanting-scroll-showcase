import { Github, Mail, Sparkles, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroOrb from "@/assets/hero-orb.jpg";

const Hero = () => {
  return (
    <section id="top" className="relative min-h-screen flex items-center justify-center overflow-hidden noise">
      {/* Grid + glow background */}
      <div className="absolute inset-0 grid-bg pointer-events-none" />
      <div className="absolute inset-0 pointer-events-none" style={{ background: "var(--gradient-hero)" }} />

      {/* Floating orb */}
      <div className="absolute right-[-10%] top-[5%] md:right-[-5%] md:top-[10%] -z-0 opacity-70 md:opacity-90 animate-float-slow pointer-events-none">
        <img
          src={heroOrb}
          alt="Glowing neural network sphere representing AI"
          width={720}
          height={720}
          className="h-[420px] w-[420px] md:h-[640px] md:w-[640px] object-contain mix-blend-screen"
        />
      </div>

      {/* Decorative blurred blobs */}
      <div className="absolute -left-20 top-1/3 h-72 w-72 rounded-full bg-primary/20 blur-3xl animate-pulse-glow" />
      <div className="absolute right-1/4 bottom-10 h-72 w-72 rounded-full bg-accent/20 blur-3xl animate-pulse-glow delay-500" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 pt-32 pb-20">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1.5 text-xs font-mono text-muted-foreground animate-fade-in">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            Available for AI/ML opportunities
          </div>

          <h1 className="mt-6 font-display font-bold leading-[0.95] tracking-tight text-5xl sm:text-6xl md:text-7xl lg:text-8xl animate-fade-up">
            Hi, I'm <span className="text-gradient glow-text">Hashir Shoaib</span>.
          </h1>

          <p className="mt-6 max-w-2xl text-lg md:text-xl text-muted-foreground animate-fade-up delay-200">
            I build <span className="text-foreground font-medium">intelligent systems</span> — from
            cold-email automation engines and AI chatbots to data sanitizers and machine learning
            pipelines. I turn messy ideas into shipped, beautiful software.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3 animate-fade-up delay-300">
            <Button asChild variant="hero" size="lg" className="rounded-full">
              <a href="#projects">
                <Sparkles className="h-4 w-4" />
                See my work
              </a>
            </Button>
            <Button asChild variant="neon" size="lg" className="rounded-full">
              <a href="#contact">
                <Mail className="h-4 w-4" />
                Get in touch
              </a>
            </Button>
            <Button asChild variant="ghost" size="lg" className="rounded-full">
              <a href="https://github.com/mh5265549-dot" target="_blank" rel="noreferrer">
                <Github className="h-4 w-4" />
                GitHub
              </a>
            </Button>
          </div>

          <div className="mt-16 grid grid-cols-3 max-w-md gap-6 animate-fade-up delay-500">
            {[
              { v: "4+", l: "Shipped projects" },
              { v: "AI", l: "Focused stack" },
              { v: "∞", l: "Curiosity" },
            ].map((s) => (
              <div key={s.l}>
                <div className="font-display text-3xl font-bold text-gradient">{s.v}</div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </div>

        <a
          href="#about"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors animate-float"
          aria-label="Scroll down"
        >
          <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
          <ArrowDown className="h-4 w-4" />
        </a>
      </div>
    </section>
  );
};

export default Hero;

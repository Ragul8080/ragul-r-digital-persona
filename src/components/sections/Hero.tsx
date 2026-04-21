import { motion } from "framer-motion";
import { ArrowRight, Download, Mail, Github, Linkedin, ChevronDown } from "lucide-react";
import { ParticlesBackground } from "@/components/ParticlesBackground";
import { TypingText } from "@/components/TypingText";
import profileImg from "@/assets/hero.png";

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-16"
    >
      <ParticlesBackground />
      <div className="absolute inset-0 bg-gradient-radial pointer-events-none" />
      <div className="absolute top-1/4 -left-32 size-96 rounded-full bg-primary/20 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 size-96 rounded-full bg-accent/20 blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="space-y-8 text-center lg:text-left"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs font-mono">
            <span className="size-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-muted-foreground">Available for opportunities</span>
          </div>

          <div className="space-y-4">
            <p className="font-mono text-sm text-primary-glow">Hi there, I'm</p>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight">
              <span className="text-gradient">Ragul R</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-display font-medium text-foreground/90 min-h-[2.5rem]">
              <TypingText
                words={[
                  "Software Developer",
                  ".NET Developer",
                  "Full-Stack Engineer",
                  "Problem Solver",
                ]}
              />
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed">
              I build production-grade web applications with .NET and modern frontend
              technologies, turning business goals into fast, reliable, and polished
              digital experiences.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
            {/*<a
              href="#projects"
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-primary text-primary-foreground font-medium hover:scale-105 transition-all shadow-glow"
            >
              View Projects
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </a>*/}
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass font-medium hover:bg-secondary transition-all hover:scale-105"
            >
              <Mail className="size-4" />
              Contact Me
            </a>
            <a
              href="https://drive.google.com/uc?export=download&id=12mWlAqAtGrP-fCqt8vhAayNvQ1jq-jCP"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border font-medium hover:bg-secondary transition-all hover:scale-105"
            >
              <Download className="size-4" />
              Resume
            </a>
          </div>

          <div className="flex items-center justify-center lg:justify-start gap-3 pt-2">
            {[
              { icon: Github, href: "https://github.com/Ragul8080", label: "GitHub" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/connectragulravi", label: "LinkedIn" },
              { icon: Mail, href: "mailto:connect.ragulravi@gmail.com", label: "Email" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="size-10 rounded-full glass flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:scale-110 transition-all"
              >
                <Icon className="size-4" />
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative flex justify-center lg:justify-end"
        >
          <div className="relative animate-float">
            {/* Glow rings */}
            <div className="absolute inset-0 rounded-full bg-gradient-primary blur-2xl opacity-50 scale-110" />
            <div className="absolute inset-0 rounded-full border border-primary/30 scale-[1.15] animate-glow-pulse" />

            <div className="relative size-72 md:size-96 rounded-full p-1.5 bg-gradient-primary shadow-glow">
              <div className="size-full rounded-full overflow-hidden bg-surface">
                <img
                  src={profileImg}
                  alt="Ragul R - Software Developer"
                  width={768}
                  height={768}
                  className="size-full object-cover"
                />
              </div>
            </div>

            {/* Floating badges */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -top-4 -right-4 glass-strong rounded-2xl px-4 py-3 shadow-card"
            >
              <p className="font-mono text-xs text-muted-foreground">Stack</p>
              <p className="font-display font-semibold text-sm">.NET / C#</p>
            </motion.div>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity, delay: 1 }}
              className="absolute -bottom-2 -left-6 glass-strong rounded-2xl px-4 py-3 shadow-card"
            >
              <p className="font-mono text-xs text-muted-foreground">Experience</p>
              <p className="font-display font-semibold text-sm">1+ Years</p>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        aria-label="Scroll to about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
      >
        <span className="font-mono text-xs">Scroll</span>
        <div className="w-6 h-10 rounded-full border-2 border-current flex items-start justify-center p-1.5">
          <div className="w-1 h-2 rounded-full bg-current animate-scroll-down" />
        </div>
        <ChevronDown className="size-3" />
      </a>
    </section>
  );
}

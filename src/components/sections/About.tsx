import { motion } from "framer-motion";
import { Brain, Users, BookOpen, Code2 } from "lucide-react";
import profileImg from "@/assets/ragul-profile.jpg";

const strengths = [
  {
    icon: Brain,
    title: "Problem Solving",
    desc: "Breaking down complex problems into elegant, scalable solutions.",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    desc: "Thriving in agile teams with clear, empathetic communication.",
  },
  {
    icon: BookOpen,
    title: "Continuous Learning",
    desc: "Always exploring new tools, patterns, and best practices.",
  },
  {
    icon: Code2,
    title: "Clean Code",
    desc: "Writing maintainable code that scales with the product.",
  },
];

export function About() {
  return (
    <section id="about" className="relative py-28 overflow-hidden">
      <div className="absolute top-1/2 -left-40 size-80 rounded-full bg-primary/10 blur-3xl" />
      <div className="container mx-auto px-6">
        <SectionHeader eyebrow="About me" title="Crafting code with purpose" />

        <div className="grid lg:grid-cols-5 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 relative"
          >
            <div className="relative aspect-[4/5] max-w-md mx-auto">
              <div className="absolute inset-0 rounded-3xl bg-gradient-primary blur-2xl opacity-30" />
              <div className="relative rounded-3xl overflow-hidden glow-border shadow-elegant">
                <img
                  src={profileImg}
                  alt="Ragul R portrait"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 glass-strong rounded-2xl p-4 shadow-card hidden md:block">
                <p className="font-mono text-xs text-muted-foreground">Based in</p>
                <p className="font-display font-semibold">Tamil Nadu, India</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-3 space-y-8"
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a <span className="text-foreground font-semibold">results-driven software developer</span>{" "}
              with experience in building and enhancing web applications. I focus on
              delivering efficient, reliable solutions through{" "}
              <span className="text-primary-glow font-semibold">clean, maintainable code</span>.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Currently working at ValleyPoint Technologies, I collaborate in agile
              teams to ship features that improve performance and elevate user
              experience. I believe great software comes from curiosity, craft, and
              a relentless focus on the user.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 pt-4">
              {strengths.map((s, i) => (
                <motion.div
                  key={s.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="group p-5 rounded-2xl glass hover:bg-surface-elevated transition-all hover:-translate-y-1"
                >
                  <div className="size-10 rounded-xl bg-gradient-primary flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                    <s.icon className="size-5 text-primary-foreground" />
                  </div>
                  <h3 className="font-display font-semibold mb-1">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {s.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="text-center mb-16 space-y-3"
    >
      <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary-glow">
        — {eyebrow} —
      </p>
      <h2 className="font-display text-4xl md:text-5xl font-bold text-gradient">
        {title}
      </h2>
      {description && (
        <p className="text-muted-foreground max-w-2xl mx-auto">{description}</p>
      )}
    </motion.div>
  );
}

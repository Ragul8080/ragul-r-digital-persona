import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";
import { SectionHeader } from "./About";

const jobs = [
  {
    role: "Software Developer",
    company: "ValleyPoint Technologies",
    period: "Jan 2025 – Present",
    current: true,
    points: [
      "Developing and maintaining web applications used by clients across industries.",
      "Improving performance and user experience through optimization and refactoring.",
      "Working in agile teams, contributing to sprint planning, code reviews, and releases.",
    ],
  },
  {
    role: "Software Developer Intern",
    company: "ValleyPoint Technologies",
    period: "Oct 2024 – Jan 2025",
    points: [
      "Assisted in feature development and debugging across .NET applications.",
      "Collaborated with senior engineers and adopted industry best practices.",
      "Contributed to clean, maintainable code in a fast-paced environment.",
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="relative py-28 overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 size-96 rounded-full bg-primary/10 blur-3xl" />
      <div className="container mx-auto px-6 relative">
        <SectionHeader
          eyebrow="Experience"
          title="My professional journey"
          description="Building real-world applications and growing as an engineer."
        />

        <div className="relative max-w-3xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-transparent md:-translate-x-1/2" />

          <div className="space-y-12">
            {jobs.map((job, i) => (
              <motion.div
                key={job.role + i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`relative pl-12 md:pl-0 md:grid md:grid-cols-2 md:gap-8 ${
                  i % 2 === 0 ? "" : "md:[&>*:first-child]:order-2"
                }`}
              >
                {/* Dot */}
                <div className="absolute left-4 md:left-1/2 top-6 size-4 -translate-x-1/2 rounded-full bg-gradient-primary shadow-glow ring-4 ring-background" />

                <div className={i % 2 === 0 ? "md:text-right md:pr-8" : "md:pl-8"}>
                  <div className="glass rounded-2xl p-6 hover:bg-surface-elevated transition-all hover:-translate-y-1 shadow-card">
                    <div className="flex items-center gap-2 text-xs font-mono text-primary-glow mb-2 md:justify-start">
                      {job.current && (
                        <span className="size-2 rounded-full bg-emerald-400 animate-pulse" />
                      )}
                      <Calendar className="size-3" />
                      <span>{job.period}</span>
                    </div>
                    <h3 className="font-display font-bold text-xl mb-1">{job.role}</h3>
                    <div className="flex items-center gap-2 text-muted-foreground mb-4 md:justify-start">
                      <Briefcase className="size-4" />
                      <span className="text-sm">{job.company}</span>
                    </div>
                    <ul className="space-y-2 text-sm text-muted-foreground text-left">
                      {job.points.map((p, j) => (
                        <li key={j} className="flex gap-2">
                          <span className="text-primary-glow mt-1.5 size-1 rounded-full bg-current shrink-0" />
                          <span className="leading-relaxed">{p}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

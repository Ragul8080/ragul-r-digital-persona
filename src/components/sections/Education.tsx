import { motion } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";
import { SectionHeader } from "./About";

const education = [
  {
    degree: "B.Tech, Information Technology",
    school: "AVC College of Engineering",
    period: "2021 – 2024",
    score: "CGPA: 7.6",
  },
  {
    degree: "Diploma, Mechanical Engineering",
    school: "Srinivasa Subbaraya Polytechnic",
    period: "2019 – 2021",
    score: "82%",
  },
  {
    degree: "SSLC",
    school: "SMH Higher Secondary School",
    period: "2018",
    score: "80%",
  },
];

const certifications = [
  {
    name: ".NET Full Stack",
    issuer: "Besant Technologies",
  },
];

export function Education() {
  return (
    <section id="education" className="relative py-28 bg-surface/30 overflow-hidden">
      <div className="container mx-auto px-6">
        <SectionHeader eyebrow="Education & Certifications" title="Academic foundation" />

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-5">
            <h3 className="font-display text-xl font-semibold flex items-center gap-2 mb-2">
              <GraduationCap className="size-5 text-primary-glow" />
              Education
            </h3>
            {education.map((edu, i) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group glass rounded-2xl p-6 hover:bg-surface-elevated transition-all hover:-translate-y-1 shadow-card flex flex-col md:flex-row md:items-center justify-between gap-4"
              >
                <div className="flex gap-4 items-start">
                  <div className="size-12 shrink-0 rounded-xl bg-gradient-primary flex items-center justify-center shadow-glow group-hover:scale-110 transition-transform">
                    <GraduationCap className="size-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-display font-semibold">{edu.degree}</h4>
                    <p className="text-sm text-muted-foreground">{edu.school}</p>
                    <p className="font-mono text-xs text-primary-glow mt-1">{edu.period}</p>
                  </div>
                </div>
                <div className="px-4 py-2 rounded-full bg-secondary border border-border font-mono text-sm whitespace-nowrap">
                  {edu.score}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="space-y-5">
            <h3 className="font-display text-xl font-semibold flex items-center gap-2 mb-2">
              <Award className="size-5 text-primary-glow" />
              Certifications
            </h3>
            {certifications.map((cert, i) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative overflow-hidden glass rounded-2xl p-6 hover:bg-surface-elevated transition-all hover:-translate-y-1 shadow-card"
              >
                <div className="absolute -top-12 -right-12 size-32 rounded-full bg-gradient-primary opacity-20 blur-2xl group-hover:opacity-40 transition-opacity" />
                <div className="size-12 rounded-xl bg-gradient-accent flex items-center justify-center shadow-glow-accent mb-4">
                  <Award className="size-6 text-accent-foreground" />
                </div>
                <h4 className="font-display font-semibold mb-1">{cert.name}</h4>
                <p className="text-sm text-muted-foreground">{cert.issuer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

import { motion } from "framer-motion";
import { SectionHeader } from "./About";
import {
  SiDotnet,
  SiSharp,
  SiPostgresql,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiJquery,
  SiBootstrap,
  SiAmazon,
  SiGit,
  SiGithub,
  SiJira,
  SiOpenai,
} from "react-icons/si";
import { Database, Cloud, Wrench, Sparkles, Code2, Globe } from "lucide-react";
import type { ComponentType } from "react";

type Skill = { name: string; icon: ComponentType<{ className?: string }>; color: string };

const groups: {
  title: string;
  icon: ComponentType<{ className?: string }>;
  skills: Skill[];
}[] = [
  {
    title: "Programming",
    icon: Code2,
    skills: [
      { name: ".NET", icon: SiDotnet, color: "#512BD4" },
      { name: "C#", icon: SiSharp, color: "#9B4F96" },
    ],
  },
  {
    title: "Database",
    icon: Database,
    skills: [
      { name: "MS SQL", icon: Database, color: "#CC2927" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
    ],
  },
  {
    title: "Web",
    icon: Globe,
    skills: [
      { name: "HTML", icon: SiHtml5, color: "#E34F26" },
      { name: "CSS", icon: SiCss3, color: "#1572B6" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "jQuery", icon: SiJquery, color: "#0769AD" },
      { name: "Bootstrap", icon: SiBootstrap, color: "#7952B3" },
    ],
  },
  {
    title: "Cloud",
    icon: Cloud,
    skills: [{ name: "AWS", icon: SiAmazon, color: "#FF9900" }],
  },
  {
    title: "Tools",
    icon: Wrench,
    skills: [
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "GitHub", icon: SiGithub, color: "#ffffff" },
      { name: "Azure DevOps", icon: Cloud, color: "#0078D4" },
      { name: "Jira", icon: SiJira, color: "#0052CC" },
    ],
  },
  {
    title: "AI Tools",
    icon: Sparkles,
    skills: [
      { name: "GitHub Copilot", icon: SiGithub, color: "#ffffff" },
      { name: "ChatGPT", icon: SiOpenai, color: "#10A37F" },
      { name: "Cursor", icon: Sparkles, color: "#9b8cff" },
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="relative py-28 bg-surface/30 overflow-hidden">
      <div className="absolute top-0 right-0 size-96 rounded-full bg-accent/10 blur-3xl" />
      <div className="container mx-auto px-6 relative">
        <SectionHeader
          eyebrow="Skills"
          title="My technical toolkit"
          description="A blend of languages, frameworks, and tools I use to build modern web applications."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {groups.map((group, gi) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: gi * 0.06 }}
              className="group relative p-6 rounded-2xl glass hover:bg-surface-elevated transition-all hover:-translate-y-1 hover:shadow-glow"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="size-10 rounded-xl bg-gradient-primary flex items-center justify-center shadow-glow">
                  <group.icon className="size-5 text-primary-foreground" />
                </div>
                <h3 className="font-display font-semibold text-lg">{group.title}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="group/chip flex items-center gap-2 px-3 py-2 rounded-lg bg-secondary/60 hover:bg-secondary border border-border/50 hover:border-primary/40 transition-all hover:scale-105"
                  >
                    <skill.icon
                      className="size-4 transition-transform group-hover/chip:scale-110"
                      style={{ color: skill.color }}
                    />
                    <span className="text-sm font-medium">{skill.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

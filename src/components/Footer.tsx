import { Github, Linkedin, Mail, Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative border-t border-border bg-surface/50 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <a href="#home" className="font-display font-bold text-xl">
            <span className="text-gradient-primary">Ragul</span>
            <span className="text-primary-glow">.</span>
          </a>
          <p className="text-sm text-muted-foreground mt-1 flex items-center justify-center md:justify-start gap-1.5">
            Built with <Heart className="size-3.5 text-red-400 fill-current" /> by Ragul R
          </p>
        </div>

        <div className="flex items-center gap-3">
          {[
            { icon: Github, href: "https://github.com", label: "GitHub" },
            { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
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

        <p className="font-mono text-xs text-muted-foreground">
          © {new Date().getFullYear()} Ragul R. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

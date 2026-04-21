import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { z } from "zod";
import { Mail, Phone, MapPin, Github, Linkedin, Send, Loader2 } from "lucide-react";
import { SectionHeader } from "./About";
import { toast } from "sonner";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  message: z.string().trim().min(1, "Message required").max(1000),
});

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "connect.ragulravi@gmail.com",
    href: "mailto:connect.ragulravi@gmail.com",
  },
  { icon: Phone, label: "Phone", value: "+91 6374166035", href: "tel:+916374166035" },
  { icon: MapPin, label: "Location", value: "Tamil Nadu, India" },
];

export function Contact() {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const sheetWebhookUrl = import.meta.env.VITE_GOOGLE_SHEET_WEBHOOK_URL as string | undefined;

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const result = contactSchema.safeParse(form);
    if (!result.success) {
      toast.error(result.error.issues[0].message);
      return;
    }

    if (!sheetWebhookUrl) {
      toast.error("Contact endpoint is missing. Add VITE_GOOGLE_SHEET_WEBHOOK_URL.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(sheetWebhookUrl, {
        method: "POST",
        mode: "no-cors",
        body: JSON.stringify({
          ...result.data,
          source: "portfolio-contact-form",
          submittedAt: new Date().toISOString(),
        }),
      });

      // no-cors returns an opaque response; reaching here means request was sent.
      if (response) {
        setForm({ name: "", email: "", message: "" });
        toast.success("Message sent successfully. I will get back to you soon.");
      }
    } catch {
      toast.error("Unable to send right now. Please try again in a moment.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="relative py-28 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 size-[40rem] rounded-full bg-primary/10 blur-3xl" />
      <div className="container mx-auto px-6 relative">
        <SectionHeader
          eyebrow="Contact"
          title="Let's build something together"
          description="Have a project in mind or just want to say hi? My inbox is always open."
        />

        <div className="grid lg:grid-cols-5 gap-8 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 space-y-4"
          >
            {contactInfo.map((info) => {
              const content = (
                <div className="flex items-start gap-4 p-5 rounded-2xl glass hover:bg-surface-elevated transition-all hover:-translate-y-1 shadow-card">
                  <div className="size-10 shrink-0 rounded-xl bg-gradient-primary flex items-center justify-center shadow-glow">
                    <info.icon className="size-5 text-primary-foreground" />
                  </div>
                  <div className="min-w-0">
                    <p className="font-mono text-xs text-primary-glow uppercase tracking-wider">
                      {info.label}
                    </p>
                    <p className="font-medium truncate">{info.value}</p>
                  </div>
                </div>
              );
              return info.href ? (
                <a key={info.label} href={info.href} className="block">
                  {content}
                </a>
              ) : (
                <div key={info.label}>{content}</div>
              );
            })}

            <div className="flex gap-3 pt-2">
              {[
                { icon: Github, href: "https://github.com/Ragul8080", label: "GitHub" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/connectragulravi", label: "LinkedIn" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="size-12 rounded-xl glass flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:scale-110 transition-all"
                >
                  <Icon className="size-5" />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            onSubmit={handleSubmit}
            className="lg:col-span-3 glass-strong rounded-3xl p-8 space-y-5 shadow-elegant"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <Field
                label="Name"
                value={form.name}
                onChange={(v) => setForm({ ...form, name: v })}
                placeholder="John Doe"
              />
              <Field
                label="Email"
                type="email"
                value={form.email}
                onChange={(v) => setForm({ ...form, email: v })}
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="font-mono text-xs uppercase tracking-wider text-muted-foreground mb-2 block">
                Message
              </label>
              <textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Tell me about your project..."
                rows={5}
                maxLength={1000}
                className="w-full px-4 py-3 rounded-xl bg-input border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all resize-none"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="group inline-flex items-center justify-center gap-2 w-full px-6 py-3.5 rounded-xl bg-gradient-primary text-primary-foreground font-semibold hover:opacity-90 transition-all hover:scale-[1.02] shadow-glow disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? (
                <Loader2 className="size-4 animate-spin" />
              ) : (
                <>
                  Send Message
                  <Send className="size-4 transition-transform group-hover:translate-x-1" />
                </>
              )}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  value,
  onChange,
  type = "text",
  placeholder,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="font-mono text-xs uppercase tracking-wider text-muted-foreground mb-2 block">
        {label}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        maxLength={255}
        className="w-full px-4 py-3 rounded-xl bg-input border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
      />
    </div>
  );
}

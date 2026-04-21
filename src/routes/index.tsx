import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Experience } from "@/components/sections/Experience";
import { Education } from "@/components/sections/Education";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/Footer";
import { Toaster } from "@/components/ui/sonner";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ragul R — Software Developer | .NET, C#, Full-Stack" },
      {
        name: "description",
        content:
          "Portfolio of Ragul R, software developer crafting high-performance .NET and full-stack web applications focused on reliability, scalability, and user-first product outcomes.",
      },
      { property: "og:title", content: "Ragul R — Software Developer" },
      {
        property: "og:description",
        content:
          "High-impact .NET and full-stack engineering portfolio with a focus on performance, clean architecture, and business results.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Education />
        <Contact />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}

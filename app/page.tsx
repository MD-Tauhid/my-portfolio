import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ProjectsSection } from "@/components/projects-section"
import { SkillsSection } from "@/components/skills-section"
import { ContactSection } from "@/components/contact-section"
import { ExperienceSection } from "@/components/experience-section"
import { Metadata } from "next"

// app/page.jsx
export const metadata: Metadata = {
  title: "Tauhidur Rahman | Software Engineer",
  description: "Welcome to my portfolio — check out my work, skills, and projects.",
  openGraph: {
    title: "Tauhid Portfolio Home",
    description: "Building innovative digital experiences with Next.js & TypeScript.",
    url: "https://tauhidur-rahman.vercel.app/",
    images: [
      {
        url: "/portfolio-home.png",
        width: 1200,
        height: 630,
        alt: "Tauhid Portfolio Home",
      },
    ],
  },
  twitter: {
    title: "Tauhid | Full-Stack Developer",
    description: "Modern web developer portfolio built with Next.js 14.",
    images: ["/portfolio-home.png"],
  },
};


export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <ContactSection />

      <footer className="bg-card border-t border-border py-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-muted-foreground">© 2025 Tauhid. Built with Next.js, TypeScript, and Tailwind CSS with Three.js.</p>
        </div>
      </footer>
    </main>
  )
}

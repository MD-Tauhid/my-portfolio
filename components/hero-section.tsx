"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { BackgroundBeams } from "@/components/ui/background-beams"
import { TypewriterEffect } from "@/components/ui/typewriter-effect"
import { HeroSocials } from "@/components/hero-socials"

export function HeroSection() {
  return (
    <section id="home" className="min-h-[50vh] lg:min-h-screen flex items-center justify-center relative overflow-hidden bg-background">
      <BackgroundBeams />
      <HeroSocials />

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-4 tracking-tight">
            Hi, I'm <span className="text-transparent bg-clip-text bg-primary">Tauhidur Rahman</span>
          </h1>
        </motion.div>

        <div className="mb-8">
          <TypewriterEffect text="Full-Stack Developer & Creative Technologist" className="text-xl sm:text-2xl lg:text-4xl" />
        </div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto text-pretty leading-relaxed"
        >
          I craft digital experiences that blend cutting-edge technology with intuitive design, bringing ideas to life
          through code.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          {/* <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg rounded-full shadow-lg shadow-primary/25 transition-all hover:scale-105"
            onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            Contact Me
          </Button>
          <Button
            // variant="outline"
            size="lg"
            className="border-primary/50 text-primary hover:bg-primary/10 hover:text-primary px-8 py-6 border-2 border-primary text-lg bg-transparent rounded-full backdrop-blur-sm transition-all hover:scale-105"
            onClick={() => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })}
          >
            View My Work
          </Button> */}
          <Button
            // variant="ghost"
            size="lg"
            className="text-primary-foreground px-8 py-6 text-lg rounded-full transition-all shadow-lg shadow-primary/25 hover:scale-105"
            onClick={() => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })}
          >
            Download Resume
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

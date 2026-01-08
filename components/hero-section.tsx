"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { BackgroundBeams } from "@/components/ui/background-beams"
import { TypewriterEffect } from "@/components/ui/typewriter-effect"
import { HeroSocials } from "@/components/hero-socials"

export function HeroSection() {
  const HandleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = '/Tauhidur-Rahman-Resume.pdf';
    link.download = 'Tauhidur-Rahman-Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

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
          <TypewriterEffect text="Full-Stack Developer" className="text-xl sm:text-2xl lg:text-4xl" />
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
          {/* <a href="/Tauhidur-Rahman-Resume.pdf" rel="noopener noreferrer"> */}
          <Button
            // variant="ghost"
            size="lg"
            className="text-primary-foreground px-8 py-6 text-lg rounded-full transition-all shadow-lg shadow-primary/25 hover:scale-105"
            onClick={() => HandleResumeDownload()}
          >
            Download Resume <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 13.95C13.7485 13.95 13.95 13.7485 13.95 13.5C13.95 13.2514 13.7485 13.05 13.5 13.05L1.49995 13.05C1.25142 13.05 1.04995 13.2514 1.04995 13.5C1.04995 13.7485 1.25142 13.95 1.49995 13.95L13.5 13.95ZM11.0681 7.5683C11.2439 7.39257 11.2439 7.10764 11.0681 6.93191C10.8924 6.75617 10.6075 6.75617 10.4317 6.93191L7.94993 9.41371L7.94993 1.49998C7.94993 1.25146 7.74846 1.04998 7.49993 1.04998C7.2514 1.04998 7.04993 1.25146 7.04993 1.49998L7.04993 9.41371L4.56813 6.93191C4.39239 6.75617 4.10746 6.75617 3.93173 6.93191C3.75599 7.10764 3.75599 7.39257 3.93173 7.5683L7.18173 10.8183C7.35746 10.994 7.64239 10.994 7.81812 10.8183L11.0681 7.5683Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
          </Button>
          {/* </a> */}
        </motion.div>
      </div>
    </section>
  )
}

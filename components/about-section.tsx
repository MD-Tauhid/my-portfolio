"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative" ref={ref}>
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-5xl font-bold text-foreground mb-4 tracking-tight">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
              <div className="w-80 h-80 sm:w-96 sm:h-96 mx-auto relative z-10">
                <div className="w-full h-full rounded-full p-1 bg-gradient-to-r from-primary to-accent">
                  <img
                    src="/tauhid1.png"
                    alt="Tauhidur Rahman"
                    className="w-full h-full rounded-full object-cover border-4 border-background bg-background"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-foreground">
              Software Engineer & <span className="text-primary">Tech Enthusiast</span>
            </h3>

            <p className="text-lg text-muted-foreground leading-relaxed">
              I am a dedicated MERN Stack Software Engineer with a passion for building beautiful, performant, and accessible web applications.
              With a strong foundation in <span className="text-foreground font-medium">React ecosystem</span> and modern CSS architecture,
              I transform complex requirements into seamless user experiences.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              My approach combines technical expertise with a keen eye for design as a Frontend Engineer. I believe that code is not just about functionality,
              but about crafting digital art that solves real-world problems. I constantly explore new technologies like
              <span className="text-foreground font-medium"> Three.js</span> and <span className="text-foreground font-medium">WebGL</span> to push the boundaries of what's possible on the web.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="p-4 bg-card/50 backdrop-blur-sm rounded-xl border border-border hover:border-primary/50 transition-colors">
                <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent"> 2+ </div>
                <div className="text-sm font-medium text-muted-foreground mt-1">Years of Experience in Frontend</div>
              </div>
              <div className="p-4 bg-card/50 backdrop-blur-sm rounded-xl border border-border hover:border-primary/50 transition-colors">
                <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent"> 20+ </div>
                <div className="text-sm font-medium text-muted-foreground mt-1">Projects Delivered</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

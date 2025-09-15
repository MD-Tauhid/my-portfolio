"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const skills = [
  { name: "TypeScript", level: 90, icon: "📘" },
  { name: "Next.js", level: 95, icon: "⚡" },
  { name: "React", level: 92, icon: "⚛️" },
  { name: "Three.js", level: 85, icon: "🎮" },
  { name: "Tailwind CSS", level: 88, icon: "🎨" },
  { name: "Node.js", level: 87, icon: "🟢" },
]

export function SkillsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Skills & Technologies</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Here are the technologies and tools I use to bring ideas to life.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="text-3xl mr-4">{skill.icon}</div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">{skill.name}</h3>
                  <p className="text-sm text-muted-foreground">{skill.level}% Proficiency</p>
                </div>
              </div>

              <div className="w-full bg-muted rounded-full h-2">
                <motion.div
                  initial={{ width: 0 }}
                  animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                  transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                  className="bg-primary h-2 rounded-full"
                />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold text-foreground mb-8">Other Technologies</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {["Python", "PostgreSQL", "MongoDB", "Docker", "AWS", "GraphQL", "Jest", "Figma"].map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                className="px-4 py-2 bg-card border border-border rounded-full text-foreground hover:bg-primary hover:text-primary-foreground transition-colors duration-200 cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

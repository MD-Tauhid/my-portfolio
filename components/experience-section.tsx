"use client"

import { motion } from "framer-motion"
import { Briefcase, Calendar } from "lucide-react"

type Experience = {
  role: string
  company: string
  period: string
  description: string
  technologies: string[]
}

const experiences: Experience[] = [
  {
    role: "Junior Software Engineer",
    company: "Suffix IT",
    period: "Feb, 2024 – Present",
    description:
      "Developed interactive UIs and design systems. Focused on performance, accessibility, and pixel-perfect implementation of Figma designs.",
    technologies: ["React.js", "TypeScript", "Tailwind", "Jest"],
  },
  {
    role: "Software Engineer Intern",
    company: "Suffix IT",
    period: "Nov, 2023 – Jan, 2024",
    description:
      "Assisted in developing internal tools, automated testing workflows, and contributed to refactoring legacy codebases.",
    technologies: ["Python", "Django", "SQLite", "Docker"],
  },
]

// Animation variants for reuse
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: i * 0.2 },
  }),
}

export function ExperienceSection(): JSX.Element {
  return (
    <section id="experience" className="py-20 bg-background relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-6">
        {/* Section Header */}
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0}
          className="text-4xl font-bold text-center mb-12"
        >
          <div className="mb-4">Professional <span className="text-primary">Experience</span></div>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
        </motion.h2>

        {/* Timeline */}
        <div className="relative border-l-2 border-muted-foreground/20">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i + 1} // stagger animations
              className="mb-12 ml-6 relative"
            >
              {/* Timeline Dot */}
              <span className="absolute -left-[11px] flex h-6 w-6 items-center justify-center rounded-full bg-primary text-white shadow-lg">
                <Briefcase size={14} />
              </span>

              <div className="bg-card shadow-md rounded-2xl p-6 border border-border">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                  <h3 className="text-xl font-semibold">
                    {exp.role} @{" "}
                    <span className="text-primary">{exp.company}</span>
                  </h3>
                  <div className="flex items-center text-muted-foreground text-sm mt-2 sm:mt-0">
                    <Calendar className="h-4 w-4 mr-2" />
                    {exp.period}
                  </div>
                </div>

                <p className="mt-3 text-muted-foreground leading-relaxed">
                  {exp.description}
                </p>

                <motion.div
                  className="flex flex-wrap gap-2 mt-4"
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={i + 1.5}
                >
                  {exp.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

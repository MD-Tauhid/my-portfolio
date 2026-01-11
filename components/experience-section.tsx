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
    period: "Feb 2024 – Present",
    description:
      "Leading the frontend development of enterprise-scale applications. Implemented a comprehensive design system using React and Tailwind CSS, reducing development time by 40%. Optimized application performance, achieving a 98+ Lighthouse score.",
    technologies: ["React", "Next.js", "TypeScript", "Redux Toolkit", "Tailwind CSS", "Node.js", "Express"],
  },
  {
    role: "Trainee Software Engineer",
    company: "Suffix IT",
    period: "Nov 2023 – Jan 2024",
    description:
      "Collaborated with senior developers to build and maintain internal tools. Refactored legacy codebases to modern React standards, improving maintainability and code quality. Assisted in setting up CI/CD pipelines.",
    technologies: ["React", "JavaScript", "Python", "Django", "Docker"],
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
      {/* Background Glow */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-primary/5 to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-5xl font-bold mb-4 tracking-tight">Professional <span className="text-primary">Experience</span></h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
        </motion.div>

        {/* Timeline */}
        <div className="relative border-l-2 border-primary/20 ml-3 md:ml-6 space-y-12">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i + 1}
              className="relative pl-8 md:pl-12"
            >
              {/* Timeline Dot */}
              <span className="absolute -left-[9px] top-0 flex h-5 w-5 items-center justify-center rounded-full bg-background border-4 border-primary shadow-[0_0_10px_var(--primary)]">
              </span>

              <div className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-accent rounded-2xl opacity-0 group-hover:opacity-20 transition duration-500 blur"></div>
                <div className="relative bg-card/50 backdrop-blur-sm rounded-2xl p-6 border border-border hover:border-primary/50 transition-colors">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-4">
                    <h3 className="text-xl md:text-2xl font-bold text-foreground">
                      {exp.role} <span className="text-primary">@ {exp.company}</span>
                    </h3>
                    <div className="flex items-center text-muted-foreground text-sm font-medium bg-secondary/50 px-3 py-1 rounded-full w-fit">
                      <Calendar className="h-4 w-4 mr-2 text-primary" />
                      {exp.period}
                    </div>
                  </div>

                  <p className="text-muted-foreground leading-relaxed mb-6 text-lg">
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="text-xs font-medium bg-primary/10 text-primary px-3 py-1 rounded-full border border-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

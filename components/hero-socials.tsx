"use client"

import { motion } from "framer-motion"
import { socialLinks } from "@/lib/constants"

export function HeroSocials() {
    return (
        <div className="fixed right-6 left-auto top-1/2 -translate-y-1/2 z-50 flex flex-col items-center gap-8">
            <div className="h-32 w-[1px] bg-gradient-to-b from-transparent via-primary/50 to-transparent" />

            <div className="flex flex-col gap-6">
                {socialLinks.map((platform, index) => (
                    <motion.a
                        key={platform.name}
                        href={platform.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 1.2 + index * 0.1 }}
                        className="group relative p-3 bg-background/50 backdrop-blur-sm border border-border/50 rounded-xl hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
                        whileHover={{ scale: 1.1, x: -5 }}
                    >
                        <div className="absolute inset-0 bg-primary/20 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <img
                            src={platform.icon}
                            alt={platform.name}
                            className="w-5 h-5 relative z-10 opacity-70 group-hover:opacity-100 transition-opacity grayscale group-hover:grayscale-0"
                        />

                        {/* Tooltip */}
                        <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 px-2 py-1 bg-card border border-border rounded text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                            {platform.name.charAt(0).toUpperCase() + platform.name.slice(1)}
                        </span>
                    </motion.a>
                ))}
            </div>

            <div className="h-32 w-[1px] bg-gradient-to-b from-transparent via-primary/50 to-transparent" />

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 0.5 }}
                className="writing-vertical-rl text-xs font-medium tracking-widest text-muted-foreground/50 uppercase select-none"
                style={{ writingMode: 'vertical-rl' }}
            >
                Follow Me
            </motion.div>
        </div>
    )
}

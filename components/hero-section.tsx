"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Canvas } from "@react-three/fiber"
import { Float, OrbitControls, Preload, useGLTF } from "@react-three/drei"
import { Suspense } from "react"

function Jellyfish() {
  const { scene } = useGLTF("/models/backgroundObj.glb") // <-- place your jellyfish .glb model in /public/models
  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <primitive object={scene} scale={5} position={[0, -2, 0]} />
    </Float>
  )
}

export function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* 3D Jellyfish Background */}
      <div className="absolute left-[70%] inset-0 z-20">
        <Canvas dpr={[1, 1.5]} camera={{ position: [0, 0, 8], fov: 50 }}>
          <ambientLight intensity={1} />
          <directionalLight position={[5, 5, 5]} intensity={2} />
          <pointLight position={[0, 0, 10]} intensity={1.5} />
          <Suspense fallback={null}>
            <Jellyfish />
          </Suspense>
          <OrbitControls enableZoom={false} enablePan={false} />
          <Preload all />
        </Canvas>
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto bg-transparent">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-6 text-balance"
        >
          Hi, I'm <span className="text-primary">Tauhidur Rahman</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl sm:text-2xl text-muted-foreground mb-8 text-pretty"
        >
          Full-Stack Developer & Creative Technologist
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto text-pretty"
        >
          I craft digital experiences that blend cutting-edge technology with intuitive design, bringing ideas to life
          through code.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg"
            onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            Hire Me
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 text-lg bg-transparent"
            onClick={() => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })}
          >
            View My Work
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

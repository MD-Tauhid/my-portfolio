"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface Bubble {
     id: number;
     x: number;
     y: number;
     size: number;
     delay: number;
}

export default function CursorWaterTrail() {
     const mouseX = useMotionValue(0);
     const mouseY = useMotionValue(0);

     // Smooth spring for main bubble
     const springX = useSpring(mouseX, { stiffness: 160, damping: 14, mass: 0.6 });
     const springY = useSpring(mouseY, { stiffness: 160, damping: 14, mass: 0.6 });

     const particlesRef = useRef<Bubble[]>([]);
     const [particles, setParticles] = useState<Bubble[]>([]);

     const lastMousePos = useRef({ x: 0, y: 0 });
     const cursorMoving = useRef(false);

     useEffect(() => {
          const handleMove = (e: MouseEvent) => {
               const x = e.clientX - 20; // center big bubble
               const y = e.clientY - 20;

               // Detect movement
               const dx = e.clientX - lastMousePos.current.x;
               const dy = e.clientY - lastMousePos.current.y;
               const speed = Math.sqrt(dx * dx + dy * dy);
               cursorMoving.current = speed > 0.5;

               lastMousePos.current = { x: e.clientX, y: e.clientY };

               mouseX.set(x);
               mouseY.set(y);

               if (cursorMoving.current) {
                    // Spawn 2-3 trailing bubbles per move
                    const newBubbles: Bubble[] = Array.from({ length: 3 }).map(() => ({
                         id: Date.now() + Math.random(),
                         x: x + (Math.random() - 0.5) * 25,
                         y: y + 25 + Math.random() * 10,
                         size: 4 + Math.random() * 6,
                         delay: Math.random() * 0.2,
                    }));

                    particlesRef.current.push(...newBubbles);
                    setParticles([...particlesRef.current]);

                    // Remove bubbles after animation
                    setTimeout(() => {
                         particlesRef.current = particlesRef.current.filter(
                              (b) => !newBubbles.some((nb) => nb.id === b.id)
                         );
                         setParticles([...particlesRef.current]);
                    }, 1200);
               }
          };

          window.addEventListener("mousemove", handleMove);
          return () => window.removeEventListener("mousemove", handleMove);
     }, [mouseX, mouseY]);

     return (
          <>
               {/* Little trailing bubbles */}
               {particles.map((p) => (
                    <motion.div
                         key={p.id}
                         className="pointer-events-none fixed rounded-full bg-cyan-300/60 z-50"
                         style={{
                              width: p.size,
                              height: p.size,
                              left: 0,
                              top: 0,
                         }}
                         initial={{ opacity: 1, x: p.x, y: p.y }}
                         animate={{ opacity: 0, x: p.x, y: p.y - 25 }}
                         transition={{ duration: 1, ease: "easeOut", delay: p.delay }}
                    />
               ))}

               {/* Main bubble */}
               <motion.div
                    className="fixed top-0 left-0 pointer-events-none w-10 h-10 rounded-full bg-gradient-to-r border-2 border-gray-400 shadow-lg z-40"
                    style={{
                         x: springX,
                         y: springY,
                    }}
                    animate={{
                         scale: [1, 1.05, 0.97, 1],
                    }}
                    transition={{
                         duration: 1.2,
                         repeat: Infinity,
                         ease: "easeInOut",
                    }}
               />
          </>
     );
}

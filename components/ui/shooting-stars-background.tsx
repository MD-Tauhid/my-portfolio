"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState, useRef } from "react";

interface ShootingStarProps {
    id: number;
    x: number;
    y: number;
    angle: number;
    scale: number;
    speed: number;
    distance: number;
}

const ShootingStar = ({ id, x, y, angle, scale, speed, distance }: ShootingStarProps) => {
    const starRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const star = starRef.current;
        if (!star) return;

        const duration = distance / speed;

        star.style.left = `${x}px`;
        star.style.top = `${y}px`;
        star.style.transform = `rotate(${angle}deg) scale(${scale})`;
        star.style.opacity = "1";

        // Animate
        const animation = star.animate(
            [
                { transform: `rotate(${angle}deg) scale(${scale}) translateX(0)`, opacity: 1 },
                { transform: `rotate(${angle}deg) scale(${scale}) translateX(${distance}px)`, opacity: 0 }
            ],
            {
                duration: duration * 1000,
                easing: "linear",
                fill: "forwards"
            }
        );
    }, [x, y, angle, scale, speed, distance]);

    return (
        <div
            ref={starRef}
            className="absolute h-[2px] w-[100px] bg-gradient-to-r from-transparent via-primary to-transparent rounded-full shadow-[0_0_20px_rgba(var(--primary),0.5)]"
            style={{
                boxShadow: "0 0 20px 2px var(--primary)",
            }}
        />
    );
};

export const ShootingStarsBackground = ({
    className,
}: {
    className?: string;
}) => {
    const [stars, setStars] = useState<ShootingStarProps[]>([]);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const createStar = () => {
            if (!containerRef.current) return;
            const { width, height } = containerRef.current.getBoundingClientRect();

            const newStar = {
                id: Date.now(),
                x: Math.random() * width,
                y: Math.random() * height,
                angle: 45, // Diagonal
                scale: 0.5 + Math.random() * 0.5,
                speed: 100 + Math.random() * 200,
                distance: 200 + Math.random() * 300,
            };

            setStars((prev) => [...prev, newStar]);

            // Cleanup old stars from state to prevent memory leaks (though DOM removal handles visual)
            setTimeout(() => {
                setStars((prev) => prev.filter((s) => s.id !== newStar.id));
            }, (newStar.distance / newStar.speed) * 1000 + 100);
        };

        const interval = setInterval(createStar, 2000); // Create a star every 2 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <div
            ref={containerRef}
            className={cn(
                "absolute inset-0 overflow-hidden pointer-events-none bg-background",
                className
            )}
        >
            {/* Static Stars */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
            <div className="absolute inset-0" style={{
                backgroundImage: `radial-gradient(circle at center, transparent 0%, var(--background) 100%), radial-gradient(circle at 50% 50%, rgba(76, 29, 149, 0.1) 0%, transparent 50%)`
            }}></div>

            {stars.map((star) => (
                <ShootingStar key={star.id} {...star} />
            ))}

            {/* Twinkling Stars */}
            <div className="absolute inset-0">
                {[...Array(50)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute rounded-full bg-white"
                        style={{
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                            width: `${Math.random() * 2 + 1}px`,
                            height: `${Math.random() * 2 + 1}px`,
                            opacity: Math.random() * 0.5 + 0.1,
                            animation: `twinkle ${Math.random() * 5 + 3}s infinite ease-in-out`
                        }}
                    />
                ))}
            </div>
            <style jsx>{`
        @keyframes twinkle {
            0%, 100% { opacity: 0.2; }
            50% { opacity: 0.8; }
        }
       `}</style>
        </div>
    );
};

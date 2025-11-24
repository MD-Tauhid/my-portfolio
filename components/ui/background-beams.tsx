"use client";
import { cn } from "@/lib/utils";
import React, { useEffect, useRef } from "react";

export const BackgroundBeams = ({ className }: { className?: string }) => {
    const beamsRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Optional: Add any interactive mouse movement logic here if desired
        // For now, we rely on CSS animations for smoothness
    }, []);

    return (
        <div
            ref={beamsRef}
            className={cn(
                "absolute inset-0 overflow-hidden [mask-image:radial-gradient(ellipse_at_center,white,transparent)]",
                className
            )}
        >
            <div className="absolute inset-0 bg-background">
                <div className="absolute h-full w-full bg-background [mask-image:radial-gradient(ellipse_at_center,black,transparent)]">
                    {/* Grid Pattern */}
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay"></div>
                </div>

                {/* Animated Beams */}
                <div className="absolute left-1/2 top-1/2 h-[50rem] w-[50rem] -translate-x-1/2 -translate-y-1/2 overflow-visible opacity-30">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-teal-500 opacity-50 blur-[100px] animate-pulse-slow"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-purple-500 to-blue-500 opacity-40 blur-[80px] animate-blob mix-blend-multiply"></div>
                </div>

                {/* Moving Paths */}
                <svg
                    className="absolute inset-0 z-0 h-full w-full pointer-events-none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 100 100"
                    preserveAspectRatio="none"
                >
                    <defs>
                        <linearGradient id="beam-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="rgba(56, 189, 248, 0)" />
                            <stop offset="50%" stopColor="rgba(56, 189, 248, 0.5)" />
                            <stop offset="100%" stopColor="rgba(56, 189, 248, 0)" />
                        </linearGradient>
                    </defs>
                    <path
                        d="M0 100 Q 50 0 100 100"
                        fill="none"
                        stroke="url(#beam-grad)"
                        strokeWidth="0.2"
                        className="animate-beam-1 opacity-50"
                    />
                    <path
                        d="M0 0 Q 50 100 100 0"
                        fill="none"
                        stroke="url(#beam-grad)"
                        strokeWidth="0.2"
                        className="animate-beam-2 opacity-50"
                    />
                </svg>
            </div>
            <style jsx>{`
        @keyframes beam-1 {
            0% { d: path("M0 100 Q 50 0 100 100"); opacity: 0; }
            50% { opacity: 0.5; }
            100% { d: path("M0 100 Q 50 20 100 100"); opacity: 0; }
        }
        .animate-beam-1 {
            animation: beam-move 10s infinite alternate ease-in-out;
        }
        .animate-beam-2 {
            animation: beam-move-reverse 15s infinite alternate ease-in-out;
        }
        @keyframes beam-move {
             0% { transform: translateY(0) scaleY(1); }
             100% { transform: translateY(-20px) scaleY(1.2); }
        }
        @keyframes beam-move-reverse {
             0% { transform: translateY(0) scaleY(1); }
             100% { transform: translateY(20px) scaleY(1.2); }
        }
        .animate-pulse-slow {
            animation: pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        .animate-blob {
            animation: blob 20s infinite;
        }
        @keyframes blob {
            0% { transform: translate(0px, 0px) scale(1); }
            33% { transform: translate(30px, -50px) scale(1.1); }
            66% { transform: translate(-20px, 20px) scale(0.9); }
            100% { transform: translate(0px, 0px) scale(1); }
        }
      `}</style>
        </div>
    );
};

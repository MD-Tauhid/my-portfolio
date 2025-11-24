"use client";

import { cn } from "@/lib/utils";
import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export const TypewriterEffect = ({
    text,
    className,
    cursorClassName,
    speed = 0.05,
}: {
    text: string;
    className?: string;
    cursorClassName?: string;
    speed?: number;
}) => {
    const [displayedText, setDisplayedText] = useState(text[0]);
    const ref = useRef(null);
    const isInView = useInView(ref);

    useEffect(() => {
        if (isInView) {
            let i = 0;
            const timer = setInterval(() => {
                if (i < text.length) {
                    setDisplayedText((prev) => prev + text.charAt(i));
                    i++;
                } else {
                    clearInterval(timer);
                }
            }, speed * 1000);

            return () => {
                clearInterval(timer);
                setDisplayedText(text[0]); // Reset on unmount or re-trigger
            };
        }
    }, [isInView, text, speed]);

    return (
        <div
            className={cn(
                "text-base sm:text-xl md:text-3xl lg:text-5xl font-bold text-center inline-block",
                className
            )}
            ref={ref}
        >
            <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.1 }}
            >
                {displayedText}
            </motion.span>
            <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                    duration: 0.8,
                    repeat: Infinity,
                    repeatType: "reverse",
                }}
                className={cn(
                    "inline-block rounded-sm w-[4px] h-4 md:h-6 lg:h-10 bg-blue-500 ml-1 align-middle",
                    cursorClassName
                )}
            ></motion.span>
        </div>
    );
};

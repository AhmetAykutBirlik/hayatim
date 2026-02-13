"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface FloatingHeart {
    id: number;
    x: number;
    size: number;
    duration: number;
    delay: number;
    color: string;
}

export default function FloatingHearts() {
    const [hearts, setHearts] = useState<FloatingHeart[]>([]);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [cursorHearts, setCursorHearts] = useState<{ id: number; x: number; y: number }[]>([]);

    useEffect(() => {
        // 1. Background floating hearts - MORE DENSE
        const interval = setInterval(() => {
            const colors = ["#ff4d6d", "#ffccd5", "#ff758f", "#c9184a"];
            const newHeart: FloatingHeart = {
                id: Date.now() + Math.random(),
                x: Math.random() * 100,
                size: Math.random() * 15 + 10, // 10-25px
                duration: Math.random() * 4 + 4, // 4-8s
                delay: 0,
                color: colors[Math.floor(Math.random() * colors.length)],
            };
            setHearts((prev) => [...prev.slice(-40), newHeart]); // Keep 40 hearts
        }, 400); // Every 400ms instead of 1000ms

        // 2. Mouse move handler for special effect
        const handleMouseMove = (e: MouseEvent) => {
            if (Math.random() > 0.8) { // Only create sometimes to avoid lag
                setCursorHearts(prev => [...prev.slice(-15), { id: Date.now(), x: e.clientX, y: e.clientY }]);
            }
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => {
            clearInterval(interval);
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return (
        <div className="fixed inset-0 pointer-events-none z-[100] overflow-hidden">
            {/* Background Hearts */}
            <AnimatePresence>
                {hearts.map((heart) => (
                    <motion.div
                        key={heart.id}
                        initial={{ y: "110vh", opacity: 0, x: `${heart.x}vw`, scale: 0.5 }}
                        animate={{
                            y: "-10vh",
                            opacity: [0, 0.6, 0.6, 0],
                            x: [`${heart.x}vw`, `${heart.x + (Math.random() * 15 - 7.5)}vw`],
                            scale: [0.5, 1, 1, 0.5],
                            rotate: [0, 45, -45, 0]
                        }}
                        exit={{ opacity: 0 }}
                        transition={{
                            duration: heart.duration,
                            ease: "linear"
                        }}
                        className="absolute select-none"
                        style={{ fontSize: heart.size, color: heart.color }}
                    >
                        ❤️
                    </motion.div>
                ))}
            </AnimatePresence>

            {/* Mouse Follow Hearts */}
            <AnimatePresence>
                {cursorHearts.map((ch) => (
                    <motion.div
                        key={ch.id}
                        initial={{ opacity: 1, scale: 1, x: ch.x, y: ch.y }}
                        animate={{ opacity: 0, scale: 0, y: ch.y - 100, x: ch.x + (Math.random() * 40 - 20) }}
                        transition={{ duration: 1 }}
                        className="absolute text-red-500 text-xl"
                    >
                        ❤️
                    </motion.div>
                ))}
            </AnimatePresence>
        </div>
    );
}

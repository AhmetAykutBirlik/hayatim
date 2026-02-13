"use client";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";
import { ChevronUp, Heart } from "lucide-react";

export default function Finale() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const triggerConfetti = () => {
        const duration = 3 * 1000;
        const animationEnd = Date.now() + duration;
        const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

        const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;

        const interval: any = setInterval(function () {
            const timeLeft = animationEnd - Date.now();

            if (timeLeft <= 0) {
                return clearInterval(interval);
            }

            const particleCount = 50 * (timeLeft / duration);

            const heart = confetti.shapeFromPath({
                path: 'M167 499c-33-52-87-111-125-131-43-24-118-19-147 10-40 40-52 119-38 181 33 147 259 271 310 271s277-124 310-271c14-62 2-141-38-181-29-29-104-34-147-10-38 20-92 79-125 131z'
            });

            confetti({
                ...defaults,
                particleCount,
                origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
                colors: ['#ff4d6d', '#ffccd5', '#ffffff'],
                shapes: [heart]
            });
            confetti({
                ...defaults,
                particleCount,
                origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
                colors: ['#ff4d6d', '#ffccd5', '#ffffff'],
                shapes: [heart]
            });
        }, 250);
    };

    return (
        <section className="py-24 px-6 text-center border-t border-[#ffccd5]">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
            >
                <h2 className="text-4xl font-bold mb-12 text-[#4a1d1d] font-serif">
                    Seni çok seviyorum Canikom
                </h2>

                <div className="flex flex-col md:flex-row justify-center items-center gap-6">
                    <button
                        onClick={scrollToTop}
                        className="flex items-center gap-2 px-8 py-4 bg-white text-[#c9184a] border-2 border-[#ffccd5] rounded-full font-bold hover:bg-[#fff9f9] transition-all group shadow-md"
                    >
                        <ChevronUp className="group-hover:-translate-y-1 transition-transform" />
                        Tekrar Oku
                    </button>

                    <button
                        onClick={triggerConfetti}
                        className="flex items-center gap-2 px-8 py-4 bg-[#ff4d6d] text-white rounded-full font-bold hover:bg-[#c9184a] transition-all group shadow-lg scale-110"
                    >
                        <Heart className="fill-white group-hover:scale-125 transition-transform" />
                        Kalbimi Gönder 💘
                    </button>
                </div>

                <p className="mt-16 text-gray-400 text-sm">
                    Sonsuza kadar beraber... ❤️
                </p>
            </motion.div>
        </section>
    );
}

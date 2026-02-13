"use client";
import { motion } from "framer-motion";

const tags = [
    "Hayatımın anlamı",
    "Birtanem",
    "Herşeyim",
    "Nartanem Nurtanem",
    "Güzeller güzelimmm",
    "Aşkımmmmmmmmmmmmm",
    "Her bir zerrem",
    "Güzel kalplim",
    "Minnoşum",
    "Minik faremmm",

];

export default function Tags() {
    return (
        <section className="py-12 px-4">
            <div className="flex flex-wrap justify-center gap-3 max-w-2xl mx-auto">
                {tags.map((tag, index) => (
                    <motion.span
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ scale: 1.05, backgroundColor: "#ff4d6d", color: "#ffffff" }}
                        className="px-4 py-2 bg-[#ffccd5] text-[#c9184a] rounded-full text-sm font-medium shadow-sm transition-colors duration-300"
                    >
                        #{tag}
                    </motion.span>
                ))}
            </div>
        </section>
    );
}

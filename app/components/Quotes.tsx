"use client";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const quotes = [
    "Gözlerine bakınca evim gibi hissediyorum.",
    "Seninle her şey daha anlamlı. Sevgililer günümüz kutlu olsun.",
    "Gülüşün içimi ısıtıyor. Sevgililer günümüz kutlu olsun.",
    "Dünyanın en güzel kalbi sende. Sevgililer günümüz kutlu olsun.",
    "Seninle her an feda edilmeye değer. Sevgililer günümüz kutlu olsun.",
    "Hayatımın en güzel 'iyi ki'si sensin. Sevgililer günümüz kutlu olsun.",
    "Kalbim sadece senin için çarpıyor. Sevgililer günümüz kutlu olsun.",
    "Ellerini tutunca dünya duruyor sanki. Sevgililer günümüz kutlu olsun.",
    "Sen benim güneşli günlerimsin iyiki varsınnnn. Sevgililer günümüz kutlu olsun.",
    "Seninle her mevsim bahar. Sevgililer günümüz kutlu olsun.",
    "Aşk sendin, ben sende buldum. Sevgililer günümüz kutlu olsun.",
    "Gözlerin ömre bedel. Sevgililer günümüz kutlu olsun.",
    "Her gün yeniden aşık oluyorum sana. Sevgililer günümüz kutlu olsun.",
    "Sen benim canım, canımsın. Sevgililer günümüz kutlu olsun.",
    "Varlığın huzur veriyor. Sevgililer günümüz kutlu olsun.",
    "Kalbim seninle dolu. Sevgililer günümüz kutlu olsun.",
];

export default function Quotes() {
    return (
        <section className="py-20 px-4 bg-[#fff9f9]">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-12 text-[#c9184a]">Senin İçin...</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {quotes.map((quote, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: (index % 4) * 0.1 }}
                            viewport={{ once: true }}
                            className="glass-card p-6 rounded-3xl flex flex-col items-center text-center gap-4 hover:border-[#ff4d6d]/50 transition-all group"
                        >
                            <Heart className="text-[#ff4d6d] group-hover:scale-110 transition-all fill-[#ffccd5] group-hover:fill-[#ff4d6d]/20" size={28} />
                            <p className="text-[#4a1d1d] font-medium leading-relaxed italic">
                                "{quote}"
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

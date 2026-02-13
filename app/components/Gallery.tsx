"use client";
import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { photos } from "../photos";
import Lightbox from "./Lightbox";

export default function Gallery() {
    const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);

    const openLightbox = (index: number) => setSelectedPhotoIndex(index);

    return (
        <section className="py-20 px-4 bg-white/30">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl font-bold mb-4 text-[#c9184a]">Beraber Güzeliz</h2>
                    <p className="text-gray-600">En sevdiğim karelerden bazıları...</p>
                </motion.div>

                <div className="masonry-grid">
                    {photos.map((photo, index) => (
                        <motion.div
                            key={photo.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.05 }}
                            viewport={{ once: true }}
                            className="group"
                        >
                            <motion.div
                                layoutId={`photo-${photo.id}`}
                                className="relative aspect-square cursor-pointer overflow-hidden rounded-2xl shadow-lg border-2 border-pink-100 bg-[#ffeaed]/30"
                                onClick={() => openLightbox(index)}
                            >
                                <Image
                                    src={photo.src}
                                    alt={photo.alt}
                                    fill
                                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                                    className="object-contain transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <Lightbox
                photos={photos}
                currentIndex={selectedPhotoIndex}
                onClose={() => setSelectedPhotoIndex(null)}
                onNext={() => setSelectedPhotoIndex((selectedPhotoIndex! + 1) % photos.length)}
                onPrev={() => setSelectedPhotoIndex((selectedPhotoIndex! - 1 + photos.length) % photos.length)}
            />
        </section>
    );
}

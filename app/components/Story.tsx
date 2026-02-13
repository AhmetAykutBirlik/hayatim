"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { photos } from "../photos";
import Lightbox from "./Lightbox";

export default function Story() {
    const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);

    // We use the first 6 photos for the story section
    const storyPhotos = photos.slice(1, 7);

    const openLightbox = (indexInPhotos: number) => {
        setSelectedPhotoIndex(indexInPhotos);
    };

    return (
        <section className="py-20 px-6 max-w-4xl mx-auto overflow-hidden">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="text-center mb-16"
            >
                <div className="w-20 h-1 bg-[#ffb3c1] mx-auto rounded-full" />
            </motion.div>

            <div className="space-y-16">
                {storyPhotos.map((photo, index) => (
                    <motion.div
                        key={photo.id}
                        initial={{ opacity: 0, scale: 0.9, y: 30 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="flex justify-center"
                    >
                        <motion.div
                            layoutId={`photo-${photo.id}`}
                            className="w-full relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl cursor-pointer bg-[#ffeaed]/50 group"
                            onClick={() => openLightbox(photo.id - 1)}
                        >
                            <Image
                                src={photo.src}
                                alt={`Hikaye ${index + 1}`}
                                fill
                                className="object-contain transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300 pointer-events-none" />
                        </motion.div>
                    </motion.div>
                ))}
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

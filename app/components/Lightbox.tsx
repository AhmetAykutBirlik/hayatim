"use client";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface Photo {
    src: string;
    alt: string;
    id: number;
}

interface LightboxProps {
    photos: Photo[];
    currentIndex: number | null;
    onClose: () => void;
    onNext: () => void;
    onPrev: () => void;
}

export default function Lightbox({ photos, currentIndex, onClose, onNext, onPrev }: LightboxProps) {
    if (currentIndex === null) return null;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 md:p-10"
                onClick={onClose}
            >
                <button
                    className="absolute top-6 right-6 text-white hover:text-red-400 transition-colors z-[110]"
                    onClick={onClose}
                >
                    <X size={32} />
                </button>

                <button
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors p-2 z-[110]"
                    onClick={(e) => {
                        e.stopPropagation();
                        onPrev();
                    }}
                >
                    <ChevronLeft size={48} />
                </button>

                <button
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors p-2 z-[110]"
                    onClick={(e) => {
                        e.stopPropagation();
                        onNext();
                    }}
                >
                    <ChevronRight size={48} />
                </button>

                <motion.div
                    layoutId={`photo-${photos[currentIndex].id}`}
                    className="relative w-full h-full max-w-4xl max-h-[80vh]"
                    onClick={(e) => e.stopPropagation()}
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={0.2}
                    onDragEnd={(_, info) => {
                        const swipe = info.offset.x;
                        if (swipe < -50) {
                            onNext();
                        } else if (swipe > 50) {
                            onPrev();
                        }
                    }}
                >
                    <Image
                        src={photos[currentIndex].src}
                        alt={photos[currentIndex].alt}
                        fill
                        className="object-contain pointer-events-none"
                        priority
                    />
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
}

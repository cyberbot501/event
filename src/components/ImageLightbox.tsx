"use client";

import { useState, useEffect } from "react";
import Image, { StaticImageData } from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface ImageLightboxProps {
    images: StaticImageData[];
    initialIndex: number;
    isOpen: boolean;
    onClose: () => void;
}

export function ImageLightbox({ images, initialIndex, isOpen, onClose }: ImageLightboxProps) {
    const [currentIndex, setCurrentIndex] = useState(initialIndex);

    useEffect(() => {
        if (isOpen) {
            setCurrentIndex(initialIndex);
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen, initialIndex]);

    if (!isOpen) return null;

    const handlePrevious = (e: React.MouseEvent) => {
        e.stopPropagation();
        setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const handleNext = (e: React.MouseEvent) => {
        e.stopPropagation();
        setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
                onClick={onClose}
            >
                <button
                    onClick={onClose}
                    className="absolute top-6 right-6 z-50 p-2 text-white/70 hover:text-white transition-colors bg-black/50 hover:bg-black/80 rounded-full"
                >
                    <X className="w-8 h-8" />
                </button>

                {images.length > 1 && (
                    <button
                        onClick={handlePrevious}
                        className="absolute left-4 md:left-12 z-50 p-3 text-white/70 hover:text-white transition-colors bg-black/50 hover:bg-black/80 rounded-full"
                    >
                        <ChevronLeft className="w-8 h-8" />
                    </button>
                )}

                <div
                    className="relative w-full max-w-5xl max-h-[85vh] h-full flex items-center justify-center p-4"
                    onClick={(e) => e.stopPropagation()}
                >
                    <motion.div
                        key={currentIndex}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="relative w-full h-full"
                    >
                        <Image
                            src={images[currentIndex]}
                            alt={`Gallery image ${currentIndex + 1}`}
                            fill
                            className="object-contain"
                            priority
                        />
                    </motion.div>
                </div>

                {images.length > 1 && (
                    <button
                        onClick={handleNext}
                        className="absolute right-4 md:right-12 z-50 p-3 text-white/70 hover:text-white transition-colors bg-black/50 hover:bg-black/80 rounded-full"
                    >
                        <ChevronRight className="w-8 h-8" />
                    </button>
                )}

                <div className="absolute bottom-6 left-0 right-0 text-center text-white/70 font-semibold tracking-widest text-sm">
                    {currentIndex + 1} / {images.length}
                </div>
            </motion.div>
        </AnimatePresence>
    );
}

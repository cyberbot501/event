"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ImageLightbox } from '@/components/ImageLightbox';
import church1 from "../assets/legacy/IMG_9267.jpg"
import church2 from "../assets/legacy/work6.jpeg"
import church3 from "../assets/legacy/work7.jpeg"
import church4 from "../assets/legacy/work8.jpeg"


export default function WorkPage() {
    const [lightboxIndex, setLightboxIndex] = useState(0);
    const [isLightboxOpen, setIsLightboxOpen] = useState(false);

    const images = [
        church1,
        church2,
        church3,
        church4

    ];

    return (
        <div className="min-h-screen bg-[#FDF5E6] text-white font-sans overflow-hidden">
            <div className="max-w-5xl mx-auto px-6 py-12 md:py-20">
                <Link href="/" className="inline-flex items-center text-[#C49B5A] text-[10px] md:text-xs font-bold tracking-[0.2em] hover:text-white transition-colors mb-16 md:mb-24 uppercase">
                    <span className="mr-4 text-base">←</span> Back to Home
                </Link>

                <div className="flex flex-col items-center text-center mb-20 md:mb-32 max-w-3xl mx-auto">
                    <h1 className="text-5xl md:text-7xl font-serif font-bold text-[#C49B5A] mb-8" style={{ fontFamily: "Georgia, serif" }}>
                        A Night to Remember
                    </h1>
                    <div className="w-16 h-[2px] bg-[#C49B5A] mb-8"></div>
                    <h2 className="text-xs md:text-sm font-bold tracking-[0.3em] uppercase text-[#C49B5A]">
                        The Grand Celebration
                    </h2>

                    <div className="mt-16 text-[#A0A0A0] text-lg md:text-xl leading-relaxed font-light space-y-8">
                        <p>
                            Beyond ministry, David is a builder and innovator. Through Xanotech, Primus Suite, and Landest.co, he continues to create enterprise solutions that reflect excellence, structure, and forward-thinking leadership. His work spans technology, financial systems, and real estate innovation, all driven by a desire to solve problems and improve lives at scale.
                        </p>
                        <p>
                            At the core of his leadership are the values of impact, generosity, faith, and excellence. He relates with people with rare humility and kindness, making him approachable, trusted, and deeply respected. His presence is calm yet influential, always pointing people back to purpose and to God.
                        </p>
                    </div>
                </div>

                {/* Masonry-style Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-24 md:mb-32">
                    <div className="md:col-span-3 h-[300px] md:h-[450px] cursor-pointer" onClick={() => { setLightboxIndex(0); setIsLightboxOpen(true); }}>
                        <Image priority src={images[0]} alt="Celebration" className="w-full h-full object-cover rounded-2xl md:rounded-3xl md:grayscale md:hover:grayscale-0 transition-all duration-1000 select-none pointer-events-none" />
                    </div>
                    <div className="md:col-span-1 h-[300px] md:h-[400px] cursor-pointer" onClick={() => { setLightboxIndex(1); setIsLightboxOpen(true); }}>
                        <Image priority src={images[1]} alt="Event" className="w-full h-full object-cover rounded-2xl md:rounded-3xl md:grayscale md:hover:grayscale-0 transition-all duration-1000 select-none pointer-events-none" />
                    </div>
                    <div className="md:col-span-1 h-[300px] md:h-[400px] cursor-pointer" onClick={() => { setLightboxIndex(2); setIsLightboxOpen(true); }}>
                        <Image priority src={images[2]} alt="Presents" className="w-full h-full object-cover rounded-2xl md:rounded-3xl md:grayscale md:hover:grayscale-0 transition-all duration-1000 select-none pointer-events-none" />
                    </div>
                    <div className="md:col-span-1 h-[300px] md:h-[400px] cursor-pointer" onClick={() => { setLightboxIndex(3); setIsLightboxOpen(true); }}>
                        <Image priority src={images[3]} alt="Presents" className="w-full h-full object-cover rounded-2xl md:rounded-3xl md:grayscale md:hover:grayscale-0 transition-all duration-1000 select-none pointer-events-none" />
                    </div>

                </div>

                <div className="text-center pb-12 md:pb-20">
                    <p className="text-2xl md:text-3xl font-serif italic text-[#C49B5A]">
                        "The more you praise and celebrate your life, the more there is in life to celebrate."
                    </p>
                </div>
            </div>

            <ImageLightbox
                images={images}
                initialIndex={lightboxIndex}
                isOpen={isLightboxOpen}
                onClose={() => setIsLightboxOpen(false)}
            />
        </div>
    );
}

"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ImageLightbox } from '@/components/ImageLightbox';
import church1 from "../assets/legacy/1D624C6C-4C54-4F8C-8C13-92702FBCC13E.jpg"
import church2 from "../assets/legacy/9B0A5708-5B80-4024-B896-0BE0BF4A7AED.jpg"
import church3 from "../assets/legacy/IMG_5490_jpg.jpg"

export default function LegacyPage() {
    const [lightboxIndex, setLightboxIndex] = useState(0);
    const [isLightboxOpen, setIsLightboxOpen] = useState(false);

    const images = [
        church1,
        church2,
        church3,
    ];

    return (
        <div className="min-h-screen bg-[#FDF5E6] text-white font-sans overflow-hidden">
            <div className="max-w-5xl mx-auto px-6 py-12 md:py-20">
                <Link href="/" className="inline-flex items-center text-[#C49B5A] text-[10px] md:text-xs font-bold tracking-[0.2em] hover:text-white transition-colors mb-16 md:mb-24 uppercase">
                    <span className="mr-4 text-base">←</span> Back to Home
                </Link>

                <div className="flex flex-col items-center text-center mb-20 md:mb-32 max-w-3xl mx-auto">
                    <h1 className="text-5xl md:text-7xl font-serif font-bold text-[#C49B5A] mb-8" style={{ fontFamily: "Georgia, serif" }}>
                        The Footprints We Leave
                    </h1>
                    <div className="w-16 h-[2px] bg-[#C49B5A] mb-8"></div>
                    <h2 className="text-xs md:text-sm font-bold tracking-[0.3em] uppercase text-[#C49B5A]">
                        Legacy & Impact
                    </h2>

                    <div className="mt-16 text-[#A0A0A0] text-lg md:text-xl leading-relaxed font-light space-y-8">
                        <p>
                            His vision of legacy is simple yet profound: a life that proves God can be trusted completely. He often affirms that his life is dedicated to loving God, doing what pleases Him, and living fully for Him until the rapture of the Church.<br /><br />

                            In every sphere, ministry, family, and enterprise, David Travis Uche stands as a living testimony of faith in action, building a legacy that reflects God’s trustworthiness and transformative power.
                        </p>
                    </div>
                </div>

                {/* Masonry-style Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-24 md:mb-32">
                    <div className="md:col-span-3 h-[300px] md:h-[450px] cursor-pointer" onClick={() => { setLightboxIndex(0); setIsLightboxOpen(true); }}>
                        <Image priority src={images[0]} alt="Business legacy" className="w-full h-full object-cover rounded-2xl md:rounded-3xl md:grayscale md:hover:grayscale-0 transition-all duration-1000 select-none pointer-events-none" />
                    </div>
                    <div className="md:col-span-1 h-[300px] md:h-[400px] cursor-pointer" onClick={() => { setLightboxIndex(1); setIsLightboxOpen(true); }}>
                        <Image priority src={images[1]} alt="Success" className="w-full h-full object-cover rounded-2xl md:rounded-3xl md:grayscale md:hover:grayscale-0 transition-all duration-1000 select-none pointer-events-none" />
                    </div>
                    <div className="md:col-span-1 h-[300px] md:h-[400px] cursor-pointer" onClick={() => { setLightboxIndex(2); setIsLightboxOpen(true); }}>
                        <Image priority src={images[2]} alt="Teamwork" className="w-full h-full object-cover rounded-2xl md:rounded-3xl md:grayscale md:hover:grayscale-0 transition-all duration-1000 select-none pointer-events-none" />
                    </div>

                </div>

                <div className="text-center pb-12 md:pb-20">
                    <p className="text-2xl md:text-3xl font-serif italic text-[#C49B5A]">
                        "What you leave behind is not what is engraved in stone monuments, but what is woven into the lives of others."
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

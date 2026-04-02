"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ImageLightbox } from '@/components/ImageLightbox';
import church1 from "../assets/ministry/church.png"
import church2 from "../assets/ministry/church2.png"
import church3 from "../assets/ministry/church3.png"
import church4 from "../assets/ministry/church6.png"
import church5 from "../assets/ministry/min1.jpeg"
import church7 from "../assets/ministry/min3.jpeg"
import church8 from "../assets/ministry/min4.jpeg"
import church9 from "../assets/ministry/min5.jpeg"


export default function MinistryPage() {
    const [lightboxIndex, setLightboxIndex] = useState(0);
    const [isLightboxOpen, setIsLightboxOpen] = useState(false);

    const images = [
        church1,
        church2,
        church3,
        church4,
        church5,
        church7,
        church8,
        church9,
    ];

    return (
        <div className="min-h-screenbg-[#FDF5E6] text-white font-sans overflow-hidden">
            <div className="max-w-5xl mx-auto px-6 py-12 md:py-20">
                <Link href="/" className="inline-flex items-center text-[#C49B5A] text-[10px] md:text-xs font-bold tracking-[0.2em] hover:text-white transition-colors mb-16 md:mb-24 uppercase">
                    <span className="mr-4 text-base">←</span> Back to Home
                </Link>

                <div className="flex flex-col items-center text-center mb-20 md:mb-32 max-w-3xl mx-auto">
                    <h1 className="text-5xl md:text-7xl font-serif font-bold text-[#C49B5A] mb-8" style={{ fontFamily: "Georgia, serif" }}>
                        A Heart for Service
                    </h1>
                    <div className="w-16 h-[2px] bg-[#C49B5A] mb-8"></div>
                    <h2 className="text-xs md:text-sm font-bold tracking-[0.3em] uppercase text-[#C49B5A]">
                        Ministry & Impact
                    </h2>

                    <div className="mt-16 text-[#A0A0A0] text-lg md:text-xl leading-relaxed font-light space-y-8">
                        <p>
                            A defining turning point in his life came during his teenage years, when a deep encounter with the Word of God began to reshape his identity and direction. It was in this season that his faith became personal and transformative, setting the course for the rest of his life. Through the guidance of spiritual leaders and pastors who invested in his growth, his relationship with God deepened and his passion for ministry was ignited.<br /><br />

                            From those formative years, his walk with God has remained central. His life is anchored on trust in God, through every stage of childhood, adolescence, and adulthood. He is known for his deep love for God, his generous heart, and his passion for giving. <br /><br />

                            This devotion naturally flows into his ministry, where he serves as a pastor and currently leads the Global City Youth Church, raising and nurturing young people across the world into a life of faith, purpose, and spiritual maturity.
                        </p>
                        <p>
                            His ministry is marked by simplicity, authenticity, and a strong emphasis on loving God wholeheartedly. He is deeply committed to helping others grow in faith, and his leadership has influenced countless young people to trust God and pursue a life of meaning and devotion. <br /><br />

                            His encounters and moments of honor with spiritual fathers such as Pastor Chris Oyakhilome and his father in the faith, Pastor Chike Ume, remain significant milestones in his journey.
                        </p>
                    </div>
                </div>

                {/* Masonry-style Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-24 md:mb-32">
                    <div className="md:col-span-3 h-[300px] md:h-[450px] cursor-pointer" onClick={() => { setLightboxIndex(0); setIsLightboxOpen(true); }}>
                        <Image priority src={images[0]} alt="Community service" className="w-full h-full object-cover rounded-2xl md:rounded-3xl grayscale hover:grayscale-0 transition-all duration-1000" />
                    </div>
                    <div className="md:col-span-1 h-[300px] md:h-[400px] cursor-pointer" onClick={() => { setLightboxIndex(1); setIsLightboxOpen(true); }}>
                        <Image priority src={images[1]} alt="Mentorship" className="w-full h-full object-cover rounded-2xl md:rounded-3xl grayscale hover:grayscale-0 transition-all duration-1000" />
                    </div>
                    <div className="md:col-span-1 h-[300px] md:h-[400px] cursor-pointer" onClick={() => { setLightboxIndex(2); setIsLightboxOpen(true); }}>
                        <Image priority src={images[2]} alt="Leadership" className="w-full h-full object-cover rounded-2xl md:rounded-3xl grayscale hover:grayscale-0 transition-all duration-1000" />
                    </div>
                    <div className="md:col-span-1 h-[300px] md:h-[400px] cursor-pointer" onClick={() => { setLightboxIndex(3); setIsLightboxOpen(true); }}>
                        <Image priority src={images[3]} alt="Helping hands" className="w-full h-full object-cover rounded-2xl md:rounded-3xl grayscale hover:grayscale-0 transition-all duration-1000 object-top" />
                    </div>
                    <div className="md:col-span-1 h-[300px] md:h-[400px] cursor-pointer" onClick={() => { setLightboxIndex(4); setIsLightboxOpen(true); }}>
                        <Image priority src={images[4]} alt="Helping hands" className="w-full h-full object-cover rounded-2xl md:rounded-3xl grayscale hover:grayscale-0 transition-all duration-1000 object-top" />
                    </div>
                    <div className="md:col-span-1 h-[300px] md:h-[400px] cursor-pointer" onClick={() => { setLightboxIndex(5); setIsLightboxOpen(true); }}>
                        <Image priority src={images[5]} alt="Helping hands" className="w-full h-full object-cover rounded-2xl md:rounded-3xl grayscale hover:grayscale-0 transition-all duration-1000 object-top" />
                    </div>
                    <div className="md:col-span-1 h-[300px] md:h-[400px] cursor-pointer" onClick={() => { setLightboxIndex(6); setIsLightboxOpen(true); }}>
                        <Image priority src={images[6]} alt="Helping hands" className="w-full h-full object-cover rounded-2xl md:rounded-3xl grayscale hover:grayscale-0 transition-all duration-1000 object-top" />
                    </div>
                    <div className="md:col-span-1 h-[300px] md:h-[400px] cursor-pointer" onClick={() => { setLightboxIndex(7); setIsLightboxOpen(true); }}>
                        <Image priority src={images[7]} alt="Helping hands" className="w-full h-full object-cover rounded-2xl md:rounded-3xl grayscale hover:grayscale-0 transition-all duration-1000 object-top" />
                    </div>
                    <div className="md:col-span-1 h-[300px] md:h-[400px] cursor-pointer" onClick={() => { setLightboxIndex(8); setIsLightboxOpen(true); }}>
                        <Image priority src={images[8]} alt="Helping hands" className="w-full h-full object-cover rounded-2xl md:rounded-3xl grayscale hover:grayscale-0 transition-all duration-1000 object-top" />
                    </div>
                </div>

                <div className="text-center pb-12 md:pb-20">
                    <p className="text-2xl md:text-3xl font-serif italic text-[#C49B5A]">
                        "Service to others is the rent you pay for your room here on earth."
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

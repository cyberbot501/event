"use client";

import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { StaticImageData } from 'next/image';

export function HeroCarousel({ images }: { images: (string | StaticImageData)[] }) {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, duration: 40 }, [
        Autoplay({ delay: 5000, stopOnInteraction: false })
    ]);

    const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
    const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

    const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
    const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

    const onSelect = useCallback(() => {
        if (!emblaApi) return;
        setPrevBtnEnabled(emblaApi.canScrollPrev());
        setNextBtnEnabled(emblaApi.canScrollNext());
    }, [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;
        onSelect();
        emblaApi.on('select', onSelect);
        emblaApi.on('reInit', onSelect);
    }, [emblaApi, onSelect]);

    return (
        <div className="absolute inset-0 z-0 overflow-hidden" ref={emblaRef}>
            <div className="flex h-full w-full">
                {images.map((src, i) => (
                    <div className="relative flex-[0_0_100%] min-w-0 h-full" key={i}>
                        <img src={typeof src === 'string' ? src : src.src} alt={`Slide ${i}`} className="absolute inset-0 w-full h-full object-cover object-center" />

                    </div>
                ))}
            </div>

            {/* Dark Shade Overlay */}
            <div className="absolute inset-0 bg-[#0A192F]/60 pointer-events-none"></div>

            {/* Carousel Arrows */}
            <button
                className="absolute hidden md:block left-4 md:left-8 top-1/2 -translate-y-1/2 w-10 h-10 md:w-14 md:h-14 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-md transition-all z-20 border border-white/20"
                onClick={scrollPrev}
                aria-label="Previous slide"
            >
                <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
            </button>
            <button
                className="absolute hidden md:block right-4 md:right-8 top-1/2 -translate-y-1/2 w-10 h-10 md:w-14 md:h-14 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-md transition-all z-20 border border-white/20"
                onClick={scrollNext}
                aria-label="Next slide"
            >
                <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
            </button>
        </div>
    );
}

"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import slide1 from "../assets/slide1.jpeg"
import Image from 'next/image';

export default function RsvpPage() {


    return (
        <section className="w-full relative h-[100vh] flex items-center justify-center overflow-hidden">
            <Image priority src={slide1} alt="Celebration party" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-[#0A192F]/70"></div>
            <div className="relative z-10 text-center flex flex-col items-center">
                <p className="text-[#C49B5A] text-sm font-bold tracking-widest uppercase mb-6">Join the Celebration</p>
                <h2 className="text-5xl md:text-7xl font-serif text-white max-w-4xl leading-tight mb-12">
                    Celebrating a Lambent<span className="italic font-bold text-7xl md:text-8xl"> Legacy </span><br />

                </h2>
                <Link href="https://forms.gle/wQxJ9RKHwYRRfnms9">
                    <Button className="bg-[#C49B5A] hover:bg-[#b08b51] text-white rounded-full px-10 py-6 text-lg font-bold border-none cursor-pointer">
                        RSVP Now
                    </Button>
                </Link>
            </div>
        </section>
    );
}

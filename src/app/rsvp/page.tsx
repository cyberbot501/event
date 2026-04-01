"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Button } from "@/components/ui/button";

export default function RsvpPage() {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <div className="min-h-screen bg-[#FDF5E6] text-[#0A192F] font-sans overflow-hidden">
            <div className="max-w-2xl mx-auto px-6 py-12 md:py-24">
                <Link href="/" className="inline-flex items-center text-[#C49B5A] text-[10px] md:text-xs font-bold tracking-[0.2em] hover:text-[#0A192F] transition-colors mb-16 md:mb-24 uppercase">
                    <span className="mr-4 text-base">←</span> Back to Home
                </Link>

                <div className="flex flex-col items-center text-center mb-16">
                    <h1 className="text-5xl md:text-7xl font-serif font-bold text-[#0A192F] mb-6" style={{ fontFamily: "Georgia, serif" }}>
                        RSVP
                    </h1>
                    <div className="w-16 h-[2px] bg-[#C49B5A] mb-6"></div>
                    <h2 className="text-xs md:text-sm font-bold tracking-[0.3em] uppercase text-[#C49B5A]">
                        Join the Celebration
                    </h2>
                </div>

                {submitted ? (
                    <div className="bg-white p-12 text-center shadow-2xl shadow-[#C49B5A]/10 rounded-2xl border border-[#C49B5A]/20">
                        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                            <svg className="w-10 h-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                        <h3 className="text-3xl font-serif text-[#0A192F] mb-4">Thank You!</h3>
                        <p className="text-[#1D4A77]/70 text-lg mb-8">We have received your RSVP. We cannot wait to celebrate this special milestone with you!</p>
                        <Link href="/">
                            <Button className="bg-[#C49B5A] hover:bg-[#b08b51] text-white rounded-full px-8 py-6 font-bold shadow-lg">
                                Return to Home
                            </Button>
                        </Link>
                    </div>
                ) : (
                    <div className="bg-white p-8 md:p-12 shadow-2xl shadow-[#C49B5A]/10 rounded-2xl border border-[#C49B5A]/20">
                        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                            <div>
                                <label className="block text-sm font-bold tracking-widest uppercase text-[#1D4A77] mb-2">Full Name</label>
                                <input required type="text" className="w-full bg-[#FAF0E6]/50 border border-[#1D4A77]/10 rounded-md p-4 text-[#0A192F] focus:outline-none focus:border-[#C49B5A] transition-colors" placeholder="John Doe" />
                            </div>
                            <div>
                                <label className="block text-sm font-bold tracking-widest uppercase text-[#1D4A77] mb-2">Email Address</label>
                                <input required type="email" className="w-full bg-[#FAF0E6]/50 border border-[#1D4A77]/10 rounded-md p-4 text-[#0A192F] focus:outline-none focus:border-[#C49B5A] transition-colors" placeholder="john@example.com" />
                            </div>
                            <div>
                                <label className="block text-sm font-bold tracking-widest uppercase text-[#1D4A77] mb-2">Will you attend?</label>
                                <select className="w-full bg-[#FAF0E6]/50 border border-[#1D4A77]/10 rounded-md p-4 text-[#0A192F] focus:outline-none focus:border-[#C49B5A] transition-colors">
                                    <option>Yes, I will be there!</option>
                                    <option>Unfortunately, I cannot make it.</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-bold tracking-widest uppercase text-[#1D4A77] mb-2">Message for Travis (Optional)</label>
                                <textarea rows={4} className="w-full bg-[#FAF0E6]/50 border border-[#1D4A77]/10 rounded-md p-4 text-[#0A192F] focus:outline-none focus:border-[#C49B5A] transition-colors" placeholder="Happy Birthday!"></textarea>
                            </div>
                            <Button type="submit" className="w-full mt-4 bg-[#C49B5A] hover:bg-[#b08b51] text-white rounded-full py-7 text-lg font-bold shadow-lg">
                                Submit RSVP
                            </Button>
                        </form>
                    </div>
                )}
            </div>
        </div>
    );
}

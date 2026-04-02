"use client";

import { useState } from "react";

export function Biography() {
    const [expanded, setExpanded] = useState(false);

    return (
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start relative mb-24">
            <div className="md:col-span-3">
                <p className="text-sm font-bold tracking-widest uppercase mb-4 text-[#C49B5A]">Biography</p>
                {/* <h2 className="text-6xl md:text-7xl font-serif font-bold text-[#0A192F]">Travis Uche</h2> */}
            </div>

            <div className="md:col-span-4 md:col-start-5 text-[#1D4A77]/90 text-lg leading-relaxed font-medium flex flex-col items-start">
                <p className="mb-4">With nearly a decade of experience in Software Product Innovation and Development, Travis Uche is a systems thinker, entrepreneur, and versatile leader dedicated to transforming ideas, passion, and purpose into scalable digital solutions that create real-world impact for individuals, businesses, and society.</p>

                {expanded && (
                    <p className="mb-4">He grew up in a family environment shaped by entrepreneurship, alongside siblings who are also enterprise builders, an influence that deeply shaped his mindset toward innovation, ownership, and value creation from an early age. This foundation strengthened his drive to build and lead ventures that solve meaningful problems and stand the test of scale and structure.<br /><br />
                        He currently leads multiple cross-functional teams as Team Lead at Xanotech LTD, an enterprise software development company focused on building robust digital systems for modern organizations. He is also the Founder of Landest.co, a real estate technology platform, and Primus Suite, a Banking-as-a-Service infrastructure designed to power financial innovation and digital banking experiences across emerging and global markets.</p>
                )}

                {!expanded && (
                    <button
                        onClick={() => setExpanded(true)}
                        className="mt-4 text-[#C49B5A] font-bold tracking-widest uppercase text-sm hover:text-[#0A192F] transition-colors border-b-2 border-[#C49B5A] pb-1 cursor-pointer"
                    >
                        Read More
                    </button>
                )}
            </div>

            {expanded && (
                <div className="md:col-span-4 text-[#1D4A77]/90 text-lg leading-relaxed font-medium animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <p>Over the years, he has led the delivery of enterprise software solutions across diverse regions, operating at the intersection of technology, governance, and impact. His expertise spans complex, cross-functional service delivery, regulatory compliance, risk management, financial services operations, cybersecurity, data privacy, electronic banking channels, workforce development, supply chain systems, and human capital management across both public and private sector environments, including federal and state-level engagements.<br /><br />
                        Beyond enterprise execution, Travis serves on the boards of two international financial services organizations, APDP LLC and Grain Coast Capital, where he contributes strategic direction across innovation, structure, and sustainable growth. He is also an alumnus of the Africa for Africa Youth Initiative.<br /><br />
                        At the center of his life is a deep and unwavering faith. He serves God wholeheartedly, and his love for God profoundly influences his values, decisions, and leadership philosophy.<br /><br />
                        He is a serial founder within the African tech ecosystem, continually building enterprise technology innovations that sit at the intersection of infrastructure, intelligence, and inclusion. Through his work and his walk, he reflects a life committed not only to building systems that work, but to building systems—and a legacy—that truly matters.</p>
                    <button
                        onClick={() => setExpanded(false)}
                        className="mt-8 text-[#C49B5A] font-bold tracking-widest uppercase text-sm hover:text-[#0A192F] transition-colors border-b-2 border-[#C49B5A] pb-1 cursor-pointer"
                    >
                        Read Less
                    </button>
                </div>
            )}

            <div className="absolute top-0 right-0 w-1/2 h-[2px] bg-[#C49B5A]/20 hidden md:block mt-8"></div>
        </div>
    );
}

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
                <p className="mb-4">Before the enterprises, David Travis Uche mostly called Travis was a young boy growing up in Lagos, Nigeria. Born to a family of 6 boys in a home where building things was part of everyday life. Entrepreneurship wasn’t something distant or theoretical, it was all around him. Watching his parents & siblings create, take risks, and push boundaries shaped how he saw the world early on. He learned that progress comes from initiative, and that you don’t have to wait for change, you can become it.</p>

                {expanded && (
                    <p className="mb-4">That environment influenced how he approached school and learning. He became naturally curious, always interested in understanding how things worked and how they could be improved. He studied in the University of Lagos, driven by curiosity over time,  led him toward technology. What began as an interest developed into a clear path, and over the past decade, he has grown into a systems thinker and builder, focused on creating digital products that solve real problems.<br /><br />
                        His work has never been just about technology. It has always been about people and impact. Today, he leads teams at Xanotech LTD, where ideas are developed into practical systems that help organizations operate more effectively and grow. He is also the founder behind ventures like Landest.co and Primus Suite, each one born out of a specific gap he identified and chose to address. <br /><br />
                    </p>)}

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
                    <p>Through his work, Travis has engaged across multiple sectors, including financial services and the public sector, contributing to solutions designed to work in real-world environments and stand the test of time. His experience and perspective have also led him to serve at a strategic level, including board roles with international financial organizations such as APDP LLC and Grain Coast Capital, where he helps guide long-term direction and growth. <br /><br />Despite these accomplishments, what stands at the center of his life is his faith in God. It shapes how he thinks, how he leads, and how he makes decisions. His faith is not separate from his work, it is His Life. It gives him clarity in uncertain moments and grounds him in purpose beyond achievement. <br /><br />He also has a deep heart for people, especially youths & children, and is driven by a desire to see others grow and reach their full potential. For him, success is not only about building systems or companies, but about making a meaningful difference in people’s lives.
                        <br /> <br />Travis Uche is still building, continuing to grow ideas, organizations, and impact. But more than anything, he is building a life and legacy rooted in purpose, guided by faith, and committed to creating things that truly matter.</p>

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

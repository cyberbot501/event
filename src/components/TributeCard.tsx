"use client";

import { useState } from "react";

interface TributeCardProps {
    author: string;
    text: string;
    city?: string;
}

export function TributeCard({ author, text, city }: TributeCardProps) {
    const [isExpanded, setIsExpanded] = useState(false);

    // Split by whitespace and filter out empty strings to get accurate word count
    const words = text.trim().split(/\s+/);
    const isLong = words.length > 150;

    const displayText = isExpanded || !isLong
        ? text
        : words.slice(0, 100).join(" ") + "...";

    return (
        <div className="bg-[#1A1A1A] border border-[#C49B5A]/20 p-8 rounded-2xl shadow-xl hover:border-[#C49B5A]/60 transition-colors flex flex-col h-full">
            <p className="text-[#E0E0E0] italic mb-6 leading-relaxed whitespace-pre-wrap">
                "{displayText}"
            </p>
            {isLong && (
                <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="text-[#C49B5A] text-xs font-bold tracking-widest uppercase mb-4 hover:underline text-left self-start"
                >
                    {isExpanded ? "Read Less" : "Read More"}
                </button>
            )}
            <p className="text-[#C49B5A] font-bold tracking-widest text-xs uppercase mt-auto">
                — {author} {city && <span className="opacity-70 text-[10px] ml-1">| {city}</span>}
            </p>
        </div>
    );
}

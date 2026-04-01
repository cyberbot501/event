"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export function MobileMenu({ navLinks }: { navLinks: { name: string; href: string }[] }) {
    const [isOpen, setIsOpen] = useState(false);

    // Prevent scrolling when menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    return (
        <div className="md:hidden">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`text-white hover:text-[#C49B5A] transition-colors relative z-50 ${isOpen ? 'fixed right-8 top-8 text-[#C49B5A]' : ''}`}
                aria-label="Toggle mobile menu"
            >
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    {isOpen ? (
                        <><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></>
                    ) : (
                        <><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></>
                    )}
                </svg>
            </button>

            {/* Mobile Dropdown Overlay */}
            {isOpen && (
                <div className="fixed inset-0 z-40 bg-[#FDF5E6] flex flex-col items-center justify-center">
                    <div className="mb-16 flex flex-col items-center justify-center">
                        <span className="text-[10px] tracking-[0.3em] uppercase text-[#C49B5A] font-semibold mb-[-8px]">Celebrating The</span>
                        <div className="text-4xl font-bold tracking-tighter text-[#C49B5A] leading-none text-center" style={{ fontFamily: "Georgia, serif" }}>
                            Luminous <br />
                            <span className="ml-8 italic">Lambent</span>
                        </div>
                    </div>

                    <nav className="flex flex-col items-center gap-10">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="text-3xl font-serif font-bold hover:text-[#C49B5A] transition-colors uppercase tracking-widest text-[#0A192F]"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </nav>
                </div>
            )}
        </div>
    );
}

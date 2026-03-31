import Link from 'next/link';

export default function LegacyPage() {
    const images = [
        "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1200&q=80",
        "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600&q=80",
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&q=80",
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=800&fit=crop&q=80",
    ];

    return (
        <div className="min-h-screen bg-[#0A0A0A] text-white font-sans overflow-hidden">
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
                            A true legacy unfolds not in grand stone monuments, but within the hearts and minds of the people we touch. It is measured in the quiet confidence of those we've mentored, the resilience of the communities we've built, and the enduring values passed down across generations like a sacred torch.
                        </p>
                        <p>
                            Travis has created a monumental legacy of integrity and grace. His life's work stands as a guiding star for those who seek to navigate the world with purpose and compassion. The impact of his vision will continue to shape families, businesses, and communities long into the beautifully uncertain future.
                        </p>
                    </div>
                </div>

                {/* Masonry-style Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-24 md:mb-32">
                    <div className="md:col-span-3 h-[300px] md:h-[450px]">
                        <img src={images[0]} alt="Business legacy" className="w-full h-full object-cover rounded-2xl md:rounded-3xl grayscale hover:grayscale-0 transition-all duration-1000" />
                    </div>
                    <div className="md:col-span-1 h-[300px] md:h-[400px]">
                        <img src={images[1]} alt="Success" className="w-full h-full object-cover rounded-2xl md:rounded-3xl grayscale hover:grayscale-0 transition-all duration-1000" />
                    </div>
                    <div className="md:col-span-1 h-[300px] md:h-[400px]">
                        <img src={images[2]} alt="Teamwork" className="w-full h-full object-cover rounded-2xl md:rounded-3xl grayscale hover:grayscale-0 transition-all duration-1000" />
                    </div>
                    <div className="md:col-span-1 h-[300px] md:h-[400px]">
                        <img src={images[3]} alt="Portrait" className="w-full h-full object-cover rounded-2xl md:rounded-3xl grayscale hover:grayscale-0 transition-all duration-1000 object-top" />
                    </div>
                </div>

                <div className="text-center pb-12 md:pb-20">
                    <p className="text-2xl md:text-3xl font-serif italic text-[#C49B5A]">
                        "What you leave behind is not what is engraved in stone monuments, but what is woven into the lives of others."
                    </p>
                </div>
            </div>
        </div>
    );
}

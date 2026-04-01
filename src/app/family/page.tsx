import Link from 'next/link';

export default function FamilyPage() {
    const images = [
        "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=1200&q=80",
        "https://images.unsplash.com/photo-1581952976147-5a4d955c4644?w=600&q=80",
        "https://images.unsplash.com/photo-1555541604-030ec607c390?w=600&q=80",
        "https://images.unsplash.com/photo-1476703993599-0035a21b17a9?w=600&h=800&fit=crop&q=80",
    ];

    return (
        <div className="min-h-screen bg-[#FDF5E6] text-white font-sans overflow-hidden">
            <div className="max-w-5xl mx-auto px-6 py-12 md:py-20">
                <Link href="/" className="inline-flex items-center text-[#C49B5A] text-[10px] md:text-xs font-bold tracking-[0.2em] hover:text-white transition-colors mb-16 md:mb-24 uppercase">
                    <span className="mr-4 text-base">←</span> Back to Home
                </Link>

                <div className="flex flex-col items-center text-center mb-20 md:mb-32 max-w-3xl mx-auto">
                    <h1 className="text-5xl md:text-7xl font-serif font-bold text-[#C49B5A] mb-8" style={{ fontFamily: "Georgia, serif" }}>
                        The Ties That Bind
                    </h1>
                    <div className="w-16 h-[2px] bg-[#C49B5A] mb-8"></div>
                    <h2 className="text-xs md:text-sm font-bold tracking-[0.3em] uppercase text-[#C49B5A]">
                        Family & Bonding
                    </h2>

                    <div className="mt-16 text-[#A0A0A0] text-lg md:text-xl leading-relaxed font-light space-y-8">
                        <p>
                            Family is not defined merely by bloodlines, but by the profound connections of the heart. It is the sanctuary where we first learn the meaning of unconditional love, the safe harbor in the storms of life, and the joyful chorus that celebrates our greatest triumphs. The family unit is the ultimate testament to endurance and unity.
                        </p>
                        <p>
                            Travis has always been the anchor of his family, providing wisdom and unwavering support. Through countless dinners, heartfelt conversations, and quiet moments of shared understanding, he has built a legacy of togetherness that will echo across generations.
                        </p>
                    </div>
                </div>

                {/* Masonry-style Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-24 md:mb-32">
                    <div className="md:col-span-3 h-[300px] md:h-[450px]">
                        <img src={images[0]} alt="Family gathering" className="w-full h-full object-cover rounded-2xl md:rounded-3xl grayscale hover:grayscale-0 transition-all duration-1000" />
                    </div>
                    <div className="md:col-span-1 h-[300px] md:h-[400px]">
                        <img src={images[1]} alt="Family laughing" className="w-full h-full object-cover rounded-2xl md:rounded-3xl grayscale hover:grayscale-0 transition-all duration-1000" />
                    </div>
                    <div className="md:col-span-1 h-[300px] md:h-[400px]">
                        <img src={images[2]} alt="Parents" className="w-full h-full object-cover rounded-2xl md:rounded-3xl grayscale hover:grayscale-0 transition-all duration-1000" />
                    </div>
                    <div className="md:col-span-1 h-[300px] md:h-[400px]">
                        <img src={images[3]} alt="Portrait" className="w-full h-full object-cover rounded-2xl md:rounded-3xl grayscale hover:grayscale-0 transition-all duration-1000 object-top" />
                    </div>
                </div>

                <div className="text-center pb-12 md:pb-20">
                    <p className="text-2xl md:text-3xl font-serif italic text-[#C49B5A]">
                        "In family life, love is the oil that eases friction, the cement that binds closer together, and the music that brings harmony."
                    </p>
                </div>
            </div>
        </div>
    );
}

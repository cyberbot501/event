import Link from 'next/link';

export default function BirthdayPage() {
    const images = [
        "https://images.unsplash.com/photo-1530103862676-de3c9de59a9f?w=1200&q=80",
        "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&q=80",
        "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=600&q=80",
        "https://images.unsplash.com/photo-1566737236500-c8ac43014a67?w=600&h=800&fit=crop&q=80",
    ];

    return (
        <div className="min-h-screen bg-[#FDF5E6] text-white font-sans overflow-hidden">
            <div className="max-w-5xl mx-auto px-6 py-12 md:py-20">
                <Link href="/" className="inline-flex items-center text-[#C49B5A] text-[10px] md:text-xs font-bold tracking-[0.2em] hover:text-white transition-colors mb-16 md:mb-24 uppercase">
                    <span className="mr-4 text-base">←</span> Back to Home
                </Link>

                <div className="flex flex-col items-center text-center mb-20 md:mb-32 max-w-3xl mx-auto">
                    <h1 className="text-5xl md:text-7xl font-serif font-bold text-[#C49B5A] mb-8" style={{ fontFamily: "Georgia, serif" }}>
                        A Night to Remember
                    </h1>
                    <div className="w-16 h-[2px] bg-[#C49B5A] mb-8"></div>
                    <h2 className="text-xs md:text-sm font-bold tracking-[0.3em] uppercase text-[#C49B5A]">
                        The Grand Celebration
                    </h2>

                    <div className="mt-16 text-[#A0A0A0] text-lg md:text-xl leading-relaxed font-light space-y-8">
                        <p>
                            To celebrate a birthday is to honor the glorious gift of life itself. It is a triumphant pause on the relentless march of time, a moment where we gather under the golden glow of joy to recognize the beauty of existence, the hurdles overcome, and the radiant promise of the road that stretches out ahead.
                        </p>
                        <p>
                            This celebration for Travis is more than just marking a chronological milestone; it is a profound expression of gratitude from everyone who has been graced by his presence. Tonight, we toast to health, to prosperity, and to the endless wellspring of love that makes every single day a masterpiece.
                        </p>
                    </div>
                </div>

                {/* Masonry-style Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-24 md:mb-32">
                    <div className="md:col-span-3 h-[300px] md:h-[450px]">
                        <img src={images[0]} alt="Celebration" className="w-full h-full object-cover rounded-2xl md:rounded-3xl grayscale hover:grayscale-0 transition-all duration-1000" />
                    </div>
                    <div className="md:col-span-1 h-[300px] md:h-[400px]">
                        <img src={images[1]} alt="Event" className="w-full h-full object-cover rounded-2xl md:rounded-3xl grayscale hover:grayscale-0 transition-all duration-1000" />
                    </div>
                    <div className="md:col-span-1 h-[300px] md:h-[400px]">
                        <img src={images[2]} alt="Presents" className="w-full h-full object-cover rounded-2xl md:rounded-3xl grayscale hover:grayscale-0 transition-all duration-1000" />
                    </div>
                    <div className="md:col-span-1 h-[300px] md:h-[400px]">
                        <img src={images[3]} alt="Party" className="w-full h-full object-cover rounded-2xl md:rounded-3xl grayscale hover:grayscale-0 transition-all duration-1000 object-top" />
                    </div>
                </div>

                <div className="text-center pb-12 md:pb-20">
                    <p className="text-2xl md:text-3xl font-serif italic text-[#C49B5A]">
                        "The more you praise and celebrate your life, the more there is in life to celebrate."
                    </p>
                </div>
            </div>
        </div>
    );
}

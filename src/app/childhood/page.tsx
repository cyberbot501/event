import Link from 'next/link';

export default function ChildhoodPage() {
    const images = [
        "https://images.unsplash.com/photo-1519689680058-324335c77eba?w=1200&q=80",
        "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=600&q=80",
        "https://images.unsplash.com/photo-1438232992991-995b7058bbb3?w=600&q=80",
        "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=600&h=800&fit=crop&q=80",
    ];

    return (
        <div className="min-h-screen bg-[#FDF5E6] text-white font-sans overflow-hidden">
            <div className="max-w-5xl mx-auto px-6 py-12 md:py-20">
                <Link href="/" className="inline-flex items-center text-[#C49B5A] text-[10px] md:text-xs font-bold tracking-[0.2em] hover:text-white transition-colors mb-16 md:mb-24 uppercase">
                    <span className="mr-4 text-base">←</span> Back to Home
                </Link>

                <div className="flex flex-col items-center text-center mb-20 md:mb-32 max-w-3xl mx-auto">
                    <h1 className="text-5xl md:text-7xl font-serif font-bold text-[#C49B5A] mb-8" style={{ fontFamily: "Georgia, serif" }}>
                        The Dawn of Life
                    </h1>
                    <div className="w-16 h-[2px] bg-[#C49B5A] mb-8"></div>
                    <h2 className="text-xs md:text-sm font-bold tracking-[0.3em] uppercase text-[#C49B5A]">
                        Childhood Memories
                    </h2>

                    <div className="mt-16 text-[#A0A0A0] text-lg md:text-xl leading-relaxed font-light space-y-8">
                        <p>
                            He grew up in Lagos, Nigeria, in a simple and grounded environment that shaped his early understanding of life, discipline, and dependence on God. From childhood, he carried a quiet but strong leadership presence, reserved in nature, yet deeply observant, intentional, and driven. Even as a young boy, he demonstrated an entrepreneurial mindset, influenced by a family culture rooted in love, structure, and enterprise.
                        </p>
                    </div>
                </div>

                {/* Masonry-style Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-24 md:mb-32">
                    {/* Top spanning width */}
                    <div className="md:col-span-3 h-[300px] md:h-[450px]">
                        <img src={images[0]} alt="Childhood moment" className="w-full h-full object-cover rounded-2xl md:rounded-3xl grayscale hover:grayscale-0 transition-all duration-1000" />
                    </div>
                    {/* Bottom three */}
                    <div className="md:col-span-1 h-[300px] md:h-[400px]">
                        <img src={images[1]} alt="Family" className="w-full h-full object-cover rounded-2xl md:rounded-3xl grayscale hover:grayscale-0 transition-all duration-1000" />
                    </div>
                    <div className="md:col-span-1 h-[300px] md:h-[400px]">
                        <img src={images[2]} alt="Friends" className="w-full h-full object-cover rounded-2xl md:rounded-3xl grayscale hover:grayscale-0 transition-all duration-1000" />
                    </div>
                    <div className="md:col-span-1 h-[300px] md:h-[400px]">
                        <img src={images[3]} alt="Portrait" className="w-full h-full object-cover rounded-2xl md:rounded-3xl grayscale hover:grayscale-0 transition-all duration-1000 object-top" />
                    </div>
                </div>

                <div className="text-center pb-12 md:pb-20">
                    <p className="text-2xl md:text-3xl font-serif italic text-[#C49B5A]">
                        "To carry your childhood with you is to never truly grow old."
                    </p>
                </div>
            </div>
        </div>
    );
}

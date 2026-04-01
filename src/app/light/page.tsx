import Link from 'next/link';

export default function LightPage() {
    return (
        <div className="min-h-screen bg-[#FDF5E6] text-[#0A192F] font-sans overflow-hidden">
            <div className="max-w-5xl mx-auto px-6 py-12 md:py-20">
                <Link href="/" className="inline-flex items-center text-[#C49B5A] text-[10px] md:text-xs font-bold tracking-[0.2em] hover:text-[#0A192F] transition-colors mb-16 md:mb-24 uppercase">
                    <span className="mr-4 text-base">←</span> Back to Home
                </Link>

                <div className="flex flex-col items-center text-center mb-20 md:mb-32 max-w-3xl mx-auto">
                    <h1 className="text-5xl md:text-7xl font-serif font-bold text-[#C49B5A] mb-8" style={{ fontFamily: "Georgia, serif" }}>
                        The Light
                    </h1>
                    <div className="w-16 h-[2px] bg-[#C49B5A] mb-8"></div>

                    <div className="mt-16 text-[#1D4A77] text-lg md:text-xl leading-relaxed font-light space-y-8">
                        <p>Always putting family and community first, creating a welcoming space for everyone. The light is the ultimate destination—the manifestation of love, joy, and peace radiating outward to touch the lives of all those we encounter.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

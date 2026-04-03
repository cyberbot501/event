import Link from 'next/link';
import Image from 'next/image';
import flameImage from '../assets/min.jpeg';

export default function FlamePage() {
    return (
        <div className="min-h-screen bg-[#FDF5E6] text-[#0A192F] font-sans overflow-hidden">
            <div className="max-w-5xl mx-auto px-6 py-12 md:py-20">
                <Link href="/" className="inline-flex items-center text-[#C49B5A] text-[10px] md:text-xs font-bold tracking-[0.2em] hover:text-[#0A192F] transition-colors mb-16 md:mb-24 uppercase">
                    <span className="mr-4 text-base">←</span> Back to Home
                </Link>

                <div className="flex flex-col items-center text-center mb-20 md:mb-32 max-w-3xl mx-auto">
                    <h1 className="text-5xl md:text-7xl font-serif font-bold text-[#C49B5A] mb-8" style={{ fontFamily: "Georgia, serif" }}>
                        The Flame
                    </h1>
                    <div className="w-16 h-[2px] bg-[#C49B5A] mb-8"></div>

                    <div className="mt-16 text-[#1D4A77] text-lg md:text-xl leading-relaxed font-light space-y-8">
                        <p>Guided by wisdom, patience, and a vision that inspires generations. The flame represents the steady, unyielding passion that sustains our efforts even when the winds of challenge blow fiercely against us.</p>
                        <p>Travis’s flame grew from his days in the campus ministry of Loveworld a.k.a Christ Embassy. From the streets of the university of Lagos. He heard the cry of the world around him & he answered the call. This led to a track record of exploits & impact through faith, outreaches & kingdom finance.   </p>
                    </div>
                </div>

                <div className="flex justify-center mt-12 w-full max-w-4xl mx-auto">
                    <Image src={flameImage} alt="The Flame" className="rounded-lg shadow-2xl object-cover w-full h-[400px] md:h-[600px]" priority />
                </div>
            </div>
        </div>
    );
}

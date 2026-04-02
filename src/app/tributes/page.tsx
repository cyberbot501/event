import Link from 'next/link';
import { supabase } from '@/lib/supabase';
import image1 from "../assets/slide4.jpeg";
import image2 from "@/app/assets/slide3.jpeg";
import image3 from "@/app/assets/slide2.jpeg";
import image4 from "@/app/assets/slide1.jpeg";
import Image from 'next/image';

export const dynamic = 'force-dynamic';

export default async function TributesPage() {
    const images = [
        image1,
        image2,
        image3,
        image4,
    ];

    const { data: dbTributes } = await supabase
        .from('tributes')
        .select('*')
        .order('created_at', { ascending: false });

    const hardcodedTributes = [
        { author: "Michael P.", city: "", text: "Travis has always been the compass that guided our family through storms and sunshine alike. His faith is unshakeable." },
        { author: "Sarah L.", city: "", text: "A truly luminous man. His ability to make everyone in a room feel seen and valued is an extraordinary gift." },
        { author: "Elijah C.", city: "", text: "From childhood lessons to profound life advice, Travis has shaped the man I am today. Thank you for everything." },
        { author: "Grace & Family", city: "", text: "We love you beyond measure! Your heart for service has inspired us all to give freely and love deeply." },
    ];

    const combinedTributes = [
        ...(dbTributes || []).map((t: any) => ({ author: t.name, text: t.message, city: t.city })),
        ...hardcodedTributes
    ];

    return (
        <div className="min-h-screen bg-[#FDF5E6] text-white font-sans overflow-hidden">
            <div className="max-w-5xl mx-auto px-6 py-12 md:py-20">
                <Link href="/" className="inline-flex items-center text-[#C49B5A] text-[10px] md:text-xs font-bold tracking-[0.2em] hover:text-white transition-colors mb-16 md:mb-24 uppercase">
                    <span className="mr-4 text-base">←</span> Back to Home
                </Link>

                <div className="flex flex-col items-center text-center mb-20 md:mb-32 max-w-3xl mx-auto">
                    <h1 className="text-5xl md:text-7xl font-serif font-bold text-[#C49B5A] mb-8" style={{ fontFamily: "Georgia, serif" }}>
                        Voices of Love
                    </h1>
                    <div className="w-16 h-[2px] bg-[#C49B5A] mb-8"></div>
                    <h2 className="text-xs md:text-sm font-bold tracking-[0.3em] uppercase text-[#C49B5A]">
                        Tributes & Testimonials
                    </h2>

                    <div className="mt-16 text-[#A0A0A0] text-lg md:text-xl leading-relaxed font-light space-y-8">
                        <p>
                            It is said that the true measure of a man’s life is found in the joy and comfort he brings to the hearts of others. Travis has touched countless lives through his kindness, his enduring patience, and his genuine desire to see everyone succeed. The tributes shared here represent just a fragment of the immeasurable love his community holds for him.
                        </p>
                        <p>
                            Every spoken word, every written letter, and every shared memory serves as a brilliant thread in the breathtaking tapestry of his legacy. As we celebrate tonight, these voices stand together in a harmonious chorus, bound by gratitude and deep admiration.
                        </p>
                    </div>
                </div>

                {/* Testimonial Block */}
                <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mb-24 md:mb-32">
                    {combinedTributes.map((tribute, idx) => (
                        <div key={idx} className="bg-[#1A1A1A] border border-[#C49B5A]/20 p-8 rounded-2xl shadow-xl hover:border-[#C49B5A]/60 transition-colors">
                            <p className="text-[#E0E0E0] italic mb-6 leading-relaxed">"{tribute.text}"</p>
                            <p className="text-[#C49B5A] font-bold tracking-widest text-xs uppercase">
                                — {tribute.author} {tribute.city && <span className="opacity-70 text-[10px] ml-1">| {tribute.city}</span>}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Masonry-style Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-24 md:mb-32">
                    <div className="md:col-span-3 h-[300px] md:h-[450px]">
                        <Image src={images[0]} alt="Family sharing a moment" className="w-full h-full object-cover rounded-2xl md:rounded-3xl grayscale hover:grayscale-0 transition-all duration-1000" />
                    </div>
                    <div className="md:col-span-1 h-[300px] md:h-[400px]">
                        <Image src={images[1]} alt="Friendship" className="w-full h-full object-cover rounded-2xl md:rounded-3xl grayscale hover:grayscale-0 transition-all duration-1000" />
                    </div>
                    <div className="md:col-span-1 h-[300px] md:h-[400px]">
                        <Image src={images[2]} alt="Laughs" className="w-full h-full object-cover rounded-2xl md:rounded-3xl grayscale hover:grayscale-0 transition-all duration-1000" />
                    </div>
                    <div className="md:col-span-1 h-[300px] md:h-[400px]">
                        <Image src={images[3]} alt="Portrait" className="w-full h-full object-cover rounded-2xl md:rounded-3xl grayscale hover:grayscale-0 transition-all duration-1000 object-top" />
                    </div>
                </div>

                <div className="text-center pb-12 md:pb-20">
                    <p className="text-2xl md:text-3xl font-serif italic text-[#C49B5A]">
                        "Love leaves a memory no one can steal."
                    </p>
                </div>
            </div>
        </div>
    );
}

import Link from 'next/link';
import { Gift, CreditCard, ArrowLeft, Watch, Smartphone, ShoppingBag, Shirt } from 'lucide-react';
import Image from 'next/image';
import jbl from '../assets/jbl.jpeg';
import armaf from '../assets/pef.jpeg';

export default function GiftRegistryPage() {
    return (
        <div className="min-h-screen bg-[#FDF5E6] text-[#0A192F] font-sans selection:bg-[#1D4A77] selection:text-white relative overflow-hidden">
            <div className="max-w-4xl mx-auto px-6 py-12 md:py-24">
                <Link href="/" className="inline-flex items-center text-[#C49B5A] text-xs font-bold tracking-[0.2em] hover:text-[#0A192F] transition-colors mb-16 uppercase">
                    <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
                </Link>

                <div className="flex flex-col items-center text-center -mt-4 mb-20 max-w-2xl mx-auto">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-8 shadow-md border border-[#C49B5A]/20 transform hover:rotate-12 transition-transform duration-500">
                        <Gift className="w-8 h-8 text-[#C49B5A]" />
                    </div>
                    <h1 className="text-5xl md:text-7xl font-serif text-[#0A192F] mb-6 leading-tight">
                        Gift <span className="italic text-[#C49B5A]">Registry</span>
                    </h1>
                    <div className="w-16 h-[2px] bg-[#C49B5A] mb-8"></div>
                    <p className="text-[#1D4A77]/80 text-lg md:text-xl leading-relaxed font-light">
                        Send a Gift to the Celebrant
                    </p>
                </div>

                <div className="max-w-4xl mx-auto flex flex-col gap-8">
                    {/* Big Wishlist Box */}
                    <div className="bg-white border border-[#C49B5A]/20 p-8 md:p-12 rounded-2xl shadow-xl transition-all duration-300 relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-1 bg-[#C49B5A]"></div>

                        <div className="flex items-center gap-4 mb-10">
                            <div className="w-12 h-12 rounded-full bg-[#1D4A77]/5 flex items-center justify-center">
                                <Gift className="w-6 h-6 text-[#C49B5A]" />
                            </div>
                            <h2 className="text-3xl font-serif text-[#0A192F]">Wish List</h2>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mb-12">
                            {/* JBL Speaker */}
                            <div className="group">
                                <div className="relative aspect-square mb-4 overflow-hidden rounded-xl bg-[#FAF0E6] flex items-center justify-center p-4">
                                    <Image
                                        priority
                                        src={jbl}
                                        alt="JBL Charge 6 Bluetooth Speaker"
                                        className="object-contain w-full h-full transition-transform duration-500 group-hover:scale-110"
                                    />
                                </div>
                                <h4 className="text-sm font-bold tracking-widest uppercase text-[#C49B5A] mb-1">Electronics</h4>
                                <p className="text-lg font-serif text-[#0A192F]">JBL Charge 6 Bluetooth Speaker</p>
                            </div>

                            {/* Armaf Cologne */}
                            <div className="group">
                                <div className="relative aspect-square mb-4 overflow-hidden rounded-xl bg-[#FAF0E6] flex items-center justify-center p-4">
                                    <Image
                                        priority
                                        src={armaf}
                                        alt="Armaf Club De Nuit Precieux 1 Cologne"
                                        className="object-contain w-full h-full transition-transform duration-500 group-hover:scale-110"
                                    />
                                </div>
                                <h4 className="text-sm font-bold tracking-widest uppercase text-[#C49B5A] mb-1">Fragrance</h4>
                                <p className="text-lg font-serif text-[#0A192F]">Armaf Club De Nuit Precieux 1 Cologne for Men</p>
                            </div>
                        </div>

                        <div className="border-t border-[#C49B5A]/10 pt-10">
                            <h3 className="text-xl font-serif text-[#0A192F] mb-6 flex items-center gap-2">
                                Other Gift Items
                            </h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {[
                                    { icon: <ShoppingBag className="w-4 h-4" />, text: "More Perfumes" },
                                    { icon: <Smartphone className="w-4 h-4" />, text: "Gadgets" },
                                    { icon: <Watch className="w-4 h-4" />, text: "Wrist Watches" },
                                    { icon: <Gift className="w-4 h-4" />, text: "Accessories" },
                                    { icon: <ShoppingBag className="w-4 h-4" />, text: "Shoe Size (42/43)" },
                                    { icon: <Shirt className="w-4 h-4" />, text: "Suit Size (Eur: 52)" },
                                    { icon: <Shirt className="w-4 h-4" />, text: "Shirt Size (L, XL)" },
                                ].map((item, index) => (
                                    <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-[#FAF0E6]/50 border border-[#C49B5A]/5 text-[#1D4A77]/80 hover:bg-[#FAF0E6] hover:border-[#C49B5A]/20 transition-all">
                                        <div className="text-[#C49B5A]">{item.icon}</div>
                                        <span className="text-sm font-medium">{item.text}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Small Boxes: Bank & Crypto */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Bank Transfer Details */}
                        <div className="bg-[#FAF0E6] border border-[#C49B5A]/20 p-8 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm">
                                    <CreditCard className="w-5 h-5 text-[#1D4A77]" />
                                </div>
                                <h3 className="text-xl font-serif text-[#0A192F]">Bank Transfer</h3>
                            </div>

                            <div className="space-y-4">
                                <div>
                                    <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#C49B5A] mb-1">Account Name</p>
                                    <p className="font-medium text-[#0A192F]">David Uche</p>
                                </div>
                                <div>
                                    <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#C49B5A] mb-1">Account Number</p>
                                    <p className="font-mono text-lg font-medium text-[#0A192F]">024 2410 867</p>
                                </div>
                                <div>
                                    <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#C49B5A] mb-1">Bank Name</p>
                                    <p className="font-medium text-[#0A192F]">WEMA Bank</p>
                                </div>
                            </div>
                        </div>

                        {/* Crypto Details */}
                        <div className="bg-[#1D4A77] text-white border border-[#1D4A77]/20 p-8 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shadow-sm">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5 text-[#C49B5A]">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-serif text-white">Digital Assets</h3>
                            </div>

                            <div className="space-y-4">
                                <div>
                                    <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#C49B5A] mb-1">Espees Wallet Via KingsChat </p>
                                    <p className="font-mono text-xs sm:text-sm text-[#FDF5E6] break-all">@travisuche</p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <div className="text-center mt-24 mb-12">
                    <p className="text-2xl md:text-3xl font-serif italic text-[#C49B5A]">
                        "Your generosity lights up our hearts."
                    </p>
                    <p className="mt-4 text-sm tracking-widest uppercase font-bold text-[#1D4A77]/50">Thank You</p>
                </div>
            </div>
        </div>
    );
}

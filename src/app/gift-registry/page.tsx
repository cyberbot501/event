import Link from 'next/link';
import { Gift, CreditCard, ArrowLeft } from 'lucide-react';

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
                    <div className="bg-white border text-center border-[#C49B5A]/20 p-12 md:p-16 rounded-2xl shadow-xl hover:shadow-2xl hover:border-[#C49B5A]/60 transition-all duration-300 relative overflow-hidden group">
                        <div className="absolute top-0 left-0 w-full h-1 bg-[#C49B5A]"></div>

                        <div className="flex justify-center mb-6">
                            <div className="w-16 h-16 rounded-full bg-[#1D4A77]/5 flex items-center justify-center">
                                <Gift className="w-8 h-8 text-[#C49B5A]" />
                            </div>
                        </div>

                        <h2 className="text-4xl font-serif text-[#0A192F] mb-6">Wish List</h2>
                        <h3 className="text-2xl font-bold uppercase tracking-widest text-[#C49B5A] mb-4">Coming Soon</h3>
                        <p className="text-[#1D4A77]/70 text-lg">Curated gifts to celebrate this milestone will be available shortly.</p>
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
                                    <p className="font-medium text-[#0A192F]">Travis Uche Family Trust</p>
                                </div>
                                <div>
                                    <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#C49B5A] mb-1">Account Number</p>
                                    <p className="font-mono text-lg font-medium text-[#0A192F]">1234 5678 9012</p>
                                </div>
                                <div>
                                    <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#C49B5A] mb-1">Bank Name</p>
                                    <p className="font-medium text-[#0A192F]">Global Heritage Bank</p>
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
                                    <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#C49B5A] mb-1">Bitcoin (BTC)</p>
                                    <p className="font-mono text-xs sm:text-sm text-[#FDF5E6] break-all">bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh</p>
                                </div>
                                <div>
                                    <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#C49B5A] mb-1">Ethereum (ETH / ERC20)</p>
                                    <p className="font-mono text-xs sm:text-sm text-[#FDF5E6] break-all">0x71C7656EC7ab88b098defB751B7401B5f6d8976F</p>
                                </div>
                                <div>
                                    <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#C49B5A] mb-1">USDT (TRC20)</p>
                                    <p className="font-mono text-xs sm:text-sm text-[#FDF5E6] break-all">T9yD14Nj9j7xAB4dbGeiX9h8unkKHxuWwb</p>
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

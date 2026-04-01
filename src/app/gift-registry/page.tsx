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

                <div className="max-w-2xl mx-auto grid grid-cols-1 gap-8">
                    {/* Bank Transfer Details */}
                    <div className="bg-white border text-center border-[#C49B5A]/20 p-10 md:p-12 rounded-2xl shadow-xl hover:shadow-2xl hover:border-[#C49B5A]/60 transition-all duration-300 relative overflow-hidden group">
                        <div className="absolute top-0 left-0 w-full h-1 bg-[#C49B5A]"></div>

                        <div className="flex justify-center mb-6">
                            <div className="w-12 h-12 rounded-full bg-[#1D4A77]/5 flex items-center justify-center">
                                <CreditCard className="w-6 h-6 text-[#1D4A77]" />
                            </div>
                        </div>

                        <h2 className="text-2xl font-serif text-[#0A192F] mb-8">Bank Transfer</h2>

                        <div className="space-y-6 text-left max-w-sm mx-auto">
                            <div className="group/item">
                                <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#C49B5A] mb-2 transition-colors group-hover/item:text-[#1D4A77]">Account Name</p>
                                <p className="text-xl text-[#0A192F] font-medium border-b border-gray-100 pb-2">Travis Uche Family Trust</p>
                            </div>

                            <div className="group/item">
                                <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#C49B5A] mb-2 transition-colors group-hover/item:text-[#1D4A77]">Account Number</p>
                                <p className="text-xl font-mono text-[#0A192F] tracking-wider border-b border-gray-100 pb-2">1234 5678 9012</p>
                            </div>

                            <div className="group/item">
                                <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#C49B5A] mb-2 transition-colors group-hover/item:text-[#1D4A77]">Bank Name</p>
                                <p className="text-xl text-[#0A192F] font-medium border-b border-gray-100 pb-2">Global Heritage Bank</p>
                            </div>

                            {/* <div className="pt-4 group/item">
                                <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#C49B5A] mb-2 transition-colors group-hover/item:text-[#1D4A77]">Routing Number / Sort Code</p>
                                <p className="text-lg text-[#1D4A77]/70 font-mono">098-765</p>
                            </div> */}
                        </div>
                    </div>

                    {/* Zelle/CashApp Alternative */}
                    <div className="bg-white border text-center border-[#C49B5A]/10 p-8 rounded-2xl shadow-md transition-all duration-300">
                        <h3 className="text-lg font-bold uppercase tracking-widest text-[#0A192F] mb-4">gift wishlist</h3>
                        <p className="text-[#1D4A77]/70 mb-4 text-sm md:text-base">coming soon</p>
                        {/* <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
                            <div className="text-left w-full sm:w-auto p-4 bg-[#FDF5E6]/50 rounded-lg border border-[#C49B5A]/10 hover:border-[#C49B5A]/30 transition-colors">
                                <p className="text-[10px] font-bold tracking-widest uppercase text-[#C49B5A] mb-1">CashApp</p>
                                <p className="text-lg font-mono font-medium text-[#0A192F]">$TravisFamily</p>
                            </div>
                            <div className="text-left w-full sm:w-auto p-4 bg-[#FDF5E6]/50 rounded-lg border border-[#C49B5A]/10 hover:border-[#C49B5A]/30 transition-colors">
                                <p className="text-[10px] font-bold tracking-widest uppercase text-[#C49B5A] mb-1">Zelle</p>
                                <p className="text-lg font-mono font-medium text-[#0A192F]">gifts@travisuche.com</p>
                            </div>
                        </div> */}
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

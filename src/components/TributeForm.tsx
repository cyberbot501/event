"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { supabase } from "@/lib/supabase";

export function TributeForm() {
    const [formData, setFormData] = useState({ name: '', city: '', message: '' });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const { error } = await supabase.from('tributes').insert([
                { name: formData.name, city: formData.city, message: formData.message }
            ]);

            if (error) {
                console.error('Error submitting tribute:', error);
                alert('Failed to submit tribute. Please try again.');
            } else {
                setIsSubmitted(true);
            }
        } catch (err) {
            console.error('Error:', err);
            alert('An unexpected error occurred.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className="py-24 px-4 md:px-8 max-full md:max-w-4xl mx-auto relative z-10">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-[#C49B5A]/20">
                {!isSubmitted ? (
                    <>
                        <div className="text-center mb-10">
                            <p className="text-xs font-bold tracking-widest uppercase mb-4 text-[#C49B5A]">Share a Memory</p>
                            <h2 className="text-4xl md:text-5xl font-serif text-[#0A192F] mb-4">Write a Tribute</h2>
                            <p className="text-[#1D4A77]/70">We invite you to share your Lambent testimony of Travis.

                                Kindly focus on key areas such as the impact he has made in your life, how he has influenced your growth, and the value of his contributions to your journey. Your testimony should reflect personal experiences, insights, and the significance of his role in shaping your perspective or outcomes.

                                We look forward to receiving your thoughtful and inspiring submissions.</p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-semibold text-[#0A192F]">Full Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        required
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C49B5A] bg-gray-50/50"
                                        placeholder="Enter your name"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="city" className="text-sm font-semibold text-[#0A192F]">City</label>
                                    <input
                                        type="text"
                                        id="city"
                                        required
                                        value={formData.city}
                                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C49B5A] bg-gray-50/50"
                                        placeholder="Your city of residence"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-semibold text-[#0A192F]">Your Tribute</label>
                                <textarea
                                    id="message"
                                    required
                                    rows={6}
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C49B5A] bg-gray-50/50 resize-y"
                                    placeholder="Share a memory or tribute..."
                                />
                            </div>

                            <div className="text-center pt-4">
                                <Button disabled={isSubmitting} type="submit" className="bg-[#C49B5A] hover:bg-[#b08b51] text-white rounded-full px-12 py-6 text-lg font-bold border-none transition-all shadow-md hover:shadow-lg disabled:opacity-70">
                                    {isSubmitting ? "Submitting..." : "Submit Tribute"}
                                </Button>
                            </div>
                        </form>
                    </>
                ) : (
                    <div className="text-center py-12">
                        <div className="w-20 h-20 bg-[#FAF0E6] rounded-full flex items-center justify-center mx-auto mb-6 text-[#C49B5A]">
                            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                        <h3 className="text-3xl font-serif text-[#0A192F] mb-4">Thank You</h3>
                        <p className="text-[#1D4A77]/70 max-w-md mx-auto">
                            Your tribute for {formData.name ? formData.name : 'Travis'} has been submitted successfully. We appreciate your loving words and memories.
                        </p>
                        <Button
                            onClick={() => {
                                setFormData({ name: '', city: '', message: '' });
                                setIsSubmitted(false);
                            }}
                            className="mt-8 bg-transparent border border-[#C49B5A] text-[#C49B5A] hover:bg-[#C49B5A] hover:text-white rounded-full px-8"
                        >
                            Submit Another Tribute
                        </Button>
                    </div>
                )}
            </div>
        </section>
    );
}

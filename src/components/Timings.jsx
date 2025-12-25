import React from 'react';
import { motion } from 'framer-motion';
import { Clock, AlertCircle } from 'lucide-react';

const Timings = () => {
    return (
        <section id="timings" className="py-12 sm:py-16 md:py-20 bg-white">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-gradient-to-br from-hospital-teal to-blue-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 text-white shadow-2xl relative overflow-hidden">
                    {/* Abstract Pattern overlay */}
                    <div className="absolute inset-0 pointer-events-none opacity-[0.08]">
                        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                            <pattern id="time-grid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                                <circle cx="20" cy="20" r="1.5" fill="white" />
                                <path d="M0 20 H40 M20 0 V40" stroke="white" strokeWidth="0.5" strokeOpacity="0.3" />
                            </pattern>
                            <rect width="100%" height="100%" fill="url(#time-grid)" />
                        </svg>
                    </div>
                    {/* Decorative circles */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/20 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl opacity-60" />
                    <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/20 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl opacity-60" />

                    <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8 md:gap-10">
                        <div className="flex-1 text-center md:text-left">
                            <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 flex items-center justify-center md:justify-start">
                                <Clock className="mr-2 sm:mr-3 w-6 h-6 sm:w-7 sm:h-7" />
                                OPD Schedule
                            </h2>
                            <p className="text-teal-100 text-base sm:text-lg mb-4 sm:mb-6">
                                We are open daily for consultations. Please visit during our designated hours.
                            </p>

                            <div className="space-y-4">
                                <div className="flex justify-between border-b border-white/20 pb-2">
                                    <span className="font-medium">Morning</span>
                                    <span>10:00 AM - 02:00 PM</span>
                                </div>
                                <div className="flex justify-between border-b border-white/20 pb-2">
                                    <span className="font-medium">Evening</span>
                                    <span>06:00 PM - 10:00 PM</span>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 max-w-sm w-full">
                            <div className="flex items-start space-x-4">
                                <AlertCircle className="shrink-0 text-yellow-300 mt-1" />
                                <div>
                                    <h3 className="font-bold text-lg text-white mb-2">Emergency Services</h3>
                                    <p className="text-teal-50 text-sm leading-relaxed">
                                        Emergency medical care and admission facilities are available 24/7.
                                        Please contact us primarily for urgent assistance.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Timings;

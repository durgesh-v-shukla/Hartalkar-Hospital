import React from 'react';
import { motion } from 'framer-motion';
import { Bed, Activity, Pill, Stethoscope } from 'lucide-react';

const facilities = [
    { icon: Bed, title: "Clean & Comfortable Wards", desc: "Hygienic and well-maintained wards for patient comfort and recovery." },
    { icon: Stethoscope, title: "Modern Consultation Rooms", desc: "Private and well-equipped spaces for doctor-patient interactions." },
    { icon: Activity, title: "Emergency Services", desc: "Rapid response medical team available 24/7 for critical care." },
    { icon: Pill, title: "In-House Pharmacy", desc: "Fully stocked pharmacy ensuring easy access to prescribed medicines." },
];

const Facilities = () => {
    return (
        <section id="facilities" className="py-12 sm:py-16 md:py-20 bg-slate-50 relative overflow-hidden">
            {/* Abstract Geometric Background */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.1]">
                <svg className="absolute top-0 right-0 w-1/2 h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path d="M100 0 L 0 0 L 100 100 Z" fill="#64748b" opacity="0.15" />
                </svg>
                <div className="absolute -left-10 top-20 w-80 h-80 border-4 border-slate-300 rounded-3xl transform rotate-12" />
                <div className="absolute right-20 bottom-20 w-60 h-60 border-4 border-slate-300 rounded-full" />
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-8 sm:mb-12 md:mb-16 px-4">
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">Our Facilities</h2>
                    <p className="text-sm sm:text-base text-gray-500 max-w-xl mx-auto">State-of-the-art infrastructure for superior care.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
                    {facilities.map((facility, index) => (
                        <motion.div
                            key={facility.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            whileHover={{ y: -5 }}
                            className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center hover:shadow-md transition-all"
                        >
                            <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-4">
                                <facility.icon size={28} />
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2">{facility.title}</h3>
                            <p className="text-sm text-gray-500 leading-relaxed">{facility.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Facilities;

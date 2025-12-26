import React from 'react';
import { motion } from 'framer-motion';
import { Stethoscope, Heart, Building, Activity, Pill, BedDouble } from 'lucide-react';

const services = [
    { icon: Stethoscope, title: "General Medicine", desc: "Expert consultation for all general health concerns with experienced physicians." },
    { icon: Heart, title: "Family Healthcare", desc: "Comprehensive care for every member of your family, from infants to elderly." },
    { icon: Building, title: "OPD & IPD Facilities", desc: "Well-equipped outpatient and inpatient departments with modern amenities." },
    { icon: Activity, title: "Emergency Services", desc: "24/7 rapid response medical team available for critical care and urgent situations." },
    { icon: Pill, title: "In-House Pharmacy", desc: "Fully stocked pharmacy ensuring convenient access to prescribed medicines." },
    { icon: BedDouble, title: "Comfortable Wards", desc: "Clean, hygienic, and well-maintained wards for patient comfort and recovery." },
];

const Services = () => {
    return (
        <section id="services" className="py-12 sm:py-16 md:py-20 bg-emerald-50/40 relative overflow-hidden">
            {/* Abstract Organic Background */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.1]">
                <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path d="M0 0 C 30 40 70 40 100 0 L 100 100 L 0 100 Z" fill="#10b981" />
                </svg>
                <div className="absolute top-20 right-0 w-96 h-96 bg-emerald-200 rounded-full blur-[80px]" />
                <div className="absolute bottom-20 left-10 w-72 h-72 bg-teal-200 rounded-full blur-[80px]" />
            </div>
            <div className="absolute inset-0 bg-[radial-gradient(#10b981_0.75px,transparent_0.75px)] [background-size:24px_24px] opacity-[0.15]"></div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-8 sm:mb-12 md:mb-16 px-4"
                >
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">Services & Facilities</h2>
                    <p className="text-sm sm:text-base text-gray-500 max-w-xl mx-auto">Comprehensive medical care with state-of-the-art infrastructure for your well-being.</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            whileHover={{ y: -5, boxShadow: "0 20px 40px -15px rgba(0,128,128,0.2)" }}
                            className="p-8 bg-white rounded-2xl border border-slate-100 hover:border-hospital-teal/30 transition-all duration-300 group relative overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-teal-50/50 to-blue-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <div className="relative z-10 flex flex-col items-center text-center">
                                <div className="w-14 h-14 bg-gradient-to-br from-hospital-teal to-blue-500 rounded-xl shadow-lg flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <service.icon size={28} />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{service.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;

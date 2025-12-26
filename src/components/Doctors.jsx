import React from 'react';
import { motion } from 'framer-motion';
import { UserRound } from 'lucide-react';
import drAmit from '../dr_images/dr_amit.png';
import drVinit from '../dr_images/dr_vinit.jpeg';
import drVikas from '../dr_images/dr_vikas.jpeg';

const doctors = [
    
    {
        name: "Dr. Vikas Hartalkar",
        title: "General Surgeon",
        image: drVikas,
        desc: "Skilled surgeon dedicated to effective interventions and compassionate pre- and post-operative care for optimal patient outcomes."
    },
    {
        name: "Dr. Amit Hartalkar",
        title: "Consultant Physician",
        image: drAmit,
        desc: "Specialist in internal medicine, providing accurate diagnosis and comprehensive treatment plans for all general health conditions."
    },
    {
        name: "Dr. Vinit Hartalkar",
        title: "Director, Consultant General & Laparoscopic Surgeon",
        image: drVinit,
        desc: "Expert in advanced laparoscopic and minimal access surgeries, leading effectively with a focus on patient safety and recovery."
    },
    {
        name: "Dr. Neeta Hartalkar",
        title: "Diagnostic Medical Sonographer",
        image: null, // Placeholder - will be replaced when image is added to dr_images folder
        desc: "Experienced sonographer specializing in ultrasound imaging and diagnostics, providing accurate assessments for maternal care and general medical imaging."
    }
];

const Doctors = () => {
    return (
        <section id="doctors" className="py-12 sm:py-16 md:py-24 bg-sky-50/40 relative">
            <div className="absolute top-0 right-0 w-full h-full opacity-40 pointer-events-none overflow-hidden">
                <div className="absolute top-1/4 -right-10 w-[500px] h-[500px] bg-blue-100/50 rounded-full blur-3xl" />
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-8 sm:mb-12 md:mb-16 px-4"
                >
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">Our Medical Experts</h2>
                    <p className="text-sm sm:text-base text-gray-500 max-w-xl mx-auto">Led by experienced specialists committed to excellence in healthcare.</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-6">
                    {doctors.map((doctor, index) => (
                        <motion.div
                            key={doctor.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2, duration: 0.6 }}
                            whileHover={{ y: -10 }}
                            className="bg-white rounded-3xl overflow-hidden shadow-lg border border-slate-100 group relative"
                        >
                            {/* Photo Frame Effect */}
                            <div className="p-3 bg-white">
                                <div className="relative h-80 overflow-hidden bg-slate-100 rounded-2xl border-[3px] border-hospital-teal/20 group-hover:border-hospital-teal/50 transition-colors duration-300">
                                    {doctor.image ? (
                                        <>
                                            <img
                                                src={doctor.image}
                                                alt={doctor.name}
                                                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                                            />
                                            {/* stronger gradient for text visibility */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent" />
                                        </>
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-teal-50 to-blue-50">
                                            <UserRound size={120} className="text-hospital-teal/30" strokeWidth={1.5} />
                                        </div>
                                    )}

                                    <div className="absolute bottom-4 left-4 right-4 text-white">
                                        <h3 className="text-xl font-bold tracking-tight mb-1">{doctor.name}</h3>
                                        <p className="text-base text-teal-200 font-bold uppercase tracking-wide drop-shadow-sm">{doctor.title}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-6">
                                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                    {doctor.desc}
                                </p>
                                <div className="h-1 w-12 bg-hospital-teal rounded-full" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Doctors;

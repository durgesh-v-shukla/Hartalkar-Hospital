import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Stethoscope, Heart, Building, Activity, Pill, Microscope, X } from 'lucide-react';

// Import service images
import generalMedicineImg from '../service_images/general-medicine.png';
import familyHealthcareImg from '../service_images/family-healthcare.png';
import opdIpdImg from '../service_images/opd-ipd-facilities.png';
import emergencyImg from '../service_images/emergency-services.png';
import pharmacyImg from '../service_images/pharmacy.png';
import laboratoryImg from '../service_images/laboratory.png';

const services = [
    { 
        icon: Stethoscope, 
        title: "General Medicine", 
        desc: "Expert consultation for all general health concerns with experienced physicians.",
        detailedDesc: "Our General Medicine department provides comprehensive healthcare services for patients of all ages. Our experienced physicians diagnose and treat a wide range of medical conditions including fever, infections, diabetes, hypertension, respiratory problems, and chronic diseases. We focus on preventive care, early diagnosis, and effective treatment plans tailored to each patient's needs.",
        image: generalMedicineImg
    },
    { 
        icon: Heart, 
        title: "Family Healthcare", 
        desc: "Comprehensive care for every member of your family, from infants to elderly.",
        detailedDesc: "Our Family Healthcare services cater to the health needs of your entire family under one roof. From pediatric care for infants and children to geriatric care for the elderly, we provide age-appropriate medical attention. Our family physicians build long-term relationships with families, understanding their health history and providing personalized care that promotes overall wellness and disease prevention.",
        image: familyHealthcareImg
    },
    { 
        icon: Building, 
        title: "OPD & IPD Facilities", 
        desc: "Well-equipped outpatient and inpatient departments with modern amenities.",
        detailedDesc: "We offer both Outpatient Department (OPD) and Inpatient Department (IPD) services with state-of-the-art facilities. Our OPD provides convenient consultation services without hospitalization, while our IPD features comfortable private and general wards with 24/7 nursing care, modern medical equipment, and patient monitoring systems. We ensure a healing environment that promotes quick recovery.",
        image: opdIpdImg
    },
    { 
        icon: Activity, 
        title: "Emergency Services", 
        desc: "24/7 rapid response medical team available for critical care and urgent situations.",
        detailedDesc: "Our Emergency Department operates round-the-clock with a dedicated team of emergency physicians, nurses, and support staff. Equipped with advanced life-saving equipment, we handle all types of medical emergencies including accidents, trauma, cardiac emergencies, respiratory distress, and acute medical conditions. Our rapid response protocol ensures immediate attention to critical patients with priority-based triage.",
        image: emergencyImg
    },
    { 
        icon: Pill, 
        title: "In-House Pharmacy", 
        desc: "Fully stocked pharmacy ensuring convenient access to prescribed medicines.",
        detailedDesc: "Our in-house pharmacy is fully stocked with a comprehensive range of medications, surgical supplies, and healthcare products. Operated by qualified pharmacists, we ensure the availability of prescribed medicines, provide proper medication counseling, and maintain strict quality standards. Patients can conveniently collect their medications immediately after consultation, saving time and ensuring treatment continuity.",
        image: pharmacyImg
    },
    { 
        icon: Microscope, 
        title: "Laboratory Services", 
        desc: "Advanced diagnostic laboratory with accurate and timely test results.",
        detailedDesc: "Our fully-equipped diagnostic laboratory provides a comprehensive range of pathology and diagnostic tests. We offer blood tests, urine analysis, X-rays, ECG, ultrasound, and other diagnostic procedures. Our laboratory is equipped with modern automated analyzers and operated by experienced technicians and pathologists. We ensure accurate results with quick turnaround time, helping doctors make informed decisions for effective treatment. All tests are conducted following strict quality control protocols and international standards.",
        image: laboratoryImg
    },
];

const Services = () => {
    const [selectedService, setSelectedService] = React.useState(null);

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

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12 sm:mb-16 px-4"
                >
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 tracking-tight">Services & Facilities</h2>
                    <p className="text-base text-gray-600 max-w-2xl mx-auto">Comprehensive medical care with state-of-the-art infrastructure for your well-being.</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            layoutId={`card-${service.title}`}
                            key={service.title}
                            onClick={() => setSelectedService(service)}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            whileHover={{ y: -5, boxShadow: "0 20px 40px -15px rgba(0,128,128,0.2)" }}
                            className="p-8 bg-white rounded-2xl border border-slate-100 hover:border-hospital-teal/30 transition-all duration-300 group relative overflow-hidden cursor-pointer"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-teal-50/50 to-blue-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <div className="relative z-10 flex flex-col items-center text-center">
                                <motion.div
                                    layoutId={`icon-${service.title}`}
                                    className="w-16 h-16 bg-gradient-to-br from-hospital-teal to-blue-500 rounded-xl shadow-lg flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300"
                                >
                                    <service.icon size={32} />
                                </motion.div>
                                <motion.h3 layoutId={`title-${service.title}`} className="text-xl font-bold text-gray-900 mb-3">{service.title}</motion.h3>
                                <p className="text-gray-600 leading-relaxed text-sm">{service.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Interactive Modal */}
            <AnimatePresence>
                {selectedService && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            onClick={() => setSelectedService(null)}
                            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                        />
                        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95, y: 10 }}
                                transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                                className="bg-white rounded-3xl overflow-hidden shadow-2xl w-full max-w-4xl max-h-[90vh] flex flex-col pointer-events-auto"
                            >
                                <div className="relative h-64 sm:h-80 md:h-96">
                                    <img
                                        src={selectedService.image}
                                        alt={selectedService.title}
                                        className="w-full h-full object-cover"
                                    />
                                    <button
                                        onClick={() => setSelectedService(null)}
                                        className="absolute top-4 right-4 bg-white/90 backdrop-blur-md text-gray-800 p-2 rounded-full hover:bg-white transition-colors shadow-lg"
                                    >
                                        <X size={24} />
                                    </button>
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent pointer-events-none" />
                                    <motion.div
                                        layoutId={`icon-${selectedService.title}`}
                                        className="absolute bottom-6 left-6 w-16 h-16 bg-white rounded-xl shadow-lg flex items-center justify-center text-hospital-teal"
                                    >
                                        <selectedService.icon size={32} />
                                    </motion.div>
                                </div>

                                <div className="p-6 sm:p-8 overflow-y-auto">
                                    <motion.h3 layoutId={`title-${selectedService.title}`} className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">{selectedService.title}</motion.h3>
                                    <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-6 text-justify">
                                        {selectedService.detailedDesc}
                                    </p>

                                    <div className="bg-gradient-to-br from-teal-50 to-blue-50 p-5 sm:p-6 rounded-2xl border border-teal-100">
                                        <h4 className="font-bold text-gray-900 mb-3 flex items-center text-lg">
                                            <div className="w-1 h-5 bg-hospital-teal rounded-full mr-3" />
                                            Why Choose Our Service
                                        </h4>
                                        <ul className="space-y-2.5 text-sm sm:text-base text-gray-700">
                                            <li className="flex items-start gap-3">
                                                <div className="w-2 h-2 bg-hospital-teal rounded-full mt-1.5 flex-shrink-0" />
                                                <span>Experienced and qualified medical professionals</span>
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <div className="w-2 h-2 bg-hospital-teal rounded-full mt-1.5 flex-shrink-0" />
                                                <span>State-of-the-art equipment and modern facilities</span>
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <div className="w-2 h-2 bg-hospital-teal rounded-full mt-1.5 flex-shrink-0" />
                                                <span>Patient-centric approach with personalized care</span>
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <div className="w-2 h-2 bg-hospital-teal rounded-full mt-1.5 flex-shrink-0" />
                                                <span>Affordable and transparent pricing</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Services;

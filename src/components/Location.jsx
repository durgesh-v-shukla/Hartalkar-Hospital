import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, ExternalLink } from 'lucide-react';

const Location = () => {
    return (
        <section id="location" className="py-24 bg-stone-50 relative overflow-hidden">
            {/* Professional Architectural Grid Background */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.06]">
                <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="arch-grid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#78716c" strokeWidth="0.5" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#arch-grid)" />
                </svg>
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Visit Us</h2>
                    <p className="text-gray-500">Accessible location in the heart of the community.</p>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="bg-white p-4 rounded-3xl shadow-lg border border-gray-100"
                >
                    <div className="w-full h-96 bg-gray-200 rounded-2xl overflow-hidden relative group">
                        <iframe
                            src="https://maps.google.com/maps?q=21.2485491,75.2952524&t=&z=15&ie=UTF8&iwloc=&output=embed"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            className="grayscale group-hover:grayscale-0 transition-all duration-700"
                        ></iframe>

                        <div className="absolute inset-0 pointer-events-none border-4 border-white/20 rounded-2xl" />
                    </div>

                    <div className="mt-8 flex justify-center">
                        <a
                            href="https://www.google.com/maps/dir//67WW%2BX5P,+Shri+Krishna+Mandir+Rd,+opposite+Sri+Krishna+Mandir,+Panchshil+Nagar,+Chopda,+Maharashtra+425107/@18.6015109,74.0182606,15z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3bd8dfaa7ada9907:0x12beaf52bc72ffad!2m2!1d75.2952524!2d21.2485491?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-2 text-hospital-teal font-semibold hover:text-blue-600 transition-colors"
                        >
                            <MapPin size={20} />
                            <span>Open in Google Maps</span>
                            <ExternalLink size={16} />
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Location;

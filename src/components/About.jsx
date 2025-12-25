import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, ShieldPlus, Users, Stethoscope, ChevronLeft, ChevronRight, Award } from 'lucide-react';

// Importing images directly
import img1 from '../hospital_related_photo/slide1.png';
import img2 from '../hospital_related_photo/slide2.png';
import img3 from '../hospital_related_photo/slide3.png';
import img4 from '../hospital_related_photo/slide4.png';
import img5 from '../hospital_related_photo/slide5.png';
import img6 from '../hospital_related_photo/slide6.png';
import img7 from '../hospital_related_photo/slide7.png';
import img8 from '../hospital_related_photo/slide8.png';

const carouselImages = [img1, img2, img3, img4, img5, img6, img7, img8];

const About = () => {
    // We use a tuple [page, direction] to track the absolute index and the direction of animation
    const [[page, direction], setPage] = useState([0, 0]);

    // Derived state for the actual image index
    const imageIndex = Math.abs(page % carouselImages.length);

    useEffect(() => {
        const timer = setInterval(() => {
            paginate(1);
        }, 5000); // Slower interval for better viewing
        return () => clearInterval(timer);
    }, [page]); // clear on page change to reset timer

    const paginate = (newDirection) => {
        setPage([page + newDirection, newDirection]);
    };

    const variants = {
        enter: (direction) => ({
            x: direction > 0 ? 1000 : -1000,
            opacity: 0
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1
        },
        exit: (direction) => ({
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0
        })
    };

    return (
        <section id="about" className="py-24 bg-orange-50/20 relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute inset-0 pointer-events-none opacity-10">
                <div className="absolute top-0 right-0 w-96 h-96 bg-orange-200/50 rounded-full blur-[100px]" />
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-hospital-teal/20 rounded-full blur-[100px]" />
            </div>

            {/* Wider Container for "Really Big" feel */}
            <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-8 sm:mb-12 px-4">
                    <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-gray-900 tracking-tight">Experience World-Class Care</h2>
                    <p className="text-gray-600 mt-2 sm:mt-3 text-base sm:text-lg">Where advanced technology meets compassionate healing.</p>
                </div>

                {/* Symmetrical 3-Column Grid: 2 Cards - Big Carousel - 2 Cards */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 items-center h-auto lg:h-[600px]">

                    {/* LEFT SIDE - 2 Cards */}
                    <div className="lg:col-span-2 space-y-4 sm:space-y-6 order-2 lg:order-1 h-full flex flex-col justify-center py-2 sm:py-4">
                        {/* Card 1 */}
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="bg-white p-6 rounded-2xl shadow-sm border border-orange-100 flex flex-col items-center text-center group flex-1 hover:shadow-lg transition-all justify-start"
                        >
                            <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center text-red-500 mb-4 group-hover:bg-red-500 group-hover:text-white transition-colors">
                                <Heart size={24} />
                            </div>
                            <h4 className="font-bold text-gray-800 text-base mb-2">Patient First</h4>
                            <p className="text-sm text-gray-600 leading-relaxed">Prioritizing your well-being with unwavering dedication and care.</p>
                        </motion.div>

                        {/* Card 2 */}
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="bg-white p-6 rounded-2xl shadow-sm border border-orange-100 flex flex-col items-center text-center group flex-1 hover:shadow-lg transition-all justify-start"
                        >
                            <div className="w-12 h-12 bg-teal-50 rounded-full flex items-center justify-center text-hospital-teal mb-4 group-hover:bg-hospital-teal group-hover:text-white transition-colors">
                                <ShieldPlus size={24} />
                            </div>
                            <h4 className="font-bold text-gray-800 text-base mb-2">Ethical Care</h4>
                            <p className="text-sm text-gray-600 leading-relaxed">Transparent, honest medical practices you can fully trust.</p>
                        </motion.div>
                    </div>

                    {/* CENTER CAROUSEL - BIG (Span 8) */}
                    <div className="lg:col-span-8 h-[300px] sm:h-[400px] lg:h-full order-1 lg:order-2">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="relative w-full h-full rounded-2xl md:rounded-[2.5rem] overflow-hidden shadow-2xl border border-gray-100 bg-gray-900"
                        >
                            <AnimatePresence initial={false} custom={direction}>
                                <motion.img
                                    key={page}
                                    src={carouselImages[imageIndex]}
                                    custom={direction}
                                    variants={variants}
                                    initial="enter"
                                    animate="center"
                                    exit="exit"
                                    transition={{
                                        x: { type: "tween", ease: "easeInOut", duration: 0.8 },
                                        opacity: { duration: 0.5 }
                                    }}
                                    className="absolute inset-0 w-full h-full object-cover opacity-90"
                                />
                            </AnimatePresence>

                            {/* Elegant dark gradient overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/10 pointer-events-none z-10" />

                            {/* Controls */}
                            <div className="absolute bottom-6 right-6 z-20 flex space-x-3">
                                <button onClick={() => paginate(-1)} className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all border border-white/20 hover:scale-105 active:scale-95">
                                    <ChevronLeft size={24} />
                                </button>
                                <button onClick={() => paginate(1)} className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all border border-white/20 hover:scale-105 active:scale-95">
                                    <ChevronRight size={24} />
                                </button>
                            </div>

                            {/* Caption */}
                            <div className="absolute bottom-8 left-8 right-32 z-20 text-white">
                                <div className="inline-block px-3 py-1 bg-hospital-teal/90 rounded-full text-xs font-bold uppercase tracking-wider mb-2">Hartalkar Hospital</div>
                                <h3 className="text-xl md:text-3xl font-bold leading-tight text-shadow-lg">
                                    "Serving our community with structural excellence and compassionate hearts."
                                </h3>
                            </div>
                        </motion.div>
                    </div>

                    {/* RIGHT SIDE - 2 Cards */}
                    <div className="lg:col-span-2 space-y-4 sm:space-y-6 order-3 h-full flex flex-col justify-center py-2 sm:py-4">
                        {/* Card 3 */}
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="bg-white p-6 rounded-2xl shadow-sm border border-orange-100 flex flex-col items-center text-center group flex-1 hover:shadow-lg transition-all justify-start"
                        >
                            <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-blue-500 mb-4 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                                <Users size={24} />
                            </div>
                            <h4 className="font-bold text-gray-800 text-base mb-2">Community</h4>
                            <p className="text-sm text-gray-600 leading-relaxed">A family institution dedicated to the health of our local community.</p>
                        </motion.div>

                        {/* Card 4 */}
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="bg-white p-6 rounded-2xl shadow-sm border border-orange-100 flex flex-col items-center text-center group flex-1 hover:shadow-lg transition-all justify-start"
                        >
                            <div className="w-12 h-12 bg-purple-50 rounded-full flex items-center justify-center text-purple-500 mb-4 group-hover:bg-purple-500 group-hover:text-white transition-colors">
                                <Award size={24} />
                            </div>
                            <h4 className="font-bold text-gray-800 text-base mb-2">Excellence</h4>
                            <p className="text-sm text-gray-600 leading-relaxed">State-of-the-art facilities ensuring the best possible outcomes.</p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;

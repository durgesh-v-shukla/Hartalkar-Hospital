import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronRight, MapPin } from 'lucide-react';
import hospitalBg from '../assets/hospital-building.png';

const Hero = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    return (
        <section id="home" ref={ref} className="relative h-screen flex items-center justify-center overflow-hidden bg-slate-900">

            {/* Background with SEM/Blueprint Effect */}
            <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">

                {/* The Original Image - Treated to look technical */}
                <div className="absolute inset-0">
                    <img
                        src={hospitalBg}
                        alt="Hartalkar Hospital Structure"
                        className="w-full h-full object-cover filter grayscale contrast-125 brightness-50"
                    />
                    {/* Cyan/Teal Overlay for that 'Scan' look */}
                    <div className="absolute inset-0 bg-hospital-teal/20 mix-blend-overlay" />
                </div>

                {/* Geometric Grid / HUD Overlay - Made softer */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />

                {/* Heartbeat Pulse Animation - Live Drawing Effect */}
                <div className="absolute top-1/2 left-0 right-0 h-64 -translate-y-1/2 overflow-hidden pointer-events-none z-0">

                    <svg
                        viewBox="0 0 1000 200"
                        preserveAspectRatio="none"
                        className="w-full h-full overflow-visible"
                    >
                        <defs>
                            <linearGradient id="pulseGradient" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="1000" y2="0">
                                <stop offset="0%" stopColor="#2dd4bf" stopOpacity="0" />
                                <stop offset="20%" stopColor="#2dd4bf" stopOpacity="1" />
                                <stop offset="50%" stopColor="#ef4444" stopOpacity="1" />
                                <stop offset="80%" stopColor="#2dd4bf" stopOpacity="1" />
                                <stop offset="100%" stopColor="#2dd4bf" stopOpacity="0" />
                            </linearGradient>
                        </defs>

                        {/* The Pulse Path Definition - Realistic ECG with P, QRS, T, U waves repeating */}
                        {/* Beat 1 at x=150, Beat 2 at x=650 */}
                        <motion.path
                            d="M-50,100 L150,100 L160,92 L170,100 L175,100 L180,110 L190,10 L200,190 L210,100 L230,100 L240,80 L260,80 L270,100 L290,100 L300,95 L310,105 L320,100 L650,100 L660,92 L670,100 L675,100 L680,110 L690,10 L700,190 L710,100 L730,100 L740,80 L760,80 L770,100 L790,100 L800,95 L810,105 L820,100 L1100,100"
                            stroke="url(#pulseGradient)"
                            fill="none"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            initial={{ pathLength: 0, opacity: 0 }}
                            animate={{ pathLength: [0, 1], opacity: [0, 1, 1, 0] }}
                            transition={{
                                duration: 6,
                                repeat: Infinity,
                                ease: "linear",
                                opacity: { times: [0, 0.05, 0.95, 1], duration: 6, repeat: Infinity }
                            }}
                            style={{ filter: "drop-shadow(0 0 5px rgba(239, 68, 68, 0.5))" }}
                        />

                        {/* Leading Dot (The "Pen") */}
                        <circle r="4" fill="#ef4444" className="shadow-[0_0_15px_rgba(239,68,68,1)]">
                            <animateMotion
                                dur="6s"
                                repeatCount="indefinite"
                                path="M-50,100 L150,100 L160,92 L170,100 L175,100 L180,110 L190,10 L200,190 L210,100 L230,100 L240,80 L260,80 L270,100 L290,100 L300,95 L310,105 L320,100 L650,100 L660,92 L670,100 L675,100 L680,110 L690,10 L700,190 L710,100 L730,100 L740,80 L760,80 L770,100 L790,100 L800,95 L810,105 L820,100 L1100,100"
                            />
                        </circle>
                    </svg>
                </div>
                {/* Radial Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-slate-900/90" />
            </motion.div>

            {/* Content */}
            <div className="relative z-20 text-center max-w-5xl px-4">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: "circOut" }}
                    className="border-y border-white/10 py-10 backdrop-blur-sm bg-black/20 rounded-3xl"
                >
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="flex items-center justify-center space-x-3 mb-6"
                    >
                        <div className="h-px w-12 bg-teal-400/50" />
                        <span className="text-teal-200 tracking-[0.2em] text-sm uppercase font-medium">Compassionate Care</span>
                        <div className="h-px w-12 bg-teal-400/50" />
                    </motion.div>

                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight mb-4 drop-shadow-2xl font-serif">
                        HARTALKAR
                    </h1>
                    <h2 className="text-2xl md:text-4xl font-light text-white/90 tracking-widest uppercase mb-8">
                        HOSPITAL
                    </h2>

                    <p className="text-lg md:text-xl text-teal-50 max-w-2xl mx-auto font-light leading-relaxed italic opacity-90">
                        "Serving our community with humble hearts and healing hands. We treat every patient like family."
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-12"
                >
                    <a
                        href="#location"
                        className="relative px-8 py-4 bg-hospital-teal text-white font-bold rounded-full hover:bg-teal-600 transition-all duration-300 shadow-lg hover:shadow-teal-500/30 flex items-center group"
                    >
                        <span className="relative z-10 flex items-center">
                            <MapPin className="mr-2 w-5 h-5 group-hover:animate-bounce" /> View Location
                        </span>
                    </a>

                    <a
                        href="#contact"
                        className="relative px-8 py-4 bg-white text-hospital-teal font-bold rounded-full hover:bg-gray-50 transition-all duration-300 shadow-lg flex items-center"
                    >
                        Contact Us <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </a>
                </motion.div>
            </div>
        </section >
    );
};

export default Hero;

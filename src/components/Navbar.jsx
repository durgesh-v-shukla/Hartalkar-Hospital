import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MapPin, Clock } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/logo-placeholder.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Doctors', href: '#doctors' },
        { name: 'Services', href: '#services' },
        { name: 'Timings', href: '#timings' },
        { name: 'Location', href: '#location' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-4'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">

                    {/* Logo */}
                    <a href="#" className="flex items-center space-x-2 sm:space-x-3 group">
                        <div className="relative overflow-hidden rounded-lg bg-white p-1">
                            <img src={logo} alt="Hartalkar Hospital Logo" className="h-8 sm:h-10 w-auto object-contain" />
                        </div>
                        <span className="text-lg sm:text-xl md:text-2xl font-bold tracking-tight text-white drop-shadow-md transition-colors duration-300">
                            Hartalkar Hospital
                        </span>
                    </a>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-1 lg:space-x-2">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className={`text-sm font-semibold px-4 py-2 rounded-full transition-all duration-300 ${isScrolled
                                    ? 'text-slate-200 hover:bg-white/10 hover:text-white bg-white/5 border border-white/10'
                                    : 'text-white bg-white/10 backdrop-blur-md hover:bg-white/20 border border-white/20'
                                    }`}
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-slate-200 hover:text-white transition-colors"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
                    >
                        <div className="px-4 pt-2 pb-6 space-y-1">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={(e) => {
                                        setIsOpen(false);
                                        // Smooth scroll to section
                                        const target = document.querySelector(link.href);
                                        if (target) {
                                            e.preventDefault();
                                            setTimeout(() => {
                                                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                                            }, 100);
                                        }
                                    }}
                                    className="block py-3 text-base font-medium text-gray-600 hover:text-hospital-teal hover:bg-gray-50 rounded-md px-3"
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;

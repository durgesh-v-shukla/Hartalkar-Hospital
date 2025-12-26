import React from 'react';
import { Heart, Facebook, Twitter, Instagram, Linkedin, MapPin, Phone, Mail, ArrowRight } from 'lucide-react';
import logo from '../assets/logo-placeholder.png'; // Using the imported logo

const Footer = () => {
    return (
        <footer className="bg-slate-900 text-slate-300 relative overflow-hidden pt-10 sm:pt-12 md:pt-16 pb-6 sm:pb-8 border-t border-slate-800">
            {/* Abstract Background Pattern for Footer */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
                <svg className="absolute w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path d="M0 100 L 100 0" stroke="white" strokeWidth="0.5" />
                    <path d="M0 0 L 100 100" stroke="white" strokeWidth="0.5" />
                </svg>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-9 gap-8 sm:gap-10 md:gap-12 mb-10 sm:mb-12 md:mb-16">

                    {/* Brand Column - Spans 4 columns */}
                    <div className="md:col-span-4 space-y-6">
                        <div className="flex items-center space-x-3">
                            {/* Original Image Logo */}
                            <div className="bg-white p-2 rounded-lg">
                                <img src={logo} alt="Hartalkar Hospital" className="h-10 w-auto" />
                            </div>
                            <div>
                                <span className="block text-xl font-bold text-white tracking-wide">Hartalkar Hospital</span>
                                <span className="block text-xs text-slate-500 uppercase tracking-widest">Care & Cure</span>
                            </div>
                        </div>
                        <p className="text-sm text-slate-400 leading-relaxed pr-6">
                            Ethical, compassionate, and patient-first healthcare for our community. Dedicated to your well-being since our inception.
                        </p>
                        <div className="flex space-x-4 pt-2">
                            <a href="#" className="p-2 rounded-full bg-slate-800 text-slate-400 hover:bg-hospital-teal hover:text-white transition-all duration-300"><Facebook size={18} /></a>
                            <a href="#" className="p-2 rounded-full bg-slate-800 text-slate-400 hover:bg-hospital-teal hover:text-white transition-all duration-300"><Twitter size={18} /></a>
                            <a href="#" className="p-2 rounded-full bg-slate-800 text-slate-400 hover:bg-hospital-teal hover:text-white transition-all duration-300"><Instagram size={18} /></a>
                            <a href="#" className="p-2 rounded-full bg-slate-800 text-slate-400 hover:bg-hospital-teal hover:text-white transition-all duration-300"><Linkedin size={18} /></a>
                        </div>
                    </div>

                    {/* Quick Links - Spans 2 columns */}
                    <div className="md:col-span-2">
                        <h4 className="text-white font-semibold mb-6 flex items-center text-base">Quick Links</h4>
                        <ul className="space-y-3 text-sm">
                            {['Home', 'About Us', 'Doctors', 'Services', 'Contact'].map((item) => (
                                <li key={item}>
                                    <a href={`#${item.toLowerCase().replace(' ', '')}`} className="text-slate-400 hover:text-hospital-teal transition-colors flex items-center group">
                                        <ArrowRight size={14} className="mr-2 text-hospital-teal opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                                        <span className="group-hover:translate-x-1 transition-transform duration-300">{item}</span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info - Spans 3 columns */}
                    <div className="md:col-span-3">
                        <h4 className="text-white font-semibold mb-6 flex items-center text-base">Contact Us</h4>
                        <ul className="space-y-5 text-sm">
                            <li className="flex items-start group">
                                <div className="p-2 bg-slate-800 rounded-lg mr-3 group-hover:bg-hospital-teal/20 transition-colors">
                                    <MapPin size={16} className="text-hospital-teal" />
                                </div>
                                <span className="text-slate-400 leading-relaxed">Shri Krishna Mandir Rd, opp. Sri Krishna Mandir,<br />Panchshil Nagar, Chopda, Maharashtra 425107</span>
                            </li>
                            <li className="flex items-center group">
                                <div className="p-2 bg-slate-800 rounded-lg mr-3 group-hover:bg-hospital-teal/20 transition-colors">
                                    <Phone size={16} className="text-hospital-teal" />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-slate-400 hover:text-white transition-colors cursor-pointer">+91 98765 43210</span>
                                    <span className="text-slate-400 hover:text-white transition-colors cursor-pointer">+91 12345 67890</span>
                                </div>
                            </li>
                            <li className="flex items-center group">
                                <div className="p-2 bg-slate-800 rounded-lg mr-3 group-hover:bg-hospital-teal/20 transition-colors">
                                    <Mail size={16} className="text-hospital-teal" />
                                </div>
                                <span className="text-slate-400 hover:text-white transition-colors">info@hartalkarhospital.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Divider */}
                <div className="h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent my-8" />

                {/* Bottom Bar - Redesigned for Credits */}
                <div className="flex flex-col items-center justify-center space-y-4">

                    {/* Centered Developer Credit Only */}
                    <div className="flex flex-col md:flex-row items-center gap-2 text-sm text-slate-400 bg-slate-800/40 px-6 py-3 rounded-2xl border border-slate-700/50 backdrop-blur-sm">
                        <span className="flex items-center">
                            Designed & Developed by
                            <span className="ml-2 px-3 py-1 bg-gradient-to-r from-hospital-teal to-blue-500 text-white text-xs font-bold uppercase tracking-wider rounded-lg shadow-lg shadow-hospital-teal/20 transform hover:-translate-y-0.5 transition-transform duration-300 cursor-default">
                                Durgesh Shukla
                            </span>
                        </span>
                    </div>

                    {/* Copyright */}
                    <div className="text-xs text-slate-600 mt-2">
                        &copy; 2025 Hartalkar Hospital. All rights reserved.
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

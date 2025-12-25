import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-24 bg-white relative overflow-hidden">
            {/* Tech Grid & Connecting Lines Abstract Pattern */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.08]">
                <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(#0f766e 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
                <svg className="absolute top-0 right-0 w-full h-full" viewBox="0 0 800 600" preserveAspectRatio="none">
                    <path d="M600 0 L 800 200 L 800 600 L 0 600" fill="none" stroke="#0f766e" strokeWidth="2" strokeDasharray="10 10" opacity="0.3" />
                    <circle cx="700" cy="100" r="50" stroke="#0d9488" strokeWidth="2" fill="none" opacity="0.4" />
                </svg>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-50 rounded-full blur-3xl" />
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    <div>
                        <h2 className="text-4xl font-bold text-gray-900 mb-6">Get in Touch</h2>
                        <p className="text-lg text-gray-600 mb-10 leading-relaxed">
                            Have questions or need assistance? Reach out to us. We are here to help you and your family.
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-start space-x-6 group">
                                <div className="w-12 h-12 bg-teal-50 rounded-xl flex items-center justify-center text-hospital-teal group-hover:bg-hospital-teal group-hover:text-white transition-all duration-300">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900 mb-1">Our Location</h3>
                                    <p className="text-gray-600">Shri Krishna Mandir Rd, opp. Sri Krishna Mandir,<br />Panchshil Nagar, Chopda, Maharashtra 425107</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-6 group">
                                <div className="w-12 h-12 bg-teal-50 rounded-xl flex items-center justify-center text-hospital-teal group-hover:bg-hospital-teal group-hover:text-white transition-all duration-300">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900 mb-1">Phone Number</h3>
                                    <p className="text-gray-600">+91 98765 43210</p>
                                    <p className="text-gray-600">+91 12345 67890</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-6 group">
                                <div className="w-12 h-12 bg-teal-50 rounded-xl flex items-center justify-center text-hospital-teal group-hover:bg-hospital-teal group-hover:text-white transition-all duration-300">
                                    <Clock size={24} />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900 mb-1">Working Hours</h3>
                                    <p className="text-gray-600">Mon - Sat: 10:00 AM - 10:00 PM</p>
                                    <p className="text-red-500 text-sm mt-1">Emergency Services Available 24/7</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-tr from-hospital-teal to-blue-500 rounded-3xl rotate-3 opacity-20 transform scale-105 pointer-events-none" />
                        <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 relative z-10">
                            <form className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                                    <input type="text" id="name" className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-hospital-teal focus:ring-0 transition-colors" placeholder="Your Name" />
                                </div>
                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                                    <input type="tel" id="phone" className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-hospital-teal focus:ring-0 transition-colors" placeholder="Your Phone Number" />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                                    <textarea id="message" rows="4" className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-hospital-teal focus:ring-0 transition-colors" placeholder="How can we help?"></textarea>
                                </div>
                                <button type="submit" className="w-full bg-hospital-teal text-white font-semibold py-4 rounded-xl hover:bg-teal-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Contact;

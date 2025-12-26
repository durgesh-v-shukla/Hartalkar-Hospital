import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Clock, ChevronLeft, ChevronRight, User, Stethoscope, Activity, Brain } from 'lucide-react';

const visitingSchedule = [
    {
        id: 1,
        name: "Dr. Oswal",
        specialty: "ENT Specialist",
        description: "Specializes in treating ear, nose, and throat conditions including hearing loss, sinusitis, tonsillitis, allergies, voice disorders, and throat infections. Expert in managing both acute and chronic ENT problems.",
        schedule: "Every Sunday",
        timing: "10:00 AM - 2:00 PM",
        color: "bg-blue-600",
        lightColor: "bg-blue-500",
        textColor: "text-blue-700",
        bgColor: "bg-blue-50",
        borderColor: "border-blue-200",
        icon: Stethoscope,
        frequency: "weekly"
    },
    {
        id: 2,
        name: "Dr. Sharma",
        specialty: "Dermatologist",
        description: "Expert in diagnosing and treating skin conditions including acne, eczema, psoriasis, skin infections, hair fall, pigmentation issues, and other dermatological concerns. Provides both medical and cosmetic dermatology services.",
        schedule: "2nd & 4th Sunday",
        timing: "11:00 AM - 1:00 PM",
        color: "bg-purple-600",
        lightColor: "bg-purple-500",
        textColor: "text-purple-700",
        bgColor: "bg-purple-50",
        borderColor: "border-purple-200",
        icon: Activity,
        frequency: "biweekly"
    },
    {
        id: 3,
        name: "Dr. Patel",
        specialty: "Neurologist",
        description: "Specializes in brain and nervous system disorders including headaches, migraines, epilepsy, stroke, Parkinson's disease, memory problems, neuropathy, and other neurological conditions requiring expert diagnosis and treatment.",
        schedule: "2nd & 4th Sunday",
        timing: "2:00 PM - 5:00 PM",
        color: "bg-orange-600",
        lightColor: "bg-orange-500",
        textColor: "text-orange-700",
        bgColor: "bg-orange-50",
        borderColor: "border-orange-200",
        icon: Brain,
        frequency: "biweekly"
    }
];

const VisitingDoctors = () => {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [selectedDay, setSelectedDay] = useState(null);

    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];
    const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    const getDaysInMonth = (date) => {
        const year = date.getFullYear();
        const month = date.getMonth();
        const firstDay = new Date(year, month, 1);
        const lastDay = new Date(year, month + 1, 0);
        const daysInMonth = lastDay.getDate();
        const startingDayOfWeek = firstDay.getDay();

        return { daysInMonth, startingDayOfWeek, year, month };
    };

    const getSundayOfMonth = (year, month, day) => {
        const date = new Date(year, month, day);
        if (date.getDay() !== 0) return 0; // Not a Sunday
        
        // Count which Sunday of the month this is
        let count = 0;
        for (let d = 1; d <= day; d++) {
            if (new Date(year, month, d).getDay() === 0) {
                count++;
            }
        }
        return count;
    };

    const getDoctorsForDay = (day) => {
        const { year, month } = getDaysInMonth(currentDate);
        const date = new Date(year, month, day);
        const dayOfWeek = date.getDay();
        
        if (dayOfWeek !== 0) return []; // Not a Sunday
        
        const sundayNumber = getSundayOfMonth(year, month, day);
        const doctors = [];
        
        // Dr. Oswal - Every Sunday
        doctors.push(visitingSchedule[0]);
        
        // Dr. Sharma & Dr. Patel - 2nd & 4th Sunday
        if (sundayNumber === 2 || sundayNumber === 4) {
            doctors.push(visitingSchedule[1]);
            doctors.push(visitingSchedule[2]);
        }
        
        return doctors;
    };

    const calendarDays = useMemo(() => {
        const { daysInMonth, startingDayOfWeek } = getDaysInMonth(currentDate);
        const days = [];
        
        // Add empty cells for days before the first day of the month
        for (let i = 0; i < startingDayOfWeek; i++) {
            days.push(null);
        }
        
        // Add all days of the month
        for (let day = 1; day <= daysInMonth; day++) {
            days.push(day);
        }
        
        return days;
    }, [currentDate]);

    const changeMonth = (direction) => {
        const newDate = new Date(currentDate);
        newDate.setMonth(currentDate.getMonth() + direction);
        setCurrentDate(newDate);
        setSelectedDay(null);
    };

    const isToday = (day) => {
        const today = new Date();
        const { year, month } = getDaysInMonth(currentDate);
        return day === today.getDate() && 
               month === today.getMonth() && 
               year === today.getFullYear();
    };

    return (
        <section id="visiting-doctors" className="py-12 sm:py-16 md:py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-8 sm:mb-12"
                >
                    <div className="flex items-center justify-center mb-4">
                        <Calendar className="w-8 h-8 sm:w-10 sm:h-10 text-indigo-600 mr-3" />
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
                            Visiting Doctors Schedule
                        </h2>
                    </div>
                    <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
                        Book appointments with our specialist visiting doctors
                    </p>
                </motion.div>

                {/* Calendar Container */}
                <div className="max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-200"
                    >
                        {/* Calendar Header */}
                        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-6">
                            <div className="flex items-center justify-between">
                                <motion.button
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    onClick={() => changeMonth(-1)}
                                    className="p-2 bg-white/20 hover:bg-white/30 rounded-full text-white transition-all"
                                >
                                    <ChevronLeft className="w-6 h-6" />
                                </motion.button>
                                
                                <div className="text-center">
                                    <h3 className="text-2xl sm:text-3xl font-bold text-white">
                                        {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
                                    </h3>
                                </div>
                                
                                <motion.button
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    onClick={() => changeMonth(1)}
                                    className="p-2 bg-white/20 hover:bg-white/30 rounded-full text-white transition-all"
                                >
                                    <ChevronRight className="w-6 h-6" />
                                </motion.button>
                            </div>
                        </div>

                        {/* Day Names */}
                        <div className="grid grid-cols-7 bg-gray-100 border-b border-gray-200">
                            {dayNames.map((day) => (
                                <div key={day} className="p-3 text-center font-semibold text-gray-700 text-sm sm:text-base">
                                    {day}
                                </div>
                            ))}
                        </div>

                        {/* Calendar Grid */}
                        <div className="grid grid-cols-7 bg-white">
                            {calendarDays.map((day, index) => {
                                const doctors = day ? getDoctorsForDay(day) : [];
                                const hasVisit = doctors.length > 0;
                                const isSunday = day && new Date(getDaysInMonth(currentDate).year, getDaysInMonth(currentDate).month, day).getDay() === 0;
                                
                                return (
                                    <motion.div
                                        key={index}
                                        whileHover={day ? { scale: isSunday ? 1.02 : 1.05 } : {}}
                                        className={`p-2 sm:p-3 border border-gray-200 relative transition-all
                                            ${!day ? 'bg-gray-50' : 'bg-white cursor-pointer'}
                                            ${isSunday ? 'min-h-[120px] sm:min-h-[140px] bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 shadow-[0_0_20px_rgba(99,102,241,0.3)] ring-1 ring-indigo-200' : 'min-h-[80px] sm:min-h-[100px]'}
                                            ${hasVisit ? 'hover:shadow-xl hover:z-10' : 'hover:bg-gray-50'}
                                            ${isToday(day) ? 'ring-2 ring-indigo-500 ring-inset shadow-md' : ''}
                                            ${selectedDay === day ? 'bg-indigo-100 shadow-inner ring-2 ring-indigo-400' : ''}`}
                                        onClick={() => day && hasVisit && setSelectedDay(selectedDay === day ? null : day)}
                                    >
                                        {day && (
                                            <>
                                                <div className={`text-right mb-2
                                                    ${isSunday ? 'text-lg sm:text-xl font-bold' : 'text-sm sm:text-base font-semibold'}
                                                    ${isToday(day) ? 'text-indigo-600' : isSunday ? 'text-indigo-800' : 'text-gray-600'}`}>
                                                    {day}
                                                </div>
                                                
                                                {hasVisit && (
                                                    <div className="space-y-1.5">
                                                        {doctors.map((doctor) => {
                                                            const IconComponent = doctor.icon;
                                                            return (
                                                                <motion.div
                                                                    key={doctor.id}
                                                                    initial={{ scale: 0, opacity: 0 }}
                                                                    animate={{ scale: 1, opacity: 1 }}
                                                                    transition={{ duration: 0.3 }}
                                                                    className={`${doctor.lightColor} text-white px-2 py-1.5 rounded-lg font-medium text-xs flex items-center gap-1.5 shadow-md hover:shadow-lg transition-shadow`}
                                                                >
                                                                    <IconComponent className="w-3 h-3 flex-shrink-0" />
                                                                    <span className="truncate">{doctor.name.split(' ')[1]}</span>
                                                                </motion.div>
                                                            );
                                                        })}
                                                    </div>
                                                )}
                                                
                                                {isSunday && !hasVisit && (
                                                    <div className="absolute bottom-2 right-2 text-indigo-300">
                                                        <Calendar className="w-4 h-4" />
                                                    </div>
                                                )}
                                            </>
                                        )}
                                    </motion.div>
                                );
                            })}
                        </div>
                    </motion.div>

                    {/* Selected Day Details */}
                    <AnimatePresence>
                        {selectedDay && (
                            <motion.div
                                initial={{ opacity: 0, y: 20, height: 0 }}
                                animate={{ opacity: 1, y: 0, height: 'auto' }}
                                exit={{ opacity: 0, y: -20, height: 0 }}
                                className="mt-6 bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden"
                            >
                                <div className="bg-gradient-to-r from-indigo-500 to-purple-500 p-4 text-white">
                                    <h4 className="text-lg sm:text-xl font-bold">
                                        {monthNames[currentDate.getMonth()]} {selectedDay}, {currentDate.getFullYear()}
                                    </h4>
                                </div>
                                <div className="p-6 space-y-4">
                                    {getDoctorsForDay(selectedDay).map((doctor) => {
                                        const IconComponent = doctor.icon;
                                        return (
                                            <motion.div
                                                key={doctor.id}
                                                initial={{ x: -20, opacity: 0 }}
                                                animate={{ x: 0, opacity: 1 }}
                                                transition={{ duration: 0.3 }}
                                                className={`${doctor.bgColor} ${doctor.borderColor} border rounded-xl p-5 hover:shadow-lg transition-shadow`}
                                            >
                                                <div className="flex items-start gap-4">
                                                    <div className={`${doctor.color} w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center text-white shadow-md flex-shrink-0`}>
                                                        <IconComponent className="w-7 h-7 sm:w-8 sm:h-8" />
                                                    </div>
                                                    <div className="flex-1">
                                                        <h5 className={`font-bold text-base sm:text-lg ${doctor.textColor}`}>
                                                            {doctor.name}
                                                        </h5>
                                                        <p className="text-sm font-semibold text-gray-700 mt-0.5">{doctor.specialty}</p>
                                                        <p className="text-sm text-gray-600 mt-2 leading-relaxed text-justify">
                                                            {doctor.description}
                                                        </p>
                                                        <div className="flex items-center mt-3 text-sm text-gray-700 font-medium bg-white px-3 py-2 rounded-lg inline-flex">
                                                            <Clock className="w-4 h-4 mr-1.5" />
                                                            {doctor.timing}
                                                        </div>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        );
                                    })}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {/* Legend */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mt-8 sm:mt-12 max-w-3xl mx-auto"
                >
                    <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
                        <h4 className="font-bold text-lg mb-4 text-gray-900 flex items-center">
                            <User className="w-5 h-5 mr-2 text-indigo-600" />
                            Visiting Specialists
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            {visitingSchedule.map((doctor) => {
                                const IconComponent = doctor.icon;
                                return (
                                    <div key={doctor.id} className={`${doctor.bgColor} ${doctor.borderColor} border rounded-xl p-5 hover:shadow-lg transition-all`}>
                                        <div className={`${doctor.color} w-12 h-12 rounded-full flex items-center justify-center text-white mb-3 mx-auto shadow-md`}>
                                            <IconComponent className="w-6 h-6" />
                                        </div>
                                        <p className={`font-bold text-center ${doctor.textColor} mb-1`}>{doctor.name}</p>
                                        <p className="text-sm text-gray-700 font-semibold text-center mb-2">{doctor.specialty}</p>
                                        <p className="text-xs text-gray-600 leading-relaxed text-justify mb-3">{doctor.description}</p>
                                        <p className="text-xs text-gray-500 font-medium text-center bg-white px-3 py-2 rounded-lg">{doctor.schedule}</p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default VisitingDoctors;

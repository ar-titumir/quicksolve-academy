import React from 'react';
import { motion } from 'framer-motion';
import { AlertCircle, CheckCircle2 } from 'lucide-react';

const ProblemSolution: React.FC = () => {
  return (
    <div className="py-20 bg-slate-950 relative overflow-hidden">
        {/* Decorative circle */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-900/10 rounded-full blur-3xl -z-0"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white">The Problem vs. The Solution</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
            {/* The Problem */}
            <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-red-900/10 border border-red-900/30 p-8 rounded-2xl"
            >
                <div className="flex items-center gap-3 mb-6">
                    <AlertCircle className="h-8 w-8 text-red-500" />
                    <h3 className="text-2xl font-bold text-red-400">The Struggle</h3>
                </div>
                <ul className="space-y-4 text-gray-300 font-bengali text-lg">
                    <li className="flex items-start gap-3">
                        <span className="text-red-500 mt-1">✕</span>
                        <span>৩০টি MCQ এর জন্য মাত্র ৩০ মিনিট সময়।</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <span className="text-red-500 mt-1">✕</span>
                        <span>সময়ের অভাবে জানা অংক ভুল করা (Panic)।</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <span className="text-red-500 mt-1">✕</span>
                        <span>লম্বা ক্যালকুলেশন করতে গিয়ে সিকিউ (CQ) এর সময় নষ্ট।</span>
                    </li>
                </ul>
            </motion.div>

             {/* The Solution */}
             <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-green-900/10 border border-green-900/30 p-8 rounded-2xl relative"
            >
                 <div className="absolute -top-3 -right-3 bg-brand-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-lg">
                    With QuickSolve
                </div>
                <div className="flex items-center gap-3 mb-6">
                    <CheckCircle2 className="h-8 w-8 text-green-500" />
                    <h3 className="text-2xl font-bold text-green-400">The Victory</h3>
                </div>
                <ul className="space-y-4 text-gray-300 font-bengali text-lg">
                    <li className="flex items-start gap-3">
                        <span className="text-green-500 mt-1">✓</span>
                        <span>মাত্র ২০ মিনিটেই ৩০টি MCQ সমাধান।</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <span className="text-green-500 mt-1">✓</span>
                        <span>Calculator Hacks দিয়ে ১০০% নির্ভুল উত্তর।</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <span className="text-green-500 mt-1">✓</span>
                        <span>রিভিশন এবং সৃজনশীল (CQ) অংশের জন্য পর্যাপ্ত সময়।</span>
                    </li>
                </ul>
            </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProblemSolution;
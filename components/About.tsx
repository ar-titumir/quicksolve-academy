import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Target, Users } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div id="about" className="py-20 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="mb-10 lg:mb-0"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Empowering Students with <br/>
              <span className="text-brand-500">"The BUET Edge"</span>
            </h2>
            <div className="space-y-6 text-gray-300 text-lg font-bengali">
              <p>
                QuickSolve Academy ঢাকার কারওয়ান বাজার কেন্দ্রিক একটি বিশেষ এড-টেক উদ্যোগ। আমাদের লক্ষ্য—বাংলাদেশের দশম শ্রেণীর (SSC) শিক্ষার্থীদের গণিতের ভয় দূর করা।
              </p>
              <p>
                আমাদের নেতৃত্বে রয়েছেন <strong className="text-white">BUET</strong>-এর মেধাবী মুখেরা। আমরা ইঞ্জিনিয়ারিং লেভেলের জটিল ক্যালকুলেশন টেকনিকগুলোকে সহজ করে SSC লেভেলে নিয়ে এসেছি। 
              </p>
              <div className="bg-slate-700/30 border-l-4 border-brand-500 p-4 rounded-r-lg">
                <p className="italic text-gray-200">
                  "সায়েন্টিফিক ক্যালকুলেটর শুধুই যোগ-বিয়োগের যন্ত্র নয়, এটি একটি শক্তিশালী কম্পিউটার। সঠিক ব্যবহার জানলে এটিই হবে তোমার A+ পাওয়ার গোপন অস্ত্র।"
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
                <GraduationCap className="h-10 w-10 text-accent-500 mb-4" />
                <h4 className="text-xl font-bold text-white mb-2">Expert Mentors</h4>
                <p className="text-gray-400 text-sm">Mentors from BUET & Top Universities providing direct guidance.</p>
            </div>
            <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 mt-0 sm:mt-8">
                <Target className="h-10 w-10 text-red-500 mb-4" />
                <h4 className="text-xl font-bold text-white mb-2">Exam Focused</h4>
                <p className="text-gray-400 text-sm">Every content is mapped directly to NCTB Syllabus for SSC exams.</p>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default About;
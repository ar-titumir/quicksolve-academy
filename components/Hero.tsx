import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Zap, CheckCircle } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div id="home" className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
            <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-brand-600/20 blur-[100px]" />
            <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-accent-600/20 blur-[100px]" />
        </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12 lg:mb-0"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700 mb-6 backdrop-blur-sm">
              <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
              <span className="text-sm font-medium text-gray-300">New: Casio fx-991CW Hacks Added</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-bengali leading-tight mb-6">
              SSC Math MCQ নিয়ে <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-500 to-accent-500">আর টেনশন নেই!</span> 🚀
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 font-bengali mb-4 font-light">
              ⚡ Calculator Hacks দিয়ে অংক করো ঝড়ের গতিতে।
            </p>
            <p className="text-gray-400 text-lg mb-8 max-w-lg font-bengali">
              পরীক্ষায় সময় বাঁচাও এবং ১০০% নির্ভুলভাবে অংক সমাধান করো। SSC Math-এ A+ নিশ্চিত করতে আমাদের সাথে থাকো।
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#features" className="inline-flex justify-center items-center px-8 py-4 border border-transparent text-base font-bold rounded-xl text-white bg-brand-600 hover:bg-brand-700 md:text-lg transition-transform hover:scale-105 shadow-lg shadow-brand-600/30">
                Start Learning Hacks
                <Zap className="ml-2 h-5 w-5" />
              </a>
              <a href="#about" className="inline-flex justify-center items-center px-8 py-4 border border-slate-600 text-base font-medium rounded-xl text-gray-300 hover:bg-slate-800 md:text-lg transition-all">
                Learn More
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </div>
          </motion.div>

          {/* Visual Content */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 p-2 shadow-2xl transform md:rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="absolute top-0 left-0 w-full h-full bg-grid-white/[0.05] z-0 rounded-xl pointer-events-none"></div>
                <img 
                    src="assets/joying-boy.png" 
                    alt="Happy student solving math" 
                    className="rounded-xl w-full object-cover h-[300px] md:h-[400px] z-10 relative opacity-60 mix-blend-overlay"
                />
                
                {/* Floating Cards */}
                <motion.div 
                    animate={{ y: [0, -10, 0] }}
                    transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                    className="absolute -top-6 -right-6 bg-slate-800 p-4 rounded-xl border border-slate-700 shadow-xl z-20"
                >
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-green-500/20 rounded-lg">
                            <CheckCircle className="h-6 w-6 text-green-500" />
                        </div>
                        <div>
                            <p className="text-xs text-gray-400">Accuracy</p>
                            <p className="text-lg font-bold text-white">100%</p>
                        </div>
                    </div>
                </motion.div>

                <motion.div 
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
                    className="absolute -bottom-6 -left-6 bg-slate-800 p-4 rounded-xl border border-slate-700 shadow-xl z-20"
                >
                     <div className="flex items-center gap-3">
                        <div className="p-2 bg-brand-500/20 rounded-lg">
                            <Zap className="h-6 w-6 text-brand-500" />
                        </div>
                        <div>
                            <p className="text-xs text-gray-400">Speed</p>
                            <p className="text-lg font-bold text-white">2x Faster</p>
                        </div>
                    </div>
                </motion.div>

                {/* Overlay Text on Image */}
                <div className="absolute inset-0 flex flex-col items-center justify-center z-10 p-6 text-center">
                    <h3 className="text-3xl font-bold text-white mb-2">30 MCQs</h3>
                    <p className="text-gray-300 text-lg">in just 20 Minutes</p>
                    <div className="w-16 h-1 bg-brand-500 mt-4 rounded-full"></div>
                </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

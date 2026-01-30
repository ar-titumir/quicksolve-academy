import React from 'react';
import { FEATURES } from '../constants';
import { motion } from 'framer-motion';

const Features: React.FC = () => {
  return (
    <div id="features" className="py-20 bg-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Why Choose <span className="text-brand-500">QuickSolve?</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto font-bengali text-lg">
            আমরা গতানুগতিক মুখস্থ বিদ্যায় বিশ্বাসী নই। আমরা বিশ্বাসী স্মার্ট টেকনিক এবং লজিক্যাল শর্টকাটে।
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {FEATURES.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700 hover:border-brand-500/50 transition-colors hover:shadow-lg hover:shadow-brand-900/20 group"
            >
              <div className={`p-4 rounded-xl bg-slate-900 inline-block mb-6 ${feature.color} group-hover:scale-110 transition-transform`}>
                <feature.icon className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-400 font-bengali leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
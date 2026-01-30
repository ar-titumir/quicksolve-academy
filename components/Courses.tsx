import React from 'react';
import { COURSES } from '../constants';
import { Check } from 'lucide-react';

const Courses: React.FC = () => {
  return (
    <div id="courses" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Programs</h2>
          <p className="text-gray-400">Start your journey to A+ today</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {COURSES.map((course, index) => (
            <div 
              key={index} 
              className={`relative bg-slate-800 rounded-2xl overflow-hidden border ${course.isPopular ? 'border-brand-500 shadow-xl shadow-brand-900/20' : 'border-slate-700'}`}
            >
              {course.isPopular && (
                <div className="bg-brand-600 text-white text-center py-1 text-sm font-bold uppercase tracking-wider">
                  Most Popular
                </div>
              )}
              <div className="p-8">
                {course.image && (
                  <div className="mb-6 rounded-lg overflow-hidden border border-slate-700 bg-slate-900 flex justify-center">
                    <img src={course.image} alt={course.title} className="w-full h-auto max-h-[300px] object-contain" />
                  </div>
                )}
                <h3 className="text-2xl font-bold text-white mb-2">{course.title}</h3>
                <div className="text-3xl font-bold text-brand-400 mb-6">{course.price}</div>
                
                <ul className="space-y-4 mb-8">
                  {course.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-300">
                      <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-3 px-6 rounded-xl font-bold transition-colors ${course.isPopular ? 'bg-white text-brand-700 hover:bg-gray-100' : 'bg-slate-700 text-white hover:bg-slate-600'}`}>
                  Get Access
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;
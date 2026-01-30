import React from 'react';
import { CONTACT_INFO } from '../constants';
import { Phone, Mail, MapPin, Facebook, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-slate-950 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
                <img src="assets/logo-small.png" alt="QuickSolve Logo" className="h-10 w-auto object-contain" />
                <h3 className="text-2xl font-bold text-white">QuickSolve Academy</h3>
            </div>
            <p className="text-gray-400 mb-6 max-w-md font-bengali">
              SSC Math MCQ-এর ভয় দূর করতে আমরা আছি তোমার পাশে। সঠিক গাইডলাইন এবং ক্যালকুলেটর হ্যাক্স শিখে হয়ে ওঠো অন্যদের চেয়ে এগিয়ে।
            </p>
            <div className="flex space-x-4">
              <a 
                href={CONTACT_INFO.facebook} 
                target="_blank" 
                rel="noreferrer"
                className="bg-brand-600 p-2 rounded-lg text-white hover:bg-brand-700 transition-colors"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start text-gray-400">
                <MapPin className="h-5 w-5 mr-2 text-brand-500 mt-1 flex-shrink-0" />
                <span>{CONTACT_INFO.address}</span>
              </li>
              <li className="flex items-center text-gray-400">
                <Phone className="h-5 w-5 mr-2 text-brand-500 flex-shrink-0" />
                <a href={`tel:${CONTACT_INFO.phone}`} className="hover:text-white transition-colors">{CONTACT_INFO.phone}</a>
              </li>
              <li className="flex items-center text-gray-400">
                <Mail className="h-5 w-5 mr-2 text-brand-500 flex-shrink-0" />
                <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-white transition-colors">{CONTACT_INFO.email}</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-brand-400 transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-brand-400 transition-colors">About Us</a></li>
              <li><a href="#courses" className="text-gray-400 hover:text-brand-400 transition-colors">Courses</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-brand-400 transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-900 text-center">
          <p className="text-gray-500 flex items-center justify-center gap-1">
            © {new Date().getFullYear()} QuickSolve Academy. Made with <Heart size={14} className="text-red-500 fill-red-500" /> in Dhaka.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
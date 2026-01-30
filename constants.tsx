import { Calculator, Zap, TrendingUp, BookOpen, Clock, Award } from 'lucide-react';
import { Feature, ContactInfo, Course } from './types';

export const CONTACT_INFO: ContactInfo = {
  phone: "+8801829452262",
  email: "support@quicksolveacademy.com",
  address: "Karwan Bazar, Dhaka, Bangladesh",
  facebook: "https://facebook.com/QuickSolveAcademy"
};

export const FEATURES: Feature[] = [
  {
    title: "Calculator Hacks eBook",
    description: "Casio fx-991ES Plus, EX, এবং CW সিরিজের গোপন শর্টকাট শিখুন। দ্বিঘাত সমীকরণ থেকে ত্রিকোণমিতি—সব হবে নিমেষে।",
    icon: Calculator,
    color: "text-blue-400"
  },
  {
    title: "The BUET Edge",
    description: "বুয়েট এক্সপার্টদের নেতৃত্বে পরিচালিত। আমরা ইঞ্জিনিয়ারিং লেভেলের ক্যালকুলেশন টেকনিক SSC সিলেবাসে নিয়ে এসেছি।",
    icon: Award,
    color: "text-yellow-400"
  },
  {
    title: "Time Management",
    description: "৩০ মিনিটে ৩০টি MCQ উত্তর করা এখন আর স্বপ্ন নয়। আমাদের টেকনিক ব্যবহার করে ২০ মিনিটেই শেষ করো।",
    icon: Clock,
    color: "text-green-400"
  }
];

export const COURSES: Course[] = [
  {
    title: "Calculator Mastery eBook",
    price: "৳399",
    features: ["All Casio Models Covered", "Quadratic & Complex Numbers", "Trigonometry Shortcuts", "Lifetime Updates"],
    isPopular: true,
    image: "./assets/ebook-cover.png"
  },
  {
    title: "SSC Math Crash Course",
    price: "৳1500",
    features: ["Live Classes", "Shortcut Training", "Model Tests", "BUET Mentor Support"],
    isPopular: false
  }
];
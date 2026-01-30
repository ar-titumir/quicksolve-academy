import { LucideIcon } from 'lucide-react';

export interface Feature {
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
}

export interface Testimonial {
  name: string;
  role: string;
  text: string;
}

export interface ContactInfo {
  phone: string;
  email: string;
  address: string;
  facebook: string;
}

export interface Course {
  title: string;
  price: string;
  features: string[];
  isPopular?: boolean;
  image?: string;
}
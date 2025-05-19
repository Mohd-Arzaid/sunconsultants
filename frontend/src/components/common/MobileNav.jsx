import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MessageCircle, Mail } from 'lucide-react';

const MobileNav = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-md border-t border-gray-200/50 md:hidden z-[60] shadow-lg">
      <div className="flex justify-around items-center h-[70px]">
        <a
          href="https://wa.me/919999999999"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center text-green-600"
        >
          <MessageCircle className="h-7 w-7" />
          <span className="font-geist text-sm mt-1">WhatsApp</span>
        </a>

        <a
          href="tel:+919999999999"
          className="flex flex-col items-center text-blue-600"
        >
          <Phone className="h-7 w-7" />
          <span className="font-geist text-sm mt-1">Call</span>
        </a>
        
        <Link
          to="/contact"
          className="flex flex-col items-center text-gray-600"
        >
          <Mail className="h-7 w-7" />
          <span className="font-geist text-sm mt-1">Contact</span>
        </Link>
      </div>
    </div>
  );
};

export default MobileNav; 
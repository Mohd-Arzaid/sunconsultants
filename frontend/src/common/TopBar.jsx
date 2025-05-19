import { Mail, Phone } from "lucide-react";

const TopBar = () => {
  return (
    <div className="bg-[#0A4394] hidden md:block text-white py-2">
      <div className="max-w-[88rem] mx-auto px-4 md:px-11">
        <div className="flex items-center justify-end space-x-6">
          <a
            href="mailto:info@sunconsultants.com"
            className="flex items-center tracking-wide font-geist text-[16px] hover:text-emerald-100 transition-colors"
          >
            <Mail className="w-4 h-4 mr-2" />
            info@sunconsultants.co.in
          </a>
          <a
            href="tel:+919876543210"
            className="flex items-center tracking-wide font-geist text-[15px] hover:text-emerald-100 transition-colors"
          >
            <Phone className="w-4 h-4 mr-2" />
            
            +91 93159 73373 

          </a>
    
        </div>
      </div>
    </div>
   
  );
};

export default TopBar; 
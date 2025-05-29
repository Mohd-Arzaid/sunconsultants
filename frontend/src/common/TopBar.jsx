import { Mail, Phone } from "lucide-react";

const TopBar = () => {
  return (
    <div className="bg-[#0A4394] hidden md:block text-white py-2">
      <div className="max-w-[88rem] mx-auto px-4 md:px-11">
        <div className="flex items-center justify-center">
          <div className="flex items-center gap-8">
            <a
              href="mailto:info@sunconsultants.co.in"
              className="flex items-center font-inter tracking-wide text-base hover:text-emerald-100 transition-colors duration-200"
            >
              <Mail className="w-4 h-4 mr-2" />
              info@sunconsultants.co.in
            </a>

            <div className="w-px h-5 bg-white/30"></div>

            <a
              href="mailto:support@sunconsultants.co.in"
              className="flex items-center font-inter tracking-wide text-base hover:text-emerald-100 transition-colors duration-200"
            >
              <Mail className="w-4 h-4 mr-2" />
              sunconsultantsinfo@gmail.com
            </a>

            <div className="w-px h-5 bg-white/30"></div>

            <a
              href="tel:+919315973373"
              className="flex items-center font-inter tracking-wide text-base hover:text-emerald-100 transition-colors duration-200"
            >
              <Phone className="w-4 h-4 mr-2" />
              +91 93159 73373
            </a>
            

            <div className="w-px h-5 bg-white/30"></div>

            <a
              href="tel:+919876543210"
              className="flex items-center font-inter tracking-wide text-base hover:text-emerald-100 transition-colors duration-200"
            >
              <Phone className="w-4 h-4 mr-2" />
              +91 73037 45057
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;

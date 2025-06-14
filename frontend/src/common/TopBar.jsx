import { Mail, Phone } from "lucide-react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const TopBar = () => {
  return (
    // <div className="bg-[#0A4394] hidden md:block text-white py-2.5">
    <div className="bg-[#0A4394] hidden md:block text-white py-2.5 sticky top-0 z-[50]">
      <div className="max-w-[88rem] mx-auto px-4 md:px-11 relative">
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
              href="mailto:support@suncertifications.co.in"
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
          </div>
        </div>

        <div className="absolute right-12 top-1/2 -translate-y-1/2 flex items-center gap-4">
          <a
            href="tel:+919315973373"
            className="flex items-center font-inter tracking-wide text-base hover:text-emerald-100 transition-all duration-300 hover:scale-110"
          >
            <Phone className="w-6 h-6" />
          </a>
          <a
            href="https://wa.me/919315973373"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center font-inter tracking-wide text-base hover:text-emerald-100 transition-all duration-300 hover:scale-110 hover:rotate-12"
          >
            <FontAwesomeIcon icon={faWhatsapp} className="w-6 h-6" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopBar;

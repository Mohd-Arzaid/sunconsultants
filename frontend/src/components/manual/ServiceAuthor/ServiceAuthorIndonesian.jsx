import { Mail, Linkedin } from "lucide-react";

const ServiceAuthorIndonesian = () => {
  return (
    <section className="">
      <div className="relative overflow-hidden bg-gradient-to-br from-[#F9F7F2] via-white to-[#F9F7F2] border border-gray-200 rounded-xl p-6 md:p-8 shadow-sm hover:shadow-md transition-all duration-300 group">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#1A8781]/5 to-transparent rounded-full -translate-y-4 translate-x-4"></div>
        <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-[#125E5A]/5 to-transparent rounded-full translate-y-2 -translate-x-2"></div>

        <div className="relative z-10">
          {/* Header */}
          <div className="flex items-center gap-3 mb-3">
            <h3 className="font-geist text-[18px] md:text-[22px] font-semibold text-[#1A8781]">
              Tentang Penulis
            </h3>
            <div className="flex-1 h-[1px] bg-gradient-to-r from-[#1A8781]/20 to-transparent"></div>
          </div>

          <div className="space-y-3">
            {/* Author name and title */}
            <div>
              <p className="font-geist text-[16px] md:text-[20px] font-semibold text-[#131316]">
                Dhruv Aggarwal
              </p>
              <p className="font-geist text-[14px] md:text-[18px] text-[#42434d]">
                Kepala Operasi di Sun Certifications India
              </p>
            </div>

            {/* Experience and achievements with subtle cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-4">
              <div className="flex items-center gap-3 p-3 bg-white/50 rounded-lg border border-[#1A8781]/10 hover:border-[#1A8781]/20 transition-colors duration-200">
                <p className="font-geist text-[14px] md:text-[18px] text-[#42434d]">
                  <span className="font-medium">Pengalaman:</span> 10+ tahun &
                  Menangani 1000+ proyek
                </p>
              </div>

              <div className="flex items-center gap-3 p-3 bg-white/50 rounded-lg border border-[#1A8781]/10 hover:border-[#1A8781]/20 transition-colors duration-200">
                <p className="font-geist text-[14px] md:text-[18px] text-[#42434d]">
                  Dihargai oleh banyak organisasi India dan Internasional
                </p>
              </div>
            </div>

            {/* Contact information with enhanced buttons */}
            <div className="pt-2 space-y-2">
              <div className="flex flex-col sm:flex-row gap-2">
                <a
                  href="https://www.linkedin.com/in/dhruv-aggarwal-44b116155"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 p-3 bg-gradient-to-r from-[#0077B5]/5 to-[#0077B5]/10 hover:from-[#0077B5]/10 hover:to-[#0077B5]/15 rounded-lg border border-[#0077B5]/10 hover:border-[#0077B5]/20 transition-all duration-200"
                >
                  <Linkedin className="w-4 h-4 text-[#0077B5]" />
                  <span className="font-geist text-[14px] md:text-[18px] text-[#42434d]">
                    <span className="font-medium">LinkedIn:</span> Terhubung
                    dengan saya
                  </span>
                </a>

                <a
                  href="mailto:admin@bis-certifications.com"
                  className="flex items-center gap-2 p-3 bg-gradient-to-r from-[#1A8781]/5 to-[#125E5A]/10 hover:from-[#1A8781]/10 hover:to-[#125E5A]/15 rounded-lg border border-[#1A8781]/10 hover:border-[#1A8781]/20 transition-all duration-200"
                >
                  <Mail className="w-4 h-4 text-[#1A8781]" />
                  <span className="font-geist text-[14px] md:text-[18px] text-[#42434d]">
                    <span className="font-medium">Kontak:</span>{" "}
                    admin@bis-certifications.com
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceAuthorIndonesian;

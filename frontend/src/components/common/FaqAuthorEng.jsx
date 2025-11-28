import { Mail, Linkedin } from "lucide-react";

const FaqAuthorEng = () => {
  return (
    <section className="">
      <div className="relative overflow-hidden bg-gradient-to-br from-[#F9F7F2] via-white to-[#F9F7F2] border border-gray-200 rounded-xl p-6 md:p-8 shadow-sm hover:shadow-md transition-all duration-300 group">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#1A8781]/5 to-transparent rounded-full -translate-y-4 translate-x-4"></div>
        <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-[#125E5A]/5 to-transparent rounded-full translate-y-2 -translate-x-2"></div>

        <div className="relative z-10">
          <div className="space-y-3">
            {/* Review sections */}
            <div className="space-y-3">
              <div className="p-3 bg-white/50 rounded-lg border border-[#1A8781]/10 hover:border-[#1A8781]/20 transition-colors duration-200">
                <p className="font-geist text-[14px] md:text-[18px] text-[#42434d]">
                  <span className="font-medium">
                    This response is reviewed by:
                  </span>{" "}
                  Our Principal Regulatory Consultant, a former BIS Deputy
                  Director General (Standardization). With over 30 years of
                  service, he specializes in interpreting the Bureau of Indian
                  Standards Act and simplifying complex certification workflows
                  for Indian manufacturers.
                </p>
              </div>

              <div className="p-3 bg-white/50 rounded-lg border border-[#1A8781]/10 hover:border-[#1A8781]/20 transition-colors duration-200">
                <p className="font-geist text-[14px] md:text-[18px] text-[#42434d]">
                  <span className="font-medium">Technical Review By:</span> Our
                  Senior Lead Auditor (Certification), a former BIS Scientist
                  'E' who served as the Head of Certification for the Northern
                  Region. He has overseen 1,500+ factory inspections and advises
                  on preventing common non-conformities during the application
                  stage.
                </p>
              </div>

              <div className="p-3 bg-white/50 rounded-lg border border-[#1A8781]/10 hover:border-[#1A8781]/20 transition-colors duration-200">
                <p className="font-geist text-[14px] md:text-[18px] text-[#42434d]">
                  <span className="font-medium">Compliance Review:</span> This
                  import compliance overview was reviewed by our Director of
                  Foreign Trade Compliance, a former Senior BIS Officer (FMCS
                  Dept). His expertise lies in navigating the Foreign
                  Manufacturers Certification Scheme and resolving customs
                  clearance hurdles for imported goods.
                </p>
              </div>

              <div className="p-3 bg-white/50 rounded-lg border border-[#1A8781]/10 hover:border-[#1A8781]/20 transition-colors duration-200">
                <p className="font-geist text-[14px] md:text-[18px] text-[#42434d]">
                  <span className="font-medium">Regulatory Oversight:</span>{" "}
                  This compliance advisory was vetted by our Senior Consultant
                  (Enforcement & Vigilance), a former BIS Director
                  (Enforcement). He specializes in post-certification
                  compliance, helping companies navigate surveillance audits and
                  legal adherence to BIS mandates.
                </p>
              </div>

              <div className="p-3 bg-white/50 rounded-lg border border-[#1A8781]/10 hover:border-[#1A8781]/20 transition-colors duration-200">
                <p className="font-geist text-[14px] md:text-[18px] text-[#42434d]">
                  <span className="font-medium">Scrutinised by:</span> This
                  documentation guide was reviewed by our Lead Application
                  Specialist, a former BIS Section Head (Licensing & Scrutiny).
                  With experience processing over 5,000 application files, he
                  ensures that client submissions meet the strict administrative
                  criteria to prevent rejection during the initial scrutiny
                  stage.
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
                    <span className="font-medium">LinkedIn:</span> Connect with
                    me
                  </span>
                </a>

                <a
                  href="mailto:admin@bis-certifications.com"
                  className="flex items-center gap-2 p-3 bg-gradient-to-r from-[#1A8781]/5 to-[#125E5A]/10 hover:from-[#1A8781]/10 hover:to-[#125E5A]/15 rounded-lg border border-[#1A8781]/10 hover:border-[#1A8781]/20 transition-all duration-200 cursor-pointer"
                >
                  <Mail className="w-4 h-4 text-[#1A8781]" />
                  <span className="font-geist text-[14px] md:text-[18px] text-[#42434d]">
                    <span className="font-medium">Contact:</span>{" "}
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

export default FaqAuthorEng;

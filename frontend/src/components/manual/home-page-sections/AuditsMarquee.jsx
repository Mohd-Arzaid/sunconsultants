import { Marquee } from "@/components/magicui/marquee";

// Audit Marquee Images - Using public folder for better deployment compatibility
const BahrainAudit = "/auditImages/Bahrain.webp";
const IndonesiaAudit = "/auditImages/Indonesia.webp";
const ItalyAudit = "/auditImages/Italy-2.webp";
const MalaysiaAudit = "/auditImages/Malaysia.webp";
const SloveniaAudit = "/auditImages/Slovenia.webp";
const ThailandAudit = "/auditImages/Thailand.webp";
const Vietnam2Audit = "/auditImages/Vietnam-2.webp";
const Vietnam3Audit = "/auditImages/Vietnam-3.webp";
const Vietnam4Audit = "/auditImages/Vietnam-4.webp";
const VietnamAudit = "/auditImages/Vietnam.webp";

const AuditsMarquee = () => {
  // Gallery images from InternationalAudits.jsx
  const galleryImages = [
    {
      id: 1,
      image: BahrainAudit,
      title: "Bahrain Audit",
    },
    {
      id: 2,
      image: IndonesiaAudit,
      title: "Indonesia Audit",
    },
    {
      id: 3,
      image: ItalyAudit,
      title: "Italy Audit",
    },
    {
      id: 4,
      image: MalaysiaAudit,
      title: "Malaysia Audit",
    },
    {
      id: 5,
      image: SloveniaAudit,
      title: "Slovenia Audit",
    },
    {
      id: 6,
      image: ThailandAudit,
      title: "Thailand Audit",
    },
    {
      id: 7,
      image: VietnamAudit,
      title: "Vietnam Audit",
    },
    {
      id: 8,
      image: Vietnam2Audit,
      title: "Vietnam Audit 2",
    },
    {
      id: 9,
      image: Vietnam3Audit,
      title: "Vietnam Audit 3",
    },
    {
      id: 10,
      image: Vietnam4Audit,
      title: "Vietnam Audit 4",
    },
  ];

  return (
    <div className="bg-white pt-8">
      <div className="max-w-[88rem] mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold font-playfair text-center mb-10 text-[#1e1e1e] tracking-tight">
          International Audit Glimpse
        </h2>
        {/* Marquee for desktop, scroll for mobile */}
        <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <Marquee
            className="flex items-center pt-4 pb-8 [--duration:80s]"
            pauseOnHover={true}
          >
            {galleryImages.map((item) => (
              <div
                key={item.id}
                className="relative min-w-[340px] max-w-[400px] bg-white rounded-3xl shadow-2xl overflow-hidden border-4 border-[#1A8781]/60 hover:border-[#0A4394] transition-all duration-300 group hover:scale-105 hover:shadow-[0_8px_40px_-8px_rgba(26,135,129,0.25)]"
                style={{
                  boxShadow:
                    "0 8px 40px -8px rgba(26,135,129,0.10), 0 1.5px 8px 0 rgba(10,67,148,0.08)",
                }}
              >
                <div className="relative w-full h-[260px] md:h-[320px] overflow-hidden bg-gray-200">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    style={{
                      imageRendering: "auto",
                      opacity: "0",
                      transition: "opacity 0.3s ease-in-out",
                    }}
                    onLoad={(e) => {
                      e.target.style.opacity = "1";
                    }}
                  />
                  {/* Gradient overlay for title */}
                  <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#1A8781]/90 via-[#1A8781]/40 to-transparent flex items-end justify-center">
                    <span className="w-full text-center px-4 pb-3 text-lg md:text-2xl font-bold font-playfair text-white drop-shadow-lg tracking-wide">
                      {item.title}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default AuditsMarquee;

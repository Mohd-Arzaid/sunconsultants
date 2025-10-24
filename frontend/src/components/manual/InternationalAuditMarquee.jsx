import { Marquee } from "../magicui/marquee";

// Audit Images - Using public folder webp files for better performance
const BahrainImage = "/auditImages/Bahrain.webp";
const IndonesiaImage = "/auditImages/Indonesia.webp";
const Italy2Image = "/auditImages/Italy-2.webp";
const MalaysiaImage = "/auditImages/Malaysia.webp";
const SloveniaImage = "/auditImages/Slovenia.webp";
const ThailandImage = "/auditImages/Thailand.webp";
const VietnamImage = "/auditImages/Vietnam.webp";
const Vietnam2Image = "/auditImages/Vietnam-2.webp";
const Vietnam3Image = "/auditImages/Vietnam-3.webp";
const Vietnam4Image = "/auditImages/Vietnam-4.webp";
const USAImage = "/auditImages/USA.webp";
const SpainImage = "/auditImages/Spain.webp";
const TurkeyImage = "/auditImages/Turkey.webp";

const InternationalAuditMarquee = () => {
  const marqueeImages = [
    {
      id: 1,
      image: BahrainImage,
      title: "Bahrain",
    },
    {
      id: 2,
      image: IndonesiaImage,
      title: "Indonesia",
    },
    {
      id: 3,
      image: Italy2Image,
      title: "Italy",
    },
    {
      id: 4,
      image: MalaysiaImage,
      title: "Malaysia",
    },
    {
      id: 5,
      image: SloveniaImage,
      title: "Slovenia",
    },
    {
      id: 6,
      image: ThailandImage,
      title: "Thailand",
    },
    {
      id: 7,
      image: VietnamImage,
      title: "Vietnam",
    },
    {
      id: 8,
      image: Vietnam2Image,
      title: "Vietnam",
    },
    {
      id: 9,
      image: Vietnam3Image,
      title: "Vietnam",
    },
    {
      id: 10,
      image: Vietnam4Image,
      title: "Vietnam",
    },
    {
      id: 11,
      image: USAImage,
      title: "USA",
    },
    {
      id: 12,
      image: SpainImage,
      title: "Spain",
    },
    {
      id: 13,
      image: TurkeyImage,
      title: "Turkey",
    },
  ];

  return (
    <div className="w-full py-16 overflow-hidden bg-[#F9F7F2]">
      <h2 className="text-3xl md:text-4xl text-center mb-6">
        <span className="font-playfair font-bold text-[#1e1e1e]">
          Our Global Presence
        </span>
      </h2>
      <p className="text-base md:text-lg text-center font-geist text-gray-600 max-w-xl mx-auto mb-12">
        A glimpse into our international audit and certification processes
        across various industries
      </p>

      <div className="relative">
        <Marquee className="py-4">
          <div className="flex gap-4">
            {marqueeImages.map((item) => (
              <div
                key={item.id}
                className="relative group flex-shrink-0 w-[280px] h-[320px] rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:scale-105"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-white text-xl font-semibold">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default InternationalAuditMarquee;

import BahrainImage from "../../assets/auditImages/Bahrain.png"
import IndonesiaImage from "../../assets/auditImages/Indonesia.png"
import Italy2Image from "../../assets/auditImages/Italy-2.png"
import MalaysiaImage from "../../assets/auditImages/Malaysia.png"
import SloveniaImage from "../../assets/auditImages/Slovenia.png"
import ThailandImage from "../../assets/auditImages/Thailand.png"
import VietnamImage from "../../assets/auditImages/Vietnam.png"
import Vietnam2Image from "../../assets/auditImages/Vietnam-2.png"
import Vietnam3Image from "../../assets/auditImages/Vietnam-3.png"
import Vietnam4Image from "../../assets/auditImages/Vietnam-4.png"
import { Marquee } from "../magicui/marquee"

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
    ];

    return (
        <div className="w-full py-16 overflow-hidden bg-[#F9F7F2]">
            <h2 className="text-3xl md:text-4xl text-center mb-6">
                <span className="font-playfair font-bold text-[#1e1e1e]">Our Global Presence</span>
            </h2>
            <p className="text-base md:text-lg text-center font-geist text-gray-600 max-w-xl mx-auto mb-12">
                A glimpse into our international audit and certification processes across various industries
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
                                        <h3 className="text-white text-xl font-semibold">{item.title}</h3>
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

export default InternationalAuditMarquee

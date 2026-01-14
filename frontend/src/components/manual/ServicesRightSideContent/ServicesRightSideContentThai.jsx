import {
  AlignLeft,
  ArrowRightIcon,
  Languages,
  Phone,
  User,
  Mail,
  PhoneCall,
  SendHorizontal,
  MessageCircle,
  Shield,
  Clock,
  Award,
  HeartHandshake,
  Lightbulb,
  BarChart,
} from "lucide-react";
import { Button } from "../../ui/button";
import { useState } from "react";
import axios from "axios";
// import { toast } from "sonner";
import { ClockLoader } from "react-spinners";
import { toast } from "@/hooks/use-toast";
import { Link, useLocation } from "react-router-dom";
import { Marquee } from "@/components/magicui/marquee";
const BASE_URL = import.meta.env.VITE_APP_BASE_URL;

const ServicesRightSideContentThai = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const showComponentsPaths = [
    // BISFM (Foreign Manufacturers) Thai Page Url
    "/th/khumanam-kanraprong-bis-samrab-puuphlit-thangchat-bis-india",
    "/what-is-crs-bis-or-crs-registration",
    "/kan-rap-rong-bis-nai-prathet-thai",
    "/th/crs-bis-khue-a-rai-rab-phit-thab-crs",
    // ISI Mark Thai Page Url
    "/th/bis-isi-mark-raprong",
    // BIS CERTIFICATION PATH
    "/th/bis-certificate-khue-a-rai-bis-india",
    // Centrifuges Thai Page URL
    "/kan-rap-rong-bis-phaen-x-samrab-khrueang-pan-wia-lae-khrueang-krong-rue-tham-hai-borisut",
    // Compressors Thai Page URL
    "/kan-rap-rong-bis-phaen-x-samrab-kompresor",
    // Construction Machinery Thai Page URL
    "/kan-rap-rong-bis-phaen-x-samrab-khrueang-thi-khuk-khuk",
    // Cranes Thai Page URL
    "/kan-rap-rong-bis-phaen-x-samrab-khren",
    // Diesel Generator Thai Page URL
    "/kan-rap-rong-bis-phaen-x-samrab-khrueang-khuean-ngan-fa-fa-diesel",
    // Embroidery Machines Thai Page URL
    "/kan-rap-rong-bis-phaen-x-samrab-khrueang-thai-rua",
    // Gears, Gearing and Transmission Elements Thai Page URL
    "/kan-rap-rong-bis-phaen-x-samrab-fueang-rab-khia-lae-ong-prakop-kan-song-kamlang",
    // Heat Treatment Equipment Thai Page URL
    "/kan-rap-rong-bis-phaen-x-samrab-uppakon-bambat-khwam-ron",
    // Machine Tools Thai Page URL
    "/kan-rap-rong-bis-phaen-x-samrab-khrueang-mue",
    // Metal Cutting Machines Thai Page URL
    "/kan-rap-rong-bis-phaen-x-samrab-khrueang-tat-lohak",
    // Packing Machinery Thai Page URL
    "/kan-rap-rong-bis-phaen-x-samrab-khrueang-pack",
    // Power Semiconductors Thai Page URL
    "/kan-rap-rong-bis-phaen-x-samrab-khrueang-ploy-phalang-bandojeo",
    // Public Works and Mechanical Thai Page URL
    "/kan-rap-rong-bis-phaen-x-samrab-ngan-satharana-lae-uppakon-kai",
    // Pumps and Liquid Elevators Thai Page URL
    "/kan-rap-rong-bis-phaen-x-samrab-pump-lae-lift-nam",
    // Rotary Electrical Machines Thai Page URL
    "/kan-rap-rong-bis-phaen-x-samrab-khrueang-fai-fa-kai",
    // Rubber and Plastics Machinery Thai Page URL
    "/kan-rap-rong-bis-phaen-x-samrab-khrueang-yang-yu-lae-plastik",
    // Switchgear and Controlgear Equipment Thai Page URL
    "/kan-rap-rong-bis-phaen-x-samrab-uppakon-switchgear-lae-controlgear-sut-1000-volt",
    // Switchgear and Controlgear Equipment Above 1000 Volts Thai Page URL
    "/kan-rap-rong-bis-phaen-x-samrab-uppakon-switchgear-lae-controlgear-kwa-1000-volt",
    // Transformers Thai Page URL
    "/kan-rap-rong-bis-phaen-x-samrab-transformer",
    // Weaving Machines Thai Page URL
    "/kan-rap-rong-bis-phaen-x-samrab-khrueang-tan",
    // BIS Certificate for Bunk Beds Thai Page Url
    "/blogs/isi-products/teng-song-chan-is-17636",
    // BIS Certificate for Beds Thai Page Url
    "/blogs/isi-products/teng-is-17635",
    // BIS Certificate for Work Chairs Thai Page Url
    "/blogs/isi-products/ghao-ngan-is-17631",
    // BIS Certificate for Chair And Stools Thai Page Url
    "/blogs/isi-products/ghao-lae-mang-is-17632",
    // BIS Certificate for Flashlight Thai Page Url
    "/blogs/isi-products/flashlight-thai-is-2083",
    // BIS Certificate for Furniture Thai Page Url
    "/blogs/isi-products/furniture-thai",
  ];

  // Check if current path should show these components
  const shouldShowComponents = showComponentsPaths.includes(currentPath);

  return (
    <div className="flex flex-col gap-6 w-full md:w-[360px]">
      {/* BIS QCO UPDATES - Services Right Side Content*/}
      {shouldShowComponents && <BISQCOUpdatesServicesRightSideContentThai />}
      {/* Client Testimonial - Services Right Side Content*/}
      <ClientTestimonialServicesRightSideContentThai />
      {/* Why Choose Us - Services Right Side Content*/}
      <WhyChooseUsServicesRightSideContentThai />
      {/* Contact Form - Services Right Side Content*/}
      <ContactFormServicesRightSideContentThai />
    </div>
  );
};

export default ServicesRightSideContentThai;

const BISQCOUpdatesServicesRightSideContentThai = () => {
  const blogPosts = [
    {
      image:
        "https://images.unsplash.com/photo-1688578735352-9a6f2ac3b70a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "การรับรอง BIS สำหรับเก้าอี้ทำงาน",
      url: "/bis-qco-updates/bis-certificate-for-work-chairs",
    },
    {
      image:
        "https://images.unsplash.com/photo-1651197122040-3ea0656161ae?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "การรับรอง BIS สำหรับเก้าอี้และม้านั่ง",
      url: "/bis-qco-updates/bis-certificate-for-chairs-and-stools",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3MCIfpfHsgrogddkI6G12hT4i6LwIPATLHg&s",
      title: "ประกาศ BIS สำหรับโต๊ะและโต๊ะทำงาน",
      url: "/bis-qco-updates/bis-certificate-for-tables-and-desks",
    },
    {
      image: "https://alephindia.in/images/isi/furniture-storage-units.png",
      title: "ประกาศ BIS สำหรับตู้เก็บของ",
      url: "/bis-qco-updates/bis-certificate-for-storage-units",
    },
    {
      image: "https://alephindia.in/images/isi/furniture-bunk-beds.png",
      title: "ประกาศ BIS สำหรับเตียงสองชั้น",
      url: "/bis-qco-updates/bis-certificate-for-bunk-beds",
    },
    {
      image:
        "https://jharkhandstatenews.com/assets/admin/uploads/topstory_img/199879_1693229978.jpg",
      title: "ประกาศ BIS สำหรับสายเคเบิล DC โซลาร์และสายเคเบิลป้องกันไฟไหม้",
      url: "/bis-qco-updates/bis-certificate-for-solar-dc-cable-and-fire-survival-cable",
    },
    {
      image:
        "https://5.imimg.com/data5/SELLER/Default/2024/5/420886415/LD/HF/LZ/65909740/bis-certification-for-aluminium-alloy-forging-stock-and-forgings-alloy-24345.jpg",
      title:
        "ประกาศ BIS สำหรับอลูมิเนียมตีขึ้นรูปและโลหะผสมอลูมิเนียม หุ้นการตีขึ้นรูปและการตีขึ้นรูป",
      url: "/bis-qco-updates/bis-certificate-for-wrought-aluminium-and-aluminium-alloys-forging-stock-and-forgings",
    },
    {
      image:
        "https://images.unsplash.com/photo-1651197122040-3ea0656161ae?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "ประกาศ BIS สำหรับกรด H",
      url: "/bis-qco-updates/bis-certificate-for-h-acid",
    },
    {
      image:
        "https://images.unsplash.com/photo-1617155093730-a8bf47be792d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "ประกาศ BIS สำหรับกรด K",
      url: "/bis-qco-updates/bis-certificate-for-k-acid",
    },
    {
      image:
        "https://media.istockphoto.com/id/940248330/photo/potassium-permanganate-sodium-sulfate-mixture.jpg?s=612x612&w=0&k=20&c=lhxvzbD2cVVOJKQyLIOqSaq9dlJTtDH07kHoBT5q7_4=",
      title: "ประกาศ BIS สำหรับไวนิลซัลโฟน",
      url: "/bis-qco-updates/bis-certificate-for-vinyl-sulphone",
    },
    {
      image:
        "https://m.media-amazon.com/images/I/71qI8OoNdtL._AC_UF1000,1000_QL80_.jpg",
      title: "ประกาศ BIS สำหรับเครื่องเพิ่มพลังงานรั้วไฟฟ้า",
      url: "/bis-qco-updates/bis-certificate-for-electric-fence-energizers",
    },
    {
      image:
        "https://images.unsplash.com/photo-1626806819282-2c1dc01a5e0c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "ประกาศ BIS สำหรับเครื่องซักผ้า",
      url: "/bis-qco-updates/bis-certificate-for-clothes-washing-machines",
    },
    {
      image: "https://m.media-amazon.com/images/I/31waXELONZL.jpg",
      title: "ประกาศ BIS สำหรับแผ่นปูนปลาสเตอร์",
      url: "/bis-qco-updates/bis-certificate-for-gypsum-plaster-boards",
    },
    {
      image:
        "https://m.media-amazon.com/images/I/61pOnpX8BpL._AC_UF1000,1000_QL80_.jpg",
      title:
        "ประกาศ BIS สำหรับท่อโลหะผสมอลูมิเนียมสำหรับการชลประทาน - ท่อเชื่อม",
      url: "/bis-qco-updates/bis-certificate-for-aluminium-alloy-tubes-for-irrigation-purposes-welded-tubes",
    },
    {
      image: "https://www.sunnysteel.com/img/extruded-finned-tube.jpg",
      title:
        "ประกาศ BIS สำหรับท่อโลหะผสมอลูมิเนียมสำหรับการชลประทาน – ท่ออัดขึ้นรูป",
      url: "/bis-qco-updates/bis-certificate-for-aluminium-alloy-tube-for-irrigation-purposes-extruded-tube",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLVrUUdi1q8ZFnBqvx3vW5Ac03cUtUwR7N_A&s",
      title:
        "ประกาศ BIS สำหรับแท่งอลูมิเนียมเกรด EC ที่ผลิตโดยการหล่อต่อเนื่องและการรีด",
      url: "/bis-qco-updates/bis-certificate-for-ec-grade-aluminium-rod-produced-by-continuous-casting-and-rolling",
    },
    {
      image:
        "https://media.istockphoto.com/id/1322355858/photo/aluminium-round-long-products-on-black-steel-surface.webp?a=1&b=1&s=612x612&w=0&k=20&c=I3k2F2cQSo5AW1qOQ5uxi2ROi-YJQoH47XzApxCP7qY=",
      title:
        "ประกาศ BIS สำหรับแท่ง ไม้ และส่วนอลูมิเนียมตีขึ้นรูปและโลหะผสมอลูมิเนียม",
      url: "/bis-qco-updates/bis-certificate-for-wrought-aluminium-and-aluminium-alloy-bars-rods-and-sections",
    },
    {
      image:
        "https://5.imimg.com/data5/SELLER/Default/2023/3/EC/HR/GU/184505254/regular-gypsum-plasterboard.jpg",
      title: "ประกาศ BIS สำหรับแผ่นปูนปลาสเตอร์",
      url: "/bis-qco-updates/bis-certificate-for-gypsum-plaster-boards",
    },
  ];

  return (
    <div className="w-full md:w-[360px] p-6 rounded-lg bg-gray-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
      <div className="flex gap-2 items-center">
        <AlignLeft className="text-[#232327]" />
        <div className="text-xl font-geist font-semibold text-[#232327]">
          อัปเดต BIS QCO
        </div>
      </div>
      <div className="relative h-[400px] overflow-hidden mt-5">
        <Marquee vertical pauseOnHover={true} className="[--duration:20s]">
          {blogPosts.map((post, index) => (
            <div key={index} className="mb-5">
              <div className="group flex gap-4 transition-all duration-300 h-20">
                {/* Image Container - Fixed width and height */}
                <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-md">
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    title={post.title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    onError={(e) => {
                      e.target.src = "/placeholder.svg";
                    }}
                  />
                </div>

                {/* Content Container - Flexible with consistent structure */}
                <div className="flex-1 flex flex-col justify-between h-20 py-1">
                  {/* Title - Takes available space but with consistent line clamping */}
                  <div className="flex-1">
                    <p className="line-clamp-2 font-geist text-sm font-normal text-zinc-900 leading-tight">
                      {post.title}
                    </p>
                  </div>

                  {/* Read More Button - Always at bottom */}
                  <div className="flex-shrink-0">
                    <Link to={post.url}>
                      <Button
                        variant="link"
                        className="text-blue-900 font-geist hover:text-blue-950 p-0 h-auto font-normal text-sm"
                      >
                        อ่านเพิ่มเติม
                        <ArrowRightIcon className="ml-1 h-3 w-3" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
              {/* Separator - consistent spacing */}
              {index < blogPosts.length - 1 && (
                <div className="mt-5 h-px w-full bg-gradient-to-r from-transparent via-border to-transparent" />
              )}
            </div>
          ))}
        </Marquee>
      </div>

      {/* View More Button */}
      <div className="mt-5 w-full flex justify-center">
        <Link to="/bis-qco-updates" className="w-full">
          <Button
            variant="outline"
            className="font-geist w-full bg-[#212126] hover:bg-[#212126]/90 text-white border-gray-300 hover:bg-gray-100"
          >
            ดูการอัปเดตทั้งหมด
            <ArrowRightIcon className="ml-1 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </div>
  );
};

const ClientTestimonialServicesRightSideContentThai = () => {
  const testimonials = [
    {
      name: "คุณ Eliyawati",
      role: "PT Quty Karunia, ผู้ถือใบอนุญาต BIS ในเวียดนาม",
      content:
        "Sun Certifications India ให้บริการรับรอง BIS ที่ยอดเยี่ยม บริการที่ไม่มีใครเทียบได้และความจริงใจของพวกเขาได้รับความไว้วางใจจากเรา เป็นหนึ่งในที่ปรึกษา BIS ที่ดีที่สุดในอินเดีย!",
    },
    {
      name: "คุณ Belle",
      role: "Thantawan Industries Ltd, ผู้ถือใบอนุญาต BIS ในประเทศไทย",
      content:
        "Sun Certifications India ให้การสนับสนุนเราตลอดกระบวนการรับรอง BIS บริการลูกค้าที่ตอบสนองและความตรงต่อเวลาของพวกเขาเป็นเลิศ แนะนำอย่างยิ่งสำหรับการรับรอง BIS ที่ไม่มีปัญหา",
    },
    {
      name: "คุณ Jun Min Sim",
      role: "Leaderart Industries, ผู้ถือใบอนุญาต BIS ในมาเลเซีย",
      content:
        "Sun Certifications India ช่วยให้เราได้รับใบรับรอง BIS เพิ่มการมีส่วนร่วมในอินเดียเป็นสองเท่า บริการของพวกเขาเร็ว จริงใจ และทันสมัยกับมาตรฐาน BIS ล่าสุด",
    },
    {
      name: "คุณ Fatima",
      role: "Aluminium Bahrain (ALBA), ผู้ถือใบอนุญาต BIS ในบาห์เรน",
      content:
        "การสนับสนุนการรับรอง BIS ที่ยอดเยี่ยม ที่ปรึกษาที่เชื่อถือได้มาก",
    },
    {
      name: "คุณ Yousef",
      role: "Bahrain Aluminium Manufacturing Company, ผู้ถือใบอนุญาต BIS ในบาห์เรน",
      content: "กระบวนการลงทะเบียน BIS ที่ราบรื่นพร้อมที่ปรึกษาผู้เชี่ยวชาญ",
    },
    {
      name: "คุณ Satoshi",
      role: "Daiki Aluminium Japan, ผู้ถือใบอนุญาต BIS ในญี่ปุ่น",
      content:
        "การช่วยเหลือใบอนุญาต BIS ที่มีประสิทธิภาพ ที่ปรึกษาที่ยอดเยี่ยม",
    },
    {
      name: "คุณ Amanda",
      role: "Honeywell, ผู้ถือใบอนุญาต BIS ในสหรัฐอเมริกา",
      content: "คำแนะนำใบรับรอง BIS ที่เป็นมืออาชีพ พอใจมาก",
    },
    {
      name: "คุณ Amanda",
      role: "Trimble Navigation, ผู้ถือใบอนุญาต BIS ในสหรัฐอเมริกา",
      content: "การสนับสนุนการรับรองและลงทะเบียน BIS ที่ราบรื่น",
    },
    {
      name: "คุณ Martina",
      role: "Remsa Italia, ผู้ถือใบอนุญาต BIS ในอิตาลี",
      content: "ที่ปรึกษา BIS ที่เป็นประโยชน์ กระบวนการใบอนุญาตที่ง่ายขึ้น",
    },
    {
      name: "คุณ Nikola",
      role: "Aquazzura, ผู้ถือใบอนุญาต BIS ในอิตาลี",
      content:
        "เราได้รับใบรับรอง BIS ภายในเวลาที่กำหนดและในราคาที่เหมาะสม งานที่ดีมากทีม Sun!",
    },
    {
      name: "คุณ Ayu",
      role: "PT Quty, ผู้ถือใบอนุญาต BIS ในอินโดนีเซีย",
      content: "บริการลงทะเบียน BIS ที่ยอดเยี่ยม แนะนำอย่างยิ่ง",
    },
    {
      name: "คุณ Huy",
      role: "Danu Vina, ผู้ถือใบอนุญาต BIS ในเวียดนาม",
      content: "ที่ปรึกษาใบอนุญาต BIS ที่เชื่อถือได้ กระบวนการที่รวดเร็ว",
    },
    {
      name: "คุณ Minh",
      role: "Hanh My Production Company, ผู้ถือใบอนุญาต BIS ในเวียดนาม",
      content: "ที่ปรึกษา BIS ผู้เชี่ยวชาญ การรับรองกลายเป็นเรื่องง่าย",
    },
    {
      name: "คุณ Hoa",
      role: "Sedo Vina, ผู้ถือใบอนุญาต BIS ในเวียดนาม",
      content: "การลงทะเบียนใบรับรอง BIS ที่ราบรื่น การสนับสนุนที่ยอดเยี่ยม",
    },
    {
      name: "คุณ Hana",
      role: "Misumi Japan, ผู้ถือใบอนุญาต BIS ในญี่ปุ่น",
      content: "ที่ปรึกษา BIS ที่เชื่อถือได้ กระบวนการรับรองที่รวดเร็ว",
    },
    {
      name: "คุณ Nok",
      role: "Thantawan Public Industry Company, ผู้ถือใบอนุญาต BIS ในประเทศไทย",
      content: "บริการรับรอง BIS ที่เป็นมืออาชีพ มีประสิทธิภาพมาก",
    },
    {
      name: "คุณ Luis",
      role: "Cortizo Aluminios, ผู้ถือใบอนุญาต BIS ในสเปน",
      content: "คำแนะนำการลงทะเบียนและใบอนุญาต BIS ที่ยอดเยี่ยม",
    },
    {
      name: "คุณ Aisha",
      role: "Midal Cables, ผู้ถือใบอนุญาต BIS ในบาห์เรน",
      content: "ที่ปรึกษา BIS ผู้เชี่ยวชาญ กระบวนการรับรองที่ราบรื่น",
    },
    {
      name: "คุณ Aisha",
      role: "Nobilia Kitchens, ผู้ถือใบอนุญาต BIS ในบาห์เรน",
      content: "การสนับสนุนการลงทะเบียนใบรับรอง BIS ที่เชื่อถือได้",
    },
  ];

  return (
    <div className="w-full md:w-[360px] rounded-lg overflow-hidden bg-gray-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
      <div className="pt-6 px-6 pb-4">
        <div className="flex gap-2 items-center">
          <Languages className="text-[#232327]" />
          <div className="text-xl font-geist font-semibold text-[#232327]">
            คำรับรองจากลูกค้า
          </div>
        </div>
        <div className="mt-8 mb-5 rounded-lg h-[450px] overflow-hidden">
          <Marquee
            vertical
            repeat={2}
            pauseOnHover={true}
            className="[--duration:60s]"
          >
            {testimonials.map((testimonial, index) => (
              <div key={index} className="group mb-6">
                <div className="bg-white p-4 rounded-lg border border-gray-300 shadow-sm hover:shadow-md transition-shadow duration-200">
                  <div className="mb-3">
                    <div className="font-geist font-bold text-neutral-800 text-base">
                      {testimonial.name}
                    </div>
                    <p className="text-sm text-neutral-600 font-geist mt-1">
                      {testimonial.role}
                    </p>
                  </div>
                  <p className="italic text-neutral-700 font-geist text-sm leading-relaxed font-medium">
                    &ldquo;{testimonial.content}&rdquo;
                  </p>
                </div>
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
};

const WhyChooseUsServicesRightSideContentThai = () => {
  const stats = {
    experience: { value: "12+", label: "ปีประสบการณ์" },
    clients: { value: "1500+", label: "ลูกค้าของเรา" },
    successRate: { value: "100%", label: "อัตราความสำเร็จ" },
    countries: { value: "20+", label: "ประเทศที่ให้บริการ" },
  };

  const reasons = [
    {
      title: "คำแนะนำจากผู้เชี่ยวชาญ",
      description:
        "ทีมของเรามีประสบการณ์มากกว่า 12 ปีในการปฏิบัติตาม CDSCO และ BIS",
    },
    {
      title: "ประสิทธิภาพด้านเวลา",
      description: "เราลดเวลาการอนุมัติได้ถึง 40% ด้วยกระบวนการที่ปรับปรุงแล้ว",
    },
    {
      title: "ความสำเร็จที่พิสูจน์แล้ว",
      description:
        "อัตราความสำเร็จ 100% ด้วยการลงทะเบียนที่สำเร็จมากกว่า 1500 รายการ",
    },
    {
      title: "มุ่งเน้นลูกค้า",
      description: "ผู้จัดการบัญชีเฉพาะที่รับประกันการบริการที่เป็นส่วนตัว",
    },
  ];

  const performance = {
    title: "ประสิทธิภาพของเรา",
    metrics: {
      speed: { label: "ความเร็ว", value: "95" },
      success: { label: "ความสำเร็จ", value: "99" },
      satisfaction: { label: "ความพึงพอใจ", value: "98" },
    },
  };

  const reasonIcons = {
    0: <Shield className="h-8 w-8 text-blue-600" />,
    1: <Clock className="h-8 w-8 text-emerald-600" />,
    2: <Award className="h-8 w-8 text-amber-600" />,
    3: <HeartHandshake className="h-8 w-8 text-purple-600" />,
  };

  return (
    <div className="w-full md:w-[360px] p-5 rounded-lg bg-gradient-to-br from-slate-50 to-gray-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
      {/* Header with Animation */}
      <div className="flex gap-2 items-center">
        <Lightbulb className="text-[#232327]" />
        <div className="text-xl font-geist font-semibold text-[#232327]">
          ทำไมต้องเลือกเรา
        </div>
      </div>

      {/* Highlight Stats */}
      <div className="mt-4 grid grid-cols-2 gap-2">
        <div className="bg-white p-2 rounded-lg border border-gray-200 text-center hover:border-blue-200">
          <div className="text-2xl font-bold text-blue-600 font-geist">
            {stats.experience.value}
          </div>
          <p className="text-xs text-gray-600 font-geist">
            {stats.experience.label}
          </p>
        </div>
        <div className="bg-white p-2 rounded-lg border border-gray-200 text-center hover:border-emerald-200">
          <div className="text-2xl font-bold text-emerald-600 font-geist">
            {stats.clients.value}
          </div>
          <p className="text-xs text-gray-600 font-geist">
            {stats.clients.label}
          </p>
        </div>
        <div className="bg-white p-2 rounded-lg border border-gray-200 text-center hover:border-amber-200">
          <div className="text-2xl font-bold text-amber-600 font-geist">
            {stats.successRate.value}
          </div>
          <p className="text-xs text-gray-600 font-geist">
            {stats.successRate.label}
          </p>
        </div>
        <div className="bg-white p-2 rounded-lg border border-gray-200 text-center hover:border-purple-200">
          <div className="text-2xl font-bold text-purple-600 font-geist">
            {stats.countries.value}
          </div>
          <p className="text-xs text-gray-600 font-geist">
            {stats.countries.label}
          </p>
        </div>
      </div>

      {/* Reasons List */}
      <div className="mt-4 space-y-3">
        {reasons.map((reason, index) => (
          <div
            key={index}
            className="group bg-white rounded-lg p-3 border border-gray-200 hover:border-blue-200"
          >
            <div className="flex gap-3 items-start">
              <div className="p-1.5 bg-gray-50 rounded-lg group-hover:bg-blue-50">
                {reasonIcons[index]}
              </div>
              <div>
                <div className="font-geist font-semibold text-gray-900 text-sm">
                  {reason.title}
                </div>
                <p className="text-xs text-gray-600 font-geist">
                  {reason.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Simple Performance */}
      <div className="mt-4 bg-blue-50 rounded-lg p-3 border border-blue-100">
        <div className="flex items-center gap-1 mb-2">
          <BarChart className="h-4 w-4 text-blue-600" />
          <span className="text-sm font-medium text-gray-900 font-geist">
            {performance.title}
          </span>
        </div>
        <div className="grid grid-cols-3 gap-2">
          <div className="text-center">
            <div className="h-1.5 w-full bg-gray-100 rounded-full mb-1">
              <div
                className="h-full bg-blue-600 rounded-full"
                style={{ width: `${performance.metrics.speed.value}%` }}
              ></div>
            </div>
            <span className="text-xs text-gray-600 font-geist">
              {performance.metrics.speed.label}
            </span>
          </div>
          <div className="text-center">
            <div className="h-1.5 w-full bg-gray-100 rounded-full mb-1">
              <div
                className="h-full bg-emerald-600 rounded-full"
                style={{ width: `${performance.metrics.success.value}%` }}
              ></div>
            </div>
            <span className="text-xs text-gray-600 font-geist">
              {performance.metrics.success.label}
            </span>
          </div>
          <div className="text-center">
            <div className="h-1.5 w-full bg-gray-100 rounded-full mb-1">
              <div
                className="h-full bg-amber-600 rounded-full"
                style={{ width: `${performance.metrics.satisfaction.value}%` }}
              ></div>
            </div>
            <span className="text-xs text-gray-600 font-geist">
              {performance.metrics.satisfaction.label}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

const ContactFormServicesRightSideContentThai = () => {
  const [loading, setLoading] = useState(false);

  // Function to get page name based on URL
  const getPageName = () => {
    const path = window.location.pathname;
    if (path.includes("/what-is-crs-bis-or-crs-registration"))
      return "CRS Registration (Thai)";
    if (path.includes("/kan-rap-rong-bis-nai-prathet-thai"))
      return "Thailand Blog (Thai)";
    if (path.includes("/th/crs-bis-khue-a-rai-rab-phit-thab-crs"))
      return "CRS Registration (Thai)";
    if (path.includes("/th/bis-isi-mark-raprong"))
      return "ISI Mark - Thai Page";
    if (path.includes("/th/bis-certificate-khue-a-rai-bis-india"))
      return "BIS Certification (Thai)";
    if (
      path.includes(
        "/kan-rap-rong-bis-phaen-x-samrab-khrueang-pan-wia-lae-khrueang-krong-rue-tham-hai-borisut"
      )
    )
      return "Centrifuges - Thai Page";
    if (path.includes("/kan-rap-rong-bis-phaen-x-samrab-kompresor"))
      return "Compressors - Thai Page";
    if (
      path.includes("/kan-rap-rong-bis-phaen-x-samrab-khrueang-thi-khuk-khuk")
    )
      return "Construction Machinery - Thai Page";
    if (path.includes("/kan-rap-rong-bis-phaen-x-samrab-khren"))
      return "Cranes - Thai Page";
    if (
      path.includes(
        "/kan-rap-rong-bis-phaen-x-samrab-khrueang-khuean-ngan-fa-fa-diesel"
      )
    )
      return "Diesel Generator - Thai Page";
    if (path.includes("/kan-rap-rong-bis-phaen-x-samrab-khrueang-thai-rua"))
      return "Embroidery Machines - Thai Page";
    if (
      path.includes(
        "/kan-rap-rong-bis-phaen-x-samrab-fueang-rab-khia-lae-ong-prakop-kan-song-kamlang"
      )
    )
      return "Gears, Gearing and Transmission Elements - Thai Page";
    if (
      path.includes("/kan-rap-rong-bis-phaen-x-samrab-uppakon-bambat-khwam-ron")
    )
      return "Heat Treatment Equipment - Thai Page";
    if (path.includes("/kan-rap-rong-bis-phaen-x-samrab-khrueang-mue"))
      return "Machine Tools - Thai Page";
    if (path.includes("/kan-rap-rong-bis-phaen-x-samrab-khrueang-tat-lohak"))
      return "Metal Cutting Machines - Thai Page";
    if (path.includes("/kan-rap-rong-bis-phaen-x-samrab-khrueang-pack"))
      return "Packing Machinery - Thai Page";
    if (
      path.includes(
        "/kan-rap-rong-bis-phaen-x-samrab-khrueang-ploy-phalang-bandojeo"
      )
    )
      return "Power Semiconductors - Thai Page";
    if (
      path.includes(
        "/kan-rap-rong-bis-phaen-x-samrab-ngan-satharana-lae-uppakon-kai"
      )
    )
      return "Public Works and Mechanical - Thai Page";
    if (path.includes("/kan-rap-rong-bis-phaen-x-samrab-pump-lae-lift-nam"))
      return "Pumps and Liquid Elevators - Thai Page";
    if (path.includes("/kan-rap-rong-bis-phaen-x-samrab-khrueang-fai-fa-kai"))
      return "Rotary Electrical Machines - Thai Page";
    if (
      path.includes(
        "/kan-rap-rong-bis-phaen-x-samrab-khrueang-yang-yu-lae-plastik"
      )
    )
      return "Rubber and Plastics Machinery - Thai Page";
    if (
      path.includes(
        "/kan-rap-rong-bis-phaen-x-samrab-uppakon-switchgear-lae-controlgear-sut-1000-volt"
      )
    )
      return "Switchgear and Controlgear Equipment - Thai Page";
    if (
      path.includes(
        "/kan-rap-rong-bis-phaen-x-samrab-uppakon-switchgear-lae-controlgear-kwa-1000-volt"
      )
    )
      return "Switchgear and Controlgear Equipment Above 1000 Volts - Thai Page";
    if (path.includes("/kan-rap-rong-bis-phaen-x-samrab-transformer"))
      return "Transformers - Thai Page";
    if (path.includes("/kan-rap-rong-bis-phaen-x-samrab-khrueang-tan"))
      return "Weaving Machines - Thai Page";

    // BISFM (Foreign Manufacturers) Thai Page Url
    if (
      path.includes(
        "/th/khumanam-kanraprong-bis-samrab-puuphlit-thangchat-bis-india"
      )
    )
      return "BISFM (Foreign Manufacturers) - Thai Page";

    // BIS Certificate for Bunk Beds Thai
    if (path.includes("/blogs/isi-products/teng-song-chan-is-17636"))
      return "BIS Certificate for Bunk Beds (Thai)";

    // BIS Certificate for Beds Thai
    if (path.includes("/blogs/isi-products/teng-is-17635"))
      return "BIS Certificate for Beds (Thai)";
    // BIS Certificate for Work Chairs Thai
    if (path.includes("/blogs/isi-products/ghao-ngan-is-17631"))
      return "BIS Certificate for Work Chairs (Thai)";
    // BIS Certificate for Chair And Stools Thai
    if (path.includes("/blogs/isi-products/ghao-lae-mang-is-17632"))
      return "BIS Certificate for Chair And Stools (Thai)";
    // BIS Certificate for Flashlight Thai
    if (path.includes("/blogs/isi-products/flashlight-thai-is-2083"))
      return "BIS Certificate for Flashlight (Thai)";
    // BIS Certificate for Furniture Thai
    if (path.includes("/blogs/isi-products/furniture-thai"))
      return "BIS Certificate for Furniture (Thai)";
    return "";
  };

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    message: "",
    pageUrl: window.location.href,
    pageName: getPageName(),
  });

  const { fullName, email, phoneNumber, message } = formData;

  const handleOnChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Full name validation
    const nameRegex = /^[a-zA-Z\s.'-]{2,50}$/;
    if (!nameRegex.test(fullName)) {
      toast({
        variant: "destructive",
        title: "กรุณาใส่ชื่อเต็มที่ถูกต้อง",
        description: "ชื่อควรมีเฉพาะตัวอักษรและช่องว่าง",
      });
      setLoading(false);
      return;
    }

    // Phone number validation
    const phoneRegex = /^\+?[0-9\s-]{8,15}$/;
    if (!phoneRegex.test(phoneNumber)) {
      toast({
        variant: "destructive",
        title: "กรุณาใส่หมายเลขโทรศัพท์ที่ถูกต้อง",
        description: "หมายเลขโทรศัพท์ควรมี (8-15 หลัก)",
      });
      setLoading(false);
      return;
    }

    // Email validation - allow any domain
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailRegex.test(email)) {
      toast({
        variant: "destructive",
        title: "กรุณาใส่ที่อยู่อีเมลที่ถูกต้อง",
        description: "ตรวจสอบว่าฟอร์แมตอีเมลของคุณถูกต้องหรือไม่",
      });
      setLoading(false);
      return;
    }

    console.log(formData);

    try {
      const response = await axios.post(
        `${BASE_URL}/contact/submit-contact`,
        formData
      );

      if (!response.data.success) {
        throw new Error(response.data.message);
      }
      toast({
        title: "ส่งแบบฟอร์มติดต่อสำเร็จ!",
        description: "ขอบคุณที่ติดต่อเรา ทีมของเราจะติดต่อกลับในไม่ช้า",
      });

      setFormData({
        fullName: "",
        email: "",
        phoneNumber: "",
        message: "",
        pageUrl: window.location.href,
        pageName: getPageName(),
      });
    } catch (error) {
      const errorMessage =
        error.response?.data?.message ||
        "ไม่สามารถส่งรายละเอียดแบบฟอร์มติดต่อได้!";
      toast({
        variant: "destructive",
        title: errorMessage,
        description:
          "เกิดข้อผิดพลาด กรุณาตรวจสอบรายละเอียดของคุณและลองอีกครั้ง",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full md:w-[360px] md:sticky md:top-[128px] md:self-start  p-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
      {/* Header */}
      <div className="flex gap-2 items-center">
        <PhoneCall className="text-[#232327]" />
        <div className="text-xl font-geist font-semibold text-[#232327]">
          ขอรับการโทรกลับฟรี
        </div>
      </div>

      {/* Intro Text */}
      <p className="mt-3 text-sm text-gray-600 font-geist">
        กรุณาใส่รายละเอียดของคุณด้านล่าง และผู้เชี่ยวชาญของเราจะโทรกลับ ภายใน 24
        ชั่วโมงเพื่อหารือเกี่ยวกับความต้องการการปฏิบัติตามกฎระเบียบของคุณ
      </p>

      {/* Form */}
      <form onSubmit={handleFormSubmit} className="mt-5 space-y-4">
        {/* Name Field */}
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <User className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            name="fullName"
            value={fullName}
            onChange={handleOnChange}
            disabled={loading}
            required
            placeholder="ชื่อของคุณ*"
            className="w-full py-2.5 pl-10 pr-3 font-geist bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
          />
        </div>

        {/* Phone Field */}
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <Phone className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="tel"
            name="phoneNumber"
            value={phoneNumber}
            onChange={handleOnChange}
            disabled={loading}
            required
            placeholder="หมายเลขโทรศัพท์*"
            className="w-full py-2.5 pl-10 pr-3 font-geist bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
          />
        </div>

        {/* Email Field */}
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <Mail className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleOnChange}
            disabled={loading}
            required
            placeholder="ที่อยู่อีเมล*"
            className="w-full py-2.5 pl-10 pr-3 font-geist bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
          />
        </div>

        {/* Message Field */}
        <div className="relative">
          <div className="absolute top-3 left-3 pointer-events-none">
            <MessageCircle className="h-5 w-5 text-gray-400" />
          </div>
          <textarea
            name="message"
            value={message}
            onChange={handleOnChange}
            disabled={loading}
            required
            placeholder="การรับรองที่ต้องการ*"
            rows="3"
            className="w-full py-2.5 pl-10 pr-3 font-geist bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
          ></textarea>
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          disabled={loading}
          className="w-full mt-5 font-geist bg-[#212126] hover:bg-[#212126]/90 text-white group relative overflow-hidden"
        >
          <span className="relative z-10 flex items-center">
            {loading ? (
              <div className="flex gap-3 items-center justify-center">
                <ClockLoader size={22} color="#fff" />
                <span>กำลังส่ง</span>
              </div>
            ) : (
              <>
                ขอรับการโทรกลับ
                <SendHorizontal className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </>
            )}
          </span>
          <span className="absolute top-0 left-0 w-0 h-full bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
        </Button>
      </form>

      {/* Privacy Note */}
      <p className="mt-3 text-xs text-center text-gray-500 font-geist">
        โดยการส่งแบบฟอร์มนี้ คุณยอมรับ{" "}
        <Link to="/privacy-policy" className="text-blue-600 hover:underline">
          นโยบายความเป็นส่วนตัว
        </Link>{" "}
        ของเราและยินยอมให้ติดต่อ
      </p>
    </div>
  );
};

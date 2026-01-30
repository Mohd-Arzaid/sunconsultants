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

const ServicesRightSideContentArabic = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const showComponentsPaths = [
    "/what-is-crs-bis-or-crs-registration",
    "/ar/dalil-shahadat-bis-lilmusanein-alajnabiyin-bis-alhind",
    "/ar/ma-huwa-crs-bis-aw-tasjeel-crs",
    "/shahadat-bis-fi-al-imarat",
    "/shahadat-bis-fi-qatar",
    "/shahadat-bis-fi-al-bahrain",
    "/shahadat-bis-fi-dubai",
    "/shahadat-bis-fi-iran",
    "/shahadat-bis-fi-al-iraq",
    "/ar/dalil-shahadat-bis-bis-alhind",
    // bis certification page url
    "/ar/ma-huwa-shahadat-bis-bis-alhind",
    "/shahadat-bis-mukhatat-x-lil-taard-almarkazi-wa-alat-altasfiya-aw-altanqiya",
    "/shahadat-bis-mukhatat-x-lil-daghitat",
    "/shahadat-bis-mukhatat-x-lil-alat-albina",
    "/shahadat-bis-mukhatat-x-lil-rafaat",
    "/shahadat-bis-mukhatat-x-lil-mawalid-al-dizil",
    "/shahadat-bis-mukhatat-x-lil-alat-al-tatriz",
    "/shahadat-bis-mukhatat-x-lil-turus-wa-anmatim-al-turus-wa-anasir-al-naql",
    "/shahadat-bis-mukhatat-x-lil-maadat-al-mualaja-al-harariya",
    "/shahadat-bis-mukhatat-x-lil-adawat-al-alat",
    "/shahadat-bis-mukhatat-x-lil-adawat-alat-qata-al-maadin",
    "/shahadat-bis-mukhatat-x-lil-maadat-al-taabia-wa-al-taghlif",
    "/shahadat-bis-mukhatat-x-lil-muhawilat-ashbah-al-mawasalat-lil-taqa",
    "/shahadat-bis-mukhatat-x-lil-ashghal-al-amah-wa-al-maadat-al-mikaniqiyah",
    "/shahadat-bis-mukhatat-x-lil-madakhat-wa-masaaid-as-sawail",
    "/shahadat-bis-mukhatat-x-lil-alat-al-kahrabiya-al-dawara",
    "/shahadat-bis-mukhatat-x-lil-alat-al-karet-wa-al-blastik",
    "/shahadat-bis-mukhatat-x-lil-maadat-switchgear-wa-controlgear-hata-1000-folt",
    "/shahadat-bis-mukhatat-x-lil-maadat-switchgear-wa-controlgear-fawq-1000-folt",
    "/shahadat-bis-mukhatat-x-lil-muhawilat",
    "/shahadat-bis-mukhatat-x-lil-alat-al-nasij-wa-al-anwal",
    // Bunk Beds Arabic Page Url
    "/blogs/isi-products/asrat-muzdawijat-is-17636",
    // BIS Certificate for Beds Arabic Page Url
    "/blogs/isi-products/asrat-is-17635",
    // BIS Certificate for Work Chairs Arabic Page Url
    "/blogs/isi-products/karasi-al-amal-is-17631",
    // BIS Certificate for Chair And Stools Arabic Page Url
    "/blogs/isi-products/karasi-wa-masaaid-is-17632",
    // BIS Certificate for General Purpose Chairs and Stools Arabic Page Url
    "/blogs/isi-products/karasi-wa-masaaid-ammat-is-17632",
    // BIS Certificate for Flashlight Arabic Page Url
    "/blogs/isi-products/masbah-yadawi-is-2083",
    // BIS Certificate for Furniture Arabic Page Url
    "/blogs/isi-products/athath",
    // BIS Certificate for Seamless Pipes and Tubes Arabic Page Url
    "/blogs/isi-products/anabib-wa-anabib-bila-daraz-is-17875",
    // BIS Certificate for Storage Unit Arabic Page Url
    "/blogs/isi-products/wahdat-al-takhzin-is-17634",
    // BIS Certificate for Tables & Desks Arabic Page Url
    "/blogs/isi-products/tawilat-wa-makatib-is-17633",
    // BIS Certificate for Welded Pipes & Tubes Arabic Page Url
    "/blogs/isi-products/anabib-wa-anabib-malwama-is-17876",
    // BIS Certificate for Battery Operated Air Purifier Arabic Page Url
    "/blogs/isi-products/munazzif-hawa-bi-batariya-is-302",
    // BIS Certificate for Battery Operated Toothbrush Arabic Page Url
    "/blogs/isi-products/firsha-asnan-bi-batariya-is-302",
    // BIS Certificate for Chain Pipe Wrenches Arabic Page Url
    "/blogs/isi-products/mafatih-anabib-silsila-is-4123",
    // BIS Certificate for Combination Side Cutting Pliers Arabic Page Url
    "/blogs/isi-products/qalb-janubiya-mujammaa-lilqata-is-3650",
    // BIS Certificate for Composite Synthetic Fibre Ropes Arabic Page Url
    "/blogs/isi-products/hibal-alyaf-sinaiya-murakkaba-is-14928",
  ];

  // Check if current path should show these components
  const shouldShowComponents = showComponentsPaths.includes(currentPath);

  return (
    <div className="flex flex-col gap-6 w-full md:w-[360px]">
      {/* BIS QCO UPDATES - Services Right Side Content*/}
      {shouldShowComponents && <BISQCOUpdatesServicesRightSideContentArabic />}
      {/* Client Testimonial - Services Right Side Content*/}
      <ClientTestimonialServicesRightSideContentArabic />
      {/* Why Choose Us - Services Right Side Content*/}
      <WhyChooseUsServicesRightSideContentArabic />
      {/* Contact Form - Services Right Side Content*/}
      <ContactFormServicesRightSideContentArabic />
    </div>
  );
};

export default ServicesRightSideContentArabic;

const BISQCOUpdatesServicesRightSideContentArabic = () => {
  const blogPosts = [
    {
      image:
        "https://images.unsplash.com/photo-1688578735352-9a6f2ac3b70a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "شهادة BIS للكراسي المكتبية",
      url: "/bis-qco-updates/bis-certificate-for-work-chairs",
    },
    {
      image:
        "https://images.unsplash.com/photo-1651197122040-3ea0656161ae?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "شهادة BIS للكراسي والمقاعد",
      url: "/bis-qco-updates/bis-certificate-for-chairs-and-stools",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3MCIfpfHsgrogddkI6G12hT4i6LwIPATLHg&s",
      title: "إشعار BIS للطاولات والمكاتب",
      url: "/bis-qco-updates/bis-certificate-for-tables-and-desks",
    },
    {
      image: "https://alephindia.in/images/isi/furniture-storage-units.png",
      title: "إشعار BIS لوحدات التخزين",
      url: "/bis-qco-updates/bis-certificate-for-storage-units",
    },
    {
      image: "https://alephindia.in/images/isi/furniture-bunk-beds.png",
      title: "إشعار BIS للأسرة المزدوجة",
      url: "/bis-qco-updates/bis-certificate-for-bunk-beds",
    },
    {
      image:
        "https://jharkhandstatenews.com/assets/admin/uploads/topstory_img/199879_1693229978.jpg",
      title: "إشعار BIS لكابلات الطاقة الشمسية وكابلات مقاومة الحريق",
      url: "/bis-qco-updates/bis-certificate-for-solar-dc-cable-and-fire-survival-cable",
    },
    {
      image:
        "https://5.imimg.com/data5/SELLER/Default/2024/5/420886415/LD/HF/LZ/65909740/bis-certification-for-aluminium-alloy-forging-stock-and-forgings-alloy-24345.jpg",
      title:
        "إشعار BIS للألمنيوم المطروق وسبائك الألمنيوم، مخزون التشكيل والمطروقات",
      url: "/bis-qco-updates/bis-certificate-for-wrought-aluminium-and-aluminium-alloys-forging-stock-and-forgings",
    },
    {
      image:
        "https://images.unsplash.com/photo-1651197122040-3ea0656161ae?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "إشعار BIS لحمض H",
      url: "/bis-qco-updates/bis-certificate-for-h-acid",
    },
    {
      image:
        "https://images.unsplash.com/photo-1617155093730-a8bf47be792d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "إشعار BIS لحمض K",
      url: "/bis-qco-updates/bis-certificate-for-k-acid",
    },
    {
      image:
        "https://media.istockphoto.com/id/940248330/photo/potassium-permanganate-sodium-sulfate-mixture.jpg?s=612x612&w=0&k=20&c=lhxvzbD2cVVOJKQyLIOqSaq9dlJTtDH07kHoBT5q7_4=",
      title: "إشعار BIS للفينيل سلفون",
      url: "/bis-qco-updates/bis-certificate-for-vinyl-sulphone",
    },
    {
      image:
        "https://m.media-amazon.com/images/I/71qI8OoNdtL._AC_UF1000,1000_QL80_.jpg",
      title: "إشعار BIS لمنشطات الأسوار الكهربائية",
      url: "/bis-qco-updates/bis-certificate-for-electric-fence-energizers",
    },
    {
      image:
        "https://images.unsplash.com/photo-1626806819282-2c1dc01a5e0c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "إشعار BIS لغسالات الملابس",
      url: "/bis-qco-updates/bis-certificate-for-clothes-washing-machines",
    },
    {
      image: "https://m.media-amazon.com/images/I/31waXELONZL.jpg",
      title: "إشعار BIS لألواح الجبس",
      url: "/bis-qco-updates/bis-certificate-for-gypsum-plaster-boards",
    },
    {
      image:
        "https://m.media-amazon.com/images/I/61pOnpX8BpL._AC_UF1000,1000_QL80_.jpg",
      title:
        "إشعار BIS لأنابيب سبائك الألمنيوم لأغراض الري - الأنابيب الملحومة",
      url: "/bis-qco-updates/bis-certificate-for-aluminium-alloy-tubes-for-irrigation-purposes-welded-tubes",
    },
    {
      image: "https://www.sunnysteel.com/img/extruded-finned-tube.jpg",
      title:
        "إشعار BIS لأنابيب سبائك الألمنيوم لأغراض الري – الأنابيب المطروقة",
      url: "/bis-qco-updates/bis-certificate-for-aluminium-alloy-tube-for-irrigation-purposes-extruded-tube",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLVrUUdi1q8ZFnBqvx3vW5Ac03cUtUwR7N_A&s",
      title:
        "إشعار BIS لقضبان الألمنيوم من الدرجة EC المنتجة بالصب المستمر والدرفلة",
      url: "/bis-qco-updates/bis-certificate-for-ec-grade-aluminium-rod-produced-by-continuous-casting-and-rolling",
    },
    {
      image:
        "https://media.istockphoto.com/id/1322355858/photo/aluminium-round-long-products-on-black-steel-surface.webp?a=1&b=1&s=612x612&w=0&k=20&c=I3k2F2cQSo5AW1qOQ5uxi2ROi-YJQoH47XzApxCP7qY=",
      title:
        "إشعار BIS لقضبان وأعمدة وأقسام الألمنيوم المطروق وسبائك الألمنيوم",
      url: "/bis-qco-updates/bis-certificate-for-wrought-aluminium-and-aluminium-alloy-bars-rods-and-sections",
    },
    {
      image:
        "https://5.imimg.com/data5/SELLER/Default/2023/3/EC/HR/GU/184505254/regular-gypsum-plasterboard.jpg",
      title: "إشعار BIS لألواح الجبس",
      url: "/bis-qco-updates/bis-certificate-for-gypsum-plaster-boards",
    },
  ];

  return (
    <div className="w-full md:w-[360px] p-6 rounded-lg bg-gray-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
      <div className="flex gap-2 items-center">
        <AlignLeft className="text-[#232327]" />
        <div className="text-xl font-geist font-semibold text-[#232327]">
          تحديثات BIS QCO
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
                        اقرأ المزيد
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
            عرض جميع التحديثات
            <ArrowRightIcon className="ml-1 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </div>
  );
};

const ClientTestimonialServicesRightSideContentArabic = () => {
  const testimonials = [
    {
      name: "السيدة إلياواتي",
      role: "PT Quty Karunia، حاصلة على ترخيص BIS في فيتنام",
      content:
        "قدمت Sun Certifications India خدمات شهادة BIS ممتازة. خدمتهم التي لا تضاهى وإخلاصهم كسبوا ثقتنا. أحد أفضل مستشاري BIS في الهند!",
    },
    {
      name: "السيدة بيل",
      role: "Thantawan Industries Ltd، حاصلة على ترخيص BIS في تايلاند",
      content:
        "دعمتنا Sun Certifications India طوال عملية شهادة BIS. خدمة العملاء الاستباقية ودقتهم في المواعيد استثنائية. موصى به بشدة للحصول على شهادة BIS بدون مشاكل.",
    },
    {
      name: "السيدة جون مين سيم",
      role: "Leaderart Industries، حاصلة على ترخيص BIS في ماليزيا",
      content:
        "ساعدتنا Sun Certifications India في الحصول على شهادة BIS، مما ضاعف مشاركتنا في الهند. خدماتهم سريعة وأصيلة ومحدثة بأحدث معايير BIS.",
    },
    {
      name: "السيدة فاطمة",
      role: "Aluminium Bahrain (ALBA)، حاصلة على ترخيص BIS في البحرين",
      content: "دعم شهادة BIS ممتاز، مستشارون موثوقون جداً.",
    },
    {
      name: "السيد يوسف",
      role: "Bahrain Aluminium Manufacturing Company، حاصل على ترخيص BIS في البحرين",
      content: "عملية تسجيل BIS سلسة مع مستشارين خبراء.",
    },
    {
      name: "السيد ساتوشي",
      role: "Daiki Aluminium Japan، حاصل على ترخيص BIS في اليابان",
      content: "مساعدة ترخيص BIS فعالة، مستشارون رائعون.",
    },
    {
      name: "السيدة أماندا",
      role: "Honeywell، حاصلة على ترخيص BIS في الولايات المتحدة",
      content: "إرشاد شهادة BIS مهني، راضية جداً.",
    },
    {
      name: "السيدة أماندا",
      role: "Trimble Navigation، حاصلة على ترخيص BIS في الولايات المتحدة",
      content: "دعم شهادة وتسجيل BIS سلس.",
    },
    {
      name: "السيدة مارتينا",
      role: "Remsa Italia، حاصلة على ترخيص BIS في إيطاليا",
      content: "مستشارو BIS مفيدون، عملية ترخيص مبسطة.",
    },
    {
      name: "السيدة نيكولا",
      role: "Aquazzura، حاصلة على ترخيص BIS في إيطاليا",
      content:
        "حصلنا على شهادة BIS في الوقت المحدد وبأسعار معقولة، عمل رائع فريق Sun!",
    },
    {
      name: "السيدة آيو",
      role: "PT Quty، حاصلة على ترخيص BIS في إندونيسيا",
      content: "خدمة تسجيل BIS ممتازة، موصى به بشدة.",
    },
    {
      name: "السيد هوي",
      role: "Danu Vina، حاصل على ترخيص BIS في فيتنام",
      content: "مستشارو ترخيص BIS موثوقون، عملية سريعة.",
    },
    {
      name: "السيد مينه",
      role: "Hanh My Production Company، حاصل على ترخيص BIS في فيتنام",
      content: "مستشارو BIS خبراء، الشهادة أصبحت سهلة.",
    },
    {
      name: "السيدة هوا",
      role: "Sedo Vina، حاصلة على ترخيص BIS في فيتنام",
      content: "تسجيل شهادة BIS سلس، دعم رائع.",
    },
    {
      name: "السيدة هانا",
      role: "Misumi Japan، حاصلة على ترخيص BIS في اليابان",
      content: "مستشارو BIS موثوقون، عملية شهادة سريعة.",
    },
    {
      name: "السيدة نوك",
      role: "Thantawan Public Industry Company، حاصلة على ترخيص BIS في تايلاند",
      content: "خدمة شهادة BIS مهنية، فعالة جداً.",
    },
    {
      name: "السيد لويس",
      role: "Cortizo Aluminios، حاصل على ترخيص BIS في إسبانيا",
      content: "إرشاد تسجيل وترخيص BIS ممتاز.",
    },
    {
      name: "السيدة عائشة",
      role: "Midal Cables، حاصلة على ترخيص BIS في البحرين",
      content: "مستشارو BIS خبراء، عملية شهادة سلسة.",
    },
    {
      name: "السيدة عائشة",
      role: "Nobilia Kitchens، حاصلة على ترخيص BIS في البحرين",
      content: "دعم تسجيل شهادة BIS موثوق.",
    },
  ];

  return (
    <div className="w-full md:w-[360px] rounded-lg overflow-hidden bg-gray-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
      <div className="pt-6 px-6 pb-4">
        <div className="flex gap-2 items-center">
          <Languages className="text-[#232327]" />
          <div className="text-xl font-geist font-semibold text-[#232327]">
            شهادات العملاء
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

const WhyChooseUsServicesRightSideContentArabic = () => {
  const stats = {
    experience: { value: "12+", label: "سنوات الخبرة" },
    clients: { value: "1500+", label: "عملاؤنا" },
    successRate: { value: "100%", label: "معدل النجاح" },
    countries: { value: "20+", label: "الدول المخدومة" },
  };

  const reasons = [
    {
      title: "إرشاد خبير",
      description:
        "فريقنا يجلب أكثر من 12 عاماً من الخبرة في الامتثال لـ CDSCO و BIS.",
    },
    {
      title: "كفاءة الوقت",
      description: "نقلل وقت الموافقة بنسبة تصل إلى 40% مع العمليات المبسطة.",
    },
    {
      title: "نجاح مثبت",
      description: "100% معدل نجاح مع أكثر من 1500 تسجيل ناجح.",
    },
    {
      title: "مركز على العميل",
      description: "مدير حساب مخصص يضمن خدمة مخصصة.",
    },
  ];

  const performance = {
    title: "أداؤنا",
    metrics: {
      speed: { label: "السرعة", value: "95" },
      success: { label: "النجاح", value: "99" },
      satisfaction: { label: "الرضا", value: "98" },
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
          لماذا تختارنا
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

const ContactFormServicesRightSideContentArabic = () => {
  const [loading, setLoading] = useState(false);

  // Function to get page name based on URL
  const getPageName = () => {
    const path = window.location.pathname;
    if (path.includes("/what-is-crs-bis-or-crs-registration"))
      return "CRS Registration (Arabic)";
    if (
      path.includes("/ar/dalil-shahadat-bis-lilmusanein-alajnabiyin-bis-alhind")
    )
      return "BIS Mark Foreign (Arabic)";

    if (path.includes("/ar/ma-huwa-crs-bis-aw-tasjeel-crs"))
      return "CRS Registration (Arabic)";
    if (path.includes("/shahadat-bis-fi-al-imarat")) return "UAE Blog (Arabic)";
    if (path.includes("/shahadat-bis-fi-qatar")) return "Qatar Blog (Arabic)";
    if (path.includes("/shahadat-bis-fi-al-bahrain"))
      return "Bahrain Blog (Arabic)";
    if (path.includes("/shahadat-bis-fi-dubai")) return "Dubai Blog (Arabic)";
    if (path.includes("/shahadat-bis-fi-iran")) return "Iran Blog (Arabic)";
    if (path.includes("/shahadat-bis-fi-al-iraq")) return "Iraq Blog (Arabic)";
    if (path.includes("/ar/dalil-shahadat-bis-bis-alhind"))
      return "ISI Mark (Arabic)";
    if (path.includes("/ar/ma-huwa-shahadat-bis-bis-alhind"))
      return "BIS Certification (Arabic)";
    if (
      path.includes(
        "/shahadat-bis-mukhatat-x-lil-taard-almarkazi-wa-alat-altasfiya-aw-altanqiya"
      )
    )
      return "Centrifuges Arabic (Scheme X)";
    if (path.includes("/shahadat-bis-mukhatat-x-lil-daghitat"))
      return "Compressors Arabic (Scheme X)";
    if (path.includes("/shahadat-bis-mukhatat-x-lil-alat-albina"))
      return "Construction Machinery Arabic (Scheme X)";
    if (path.includes("/shahadat-bis-mukhatat-x-lil-rafaat"))
      return "Cranes Arabic (Scheme X)";
    if (path.includes("/shahadat-bis-mukhatat-x-lil-mawalid-al-dizil"))
      return "Diesel Generators Arabic (Scheme X)";
    if (path.includes("/shahadat-bis-mukhatat-x-lil-alat-al-tatriz"))
      return "Embroidery Machines Arabic (Scheme X)";
    if (
      path.includes(
        "/shahadat-bis-mukhatat-x-lil-turus-wa-anmatim-al-turus-wa-anasir-al-naql"
      )
    )
      return "Gears Gearing and Transmission Arabic (Scheme X)";
    if (
      path.includes(
        "/shahadat-bis-mukhatat-x-lil-maadat-al-mualaja-al-harariya"
      )
    )
      return "Heat Treatment Equipment Arabic (Scheme X)";
    if (path.includes("/shahadat-bis-mukhatat-x-lil-adawat-al-alat"))
      return "Machine Tools Arabic (Scheme X)";
    if (
      path.includes("/shahadat-bis-mukhatat-x-lil-adawat-alat-qata-al-maadin")
    )
      return "Metal Cutting Machines Arabic (Scheme X)";
    if (
      path.includes(
        "/shahadat-bis-mukhatat-x-lil-maadat-al-taabia-wa-al-taghlif"
      )
    )
      return "Packing Machinery Arabic (Scheme X)";
    if (
      path.includes(
        "/shahadat-bis-mukhatat-x-lil-muhawilat-ashbah-al-mawasalat-lil-taqa"
      )
    )
      return "Power Semiconductors Arabic (Scheme X)";
    if (
      path.includes(
        "/shahadat-bis-mukhatat-x-lil-ashghal-al-amah-wa-al-maadat-al-mikaniqiyah"
      )
    )
      return "Public Works and Mechanical Arabic (Scheme X)";
    if (
      path.includes(
        "/shahadat-bis-mukhatat-x-lil-madakhat-wa-masaaid-as-sawail"
      )
    )
      return "Pumps and Liquid Elevators Arabic (Scheme X)";
    if (
      path.includes("/shahadat-bis-mukhatat-x-lil-alat-al-kahrabiya-al-dawara")
    )
      return "Rotary Electrical Machines Arabic (Scheme X)";
    if (
      path.includes("/shahadat-bis-mukhatat-x-lil-alat-al-karet-wa-al-blastik")
    )
      return "Rubber and Plastics Machinery Arabic (Scheme X)";
    if (
      path.includes(
        "/shahadat-bis-mukhatat-x-lil-maadat-switchgear-wa-controlgear-hata-1000-folt"
      )
    )
      return "Switchgear and Controlgear Equipment Arabic (Scheme X)";
    if (
      path.includes(
        "/shahadat-bis-mukhatat-x-lil-maadat-switchgear-wa-controlgear-fawq-1000-folt"
      )
    )
      return "Switchgear and Controlgear Equipment Above 1000 Volts Arabic (Scheme X)";
    if (path.includes("/shahadat-bis-mukhatat-x-lil-muhawilat"))
      return "Transformers Arabic (Scheme X)";
    if (path.includes("/shahadat-bis-mukhatat-x-lil-alat-al-nasij-wa-al-anwal"))
      return "Weaving Machines Arabic (Scheme X)";
    if (path.includes("/blogs/isi-products/asrat-muzdawijat-is-17636"))
      return "BIS Certificate for Bunk Beds (Arabic)";
    // BIS Certificate for Beds Arabic
    if (path.includes("/blogs/isi-products/asrat-is-17635"))
      return "BIS Certificate for Beds (Arabic)";
    // BIS Certificate for Work Chairs Arabic
    if (path.includes("/blogs/isi-products/karasi-al-amal-is-17631"))
      return "BIS Certificate for Work Chairs (Arabic)";
    // BIS Certificate for Chair And Stools Arabic
    if (path.includes("/blogs/isi-products/karasi-wa-masaaid-is-17632"))
      return "BIS Certificate for Chair & Stools (Arabic)";
    // BIS Certificate for General Purpose Chairs and Stools Arabic
    if (path.includes("/blogs/isi-products/karasi-wa-masaaid-ammat-is-17632"))
      return "BIS Certificate for General Purpose Chairs and Stools (Arabic)";
    // BIS Certificate for Flashlight Arabic
    if (path.includes("/blogs/isi-products/masbah-yadawi-is-2083"))
      return "BIS Certificate for Flashlight (Arabic)";
    // BIS Certificate for Furniture Arabic
    if (path.includes("/blogs/isi-products/athath"))
      return "BIS Certificate for Furniture (Arabic)";
    // BIS Certificate for Seamless Pipes and Tubes Arabic
    if (path.includes("/blogs/isi-products/anabib-wa-anabib-bila-daraz-is-17875"))
      return "BIS Certificate for Seamless Pipes and Tubes (Arabic)";
    // BIS Certificate for Storage Unit Arabic
    if (path.includes("/blogs/isi-products/wahdat-al-takhzin-is-17634"))
      return "BIS Certificate for Storage Unit (Arabic)";
    // BIS Certificate for Tables & Desks Arabic
    if (path.includes("/blogs/isi-products/tawilat-wa-makatib-is-17633"))
      return "BIS Certificate for Tables & Desks (Arabic)";
    // BIS Certificate for Welded Pipes & Tubes Arabic
    if (path.includes("/blogs/isi-products/anabib-wa-anabib-malwama-is-17876"))
      return "BIS Certificate for Welded Pipes & Tubes (Arabic)";
    // BIS Certificate for Battery Operated Air Purifier Arabic
    if (path.includes("/blogs/isi-products/munazzif-hawa-bi-batariya-is-302"))
      return "BIS Certificate for Battery Operated Air Purifier (Arabic)";
    // BIS Certificate for Battery Operated Toothbrush Arabic
    if (path.includes("/blogs/isi-products/firsha-asnan-bi-batariya-is-302"))
      return "BIS Certificate for Battery Operated Toothbrush (Arabic)";
    // BIS Certificate for Chain Pipe Wrenches Arabic
    if (path.includes("/blogs/isi-products/mafatih-anabib-silsila-is-4123"))
      return "BIS Certificate for Chain Pipe Wrenches (Arabic)";
    // BIS Certificate for Combination Side Cutting Pliers Arabic
    if (path.includes("/blogs/isi-products/qalb-janubiya-mujammaa-lilqata-is-3650"))
      return "BIS Certificate for Combination Side Cutting Pliers (Arabic)";
    // BIS Certificate for Composite Synthetic Fibre Ropes Arabic
    if (path.includes("/blogs/isi-products/hibal-alyaf-sinaiya-murakkaba-is-14928"))
      return "BIS Certificate for Composite Synthetic Fibre Ropes (Arabic)";
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
        title: "يرجى إدخال اسم كامل صحيح.",
        description: "يجب أن يحتوي الاسم على أحرف ومسافات فقط.",
      });
      setLoading(false);
      return;
    }

    // Phone number validation
    const phoneRegex = /^\+?[0-9\s-]{8,15}$/;
    if (!phoneRegex.test(phoneNumber)) {
      toast({
        variant: "destructive",
        title: "يرجى إدخال رقم هاتف صحيح",
        description: "يجب أن يحتوي رقم الهاتف على (8-15 رقم)",
      });
      setLoading(false);
      return;
    }

    // Email validation - allow any domain
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailRegex.test(email)) {
      toast({
        variant: "destructive",
        title: "يرجى إدخال عنوان بريد إلكتروني صحيح.",
        description: "تحقق من صحة تنسيق بريدك الإلكتروني",
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
        title: "تم إرسال نموذج الاتصال بنجاح!",
        description: "شكراً لتواصلك معنا. سيتواصل معك فريقنا قريباً.",
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
        error.response?.data?.message || "فشل في إرسال تفاصيل نموذج الاتصال!";
      toast({
        variant: "destructive",
        title: errorMessage,
        description: "حدث خطأ ما. يرجى التحقق من تفاصيلك والمحاولة مرة أخرى.",
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
          اطلب اتصال مجاني
        </div>
      </div>

      {/* Intro Text */}
      <p className="mt-3 text-sm text-gray-600 font-geist">
        اترك تفاصيلك أدناه وسيتواصل معك خبراؤنا خلال 24 ساعة لمناقشة احتياجاتك
        للامتثال التنظيمي.
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
            placeholder="اسمك*"
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
            placeholder="رقم الهاتف*"
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
            placeholder="عنوان البريد الإلكتروني*"
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
            placeholder="الشهادة المطلوبة*"
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
                <span>جاري الإرسال</span>
              </div>
            ) : (
              <>
                اطلب الاتصال
                <SendHorizontal className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </>
            )}
          </span>
          <span className="absolute top-0 left-0 w-0 h-full bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
        </Button>
      </form>

      {/* Privacy Note */}
      <p className="mt-3 text-xs text-center text-gray-500 font-geist">
        بإرسال هذا النموذج، فإنك توافق على{" "}
        <Link to="/privacy-policy" className="text-blue-600 hover:underline">
          سياسة الخصوصية
        </Link>{" "}
        الخاصة بنا وتوافق على الاتصال بك.
      </p>
    </div>
  );
};

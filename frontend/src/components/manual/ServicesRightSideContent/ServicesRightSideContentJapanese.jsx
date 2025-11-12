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

const ServicesRightSideContentJapanese = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const showComponentsPaths = [
    "/what-is-crs-bis-or-crs-registration",
    "/ja/indo-no-bis-nintei-sukimu-x",
    "/nihon-niokeru-bis-ninsho",
    "/ja/crs-bis-toha-nani-ka-crs-toroku",
    // ISIMark Japanese Page Url
    "/ja/bis-isi-mark-shounin",
    // BIS CERTIFICATION PATH
    "/ja/bis-shomeisho-toha-nani-ka-indo-no-bis",
    // Centrifuges Scheme X Product (Japanese) Page Url
    "/bis-sukiimu-x-ninshoo-sentorifugyu-oyobi-roka-matawa-joka-kikai",
    // Compressors Scheme X Product (Japanese) Page Url
    "/bis-sukiimu-x-ninshoo-konpuresa",
    // Construction Machinery Scheme X Product (Japanese) Page Url
    "/bis-sukiimu-x-ninshoo-kensetsu-kikai",
    // Cranes Scheme X Product (Japanese) Page Url
    "/bis-sukiimu-x-ninshoo-kurein",
    // Diesel Generators Scheme X Product (Japanese) Page Url
    "/bis-sukiimu-x-ninshoo-dizeru-hatsudenki",
    // Embroidery Machines Scheme X Product (Japanese) Page Url
    "/bis-sukiimu-x-ninshoo-shishu-kikai",
    // Gears, Gearing and Transmission Elements Scheme X Product (Japanese) Page Url
    "/bis-sukiimu-x-ninshoo-gia-gearing-oyobi-densha-yoso",
    // Heat Treatment Equipment Scheme X Product (Japanese) Page Url
    "/bis-sukiimu-x-ninshoo-netsu-shori-souchi",
    // Machine Tools Scheme X Product (Japanese) Page Url
    "/bis-sukiimu-x-ninshoo-kousaku-kikai",
    // Metal Cutting Machines Scheme X Product (Japanese) Page Url
    "/bis-sukiimu-x-ninshoo-kinzoku-setsusaku-kousaku-kikai",
    // Packing Machinery Scheme X Product (Japanese) Page Url
    "/bis-sukiimu-x-ninshoo-pakkingu-kikai",
    // Power Semiconductors Scheme X Product (Japanese) Page Url
    "/bis-sukiimu-x-ninshoo-denryoku-handoutai-henkan-ki",
    // Public Works And Mechanical Scheme X Product (Japanese) Page Url
    "/bis-sukiimu-x-ninshoo-koukyou-jigyou-oyobi-kikai-kougu",
    // Pumps And Liquid Elevators Scheme X Product (Japanese) Page Url
    "/bis-sukiimu-x-ninshoo-ponpu-oyobi-ekitai-erebeetaa",
    // Rotary Electrical Machines Scheme X Product (Japanese) Page Url
    "/bis-sukiimu-x-ninshoo-kaiten-denki-kikai",
  ];

  // Check if current path should show these components
  const shouldShowComponents = showComponentsPaths.includes(currentPath);

  return (
    <div className="flex flex-col gap-6 w-full md:w-[360px]">
      {/* BIS QCO UPDATES - Services Right Side Content*/}
      {shouldShowComponents && (
        <BISQCOUpdatesServicesRightSideContentJapanese />
      )}
      {/* Client Testimonial - Services Right Side Content*/}
      <ClientTestimonialServicesRightSideContentJapanese />
      {/* Why Choose Us - Services Right Side Content*/}
      <WhyChooseUsServicesRightSideContentJapanese />
      {/* Contact Form - Services Right Side Content*/}
      <ContactFormServicesRightSideContentJapanese />
    </div>
  );
};

export default ServicesRightSideContentJapanese;

const BISQCOUpdatesServicesRightSideContentJapanese = () => {
  const blogPosts = [
    {
      image:
        "https://images.unsplash.com/photo-1688578735352-9a6f2ac3b70a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "作業用椅子のBIS認証",
      url: "/bis-qco-updates/bis-certificate-for-work-chairs",
    },
    {
      image:
        "https://images.unsplash.com/photo-1651197122040-3ea0656161ae?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "椅子とスツールのBIS認証",
      url: "/bis-qco-updates/bis-certificate-for-chairs-and-stools",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3MCIfpfHsgrogddkI6G12hT4i6LwIPATLHg&s",
      title: "テーブルとデスクのBIS通知",
      url: "/bis-qco-updates/bis-certificate-for-tables-and-desks",
    },
    {
      image: "https://alephindia.in/images/isi/furniture-storage-units.png",
      title: "収納ユニットのBIS通知",
      url: "/bis-qco-updates/bis-certificate-for-storage-units",
    },
    {
      image: "https://alephindia.in/images/isi/furniture-bunk-beds.png",
      title: "二段ベッドのBIS通知",
      url: "/bis-qco-updates/bis-certificate-for-bunk-beds",
    },
    {
      image:
        "https://jharkhandstatenews.com/assets/admin/uploads/topstory_img/199879_1693229978.jpg",
      title: "太陽光DCケーブルおよび耐火ケーブルのBIS通知",
      url: "/bis-qco-updates/bis-certificate-for-solar-dc-cable-and-fire-survival-cable",
    },
    {
      image:
        "https://5.imimg.com/data5/SELLER/Default/2024/5/420886415/LD/HF/LZ/65909740/bis-certification-for-aluminium-alloy-forging-stock-and-forgings-alloy-24345.jpg",
      title:
        "鍛造アルミニウムおよびアルミニウム合金、鍛造材料および鍛造品のBIS通知",
      url: "/bis-qco-updates/bis-certificate-for-wrought-aluminium-and-aluminium-alloys-forging-stock-and-forgings",
    },
    {
      image:
        "https://images.unsplash.com/photo-1651197122040-3ea0656161ae?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "H酸のBIS通知",
      url: "/bis-qco-updates/bis-certificate-for-h-acid",
    },
    {
      image:
        "https://images.unsplash.com/photo-1617155093730-a8bf47be792d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "K酸のBIS通知",
      url: "/bis-qco-updates/bis-certificate-for-k-acid",
    },
    {
      image:
        "https://media.istockphoto.com/id/940248330/photo/potassium-permanganate-sodium-sulfate-mixture.jpg?s=612x612&w=0&k=20&c=lhxvzbD2cVVOJKQyLIOqSaq9dlJTtDH07kHoBT5q7_4=",
      title: "ビニルスルホンのBIS通知",
      url: "/bis-qco-updates/bis-certificate-for-vinyl-sulphone",
    },
    {
      image:
        "https://m.media-amazon.com/images/I/71qI8OoNdtL._AC_UF1000,1000_QL80_.jpg",
      title: "電気フェンスエナジャイザーのBIS通知",
      url: "/bis-qco-updates/bis-certificate-for-electric-fence-energizers",
    },
    {
      image:
        "https://images.unsplash.com/photo-1626806819282-2c1dc01a5e0c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "洗濯機のBIS通知",
      url: "/bis-qco-updates/bis-certificate-for-clothes-washing-machines",
    },
    {
      image: "https://m.media-amazon.com/images/I/31waXELONZL.jpg",
      title: "石膏ボードのBIS通知",
      url: "/bis-qco-updates/bis-certificate-for-gypsum-plaster-boards",
    },
    {
      image:
        "https://m.media-amazon.com/images/I/61pOnpX8BpL._AC_UF1000,1000_QL80_.jpg",
      title: "灌漑用アルミニウム合金チューブのBIS通知 - 溶接チューブ",
      url: "/bis-qco-updates/bis-certificate-for-aluminium-alloy-tubes-for-irrigation-purposes-welded-tubes",
    },
    {
      image: "https://www.sunnysteel.com/img/extruded-finned-tube.jpg",
      title: "灌漑用アルミニウム合金チューブのBIS通知 – 押出チューブ",
      url: "/bis-qco-updates/bis-certificate-for-aluminium-alloy-tube-for-irrigation-purposes-extruded-tube",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLVrUUdi1q8ZFnBqvx3vW5Ac03cUtUwR7N_A&s",
      title:
        "連続鋳造および圧延により製造されたECグレードアルミニウムロッドのBIS通知",
      url: "/bis-qco-updates/bis-certificate-for-ec-grade-aluminium-rod-produced-by-continuous-casting-and-rolling",
    },
    {
      image:
        "https://media.istockphoto.com/id/1322355858/photo/aluminium-round-long-products-on-black-steel-surface.webp?a=1&b=1&s=612x612&w=0&k=20&c=I3k2F2cQSo5AW1qOQ5uxi2ROi-YJQoH47XzApxCP7qY=",
      title:
        "鍛造アルミニウムおよびアルミニウム合金バー、ロッド、セクションのBIS通知",
      url: "/bis-qco-updates/bis-certificate-for-wrought-aluminium-and-aluminium-alloy-bars-rods-and-sections",
    },
    {
      image:
        "https://5.imimg.com/data5/SELLER/Default/2023/3/EC/HR/GU/184505254/regular-gypsum-plasterboard.jpg",
      title: "石膏ボードのBIS通知",
      url: "/bis-qco-updates/bis-certificate-for-gypsum-plaster-boards",
    },
  ];

  return (
    <div className="w-full md:w-[360px] p-6 rounded-lg bg-gray-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
      <div className="flex gap-2 items-center">
        <AlignLeft className="text-[#232327]" />
        <div className="text-xl font-geist font-semibold text-[#232327]">
          BIS QCO アップデート
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
                        続きを読む
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
            すべてのアップデートを見る
            <ArrowRightIcon className="ml-1 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </div>
  );
};

const ClientTestimonialServicesRightSideContentJapanese = () => {
  const testimonials = [
    {
      name: "Eliyawati様",
      role: "PT Quty Karunia、ベトナムBISライセンス保有者",
      content:
        "Sun Certifications Indiaは素晴らしいBIS認証サービスを提供しました。彼らの比類のないサービスと誠実さが私たちの信頼を獲得しました。インドで最高のBISコンサルタントの一つです！",
    },
    {
      name: "Belle様",
      role: "Thantawan Industries Ltd、タイBISライセンス保有者",
      content:
        "Sun Certifications IndiaはBIS認証プロセス全体を通じて私たちをサポートしました。彼らの迅速なカスタマーサービスと時間厳守は卓越しています。問題のないBIS認証を強くお勧めします。",
    },
    {
      name: "Jun Min Sim様",
      role: "Leaderart Industries、マレーシアBISライセンス保有者",
      content:
        "Sun Certifications Indiaは私たちがBIS認証を取得するのを支援し、インドでの私たちの関与を2倍にしました。彼らのサービスは迅速で、真摯で、最新のBIS規範に更新されています。",
    },
    {
      name: "Fatima様",
      role: "Aluminium Bahrain (ALBA)、バーレーンBISライセンス保有者",
      content:
        "素晴らしいBIS認証サポート、非常に信頼できるコンサルタントです。",
    },
    {
      name: "Yousef様",
      role: "Bahrain Aluminium Manufacturing Company、バーレーンBISライセンス保有者",
      content: "専門コンサルタントとのスムーズなBIS登録プロセスです。",
    },
    {
      name: "Satoshi様",
      role: "Daiki Aluminium Japan、日本BISライセンス保有者",
      content: "効率的なBISライセンス支援、素晴らしいコンサルタントです。",
    },
    {
      name: "Amanda様",
      role: "Honeywell、米国BISライセンス保有者",
      content:
        "プロフェッショナルなBIS証明書ガイダンス、非常に満足しています。",
    },
    {
      name: "Amanda様",
      role: "Trimble Navigation、米国BISライセンス保有者",
      content: "シームレスなBIS認証および登録サポートです。",
    },
    {
      name: "Martina様",
      role: "Remsa Italia、イタリアBISライセンス保有者",
      content: "有用なBISコンサルタント、簡素化されたライセンスプロセスです。",
    },
    {
      name: "Nikola様",
      role: "Aquazzura、イタリアBISライセンス保有者",
      content:
        "私たちは定められた時間内に手頃な価格でBIS証明書を取得しました。素晴らしい仕事ですSunチーム！",
    },
    {
      name: "Ayu様",
      role: "PT Quty、インドネシアBISライセンス保有者",
      content: "素晴らしいBIS登録サービス、強くお勧めします。",
    },
    {
      name: "Huy様",
      role: "Danu Vina、ベトナムBISライセンス保有者",
      content: "信頼できるBISライセンスコンサルタント、迅速なプロセスです。",
    },
    {
      name: "Minh様",
      role: "Hanh My Production Company、ベトナムBISライセンス保有者",
      content: "専門BISコンサルタント、認証が簡単になりました。",
    },
    {
      name: "Hoa様",
      role: "Sedo Vina、ベトナムBISライセンス保有者",
      content: "スムーズなBIS証明書登録、素晴らしいサポートです。",
    },
    {
      name: "Hana様",
      role: "Misumi Japan、日本BISライセンス保有者",
      content: "信頼できるBISコンサルタント、迅速な認証プロセスです。",
    },
    {
      name: "Nok様",
      role: "Thantawan Public Industry Company、タイBISライセンス保有者",
      content: "プロフェッショナルなBIS認証サービス、非常に効率的です。",
    },
    {
      name: "Luis様",
      role: "Cortizo Aluminios、スペインBISライセンス保有者",
      content: "素晴らしいBIS登録およびライセンスガイダンスです。",
    },
    {
      name: "Aisha様",
      role: "Midal Cables、バーレーンBISライセンス保有者",
      content: "専門BISコンサルタント、スムーズな認証プロセスです。",
    },
    {
      name: "Aisha様",
      role: "Nobilia Kitchens、バーレーンBISライセンス保有者",
      content: "信頼できるBIS証明書登録サポートです。",
    },
  ];

  return (
    <div className="w-full md:w-[360px] rounded-lg overflow-hidden bg-gray-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
      <div className="pt-6 px-6 pb-4">
        <div className="flex gap-2 items-center">
          <Languages className="text-[#232327]" />
          <div className="text-xl font-geist font-semibold text-[#232327]">
            お客様の声
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

const WhyChooseUsServicesRightSideContentJapanese = () => {
  const stats = {
    experience: { value: "12+", label: "年の経験" },
    clients: { value: "1500+", label: "お客様数" },
    successRate: { value: "100%", label: "成功率" },
    countries: { value: "20+", label: "サービス国" },
  };

  const reasons = [
    {
      title: "専門家ガイダンス",
      description:
        "私たちのチームはCDSCOおよびBISコンプライアンスで12年以上の経験を提供します。",
    },
    {
      title: "時間効率",
      description: "最適化されたプロセスにより、承認時間を最大40%短縮します。",
    },
    {
      title: "実証された成功",
      description: "1500件以上の成功した登録で100%の成功率を達成しました。",
    },
    {
      title: "お客様中心",
      description:
        "個人化されたサービスを保証する専任アカウントマネージャーです。",
    },
  ];

  const performance = {
    title: "私たちのパフォーマンス",
    metrics: {
      speed: { label: "速度", value: "95" },
      success: { label: "成功", value: "99" },
      satisfaction: { label: "満足度", value: "98" },
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
          私たちを選ぶ理由
        </div>
      </div>

      {/* Highlight Stats */}
      <div className="mt-4 grid grid-cols-2 gap-2">
        <div className="bg-white p-2 rounded-lg border border-gray-200 text-center hover:border-blue-200">
          <h3 className="text-2xl font-bold text-blue-600 font-geist">
            {stats.experience.value}
          </h3>
          <p className="text-xs text-gray-600 font-geist">
            {stats.experience.label}
          </p>
        </div>
        <div className="bg-white p-2 rounded-lg border border-gray-200 text-center hover:border-emerald-200">
          <h3 className="text-2xl font-bold text-emerald-600 font-geist">
            {stats.clients.value}
          </h3>
          <p className="text-xs text-gray-600 font-geist">
            {stats.clients.label}
          </p>
        </div>
        <div className="bg-white p-2 rounded-lg border border-gray-200 text-center hover:border-amber-200">
          <h3 className="text-2xl font-bold text-amber-600 font-geist">
            {stats.successRate.value}
          </h3>
          <p className="text-xs text-gray-600 font-geist">
            {stats.successRate.label}
          </p>
        </div>
        <div className="bg-white p-2 rounded-lg border border-gray-200 text-center hover:border-purple-200">
          <h3 className="text-2xl font-bold text-purple-600 font-geist">
            {stats.countries.value}
          </h3>
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
                <h3 className="font-geist font-semibold text-gray-900 text-sm">
                  {reason.title}
                </h3>
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

const ContactFormServicesRightSideContentJapanese = () => {
  const [loading, setLoading] = useState(false);

  // Function to get page name based on URL
  const getPageName = () => {
    const path = window.location.pathname;
    if (path.includes("/what-is-crs-bis-or-crs-registration"))
      return "CRS Registration (Japanese)";
    if (path.includes("/ja/indo-no-bis-nintei-sukimu-x"))
      return "Scheme X Japanese";
    if (path.includes("/nihon-niokeru-bis-ninsho"))
      return "Japan Blog Japanese";
    if (path.includes("/ja/crs-bis-toha-nani-ka-crs-toroku"))
      return "CRS Registration (Japanese)";
    // ISIMark Japanese Page Url
    if (path.includes("/ja/bis-isi-mark-shounin"))
      return "ISI Mark - Japanese Page";
    // BIS CERTIFICATION PATH
    if (path.includes("/ja/bis-shomeisho-toha-nani-ka-indo-no-bis"))
      return "BIS Certification (Japanese)";

    // Centrifuges Scheme X Product (Japanese) Page Url
    if (
      path.includes(
        "/bis-sukiimu-x-ninshoo-sentorifugyu-oyobi-roka-matawa-joka-kikai"
      )
    )
      return "Centrifuges Scheme X Product (Japanese)";

    // Compressors Scheme X Product (Japanese) Page Url
    if (path.includes("/bis-sukiimu-x-ninshoo-konpuresa"))
      return "Compressors Scheme X Product (Japanese)";

    // Construction Machinery Scheme X Product (Japanese) Page Url
    if (path.includes("/bis-sukiimu-x-ninshoo-kensetsu-kikai"))
      return "Construction Machinery Scheme X Product (Japanese)";

    // Cranes Scheme X Product (Japanese) Page Url
    if (path.includes("/bis-sukiimu-x-ninshoo-kurein"))
      return "Cranes Scheme X Product (Japanese)";

    // Diesel Generators Scheme X Product (Japanese) Page Url
    if (path.includes("/bis-sukiimu-x-ninshoo-dizeru-hatsudenki"))
      return "Diesel Generators Scheme X Product (Japanese)";

    // Embroidery Machines Scheme X Product (Japanese) Page Url
    if (path.includes("/bis-sukiimu-x-ninshoo-shishu-kikai"))
      return "Embroidery Machines Scheme X Product (Japanese)";

    // Gears, Gearing and Transmission Elements Scheme X Product (Japanese) Page Url
    if (path.includes("/bis-sukiimu-x-ninshoo-gia-gearing-oyobi-densha-yoso"))
      return "Gears, Gearing and Transmission Elements Scheme X Product (Japanese)";

    // Heat Treatment Equipment Scheme X Product (Japanese) Page Url
    if (path.includes("/bis-sukiimu-x-ninshoo-netsu-shori-souchi"))
      return "Heat Treatment Equipment Scheme X Product (Japanese)";

    // Machine Tools Scheme X Product (Japanese) Page Url
    if (path.includes("/bis-sukiimu-x-ninshoo-kousaku-kikai"))
      return "Machine Tools Scheme X Product (Japanese)";

    // Metal Cutting Machines Scheme X Product (Japanese) Page Url
    if (path.includes("/bis-sukiimu-x-ninshoo-kinzoku-setsusaku-kousaku-kikai"))
      return "Metal Cutting Machines Scheme X Product (Japanese)";

    // Packing Machinery Scheme X Product (Japanese) Page Url
    if (path.includes("/bis-sukiimu-x-ninshoo-pakkingu-kikai"))
      return "Packing Machinery Scheme X Product (Japanese)";

    // Power Semiconductors Scheme X Product (Japanese) Page Url
    if (path.includes("/bis-sukiimu-x-ninshoo-denryoku-handoutai-henkan-ki"))
      return "Power Semiconductors Scheme X Product (Japanese)";

    // Public Works And Mechanical Scheme X Product (Japanese) Page Url
    if (
      path.includes("/bis-sukiimu-x-ninshoo-koukyou-jigyou-oyobi-kikai-kougu")
    )
      return "Public Works And Mechanical Scheme X Product (Japanese)";

    // Pumps And Liquid Elevators Scheme X Product (Japanese) Page Url
    if (path.includes("/bis-sukiimu-x-ninshoo-ponpu-oyobi-ekitai-erebeetaa"))
      return "Pumps And Liquid Elevators Scheme X Product (Japanese)";

    // Rotary Electrical Machines Scheme X Product (Japanese) Page Url
    if (path.includes("/bis-sukiimu-x-ninshoo-kaiten-denki-kikai"))
      return "Rotary Electrical Machines Scheme X Product (Japanese)";
  };

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    message: "",
    pageUrl: window.location.href,
    pageName: getPageName(),
  });

  const { fullName, email, phoneNumber, message, pageUrl, pageName } = formData;

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
        title: "有効な氏名を入力してください。",
        description: "名前は文字とスペースのみを含む必要があります。",
      });
      setLoading(false);
      return;
    }

    // Phone number validation
    const phoneRegex = /^\+?[0-9\s-]{8,15}$/;
    if (!phoneRegex.test(phoneNumber)) {
      toast({
        variant: "destructive",
        title: "有効な電話番号を入力してください",
        description: "電話番号は（8-15桁）である必要があります",
      });
      setLoading(false);
      return;
    }

    // Email validation - allow any domain
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailRegex.test(email)) {
      toast({
        variant: "destructive",
        title: "有効なメールアドレスを入力してください。",
        description: "メール形式が正しいか確認してください",
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
        title: "お問い合わせフォームが正常に送信されました！",
        description:
          "お問い合わせいただき、ありがとうございます。私たちのチームがすぐにご連絡いたします。",
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
        "お問い合わせフォームの詳細を送信できませんでした！";
      toast({
        variant: "destructive",
        title: errorMessage,
        description: "問題が発生しました。詳細を確認して再試行してください。",
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
          無料コールバック依頼
        </div>
      </div>

      {/* Intro Text */}
      <p className="mt-3 text-sm text-gray-600 font-geist">
        以下に詳細を残していただければ、私たちの専門家が24時間以内にご連絡し、
        規制コンプライアンスのニーズについて議論いたします。
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
            placeholder="お名前*"
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
            placeholder="電話番号*"
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
            placeholder="メールアドレス*"
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
            placeholder="必要な認証*"
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
                <span>送信中</span>
              </div>
            ) : (
              <>
                コールバック依頼
                <SendHorizontal className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </>
            )}
          </span>
          <span className="absolute top-0 left-0 w-0 h-full bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
        </Button>
      </form>

      {/* Privacy Note */}
      <p className="mt-3 text-xs text-center text-gray-500 font-geist">
        このフォームを送信することで、お客様は私たちの{" "}
        <a href="#" className="text-blue-600 hover:underline">
          プライバシーポリシー
        </a>{" "}
        に同意し、連絡を受けることに同意したものとみなされます。
      </p>
    </div>
  );
};

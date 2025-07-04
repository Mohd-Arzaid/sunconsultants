import {
  AlignLeft,
  ArrowRightIcon,
  ChevronRight,
  Languages,
  Star,
  Calendar,
  CalendarDays,
  MapPin,
  Bell,
  FileText,
  ExternalLink,
  ChevronDown,
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
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { useState } from "react";
import axios from "axios";
// import { toast } from "sonner";
import { ClockLoader } from "react-spinners";
import { toast } from "@/hooks/use-toast";
import { Link, useLocation } from "react-router-dom";
import { Marquee } from "@/components/magicui/marquee";
const BASE_URL = import.meta.env.VITE_APP_BASE_URL;

const CDSCOContentRight = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  // List of paths where LatestBlog and LatestNotification should be shown
  const showComponentsPaths = [
    "/a-guide-to-bis-certification-for-foreign-manufacturers-indian-bis",
    "/a-guide-to-bis-certification-indian-bis",
    "/what-is-bis-certificate-indian-bis",
    "/what-is-crs-bis-or-crs-registration",
    "/schemeX",
  ];

  // Check if current path should show these components
  const shouldShowComponents = showComponentsPaths.includes(currentPath);

  return (
    <div className="flex flex-col gap-6 w-full md:w-[360px] ">
      {/* Latest Blogs - Only show on specific paths */}
      {shouldShowComponents && <LatestBlog />}
      {/* <OurServices /> */}
      <ClientTestimonial />
      {/* <OurEvents /> */}
      <WhyChooseUs />
      {/* Latest Notification - Only show on specific paths */}
      {/* {shouldShowComponents && <LatestNotification />} */}
      <FreeCallBack />
    </div>
  );
};

export default CDSCOContentRight;

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: <Shield className="h-8 w-8 text-blue-600" />,
      title: "Expert Guidance",
      description:
        "Our team brings 12+ years of experience in CDSCO and BIS compliance.",
    },
    {
      icon: <Clock className="h-8 w-8 text-emerald-600" />,
      title: "Time Efficient",
      description:
        "We reduce approval time by up to 40% with streamlined processes.",
    },
    {
      icon: <Award className="h-8 w-8 text-amber-600" />,
      title: "Proven Success",
      description: "100% success rate with 1500+ successful registrations.",
    },
    {
      icon: <HeartHandshake className="h-8 w-8 text-purple-600" />,
      title: "Client-Centric",
      description: "Dedicated account manager ensuring personalized service.",
    },
  ];

  return (
    <div className="w-full md:w-[360px] p-5 rounded-lg bg-gradient-to-br from-slate-50 to-gray-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
      {/* Header with Animation */}
      <div className="flex gap-2 items-center">
        <Lightbulb className="text-[#232327]" />
        <h1 className="text-xl font-geist font-semibold text-[#232327]">
          Why Choose Us
        </h1>
      </div>

      {/* Highlight Stats */}
      <div className="mt-4 grid grid-cols-2 gap-2">
        <div className="bg-white p-2 rounded-lg border border-gray-200 text-center hover:border-blue-200">
          <h3 className="text-2xl font-bold text-blue-600 font-geist">12+</h3>
          <p className="text-xs text-gray-600 font-geist">Years Exp.</p>
        </div>
        <div className="bg-white p-2 rounded-lg border border-gray-200 text-center hover:border-emerald-200">
          <h3 className="text-2xl font-bold text-emerald-600 font-geist">
            1500+
          </h3>
          <p className="text-xs text-gray-600 font-geist">Our Clients</p>
        </div>
        <div className="bg-white p-2 rounded-lg border border-gray-200 text-center hover:border-amber-200">
          <h3 className="text-2xl font-bold text-amber-600 font-geist">100%</h3>
          <p className="text-xs text-gray-600 font-geist">Success Rate</p>
        </div>
        <div className="bg-white p-2 rounded-lg border border-gray-200 text-center hover:border-purple-200">
          <h3 className="text-2xl font-bold text-purple-600 font-geist">20+</h3>
          <p className="text-xs text-gray-600 font-geist">Countries Served</p>
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
                {reason.icon}
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
            Our Performance
          </span>
        </div>
        <div className="grid grid-cols-3 gap-2">
          <div className="text-center">
            <div className="h-1.5 w-full bg-gray-100 rounded-full mb-1">
              <div
                className="h-full bg-blue-600 rounded-full"
                style={{ width: "95%" }}
              ></div>
            </div>
            <span className="text-xs text-gray-600 font-geist">Speed</span>
          </div>
          <div className="text-center">
            <div className="h-1.5 w-full bg-gray-100 rounded-full mb-1">
              <div
                className="h-full bg-emerald-600 rounded-full"
                style={{ width: "99%" }}
              ></div>
            </div>
            <span className="text-xs text-gray-600 font-geist">Success</span>
          </div>
          <div className="text-center">
            <div className="h-1.5 w-full bg-gray-100 rounded-full mb-1">
              <div
                className="h-full bg-amber-600 rounded-full"
                style={{ width: "98%" }}
              ></div>
            </div>
            <span className="text-xs text-gray-600 font-geist">
              Satisfaction
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export const LatestBlog = () => {
  const blogPosts = [
    {
      image:
        "https://images.unsplash.com/photo-1688578735352-9a6f2ac3b70a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "BIS",
      title: "BIS certification for Work chairs",
      url: "/latest-notification/work-chairs",
    },
    {
      image:
        "https://www.housingunits.co.uk/blog/2024/01/matching-bar-stools-dining-chairs/comerenowithmeb/",
      category: "BIS",
      title: "BIS certification for Chairs and stools",
      url: "/latest-notification/and-stools",
    },
    {
      image:
        "https://globalomega.com/wp-content/uploads/WhatsApp-Image-2023-11-22-at-16.08.01-1-300x300.jpeg",
      category: "BIS",
      title: "BIS Notification for Tables and desks",
      url: "/latest-notification/and-desks",
    },
    {
      image: "https://alephindia.in/images/isi/furniture-storage-units.png",
      category: "BIS",
      title: "BIS Notification for Storage units",
      url: "/latest-notification/storage-units",
    },
    {
      image: "https://alephindia.in/images/isi/furniture-bunk-beds.png",
      category: "BIS",
      title: "BIS Notification for Bunk beds",
      url: "/latest-notification/bunk-beds",
    },

    {
      image:
        "https://jharkhandstatenews.com/assets/admin/uploads/topstory_img/199879_1693229978.jpg",
      category: "BIS",
      title: "BIS Notification for Solar DC Cable and Fire Survival Cable",
      url: "/latest-notification/survival-cable",
    },

    {
      image:
        "https://5.imimg.com/data5/SELLER/Default/2024/5/420886415/LD/HF/LZ/65909740/bis-certification-for-aluminium-alloy-forging-stock-and-forgings-alloy-24345.jpg",
      category: "BIS",
      title:
        "BIS Notification for Wrought Aluminium and Aluminium Alloys, Forging Stock and Forgings",
      url: "/latest-notification/and-forgings",
    },

    {
      image:
        "https://images.unsplash.com/photo-1651197122040-3ea0656161ae?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "BIS",
      title: "BIS Notification for H Acid",
      url: "/latest-notification/h-acid",
    },

    {
      image:
        "https://images.unsplash.com/photo-1617155093730-a8bf47be792d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "BIS",
      title: "BIS Notification for K Acid",
      url: "/latest-notification/k-acid",
    },

    {
      image:
        "https://media.istockphoto.com/id/940248330/photo/potassium-permanganate-sodium-sulfate-mixture.jpg?s=612x612&w=0&k=20&c=lhxvzbD2cVVOJKQyLIOqSaq9dlJTtDH07kHoBT5q7_4=",
      category: "BIS",
      title: "BIS Notification for Vinyl Sulphone",
      url: "/latest-notification/vinyl-sulphone",
    },

    {
      image:
        "https://m.media-amazon.com/images/I/71qI8OoNdtL._AC_UF1000,1000_QL80_.jpg",
      category: "BIS",
      title: "BIS Notification for Electric Fence Energizers",
      url: "/latest-notification/fence-energizers",
    },

    {
      image:
        "https://images.unsplash.com/photo-1626806819282-2c1dc01a5e0c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "BIS",
      title: "BIS Notification for Clothes Washing Machines",
      url: "/latest-notification/washing-machines",
    },

    {
      image: "https://m.media-amazon.com/images/I/31waXELONZL.jpg",
      category: "BIS",
      title: "BIS Notification for Gypsum Plaster Boards",
      url: "/latest-notification/plaster-boards",
    },

    {
      image:
        "https://m.media-amazon.com/images/I/61pOnpX8BpL._AC_UF1000,1000_QL80_.jpg",
      category: "BIS",
      title:
        "BIS Notification for Aluminium alloy tubes for irrigation purposes -welded tubes",
      url: "/latest-notification/-welded-tubes",
    },

    {
      image: "https://www.sunnysteel.com/img/extruded-finned-tube.jpg",
      category: "BIS",
      title:
        "BIS Notification for Aluminium alloy tube for irrigation purposes – extruded tube",
      url: "/latest-notification/extruded-tube",
    },

    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLVrUUdi1q8ZFnBqvx3vW5Ac03cUtUwR7N_A&s",
      category: "BIS",
      title:
        "BIS Notification for EC Grade Aluminium Rod produced by Continuous Casting and Rolling",
      url: "/latest-notification/and-rolling",
    },

    {
      image:
        "https://vincular.in/wp-content/uploads/2024/11/304.-Quality-Control-Order-on-Wrought-aluminium-and-aluminium-alloy-bars-rods-and-sections-For-General-Engineering-Purposes.png",
      category: "BIS",
      title:
        "BIS Notification for Wrought aluminium and aluminium alloy bars, rods and sections",
      url: "/latest-notification/and-sections",
    },

    {
      image:
        "https://5.imimg.com/data5/SELLER/Default/2023/3/EC/HR/GU/184505254/regular-gypsum-plasterboard.jpg",
      category: "BIS",
      title: "BIS Notification for Gypsum Plaster Boards",
      url: "/latest-notification/plaster-boards",
    },
  ];

  return (
    <div className="w-full md:w-[360px] p-6 rounded-lg bg-gray-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
      <div className="flex gap-2 items-center ">
        <AlignLeft className="text-[#232327]" />
        <h1 className="text-xl font-geist font-semibold  text-[#232327]">
          Latest Blogs
        </h1>
      </div>
      <div className="relative h-[400px] overflow-hidden mt-5">
        <Marquee vertical pauseOnHover={true} className="[--duration:20s]">
          {blogPosts.map((post, index) => (
            <div key={index} className="mb-5">
              <div className=" group flex gap-4  transition-all duration-300">
                <img
                  src={post.image || "/placeholder.svg"}
                  alt="Post Image"
                  className="h-20 w-20 object-cover shrink-0 overflow-hidden rounded-md transition-transform duration-300 group-hover:scale-105 "
                />

                <div className=" h-20 w-20 flex flex-1 flex-col justify-between">
                  <div className="space-y-2">
                    <Badge
                      variant="outline"
                      className=" bg-emerald-50 font-geist text-emerald-700 border-emerald-200 hover:bg-emerald-100 hover:text-emerald-800"
                    >
                      {post.category}
                    </Badge>
                    <p className="line-clamp-2 font-geist text-sm font-normal text-zinc-900">
                      {post.title}
                    </p>

                    <a href={post.url}>
                      <Button
                        variant="link"
                        className="text-blue-900 font-geist hover:text-blue-950 p-0 h-auto font-normal text-sm"
                      >
                        Read More
                        <ArrowRightIcon className="-ml-1 mt-0.5" />
                      </Button>
                    </a>
                  </div>
                </div>
              </div>

              {index < blogPosts.length - 1 && (
                <div className="mt-5 h-px w-full bg-gradient-to-r from-transparent via-border to-transparent" />
              )}
            </div>
          ))}
        </Marquee>
      </div>

      {/* View More Button */}
      <div className="mt-5 w-full  flex justify-center">
        <Link to="/latest-notifications" className="w-full">
          <Button
            variant="outline"
            className="font-geist w-full bg-[#212126] hover:bg-[#212126]/90 text-white border-gray-300  hover:bg-gray-100"
          >
            View All Blogs
            <ArrowRightIcon className="ml-1 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </div>
  );
};

const OurServices = () => {
  const services = [
    {
      image: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d",
      title: "BIS Mark (ISI License) for Foreign Manufacture",
      description:
        "Expert assistance for obtaining BIS Mark (ISI License) for foreign manufacturers, ensuring compliance with Indian standards.",
      link: "/services/bis-mark-foreign",
    },
    {
      image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09",
      title: "BIS Registration Certificate",
      description:
        "Comprehensive support for BIS Registration Certificate for electronic and IT products as per Indian regulations.",
      link: "/services/bis-certification",
    },
    {
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40",
      title: "ISI MARK (BIS) for Indian Manufactures",
      description:
        "Guidance for Indian manufacturers to obtain ISI Mark (BIS) certification for various products.",
      link: "/services/isi-mark-indian",
    },
    {
      image: "https://images.unsplash.com/photo-1464983953574-0892a716854b",
      title: "BIS (CRS) Registration",
      description:
        "Professional help for BIS (CRS) Registration for electronic and IT goods under Compulsory Registration Scheme.",
      link: "/services/crs-registration",
    },
    {
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef",
      title: "EPR Certificate Consultants",
      description:
        "Consultancy for EPR (Extended Producer Responsibility) Certificate for e-waste, plastic waste, and battery waste management.",
      link: "/services/epr-registration",
    },
    {
      image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2",
      title: "LMPC Certificate Consultants",
      description:
        "Expert guidance for obtaining LMPC (Legal Metrology Packaged Commodities) Certificate for importers and manufacturers.",
      link: "/services/lmpc-registration",
    },
    {
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40",
      title: "CDSCO Registration Certification",
      description:
        "Specialized consultation for CDSCO Registration Certification for medical devices and pharmaceuticals.",
      link: "/services/cdsco-registration-certification",
    },
    {
      image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca",
      title: "Plastic Waste Management",
      description:
        "Support for compliance and certification in Plastic Waste Management as per Indian environmental regulations.",
      link: "/services/plastic-waste",
    },
  ];
  return (
    <div className="w-full md:w-[360px] p-6 rounded-lg bg-gray-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
      <div className="flex gap-2 items-center ">
        <Star className="  fill-current text-[#232327] " size={20} />

        <h1 className="text-xl font-geist font-semibold  text-[#232327]">
          Our Services
        </h1>
      </div>

      <div className="mt-5 space-y-5">
        {services.map((service, index) => (
          <div key={index}>
            <div className="relative rounded-md overflow-hidden">
              <img
                src={service.image}
                alt={service.title}
                className="h-48 w-full object-cover transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                <div className="p-4 text-white">
                  <h3 className="font-geist font-semibold text-lg">
                    {service.title}
                  </h3>
                </div>
              </div>
            </div>

            <div className="py-2">
              <p className="text-base text-gray-600 font-geist mb-2 ">
                {service.description}
              </p>

              <Link to={service.link}>
                <Button className="w-full font-geist bg-[#212126] hover:bg-[#212126]/90 text-white">
                  Learn More
                  <ArrowRightIcon />
                </Button>
              </Link>
            </div>
            {index < services.length - 1 && (
              <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-200 to-transparent my-2" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

const ClientTestimonial = () => {
  const testimonials = [
    {
      name: "Ms.Eliyawati",
      role: "PT Quty Karunia, BIS Licensee in Vietnam",
      content:
        "Sun Certifications India provided excellent BIS Certification services. Their unparalleled service and sincerity gained our trust.",
    },
    {
      name: "Ms.Belle",
      role: "Thantawan Industries Ltd, BIS Licensee in Thailand",
      content:
        "Sun Certifications India supported us throughout the BIS certification process. Their responsive customer service is exceptional.",
    },
    {
      name: "Ms.Jun Min Sim",
      role: "Leaderart Industries, BIS Licensee in Malaysia",
      content:
        "Sun Certifications India helped us acquire BIS Certification, doubling our engagement in India. Their services are genuine and up-to-date.",
    },
    {
      name: "Ms.Eliyawati",
      role: "PT Quty Karunia, BIS Licensee in Vietnam",
      content:
        "One of the best BIS consultants in India! Their expertise made the entire process seamless for us.",
    },
    {
      name: "Ms.Belle",
      role: "Thantawan Industries Ltd, BIS Licensee in Thailand",
      content:
        "Highly recommend Sun Certifications India for hassle-free BIS certification. Professional and punctual service.",
    },
  ];
  return (
    <div className="w-full md:w-[360px] rounded-lg overflow-hidden bg-gray-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
      <div className="pt-6 px-6 pb-4">
        <div className="flex gap-2 items-center">
          <Languages className="text-[#232327]" />
          <h1 className="text-xl font-geist font-semibold text-[#232327]">
            Client Testimonials
          </h1>
        </div>
        <div className="mt-8 mb-5 rounded-lg h-60 overflow-hidden">
          <Marquee
            vertical
            repeat={2}
            pauseOnHover={true}
            className="[--duration:18s]"
          >
            {testimonials.map((testimonial, index) => (
              <div key={index} className="group mb-6">
                <div className="bg-white p-4 rounded-lg border border-gray-300 shadow-sm hover:shadow-md transition-shadow duration-200">
                  <div className="mb-3">
                    <h3 className="font-geist font-bold text-neutral-800 text-base">
                      {testimonial.name}
                    </h3>
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

const OurEvents = () => {
  const events = [
    {
      id: 1,
      title: "CDSCO Annual Conference 2023",
      date: "Nov 15, 2023",
      time: "10:00 AM - 4:00 PM",
      location: "Grand Hyatt, Mumbai",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87",
      category: "Conference",
      isHighlighted: true,
    },
    {
      id: 2,
      title: "Medical Device Regulations Workshop",
      date: "Dec 05, 2023",
      time: "9:30 AM - 2:00 PM",
      location: "The Leela Palace, New Delhi",
      image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2",
      category: "Workshop",
      isHighlighted: false,
    },
    {
      id: 3,
      title: "Pharmaceutical Compliance Summit",
      date: "Dec 18, 2023",
      time: "11:00 AM - 5:30 PM",
      location: "ITC Gardenia, Bangalore",
      image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04",
      category: "Summit",
      isHighlighted: false,
    },
  ];

  return (
    <div className="w-full md:w-[360px] p-6 rounded-lg bg-gray-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
      {/* Header */}
      <div className="flex gap-2 items-center">
        <Calendar className="text-[#232327]" />
        <h1 className="text-xl font-geist font-semibold text-[#232327]">
          Upcoming Events
        </h1>
      </div>

      {/* Featured Event */}
      {events
        .filter((event) => event.isHighlighted)
        .map((event) => (
          <div
            key={event.id}
            className="mt-5 overflow-hidden rounded-lg border border-gray-200 group"
          >
            <div className="relative h-36 overflow-hidden">
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute top-3 left-3">
                <Badge className="bg-emerald-500 text-white border-0 font-geist hover:bg-emerald-600">
                  {event.category}
                </Badge>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent h-1/2" />
            </div>

            <div className="p-4">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-geist font-medium text-gray-900 text-base">
                  {event.title}
                </h3>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-gray-600">
                  <CalendarDays className="h-4 w-4" />
                  <span className="text-sm font-geist">
                    {event.date} • {event.time}
                  </span>
                </div>

                <div className="flex items-center gap-2 text-gray-600">
                  <MapPin className="h-4 w-4" />
                  <span className="text-sm font-geist">{event.location}</span>
                </div>
              </div>

              <Link to="/webinar">
                <Button className="w-full mt-4 font-geist bg-[#212126] hover:bg-[#212126]/90 text-white">
                  Register Now
                  <ArrowRightIcon />
                </Button>
              </Link>
            </div>
          </div>
        ))}

      {/* Event List */}
      <div className="mt-5 space-y-4">
        {events
          .filter((event) => !event.isHighlighted)
          .map((event, index) => (
            <div key={event.id} className="group">
              <div className="flex gap-3">
                {/* Date Column */}
                <div className="flex flex-col items-center justify-center min-w-[60px] h-16 bg-white border border-gray-200 rounded-lg group-hover:border-blue-200 group-hover:bg-blue-50 transition-colors duration-300">
                  <span className="text-sm font-geist font-medium text-gray-600 group-hover:text-blue-600">
                    {event.date.split(" ")[0]}
                  </span>
                  <span className="text-xl font-geist font-bold text-gray-900 group-hover:text-blue-700">
                    {event.date.split(" ")[1]}
                  </span>
                </div>

                {/* Event Details */}
                <div className="flex-1">
                  <Badge className="mb-1 bg-gray-100 text-gray-700 border-0 hover:bg-gray-200 font-geist">
                    {event.category}
                  </Badge>
                  <h3 className="font-geist font-medium text-gray-900 line-clamp-1">
                    {event.title}
                  </h3>
                  <div className="flex items-center gap-2 mt-1 text-gray-600">
                    <MapPin className="h-3 w-3" />
                    <span className="text-xs font-geist">{event.location}</span>
                  </div>
                </div>

                {/* Action Button */}
                <div className="flex items-center">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="rounded-full h-8 w-8 p-0"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </Button>
                </div>
              </div>

              {index <
                events.filter((event) => !event.isHighlighted).length - 1 && (
                <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-200 to-transparent my-4" />
              )}
            </div>
          ))}
      </div>

      {/* View All Button */}
      <Button
        variant="outline"
        className="w-full mt-5 font-geist border-gray-300 text-gray-700 hover:bg-gray-100"
      >
        View All Events
        <ArrowRightIcon className="ml-1 h-4 w-4" />
      </Button>
    </div>
  );
};

const LatestNotification = () => {
  const notifications = [
    {
      id: 1,
      title: "New QCO Requirements for Medical Devices",
      date: "Oct 12, 2023",
      category: "Regulatory Update",
      urgency: "high",
      description:
        "Updated quality control requirements for Class III medical devices effective from January 2024.",
      documentLink: "#",
      isNew: true,
    },
    {
      id: 2,
      title: "BIS Certification Deadline Extended",
      date: "Oct 05, 2023",
      category: "Compliance Alert",
      urgency: "medium",
      description:
        "The deadline for BIS certification compliance has been extended to March 31, 2024 for specific categories.",
      documentLink: "#",
      isNew: true,
    },
    {
      id: 3,
      title: "CDSCO Fee Structure Revision",
      date: "Sep 28, 2023",
      category: "Fee Update",
      urgency: "low",
      description:
        "Revised fee structure for drug and medical device registrations to be implemented from December 1, 2023.",
      documentLink: "#",
      isNew: false,
    },
  ];

  const getUrgencyColor = (urgency) => {
    switch (urgency) {
      case "high":
        return "bg-red-50 text-red-700 border-red-200 hover:bg-red-100";
      case "medium":
        return "bg-amber-50 text-amber-700 border-amber-200 hover:bg-amber-100";
      case "low":
        return "bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-100";
      default:
        return "bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100";
    }
  };

  return (
    <div className="w-full md:w-[360px] p-6 rounded-lg bg-gray-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
      {/* Header */}
      <div className="flex gap-2 items-center">
        <Bell className="text-[#232327]" />
        <h1 className="text-xl font-geist font-semibold text-[#232327]">
          Latest Notifications
        </h1>
      </div>

      {/* Notification List */}
      <div className="mt-5 space-y-5">
        {notifications.map((notification, index) => (
          <div key={notification.id}>
            <div className="group relative">
              {/* New Indicator */}
              {notification.isNew && (
                <div className="absolute -right-2 -top-2 h-4 w-4 rounded-full bg-red-500 ring-2 ring-white animate-pulse" />
              )}

              {/* Card Content */}
              <div className="rounded-lg border border-gray-200 bg-white p-4 transition-all duration-300 hover:border-gray-300 hover:shadow-md">
                <div className="flex justify-between items-start mb-2">
                  <Badge
                    variant="outline"
                    className={`${getUrgencyColor(
                      notification.urgency
                    )} font-geist text-xs`}
                  >
                    {notification.category}
                  </Badge>
                  <span className="text-xs text-gray-500 font-geist">
                    {notification.date}
                  </span>
                </div>

                <h3 className="font-geist font-medium text-gray-900 mb-2">
                  {notification.title}
                </h3>

                <p className="text-sm text-gray-600 font-geist mb-3 line-clamp-2">
                  {notification.description}
                </p>

                <div className="flex justify-between items-center">
                  <Button
                    variant="link"
                    className="text-blue-900 font-geist hover:text-blue-950 p-0 h-auto font-normal text-sm flex items-center gap-1"
                  >
                    <FileText className="h-3.5 w-3.5" />
                    View Document
                  </Button>

                  <Button
                    variant="ghost"
                    size="sm"
                    className="rounded-full h-8 w-8 p-0 hover:bg-gray-100"
                  >
                    <ExternalLink className="h-4 w-4 text-gray-600" />
                  </Button>
                </div>
              </div>
            </div>

            {index < notifications.length - 1 && (
              <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-200 to-transparent my-5" />
            )}
          </div>
        ))}
      </div>

      {/* View All Button */}
      <div className="mt-5 flex justify-center">
        <Button
          variant="outline"
          className="font-geist border-gray-300 text-gray-700 hover:bg-gray-100"
        >
          View All Notifications
          <ChevronDown className="ml-1 h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

const FreeCallBack = () => {
  const [loading, setLoading] = useState(false);

  // Function to get page name based on URL
  const getPageName = () => {
    const path = window.location.pathname;

    // Service pages
    if (path.includes("/services/cdsco-registration-certification"))
      return "CDSCO Registration";
    if (path.includes("/services/bis-mark-foreign")) return "BIS Mark Foreign";
    if (path.includes("/services/epr-registration")) return "EPR Registration";
    if (path.includes("/services/bis-certification"))
      return "BIS Certification";
    if (path.includes("/services/lmpc-registration"))
      return "LMPC Registration";
    if (path.includes("/services/plastic-waste")) return "Plastic Waste";
    if (path.includes("/services/legal-metrology")) return "Legal Metrology";
    if (path.includes("/services/isi-mark-indian")) return "ISI Mark Indian";
    if (path.includes("/services/battery-waste")) return "Battery Waste";
    if (path.includes("/services/crs-registration")) return "CRS Registration";
    if (path.includes("/services/peso")) return "PESO";
    if (path.includes("/services/tec")) return "TEC";
    if (path.includes("/services/wpc")) return "WPC";
    if (path.includes("/services/rohs")) return "ROHS";
    if (path.includes("/services/bee")) return "BEE";
    if (path.includes("/services/ce-certification")) return "CE Certification";
    if (path.includes("/services/emi-emc")) return "EMI EMC";
    if (path.includes("/services/cb-certification")) return "CB Certification";
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
      // toast.error("Please Enter a valid Full Name.");
      toast({
        variant: "destructive",
        title: "Please Enter a valid Full Name.",
        description: "Name Should only Contain Letters and Spaces.",
      });
      setLoading(false);
      return;
    }

    // Phone number validation
    const phoneRegex = /^\+?[0-9\s-]{8,15}$/;
    if (!phoneRegex.test(phoneNumber)) {
      // toast.error("Please Enter a Valid Phone number (8-15 digits)");
      toast({
        variant: "destructive",
        title: "Please Enter a Valid Phone Number",
        description: "Phone Number Should be (8-15 digits)",
      });
      setLoading(false);
      return;
    }

    // Email validation
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const commonDomains = [
      "gmail.com",
      "yahoo.com",
      "hotmail.com",
      "outlook.com",
    ];
    const domain = email.split("@")[1];

    if (!emailRegex.test(email) || !commonDomains.includes(domain)) {
      toast({
        variant: "destructive",
        title: "Please Enter a valid Email Address.",
        description: "Check if Your Email Format is Correct",
      });
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post(
        `${BASE_URL}/contact/submit-contact`,
        formData
      );

      if (!response.data.success) {
        throw new Error(response.data.message);
      }
      // toast.success("Contact form submit successfully!");
      toast({
        title: "Contact form submit successfully!",
        description:
          "Thank you for Contacting Us. Our Team will Reach out to you Shortly.",
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
        error.response?.data?.message || "Something went wrong";
      // toast.error(errorMessage || "Failed to submit contact form details!");
      toast({
        variant: "destructive",
        title: errorMessage || "Failed to submit contact form details!",
        description:
          "Something Went Wrong. Please Check Your Details and Try Again.",
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
        <h1 className="text-xl font-geist font-semibold text-[#232327]">
          Request a Free Callback
        </h1>
      </div>

      {/* Intro Text */}
      <p className="mt-3 text-sm text-gray-600 font-geist">
        Leave your details below and our experts will call you back within 24
        hours to discuss your regulatory compliance needs.
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
            placeholder="Your Name*"
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
            placeholder="Phone Number*"
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
            placeholder="Email Address*"
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
            placeholder="Required Certification*"
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
                <span>Sending</span>
              </div>
            ) : (
              <>
                Request Callback
                <SendHorizontal className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </>
            )}
          </span>
          <span className="absolute top-0 left-0 w-0 h-full bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
        </Button>
      </form>

      {/* Privacy Note */}
      <p className="mt-3 text-xs text-center text-gray-500 font-geist">
        By submitting this form, you agree to our{" "}
        <a href="#" className="text-blue-600 hover:underline">
          Privacy Policy
        </a>{" "}
        and consent to being contacted.
      </p>
    </div>
  );
};
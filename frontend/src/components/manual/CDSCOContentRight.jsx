import { AlignLeft, ArrowRightIcon, ChevronLeft, ChevronRight, Languages, Star, Calendar, CalendarDays, MapPin, Bell, FileText, ExternalLink, ChevronDown, ThumbsUp, Share2, CheckCircle, Phone, User, Mail, PhoneCall, SendHorizontal, MessageCircle } from "lucide-react";
import BlogImageOne from "../../assets/images/BlogImageOne.png";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";


const CDSCOContentRight = () => {
  return (
    <div className="flex flex-col gap-5">
      {/* Latest Blogs */}
      <LatestBlog />
      <OurServices />
      <ClientTestimonial />
      <OurEvents />
      <LatestNotification />
      <FreeCallBack />
    </div>
  );
};

export default CDSCOContentRight;

const LatestBlog = () => {
  const blogPosts = [
    {
      image: BlogImageOne,
      category: "CDSCO",
      title: "Medical Device QCO Update",
      url: "#",
    },
    {
      image: "https://images.unsplash.com/photo-1587854680352-936b22b91030",
      category: "CDSCO",
      title: "Drug Import Guidelines",
      url: "#",
    },
    {
      image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88",
      category: "CDSCO",
      title: "Quality Standards Revision",
      url: "#",
    },
    {
      image: "https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5",
      category: "CDSCO",
      title: "Equipment Certification Changes",
      url: "#",
    },
  ];

  return (
    <div className="w-[360px] p-6 rounded-lg bg-gray-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">

      <div className="flex gap-2 items-center ">
        <AlignLeft className="text-[#232327]" />
        <h1 className="text-xl font-geist font-semibold  text-[#232327]">
          Latest Blogs
        </h1>
      </div>


      <div className="mt-5 space-y-5">
        {blogPosts.map((post, index) => (
          <div key={index}>
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

                  <Button
                    variant="link"
                    className="text-blue-900 font-geist hover:text-blue-950 p-0 h-auto font-normal text-sm"
                  >
                    Read More
                    <ArrowRightIcon className="-ml-1 mt-0.5" />
                  </Button>
                </div>
              </div>
            </div>

            {index < blogPosts.length - 1 && (
              <div className="mt-5 h-px w-full bg-gradient-to-r from-transparent via-border to-transparent" />
            )}
          </div>
        ))}
      </div>

    </div>
  );
};

const OurServices = () => {
  const services = [
    {
      image: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d",
      title: "BIS & ISI Mark Certification",
      description: "Complete assistance for BIS Registration and ISI Mark certification for both Indian and Foreign manufacturers",
    },
    {
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef",
      title: "CDSCO Registration",
      description: "Expert consultation for CDSCO Registration certification for medical devices and pharmaceuticals",
    },
    {
      image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09",
      title: "EPR & PWM Certification",
      description: "Comprehensive support for EPR Certificate and Plastic Waste Management compliance",
    },
    {
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40",
      title: "LMPC & BIS CRS",
      description: "Professional guidance for LMPC Certificate and BIS CRS Registration processes",
    },
  ];
  return (
    <div className="w-[360px] p-6 rounded-lg bg-gray-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">


      <div className="flex gap-2 items-center ">
        <Star
          className="  fill-current text-[#232327] "
          size={20}
        />

        <h1 className="text-xl font-geist font-semibold  text-[#232327]">
          Our Services
        </h1>
      </div>

      <div className="mt-5 space-y-5">
        {
          services.map((service, index) => (
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



                <Button className="w-full  font-geist bg-[#212126] hover:bg-[#212126]/90 text-white">
                  Learn More
                  <ArrowRightIcon />
                </Button>


              </div>
              {index < services.length - 1 && (
                <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-200 to-transparent my-2" />
              )}

            </div>

          ))
        }
      </div>

    </div>
  )
}

const ClientTestimonial = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechCorp",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
      content: "The service provided was exceptional. The team's expertise in CDSCO registration made the entire process smooth and hassle-free.",
    },
  ];
  return (
    <div className="w-[360px] rounded-lg overflow-hidden bg-gray-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
      <div className="pt-6 px-6 pb-4">
        <div className="flex gap-2 items-center">
          <Languages className="text-[#232327]" />
          <h1 className="text-xl font-geist font-semibold text-[#232327]">
            Client Testimonials
          </h1>
        </div>
        <div className="mt-8 mb-5 rounded-lg">
          {
            testimonials.map((testimonial, index) => (
              <div key={index} className="group">
                <div className="flex items-start gap-4 ">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover ring-2 ring-gray-100"
                  />

                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h3 className="font-geist font-medium text-gray-900">
                        {testimonial.name}
                      </h3>
                      <span className="text-sm text-gray-500">•</span>
                      <p className="text-sm text-gray-500 font-geist">
                        {testimonial.role}
                      </p>
                    </div>
                    <p className="mt-2 italic text-gray-600 font-geist text-sm leading-relaxed">
                      "{" "}{testimonial.content}{" "}"
                    </p>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
      <div className="flex items-center justify-between px-6 py-3 bg-gray-200 border-t border-gray-300">
        <div className="flex space-x-1.5">
          {[...Array(3)].map((_, i) => (
            <button
              key={i}
              className={`transition-all duration-300 ease-in-out rounded-full w-6 h-1.5 ${i === 0 ? 'bg-[#212126]' : 'bg-gray-200'
                }`}
            />
          ))}
        </div>
        <div className="flex space-x-2">
          <button className="h-8 w-8 rounded-full flex items-center justify-center bg-white border border-gray-200 hover:bg-gray-100 transition-colors">
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button className="h-8 w-8 rounded-full flex items-center justify-center bg-white border border-gray-200 hover:bg-gray-100 transition-colors">
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  )
}


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
      isHighlighted: true
    },
    {
      id: 2,
      title: "Medical Device Regulations Workshop",
      date: "Dec 05, 2023",
      time: "9:30 AM - 2:00 PM",
      location: "The Leela Palace, New Delhi",
      image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2",
      category: "Workshop",
      isHighlighted: false
    },
    {
      id: 3,
      title: "Pharmaceutical Compliance Summit",
      date: "Dec 18, 2023",
      time: "11:00 AM - 5:30 PM",
      location: "ITC Gardenia, Bangalore",
      image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04",
      category: "Summit",
      isHighlighted: false
    }
  ];

  return (
    <div className="w-[360px] p-6 rounded-lg bg-gray-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
      {/* Header */}
      <div className="flex gap-2 items-center">
        <Calendar className="text-[#232327]" />
        <h1 className="text-xl font-geist font-semibold text-[#232327]">
          Upcoming Events
        </h1>
      </div>

      {/* Featured Event */}
      {events.filter(event => event.isHighlighted).map(event => (
        <div key={event.id} className="mt-5 overflow-hidden rounded-lg border border-gray-200 group">
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
              <h3 className="font-geist font-medium text-gray-900 text-base">{event.title}</h3>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2 text-gray-600">
                <CalendarDays className="h-4 w-4" />
                <span className="text-sm font-geist">{event.date} • {event.time}</span>
              </div>

              <div className="flex items-center gap-2 text-gray-600">
                <MapPin className="h-4 w-4" />
                <span className="text-sm font-geist">{event.location}</span>
              </div>
            </div>

            <Button className="w-full mt-4 font-geist bg-[#212126] hover:bg-[#212126]/90 text-white">
              Register Now
              <ArrowRightIcon />
            </Button>
          </div>
        </div>
      ))}

      {/* Event List */}
      <div className="mt-5 space-y-4">
        {events.filter(event => !event.isHighlighted).map((event, index) => (
          <div key={event.id} className="group">
            <div className="flex gap-3">
              {/* Date Column */}
              <div className="flex flex-col items-center justify-center min-w-[60px] h-16 bg-white border border-gray-200 rounded-lg group-hover:border-blue-200 group-hover:bg-blue-50 transition-colors duration-300">
                <span className="text-sm font-geist font-medium text-gray-600 group-hover:text-blue-600">
                  {event.date.split(' ')[0]}
                </span>
                <span className="text-xl font-geist font-bold text-gray-900 group-hover:text-blue-700">
                  {event.date.split(' ')[1]}
                </span>
              </div>

              {/* Event Details */}
              <div className="flex-1">
                <Badge className="mb-1 bg-gray-100 text-gray-700 border-0 hover:bg-gray-200 font-geist">
                  {event.category}
                </Badge>
                <h3 className="font-geist font-medium text-gray-900 line-clamp-1">{event.title}</h3>
                <div className="flex items-center gap-2 mt-1 text-gray-600">
                  <MapPin className="h-3 w-3" />
                  <span className="text-xs font-geist">{event.location}</span>
                </div>
              </div>

              {/* Action Button */}
              <div className="flex items-center">
                <Button variant="ghost" size="sm" className="rounded-full h-8 w-8 p-0">
                  <ChevronRight className="h-5 w-5" />
                </Button>
              </div>
            </div>

            {index < events.filter(event => !event.isHighlighted).length - 1 && (
              <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-200 to-transparent my-4" />
            )}
          </div>
        ))}
      </div>

      {/* View All Button */}
      <Button variant="outline" className="w-full mt-5 font-geist border-gray-300 text-gray-700 hover:bg-gray-100">
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
      description: "Updated quality control requirements for Class III medical devices effective from January 2024.",
      documentLink: "#",
      isNew: true
    },
    {
      id: 2,
      title: "BIS Certification Deadline Extended",
      date: "Oct 05, 2023",
      category: "Compliance Alert",
      urgency: "medium",
      description: "The deadline for BIS certification compliance has been extended to March 31, 2024 for specific categories.",
      documentLink: "#",
      isNew: true
    },
    {
      id: 3,
      title: "CDSCO Fee Structure Revision",
      date: "Sep 28, 2023",
      category: "Fee Update",
      urgency: "low",
      description: "Revised fee structure for drug and medical device registrations to be implemented from December 1, 2023.",
      documentLink: "#",
      isNew: false
    }
  ];

  const getUrgencyColor = (urgency) => {
    switch (urgency) {
      case 'high': return 'bg-red-50 text-red-700 border-red-200 hover:bg-red-100';
      case 'medium': return 'bg-amber-50 text-amber-700 border-amber-200 hover:bg-amber-100';
      case 'low': return 'bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-100';
      default: return 'bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100';
    }
  };

  return (
    <div className="w-[360px] p-6 rounded-lg bg-gray-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
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
                  <Badge variant="outline" className={`${getUrgencyColor(notification.urgency)} font-geist text-xs`}>
                    {notification.category}
                  </Badge>
                  <span className="text-xs text-gray-500 font-geist">{notification.date}</span>
                </div>

                <h3 className="font-geist font-medium text-gray-900 mb-2">{notification.title}</h3>

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
        <Button variant="outline" className="font-geist border-gray-300 text-gray-700 hover:bg-gray-100">
          View All Notifications
          <ChevronDown className="ml-1 h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

const FreeCallBack = () => {
  return (
    <div className="w-[360px] p-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
      {/* Header */}
      <div className="flex gap-2 items-center">
        <PhoneCall className="text-[#232327]" />
        <h1 className="text-xl font-geist font-semibold text-[#232327]">
          Request a Free Callback
        </h1>
      </div>

      {/* Intro Text */}
      <p className="mt-3 text-sm text-gray-600 font-geist">
        Leave your details below and our experts will call you back within 24 hours to discuss your regulatory compliance needs.
      </p>

      {/* Form */}
      <div className="mt-5 space-y-4">
        {/* Name Field */}
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <User className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Your Name"
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
            placeholder="Phone Number"
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
            placeholder="Email Address"
            className="w-full py-2.5 pl-10 pr-3 font-geist bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
          />
        </div>

        {/* Service Selection */}
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <FileText className="h-5 w-5 text-gray-400" />
          </div>
          <select className="w-full py-2.5 pl-10 pr-3 font-geist bg-white border border-gray-200 rounded-lg appearance-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all">
            <option value="" disabled selected>Select Service</option>
            <option value="cdsco">CDSCO Registration</option>
            <option value="bis">BIS & ISI Mark Certification</option>
            <option value="epr">EPR & PWM Certification</option>
            <option value="lmpc">LMPC & BIS CRS</option>
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
            <ChevronDown className="h-4 w-4 text-gray-400" />
          </div>
        </div>

        {/* Message Field */}
        <div className="relative">
          <div className="absolute top-3 left-3 pointer-events-none">
            <MessageCircle className="h-5 w-5 text-gray-400" />
          </div>
          <textarea
            placeholder="Your Message (Optional)"
            rows="3"
            className="w-full py-2.5 pl-10 pr-3 font-geist bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
          ></textarea>
        </div>
      </div>

      {/* Submit Button */}
      <Button className="w-full mt-5 font-geist bg-[#212126] hover:bg-[#212126]/90 text-white group relative overflow-hidden">
        <span className="relative z-10 flex items-center">
          Request Callback
          <SendHorizontal className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </span>
        <span className="absolute top-0 left-0 w-0 h-full bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
      </Button>

      {/* Privacy Note */}
      <p className="mt-3 text-xs text-center text-gray-500 font-geist">
        By submitting this form, you agree to our <a href="#" className="text-blue-600 hover:underline">Privacy Policy</a> and consent to being contacted.
      </p>


    </div>
  );
};



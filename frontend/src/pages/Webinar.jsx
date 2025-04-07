import { Calendar, ChevronRight, Clock, Users } from "lucide-react";

const Webinar = () => {
  return (
    <div className="overflow-hidden bg-[#F9F7F2]">
      <WebinarHero />
      <PastWebinars />
      <WebinarBenefits />
    </div>
  );
};

export default Webinar;

const WebinarHero = () => {
  return (
    <div className=" max-w-[84rem] mx-auto px-12 pt-12 pb-24">
      {/* Heading */}
      <div className="text-center mb-9">
        <h1 className="font-playfair text-5xl font-bold text-[#1e1e1e] mb-4">
          Our Certification Webinars{" "}
        </h1>
        <p className="text-lg font-geist text-gray-600 max-w-3xl mx-auto">
          Join our expert-led webinars to gain valuable insights into
          certification processes, regulatory updates, and industry best
          practices for the Indian market.
        </p>
      </div>

      {/* Button */}
      <div className="flex items-center justify-center gap-6 mb-12">
        <button className="flex items-center gap-3 bg-[#1A8781] text-white py-3 px-8 rounded-full shadow-lg hover:bg-[#125E5A] transition-all duration-300 group">
          <span className="font-medium">Register Now</span>
          <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30">
            <div className="w-2 h-2 border-t-2 border-r-2 border-white rotate-45"></div>
          </div>
        </button>

        <button className="flex items-center gap-3 border-2 border-[#1A8781]/30 text-[#1A8781] py-3 px-8 rounded-full hover:border-[#1A8781] hover:bg-[#1A8781]/5 transition-all duration-300">
          <span className="font-medium">View Schedule</span>
        </button>
      </div>

      <div className="relative rounded-3xl shadow-2xl overflow-hidden group h-[500px]">
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20 z-10"></div>

        <img
          src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="Webinar session"
          className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
        />

        <div className="absolute inset-0 flex flex-col items-center justify-center z-20 p-8">
          <div className="bg-white/10 backdrop-blur-md px-6 py-4 rounded-2xl border border-white/20 mb-8">
            <div className="text-white font-semibold text-lg">
              Join Our Upcoming Webinar
            </div>
          </div>

          <h3 className="text-white text-4xl font-bold font-playfair mb-6 text-center max-w-3xl">
            Complete Certification Process and Documentation Guide
          </h3>

          <button className="flex items-center gap-3 bg-white/90 backdrop-blur-sm py-3 px-6 rounded-full shadow-xl hover:bg-white transition-all duration-300 group/btn">
            <span className="font-medium text-lg text-gray-800 group-hover/btn:text-[#1A8781] transition-colors duration-300">
              Register Now
            </span>
            <div className="w-12 h-12 bg-[#1A8781] rounded-full flex items-center justify-center">
              <ChevronRight className="w-5 h-5 text-white ml-1" />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

const PastWebinars = () => {
  const upcomingWebinars = [
    {
      id: 1,
      title: "BIS Certification: Complete Process and Documentation Guide",
      date: "August 15, 2023",
      time: "11:00 AM IST",
      duration: "90 min",
      host: "Rahul Sharma",
      attendees: 540,
      image:
        "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    },
    {
      id: 2,
      title: "LMPC Certification: Navigating Legal Metrology Requirements",
      date: "August 22, 2023",
      time: "2:00 PM IST",
      duration: "60 min",
      host: "Priya Patel",
      attendees: 320,
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    },
    {
      id: 3,
      title: "EPR Compliance: Environmental Regulations for Manufacturers",
      date: "September 5, 2023",
      time: "10:00 AM IST",
      duration: "75 min",
      host: "Dr. Arjun Singh",
      attendees: 410,
      image:
        "https://images.unsplash.com/photo-1573164574572-cb89e39749b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-[#F9F7F2] to-white pb-20">
      <div className="max-w-[84rem] mx-auto px-12">
        {/* Heading */}
        <div className=" flex flex-col gap-2  mb-12">
          <h2 className="font-playfair text-4xl font-bold text-[#1e1e1e]">
            Past Webinars
          </h2>
          <p className="text-lg font-geist text-gray-600 max-w-2xl">
            Access our library of past webinars to learn at your own pace.
          </p>
        </div>

        {/* Webinar Cards */}

        <div className="grid grid-cols-3 gap-8">
          {upcomingWebinars.map((webinar) => (
            <div
              key={webinar.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-[#1A8781]/10 hover:border-[#1A8781]/30 "
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={webinar.image}
                  alt={webinar.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-[#1A8781]">
                  {webinar.date}
                </div>
              </div>

              <div className="p-6">
                <h3 className="font-geist font-semibold text-[#131316] text-xl mb-3 line-clamp-2">
                  {webinar.title}
                </h3>

                <div className="flex flex-col gap-3 mb-6">
                  <div className="flex items-center gap-2 text-gray-600">
                    <Clock className="w-4 h-4 text-[#1A8781]" />
                    <span className="text-sm">
                      {webinar.time} • {webinar.duration}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Users className="w-4 h-4 text-[#1A8781]" />
                    <span className="text-sm">
                      {webinar.attendees} registered attendees
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <button className="flex items-center gap-2 bg-[#1A8781]/10 text-[#1A8781] py-2 px-4 rounded-full hover:bg-[#1A8781]/20 transition-all duration-300">
                    <Calendar className="w-4 h-4" />
                    <span className="font-medium">Register</span>
                  </button>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden">
                      <img
                        src="https://randomuser.me/api/portraits/men/32.jpg"
                        alt="Host"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <span className="text-sm text-gray-600">
                      Host: {webinar.host}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};


const WebinarBenefits = () => {
  const benefits = [
    {
      title: "Expert-Led Sessions",
      description: "Learn directly from our certification specialists with years of industry experience.",
      icon: "👨‍🏫"
    },
    {
      title: "Interactive Q&A",
      description: "Get your specific certification questions answered in real-time during our sessions.",
      icon: "💬"
    },
    {
      title: "Latest Regulatory Updates",
      description: "Stay informed about the newest changes in certification requirements and regulations.",
      icon: "📋"
    },
    {
      title: "Case Studies",
      description: "Learn from real-world examples and success stories of companies entering the Indian market.",
      icon: "📊"
    }
  ];

  return (
    <div className="max-w-[84rem] mx-auto px-12 pb-20 pt-16">
      <div className="text-center mb-16">
        <h2 className="font-playfair text-4xl font-bold text-[#1e1e1e] mb-4">
          Why Attend Our Webinars?
        </h2>
        <p className="text-lg font-geist text-gray-600 max-w-2xl mx-auto">
          Our certification webinars are designed to provide valuable insights and practical knowledge.
        </p>
      </div>

      <div className="grid grid-cols-4 gap-8">
        {benefits.map((benefit, index) => (
          <div 
            key={index}
            className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-[#1A8781]/30 hover:border-[#1A8781]/60 relative overflow-hidden transform hover:-translate-y-2"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#1A8781]/10 rounded-bl-full -mr-10 -mt-10 group-hover:bg-[#1A8781]/20 transition-all duration-300"></div>

            <div className="text-5xl mb-6">{benefit.icon}</div>

            <h3 className="font-geist font-semibold text-[#131316] text-xl mb-3">
              {benefit.title}
            </h3>

            <p className="text-gray-600 font-geist">
              {benefit.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};



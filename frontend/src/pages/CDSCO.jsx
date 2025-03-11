import { Button } from "@/components/ui/button";
import BlogImageOne from "../assets/images/BlogImageOne.png";
import CDSCOOne from "../assets/images/CDSCOOne.png";
import { Separator } from "@/components/ui/separator";
import { ArrowRightIcon, Check } from "lucide-react";
import CDSCOHero from "@/components/manual/CDSCOHero";
import { Badge } from "@/components/ui/badge";

const CDSCO = () => {
  const blogPosts = [
    {
      image: BlogImageOne,
      category: "CDSCO",
      title: "QCO Notification for Work Chairs",
      url: "#",
    },
    {
      image: BlogImageOne,
      category: "CDSCO",
      title: "QCO Notification for Work Chairs",
      url: "#",
    },
    {
      image: BlogImageOne,
      category: "CDSCO",
      title: "QCO Notification for Work Chairs",
      url: "#",
    },
    {
      image: BlogImageOne,
      category: "CDSCO",
      title: "QCO Notification for Work Chairs",
      url: "#",
    },
  ];

  return (
    <>
      <CDSCOHero />

      {/* Index */}
      <div className="bg-[#B9DEEB]   w-full h-20">
        <div className="flex items-center justify-between px-12 h-full max-w-[88rem] mx-auto">
          {[
            "Overview",
            "Eligibility",
            "Classification",
            "Documents",
            "Registration",
            "Licensing",
            "Consulting",
            "FAQs",
          ].map((item) => (
            <div
              key={item}
              className={`relative cursor-pointer group ${
                item === "Overview"
                  ? "after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-blue-900"
                  : ""
              }`}
            >
              <div
                className={`text-base font-bold font-roboto tracking-wider uppercase transition-colors duration-300 ${
                  item === "Overview"
                    ? "text-blue-900"
                    : "text-blue-950 group-hover:text-blue-900"
                }`}
              >
                {item}
              </div>
              {item !== "Overview" && (
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-900 scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="w-full overflow-x-hidden py-12">
        <div className="max-w-[88rem] flex gap-[48px] mx-auto px-12 ">
          {/* Left Side */}

          <div className="flex-1 flex flex-col gap-12 ">
            {/* Overview Section */}
            <div className="flex flex-col gap-4">
              {/* Overview */}
              <div>
                <div className="flex w-full items-center gap-3">
                  <span className="uppercase  font-poppins font-semibold text-[20px] text-[#008080]">
                    Overview
                  </span>
                  <Separator className="w-[94.46px] h-[1.5px] bg-[#008080]" />
                </div>
                <h3 className="text-[48px] font-roboto font-bold text-[#1E1E1E]">
                  CDSCO License Details
                </h3>
              </div>

              {/* Description */}
              <p className="font-medium font-poppins text-[20px]  text-blue-950">
                CDSCO Registration can be obtained through online portal
                registration
              </p>

              {/* Content */}
              <div className=" mt-1 text-sm sm:text-lg text-[#20817] tracking-wide  text-left max-w-full  leading-loose">
                CDSCO stands for Central Drugs Standard Control Organisation
                (which comes under the Ministry of Health and Family Welfare),
                headquartered in Delhi and has 6 zonal offices in India namely
                at Mumbai, Kolkata, Chennai, Ghaziabad, Hyderabad and Ahmedabad
                and various other sub-zonal offices. It is the national
                regulatory body for products like cosmetics, drugs, medical
                devices, etc.
              </div>

              {/* Points & Image */}
              <div className=" mt-1 flex items-center justify-between">
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <p className="font-medium font-poppins text-[20px]  text-blue-950">
                      Different divisions of the CDSCO are as below
                    </p>
                  </div>

                  <div className="flex flex-col mt-1 gap-2">
                    <div className="flex gap-3 items-center break-words flex-wrap">
                      <div className="bg-green-500/10 p-2  rounded-full">
                        <Check size={12} className="text-[#020817]" />
                      </div>

                      <p className=" font-base text-sm sm:text-lg text-[#020817] tracking-wide  text-left max-w-full  leading-loose">
                        Medical device division ( Drugs )
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3 items-center break-words flex-wrap">
                    <div className="bg-green-500/10 p-2 rounded-full">
                      <Check size={12} className="text-[#020817]" />
                    </div>

                    <p className=" font-base text-sm sm:text-lg text-[#020817] tracking-wide  text-left max-w-full  leading-loose">
                      Drugs
                    </p>
                  </div>

                  <div className="flex gap-3 items-center break-words flex-wrap">
                    <div className="bg-green-500/10 p-2 rounded-full">
                      <Check size={12} className="text-[#020817]" />
                    </div>

                    <p className=" font-base text-sm sm:text-lg text-[#20817] tracking-wide  text-left max-w-full  leading-loose">
                      Cosmetics
                    </p>
                  </div>

                  <div className="flex gap-3 items-center break-words flex-wrap">
                    <div className="bg-green-500/10 p-2 rounded-full">
                      <Check size={12} className="text-[#020817]" />
                    </div>

                    <p className=" font-base text-sm sm:text-lg text-[#020817] tracking-wide  text-left max-w-full  leading-loose">
                      Clinical Trial on medical devices division
                    </p>
                  </div>

                  <div className="flex gap-3 items-center break-words flex-wrap">
                    <div className="bg-green-500/10 p-2 rounded-full">
                      <Check size={12} className="text-[#020817]" />
                    </div>

                    <p className=" font-base text-sm sm:text-lg text-[#020817] tracking-wide  text-left max-w-full  leading-loose">
                      Vaccines
                    </p>
                  </div>

                  <div className="flex gap-3 items-center break-words flex-wrap">
                    <div className="bg-green-500/10 p-2 rounded-full">
                      <Check size={12} className="text-[#020817]" />
                    </div>

                    <p className=" font-base text-sm sm:text-lg text-[#020817] tracking-wide  text-left max-w-full  leading-loose">
                      BA/BE
                    </p>
                  </div>
                </div>

                <div>
                  <img
                    src={CDSCOOne}
                    alt="CDSCOOne"
                    className="rounded-2xl transition-all duration-200 shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] transition duration-500  "
                  />
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="h-px w-full bg-gradient-to-r from-transparent via-blue-900 to-transparent" />

            {/* Eligibility Section */}
            <div className="flex flex-col mt-1 gap-4">
              {/* Eligibility */}
              <div>
                <div className="flex w-full items-center gap-3">
                  <span className="uppercase  font-poppins font-semibold text-[20px] text-[#008080]">
                    Eligibility
                  </span>
                  <Separator className="w-[94.46px] h-[1.5px] bg-[#008080]" />
                </div>
                <h3 className="text-[48px] font-roboto font-bold text-[#1E1E1E]">
                  CDSCO Certificate Eligibility
                </h3>
              </div>

              {/* Description */}
              <p className="font-medium font-poppins text-[20px]  text-blue-950">
                Eligibility for a CDSCO Certificate requires meeting regulatory
                guidelines.
              </p>

              {/* Content */}
              <div className=" mt-1 text-sm sm:text-lg text-[#20817] tracking-wide  text-left max-w-full  leading-loose">
                All manufacturers, either of Indian or foreign origin, can apply
                for the CDSCO license. In the case of a foreign manufacturer,
                the license will be granted to the manufacturer, and the Indian
                counterpart of the manufacturer will act as its authorized
                Indian Representative. The Indian representative of the
                manufacturer must have a valid state drugs license under Form
                20-B/21-B or Form 42 (applied under Form 41) as per the latest
                guidelines released by CDSCO.
              </div>

              {/* Points & Image */}
              {/* <div className=" mt-1 flex items-center justify-between">
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <p className="font-medium font-poppins text-[20px]  text-blue-950">
                      Different divisions of the CDSCO are as below
                    </p>
                  </div>

                  <div className="flex flex-col mt-1 gap-2">
                  <div className="flex gap-3 items-center break-words flex-wrap">
                    <div className="bg-green-500/10 p-2  rounded-full">
                      <Check size={12}  className="text-[#020817]"/>
                    </div>

                    <p className=" font-base text-sm sm:text-lg text-[#020817] tracking-wide  text-left max-w-full  leading-loose">
                      Medical device division ( Drugs )
                    </p>
                  </div>  
                  </div>
                  <div className="flex gap-3 items-center break-words flex-wrap">
                    <div className="bg-green-500/10 p-2 rounded-full">
                      <Check size={12} className="text-[#020817]" />
                    </div>

                    <p className=" font-base text-sm sm:text-lg text-[#020817] tracking-wide  text-left max-w-full  leading-loose">
                      Drugs
                    </p>
                  </div>

                  <div className="flex gap-3 items-center break-words flex-wrap">
                    <div className="bg-green-500/10 p-2 rounded-full">
                      <Check size={12} className="text-[#020817]" />
                    </div>

                    <p className=" font-base text-sm sm:text-lg text-[#20817] tracking-wide  text-left max-w-full  leading-loose">
                      Cosmetics
                    </p>
                  </div>

                  <div className="flex gap-3 items-center break-words flex-wrap">
                    <div className="bg-green-500/10 p-2 rounded-full">
                      <Check size={12}  className="text-[#020817]"/>
                    </div>

                    <p className=" font-base text-sm sm:text-lg text-[#020817] tracking-wide  text-left max-w-full  leading-loose">
                      Clinical Trial on medical devices division
                    </p>
                  </div>

                  <div className="flex gap-3 items-center break-words flex-wrap">
                    <div className="bg-green-500/10 p-2 rounded-full">
                      <Check size={12} className="text-[#020817]" />
                    </div>

                    <p className=" font-base text-sm sm:text-lg text-[#020817] tracking-wide  text-left max-w-full  leading-loose">
                      Vaccines
                    </p>
                  </div>

                  <div className="flex gap-3 items-center break-words flex-wrap">
                    <div className="bg-green-500/10 p-2 rounded-full">
                      <Check size={12} className="text-[#020817]" />
                    </div>

                    <p className=" font-base text-sm sm:text-lg text-[#020817] tracking-wide  text-left max-w-full  leading-loose">
                      BA/BE
                    </p>
                  </div>
                </div>

                <div>
                <img
                  src={CDSCOOne}
                  alt="CDSCOOne"
                  className="rounded-2xl transition-all duration-200 shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] transition duration-500  "
                />
              </div>
              </div> */}
            </div>

            {/* Divider */}
            <div className="h-px w-full bg-gradient-to-r from-transparent via-blue-900 to-transparent" />

            {/* Classification Section */}

            <div className="flex flex-col gap-4">
              {/* Classification */}
              <div>
                <div className="flex w-full items-center gap-3">
                  <span className="uppercase  font-poppins font-semibold text-[20px] text-[#008080]">
                    Classification
                  </span>
                  <Separator className="w-[94.46px] h-[1.5px] bg-[#008080]" />
                </div>
                <h3 className="text-[48px] font-roboto font-bold text-[#1E1E1E]">
                  CDSCO Device Classification
                </h3>
              </div>

              {/* Description */}
              {/* <p className="font-medium font-poppins text-[20px]  text-blue-950">
                CDSCO Registration can be obtained through online portal
                registration
              </p> */}

              {/* Content */}
              {/* <div className=" mt-1 text-sm sm:text-lg text-[#20817] tracking-wide  text-left max-w-full  leading-loose">
                CDSCO stands for Central Drugs Standard Control Organisation
                (which comes under the Ministry of Health and Family Welfare),
                headquartered in Delhi and has 6 zonal offices in India namely
                at Mumbai, Kolkata, Chennai, Ghaziabad, Hyderabad and Ahmedabad
                and various other sub-zonal offices. It is the national
                regulatory body for products like cosmetics, drugs, medical
                devices, etc.
              </div> */}

              {/* Points & Image */}
              <div className=" mt-1 flex items-center justify-between">
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <p className="font-medium font-poppins w-[453px] text-[20px] text-blue-950">
                      Medical devices are categorized into 4 classes by the
                      Medical Device Rules 2017
                    </p>
                  </div>

                  <div className="flex flex-col mt-2 gap-2">
                    <div className="flex gap-3 items-center break-words flex-wrap">
                      <div className="bg-green-500/10 p-2  rounded-full">
                        <Check size={12} className="text-[#020817]" />
                      </div>

                      <p className=" font-base text-sm sm:text-lg text-[#020817] tracking-wide  text-left max-w-full  leading-loose">
                        Class A ( least risk )
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3 items-center break-words flex-wrap">
                    <div className="bg-green-500/10 p-2 rounded-full">
                      <Check size={12} className="text-[#020817]" />
                    </div>

                    <p className=" font-base text-sm sm:text-lg text-[#020817] tracking-wide  text-left max-w-full  leading-loose">
                      Class B ( Moderate risk )
                    </p>
                  </div>

                  <div className="flex gap-3 items-center break-words flex-wrap">
                    <div className="bg-green-500/10 p-2 rounded-full">
                      <Check size={12} className="text-[#020817]" />
                    </div>

                    <p className=" font-base text-sm sm:text-lg text-[#20817] tracking-wide  text-left max-w-full  leading-loose">
                      Class C ( Moderate to high risk )
                    </p>
                  </div>

                  <div className="flex gap-3 items-center break-words flex-wrap">
                    <div className="bg-green-500/10 p-2 rounded-full">
                      <Check size={12} className="text-[#020817]" />
                    </div>

                    <p className=" font-base text-sm sm:text-lg text-[#020817] tracking-wide  text-left max-w-full  leading-loose">
                      Class D ( High risk )
                    </p>
                  </div>
                </div>

                <div>
                  <img
                    src={CDSCOOne}
                    alt="CDSCOOne"
                    className="rounded-2xl transition-all duration-200 shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] transition duration-500  "
                  />
                </div>
              </div>

              <div className=" mt-4 flex flex-col gap-2">
                <p className="font-medium font-poppins text-[20px] text-blue-950">
                  Class A products are divided to determine CDSCO license or
                  registration applicability.
                </p>

                <div className="flex flex-col mt-2 gap-2">
                  <div className="flex gap-3 items-center break-words flex-wrap">
                    <div className="bg-green-500/10 p-2  rounded-full">
                      <Check size={12} className="text-[#020817]" />
                    </div>

                    <p className=" font-base text-sm sm:text-lg text-[#020817] tracking-wide  text-left max-w-full  leading-loose">
                      Class A ( non sterile and non measuring ) products come
                      under registration scheme.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3 items-center break-words flex-wrap">
                  <div className="bg-green-500/10 p-2 rounded-full">
                    <Check size={12} className="text-[#020817]" />
                  </div>

                  <p className=" font-base text-sm sm:text-lg text-[#020817] tracking-wide  text-left max-w-full  leading-loose">
                    Class A ( Sterile or measuring ) products require license.
                  </p>
                </div>

                <p className=" mt-4 font-base text-sm sm:text-lg text-[#020817] tracking-wide  text-left max-w-full  leading-loose">
                  This brings us to the conclusion that products which are under
                  class A ( sterile or measuring ), Class B, Class C and Class D
                  require a license from CDSCO.
                </p>
              </div>
            </div>

            {/* Divider */}
            <div className="h-px w-full bg-gradient-to-r from-transparent via-blue-900 to-transparent" />


            {/* Documents Section */}
            <div className="flex flex-col gap-4">
              {/* Documents */}
              <div>
                <div className="flex w-full items-center gap-3">
                  <span className="uppercase  font-poppins font-semibold text-[20px] text-[#008080]">
                    Documents
                  </span>
                  <Separator className="w-[94.46px] h-[1.5px] bg-[#008080]" />
                </div>
                <h3 className="text-[48px] font-roboto font-bold text-[#1E1E1E]">
                  Required Documents for CDSCO License
                </h3>
              </div>

              {/* Points */}
              <div className=" mt-1">
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <p className="font-medium font-poppins text-[20px]  text-blue-950">
                      A.) CDSCO registration for Class A products ( non-sterile
                      and non-measuring )
                    </p>
                  </div>

                  <div className="flex flex-col mt-1 gap-2">
                    <div className="flex gap-3 items-center break-words flex-wrap">
                      <div className="bg-green-500/10 p-2  rounded-full">
                        <Check size={12} className="text-[#020817]" />
                      </div>

                      <p className=" font-base text-sm sm:text-lg text-[#020817] tracking-wide  text-left max-w-full  leading-loose">
                        Drugs license of importer ( Required only for foreign
                        manufacturer )
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3 items-center break-words flex-wrap">
                    <div className="bg-green-500/10 p-2 rounded-full">
                      <Check size={12} className="text-[#020817]" />
                    </div>

                    <p className=" font-base text-sm sm:text-lg text-[#020817] tracking-wide  text-left max-w-full  leading-loose">
                      Free sales certificate ( Required only for foreign
                      manufacturer )
                    </p>
                  </div>

                  <div className="flex gap-3 items-center break-words flex-wrap">
                    <div className="bg-green-500/10 p-2 rounded-full">
                      <Check size={12} className="text-[#020817]" />
                    </div>

                    <p className=" font-base text-sm sm:text-lg text-[#20817] tracking-wide  text-left max-w-full  leading-loose">
                      ISO certificate ( Required only for foreign manufacturer )
                    </p>
                  </div>

                  <div className="flex gap-3 items-center break-words flex-wrap">
                    <div className="bg-green-500/10 p-2 rounded-full">
                      <Check size={12} className="text-[#020817]" />
                    </div>

                    <p className=" font-base text-sm sm:text-lg text-[#020817] tracking-wide  text-left max-w-full  leading-loose">
                      List of products to be registered.
                    </p>
                  </div>

                  <div className="flex gap-3 items-center break-words flex-wrap">
                    <div className="bg-green-500/10 p-2 rounded-full">
                      <Check size={12} className="text-[#020817]" />
                    </div>

                    <p className=" font-base text-sm sm:text-lg text-[#020817] tracking-wide  text-left max-w-full  leading-loose">
                      Basic details about the product ( example: storage
                      temperature, shelf life, model number, etc.) , etc.
                    </p>
                  </div>
                </div>
              </div>

              <div className=" mt-1 flex items-center justify-between">
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <p className="font-medium font-poppins text-[20px]  text-blue-950">
                      B.) Class A ( sterile or measuring ), Class B, Class C and
                      Class D
                    </p>
                  </div>

                  <div className="flex flex-col mt-1 gap-2">
                    <div className="flex gap-3 items-center break-words flex-wrap">
                      <div className="bg-green-500/10 p-2 rounded-full">
                        <Check size={12} className="text-[#020817]" />
                      </div>

                      <p className=" font-base text-sm sm:text-lg text-[#020817] tracking-wide  text-left max-w-full  leading-loose">
                        Plant Master File ( PMF )
                      </p>
                    </div>

                    <div className="flex gap-3 items-center break-words flex-wrap">
                      <div className="bg-green-500/10 p-2 rounded-full">
                        <Check size={12} className="text-[#020817]" />
                      </div>

                      <p className=" font-base text-sm sm:text-lg text-[#020817] tracking-wide  text-left max-w-full  leading-loose">
                        Device Master File ( DMF )
                      </p>
                    </div>

                    <div className="flex gap-3 items-center break-words flex-wrap">
                      <div className="bg-green-500/10 p-2 rounded-full">
                        <Check size={12} className="text-[#020817]" />
                      </div>

                      <p className=" font-base text-sm sm:text-lg text-[#020817] tracking-wide  text-left max-w-full  leading-loose">
                        Manufacturing process flowchart.
                      </p>
                    </div>

                    <div className="flex gap-3 items-center break-words flex-wrap">
                      <div className="bg-green-500/10 p-2 rounded-full">
                        <Check size={12} className="text-[#020817]" />
                      </div>

                      <p className=" font-base text-sm sm:text-lg text-[#020817] tracking-wide  text-left max-w-full  leading-loose">
                        Labels and user manual.
                      </p>
                    </div>

                    <div className="flex gap-3 items-center break-words flex-wrap">
                      <div className="bg-green-500/10 p-2 rounded-full">
                        <Check size={12} className="text-[#020817]" />
                      </div>

                      <p className=" font-base text-sm sm:text-lg text-[#020817] tracking-wide  text-left max-w-full  leading-loose">
                        Design verification and validation.
                      </p>
                    </div>

                    <div className="flex gap-3 items-center break-words flex-wrap">
                      <div className="bg-green-500/10 p-2 rounded-full">
                        <Check size={12} className="text-[#020817]" />
                      </div>

                      <p className=" font-base text-sm sm:text-lg text-[#020817] tracking-wide  text-left max-w-full  leading-loose">
                        Stability validation data.
                      </p>
                    </div>

                    <div className="flex gap-3 items-center break-words flex-wrap">
                      <div className="bg-green-500/10 p-2 rounded-full">
                        <Check size={12} className="text-[#020817]" />
                      </div>

                      <p className=" font-base text-sm sm:text-lg text-[#020817] tracking-wide  text-left max-w-full  leading-loose">
                        Challan of the government fee paid, etc.
                      </p>
                    </div>
                  </div>
                </div>

                <img
                  src={CDSCOOne}
                  alt="CDSCOOne"
                  className="rounded-2xl transition-all duration-200 shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] transition duration-500  "
                />
              </div>
            </div>


      {/* Divider */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-blue-900 to-transparent" />

{/* Registration Section */}

    <div className="flex flex-col gap-4">
              {/* Registration */}
              <div>
                <div className="flex w-full items-center gap-3">
                  <span className="uppercase  font-poppins font-semibold text-[20px] text-[#008080]">
                    Registration
                  </span>
                  <Separator className="w-[94.46px] h-[1.5px] bg-[#008080]" />
                </div>
                <h3 className="text-[48px] font-roboto font-bold text-[#1E1E1E]">
                  Process for CDSCO Registration 
                </h3>
              </div>

              {/* Description */}
              <p className="font-medium font-poppins text-[20px]  text-blue-950">
                Process for CDSCO Registration for Class A products ( non-sterile and non-measuring ):
              </p>

            
              {/* Points & Image */}
              <div className=" mt-1 flex items-center justify-between">
                <div className="flex flex-col gap-2">
                
                  <div className="flex flex-col mt-1 gap-2">
                    <div className="flex gap-3 items-center break-words flex-wrap">
                      <div className="bg-green-500/10 p-2  rounded-full">
                        <Check size={12} className="text-[#020817]" />
                      </div>

                      <p className=" font-base text-sm sm:text-lg text-[#020817] tracking-wide  text-left max-w-full  leading-loose">
                        Generation of login Credentials
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3 items-center break-words flex-wrap">
                    <div className="bg-green-500/10 p-2 rounded-full">
                      <Check size={12} className="text-[#020817]" />
                    </div>

                    <p className=" font-base text-sm sm:text-lg text-[#020817] tracking-wide  text-left max-w-full  leading-loose">
                      Registration of Indian / foreign manufacturer
                    </p>
                  </div>

                  <div className="flex gap-3 items-center break-words flex-wrap">
                    <div className="bg-green-500/10 p-2 rounded-full">
                      <Check size={12} className="text-[#020817]" />
                    </div>

                    <p className=" font-base text-sm sm:text-lg text-[#020817] tracking-wide  text-left max-w-full  leading-loose">
                      Registration of importer (in case of import only)
                    </p>
                  </div>

                  <div className="flex gap-3 items-center break-words flex-wrap">
                    <div className="bg-green-500/10 p-2 rounded-full">
                      <Check size={12} className="text-[#020817]" />
                    </div>

                    <p className=" font-base text-sm sm:text-lg text-[#020817] tracking-wide  text-left max-w-full  leading-loose">
                      Addition of product details
                    </p>
                  </div>

                  <div className="flex gap-3 items-center break-words flex-wrap">
                    <div className="bg-green-500/10 p-2 rounded-full">
                      <Check size={12} className="text-[#020817]" />
                    </div>

                    <p className=" font-base text-sm sm:text-lg text-[#020817] tracking-wide  text-left max-w-full  leading-loose">
                      Submission of details to CDSCO
                    </p>
                  </div>

                  <div className="flex gap-3 items-center break-words flex-wrap">
                    <div className="bg-green-500/10 p-2 rounded-full">
                      <Check size={12} className="text-[#020817]" />
                    </div>

                    <p className=" font-base text-sm sm:text-lg text-[#020817] tracking-wide  text-left max-w-full  leading-loose">
                      Grant of registration
                    </p>
                  </div>
                </div>

                <div>
                  <img
                    src={CDSCOOne}
                    alt="CDSCOOne"
                    className="rounded-2xl transition-all duration-200 shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] transition duration-500  "
                  />
                </div>
              </div>
            </div>


          </div>

          {/* Right Side */}
          <div className="flex flex-col gap-4 ">
            {/* Latest Blogs */}
            <div className="w-[360px] rounded-xl border-2 border-blue-950/20  p-5 ">
              <h1 className="text-xl font-semibold tracking-tight text-foreground">
                Latest Blogs
              </h1>
              <div className="mt-4 space-y-5 ">
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
                            className=" bg-emerald-50 text-emerald-700 border-emerald-200 hover:bg-emerald-100 hover:text-emerald-800"
                          >
                            {post.category}
                          </Badge>
                          <p className="line-clamp-2 text-sm font-normal text-zinc-900">
                            {post.title}
                          </p>

                          <Button
                            variant="link"
                            className="text-blue-900 hover:text-blue-950 p-0 h-auto font-normal text-sm"
                          >
                            Read More
                            <ArrowRightIcon className="-ml-1 mt-0.5 w-2 h-2" />
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

            {/* Our Services */}
            <div className="w-[360px] rounded-xl border-2 border-blue-950/20  p-5 ">
              <h1 className="text-xl font-semibold tracking-tight text-foreground">
                Our Services
              </h1>
              <div className="mt-4 space-y-5 ">
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
                            className=" bg-emerald-50 text-emerald-700 border-emerald-200 hover:bg-emerald-100 hover:text-emerald-800"
                          >
                            {post.category}
                          </Badge>
                          <p className="line-clamp-2 text-sm font-normal text-zinc-900">
                            {post.title}
                          </p>

                          <Button
                            variant="link"
                            className="text-blue-900 hover:text-blue-950 p-0 h-auto font-normal text-sm"
                          >
                            Read More
                            <ArrowRightIcon className="-ml-1 mt-0.5 w-2 h-2" />
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
          </div>
        </div>
      </div>
    </>
  );
};

export default CDSCO;

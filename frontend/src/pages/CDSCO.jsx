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

      <div className="w-full  overflow-x-hidden py-12 ">
        <div className="max-w-[88rem] flex gap-[48px] mx-auto px-12">
          <div className="flex-1 ">
            <div className="flex w-full items-center gap-3">
              <span className="uppercase  font-poppins font-semibold text-[20px] text-[#008080]">
                Overview
              </span>
              <Separator className="w-[94.46px] h-[1.5px] bg-[#008080]" />
            </div>

            <h3 className="text-[48px] font-roboto font-bold text-[#1E1E1E]">
              CDSCO License Details
            </h3>

            <p className="font-medium font-poppins text-[20px]  text-[#996C6C]">
              CDSCO Registration can be obtained through online portal
              registration
            </p>

            <div className=" mt-6 relative text-sm sm:text-xl text-zinc-500 tracking-wide mb-8 text-left max-w-full  leading-loose">
              CDSCO stands for Central Drugs Standard Control Organisation
              (which comes under the Ministry of Health and Family Welfare),
              headquartered in Delhi and has 6 zonal offices in India namely at
              Mumbai, Kolkata, Chennai, Ghaziabad, Hyderabad and Ahmedabad and
              various other sub-zonal offices. It is the national regulatory
              body for products like cosmetics, drugs, medical devices, etc.
            </div>

            <div className="flex  items-center justify-between">
              <div className="flex flex-col gap-2">
                <p className="font-medium font-poppins text-[20px]  text-[#996C6C]">
                  Different divisions of the CDSCO are as below:
                </p>
                <div className="flex flex-col gap-2">
                  <div className="flex gap-3 items-center break-words flex-wrap">
                    <div className="bg-green-500/10 p-2 rounded-full">
                      <Check size={12} />
                    </div>

                    <p className=" font-base text-sm sm:text-lg text-zinc-500 tracking-wide  text-left max-w-full  leading-loose">
                      Medical device division ( Drugs )
                    </p>
                  </div>

                  <div className="flex gap-3 items-center break-words flex-wrap">
                    <div className="bg-green-500/10 p-2 rounded-full">
                      <Check size={12} />
                    </div>

                    <p className=" font-base text-sm sm:text-lg text-zinc-500 tracking-wide  text-left max-w-full  leading-loose">
                      Drugs
                    </p>
                  </div>

                  <div className="flex gap-3 items-center break-words flex-wrap">
                    <div className="bg-green-500/10 p-2 rounded-full">
                      <Check size={12} />
                    </div>

                    <p className=" font-base text-sm sm:text-lg text-zinc-500 tracking-wide  text-left max-w-full  leading-loose">
                      Cosmetics
                    </p>
                  </div>

                  <div className="flex gap-3 items-center break-words flex-wrap">
                    <div className="bg-green-500/10 p-2 rounded-full">
                      <Check size={12} />
                    </div>

                    <p className=" font-base text-sm sm:text-lg text-zinc-500 tracking-wide  text-left max-w-full  leading-loose">
                      Clinical Trial on medical devices division
                    </p>
                  </div>

                  <div className="flex gap-3 items-center break-words flex-wrap">
                    <div className="bg-green-500/10 p-2 rounded-full">
                      <Check size={12} />
                    </div>

                    <p className=" font-base text-sm sm:text-lg text-zinc-500 tracking-wide  text-left max-w-full  leading-loose">
                      Vaccines
                    </p>
                  </div>

                  <div className="flex gap-3 items-center break-words flex-wrap">
                    <div className="bg-green-500/10 p-2 rounded-full">
                      <Check size={12} />
                    </div>

                    <p className=" font-base text-sm sm:text-lg text-zinc-500 tracking-wide  text-left max-w-full  leading-loose">
                      BA/BE
                    </p>
                  </div>
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

          <div className="w-[360px] rounded-xl border border-border p-5 shadow-sm ">
            <h1 className="text-xl font-semibold tracking-tight text-foreground">
              Latest Blogs
            </h1>
            <div className="mt-4 space-y-5 ">
              {blogPosts.map((post, index) => (
               
               <div  key={index}>
                <div
                  className=" group flex gap-4  transition-all duration-300"
                >

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
    </>
  );
};

export default CDSCO;

import { useEffect, useRef , useState } from "react"
import { ArabicAboutAuthor, ArabicFooter, ArabicServiceContactForm, ArabicServiceContentRight, ArabicServices } from "./ArabicBISFM"
import ScrollToTopButton from "@/components/common/ScrollToTop"
import { Separator } from "@/components/ui/separator"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table";
  import SchemeXImage from "@/assets/servicesImages/SchemeXImage.jpg";
import { Check } from "lucide-react";

const ArabicSchemeX = () => {
    return (
        <div>
             <ArabicSchemeXHero />
              <ArabicSchemeXIndex />
              <ArabicSchemeXContent />
              <ArabicFooter />
        <ScrollToTopButton />
        </div>
    )
}

export default ArabicSchemeX

const ArabicSchemeXHero = () => {
    return (
        <section
        className="relative pt-[60px] md:pt-[104px] pb-[30px] md:pb-[106px] overflow-x-hidden bg-[#F9F7F2]"
        aria-label="BIS FMCS Certification Hero"
      >
        {/* Background gradient */}
        <div className="hidden md:block absolute inset-0 rounded-bl-full z-10 transform translate-x-1/2 custom-radial-gradient-cdsco"></div>
        {/* Decorative elements */}
        <div
          className="absolute top-[20%] z-[10] right-[15%] w-[20px] h-[20px] rounded-full bg-[#1A8781]/30 animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
  
        <div className="max-w-[84rem] gap-[40px] md:gap-[90px] flex flex-col md:flex-row items-center justify-center h-full w-full mx-auto px-4 md:px-0">
          {/* Left Side */}
          <article className="relative flex flex-col gap-6 md:gap-8 w-full md:w-[533px] items-start">
            <div className="inline-flex items-center">
              <div className="h-[3px] w-[40px] bg-[#1A8781] mr-4"></div>
              <span className="text-[#1A8781] font-poppins text-sm font-medium tracking-wider uppercase">
                خبرة معتمدة
              </span>
            </div>
  
            <h1 className="leading-[1.2] md:leading-[70px] z-[10] font-playfair font-bold text-[40px] md:text-[52px] text-[#1E1E1E] -mt-2">
              <span className="relative">
                المخطط X
                <span className="absolute -bottom-2 left-0 w-[120px] h-[8px] bg-[#1A8781]/10 rounded-full"></span>
              </span>{" "}
            </h1>
  
            <p className="font-poppins text-[18px] md:text-[20px] z-[10] leading-[1.6] md:leading-[40px] text-[#332156] max-w-[490px] -mt-2">
              في إطار المخطط X، يجب على الشركات المصنعة الأجنبية الحصول على موافقة للتصدير إلى الهند. يغطي المخطط أكثر من 600 منتج إلزامي و20,000+ منتج اختياري.
            </p>
  
            <nav className="flex items-center -mt-2">
              <div
                className="flex items-center cursor-pointer group"
                onClick={() => {
                  const servicesSection = document.getElementById("services");
                  if (servicesSection) {
                    servicesSection.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                  }
                }}
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-full border-2 border-[#125E5A]/30 group-hover:border-[#125E5A] transition-all duration-300 mr-3">
                  <div className="w-3 h-3 border-t-2 border-r-2 border-[#125E5A] rotate-45 translate-x-[-1px]"></div>
                </div>
                <span className="font-geist text-[#125E5A] text-[18px] font-medium group-hover:translate-x-1 transition-all duration-300">
                  عرض الخدمات
                </span>
              </div>
            </nav>
          </article>
  
          {/* Right Side */}
          <ArabicServiceContactForm />
        </div>
      </section> 
    )
}

const ArabicSchemeXIndex = () => {
     const [isSticky, setIsSticky] = useState(false);
     const [activeSection, setActiveSection] = useState("overview");
     const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
     const stickyRef = useRef(null);
     const mobileMenuRef = useRef(null);
     const toggleButtonRef = useRef(null);
   
     const SECTIONS = [
       {
         key: "overview",
         label: "نظرة عامة",
       },
       {
         key: "certification",
         label: "شهادة",
       },
       {
         key: "procedure",
         label: "إجراء",
       },
       {
         key: "pricing",
         label: "التسعير",
       },
       {
         key: "representative",
         label: "ممثل",
       },
       {
         key: "benefits",
         label: "فوائد",
       },
       {
         key: "conclusion",
         label: "خاتمة",
       },
     ];
   
     const handleItemClick = (item) => {
       const element = document.getElementById(item.key);
       if (element) {
         element.scrollIntoView({
           behavior: "smooth",
           block: "start",
         });
         setActiveSection(item.key);
         setIsMobileMenuOpen(false);
       }
     };
   
     const toggleMobileMenu = () => {
       setIsMobileMenuOpen((prevState) => !prevState);
     };
   
     // Close mobile menu when clicking outside
     useEffect(() => {
       const handleClickOutside = (event) => {
         if (
           mobileMenuRef.current &&
           !mobileMenuRef.current.contains(event.target) &&
           toggleButtonRef.current &&
           !toggleButtonRef.current.contains(event.target)
         ) {
           setIsMobileMenuOpen(false);
         }
       };
   
       document.addEventListener("mousedown", handleClickOutside);
       return () => {
         document.removeEventListener("mousedown", handleClickOutside);
       };
     }, []);
   
     useEffect(() => {
       const handleScroll = () => {
         if (stickyRef.current) {
           const rect = stickyRef.current.getBoundingClientRect();
           setIsSticky(rect.top <= 44);
         }
       };
   
       window.addEventListener("scroll", handleScroll);
       // Initial check
       handleScroll();
   
       return () => {
         window.removeEventListener("scroll", handleScroll);
       };
     }, []);
   
     useEffect(() => {
       const handleScroll = () => {
         const sections = SECTIONS.map((section) => {
           const element = document.getElementById(section.key);
           if (element) {
             const rect = element.getBoundingClientRect();
             return {
               id: section.key,
               top: rect.top,
               bottom: rect.bottom,
               element,
             };
           }
           return null;
         }).filter(Boolean);
   
         // Find the section that's currently most visible in viewport
         // Check which section's top is closest to the top of viewport (with some offset)
         const currentSection = sections.find((section) => {
           return section.top <= 150 && section.bottom > 150;
         });
   
         if (currentSection) {
           setActiveSection(currentSection.id);
         } else {
           // If no section is in the sweet spot, find the one closest to top
           const closestSection = sections.reduce((closest, section) => {
             if (!closest) return section;
   
             const currentDistance = Math.abs(section.top - 150);
             const closestDistance = Math.abs(closest.top - 150);
   
             return currentDistance < closestDistance ? section : closest;
           }, null);
   
           if (closestSection) {
             setActiveSection(closestSection.id);
           }
         }
       };
   
       window.addEventListener("scroll", handleScroll);
       handleScroll(); // Initial check
   
       return () => window.removeEventListener("scroll", handleScroll);
     }, []);
   
     // Find current section label for mobile display
     const currentSectionLabel =
       SECTIONS.find((section) => section.key === activeSection)?.label ||
       "نظرة عامة";
   
     return (
       <div
         ref={stickyRef}
         className={`sticky top-0 md:top-[44px] z-[50] transition-colors duration-300 w-full h-auto md:h-20 ${
           isSticky ? "bg-white/70 backdrop-blur-lg" : "bg-[#B9DEEB]"
         }`}
       >
         {/* Mobile Menu Button */}
         <div className="md:hidden flex items-center justify-between px-4 h-20">
           <div className="text-base font-semibold font-geist tracking-wider uppercase text-blue-900">
             {currentSectionLabel}
           </div>
           <button
             ref={toggleButtonRef}
             onClick={toggleMobileMenu}
             className="p-2 rounded-md hover:bg-blue-100 transition-colors"
             aria-label="Toggle menu"
           >
             <svg
               xmlns="http://www.w3.org/2000/svg"
               className="h-6 w-6 text-blue-900"
               fill="none"
               viewBox="0 24 24"
               stroke="currentColor"
             >
               {isMobileMenuOpen ? (
                 <path
                   strokeLinecap="round"
                   strokeLinejoin="round"
                   strokeWidth={2}
                   d="M5 15l7-7 7 7"
                 />
               ) : (
                 <path
                   strokeLinecap="round"
                   strokeLinejoin="round"
                   strokeWidth={2}
                   d="M19 9l-7 7-7-7"
                 />
               )}
             </svg>
           </button>
         </div>
   
         {/* Mobile Menu Dropdown */}
         {isMobileMenuOpen && (
           <div
             ref={mobileMenuRef}
             className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg z-50 border-t border-gray-200"
           >
             <div className="flex flex-col py-2">
               {SECTIONS.map((item) => (
                 <div
                   key={item.key}
                   onClick={() => handleItemClick(item)}
                   className={`px-4 py-3 cursor-pointer transition-colors ${
                     item.key === activeSection
                       ? "bg-blue-50 text-blue-900 font-semibold"
                       : "text-blue-950 hover:bg-blue-50"
                   }`}
                 >
                   <div className="font-geist tracking-wider uppercase">
                     {item.label}
                   </div>
                 </div>
               ))}
             </div>
           </div>
         )}
   
         {/* Desktop Navigation */}
         <div className="hidden md:flex items-center justify-between px-12 h-full max-w-[88rem] mx-auto overflow-x-auto">
           {SECTIONS.map((item) => (
             <div
               key={item.key}
               onClick={() => handleItemClick(item)}
               className="relative cursor-pointer group whitespace-nowrap px-2"
             >
               <div
                 className={`text-base font-semibold font-geist tracking-wider uppercase transition-colors duration-300 ${
                   item.key === activeSection
                     ? "text-blue-900"
                     : "text-blue-950 group-hover:text-blue-900"
                 }`}
               >
                 {item.label}
               </div>
               <div
                 className={`absolute bottom-0 left-0 w-full h-0.5 bg-blue-900 transition-transform duration-300 ${
                   item.key === activeSection
                     ? "scale-x-100"
                     : "scale-x-0 group-hover:scale-x-100"
                 }`}
               />
             </div>
           ))}
         </div>
       </div>
     );
}

const ArabicSchemeXContent = () => {
    return (
         <section>
              <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12">
                <div className="flex flex-col md:flex-row gap-6 md:gap-[48px] w-full">
                  {/* Left Side */}
                  <ArabicSchemeXContentLeft />
                  {/* Right Side */}
                  <ArabicServiceContentRight />
                </div>
              </div>
            
           
        
              <div id="services">
                <ArabicServices />
              </div>
            </section>
    )
}

const ArabicSchemeXContentLeft = () => {
    return (
        <article className="flex-1">
            <div className="flex flex-col gap-[20px] md:gap-[40px]">
     <section
               className="flex flex-col gap-2 md:gap-4 mb-6"
               aria-label="شهادة BIS للمصنعين الأجانب"
             >
               <h1 className="text-[28px] md:text-[40px] font-roboto font-bold text-[#131316] leading-none md:leading-[1.1] my-3 md:my-0">
                 دليل حول شهادة BIS تحت المخطط X للمنتجات مثل الآلات والمضخات والضواغط ومعدات التبديل والرافعات والمحولات وجميع أنواع المحركات إلخ.
               </h1>
     
               <h2 className="font-geist text-[18px] md:text-[22px] font-semibold text-[#1A8781] ">
                 المخطط X: القفزة الاستراتيجية للهند في الامتثال العالمي
               </h2>
     
               <p className="mt-[12px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
                 ترفع الهند معايير سلامة وجودة المنتجات من خلال المخطط X، وهي مبادرة رئيسية تحت لوائح تقييم المطابقة BIS لعام 2018، والتي تم تحسينها بموجب تعديل 2022. بعيداً عن كونه مجرد إجراء امتثال روتيني، يُعد المخطط X إطار عمل تقييم مطابقة يتطلع إلى المستقبل ويوائم المنتجات المحلية والمستوردة مع معايير السلامة والمعايير التقنية الدولية. ينصب التركيز بشكل خاص على الآلات والمعدات الكهربائية، بما في ذلك الآلات الكهربائية الدوارة والمضخات والضواغط والمحولات ومعدات التبديل والرافعات. بالنسبة لهذه المنتجات، أصبح الحصول على شهادة BIS إلزامياً الآن، مما يدل على الامتثال لبعض أكثر المعايير صرامة على مستوى العالم.
               </p>
     
               <h2 className="mt-[12px] md:mt-[16px] font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
                 الاستثناءات تحت المخطط X لشهادة BIS
               </h2>
     
               <p className="mt-[12px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
                 يلقي المخطط X أيضاً نظرة متخصصة على آلات البناء، خاصة تلك التي تندرج تحت قواعد CMVR لعام 1989. بالشراكة مع وزارة النقل البري والطرق السريعة (MoRTH)، تم تقديم بروتوكول مطابقة مصمم خصيصاً لهذه الآلات الثقيلة. وهذا يضمن أن حتى المعدات الأكثر قوة تمتثل لمعايير السلامة والتشغيل الاستثنائية، مما يعزز أكثر الإطار التنظيمي للهند. من خلال تنفيذ المخطط X في القطاعات التي تؤثر على السلامة العامة والبنية التحتية، تعزز BIS الهندية مهمتها لرفع موثوقية المنتجات المحلية والمستوردة.
               </p>
     
               <h2 className="mt-[12px] md:mt-[16px] font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
                 فهم اللائحة التقنية الشاملة أو شهادة المخطط X تحت BIS الهندية.
               </h2>
     
               <p className="mt-[12px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
                 تم الإعلان عن اللائحة التقنية الشاملة، المعنونة رسمياً "أمر سلامة الآلات والمعدات الكهربائية (اللائحة التقنية الشاملة)، 2024"، من قبل وزارة الصناعات الثقيلة في 28 أغسطس 2024. مقرر تطبيقها من 28 أغسطس 2025، تفرض هذه اللائحة الامتثال لشهادة المخطط X تحت إطار BIS الهندي لمجموعة واسعة من الآلات والمعدات الكهربائية المصنعة أو المستوردة في الهند. تم تمديد تاريخ التنفيذ لاحقاً إلى 1 سبتمبر 2026.
               </p>
     
               <p className="mt-[12px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
                 تُعد اللائحة التقنية الشاملة خطوة تحويلية نحو تعزيز السلامة الصناعية والتوحيد القياسي. تنطبق على مجموعة واسعة من الآلات والمعدات الكهربائية، بما في ذلك التجميعات والتجميعات الفرعية والمكونات. من المضخات والضواغط إلى أجهزة الطرد المركزي والمحولات ومعدات التبديل، يجب على جميع المنتجات المشمولة الحصول على شهادة BIS تحت المخطط X ليتم بيعها قانونياً في الهند من 1 سبتمبر 2026.
               </p>
     
               <p className="mt-[12px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
                 ومع ذلك، هناك بعض الاستثناءات. المنتجات التي تحكمها بالفعل أوامر أخرى صادرة عبر القسم 16 من قانون مكتب المعايير الهندية لعام 2016 مستثناة. بالإضافة إلى ذلك، البضائع المصنعة خصيصاً للتصدير ومعدات البناء التي تحكمها قواعد CMVR لعام 1989 تحت MoRTH (وزارة النقل البري والطرق السريعة)، مستثناة أيضاً.
               </p>
     
               <p className="mt-[12px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
                 تحت شهادة المخطط X، يمكن للمصنعين الحصول على ترخيص BIS أو شهادة المطابقة (CoC) من مكتب المعايير الهندية. وهذا يسمح باستخدام علامة معيار BIS، والتي هي رمز قوي للثقة وضمان الجودة. ترخيص BIS تحت هذا المخطط يؤكد أن المنتجات تلبي جميع معايير التقنية والسلامة المطبقة.
               </p>
     
               <p className="mt-[12px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
                 يركز BIS الهندي من خلال هذه اللائحة على ضمان وصول الآلات الآمنة والمتوافقة وعالية الأداء فقط إلى المستخدمين النهائيين. من خلال فرض شهادة BIS، تضمن الحكومة معياراً موحداً لسلامة المنتجات.
               </p>
     
               <p className="mt-[12px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
                 اللائحة التقنية الشاملة ليست مجرد إصلاح سياسي - إنها محفز لرفع المشهد التصنيعي الهندي. تمكن المصنعين المحليين من تلبية المعايير العالمية مع تقوية النظام البيئي للامتثال المحلي. مع شهادة المخطط X، تتحرك الهند نحو مستقبل حيث جودة المنتج والسلامة والتوافق الدولي متوائمة بسلاسة.
               </p>
               <Separator className="h-px w-full bg-gradient-to-r from-transparent via-gray-500 to-transparent" />
     
               {/* <div className="bg-[#F9F7F2] border-l-4 border-[#1A8781] p-4 mt-2 md:mt-4 rounded-md shadow-sm">
                   <h4 className="font-geist text-[18px] md:text-[22px] font-semibold text-[#1A8781] mb-1">Is obtaining an ISI mark for Indian importers mandatory?</h4>
                   <p className="font-geist text-[16px] md:text-[20px] text-[#42434d]">
                     For the products falling under the mandatory list, FMCS BIS certification is mandatory. The list of mandatory products can be accessed on this <a href="https://www.bis.gov.in/product-certification/products-under-compulsory-certification/" target="_blank" rel="noopener noreferrer" className="text-[#125E5A] underline hover:text-[#1A8781] transition-colors">link</a>.
                   </p>
                 </div> */}
             </section>


            <ArabicSchemeXOverviewSection/> 
<Divider/>

<ArabicSchemeXCertification />
<Divider/>

<ArabicSchemeXProcedure />
<Divider/>

<ArabicSchemeXPricing />
<Divider/>

<ArabicSchemeXRepresentative />
<Divider/>

<ArabicSchemeXBenefits />
<Divider/>

<ArabicSchemeXConclusion />
<Divider/>

<ArabicAboutAuthor/>


       </div>
        </article>
    )
}


const ArabicSchemeXOverviewSection = () => {
    return (
           <section
             id="overview"
             className="flex flex-col scroll-mt-20"
             aria-label="ترشيح الممثل الهندي المعتمد"
           >
             <header className="flex w-full items-center gap-3">
               <span className="uppercase font-semibold font-geist text-[16px] md:text-[20px] text-gray-700">
                 نظرة عامة
               </span>
               <Separator className="w-[94.46px] h-[1.5px] bg-gray-700" />
             </header>
       
             <h2 className="text-[28px] md:text-[40px] font-roboto font-bold text-[#131316] leading-none  md:leading-[1.1] my-3 md:my-0">
               الفرق بين المخطط X وعلامة ISI: فهم أنظمة شهادة BIS الهندية
             </h2>
       
             {/* <h3 className="mt-[12px] md:mt-[16px] font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
               {t("overviewSection.overviewTitle")}
             </h3> */}
       
             <p className="mt-[12px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
               عندما يتعلق الأمر بسلامة المنتجات وضمان الجودة في الهند، يظهر مصطلحان رئيسيان غالباً: المخطط X وعلامة ISI. كلاهما يندرج تحت مظلة BIS الهندي (مكتب المعايير الهندية)، ومع ذلك يقومان بأدوار مختلفة في نظام شهادة BIS البيئي. فهم التمييز أمر ضروري للمصنعين والمستوردين والشركات التي تسعى للحصول على شهادة BIS أو ترخيص BIS.
             </p>
       
             <h3 className="mt-[12px] md:mt-[16px] font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
               حول علامة ISI
             </h3>
       
             <p className="mt-[12px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
               علامة ISI هي جزء من عملية شهادة BIS للمنتجات المطابقة لمعايير هندية محددة. المنتجات التي تحمل علامة ISI تدل على الامتثال المستمر لمعايير السلامة والأداء والجودة كما هو محدد في المعيار الهندي ذي الصلة. علامة ISI إلزامية لمختلف السلع الاستهلاكية اليومية مثل الأجهزة الكهربائية وقدور الضغط والخوذ وغيرها.
             </p>
       
             <h3 className="mt-[12px] md:mt-[16px] font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
               حول شهادة المخطط X
             </h3>
       
             <p className="mt-[12px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
               من ناحية أخرى، المخطط X هو إطار تقييم مطابقة أكثر حداثة وتقدماً تم تقديمه تحت لوائح تقييم المطابقة BIS لعام 2018. المخطط X مصمم خصيصاً للآلات والمنتجات الصناعية والمعدات الكهربائية المعقدة التي تتطلب فحصاً تقنياً دقيقاً. المنتجات المعتمدة تحت المخطط X يجب أن تحصل على شهادة BIS أو ترخيص BIS، مما يؤكد المطابقة مع مواصفات السلامة والمواصفات التقنية عالية المستوى. يوفر هذا المخطط كلاً من ترخيص BIS وشهادة المطابقة (CoC)، مما يجعله مثالياً للمنتجات المستوردة أيضاً.
             </p>
       
             <h3 className="mt-[12px] md:mt-[16px] font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
               خاتمة
             </h3>
       
             <p className="mt-[12px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
               بينما تركز علامة ISI على السلع الاستهلاكية البسيطة والموحدة، فإن المخطط X مصمم للعناصر المتخصصة، وغالباً ما تكون ذات درجة صناعية حيث يكون الاختبار التفصيلي وفحص المصانع والتحقق من الدفعات ضرورياً. كلا النظامين يديرهما BIS الهندي، ولكن الإجراءات وفئات المنتجات وعمق التقييم تختلف بشكل كبير.
             </p>
       
             {/* table  */}
       
             <div className="overflow-x-auto mt-8 mb-8">
               <table className="w-full border-collapse border border-gray-300 bg-white shadow-sm">
                 <thead>
                   <tr className="bg-gray-50">
                     <th className="border border-gray-300 px-4 py-3 text-left font-geist font-semibold text-[16px] md:text-[18px] text-gray-800">
                       الميزة
                     </th>
                     <th className="border border-gray-300 px-4 py-3 text-left font-geist font-semibold text-[16px] md:text-[18px] text-gray-800">
                       علامة ISI
                     </th>
                     <th className="border border-gray-300 px-4 py-3 text-left font-geist font-semibold text-[16px] md:text-[18px] text-gray-800">
                       المخطط X
                     </th>
                   </tr>
                 </thead>
                 <tbody>
                   <tr className="hover:bg-gray-50">
                     <td className="border border-gray-300 px-4 py-3 font-geist font-medium text-[14px] md:text-[16px] text-gray-700">
                       يديره
                     </td>
                     <td className="border border-gray-300 px-4 py-3 font-geist text-[14px] md:text-[16px] text-[#42434d]">
                       BIS الهندي
                     </td>
                     <td className="border border-gray-300 px-4 py-3 font-geist text-[14px] md:text-[16px] text-[#42434d]">
                       BIS الهندي
                     </td>
                   </tr>
                   <tr className="hover:bg-gray-50">
                     <td className="border border-gray-300 px-4 py-3 font-geist font-medium text-[14px] md:text-[16px] text-gray-700">
                       نوع الشهادة
                     </td>
                     <td className="border border-gray-300 px-4 py-3 font-geist text-[14px] md:text-[16px] text-[#42434d]">
                       ترخيص BIS
                     </td>
                     <td className="border border-gray-300 px-4 py-3 font-geist text-[14px] md:text-[16px] text-[#42434d]">
                       شهادة BIS / ترخيص BIS
                     </td>
                   </tr>
                   <tr className="hover:bg-gray-50">
                     <td className="border border-gray-300 px-4 py-3 font-geist font-medium text-[14px] md:text-[16px] text-gray-700">
                       المنتجات المستهدفة
                     </td>
                     <td className="border border-gray-300 px-4 py-3 font-geist text-[14px] md:text-[16px] text-[#42434d]">
                       السلع الاستهلاكية
                     </td>
                     <td className="border border-gray-300 px-4 py-3 font-geist text-[14px] md:text-[16px] text-[#42434d]">
                       الآلات والمعدات الكهربائية
                     </td>
                   </tr>
                   <tr className="hover:bg-gray-50">
                     <td className="border border-gray-300 px-4 py-3 font-geist font-medium text-[14px] md:text-[16px] text-gray-700">
                       العلامة المستخدمة
                     </td>
                     <td className="border border-gray-300 px-4 py-3 font-geist text-[14px] md:text-[16px] text-[#42434d]">
                       علامة ISI
                     </td>
                     <td className="border border-gray-300 px-4 py-3 font-geist text-[14px] md:text-[16px] text-[#42434d]">
                       علامة معيار BIS (تحت المخطط X)
                     </td>
                   </tr>
                   <tr className="hover:bg-gray-50">
                     <td className="border border-gray-300 px-4 py-3 font-geist font-medium text-[14px] md:text-[16px] text-gray-700">
                       مستوى الامتثال
                     </td>
                     <td className="border border-gray-300 px-4 py-3 font-geist text-[14px] md:text-[16px] text-[#42434d]">
                       امتثال المعيار الهندي
                     </td>
                     <td className="border border-gray-300 px-4 py-3 font-geist text-[14px] md:text-[16px] text-[#42434d]">
                       امتثال تقني وسلامة عالي المستوى
                     </td>
                   </tr>
                 </tbody>
               </table>
             </div>
       
             <img
               src={SchemeXImage}
               alt="المخطط X"
               className="w-full max-w-[300px] h-auto rounded-lg shadow-sm my-6 mx-auto border border-gray-200 hover:shadow-md transition-shadow duration-300"
             />
       
             {/* Scheme X Certification Product list */}
       
             <div className="mt-[16px] md:mt-[24px]">
               {/* Download Button */}
       
               <Table className="min-w-full divide-y divide-gray-200 shadow-sm rounded-lg">
                 <TableHeader className="bg-[#F9F7F2]">
                   <TableRow className="bg-[#1A8781]/10">
                     <TableHead className="px-6 py-3 text-left text-xs md:text-base font-geist font-medium text-gray-700 uppercase tracking-wider rounded-tl-lg">
                       الرقم التسلسلي
                     </TableHead>
                     <TableHead className="px-6 py-3 text-left text-xs md:text-base font-geist font-medium text-gray-700 uppercase tracking-wider">
                       وصف الآلات والمعدات الكهربائية
                     </TableHead>
                     <TableHead className="px-6 py-3 text-left text-xs md:text-base font-geist font-medium text-gray-700 uppercase tracking-wider rounded-tr-lg">
                       رمز HS
                     </TableHead>
                   </TableRow>
                 </TableHeader>
                 <TableBody className="bg-white divide-y divide-gray-200">
                   {[
                     {
                       serialNumber: "1",
                       description: "جميع أنواع المضخات للتعامل مع السوائل، رافعات السوائل و(أو) تجميعاتها /تجميعاتها الفرعية /مكوناتها",
                       hsCode: "841340, 841350, 841360, 841370, 841381, 841382, 841391 and 841392"
                     },
                     {
                       serialNumber: "2",
                       description: "جميع أنواع الضواغط و(أو) تجميعاتها /تجميعاتها الفرعية /مكوناتها",
                       hsCode: "841430, 841440, 84148011, 84148090, 84149011, 84149019, 84149040 and 84149090"
                     },
                     {
                       serialNumber: "3",
                       description: "جميع أنواع آلات معالجة المواد بعملية تتضمن تغيير في درجة الحرارة و(أو) تجميعاتها /تجميعاتها الفرعية /مكوناتها",
                       hsCode: "841932, 841939, 841940, 841950, 841960, 841981, 841989 and 84199090"
                     },
                     {
                       serialNumber: "4",
                       description: "جميع أنواع أجهزة الطرد المركزي، آلات الترشيح أو التنقية للسوائل والغاز و(أو) تجميعاتها /تجميعاتها الفرعية /مكوناتها",
                       hsCode: "842111, 842112, 842119, 84212110, 84212190, 842122, 842129, 842131, 842139, 842191 and 842199"
                     },
                     {
                       serialNumber: "5",
                       description: "جميع أنواع آلات التعبئة، الإغلاق، الإغلاق المحكم، وضع العلامات على الزجاجات، التعبئة أو التغليف و(أو) تجميعاتها/تجميعاتها الفرعية/مكوناتها",
                       hsCode: "842220, 842230, 842240 and 842290"
                     }
                   ].map((row, index) => (
                     <TableRow key={index} className="hover:bg-gray-50">
                       <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                         {row.serialNumber}
                       </TableCell>
                       <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                         {row.description}
                       </TableCell>
                       <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                         {row.hsCode}
                       </TableCell>
                     </TableRow>
                   ))}
                 </TableBody>
               </Table>
       
               {/* Heading and Description */}
               <div className="mb-6">
                 <h3 className="text-[20px] md:text-[24px] font-roboto font-bold text-[#131316] mb-2">
                   المنتجات المشمولة تحت شهادة المخطط X
                 </h3>
                 <p className="mt-[12px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
                   يمكنك تحميل ملف منتجات المخطط X من هنا
                 </p>
               </div>
       
               <div className="flex justify-end mb-4">
                 <button
                   onClick={downloadTableData}
                   className="inline-flex items-center gap-2 px-4 py-2 bg-[#1A8781] text-white rounded-lg font-geist text-sm md:text-base hover:bg-[#156d68] transition-colors duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                 >
                   <svg
                     xmlns="http://www.w3.org/2000/svg"
                     className="h-4 w-4 md:h-5 md:w-5"
                     fill="none"
                     viewBox="0 0 24 24"
                     stroke="currentColor"
                   >
                     <path
                       strokeLinecap="round"
                       strokeLinejoin="round"
                       strokeWidth={2}
                       d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                     />
                   </svg>
                   تحميل PDF
                 </button>
               </div>
             </div>
           </section>
    )
}

const PointsListTwo = ({ points, heading }) => {
    return (
      <div className="flex flex-col w-full">
        <h3 className="font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
          {heading}
        </h3>
        <ul className="flex flex-col mt-[16px] md:mt-[20px] gap-2">
          {points.map((point, index) => (
            <li key={index} className="flex items-start gap-2">
              <div className="bg-green-500/10 p-2 rounded-full">
                <Check size={12} className="text-[#020817]" />
              </div>
              <p className="font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-normal">
                {point}
              </p>
            </li>
          ))}
        </ul>
      </div>
    );
  };

const Divider = () => {
    return (
        <Separator className="h-px w-full bg-gradient-to-r from-transparent via-gray-500 to-transparent" />
        
    )
}

// Update the downloadTableData function
const downloadTableData = () => {
    // Create a link element to download the PDF
    const link = document.createElement("a");
    link.href = "/pdf/schemeXtable.pdf"; // Path to your PDF in public/pdf folder
    link.download = "SchemeXtable.pdf"; // File name for download
    link.target = "_blank"; // Open in new tab if direct download fails
  
    // Trigger the download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };


  const ArabicSchemeXCertification = ()=> {
    return (
        <section id="certification" className="flex flex-col scroll-mt-20">
      {/* Documents */}
      <div className="flex w-full items-center gap-3">
        <span className="uppercase font-semibold font-geist text-[16px] md:text-[20px] text-gray-700">
          شهادة
        </span>
        <Separator className="w-[94.46px] h-[1.5px] bg-gray-700" />
      </div>
      <h2 className="text-[28px] md:text-[40px] font-roboto font-bold text-[#131316] leading-none  md:leading-[1.1] my-3 md:my-0">
        الوثائق المطلوبة لشهادة BIS المخطط X تحت اللائحة التقنية الشاملة
      </h2>

      <p className="mt-[12px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        المصنعون الذين يهدفون إلى اعتماد آلاتهم ومعداتهم الكهربائية تحت اللائحة التقنية الشاملة يجب أن يمتثلوا للمخطط X من BIS الهندي. هذا المخطط الاعتمادي يضمن أن المنتجات الصناعية تلبي معايير السلامة والأداء الصارمة المتوافقة مع المعايير العالمية والهندية. للحصول على شهادة BIS تحت المخطط X، يجب على المصنعين تقديم وثائق محددة إلى مكتب المعايير الهندية (BIS) عبر بوابة Manak Online الرسمية للمصنعين الهنود وفي نسخة ورقية في مقر BIS الرئيسي للمصنعين الأجانب.
      </p>

      <h3 className="mt-[12px] md:mt-[16px] font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        الوثائق الرئيسية المطلوبة لشهادة BIS تحت المخطط X
      </h3>

      <p className="mt-[12px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        لتبسيط عملية شهادة BIS، يُطلب من المصنعين جمع وتقديم الوثائق التالية خلال مرحلة التسجيل:
      </p>

      {/* table for documents */}
      <div className="mt-[16px] md:mt-[24px]">
        <Table className="min-w-full divide-y divide-gray-200 shadow-sm rounded-lg">
          <TableHeader className="bg-[#F9F7F2]">
            <TableRow className="bg-[#1A8781]/10">
              <TableHead className="px-6 py-3 text-left text-xs md:text-base font-geist font-medium text-gray-700 uppercase tracking-wider rounded-tl-lg">
                الرقم التسلسلي
              </TableHead>
              <TableHead className="px-6 py-3 text-left text-xs md:text-base font-geist font-medium text-gray-700 uppercase tracking-wider">
                الوثيقة المطلوبة
              </TableHead>
              <TableHead className="px-6 py-3 text-left text-xs md:text-base font-geist font-medium text-gray-700 uppercase tracking-wider rounded-tr-lg">
                التفاصيل
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="bg-white divide-y divide-gray-200">
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                1
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                الاسم والعنوان (المصنع والمكتب)
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                الاسم القانوني الكامل والعناوين الفعلية لموقع التصنيع والمكتب
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                2
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                معلومات PAN وGST
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                رقم الحساب الدائم (PAN) وتفاصيل تسجيل GST
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                3
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                تفاصيل الاتصال
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                عنوان البريد الإلكتروني، رقم الهاتف المحمول، والهاتف الأرضي للاتصالات الرسمية
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                4
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                تفاصيل الإدارة
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                أسماء وأدوار وهويات المديرين الرئيسيين والموقع المعتمد
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                5
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                وصف المنتج
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                تفاصيل الآلات والمعدات المشمولة تحت الجدول الأول من اللائحة التقنية الشاملة
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                6
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                تصنيف المنتج
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                النوع والطراز والصنف المحدد الذي يُطلب له ترخيص BIS
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                7
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                الملف التقني
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                جميع التفاصيل التقنية المتعلقة بالمنتج وتفاصيل حول وحدة التصنيع.
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      <h2 className="mt-[12px] md:mt-[16px] font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        التسجيل في بوابة Manak Online
      </h2>

      <p className="mt-[12px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        يجب على جميع المصنعين التسجيل عبر بوابة Manak Online، الواجهة الرقمية الرسمية لـ BIS الهندي. تحتوي هذه البوابة على قسم مخصص للمنتجات المبنية على OTR المشمولة تحت المخطط X. بمجرد التسجيل، يمكن للمصنع بدء عملية الاعتماد للحصول على ترخيص BIS أو شهادة BIS.
      </p>

      <h2 className="mt-[12px] md:mt-[16px] font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        لماذا تهم شهادة BIS والمخطط X
      </h2>

      <p className="mt-[12px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        تحت اللائحة التقنية الشاملة، لا يمكن تصنيع أو بيع أو استيراد منتجات مثل المحولات والضواغط ومعدات التحكم والمضخات في الهند دون شهادة BIS المناسبة. يضمن المخطط X أن هذه المنتجات تلبي متطلبات تقنية وسلامة صارمة، مما يساعد المصنعين على بناء المصداقية وبناء ثقة المستهلك والوصول إلى أسواق أوسع. المنتجات المعتمدة تحت المخطط X مخولة أيضاً لحمل علامة معيار BIS، التي يجب عدم الخلط بينها وبين علامة ISI، المستخدمة تقليدياً للسلع الاستهلاكية.
      </p>
    </section>
    )
  }


const ArabicSchemeXProcedure = () => {
    return (
       <section id="procedure" className="flex flex-col scroll-mt-20">
         {/* Process */}
         <div className="flex w-full items-center gap-3">
           <span className="uppercase font-semibold font-geist text-[16px] md:text-[20px] text-gray-700">
             الإجراءات
           </span>
           <Separator className="w-[94.46px] h-[1.5px] bg-gray-700" />
         </div>
   
         <h2 className="text-[28px] md:text-[40px] font-roboto font-bold text-[#131316] leading-none  md:leading-[1.1] my-3 md:my-0">
           كيفية الحصول على شهادة BIS تحت المخطط X: دليل خطوة بخطوة
         </h2>
   
         <p className="mt-[12px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
           بالنسبة للمصنعين الذين يسعون للامتثال للائحة التقنية الشاملة، يعد الحصول على شهادة BIS تحت المخطط X أمراً ضرورياً. لقد وضع BIS الهندي عملية منظمة لمساعدة المصنعين المحليين والدوليين على الوصول إلى السوق الهندي من خلال شهادة BIS الشرعية.
         </p>
   
         <h3 className="mt-[12px] md:mt-[16px] font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
           فيما يلي دليل واضح خطوة بخطوة لإكمال عملية تسجيل وشهادة BIS تحت المخطط X:
         </h3>
   
         <h3 className="mt-[12px] md:mt-[20px] font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
           التحقق من قابلية تطبيق المنتج
         </h3>
   
         <p className="mt-[12px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
           قبل بدء العملية، يجب على المصنعين أولاً تحديد ما إذا كان منتجهم يقع ضمن نطاق اللائحة التقنية الشاملة ويتطلب شهادة المخطط X. ليس كل المنتجات تحتاج إلى ترخيص BIS، لذا فإن التحقق من الأهلية بناءً على المعايير الهندية هو الخطوة الأولى.
         </p>
   
         <h3 className="mt-[12px] md:mt-[20px] font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
           إعداد الوثائق
         </h3>
   
         <h2 className="mt-[12px] md:mt-[20px] font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
           الوثائق الرئيسية المطلوبة تشمل:
         </h2>
   
         <div className="flex flex-col md:flex-row gap-6 md:gap-10">
           <PointsListTwo
             points={[
               "شهادة تسجيل الشركة",
               "مخطط المصنع وتدفق عملية التصنيع",
               "مواصفات المنتج والتصميم",
               "تقارير اختبار صالحة من مختبرات معتمدة",
               "الملف التقني"
             ]}
           />
         </div>
   
         <p className="mt-[12px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
           هذه ضرورية لبدء عملية تسجيل BIS وللتقييم تحت المخطط X من قبل BIS الهندي.
         </p>
   
         <h3 className="mt-[12px] md:mt-[20px] font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
           تطوير الملف التقني
         </h3>
   
         <p className="mt-[12px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
           عنصر حاسم في شهادة BIS هو الملف التقني، والذي يشمل:
         </p>
   
         <div className="flex flex-col md:flex-row gap-6 md:gap-10">
           <PointsListTwo
             points={[
               "تصميم المنتج والميزات",
               "تفاصيل عملية التصنيع",
               "فحوصات الجودة ووثائق التحكم",
               "المواد الخام، بروتوكولات الاختبار، وتفاصيل التعاقد من الباطن",
               "وثائق الامتثال لدعم المطابقة مع المعايير الهندية ذات الصلة"
             ]}
           />
         </div>
   
         <p className="mt-[12px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
           يساعد هذا الملف BIS الهندي في تقييم ما إذا كان المنتج مؤهلاً للحصول على ترخيص BIS تحت المخطط X.
         </p>
   
         <h3 className="mt-[12px] md:mt-[20px] font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
           تقديم الطلب عبر الإنترنت
         </h3>
   
         <p className="mt-[12px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
           يتم تقديم الطلب عبر بوابة تسجيل BIS (Manak Online). بالإضافة إلى رفع الوثائق، يجب على المتقدمين دفع الرسوم المعمول بها. هذا هو البدء الرسمي لعملية شهادة BIS.
         </p>
   
         <p className="mt-[12px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
           العملية مخصصة بالكامل للعمل الميداني بالنسبة للمصنعين الأجانب.
         </p>
   
         <h3 className="mt-[12px] md:mt-[20px] font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
           تفتيش المصنع
         </h3>
   
         <p className="mt-[12px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
           بمجرد قبول الطلب، سيقوم مسؤولو BIS الهندي بزيارة موقع التصنيع. يستغرق التفتيش عادة:
         </p>
   
         <div className="flex flex-col md:flex-row gap-6 md:gap-10">
           <PointsListTwo
             points={[
               "2 أيام للمصنعين المحليين",
               "3 أيام للمصنعين الأجانب"
             ]}
           />
         </div>
   
         <p className="mt-[12px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
           يتحقق المسؤولون من الامتثال للائحة التقنية الشاملة، ويفحصون الملف التقني، ويتحققون من جودة الإنتاج، ويشهدون الاختبارات الداخلية.
         </p>
   
         <h3 className="mt-[12px] md:mt-[20px] font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
           اختبار العينات
         </h3>
   
         <p className="mt-[12px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
           يتم اختبار عينة المنتج إما في الموقع أو إرسالها إلى مختبر معتمد من BIS. تؤكد الاختبارات ما إذا كان المنتج يلتزم بالمعيار الهندي المطلوب.
         </p>
   
         <h3 className="mt-[12px] md:mt-[20px] font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
           إصدار شهادة BIS
         </h3>
   
         <p className="mt-[12px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
           إذا نجح المنتج في الاختبار والتفتيش، يمنح BIS الهندي ترخيص BIS، مما يخول المصنع استخدام علامة معيار BIS على منتجاته. بينما تختلف عن علامة ISI المستخدمة على السلع الاستهلاكية، تؤكد هذه العلامة الامتثال الكامل تحت المخطط X.
         </p>
       </section>     

    )
}

const ArabicSchemeXPricing = () => {
    return (
        <section id="pricing" className="flex flex-col scroll-mt-20">
      {/* Validity */}
      <div className="flex w-full items-center gap-3">
        <span className="uppercase font-semibold font-geist text-[16px] md:text-[20px] text-gray-700">
          التسعير
        </span>
        <Separator className="w-[94.46px] h-[1.5px] bg-gray-700" />
      </div>

      {/* Title */}
      <h2 className="text-[28px] md:text-[40px] font-roboto font-bold text-[#131316] leading-none md:leading-[1.1] my-3 md:my-0">
        هيكل رسوم شهادة BIS المخطط X: تفصيل كامل للتكاليف
      </h2>

      <p className="mt-[12px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        يجب على المصنعين الذين يخططون للامتثال للائحة التقنية الشاملة فهم التكلفة الإجمالية لشهادة المخطط X. صادرة تحت الجدول الثاني، الفقرة 5 من لوائح BIS لتقييم المطابقة لعام 2018، حدد BIS الهندي بوضوح تكلفة شهادة BIS والخدمات ذات الصلة. سواء كنت تتقدم بطلب للحصول على ترخيص BIS أو شهادة مطابقة (CoC)، فإن معرفة الرسوم المعمول بها أمر بالغ الأهمية لوضع الميزانية والتخطيط التنظيمي.
      </p>

      <h3 className="mt-[12px] md:mt-[20px] font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        الرسوم الرئيسية لشهادة BIS تحت المخطط X
      </h3>

      <p className="mt-[12px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        فيما يلي نظرة عامة مبسطة على هيكل الرسوم الرسمي للحصول على شهادة BIS أو ترخيص BIS تحت المخطط X:
      </p>

      {/* table for fee structure  */}
      <div className="mt-[16px] md:mt-[24px]">
        <Table className="min-w-full divide-y divide-gray-200 shadow-sm rounded-lg">
          <TableHeader className="bg-[#F9F7F2]">
            <TableRow className="bg-[#1A8781]/10">
              <TableHead className="px-6 py-3 text-left text-xs md:text-base font-geist font-medium text-gray-700 uppercase tracking-wider rounded-tl-lg">
                نوع الرسوم
              </TableHead>
              <TableHead className="px-6 py-3 text-left text-xs md:text-base font-geist font-medium text-gray-700 uppercase tracking-wider">
                التكلفة (روبية هندية)
              </TableHead>
              <TableHead className="px-6 py-3 text-left text-xs md:text-base font-geist font-medium text-gray-700 uppercase tracking-wider rounded-tr-lg">
                الوصف
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="bg-white divide-y divide-gray-200">
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                رسوم الطلب - ترخيص BIS
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                ₹2,000
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                مستحقة عند التقدم بطلب للحصول على ترخيص BIS جديد
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                رسوم الطلب - شهادة مطابقة (CoC)
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                ₹2,000
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                مطبقة على شهادة مطابقة تحت المخطط X
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                رسوم الشهادة - ترخيص BIS
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                ₹25,000/سنوياً
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                رسوم سنوية للمحافظة على ترخيص BIS صالح
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                رسوم الشهادة - شهادة مطابقة
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                ₹10,000
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                رسوم ثابتة لإصدار شهادة مطابقة
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                رسوم مراجعة الملف التقني
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                ₹20,000 لكل ملف
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                رسوم مراجعة الملفات أو عند توسيع/تعديل نطاق المنتج
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                رسوم التفتيش (بما في ذلك المراقبة)
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                ₹20,000 لكل يوم عمل
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                تغطي زيارات المصنع للتقييم والمراقبة تحت المخطط X
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                رسوم شراء العينات
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                بناءً على التكاليف الفعلية
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                التكلفة المتكبدة عند شراء عينات المنتج
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                رسوم الاختبار
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                بناءً على التكاليف الفعلية
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                رسوم المختبر لاختبار المنتج تحت المعايير الهندية
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                ضمان مصرفي
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                10,000 دولار أمريكي
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                فقط للمتقدمين الأجانب.
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </section>
    )
}

const ArabicSchemeXRepresentative = () => {
    return (
        <section id="representative" className="flex flex-col scroll-mt-20">
        {/* Surveillance */}
        <div className="flex w-full items-center gap-3">
          <span className="uppercase font-semibold font-geist text-[16px] md:text-[20px] text-gray-700">
            الممثل
          </span>
          <Separator className="w-[94.46px] h-[1.5px] bg-gray-700" />
        </div>
  
        <h2 className="text-[28px] md:text-[40px] font-roboto font-bold text-[#131316] leading-none md:leading-[1.1] my-3 md:my-0">
          دور الممثل الهندي المعتمد (AIR) في شهادة BIS المخطط X
        </h2>
  
        <p className="mt-[12px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
          بالنسبة للمصنعين الأجانب الذين يسعون للحصول على شهادة BIS تحت المخطط X، يعد تعيين ممثل هندي معتمد (AIR) متطلباً إجبارياً حدده BIS الهندي. يعمل الممثل الهندي المعتمد كوسيط محلي مسؤول قانونياً بين المصنع الأجنبي ومكتب المعايير الهندي طوال عملية الشهادة.
        </p>
  
        <h3 className="mt-[12px] md:mt-[20px] font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
          المسؤوليات الرئيسية للممثل الهندي المعتمد:
        </h3>
  
        <h4 className="mt-[12px] md:mt-[20px] font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
          تسجيل BIS والتواصل
        </h4>
  
        <div className="flex flex-col md:flex-row gap-6 md:gap-10">
          <PointsListTwo
            points={[
              "الممثل الهندي المعتمد مسؤول عن بدء وإدارة عملية تسجيل BIS نيابة عن المصنع الأجنبي.",
              "جميع التواصل مع BIS الهندي، بما في ذلك الوثائق والتحديثات والتدقيقات تحت المخطط X، يتم تناوله من قبل الممثل الهندي المعتمد."
            ]}
          />
        </div>
  
        <h4 className="mt-[12px] md:mt-[20px] font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
          تقديم الوثائق
        </h4>
  
        <div className="flex flex-col md:flex-row gap-6 md:gap-10">
          <PointsListTwo
            points={[
              "يضمن الممثل الهندي المعتمد تقديم الملفات التقنية وتفاصيل المنتج وتقارير الامتثال والوثائق الداعمة الضرورية للحصول على شهادة BIS أو ترخيص BIS تحت اللائحة التقنية الشاملة في الوقت المناسب وبدقة."
            ]}
          />
        </div>
  
        <h4 className="mt-[12px] md:mt-[20px] font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
          تنسيق تفتيش المصنع
        </h4>
  
        <div className="flex flex-col md:flex-row gap-6 md:gap-10">
          <PointsListTwo
            points={[
              "أثناء تفتيش المصنع من قبل مسؤولي BIS الهندي، يلعب الممثل الهندي المعتمد دوراً تنسيقياً—جدولة الزيارات ومساعدة المدققين وضمان سلاسة العمليات أثناء التدقيق."
            ]}
          />
        </div>
  
        <h4 className="mt-[12px] md:mt-[20px] font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
          إدارة الرسوم والمساءلة القانونية
        </h4>
  
        <div className="flex flex-col md:flex-row gap-6 md:gap-10">
          <PointsListTwo
            points={[
              "الممثل الهندي المعتمد مخول لدفع رسوم شهادة وتفتيش BIS المعمول بها. كما أنه مسؤول قانونياً عن أي قضايا عدم امتثال تنشأ عن المنتجات المعتمدة في الهند."
            ]}
          />
        </div>
  
        <h4 className="mt-[12px] md:mt-[20px] font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
          الامتثال بعد الشهادة
        </h4>
  
        <div className="flex flex-col md:flex-row gap-6 md:gap-10">
          <PointsListTwo
            points={[
              "بمجرد منح ترخيص BIS أو شهادة BIS، يضمن الممثل الهندي المعتمد الامتثال المستمر مع المعايير الهندية ذات الصلة، بما في ذلك استخدام العلامات وتتبع المنتج. كما يتعامل مع طلبات التجديد وتوسيع النطاق."
            ]}
          />
        </div>
  
        <h3 className="mt-[12px] md:mt-[20px] font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
          لماذا الممثل الهندي المعتمد مهم للمخطط X
        </h3>
  
        <p className="mt-[12px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
          تحت المخطط X، لا يمكن للمصنعين الأجانب التعامل مباشرة مع BIS الهندي إلا إذا كان لديهم ممثل هندي معتمد مسجل. بدون ممثل هندي معتمد، لا يمكن الحصول على شهادة تحت اللائحة التقنية الشاملة. يسد الممثل الهندي المعتمد الفجوة التنظيمية، مما يضمن أن جميع المنتجات الأجنبية تلبي متطلبات السلامة والتقنية الصارمة في الهند.
        </p>
  
        <p className="mt-[12px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
          من المهم ملاحظة أنه على الرغم من أن علامة ISI لا تنطبق على منتجات المخطط X، يجب على الممثل الهندي المعتمد أن يضمن الاستخدام الصحيح لعلامة معيار BIS ذات الصلة بشهادات المخطط X.
        </p>
      </section>   
    )
}


const ArabicSchemeXBenefits = () => {
    return (
        <section id="benefits" className="flex flex-col scroll-mt-20">
        {/* Header */}
        <div className="flex w-full items-center gap-3">
          <span className="uppercase font-semibold font-geist text-[16px] md:text-[20px] text-gray-700">
            الفوائد
          </span>
          <Separator className="w-[94.46px] h-[1.5px] bg-gray-700" />
        </div>
  
        <h2 className="text-[28px] md:text-[40px] font-roboto font-bold text-[#131316] leading-none md:leading-[1.1] my-3 md:my-0">
          فوائد شهادة BIS المخطط X للمصنعين الأجانب
        </h2>
  
        <p className="mt-[12px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
          تقدم شهادة BIS تحت المخطط X مزايا متعددة للمصنعين الأجانب الذين يسعون للوصول إلى السوق الهندي بالآلات والمعدات الكهربائية. هذه الفوائد مختلفة عن شهادات علامة ISI التقليدية وهي مصممة خصيصاً للمنتجات الصناعية والتقنية المشمولة تحت اللائحة التقنية الشاملة.
        </p>
  
        {/* Manufacturing Benefits */}
        <h3 className="text-[20px] md:text-[24px] font-roboto font-bold text-[#131316] leading-none md:leading-[1.1] mt-6 mb-3">
          فوائد الوصول إلى السوق والتصنيع
        </h3>
  
        <p className="mt-[12px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
          يحصل المصنعون المعتمدون تحت المخطط X على وصول قانوني شرعي إلى السوق الهندي الواسع. يمكن استيراد وبيع وتوزيع المنتجات ذات شهادة BIS في الهند دون قضايا امتثال. وجود علامة معيار BIS يساعد أيضاً في تمييز المنتجات في سوق تنافسي، مما يغرس ثقة أكبر بين المستهلكين والشركات.
        </p>
  
        {/* Quality Benefits */}
        <h3 className="text-[20px] md:text-[24px] font-roboto font-bold text-[#131316] leading-none md:leading-[1.1] mt-6 mb-3">
          ضمان الجودة والعلامة التجارية
        </h3>
  
        <p className="mt-[12px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
          الشهادة تحت المخطط X تؤكد الامتثال لمعايير السلامة والأداء عالية المستوى. هذا يساعد المصنعين على إظهار جودة وموثوقية المنتج، مما يبني ثقة وولاء العملاء في السوق الهندي. المنتجات المعتمدة غالباً ما تعتبر استثمارات أكثر أماناً وموثوقية من قبل العملاء الصناعيين.
        </p>
  
        {/* Competitive Benefits */}
        <h3 className="text-[20px] md:text-[24px] font-roboto font-bold text-[#131316] leading-none md:leading-[1.1] mt-6 mb-3">
          المزايا التنافسية
        </h3>
  
        <p className="mt-[12px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
          المنتجات ذات شهادة المخطط X لها مزايا على المنافسين غير المعتمدين. هذا يفتح فرصاً للمشاركة في المناقصات الحكومية ومشاريع البنية التحتية الكبيرة واتفاقيات المشتريات الشركات التي تتطلب منتجات معتمدة.
        </p>
  
        {/* Compliance Benefits */}
        <h3 className="text-[20px] md:text-[24px] font-roboto font-bold text-[#131316] leading-none md:leading-[1.1] mt-6 mb-3">
          الامتثال وتقليل المخاطر
        </h3>
  
        <p className="mt-[12px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
          الحصول على شهادة تحت المخطط X يقلل بشكل كبير من المخاطر التنظيمية والقضايا القانونية. يمكن للمصنعين العمل بثقة مع العلم أن منتجاتهم تلبي المعايير المحددة من قبل مكتب المعايير الهندي. هذا يمنع التعليق أو المصادرة أو الغرامات لعدم الامتثال.
        </p>
  
        {/* Sustainability Benefits */}
        <h3 className="text-[20px] md:text-[24px] font-roboto font-bold text-[#131316] leading-none md:leading-[1.1] mt-6 mb-3">
          النمو المستدام والتوسع
        </h3>
  
        <p className="mt-[12px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
          المصنعون المعتمدون تحت المخطط X يستفيدون من وجود منتجات متوافقة مع رؤية الهند "صنع في الهند". هذا يخلق أساساً للتوسع والنمو المستدام في السوق الهندي، أحد أسرع الاقتصادات نمواً في العالم.
        </p>
      </section>   
    )
}

const  ArabicSchemeXConclusion = () => {
    return (
        <section id="conclusion" className="flex flex-col scroll-mt-20">
        {/* Surveillance */}
        <div className="flex w-full items-center gap-3">
          <span className="uppercase font-semibold font-geist text-[16px] md:text-[20px] text-gray-700">
            الخاتمة
          </span>
          <Separator className="w-[94.46px] h-[1.5px] bg-gray-700" />
        </div>
  
        <h2 className="text-[28px] md:text-[40px] font-roboto font-bold text-[#131316] leading-none md:leading-[1.1] my-3 md:my-0">
          تعزيز الامتثال من خلال شهادة المخطط X
        </h2>
  
        <p className="mt-[12px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
          في الختام، يقف المخطط X كجزء حيوي من الإطار التنظيمي في الهند، مما يضمن أن الآلات والمعدات الكهربائية تلبي معايير عالية المستوى للسلامة والجودة والمعايير التقنية. تحت توجيه مكتب المعايير الهندي BIS، يجلب نظام الشهادات هذا - الذي تم تقديمه من خلال اللائحة التقنية الشاملة - الهند في مواءمة مع الممارسات العالمية للمطابقة.
        </p>
  
        {/* Exemptions Section */}
        <h3 className="text-[20px] md:text-[24px] font-roboto font-bold text-[#131316] leading-none md:leading-[1.1] mt-6 mb-3">
          الاستثناءات تحت المخطط X لشهادة BIS
        </h3>
  
        <p className="mt-[12px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
          فئات معينة من الآلات والمعدات الكهربائية قد تكون معفاة من شهادة المخطط X الإجبارية تحت ظروف محددة. هذه الاستثناءات محددة بوضوح في اللائحة التقنية الشاملة وتشمل عادة المنتجات المخصصة حصرياً للتصدير، بالإضافة إلى بعض المعدات الصناعية ذات التطبيقات المتخصصة. من الضروري للمصنعين التحقق من هذه الاستثناءات مع خبراء BIS لتجنب قضايا الامتثال.
        </p>
  
        {/* Regulation Section */}
        <h3 className="text-[20px] md:text-[24px] font-roboto font-bold text-[#131316] leading-none md:leading-[1.1] mt-6 mb-3">
          فهم اللائحة التقنية الشاملة أو شهادة المخطط X تحت BIS الهندي
        </h3>
  
        <p className="mt-[12px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
          تمثل اللائحة التقنية الشاملة تحولاً مهماً في نهج الهند تجاه مطابقة المنتجات، مما يجعل البلاد في مواءمة مع أفضل الممارسات الدولية. هذه اللائحة الشاملة تغطي مجموعة واسعة من الآلات والمعدات الكهربائية، مما يضمن أن المنتجات التي تلبي معايير صارمة للسلامة والجودة فقط يُسمح بها في السوق الهندي.
        </p>
  
        <p className="mt-[12px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
          بالحصول على شهادة BIS تحت المخطط X، يظهر المصنعون التزامهم بسلامة وامتثال وأداء المنتج. سواء كنت منتجاً محلياً أو مورداً دولياً، فإن امتلاك رخصة BIS صالحة ليس مجرد ضرورة تنظيمية - بل هو ممكن للسوق. استخدام علامة معيار BIS، المختلفة عن علامة ISI، يسمح لك بالتحقق من منتجاتك مقابل المعايير الهندية المعمول بها وتعزيز ثقة المستهلك.
        </p>
  
        <p className="mt-[12px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
          بينما قد تبدو تكلفة شهادة BIS وعملية الشهادة تحت المخطط X مفصلة، فإن الفوائد طويلة المدى - الامتثال القانوني، وتعزيز المصداقية، وتحسين قابلية تتبع المنتج، والميزة التنافسية - تفوق بكثير الجهود الأولية. مع الخطوات المنظمة التي تشمل تسجيل BIS، وتقديم الملف التقني، وتفتيش المصنع، واختبار المنتج، فإن العملية مصممة لتكون صارمة ولكن شفافة.
        </p>
  
        <p className="mt-[12px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
          قام مكتب المعايير الهندي BIS بجهود كبيرة لضمان أن عملية شهادة المخطط X شاملة وفعالة. إدراج التكنولوجيا وتبسيط الإجراءات قلل من الأطر الزمنية للشهادة مع الحفاظ على جودة التقييمات.
        </p>
  
        <p className="mt-[12px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
          بالنسبة للمصنعين الأجانب، يقدم المخطط X مساراً واضحاً إلى السوق الهندي دون تعقيدات حواجز التجارة التقليدية. دور الممثل الهندي المعتمد (AIR) يبسط العملية أكثر، مقدماً الخبرة المحلية والدعم طوال رحلة الشهادة.
        </p>
  
        <p className="mt-[12px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
          في النهاية، شهادة BIS تحت المخطط X هي أكثر من مجرد ختم موافقة - فهي بوابة لضمان الجودة، والاستعداد للتجارة العالمية، والتميز الصناعي تحت القيادة المتطورة لمكتب المعايير الهندي BIS. مع استمرار توسع وتحديث اقتصاد الهند، سيلعب المخطط X دوراً حاسماً في ضمان أن جميع المنتجات الداخلة إلى السوق تلبي أعلى معايير السلامة والجودة والأداء.
        </p>
      </section>
    )
}
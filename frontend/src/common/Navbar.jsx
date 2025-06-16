import Logo from "../assets/images/Logo.png";
import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  BookText,
  CheckCircle,
  Radiation,
  Battery,
  Recycle,
  Scale,
  Award,
  FileWarning,
  Flame,
  Radio,
  Wifi,
  Zap,
  ShieldCheck,
  Cpu,
  Presentation,
  Menu,
  X,
  FileCheck,
  GalleryHorizontal,
  Laptop,
  MessageSquare,
  MessageCircle,
} from "lucide-react";
import { useRef, useState, useEffect } from "react";

export const categories = [
  {
    name: "BIS Mark (Foreign)",
    link: "/a-guide-to-bis-certification-for-foreign-manufacturers-indian-bis",
    icon: <CheckCircle className="w-4 h-4 mr-2" />,
  },

  {
    name: "CRS Registration",
    link: "/what-is-crs-bis-or-crs-registration",
    icon: <ShieldCheck className="w-4 h-4 mr-2" />,
  },
  {
    name: "CE Certification",
    link: "/ce-certification",
    icon: <ShieldCheck className="w-4 h-4 mr-2" />,
  },

  {
    name: "ISI Mark (Indian)",
    link: "/a-guide-to-bis-certification-indian-bis",
    icon: <Award className="w-4 h-4 mr-2" />,
  },

  {
    name: "EPR Registration",
    link: "/a-guide-on-how-to-obtain-epr-certificate",
    icon: <Recycle className="w-4 h-4 mr-2" />,
  },

  {
    name: "ROHS",
    link: "/restriction-of-hazardous-substance-rohs-certificate",
    icon: <Radiation className="w-4 h-4 mr-2" />,
  },

  {
    name: "BIS Certification",
    link: "/what-is-bis-certificate-indian-bis",
    icon: <CheckCircle className="w-4 h-4 mr-2" />,
  },

  {
    name: "Plastic Waste",
    link: "/epr-certificate-for-plastic-waste-management-pwm",
    icon: <Recycle className="w-4 h-4 mr-2" />,
  },

  {
    name: "EMI/EMC",
    link: "/emi-emc-certification",
    icon: <Cpu className="w-4 h-4 mr-2" />,
  },

  {
    name: "CDSCO Registration",
    link: "/cdsco-registration-certification",
    icon: <FileWarning className="w-4 h-4 mr-2" />,
  },

  {
    name: "Battery Waste",
    link: "/epr-certificate-for-battery-waste-management-bwm",
    icon: <Battery className="w-4 h-4 mr-2" />,
  },

  {
    name: "TEC",
    link: "/information-about-tec-certificate-mtcte",
    icon: <Radio className="w-4 h-4 mr-2" />,
  },

  {
    name: "LMPC Registration",
    link: "/a-guide-on-how-to-obtain-lmpc-certificate",
    icon: <BookText className="w-4 h-4 mr-2" />,
  },

  {
    name: "PESO",
    link: "/information-about-peso-certification-peso-license-india",
    icon: <Flame className="w-4 h-4 mr-2" />,
  },

  {
    name: "BEE",
    link: "/bee-certification",
    icon: <Zap className="w-4 h-4 mr-2" />,
  },

  {
    name: "Legal Metrology",
    link: "/what-is-legal-metrology-or-lmpc-certificate",
    icon: <Scale className="w-4 h-4 mr-2" />,
  },

  {
    name: "WPC",
    link: "/information-about-wpc-certificate-eta-approval",
    icon: <Wifi className="w-4 h-4 mr-2" />,
  },

  {
    name: "CB Certification",
    link: "/cb-certification",
    icon: <Award className="w-4 h-4 mr-2" />,
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    // <div className="z-[50] sticky top-0 w-full bg-white/70 backdrop-blur-lg border-b border-neutral-200 ">
    <div className="z-[50] sticky top-0 md:top-[44px] w-full bg-white/70 backdrop-blur-lg border-b border-neutral-200 ">
      <div className="flex items-center justify-between px-4 md:px-8 h-20 max-w-[88rem] mx-auto">
        <div
          className=" selection:bg-emerald-600 flex items-center justify-center space-x-2.5 
        text-2xl font-bold py-6 text-center text-neutral-600 md:mr-10"
        >
          <img src={Logo} alt="logo" className="w-10 h-10 md:w-12 md:h-12" />
          <Link to="/" className="py-2 text-center">
            <h1 className="font-roboto text-black uppercase tracking-wide leading-normal text-[14px] md:text-xl font-bold">
              Sun Certifications India
            </h1>
            <p className="text-foreground/90 text-[10px] md:text-[13px] leading-none uppercase font-normal">
              Simplifying Certifications
            </p>
          </Link>
        </div>

        <div className="hidden  md:flex items-center justify-end">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link to="/">
                  <Button
                    variant="link"
                    className="text-base text-foreground/60 font-roboto uppercase tracking-wide hover:text-foreground/80 transition-colors"
                  >
                    Home
                  </Button>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <a href="/about">
                  <Button
                    variant="link"
                    className="text-base uppercase text-foreground/60 font-roboto tracking-wide hover:text-foreground/80 transition-colors"
                  >
                    About
                  </Button>
                </a>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-base uppercase text-foreground/60 font-roboto tracking-wide hover:text-foreground/80 transition-colors">
                  Services
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid grid-cols-3 gap-2 w-[700px] p-6">
                    {categories.map((category, index) => (
                      <a key={index} href={category.link} className="block">
                        <div className="text-base text-foreground/60 font-roboto tracking-wide hover:text-foreground/80 transition-colors  block hover:bg-black/10 hover:rounded-md w-full p-2 text-left flex items-center">
                          {category.icon}
                          {category.name}
                        </div>
                      </a>
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-base uppercase text-foreground/60 font-roboto tracking-wide hover:text-foreground/80 transition-colors">
                  Updates
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="p-4 w-60">
                    <a href="/latest-notifications" className="block">
                      <div className="text-base text-foreground/60 font-roboto tracking-wide hover:text-foreground/80 transition-colors block hover:bg-black/10 hover:rounded-md w-full p-2 text-left flex items-center">
                        <BookText className="w-4 h-4 mr-2" />
                        Latest Notifications
                      </div>
                    </a>
                    <a href="/ministry-updates" className="block">
                      <div className="text-base text-foreground/60 font-roboto tracking-wide hover:text-foreground/80 transition-colors block hover:bg-black/10 hover:rounded-md w-full p-2 text-left flex items-center">
                        <FileWarning className="w-4 h-4 mr-2" />
                        Ministry Updates
                      </div>
                    </a>

                    <a href="/webinar" className="block">
                      <div className="text-base text-foreground/60 font-roboto tracking-wide hover:text-foreground/80 transition-colors block hover:bg-black/10 hover:rounded-md w-full p-2 text-left flex items-center">
                        <Presentation className="w-4 h-4 mr-2" />
                        Upcoming Webinars
                      </div>
                    </a>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-base  uppercase text-foreground/60 font-roboto tracking-wide hover:text-foreground/80 transition-colors">
                  Gallery
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="p-4 w-60">
                    <a href="/international-audits" className="block">
                      <div className="text-base text-foreground/60 font-roboto tracking-wide hover:text-foreground/80 transition-colors block hover:bg-black/10 hover:rounded-md w-full p-2 text-left flex items-center">
                        <FileCheck className="w-4 h-4 mr-2" />
                        International Audits
                      </div>
                    </a>
                    <a href="/seminars-and-exhibitions" className="block">
                      <div className="text-base text-foreground/60 font-roboto tracking-wide hover:text-foreground/80 transition-colors block hover:bg-black/10 hover:rounded-md w-full p-2 text-left flex items-center">
                        <GalleryHorizontal className="w-4 h-4 mr-2" />
                        Seminars/Exhibitions
                      </div>
                    </a>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link to="/contact">
                  <Button
                    variant="link"
                    className="text-base uppercase text-foreground/60 font-roboto tracking-wide hover:text-foreground/80 transition-colors"
                  >
                    Contact Us
                  </Button>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link to="/">
                  <Button
                    variant="link"
                    className="text-base uppercase text-foreground/60 font-roboto tracking-wide hover:text-foreground/80 transition-colors"
                  >
                    FAQs
                  </Button>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

      


        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            ref={buttonRef}
            onClick={toggleMenu}
            className="text-black focus:outline-none"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <MobileNavbarMenu closeMenu={toggleMenu} buttonRef={buttonRef} />
      )}
    </div>
  );
};

export default Navbar;

const MobileNavbarMenu = ({ closeMenu, buttonRef }) => {
  const menuRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        buttonRef &&
        buttonRef.current &&
        buttonRef.current.contains(event.target)
      ) {
        return;
      }
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        closeMenu();
      }
    };

    const handleScroll = () => {
      closeMenu();
    };

    // Add event listeners
    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("touchstart", handleOutsideClick);
    window.addEventListener("scroll", handleScroll);

    // Cleanup
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("touchstart", handleOutsideClick);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [closeMenu, buttonRef]);

  const handleLinkClick = () => {
    if (closeMenu) {
      closeMenu();
    }
  };

  return (
    <div
      ref={menuRef}
      className="md:hidden absolute top-full left-0 w-full bg-white border-t border-b border-neutral-200 shadow-md z-40 max-h-[80vh] overflow-y-auto scrollbar-hide"
    >
      <div className="px-4 py-4 space-y-1">
        <Link to="/" className="block w-full" onClick={handleLinkClick}>
          <Button
            variant="ghost"
            className="text-base text-foreground/80 font-roboto tracking-wide hover:text-foreground hover:bg-neutral-100 transition-colors w-full justify-start py-3"
          >
            Home
          </Button>
        </Link>

        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1" className="border-b-0">
            <AccordionTrigger className="text-base text-foreground/80 font-roboto tracking-wide hover:text-foreground hover:no-underline transition-colors w-full justify-between py-3 px-4 hover:bg-neutral-100 rounded-md">
              Services
            </AccordionTrigger>
            <AccordionContent className="pt-1 pb-0 pl-4 pr-0">
              <ul className="flex flex-col space-y-1 py-1 max-h-[60vh] overflow-y-auto scrollbar-hide">
                {categories.map((category, index) => (
                  <li key={index} className="w-full">
                    <Link
                      to={category.link}
                      className="block w-full"
                      onClick={handleLinkClick}
                    >
                      <Button
                        variant="ghost"
                        className="text-sm text-foreground/70 font-roboto tracking-wide hover:text-foreground hover:bg-neutral-100 transition-colors w-full justify-start py-2 pl-4"
                      >
                        {category.icon}
                        {category.name}
                      </Button>
                    </Link>
                  </li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2" className="border-b-0">
            <AccordionTrigger className="text-base text-foreground/80 font-roboto tracking-wide hover:text-foreground hover:no-underline transition-colors w-full justify-between py-3 px-4 hover:bg-neutral-100 rounded-md">
              Latest Updates
            </AccordionTrigger>
            <AccordionContent className="pt-1 pb-0 pl-4 pr-0">
              <ul className="flex flex-col space-y-1 py-1 max-h-[60vh] overflow-y-auto">
                <li className="w-full">
                  <Link
                    to="/latest-notifications"
                    className="block w-full"
                    onClick={handleLinkClick}
                  >
                    <Button
                      variant="ghost"
                      className="text-sm text-foreground/70 font-roboto tracking-wide hover:text-foreground hover:bg-neutral-100 transition-colors w-full justify-start py-2 pl-4"
                    >
                      <BookText className="w-4 h-4 mr-2" />
                      Latest Notification
                    </Button>
                  </Link>
                </li>
                <li className="w-full">
                  <Link
                    to="/ministry-updates"
                    className="block w-full"
                    onClick={handleLinkClick}
                  >
                    <Button
                      variant="ghost"
                      className="text-sm text-foreground/70 font-roboto tracking-wide hover:text-foreground hover:bg-neutral-100 transition-colors w-full justify-start py-2 pl-4"
                    >
                      <FileWarning className="w-4 h-4 mr-2" />
                      Ministry Updates
                    </Button>
                  </Link>
                </li>
                <li className="w-full">
                  <Link
                    to="/webinar"
                    className="block w-full"
                    onClick={handleLinkClick}
                  >
                    <Button
                      variant="ghost"
                      className="text-sm text-foreground/70 font-roboto tracking-wide hover:text-foreground hover:bg-neutral-100 transition-colors w-full justify-start py-2 pl-4"
                    >
                      <Presentation className="w-4 h-4 mr-2" />
                      Webinar Updates
                    </Button>
                  </Link>
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3" className="border-b-0">
            <AccordionTrigger className="text-base text-foreground/80 font-roboto tracking-wide hover:text-foreground hover:no-underline transition-colors w-full justify-between py-3 px-4 hover:bg-neutral-100 rounded-md">
              Gallery
            </AccordionTrigger>
            <AccordionContent className="pt-1 pb-0 pl-4 pr-0">
              <ul className="flex flex-col space-y-1 py-1 max-h-[60vh] overflow-y-auto">
                <li className="w-full">
                  <Link
                    to="/international-audits"
                    className="block w-full"
                    onClick={handleLinkClick}
                  >
                    <Button
                      variant="ghost"
                      className="text-sm text-foreground/70 font-roboto tracking-wide hover:text-foreground hover:bg-neutral-100 transition-colors w-full justify-start py-2 pl-4"
                    >
                      <FileCheck className="w-4 h-4 mr-2" />
                      International Audits
                    </Button>
                  </Link>
                </li>
                <li className="w-full">
                  <Link
                    to="/exhibition"
                    className="block w-full"
                    onClick={handleLinkClick}
                  >
                    <Button
                      variant="ghost"
                      className="text-sm text-foreground/70 font-roboto tracking-wide hover:text-foreground hover:bg-neutral-100 transition-colors w-full justify-start py-2 pl-4"
                    >
                      <GalleryHorizontal className="w-4 h-4 mr-2" />
                      Exhibition
                    </Button>
                  </Link>
                </li>
                <li className="w-full">
                  <Link
                    to="/seminar"
                    className="block w-full"
                    onClick={handleLinkClick}
                  >
                    <Button
                      variant="ghost"
                      className="text-sm text-foreground/70 font-roboto tracking-wide hover:text-foreground hover:bg-neutral-100 transition-colors w-full justify-start py-2 pl-4"
                    >
                      <Laptop className="w-4 h-4 mr-2" />
                      Webinar/Seminar
                    </Button>
                  </Link>
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <Link to="/about" className="block w-full" onClick={handleLinkClick}>
          <Button
            variant="ghost"
            className="text-base text-foreground/80 font-roboto tracking-wide hover:text-foreground hover:bg-neutral-100 transition-colors w-full justify-start py-3"
          >
            About
          </Button>
        </Link>

        <Link to="/contact" className="block w-full" onClick={handleLinkClick}>
          <Button
            variant="ghost"
            className="text-base text-foreground/80 font-roboto tracking-wide hover:text-foreground hover:bg-neutral-100 transition-colors w-full justify-start py-3"
          >
            Contact
          </Button>
        </Link>

        <Link to="/" className="block w-full" onClick={handleLinkClick}>
          <Button
            variant="ghost"
            className="text-base text-foreground/80 font-roboto tracking-wide hover:text-foreground hover:bg-neutral-100 transition-colors w-full justify-start py-3"
          >
            FAQs
          </Button>
        </Link>
      </div>
    </div>
  );
};
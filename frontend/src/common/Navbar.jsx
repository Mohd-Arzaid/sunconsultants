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
} from "lucide-react";

export const categories = [
  {
    name: "CDSCO Registration",
    link: "/services/cdsco-registration-certification",
    icon: <FileWarning className="w-4 h-4 mr-2" />,
  },
  {
    name: "BIS Mark (Foreign)",
    link: "/services/bis-mark-foreign",
    icon: <CheckCircle className="w-4 h-4 mr-2" />,
  },
  {
    name: "ISI Mark (Indian)",
    link: "/services/isi-mark-indian",
    icon: <Award className="w-4 h-4 mr-2" />,
  },
  {
    name: "EPR Registration",
    link: "/services/epr-registration",
    icon: <Recycle className="w-4 h-4 mr-2" />,
  },
  {
    name: "Battery Waste",
    link: "/services/battery-waste",
    icon: <Battery className="w-4 h-4 mr-2" />,
  },
  {
    name: "LMPC Registration",
    link: "/services/lmpc-registration",
    icon: <BookText className="w-4 h-4 mr-2" />,
  },
  {
    name: "Plastic Waste",
    link: "/services/plastic-waste",
    icon: <Recycle className="w-4 h-4 mr-2" />,
  },
  {
    name: "Legal Metrology",
    link: "/services/legal-metrology",
    icon: <Scale className="w-4 h-4 mr-2" />,
  },
  {
    name: "BIS Certification",
    link: "/services/bis-certification",
    icon: <CheckCircle className="w-4 h-4 mr-2" />,
  },
  {
    name: "CRS Registration",
    link: "/services/crs-registration",
    icon: <ShieldCheck className="w-4 h-4 mr-2" />,
  },
  {
    name: "PESO",
    link: "/services/peso",
    icon: <Flame className="w-4 h-4 mr-2" />,
  },
  {
    name: "TEC",
    link: "/services/tec",
    icon: <Radio className="w-4 h-4 mr-2" />,
  },
  {
    name: "WPC",
    link: "/services/wpc",
    icon: <Wifi className="w-4 h-4 mr-2" />,
  },
  {
    name: "ROHS",
    link: "/services/rohs",
    icon: <Radiation className="w-4 h-4 mr-2" />,
  },
  {
    name: "BEE",
    link: "/services/bee",
    icon: <Zap className="w-4 h-4 mr-2" />,
  },
  {
    name: "CE Certification",
    link: "/services/ce-certification",
    icon: <ShieldCheck className="w-4 h-4 mr-2" />,
  },
  {
    name: "EMI/EMC",
    link: "/services/emi-emc",
    icon: <Cpu className="w-4 h-4 mr-2" />,
  },
  {
    name: "CB Certification",
    link: "/services/cb-certification",
    icon: <Award className="w-4 h-4 mr-2" />,
  },
];

const Navbar = () => {
  return (
    <div className="z-[50] sticky top-0 w-full border-b bg-white/70 backdrop-blur-lg border-b border-neutral-200 ">
      <div className="flex items-center justify-between px-4 md:px-8 h-20 max-w-[88rem] mx-auto">
        <div
          className=" selection:bg-emerald-600 flex items-center justify-center space-x-2.5 
        text-2xl font-bold py-6 text-center text-neutral-600 md:mr-10"
        >
          <img src={Logo} alt="logo" className="w-10 h-10 md:w-12 md:h-12" />
          <Link to="/" className="py-2 text-center">
            <h1 className="font-roboto text-black uppercase tracking-wider text-[14px] md:text-xl font-bold">
              Sun Consultants & Engineers
            </h1>
            <p className="text-foreground/80 text-xs uppercase font-normal hidden md:block ">
              Your Complete Certification Partner
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
                    className="text-base text-foreground/60 font-roboto tracking-wide hover:text-foreground/80 transition-colors"
                  >
                    Home
                  </Button>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-base text-foreground/60 font-roboto tracking-wide hover:text-foreground/80 transition-colors">
                  Services
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid grid-cols-3 gap-2 w-[700px] p-6">
                    {categories.map((category, index) => (
                      <Link key={index} to={category.link} className="block">
                        <div className="text-base text-foreground/60 font-roboto tracking-wide hover:text-foreground/80 transition-colors  block hover:bg-black/10 hover:rounded-md w-full p-2 text-left flex items-center">
                          {category.icon}
                          {category.name}
                        </div>
                      </Link>
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-base text-foreground/60 font-roboto tracking-wide hover:text-foreground/80 transition-colors">
                  Latest Updates
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="p-4 w-60">
                    <Link to="/latest-notifications" className="block">
                      <div className="text-base text-foreground/60 font-roboto tracking-wide hover:text-foreground/80 transition-colors block hover:bg-black/10 hover:rounded-md w-full p-2 text-left flex items-center">
                        <BookText className="w-4 h-4 mr-2" />
                        Latest Notification
                      </div>
                    </Link>
                    <Link to="/ministry-updates" className="block">
                      <div className="text-base text-foreground/60 font-roboto tracking-wide hover:text-foreground/80 transition-colors block hover:bg-black/10 hover:rounded-md w-full p-2 text-left flex items-center">
                        <FileWarning className="w-4 h-4 mr-2" />
                        Ministry Updates
                      </div>
                    </Link>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-base text-foreground/60 font-roboto tracking-wide hover:text-foreground/80 transition-colors">
                  Gallery
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="p-4 w-60">
                    <Link to="/webinar" className="block">
                      <div className="text-base text-foreground/60 font-roboto tracking-wide hover:text-foreground/80 transition-colors block hover:bg-black/10 hover:rounded-md w-full p-2 text-left flex items-center">
                        <Presentation className="w-4 h-4 mr-2" />
                        Webinar
                      </div>
                    </Link>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link to="/about">
                  <Button
                    variant="link"
                    className="text-base text-foreground/60 font-roboto tracking-wide hover:text-foreground/80 transition-colors"
                  >
                    About
                  </Button>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link to="/contact">
                  <Button
                    variant="link"
                    className="text-base text-foreground/60 font-roboto tracking-wide hover:text-foreground/80 transition-colors"
                  >
                    Contact
                  </Button>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link to="/">
                  <Button
                    variant="link"
                    className="text-base text-foreground/60 font-roboto tracking-wide hover:text-foreground/80 transition-colors"
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
          
           className="text-black focus:outline-none"
          >
 <Menu className="w-6 h-6" />
          </button>
        </div>

      </div>
    </div>
  );
};

export default Navbar;

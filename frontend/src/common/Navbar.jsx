import React from "react";
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

export const categories = [
  { name: "CDSCO Registration", link: "/cdsco-registration-certification" },
  { name: "BIS Mark (Foreign)", link: "/services/bis-mark-foreign" },
  { name: "ISI Mark (Indian)", link: "/services/isi-mark-indian" },
  { name: "EPR Registration", link: "/services/epr-registration" },
  { name: "Battery Waste", link: "/services/battery-waste" },
  { name: "LMPC Registration", link: "/services/lmpc-registration" },
  { name: "Plastic Waste", link: "/services/plastic-waste" },
  { name: "LEGAL METROLOGY", link: "/services/legal-metrology" },
  { name: "BIS Certification", link: "/services/bis-certification" },
  { name: "CRS Registration", link: "/services/crs-registration" },
  { name: "PESO", link: "/services/peso" },
  { name: "TEC", link: "/services/tec" },
  { name: "WPC", link: "/services/wpc" },
  { name: "ROHS", link: "/services/rohs" },
  { name: "BEE", link: "/services/bee" },
  { name: "CE CERTIFICATION", link: "/services/ce-certification" },
  { name: "EMI/EMC", link: "/services/emi-emc" },
  { name: "CB CERTIFICATION", link: "/services/cb-certification" },
];

const Navbar = () => {
  return (
    <div className="z-[50] sticky top-0 w-full border-b bg-white/70 backdrop-blur-lg border-b border-neutral-200 ">
      <div className="flex items-center justify-between px-8 h-20 max-w-[88rem] mx-auto">
        <div
          className=" selection:bg-emerald-600 flex items-center justify-center space-x-2.5 
        text-2xl font-bold py-6 text-center text-neutral-600 mr-10"
        >
          <img src={Logo} alt="logo" className="w-12 h-12" />
          <Link to="/" className="py-2 text-center">
            <h1 className="font-roboto text-black uppercase tracking-wider text-xl font-bold">
              Sun Consultants & Engineers
            </h1>
            <p className="text-foreground/80 text-xs uppercase font-normal">
              Your Complete Certification Partner
            </p>
          </Link>
        </div>

        <div className="flex items-center justify-end">
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
                  <div className="grid grid-cols-3 gap-2 w-[680px] p-6">
                    {categories.map((category, index) => (
                      <Link
                        key={index}
                        to={category.link}
                        className="block"
                      >
                        <div className="text-base text-foreground/60 font-roboto tracking-wide hover:text-foreground/80 transition-colors uppercase block hover:bg-black/10 hover:rounded-md w-full p-2 text-left ">
                          {category.name}
                        </div>
                      </Link>
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-base text-foreground/60 font-roboto tracking-wide hover:text-foreground/80 transition-colors">
                  Latest Updates
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  {/* Add dropdown content here */}
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-base text-foreground/60 font-roboto tracking-wide hover:text-foreground/80 transition-colors">
                  Gallery
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  {/* Add dropdown content here */}
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
      </div>
    </div>
  );
};

export default Navbar;

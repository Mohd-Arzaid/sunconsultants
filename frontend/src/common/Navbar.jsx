import { Button } from "@/components/ui/button";
import { Scissors } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const Navbar = () => {
  return (
    <div className="sticky z-50 top-0 bg-white/10 backdrop-blur-lg border-b-2 border-white/10 shadow-sm">
      <nav className=" max-w-[90%] mx-auto px-8 flex h-20 items-center justify-between">
        <div className="flex items-center gap-2 ">
          <Scissors size={35} className=" opacity-60" />

          <Link to="/" className="p-2 text-center">
            <h1 className="font-sans uppercase tracking-wider text-xl font-bold">
              Sun Consultants & Engineers
            </h1>
            <p className="opacity-90 text-xs uppercase font-normal">
              Your Complete Certification Partner
            </p>
          </Link>
        </div>

        <div className="flex items-center justify-center">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link to="/">
                  <Button
                    variant="link"
                    className="text-base text-black duration-150"
                  >
                    Services
                  </Button>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-md">
                  Latest Updates
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  {/* Add dropdown content here */}
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-md">
                  FAQs
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  {/* Add dropdown content here */}
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-md">
                  About
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  {/* Add dropdown content here */}
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

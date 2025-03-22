import {
  GitHubLogoIcon,
  InstagramLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";
import { MailPlus, MapPin } from "lucide-react";
import Logo from "../assets/images/Logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#b9deeb] pt-16 pb-6">
      <div className="max-w-[88rem] mx-auto px-12">
        {/* Main Footer Content */}
        <div className="flex  justify-between h-[360px] ">
          {/* Company Logo */}
          <div className="flex flex-col gap-[25px]">
            <div
              className=" selection:bg-emerald-600 flex  space-x-2.5 
        text-2xl font-bold text-center text-neutral-600"
            >
              <img src={Logo} alt="logo" className="w-12 h-12" />
              <Link to="/" className="text-center">
                <h1 className="font-roboto text-black uppercase tracking-wider text-xl font-bold">
                  Sun Consultants & Engineers
                </h1>
                <p className="text-foreground/80 text-xs uppercase font-normal">
                  Your Complete Certification Partner
                </p>
              </Link>
            </div>

            <div className="flex flex-col gap-[15px]">
              <div className="text-neutral-900 text-lg font-geist font-medium">
                Subscribe to our newsletter
              </div>

              <div className="relative">
                <input
                  className="w-full bg-[white] disabled:cursor-not-allowed rounded focus:outline-none focus:outline-transparent ring-1 ring-inset focus:ring-2 focus:ring-inset 
                  text-base py-2 px-3 h-9 text-neutral-700
                  ring-neutral-300
                  placeholder:text-neutral-400
                  focus:ring-neutral-700
                  pr-24 
                  border border-[#7eafd9]
                  "
                  placeholder="enter your email"
                />
                <button className="flex items-center justify-center h-7 px-2 py-1.5 gap-x-1 text-[15px] whitespace-nowrap font-medium font-geist border rounded-full transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 absolute right-1 top-1 border-none bg-white">
                  <div className="text-[#2a5075]">Notify me</div>
                </button>
              </div>
            </div>
          </div>

          <div className="flex gap-[50px]">
          <div className="flex w-[240px] flex-col gap-[15px]">
              <span className="text-neutral-900 text-[18px] font-geist font-medium">
                Address
              </span>

              <div className="flex flex-col transition-colors gap-[10px]">
                <span className="text-foreground/60 hover:text-foreground/80 transition-colors underline-offset-[3.5px] break-words  hover:underline font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground-800 font-geist">
                  Delhi M-15, Phase-1, Badli Industrial Estate, Delhi-110042
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-[15px]">
              <span className="text-neutral-900 text-[18px] font-geist font-medium">
                Our Services
              </span>

              <div className="flex flex-col transition-colors gap-[10px]">
                <span className="text-foreground/60 hover:text-foreground/80 transition-colors underline-offset-[3.5px] break-words  hover:underline font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground-800 font-geist">
                  TEC
                </span>
                <span className="text-foreground/60 hover:text-foreground/80 transition-colors underline-offset-[3.5px] break-words  hover:underline font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground-800 font-geist">
                  ISI MARK
                </span>
                <span className="text-foreground/60 hover:text-foreground/80 transition-colors underline-offset-[3.5px] break-words  hover:underline font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground-800 font-geist">
                  CE CERTIFICATION
                </span>
                <span className="text-foreground/60 hover:text-foreground/80 transition-colors underline-offset-[3.5px] break-words  hover:underline font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground-800 font-geist">
                  EPR
                </span>
                <span className="text-foreground/60 hover:text-foreground/80 transition-colors underline-offset-[3.5px] break-words  hover:underline font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground-800 font-geist">
                  WPC
                </span>
                <span className="text-foreground/60 hover:text-foreground/80 transition-colors underline-offset-[3.5px] break-words  hover:underline font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground-800 font-geist">
                  ROHS
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-[15px]">
              <span className="text-neutral-900 text-[18px] font-geist font-medium">
                Company
              </span>
              <div className="flex flex-col transition-colors gap-[10px]">
                <span className="text-foreground/60 hover:text-foreground/80 transition-colors underline-offset-[3.5px] break-words  hover:underline font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground-800 font-geist">
                  About
                </span>
                <span className="text-foreground/60 hover:text-foreground/80 transition-colors underline-offset-[3.5px] break-words  hover:underline font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground-800 font-geist">
                  Contact Us
                </span>
                <span className="text-foreground/60 hover:text-foreground/80 transition-colors underline-offset-[3.5px] break-words  hover:underline font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground-800 font-geist">
                  Clients
                </span>
                <span className="text-foreground/60 hover:text-foreground/80 transition-colors underline-offset-[3.5px] break-words  hover:underline font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground-800 font-geist">
                  FAQ's
                </span>
                <span className="text-foreground/60 hover:text-foreground/80 transition-colors underline-offset-[3.5px] break-words  hover:underline font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground-800 font-geist">
                  Sitemap
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-[15px]">
              <span className="text-neutral-900 text-[18px] font-geist font-medium">
                News & Notifications
              </span>

              <div className="flex flex-col transition-colors gap-[10px]">
                <span className="text-foreground/60 hover:text-foreground/80 transition-colors underline-offset-[3.5px] break-words  hover:underline font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground-800 font-geist">
                  Blogs
                </span>
                <span className="text-foreground/60 hover:text-foreground/80 transition-colors underline-offset-[3.5px] break-words  hover:underline font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground-800 font-geist">
                  Updates
                </span>
                <span className="text-foreground/60 hover:text-foreground/80 transition-colors underline-offset-[3.5px] break-words  hover:underline font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground-800 font-geist">
                  Latest Notifications
                </span>
                <span className="text-foreground/60 hover:text-foreground/80 transition-colors underline-offset-[3.5px] break-words  hover:underline font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground-800 font-geist">
                  Latest News
                </span>
                <span className="text-foreground/60 hover:text-foreground/80 transition-colors underline-offset-[3.5px] break-words  hover:underline font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground-800 font-geist">
                  Gallery
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
          <div className="border border-[#7eafd9]"></div>
        <div className="flex items-center mt-4 mb-4 justify-between">
          <div className="flex gap-3 flex-wrap items-center">
            <a
              href="https://github.com/Mohd-Arzaid"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubLogoIcon className="h-6 w-8 text-[#2a5075] duration-200 hover:-translate-y-2 cursor-pointer" />
            </a>

            <a
              href="https://x.com/__Arzaid__"
              target="_blank"
              rel="noopener noreferrer"
            >
              <TwitterLogoIcon className="h-6 lg:h-6 w-8 lg:w-8 text-[#2a5075] duration-200 hover:-translate-y-2 cursor-pointer" />
            </a>

            <a
              href="mailto:arzaid010103@gmail.com?body=Hello"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MailPlus className="h-6 lg:h-6 w-8 lg:w-8 text-[#2a5075] duration-200 hover:-translate-y-2 cursor-pointer" />
            </a>

            <a
              href="https://instagram.com/arzaid._.xd"
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstagramLogoIcon className="h-6 lg:h-6 w-8 lg:w-8 text-[#2a5075] duration-200 hover:-translate-y-2 cursor-pointer" />
            </a>
          </div>

          <button
            className="flex items-center justify-center h-9 px-4 py-2 gap-x-1 rounded-full border border-[#7eafd9] bg-gray-50 hover:bg-[#E3EFF4] transition-all duration-200 
"
          >
            <span className="text-[15px] text-[#2a5075] font-geist leading-[20px] font-medium">
              English (US)
            </span>
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 24 24"
              aria-hidden="true"
              class="shrink-0 !size-4"
              className="text-[#2a5075]"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path>
            </svg>
          </button>

          <span className="text-[#2a5075] font-geist">
            Copyright © 2025 Sun Consultants & Engineers. All Rights Reserved.
          </span>

          <div className="size-2 shrink-0 rounded-full bg-[#7eafd9]"></div>

          <span className="text-[#2a5075] font-geist">Privacy Policy</span>

          <div className="size-2 shrink-0 rounded-full bg-[#7eafd9]"></div>

          <span className="text-[#2a5075] font-geist">Terms of Service</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

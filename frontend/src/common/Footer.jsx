import { GitHubLogoIcon, InstagramLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons";

const Footer = () => {
  return (
    <footer className="bg-[#b9deeb] py-16">
      <div className="max-w-[88rem] mx-auto px-12">

        {/* Main Footer Content */}
        <div>

        </div>

        {/* Bottom Bar */}
        <div className="border border-[#7eafd9]"></div>

        <a
          href="https://github.com/Mohd-Arzaid"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHubLogoIcon className=" h-6 lg:h-6 w-8 lg:w-8 duration-200 hover:-translate-y-2 cursor-pointer" />
        </a>



      </div>
    </footer>
  );
};

export default Footer;

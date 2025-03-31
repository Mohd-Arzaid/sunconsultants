import LogoOne from "../../assets/images/OneLogo.png";
import LogoTwo from "../../assets/images/TwoLogo.png";
import LogoThree from "../../assets/images/ThreeLogo.png";
import LogoFour from "../../assets/images/FourLogo.png";
import LogoFive from "../../assets/images/FiveLogo.png";
import LogoSix from "../../assets/images/SixLogo.png";

const AllClients = () => {
  const clientLogos = [
    LogoOne,
    LogoTwo,
    LogoThree,
    LogoFour,
    LogoFive,
    LogoSix,
    LogoOne,
    LogoTwo,
    LogoThree,
    LogoFour,
    LogoFive,
    LogoSix,
  ];
  return (
    <div className="bg-[#f9f7f2]">
      <div className="max-w-[88rem] mx-auto p-12">
        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="font-playfair text-5xl font-bold text-[#1e1e1e] mb-4">
            OUR CLIENTS
          </h1>
          <p className="text-lg font-geist text-gray-600 max-w-2xl mx-auto">
            Explore the organizations that have chosen us as their trusted
            partner in growth and innovation.
          </p>
        </div>

        <div className="grid grid-cols-4 gap-8 place-items-center">
          {clientLogos.map((logo, index) => (
            <div
              key={index}
              className={`client-logo-container ${
                index % 3 === 0 ? "client-logo-blue" : ""
              }`}
            >
              <img src={logo} alt={`Client logo ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllClients;

import React from "react";
import { Separator } from "../ui/separator";
import { Check, CircleAlert } from "lucide-react";
import CDSCOOne from "../../assets/images/CDSCOOne.png";

const CDSCOContentLeft = () => {
  return (
    <div className=" flex-1">
      <div className="flex flex-col gap-[40px]">
        {/* Overview Section */}
        <OverviewSection />
        {/* Divider */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-500 to-transparent" />

        {/* Eligibilty Section */}
        <EligibilitySection />

        {/* Divider */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-500 to-transparent" />

        {/* Classification Section */}
        <ClassificationSection />
      </div>
    </div>
  );
};

export default CDSCOContentLeft;

const OverviewSection = () => {
  return (
    <section className="flex flex-col ">
      {/* Overview */}
      <div className="flex w-full items-center gap-3">
        <span className="uppercase  font-semibold font-geist text-[20px] text-gray-700">
          Overview
        </span>
        <Separator className="w-[94.46px] h-[1.5px] bg-gray-700" />
      </div>

      {/* Title */}
      <h3 className="text-[40px] font-roboto font-bold text-[#131316]">
        CDSCO License Details
      </h3>

      {/* Description */}
      <p className="font-semibold font-geist text-[20px]  text-[#131316]">
        CDSCO Registration can be obtained through online portal registration
      </p>

      {/* Overview Content */}

      <div className="mt-[24px]   font-geist text-sm sm:text-lg text-[#42434d] tracking-wide  text-left max-w-full  leading-loose">
        CDSCO stands for{" "}
        <span className="font-medium text-gray-950  underline decoration-gray-200 decoration-2 underline-offset-[0.27em] transition-colors hover:decoration-gray-950 ">
          Central Drugs Standard Control Organisation
        </span>{" "}
        (which comes under the Ministry of Health and Family Welfare),
        headquartered in Delhi and has 6 zonal offices in India namely at
        Mumbai, Kolkata, Chennai, Ghaziabad, Hyderabad and Ahmedabad and various
        other sub-zonal offices. It is the national regulatory body for products
        like cosmetics, drugs, medical devices, etc.
      </div>

      {/* Important Points And Image */}
      <div className="flex mt-[24px] gap-10">
        {/* Points */}
        <PointsList
          points={[
            "Medical device division (Drugs)",
            "Drugs",
            "Cosmetics",
            "Clinical Trial on medical devices division",
            "Vaccines",
            "BA/BE",
          ]}
          heading="Different divisions of the CDSCO are as below"
        />

        {/* Image */}

        <img
          src={CDSCOOne}
          alt="CDSCO One Image"
          className="rounded-lg shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1
            ring-gray-900/7.5 transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)]
            hover:ring-gray-900/12.5 w-[400px] h-[250px] mt-2.5
            "
        />
      </div>
    </section>
  );
};

const PointsList = ({ points, heading }) => {
  return (
    <div className="flex flex-col w-[441px]">
      <p className="font-semibold font-geist text-[20px]  text-[#131316]">
        {heading}
      </p>
      <div className="flex flex-col mt-[24px] gap-2 ">
        {points.map((point, index) => (
          <div key={index} className="flex items-center gap-2 ">
            <div className="bg-green-500/10 p-2 rounded-full">
              <Check size={12} className="text-[#020817]" />
            </div>
            <p className=" font-geist text-sm sm:text-lg text-[#42434d] tracking-wide  text-left max-w-full  leading-loose">
              {point}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

const PointsListTwo = ({ points, heading }) => {
  return (
    <div className="flex flex-col ">
      <p className="font-semibold font-geist text-[20px]  text-[#131316]">
        {heading}
      </p>
      <div className="flex flex-col mt-[20px] gap-2 ">
        {points.map((point, index) => (
          <div key={index} className="flex items-center gap-2 ">
            <div className="bg-green-500/10 p-2 rounded-full">
              <Check size={12} className="text-[#020817]" />
            </div>
            <p className=" font-geist text-sm sm:text-lg text-[#42434d] tracking-wide  text-left max-w-full  leading-loose">
              {point}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

const EligibilitySection = () => {
  return (
    <section className="flex flex-col ">
      {/* Eligibility */}
      <div className="flex w-full items-center gap-3">
        <span className="uppercase  font-semibold font-geist text-[20px] text-gray-700">
          Eligibility
        </span>
        <Separator className="w-[94.46px] h-[1.5px] bg-gray-700" />
      </div>

      {/* Title */}
      <h3 className="text-[40px] font-roboto font-bold text-[#131316]">
        CDSCO Certificate Eligibility
      </h3>

      {/* Description */}
      <p className="font-semibold font-geist text-[20px]  text-[#131316]">
        Eligibility for a CDSCO Certificate requires meeting regulatory
        guidelines.
      </p>

      {/* Eligibility Content */}
      <div className="mt-[24px] font-geist text-sm sm:text-lg text-[#42434d] tracking-wide  text-left max-w-full  leading-loose">
        All manufacturers, either of Indian or foreign origin, can apply for the{" "}
        <span className="font-medium text-gray-950  underline decoration-gray-200 decoration-2 underline-offset-[0.27em] transition-colors hover:decoration-gray-950 ">
          CDSCO license
        </span>
        . In the case of a{" "}
        <span className="font-medium text-gray-950  underline decoration-gray-200 decoration-2 underline-offset-[0.27em] transition-colors hover:decoration-gray-950 ">
          foreign manufacturer
        </span>
        , the license will be granted to the manufacturer, and the Indian
        counterpart of the manufacturer will act as its authorized Indian
        Representative. The Indian representative of the manufacturer must have
        a valid state drugs license under Form 20-B/21-B or Form 42 (applied
        under Form 41) as per the latest guidelines released by CDSCO.
      </div>
    </section>
  );
};

const ClassificationSection = () => {
  return (
    <section className="flex flex-col ">
      {/* Classification */}
      <div className="flex w-full items-center gap-3">
        <span className="uppercase  font-semibold font-geist text-[20px] text-gray-700">
          Classification
        </span>
        <Separator className="w-[94.46px] h-[1.5px] bg-gray-700" />
      </div>
      {/* Title */}
      <h3 className="text-[40px] font-roboto font-bold text-[#131316]">
        CDSCO Device Classification
      </h3>

      {/* Important Points */}
      <div className="flex mt-[24px] gap-10">
        {/* Points */}
        <PointsListTwo
          points={[
            "Class A ( least risk )",
            " Class B ( Moderate risk )",
            "Class C ( Moderate to high risk )",
            "Class D ( High risk )",
          ]}
          heading=" Medical devices are categorized into four classes by the
                        Medical Device Rules 2017"
        />

        {/* Image */}
        {/* <img
          src={CDSCOOne}
          alt="CDSCO One Image"
          className="rounded-lg shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1
              ring-gray-900/7.5 transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)]
              hover:ring-gray-900/12.5 w-[400px] h-[250px] 
              "
        /> */}
      </div>

      {/* Important Points 2nd*/}
      <div className="mt-[32px]">
        <PointsListTwo
          points={[
            "Class A ( non sterile and non measuring ) products come under registration scheme.",
            "Class A ( Sterile or measuring ) products require license.",
          ]}
          heading="CDSCO Registration can be obtained through online portal
                registration"
        />
      </div>

      {/* Conclusion */}
      <div className="mt-[24px] font-geist text-sm sm:text-lg text-[#42434d] tracking-wide  text-left max-w-full  leading-loose">
        This brings us to the conclusion that products which are under{" "}
        <span className="font-medium text-gray-950  underline decoration-gray-200 decoration-2 underline-offset-[0.27em] transition-colors hover:decoration-gray-950 ">
          Class A ( sterile or measuring )
        </span>{" "}
        ,{" "}
        <span className="font-medium text-gray-950  underline decoration-gray-200 decoration-2 underline-offset-[0.27em] transition-colors hover:decoration-gray-950 ">
          Class B
        </span>
        ,{" "}
        <span className="font-medium text-gray-950  underline decoration-gray-200 decoration-2 underline-offset-[0.27em] transition-colors hover:decoration-gray-950 ">
          Class C
        </span>{" "}
        and{" "}
        <span className="font-medium text-gray-950  underline decoration-gray-200 decoration-2 underline-offset-[0.27em] transition-colors hover:decoration-gray-950 ">
          Class D
        </span>{" "}
        require a license from CDSCO.
      </div>
    </section>
  );
};

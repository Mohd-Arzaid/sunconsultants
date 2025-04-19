import { Separator } from "../ui/separator";
import { Check } from "lucide-react";
import CDSCOOne from "../../assets/images/CDSCOOne.png";


const CDSCOContentLeft = () => {
  return (

    <div className="flex-1">
      <div className="flex flex-col gap-[20px] md:gap-[40px]">
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

        {/* Divider */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-500 to-transparent" />

        {/* Documents Section */}
        <Documents />

        {/* Divider */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-500 to-transparent" />

        {/* Registration Section */}
        <Registration />

        {/* Divider */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-500 to-transparent" />

        {/* Licensing Section */}
        <Licensing />

        {/* Divider */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-500 to-transparent" />

        {/* Licensing Section */}
        <Consulting />

        {/* Review Section */}
        <ReviewSection />
      </div>
    </div>


  );
};

export default CDSCOContentLeft;

const OverviewSection = () => {
  return (
    <section id="overview" className="flex flex-col scroll-mt-20">
      {/* Overview */}
      <div className="flex w-full items-center gap-3">
        <span className="uppercase font-semibold font-geist text-[16px] md:text-[20px] text-gray-700">
          Overview
        </span>
        <Separator className="w-[94.46px] h-[1.5px] bg-gray-700" />
      </div>

      {/* Title */}
      <h3 className="text-[28px] md:text-[40px] font-roboto font-bold text-[#131316]">
        CDSCO License Details
      </h3>

      {/* Description */}
      <p className="font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        CDSCO Registration can be obtained through online portal registration
      </p>

      {/* Overview Content */}
      <div className="mt-[16px] md:mt-[24px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        CDSCO stands for{" "}
        <span className="font-medium text-gray-950 underline decoration-gray-200 decoration-2 underline-offset-[0.27em] transition-colors hover:decoration-gray-950">
          Central Drugs Standard Control Organisation
        </span>{" "}
        (which comes under the Ministry of Health and Family Welfare),
        headquartered in Delhi and has 6 zonal offices in India namely at
        Mumbai, Kolkata, Chennai, Ghaziabad, Hyderabad and Ahmedabad and various
        other sub-zonal offices. It is the national regulatory body for products
        like cosmetics, drugs, medical devices, etc.
      </div>

      {/* Important Points And Image */}
      <div className="flex flex-col md:flex-row mt-[16px] md:mt-[24px] gap-6 md:gap-10">
        {/* Points */}
        <div className="w-full md:w-auto">
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
        </div>

        {/* Image */}
        <div className="w-full md:w-auto">
          <img
            src={CDSCOOne}
            alt="CDSCO One Image"
            className="rounded-lg shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1
              ring-gray-900/7.5 transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)]
              hover:ring-gray-900/12.5 w-full md:w-[400px] h-auto md:h-[250px] mt-2.5
              "
          />
        </div>
      </div>
    </section>
  );
};

const PointsList = ({ points, heading }) => {
  return (
    <div className="flex flex-col w-full md:w-[441px]">
      <p className="font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        {heading}
      </p>
      <div className="flex flex-col mt-[16px] md:mt-[24px] gap-2">
        {points.map((point, index) => (
          <div key={index} className="flex items-center gap-2">
            <div className="bg-green-500/10 p-2 rounded-full">
              <Check size={12} className="text-[#020817]" />
            </div>
            <p className="font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
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
    <div className="flex flex-col w-full">
      <p className="font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        {heading}
      </p>
      <div className="flex flex-col mt-[16px] md:mt-[20px] gap-2">
        {points.map((point, index) => (
          <div key={index} className="flex items-center gap-2">
            <div className="bg-green-500/10 p-2 rounded-full">
              <Check size={12} className="text-[#020817]" />
            </div>
            <p className="font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
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
    <section id="eligibility" className="flex flex-col scroll-mt-20">
      {/* Eligibility */}
      <div className="flex w-full items-center gap-3">
        <span className="uppercase font-semibold font-geist text-[16px] md:text-[20px] text-gray-700">
          Eligibility
        </span>
        <Separator className="w-[94.46px] h-[1.5px] bg-gray-700" />
      </div>

      {/* Title */}
      <h3 className="text-[28px] md:text-[40px] font-roboto font-bold text-[#131316]">
        CDSCO Certificate Eligibility
      </h3>

      {/* Description */}
      <p className="font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        Eligibility for a CDSCO Certificate requires meeting regulatory
        guidelines.
      </p>

      {/* Eligibility Content */}
      <div className="mt-[16px] md:mt-[24px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        All manufacturers, either of Indian or foreign origin, can apply for the{" "}
        <span className="font-medium text-gray-950 underline decoration-gray-200 decoration-2 underline-offset-[0.27em] transition-colors hover:decoration-gray-950">
          CDSCO license
        </span>
        . In the case of a{" "}
        <span className="font-medium text-gray-950 underline decoration-gray-200 decoration-2 underline-offset-[0.27em] transition-colors hover:decoration-gray-950">
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
    <section id="classification" className="flex flex-col scroll-mt-20">
      {/* Classification */}
      <div className="flex w-full items-center gap-3">
        <span className="uppercase font-semibold font-geist text-[16px] md:text-[20px] text-gray-700">
          Classification
        </span>
        <Separator className="w-[94.46px] h-[1.5px] bg-gray-700" />
      </div>
      
      {/* Title */}
      <h3 className="text-[28px] md:text-[40px] font-roboto font-bold text-[#131316]">
        CDSCO Device Classification
      </h3>

      {/* Important Points */}
      <div className="flex flex-col md:flex-row mt-[16px] md:mt-[24px] gap-6 md:gap-10">
        {/* Points */}
        <div className="w-full md:w-auto">
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
        </div>

        {/* Image */}
        {/* <img
          src={CDSCOOne}
          alt="CDSCO One Image"
          className="rounded-lg shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1
              ring-gray-900/7.5 transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)]
              hover:ring-gray-900/12.5 w-full md:w-[400px] h-auto md:h-[250px] 
              "
        /> */}
      </div>

      {/* Important Points 2nd*/}
      <div className="mt-[20px] md:mt-[32px]">
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
      <div className="mt-[16px] md:mt-[24px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        This brings us to the conclusion that products which are under{" "}
        <span className="font-medium text-gray-950 underline decoration-gray-200 decoration-2 underline-offset-[0.27em] transition-colors hover:decoration-gray-950">
          Class A ( sterile or measuring )
        </span>{" "}
        ,{" "}
        <span className="font-medium text-gray-950 underline decoration-gray-200 decoration-2 underline-offset-[0.27em] transition-colors hover:decoration-gray-950">
          Class B
        </span>
        ,{" "}
        <span className="font-medium text-gray-950 underline decoration-gray-200 decoration-2 underline-offset-[0.27em] transition-colors hover:decoration-gray-950">
          Class C
        </span>{" "}
        and{" "}
        <span className="font-medium text-gray-950 underline decoration-gray-200 decoration-2 underline-offset-[0.27em] transition-colors hover:decoration-gray-950">
          Class D
        </span>{" "}
        require a license from CDSCO.
      </div>
    </section>
  );
};

const Documents = () => {
  return (
    <section id="documents" className="flex flex-col scroll-mt-20">
      {/* Documents */}
      <div className="flex w-full items-center gap-3">
        <span className="uppercase font-semibold font-geist text-[16px] md:text-[20px] text-gray-700">
          Documents
        </span>
        <Separator className="w-[94.46px] h-[1.5px] bg-gray-700" />
      </div>

      {/* Title */}
      <h3 className="text-[28px] md:text-[40px] font-roboto font-bold text-[#131316]">
        Required Documents for CDSCO LICENSE
      </h3>

      <div className="flex flex-col md:flex-row mt-[16px] md:mt-[24px] gap-6 md:gap-10">
        {/* Points */}
        <div className="w-full md:w-auto">
          <PointsListTwo
            points={[
              "Drugs license of importer (Required only for foreign manufacturer)",
              "Free sales certificate (Required only for foreign manufacturer)",
              "ISO certificate (Required only for foreign manufacturer)",
              "List of products to be registered",
              "Basic details about the product (example: storage temperature, shelf life, model number, etc.)",
            ]}
            heading="CDSCO registration for Class A products ( non-sterile and non-measuring )"
          />
        </div>
      </div>

      <div className="flex flex-col md:flex-row mt-[16px] md:mt-[24px] gap-6 md:gap-10">
        {/* Points */}
        <div className="w-full md:w-auto">
          <PointsListTwo
            points={[
              "Plant Master File (PMF)",
              "Device Master File (DMF)",
              "Manufacturing process flowchart",
              "Labels and user manual",
              "Design verification and validation",
              "Stability validation data",
              "Challan of the government fee paid",
            ]}
            heading="Class A ( sterile or measuring ), Class B, Class C and Class D"
          />
        </div>
      </div>
    </section>
  );
};

const Registration = () => {
  return (
    <section id="registration" className="flex flex-col scroll-mt-20">
      {/* Registration */}
      <div className="flex w-full items-center gap-3">
        <span className="uppercase font-semibold font-geist text-[16px] md:text-[20px] text-gray-700">
          Registration
        </span>
        <Separator className="w-[94.46px] h-[1.5px] bg-gray-700" />
      </div>

      {/* Title */}
      <h3 className="text-[28px] md:text-[40px] font-roboto font-bold text-[#131316]">
        Class A Product Registration Process
      </h3>

      {/* Description */}
      <p className="font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        Process for CDSCO registration for Class A products ( non-sterile and
        non-measuring )
      </p>

      {/* Important Points And Image */}
      <div className="flex flex-col md:flex-row mt-[16px] md:mt-[24px] gap-6 md:gap-7">
        {/* Points */}
        <div className="w-full md:w-auto">
          <PointsList
            points={[
              "Generation of login Credentials",
              "Registration of Indian / foreign manufacturer",
              "Registration of importer ( in case of import only )",
              "Addition of product details",
              "Submission of details to CDSCO",
              "Grant of registration",
            ]}
          />
        </div>

        {/* Image */}
        <div className="w-full md:w-auto">
          <img
            src={CDSCOOne}
            alt="CDSCO One Image"
            className="rounded-lg shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1
              ring-gray-900/7.5 transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)]
              hover:ring-gray-900/12.5 w-full md:w-[400px] h-auto md:h-[240px] mt-2.5 md:mt-5
              "
          />
        </div>
      </div>

      <div className="mt-[30px] md:mt-[46px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        <span className="font-semibold text-gray-950 underline decoration-gray-950 decoration-2 underline-offset-[0.27em] transition-colors mr-3">
          TIMELINE
        </span>
        CDSCO registration processwill take 1 day after the documents are
        submitted to us.
      </div>

      <div className="mt-[16px] md:mt-[20px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        <span className="font-semibold text-gray-950 underline decoration-gray-950 decoration-2 underline-offset-[0.27em] transition-colors mr-3">
          NOTE
        </span>
        After the registration is completed, a unique file number is generated,
        which has to be mentioned on the product / packaging, in case of
        registration there is no certificate
      </div>
    </section>
  );
};

const Licensing = () => {
  return (
    <section id="licensing" className="flex flex-col scroll-mt-20">
      {/* Licensing */}
      <div className="flex w-full items-center gap-3">
        <span className="uppercase font-semibold font-geist text-[16px] md:text-[20px] text-gray-700">
          Licensing
        </span>
        <Separator className="w-[94.46px] h-[1.5px] bg-gray-700" />
      </div>

      {/* Title */}
      <h3 className="text-[28px] md:text-[40px] font-roboto font-bold text-[#131316]">
        Process For CDSCO License
      </h3>

      {/* Points */}
      <div className="w-full md:w-auto">
        <PointsListTwo
          points={[
            "Identifying the class of the medical device",
            "Making groups as per the guidelines mentioned as per CDSCO guidelines",
            "Creation of login credentials for the manufacturer",
            "Collection of documents from the overseas manufacturer",
            "Collection of documents from Indian importer",
            "Checking and vetting of documents as per the rules",
            "Payment of government fees",
            "Submission of Application online",
            "Clearing of queries ( if any )",
            "Audit of the firm",
            "Clearing of queries ( if any ) after the audit",
            "Grant of license",
            "Generation of CDSCO certificate",
          ]}
        />
      </div>

      <div className="mt-[20px] md:mt-[28px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        <span className="font-semibold text-gray-950 underline decoration-gray-950 decoration-2 underline-offset-[0.27em] transition-colors mr-3">
          TIMELINE
        </span>
        Approx 6-8 weeks after submission of application.
      </div>

      <div className="mt-[16px] md:mt-[20px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        <span className="font-semibold text-gray-950 underline decoration-gray-950 decoration-2 underline-offset-[0.27em] transition-colors mr-3">
          VALIDITY
        </span>
        It is granted for 5 years initially and renewed thereafter by paying the
        government fees.
      </div>

      <div className="flex flex-col md:flex-row mt-[10px] gap-6 md:gap-10">
        {/* Points */}
        <div className="w-full md:w-auto">
          <PointsListTwo
            points={[
              "In case of CDSCO import license, AUDIT OF THE FOREIGN MANUFACTURER IS NOT CONDUCTED, and rest of the procedure remains the same.",
              "License number mentioned on the CDSCO registration certificate has to be mentioned on the products / packaging.",
              "Test license is also required in case of Indian manufacturers.",
            ]}
          />
        </div>
      </div>

      <div className="mt-[16px] md:mt-[24px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        <span className="font-semibold uppercase text-gray-950 underline decoration-gray-950 decoration-2 underline-offset-[0.27em] transition-colors mr-3">
          Specialized Licenses
        </span>
        If you are applying for a license for a new drug, biological product, or
        innovative medical device, additional approvals such as clinical trials
        or safety testing may be required.
      </div>

      <div className="mt-[16px] md:mt-[24px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        For further assistance or to ensure proper filing, you can consult a
        regulatory consultant experienced in CDSCO processes.
      </div>
    </section>
  );
};

const Consulting = () => {
  return (
    <section id="consulting" className="flex flex-col scroll-mt-20">
      {/* Consulting */}
      <div className="flex w-full items-center gap-3">
        <span className="uppercase font-semibold font-geist text-[16px] md:text-[20px] text-gray-700">
          Consulting
        </span>
        <Separator className="w-[94.46px] h-[1.5px] bg-gray-700" />
      </div>

      {/* Title */}
      <h3 className="text-[28px] md:text-[40px] font-roboto font-bold text-[#131316]">
        CDSCO License Consulting Services
      </h3>

      <div className="mt-[16px] md:mt-[24px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        As CDSCO registration consultants, our job is to ensure that the tiring
        procedures listed above become a cakewalk for you. Right from the
        beginning, i.e., from the stage of collection of documents from foreign
        manufacturers or preparation of documents for Indian manufacturers,
        conducting thorough compliance checks, coordinating submissions,
        addressing department queries, and following up with the department for
        the grant of a license, everything is under our scope of work.
      </div>

      <div className="mt-[16px] md:mt-[24px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        We are one of the most experienced CDSCO consultants in the field of
        medical products,we provide apex quality of services possible to all our
        national and international clients.
      </div>
    </section>
  );
};

const ReviewSection = () => {
  return (
    <section>
      <span className="font-geist text-[20px] md:text-[25px] font-semibold text-[#131316] tracking-normal">
        What did you think of this content?
      </span>
      <div className="flex flex-col md:flex-row items-start md:items-center mt-2 justify-between gap-4 md:gap-0">

        <div className="flex gap-6">
          <button className="flex cursor-pointer items-center gap-3 font-geist text-sm md:text-lg text-[#42434d] hover:text-blue-600 transition-colors group">
            <svg viewBox="0 0 20 20" fill="currentColor" stroke="currentColor" aria-hidden="true"
              className="w-5 h-5 md:w-6 md:h-6 text-gray-700 group">
              <path fillOpacity="0.15" strokeWidth="0"
                className="group-hover:text-blue-500 transition-colors duration-200"
                d="M2.75 9.75h3l3-7h.5a2 2 0 0 1 2 2v4l4.002-.011a2 2 0 0 1 1.987 2.233l-.53 4.5a2 2 0 0 1-1.986 1.767l-8.973.011h-3v-7.5Z" />
              <path fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"
                className="group-hover:text-blue-500 transition-colors duration-200"
                d="M5.75 9.75h-3v7.5h3m0-7.5 3-7h.5a2 2 0 0 1 2 2v4l4.002-.011a2 2 0 0 1 1.987 2.233l-.53 4.5a2 2 0 0 1-1.986 1.767l-8.973.011m0-7.5v7.5" />
            </svg>

            <span>It was helpful</span>
          </button>

          <button className="flex cursor-pointer items-center gap-3 font-geist text-sm md:text-lg text-[#42434d] hover:text-red-600 transition-colors group">
            <svg viewBox="0 0 20 20" fill="currentColor" stroke="currentColor" aria-hidden="true"
              className="w-5 h-5 md:w-6 md:h-6 text-gray-700 group">
              <path fillOpacity="0.15" strokeWidth="0"
                className="group-hover:text-red-500 transition-colors duration-200"
                d="M2.75 10.25h3l3 7h.5a2 2 0 0 0 2-2v-4l4.002.011a2 2 0 0 0 1.987-2.233l-.53-4.5a2 2 0 0 0-1.986-1.767L5.75 2.75h-3v7.5Z" />
              <path fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"
                className="group-hover:text-red-500 transition-colors duration-200"
                d="M5.75 10.25h-3v-7.5h3m0 7.5 3 7h.5a2 2 0 0 0 2-2v-4l4.002.011a2 2 0 0 0 1.987-2.233l-.53-4.5a2 2 0 0 0-1.986-1.767L5.75 2.75m0 7.5v-7.5" />
            </svg>

            <span>It was not helpful</span>
          </button>

        </div>


        <p className="font-geist text-[14px] md:text-[17px] text-[#5e5f6e] tracking-normal">
          Last updated on Mar 19, 2025
        </p>

      </div>
    </section>
  );
};

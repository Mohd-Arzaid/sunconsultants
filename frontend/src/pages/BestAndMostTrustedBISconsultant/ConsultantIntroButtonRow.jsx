import ViewOurOtherContentButton from "@/pages/BestAndMostTrustedBISconsultant/ViewOurOtherContentButton";

const ConsultantIntroButtonRow = ({ tagline }) => {
  return (
    <div
      className={`flex flex-col md:flex-row md:items-start gap-4 mb-4 ${tagline ? "md:justify-between" : "md:justify-end"}`}
    >
      {tagline && (
        <p className="text-gray-600 text-base font-geist font-semibold flex-1">
          {tagline}
        </p>
      )}
      <ViewOurOtherContentButton />
    </div>
  );
};

export default ConsultantIntroButtonRow;

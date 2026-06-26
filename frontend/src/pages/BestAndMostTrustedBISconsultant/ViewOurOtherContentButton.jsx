import { ChevronDown, Globe2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { scrollToOtherCountriesContent } from "@/pages/BestAndMostTrustedBISconsultant/consultantCountryInterlinks";

const ViewOurOtherContentButton = () => {
  return (
    <Button
      type="button"
      variant="outline"
      onClick={scrollToOtherCountriesContent}
      aria-label="Check BIS guide in other languages"
      className="font-geist w-full md:w-auto gap-2 text-sm font-medium text-gray-700 border-gray-300 shadow-sm hover:shadow-md hover:border-[#008080] hover:text-[#008080] transition-shadow"
    >
      <Globe2 className="h-4 w-4 shrink-0 text-[#008080]" aria-hidden="true" />
      Check BIS Guide in Other Languages
      <ChevronDown className="h-4 w-4 shrink-0 text-gray-400" aria-hidden="true" />
    </Button>
  );
};

export default ViewOurOtherContentButton;

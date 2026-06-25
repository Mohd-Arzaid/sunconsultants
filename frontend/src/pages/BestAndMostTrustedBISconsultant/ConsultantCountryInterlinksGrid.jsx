import { Link } from "react-router-dom";
import {
  getLocalLanguageCountryLinks,
  getOtherCountryLinks,
} from "@/pages/BestAndMostTrustedBISconsultant/consultantCountryInterlinks";

const HEADING_CLASS = "text-xl font-geist font-bold text-[#1e1e1e] mb-4";
const LIST_CLASS =
  "list-disc pl-6 space-y-2 text-gray-600 text-base font-geist";
const LINK_CLASS =
  "text-blue-600 font-bold underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600";

const ConsultantCountryInterlinksGrid = ({ currentEnglishPath }) => {
  const englishLinks = getOtherCountryLinks(currentEnglishPath);
  const localLanguageLinks = getLocalLanguageCountryLinks(currentEnglishPath);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-6">
      <section aria-labelledby="english-country-interlinks">
        <h2 id="english-country-interlinks" className={HEADING_CLASS}>
          Also check our BIS expertise in other countries
        </h2>
        <ul className={LIST_CLASS}>
          {englishLinks.map(({ label, path }) => (
            <li key={path}>
              <Link to={path} className={LINK_CLASS}>
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="local-language-country-interlinks">
        <h2 id="local-language-country-interlinks" className={HEADING_CLASS}>
          Also Check Our BIS Expertise in Other Countries in Their Local
          Languages
        </h2>
        <ul className={LIST_CLASS}>
          {localLanguageLinks.map(({ label, path }) => (
            <li key={path}>
              <Link to={path} className={LINK_CLASS}>
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default ConsultantCountryInterlinksGrid;

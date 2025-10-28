import { useOutletContext, useParams } from "react-router-dom";

// Import all page components
import Home from "@/pages/Home";
import About from "@/pages/About";
import ContactUs from "@/pages/ContactUs";
import Notification from "@/pages/Notification";
import MinistryUpdates from "@/pages/MinistryUpdates";
import InternationalAudits from "@/pages/InternationalAudits";
import Exhibition from "@/pages/Exhibition";
import Sitemap from "@/pages/Sitemap";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import TermsAndConditions from "@/pages/TermsAndConditions";
import Error404 from "@/pages/404Error";
import Webinar from "@/pages/Webinar";
import Videos from "@/pages/Videos";

// Service pages
import CDSCO from "@/pages/CDSCO";
import SchemeX from "@/pages/SchemeX/SchemeX";
import CRSRegistration from "@/pages/CRSRegistration/CRSRegistration";
import Peso from "@/pages/Peso";
import Tec from "@/pages/Tec";
import WPC from "@/pages/WPC";
import ROHS from "@/pages/ROHS";
import BEE from "@/pages/BEE";
import CECertification from "@/pages/CECertification";
import EMIEMC from "@/pages/EMIEMC";
import CBCertification from "@/pages/CBCertification";
import ISIMark from "@/pages/ISIMark/ISIMark";
import BatteryWaste from "@/pages/BatteryWaste";
import LHSCable from "@/pages/LHSCable";

// Manual components
import { BISFM } from "@/components/manual/BISFM";
import { EPRService } from "@/components/manual/EPRService";
import { BISCertification } from "@/components/manual/BISCertification";
import { LMPC } from "@/components/manual/LMPC";
import { PlasticWaste } from "@/components/manual/PlasticWaste";
import { LegalMetrology } from "@/components/manual/LegalMetrology";

// Route mapping to components
const ROUTE_COMPONENTS = {
  // Main pages
  "": Home,
  about: About,
  contact: ContactUs,
  sitemap: Sitemap,
  "privacy-policy": PrivacyPolicy,
  "terms-and-conditions": TermsAndConditions,

  // Updates
  "bis-qco-updates": Notification,
  "ministry-updates": MinistryUpdates,
  "international-audits": InternationalAudits,
  "seminars-and-exhibitions": Exhibition,
  webinar: Webinar,
  "videos-about-bis-certification": Videos,

  // Services
  "cdsco-registration-certification": CDSCO,
  "indian-bis-certification-under-scheme-x": SchemeX,
  "a-guide-to-bis-certification-for-foreign-manufacturers-indian-bis": BISFM,
  "a-guide-on-how-to-obtain-epr-certificate": EPRService,
  "what-is-bis-certificate-indian-bis": BISCertification,
  "a-guide-on-how-to-obtain-lmpc-certificate": LMPC,
  "epr-certificate-for-plastic-waste-management-pwm": PlasticWaste,
  "what-is-legal-metrology-or-lmpc-certificate": LegalMetrology,
  "a-guide-to-bis-certification-indian-bis": ISIMark,
  "epr-certificate-for-battery-waste-management-bwm": BatteryWaste,
  "what-is-crs-bis-or-crs-registration": CRSRegistration,
  "information-about-peso-certification-peso-license-india": Peso,
  "information-about-tec-certificate-mtcte": Tec,
  "information-about-wpc-certificate-eta-approval": WPC,
  "restriction-of-hazardous-substance-rohs-certificate": ROHS,
  "bee-certification": BEE,
  "ce-certification": CECertification,
  "emi-emc-certification": EMIEMC,
  "cb-certification": CBCertification,
  lhscable: LHSCable,
};

export function RouteResolver() {
  const context = useOutletContext();
  const params = useParams();

  // Handle both localized routes (with context) and direct English routes (without context)
  let englishUrl;

  if (context) {
    // Localized route with context
    englishUrl = context.englishUrl;
  } else {
    // Direct English internationalized route
    englishUrl = params["*"] || "";
  }

  // Validate that we have a valid English URL
  if (!englishUrl || englishUrl.trim() === "") {
    return <Error404 />;
  }

  // Get the component for this route
  const Component = ROUTE_COMPONENTS[englishUrl];

  // If no component found, show 404
  if (!Component) {
    return <Error404 />;
  }

  return <Component />;
}

export default RouteResolver;

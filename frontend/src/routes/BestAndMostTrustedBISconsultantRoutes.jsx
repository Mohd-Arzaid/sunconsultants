import { Route } from "react-router-dom";
import BestAndMostTrustedBISconsultantinIndia from "@/pages/BestAndMostTrustedBISconsultant/BestAndmostTrustedBISconsultantinIndia";
import BestAndMostTrustedBISCertificationConsultantInFrance from "@/pages/BestAndMostTrustedBISconsultant/BestAndMostTrustedBISCertificationConsultantInFrance";
import BestandMostTrustedBISCertificationConsultantinGermany from "@/pages/BestAndMostTrustedBISconsultant/BestandMostTrustedBISCertificationConsultantinGermany";
import BestandmosttrustedBIScertificationConsultantinItaly from "@/pages/BestAndMostTrustedBISconsultant/BestandmosttrustedBIScertificationConsultantinItaly";
import BestandmosttrustedBIScertificationConsultantinNetherland from "@/pages/BestAndMostTrustedBISconsultant/BestandmosttrustedBIScertificationConsultantinNetherland";
import BestandmosttrustedBIScertificationConsultantinIndonesia from "@/pages/BestAndMostTrustedBISconsultant/BestandmosttrustedBIScertificationConsultantinIndonesia";
import BestandmosttrustedBIScertificationConsultantinJapan from "@/pages/BestAndMostTrustedBISconsultant/BestandmosttrustedBIScertificationConsultantinJapan";
import BestandmosttrustedBIScertificationConsultantinSouthKorea from "@/pages/BestAndMostTrustedBISconsultant/BestandmosttrustedBIScertificationConsultantinSouthKorea";
import BestandmosttrustedBIScertificationConsultantinThailand from "@/pages/BestAndMostTrustedBISconsultant/BestandmosttrustedBIScertificationConsultantinThailand";
import BestandmosttrustedBIScertificationConsultantinSpain from "@/pages/BestAndMostTrustedBISconsultant/BestandmosttrustedBIScertificationConsultantinSpain";
import BestandmosttrustedBIScertificationConsultantinVietnam from "@/pages/BestAndMostTrustedBISconsultant/BestandmosttrustedBIScertificationConsultantinVietnam";

export const BestAndMostTrustedBISconsultantRoutes = () => {
  return (
    <>
      <Route
        path="/best-and-most-trusted-bis-consultant-india"
        element={<BestAndMostTrustedBISconsultantinIndia />}
      />
      <Route
        path="/best-and-most-trusted-bis-consultant-france"
        element={<BestAndMostTrustedBISCertificationConsultantInFrance />}
      />
      <Route
        path="/best-and-most-trusted-bis-consultant-germany"
        element={<BestandMostTrustedBISCertificationConsultantinGermany />}
      />
      <Route
        path="/best-and-most-trusted-bis-consultant-italy"
        element={<BestandmosttrustedBIScertificationConsultantinItaly />}
      />
      <Route
        path="/best-and-most-trusted-bis-consultant-netherland"
        element={<BestandmosttrustedBIScertificationConsultantinNetherland />}
      />
      <Route
        path="/best-and-most-trusted-bis-consultant-indonesia"
        element={<BestandmosttrustedBIScertificationConsultantinIndonesia />}
      />
      <Route
        path="/best-and-most-trusted-bis-consultant-japan"
        element={<BestandmosttrustedBIScertificationConsultantinJapan />}
      />
      <Route
        path="/best-and-most-trusted-bis-consultant-south-korea"
        element={<BestandmosttrustedBIScertificationConsultantinSouthKorea />}
      />
      <Route
        path="/best-and-most-trusted-bis-consultant-thailand"
        element={<BestandmosttrustedBIScertificationConsultantinThailand />}
      />
      <Route
        path="/best-and-most-trusted-bis-consultant-spain"
        element={<BestandmosttrustedBIScertificationConsultantinSpain />}
      />
      <Route
        path="/best-and-most-trusted-bis-consultant-vietnam"
        element={<BestandmosttrustedBIScertificationConsultantinVietnam />}
      />
    </>
  );
};

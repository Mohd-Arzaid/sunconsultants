import { Route, Routes, useLocation } from "react-router-dom";
import { useState } from "react";
import Navbar from "./common/Navbar";
import TopBar from "./common/TopBar";
import MobileNav from "./components/common/MobileNav";
import SocialFloatingButtons from "./components/common/SocialFloatingButtons";
import ContactFormPopup from "./components/ContactFormPopup";
import ScrollToTopButton, {
  ScrollToTop,
} from "./components/common/ScrollToTop";
import SEOBreadcrumbs from "./components/common/SEOBreadcrumbs";
import OrganizationSchema from "./components/common/OrganizationSchema";
import LocalizedRoute from "@/common/LocalizedRoute";
import RouteResolver from "@/common/RouteResolver";

// Direct imports for instant navigation - no lazy loading
import Home from "./pages/Home";
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";

import InternationalAudits from "./pages/InternationalAudits";
import Exhibition from "./pages/Exhibition";
import Sitemap from "./pages/Sitemap";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndConditions from "./pages/TermsAndConditions";
import Error404 from "./pages/404Error";
import Webinar from "./pages/Webinar";
import Videos from "./pages/Videos";

// Service pages - direct imports
import CDSCO from "./pages/CDSCO";
// import AdminLoginPage from "./admin/AdminLoginPage";
import { SchemeXProductsRoutes } from "./routes/schemeXProductsRoutes";
import { SchemeXPagesRoutes } from "./routes/schemeXPagesRoutes";
import { BISCertificationPagesRoutes } from "./routes/BISCertificationPagesRoutes";
import { ISIMarkPagesRoutes } from "./routes/ISIMarkPagesRoutes";
import { CRSRegistrationRoutes } from "./routes/CRSRegistrationRoutes";
import { BISFMPagesRoutes } from "./routes/BISFMPagesRoutes";
import LatestBlogs from "./blogs/LatestBlogs";
import SchemeXProducts from "./schemeXProducts/SchemeXProducts";
import BacklinksPage from "./pages/BacklinksPage";
import { MinistryUpdatesRoutes } from "./routes/MinistryUpdatesRoutes";
import { NotificationsRoutes } from "./routes/NotificationsRoutes";
import { BlogRoutes } from "./routes/BlogRoutes";
import { ServicePagesRoutes } from "./routes/ServicePagesRoutes";
import CheckBISCertificationEng from "./pages/CheckBISCertificationEng";

function App() {
  const [popupOpen, setPopupOpen] = useState(false);
  const [videoPopupOpen, setVideoPopupOpen] = useState(false);
  const location = useLocation();

  // Check if current route is admin
  const isAdminRoute = location.pathname === "/admin";

  return (
    <>
      <OrganizationSchema />
      {!isAdminRoute && <TopBar />}
      {!isAdminRoute && <Navbar />}
      {!isAdminRoute && (
        <ScrollToTopButton hide={popupOpen || videoPopupOpen} />
      )}
      {!isAdminRoute && <ScrollToTop />}
      <SEOBreadcrumbs />

      <Routes>
        {/* Default routes without language prefix (English) */}
        <Route path="/">
          <Route
            path="/check-bis-certification"
            element={<CheckBISCertificationEng />}
          />
          <Route
            index
            element={<Home onVideoPopupChange={setVideoPopupOpen} />}
          />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<ContactUs />} />
          {NotificationsRoutes()}
          {MinistryUpdatesRoutes()}
          <Route
            path="international-audits"
            element={<InternationalAudits />}
          />
          <Route path="seminars-and-exhibitions" element={<Exhibition />} />
          <Route path="sitemap" element={<Sitemap />} />
          {/* Services Pages */}
          <Route path="cdsco-registration-certification" element={<CDSCO />} />
          {/* Scheme X Pages Routes */}
          {SchemeXPagesRoutes()}
          {/* BISFM Pages Routes */}
          {BISFMPagesRoutes()}
          {/* BIS Certification Pages Routes */}
          {BISCertificationPagesRoutes()}
          {/* ISIMark Pages Routes */}
          {ISIMarkPagesRoutes()}
          {/* CRS Registration Routes */}
          {CRSRegistrationRoutes()}
          {/* Service Pages Routes */}
          {ServicePagesRoutes()}
          <Route path="webinar" element={<Webinar />} />
          <Route path="videos-about-bis-certification" element={<Videos />} />
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
          <Route path="terms-and-conditions" element={<TermsAndConditions />} />
          <Route path="404" element={<Error404 />} />

          {/* Blog Routes */}
          {BlogRoutes()}
          <Route path="Blogs" element={<LatestBlogs />} />

          {/* SchemeX Products */}
          <Route path="SchemeX-products" element={<SchemeXProducts />} />

          {/* SchemeX Products Routes */}
          {SchemeXProductsRoutes()}
        </Route>

        {/* Backlinks Page Routes */}
        <Route path="/backlinks" element={<BacklinksPage />} />

        {/* Admin Routes */}
        {/* <Route path="/admin" element={<AdminLoginPage />} /> */}

        {/* Localized routes for other languages */}
        <Route path="/:lang/*" element={<LocalizedRoute />}>
          <Route path="*" element={<RouteResolver />} />
        </Route>

        {/* Catch-all route for 404 */}
        <Route path="*" element={<Error404 />} />
      </Routes>

      {!isAdminRoute && <MobileNav />}
      {!isAdminRoute && (
        <SocialFloatingButtons hide={popupOpen || videoPopupOpen} />
      )}
      {!isAdminRoute && (
        <ContactFormPopup open={popupOpen} setOpen={setPopupOpen} />
      )}
    </>
  );
}

export default App;

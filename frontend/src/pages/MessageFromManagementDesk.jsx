import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Footer from "@/common/Footer";
import SEOBreadcrumbs from "@/components/common/SEOBreadcrumbs";

const MessageFromManagementDesk = () => {
  return (
    <>
      <SEOBreadcrumbs customTitle="Message from Management Desk | Sun Certifications India" />

      <Helmet>
        <title>Message from Management Desk - Sun Certifications India</title>
        <meta
          name="description"
          content="Read the message from Sun Certifications India's management desk. Learn about our vision, values, commitment to quality, and our mission to simplify product certification."
        />
        <link
          rel="canonical"
          href="https://bis-certifications.com/message-from-management-desk"
        />
        <meta
          property="og:url"
          content="https://bis-certifications.com/message-from-management-desk"
        />
      </Helmet>

      <div className="bg-white">
        {/* Hero Section */}
        <div className="bg-white pt-10">
          <div className="max-w-[88rem] mx-auto px-4 md:px-12">
            <h1 className="text-4xl md:text-5xl font-geist font-semibold text-neutral-800 text-center tracking-tight">
              Message from the Management Desk
            </h1>

           
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-[88rem] mx-auto px-4 md:px-12 pt-6 md:pt-8 pb-12">
          <div className="max-w-4xl mx-auto">
            {/* Welcome Message */}
            <div className="mb-10 md:mb-12">
              <p className="text-lg md:text-xl text-neutral-600 font-geist leading-relaxed">
                Welcome to our official website, and thank you for taking the
                time to learn more about who we are and what we stand for.
              </p>
            </div>

            {/* Section 1: Who We Are */}
            <div className="mb-10 md:mb-12">
              <h2 className="text-2xl md:text-3xl font-geist font-semibold text-neutral-800 mb-6 md:mb-8">
                Who We Are
              </h2>
              <p className="text-base md:text-lg text-neutral-600 font-geist leading-relaxed">
                At Sun Certifications India, we are proud to be a trusted
                product certification consulting partner for Indian
                manufacturers, foreign manufacturers, importers, exporters, and
                traders across diverse industries. From the very beginning, our
                organization has been built on strong values of trust, quality,
                innovation, and customer satisfaction. These principles guide
                every decision we make and every service we deliver.
              </p>
            </div>

            {/* Section 2: Our Mission */}
            <div className="mb-10 md:mb-12">
              <h2 className="text-2xl md:text-3xl font-geist font-semibold text-neutral-800 mb-6 md:mb-8">
                Our Mission
              </h2>
              <p className="text-base md:text-lg text-neutral-600 font-geist leading-relaxed mb-4">
                In today's rapidly evolving regulatory environment, product
                compliance is not just a legal requirement—it is a commitment to
                safety, quality, and credibility. Our mission is to simplify
                complex certification processes and help businesses achieve
                regulatory approvals with confidence and clarity.
              </p>
              <p className="text-base md:text-lg text-neutral-600 font-geist leading-relaxed">
                Whether it is BIS certification, ISI marking, CRS registration,
                or other product compliance requirements, our team works closely
                with clients to ensure accuracy, transparency, and timely
                execution at every stage.
              </p>
            </div>

            {/* Section 3: Building Strong Relationships */}
            <div className="mb-10 md:mb-12">
              <h2 className="text-2xl md:text-3xl font-geist font-semibold text-neutral-800 mb-6 md:mb-8">
                Building Strong Relationships
              </h2>
              <p className="text-base md:text-lg text-neutral-600 font-geist leading-relaxed mb-4">
                We strongly believe that long-term success is built on strong
                relationships. That is why we focus not only on delivering
                results, but also on building trust through honest guidance,
                technical expertise, and consistent support.
              </p>
              <p className="text-base md:text-lg text-neutral-600 font-geist leading-relaxed">
                Our clients rely on us not just as consultants, but as
                compliance partners who understand their business goals and
                regulatory challenges. This trust motivates us to continuously
                improve our processes and stay updated with changing standards
                and government regulations.
              </p>
            </div>

            {/* Section 4: Quality at Our Core */}
            <div className="mb-10 md:mb-12">
              <h2 className="text-2xl md:text-3xl font-geist font-semibold text-neutral-800 mb-6 md:mb-8">
                Quality at Our Core
              </h2>
              <p className="text-base md:text-lg text-neutral-600 font-geist leading-relaxed mb-4">
                Quality is at the core of our work culture. Every project,
                regardless of its size, is handled with the same level of
                dedication and attention to detail. We invest in knowledge,
                training, and innovation so that our clients benefit from
                accurate advice and efficient solutions.
              </p>
              <p className="text-base md:text-lg text-neutral-600 font-geist leading-relaxed">
                Our experienced professionals are committed to reducing
                compliance risks and helping businesses enter and grow in
                domestic and international markets smoothly.
              </p>
            </div>

            {/* Section 5: Our Vision for the Future */}
            <div className="mb-10 md:mb-12">
              <h2 className="text-2xl md:text-3xl font-geist font-semibold text-neutral-800 mb-6 md:mb-8">
                Our Vision for the Future
              </h2>
              <p className="text-base md:text-lg text-neutral-600 font-geist leading-relaxed mb-4">
                As we look to the future, our vision remains clear: to become a
                globally recognized product certification consulting firm known
                for reliability, professionalism, and value-driven services.
              </p>
              <p className="text-base md:text-lg text-neutral-600 font-geist leading-relaxed">
                We aim to support businesses not only in meeting today's
                compliance requirements but also in preparing for tomorrow's
                regulatory expectations.
              </p>
            </div>

            {/* Section 6: Our Commitment */}
            <div className="mb-10 md:mb-12">
              <h2 className="text-2xl md:text-3xl font-geist font-semibold text-neutral-800 mb-6 md:mb-8">
                Our Commitment to You
              </h2>
              <p className="text-base md:text-lg text-neutral-600 font-geist leading-relaxed mb-4">
                We thank you for your trust and confidence in us. We look
                forward to building a long-term association with you and
                supporting your journey toward compliance, quality, and
                sustainable growth.
              </p>
              <p className="text-base md:text-lg text-neutral-600 font-geist leading-relaxed italic">
                Together, let us move forward with confidence, compliance, and
                success.
              </p>
            </div>

            {/* Call to Action */}
            <div className="text-center mt-12 md:mt-16 p-8 md:p-12 bg-gradient-to-r from-neutral-50 to-neutral-100 rounded-lg border border-neutral-200">
              <h3 className="text-xl md:text-2xl font-geist font-semibold text-neutral-800 mb-4">
                Ready to Start Your Certification Journey?
              </h3>
              <p className="text-base md:text-lg text-neutral-600 font-geist leading-relaxed mb-6">
                Let our experienced team guide you through the certification
                process with clarity and confidence.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-neutral-800 text-white font-geist font-medium rounded-lg hover:bg-neutral-700 transition-colors duration-200"
              >
                Contact Us Today
              </Link>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default MessageFromManagementDesk;

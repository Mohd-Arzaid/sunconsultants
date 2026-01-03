import { Mail, Linkedin } from "lucide-react";
import PropTypes from "prop-types";

const FaqAuthorDutch = ({ questionNumber = 1 }) => {
  // Calculate which point to show based on rotation: (questionNumber - 1) % 5
  // Q1 -> 0 (point 1), Q2 -> 1 (point 2), Q3 -> 2 (point 3), Q4 -> 3 (point 4), Q5 -> 4 (point 5)
  // Q6 -> 0 (point 1), Q7 -> 1 (point 2), etc.
  const pointIndex = (questionNumber - 1) % 5;

  // Define all 5 review points
  const reviewPoints = [
    {
      title: "Dit antwoord is beoordeeld door:",
      content:
        "Onze hoofdregelgevingsadviseur, een voormalig BIS adjunct-directeur-generaal (Standaardisatie). Met meer dan 30 jaar dienstverlening, is hij gespecialiseerd in het interpreteren van de Bureau of Indian Standards Act en het vereenvoudigen van complexe certificeringswerkstromen voor Indiase fabrikanten.",
    },
    {
      title: "Technische beoordeling door:",
      content:
        "Onze senior hoofdauditor (Certificering), een voormalig BIS-wetenschapper 'E' die diende als hoofd certificering voor de noordelijke regio. Hij heeft toezicht gehouden op meer dan 1.500 fabrieksinspecties en adviseert over het voorkomen van veelvoorkomende niet-conformiteiten tijdens de aanvraagfase.",
    },
    {
      title: "Compliancebeoordeling:",
      content:
        "Dit importcompliance-overzicht is beoordeeld door onze directeur buitenlandse handelscompliance, een voormalig senior BIS-functionaris (FMCS-afdeling). Zijn expertise ligt in het navigeren door het certificeringsschema voor buitenlandse fabrikanten en het oplossen van douaneafhandelingsproblemen voor geïmporteerde goederen.",
    },
    {
      title: "Regelgevend toezicht:",
      content:
        "Dit complianceadvies is gecontroleerd door onze senior adviseur (Handhaving & Waakzaamheid), een voormalig BIS-directeur (Handhaving). Hij is gespecialiseerd in post-certificeringscompliance en helpt bedrijven bij het navigeren door toezichtscontroles en juridische naleving van BIS-mandaat.",
    },
    {
      title: "Gecontroleerd door:",
      content:
        "Deze documentatiegids is beoordeeld door onze hoofdapplicatiespecialist, een voormalig BIS-sectiehoofd (Licentieverlening & Controle). Met ervaring in het verwerken van meer dan 5.000 aanvraagdossiers, zorgt hij ervoor dat klantinzendingen voldoen aan de strikte administratieve criteria om afwijzing tijdens de initiële controlefase te voorkomen.",
    },
  ];

  // Get the current point to display
  const currentPoint = reviewPoints[pointIndex];

  return (
    <section className="">
      <div className="relative overflow-hidden bg-gradient-to-br from-[#F9F7F2] via-white to-[#F9F7F2] border border-gray-200 rounded-xl p-6 md:p-8 shadow-sm hover:shadow-md transition-all duration-300 group">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#1A8781]/5 to-transparent rounded-full -translate-y-4 translate-x-4"></div>
        <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-[#125E5A]/5 to-transparent rounded-full translate-y-2 -translate-x-2"></div>

        <div className="relative z-10">
          {/* Header */}
          <div className="flex items-center gap-3 mb-3">
            <div className="font-geist text-[18px] md:text-[22px] font-semibold text-[#1A8781]">
              {currentPoint.title}
            </div>
            <div className="flex-1 h-[1px] bg-gradient-to-r from-[#1A8781]/20 to-transparent"></div>
          </div>

          <div className="space-y-3">
            {/* Review section - show only the relevant point */}
            <div className="p-3 bg-white/50 rounded-lg border border-[#1A8781]/10 hover:border-[#1A8781]/20 transition-colors duration-200">
              <p className="font-geist text-[14px] md:text-[18px] text-[#42434d]">
                {currentPoint.content}
              </p>
            </div>

            {/* Contact information with enhanced buttons */}
            <div className="pt-2 space-y-2">
              <div className="flex flex-col sm:flex-row gap-2">
                <a
                  href="https://www.linkedin.com/company/sun-certifications-india/posts/?feedView=all"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 p-3 bg-gradient-to-r from-[#0077B5]/5 to-[#0077B5]/10 hover:from-[#0077B5]/10 hover:to-[#0077B5]/15 rounded-lg border border-[#0077B5]/10 hover:border-[#0077B5]/20 transition-all duration-200"
                >
                  <Linkedin className="w-4 h-4 text-[#0077B5]" />
                  <span className="font-geist text-[14px] md:text-[18px] text-[#42434d]">
                    <span className="font-medium">LinkedIn:</span> Neem contact
                    op
                  </span>
                </a>

                <a
                  href="mailto:admin@bis-certifications.com"
                  className="flex items-center gap-2 p-3 bg-gradient-to-r from-[#1A8781]/5 to-[#125E5A]/10 hover:from-[#1A8781]/10 hover:to-[#125E5A]/15 rounded-lg border border-[#1A8781]/10 hover:border-[#1A8781]/20 transition-all duration-200 cursor-pointer"
                >
                  <Mail className="w-4 h-4 text-[#1A8781]" />
                  <span className="font-geist text-[14px] md:text-[18px] text-[#42434d]">
                    <span className="font-medium">Contact:</span>{" "}
                    admin@bis-certifications.com
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FaqAuthorDutch.propTypes = {
  questionNumber: PropTypes.number,
};

export default FaqAuthorDutch;

import { Mail, Linkedin } from "lucide-react";
import PropTypes from "prop-types";

const FaqAuthorFrench = ({ questionNumber = 1 }) => {
  // Calculate which point to show based on rotation: (questionNumber - 1) % 5
  // Q1 -> 0 (point 1), Q2 -> 1 (point 2), Q3 -> 2 (point 3), Q4 -> 3 (point 4), Q5 -> 4 (point 5)
  // Q6 -> 0 (point 1), Q7 -> 1 (point 2), etc.
  const pointIndex = (questionNumber - 1) % 5;

  // Define all 5 review points
  const reviewPoints = [
    {
      title: "Cette réponse est examinée par :",
      content:
        "Notre consultant réglementaire principal, ancien directeur général adjoint du BIS (Normalisation). Avec plus de 30 ans de service, il se spécialise dans l'interprétation de la loi sur le Bureau des normes indiennes et la simplification des flux de travail de certification complexes pour les fabricants indiens.",
    },
    {
      title: "Examen technique par :",
      content:
        "Notre auditeur principal senior (Certification), ancien scientifique BIS 'E' qui a servi comme chef de la certification pour la région du Nord. Il a supervisé plus de 1 500 inspections d'usines et conseille sur la prévention des non-conformités courantes pendant la phase de candidature.",
    },
    {
      title: "Examen de conformité :",
      content:
        "Cet aperçu de la conformité à l'importation a été examiné par notre directeur de la conformité du commerce extérieur, ancien officier senior du BIS (département FMCS). Son expertise réside dans la navigation du système de certification des fabricants étrangers et la résolution des obstacles au dédouanement pour les marchandises importées.",
    },
    {
      title: "Supervision réglementaire :",
      content:
        "Ce conseil de conformité a été vérifié par notre consultant senior (Application & Vigilance), ancien directeur du BIS (Application). Il se spécialise dans la conformité post-certification, aidant les entreprises à naviguer dans les audits de surveillance et l'adhésion légale aux mandats du BIS.",
    },
    {
      title: "Examiné par :",
      content:
        "Ce guide de documentation a été examiné par notre spécialiste principal des candidatures, ancien chef de section du BIS (Licences & Examen). Avec une expérience de traitement de plus de 5 000 dossiers de candidature, il s'assure que les soumissions des clients répondent aux critères administratifs stricts pour éviter le rejet pendant la phase d'examen initial.",
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
                    <span className="font-medium">LinkedIn:</span> Contactez-moi
                  </span>
                </a>

                <a
                  href="mailto:admin@bis-certifications.com"
                  className="flex items-center gap-2 p-3 bg-gradient-to-r from-[#1A8781]/5 to-[#125E5A]/10 hover:from-[#1A8781]/10 hover:to-[#125E5A]/15 rounded-lg border border-[#1A8781]/10 hover:border-[#1A8781]/20 transition-all duration-200 cursor-pointer"
                >
                  <Mail className="w-4 h-4 text-[#1A8781]" />
                  <span className="font-geist text-[14px] md:text-[18px] text-[#42434d]">
                    <span className="font-medium">Contact :</span>{" "}
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

FaqAuthorFrench.propTypes = {
  questionNumber: PropTypes.number,
};

export default FaqAuthorFrench;

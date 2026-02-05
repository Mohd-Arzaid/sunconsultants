import { Mail, Linkedin } from "lucide-react";
import PropTypes from "prop-types";

const FaqAuthorItalian = ({ questionNumber = 1 }) => {
  // Calculate which point to show based on rotation: (questionNumber - 1) % 5
  // Q1 -> 0 (point 1), Q2 -> 1 (point 2), Q3 -> 2 (point 3), Q4 -> 3 (point 4), Q5 -> 4 (point 5)
  // Q6 -> 0 (point 1), Q7 -> 1 (point 2), etc.
  const pointIndex = (questionNumber - 1) % 5;

  // Define all 5 review points
  const reviewPoints = [
    {
      title: "Questa risposta è stata revisionata da:",
      content:
        "Il nostro Consulente Regolatorio Principale, ex Vicedirettore Generale BIS (Standardizzazione). Con oltre 30 anni di servizio, si specializza nell'interpretazione del Bureau of Indian Standards Act e nella semplificazione dei flussi di lavoro di certificazione complessi per i produttori indiani.",
    },
    {
      title: "Revisione Tecnica Di:",
      content:
        "Il nostro Senior Lead Auditor (Certificazione), ex Scienziato BIS 'E' che ha ricoperto il ruolo di Capo della Certificazione per la Regione Settentrionale. Ha supervisionato oltre 1.500 ispezioni di fabbriche e consiglia sulla prevenzione delle non conformità comuni durante la fase di domanda.",
    },
    {
      title: "Revisione Conformità:",
      content:
        "Questa panoramica sulla conformità all'importazione è stata revisionata dal nostro Direttore della Conformità al Commercio Estero, ex Ufficiale Senior BIS (Dipartimento FMCS). La sua competenza risiede nella navigazione dello Schema di Certificazione per Produttori Stranieri e nella risoluzione degli ostacoli alla sdoganamento per le merci importate.",
    },
    {
      title: "Supervisione Regolatoria:",
      content:
        "Questo consiglio sulla conformità è stato esaminato dal nostro Consulente Senior (Applicazione & Vigilanza), ex Direttore BIS (Applicazione). Si specializza nella conformità post-certificazione, aiutando le aziende a navigare gli audit di sorveglianza e l'adesione legale ai mandati BIS.",
    },
    {
      title: "Esaminato da:",
      content:
        "Questa guida alla documentazione è stata revisionata dal nostro Specialista Applicazioni Principale, ex Capo Sezione BIS (Licensing & Scrutiny). Con esperienza nella gestione di oltre 5.000 file di domanda, garantisce che le presentazioni dei clienti soddisfino i criteri amministrativi rigorosi per prevenire il rifiuto durante la fase di scrutinio iniziale.",
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
                    <span className="font-medium">LinkedIn:</span> Contattami
                  </span>
                </a>

                <a
                  href="mailto:info@sunconsultants.co.in"
                  className="flex items-center gap-2 p-3 bg-gradient-to-r from-[#1A8781]/5 to-[#125E5A]/10 hover:from-[#1A8781]/10 hover:to-[#125E5A]/15 rounded-lg border border-[#1A8781]/10 hover:border-[#1A8781]/20 transition-all duration-200 cursor-pointer"
                >
                  <Mail className="w-4 h-4 text-[#1A8781]" />
                  <span className="font-geist text-[14px] md:text-[18px] text-[#42434d]">
                    <span className="font-medium">Contatto:</span>{" "}
                    info@sunconsultants.co.in
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

FaqAuthorItalian.propTypes = {
  questionNumber: PropTypes.number,
};

export default FaqAuthorItalian;

/* eslint-disable react/prop-types */
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Check, Search, SlashIcon } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { useState, useRef, useEffect, useMemo } from "react";

import { Separator } from "@/components/ui/separator";
import {
    Table,
    TableBody,
    TableCell,
    TableHeader,
    TableRow,
    TableHead,
} from "@/components/ui/table";
import ScrollToTopButton from "@/components/common/ScrollToTop";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
// Contact Form Import
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";
import { ClockLoader } from "react-spinners";
import axios from "axios";
import BISImage from "../../assets/images/BIS.jpg";
import CDSCO from "../../assets/images/CDSCO.jpg";
import BISCRS from "../../assets/images/BISCRS.jpg";
import PlasticWasteManagement from "../../assets/images/PlasticWasteManagement.jpg";
import EPRCertificate from "../../assets/images/EPRCertificate.jpg";
import LMPC from "../../assets/images/LMPC.jpg";
import ISIMark from "../../assets/images/ISIMark.jpg";
import { BoxReveal } from "@/components/magicui/box-reveal";
import ServiceAuthorFrench from "@/components/manual/ServiceAuthor/ServiceAuthorFrench";
import FooterFrench from "@/components/manual/Footer/FooterFrench";
import ServicesRightSideContentFrench from "@/components/manual/ServicesRightSideContent/ServicesRightSideContentFrench";


const BASE_URL = import.meta.env.VITE_APP_BASE_URL;

const SchemeXFrench = () => {
    return (
        <div className="relative">
            {/* Scheme X French Meta Tags */}
            <SchemeXFrenchMetaTags />
            {/* Scheme X French Breadcrumb */}
            <SchemeXFrenchBreadcrumb />
            {/* Scheme X French Hero Section */}
            <SchemeXFrenchHero />
            {/* Scheme X French Index Section */}
            <SchemeXFrenchIndex />
            {/* Scheme X French Main Content Section */}
            <SchemeXFrenchMainContent />
            {/* Footer Section */}
            <FooterFrench />
            {/* Scroll To Top Button Section */}
            <ScrollToTopButton />

        </div>
    )
}

export default SchemeXFrench

const SchemeXFrenchMetaTags = () => {
    const breadcrumbStructuredData = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            {
                "@type": "ListItem",
                position: 1,
                name: "Accueil",
                item: window.location.origin + "/",
            },
            {
                "@type": "ListItem",
                position: 2,
                name: "Certification BIS Indienne sous le Schéma-X",
                item: window.location.href,
            },
        ],
    };
    return (
        <Helmet>
            {/* Basic Meta Tags */}
            <title>
                Certification BIS Schéma X | Sécurité des Machines et Équipements Électriques
            </title>
            <meta
                name="description"
                content="La certification BIS Schéma X est requise pour assurer la qualité et la sécurité des appareillages de commutation basse tension, des équipements de commande, des machines et des équipements électriques."
            />
            <meta
                name="keywords"
                content="Schéma X, BIS Schéma X, Certification BIS Schéma X, Certification Schéma X, certification de machines, certification d'équipements électriques"
            />

            <meta name="author" content="Dhruv Aggarwal" />
            <meta name="publisher" content="Sun Certifications India" />
            <meta name="robots" content="index, follow" />


            {/* Canonical URL */}
            <link rel="canonical" href={window.location.href} />

            {/* Open Graph Meta Tags */}
            <meta
                property="og:title"
                content="Certification BIS Schéma X | Sécurité des Machines et Équipements Électriques"
            />
            <meta
                property="og:description"
                content="La certification BIS Schéma X est requise pour assurer la qualité et la sécurité des appareillages de commutation basse tension, des équipements de commande, des machines et des équipements électriques."
            />

            <meta property="og:type" content="website" />
            <meta property="og:url" content={window.location.href} />

            {/* Twitter Meta Tags */}
            <meta
                name="twitter:title"
                content="Certification BIS Schéma X | Sécurité des Machines et Équipements Électriques"
            />
            <meta
                name="twitter:description"
                content="La certification BIS Schéma X est requise pour assurer la qualité et la sécurité des appareillages de commutation basse tension, des équipements de commande, des machines et des équipements électriques."
            />
            <meta name="twitter:card" content="summary_large_image" />

            {/* Breadcrumb Structured Data */}
            <script type="application/ld+json">
                {JSON.stringify(breadcrumbStructuredData)}
            </script>


        </Helmet>
    )
}
const SchemeXFrenchBreadcrumb = () => {
    return (
        <div className="absolute md:top-5 top-3 left-0 w-full z-30">
            <div className="max-w-[80rem] mx-auto px-4">
                <div className="w-fit font-inter">
                    <Breadcrumb>
                        <BreadcrumbList>
                            <BreadcrumbItem>
                                <BreadcrumbLink asChild>
                                    <Link to="/">Accueil</Link>
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator>
                                <SlashIcon />
                            </BreadcrumbSeparator>
                            <BreadcrumbItem>
                                <BreadcrumbPage>Certification BIS Indienne sous le Schéma-X
                                </BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>
            </div>
        </div>
    )
}

const SchemeXFrenchHero = () => {
    return (
        <main className="relative pt-[60px] md:pt-[104px] pb-[30px] md:pb-[106px] overflow-x-hidden bg-[#F9F7F2]">
            {/* Background gradient */}
            <div className="hidden md:block absolute inset-0 rounded-bl-full z-10 transform translate-x-1/2 custom-radial-gradient-cdsco"></div>

            {/* Decorative elements */}
            <div
                className="absolute top-[20%] z-[10] right-[15%] w-[20px] h-[20px] rounded-full bg-[#1A8781]/30 animate-float"
                style={{ animationDelay: "1s" }}
            ></div>

            <div className="max-w-[84rem] gap-[40px] md:gap-[90px] flex flex-col md:flex-row items-center justify-center h-full w-full mx-auto px-4 md:px-0">
                {/* Left Side */}
                <div className="relative flex flex-col gap-6 md:gap-8 w-full md:w-[533px] items-start">
                    <div className="inline-flex items-center">
                        <div className="h-[3px] w-[40px] bg-[#1A8781] mr-4"></div>
                        <span className="text-[#1A8781] font-poppins text-sm font-medium tracking-wider uppercase">
                            Expertise Certifiée
                        </span>
                    </div>

                    <h1 className="leading-[1.2] md:leading-[70px] z-[10] font-playfair font-bold text-[40px] md:text-[52px] text-[#1E1E1E] -mt-2">
                        <span className="relative">
                            Certification BIS Schéma X
                            <span className="absolute -bottom-2 left-0 w-[120px] h-[8px] bg-[#1A8781]/10 rounded-full"></span>
                        </span>
                    </h1>

                    <p className="font-poppins text-[18px] md:text-[20px] z-[10] leading-[1.6] md:leading-[40px] text-[#332156] max-w-[490px] -mt-2">
                        La certification BIS Schéma X couvre les machines, équipements électriques, assemblages de composants et sous-assemblages sous le Règlement Technique Omnibus (RTO).
                    </p>


                    <div className="flex items-center -mt-2">
                        <div
                            className="flex items-center cursor-pointer group"
                            onClick={() => {
                                const servicesSection = document.getElementById("services");
                                if (servicesSection) {
                                    servicesSection.scrollIntoView({
                                        behavior: "smooth",
                                        block: "start",
                                    });
                                }
                            }}
                        >
                            <div className="w-12 h-12 flex items-center justify-center rounded-full border-2 border-[#125E5A]/30 group-hover:border-[#125E5A] transition-all duration-300 mr-3">
                                <div className="w-3 h-3 border-t-2 border-r-2 border-[#125E5A] rotate-45 translate-x-[-1px]"></div>
                            </div>
                            <span className="font-geist text-[#125E5A] text-[18px] font-medium group-hover:translate-x-1 transition-all duration-300">
                                Voir les Services
                            </span>
                        </div>
                    </div>
                </div>

                {/* Right Side */}
                <SchemeXFrenchHeroContactForm />
            </div>

        </main>
    )
}

const SchemeXFrenchHeroContactForm = () => {
    const [loading, setLoading] = useState(false);

    // Function to get page name based on URL
    const getPageName = () => {
        const path = window.location.pathname;
        // Service pages
        if (path.includes("/fr/certification-bis-indienne-selon-schema-x"))
            return "Schéma X Français";
    };

    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phoneNumber: "",
        companyName: "",
        productName: "",
        message: "",
        pageUrl: window.location.href,
        pageName: getPageName(),
    });

    const { fullName, email, phoneNumber, companyName, productName, message } =
        formData;

    const handleOnChange = (e) => {
        setFormData((prevData) => ({
            ...prevData,
            [e.target.name]: e.target.value,
        }));
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        // console.log("Form Data:", formData);

        // Full name validation
        const nameRegex = /^[a-zA-Z\s.'-]{2,50}$/;
        if (!nameRegex.test(fullName)) {
            toast({
                variant: "destructive",
                title: "Veuillez entrer un nom complet valide.",
                description: "Le nom ne doit contenir que des lettres et des espaces.",
            });
            setLoading(false);
            return;
        }

        // Email validation - allow any domain
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        if (!emailRegex.test(email)) {
            toast({
                variant: "destructive",
                title: "Veuillez entrer une adresse e-mail valide.",
                description: "Vérifiez si le format de votre e-mail est correct",
            });
            setLoading(false);
            return;
        }

        // Phone number validation
        const phoneRegex = /^\+?[0-9\s-]{8,15}$/;
        if (!phoneRegex.test(phoneNumber)) {
            toast({
                variant: "destructive",
                title: "Veuillez entrer un numéro de téléphone valide",
                description: "Le numéro de téléphone doit contenir (8-15 chiffres)",
            });
            setLoading(false);
            return;
        }

        //  console.log(BASE_URL);
        try {
            const response = await axios.post(
                `${BASE_URL}/appointment/submit-appointment`,
                formData
            );

            if (!response.data.success) {
                throw new Error(response.data.message);
            }
            toast({
                title: "Formulaire de contact soumis avec succès !",
                description:
                    "Merci de nous avoir contactés. Notre équipe vous recontactera bientôt.",
            });

            setFormData({
                fullName: "",
                email: "",
                phoneNumber: "",
                companyName: "",
                productName: "",
                message: "",
                pageUrl: window.location.href,
                pageName: getPageName(),
            });
        } catch (error) {
            const errorMessage =
                error.response?.data?.message || "Quelque chose s&apos;est mal passé";
            toast({
                variant: "destructive",
                title: errorMessage || "Échec de la soumission des détails du formulaire de contact !",
                description:
                    "Quelque chose s&apos;est mal passé. Veuillez vérifier vos détails et réessayer.",
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="z-20 w-full md:w-[580px] h-auto md:h-[435px] flex flex-col">
            <div className="flex w-full items-center gap-3">
                <span className="uppercase font-poppins font-semibold text-[18px] md:text-[20px] text-[#008080]">
                    Contactez-nous
                </span>
                <Separator className="w-[94.46px] h-[2px] bg-[#008080]" />
            </div>

            <h3 className="text-[30px] md:text-[48px] font-inter font-bold text-[#1E1E1E]">
                Prendre un Rendez-vous
            </h3>

            <p className="font-medium font-poppins text-[18px] md:text-[20px] text-[#996C6C]">
                Vous voulez contacter notre équipe et planifier un appel ?
                <span className="text-black"> Essayez maintenant</span>
            </p>

            <form onSubmit={handleFormSubmit} className="flex flex-col mt-5 gap-5">
                <div className="flex flex-col md:flex-row items-center justify-between gap-5">
                    <Input
                        disabled={loading}
                        required
                        type="text"
                        name="fullName"
                        value={fullName}
                        onChange={handleOnChange}
                        placeholder="Nom Complet *"
                        className="disabled:opacity-100 w-full focus-visible:ring-1 focus-visible:ring-[#BDBDBD] focus-visible:ring-offset-0 bg-[#F9F9F9] border-2 border-[#BDBDBD] rounded-[12px] h-[54px] md:h-[58px] text-[#7E7E7E]/90 font-poppins font-semibold text-[15px] md:text-[16px] leading-[24px] tracking-wide px-5 placeholder:text-[#7E7E7E]/90 placeholder:font-poppins placeholder:font-semibold placeholder:leading-[24px] placeholder:tracking-wide"
                    />

                    <Input
                        disabled={loading}
                        required
                        type="email"
                        name="email"
                        value={email}
                        onChange={handleOnChange}
                        placeholder="Adresse E-mail *"
                        className="disabled:opacity-100 w-full focus-visible:ring-1 focus-visible:ring-[#BDBDBD] focus-visible:ring-offset-0 bg-[#F9F9F9] border-2 border-[#BDBDBD] rounded-[12px] h-[54px] md:h-[58px] text-[#7E7E7E]/90 font-poppins font-semibold text-[15px] md:text-[16px] leading-[24px] tracking-wide px-5 placeholder:text-[#7E7E7E]/90 placeholder:font-poppins placeholder:font-semibold placeholder:leading-[24px] placeholder:tracking-wide"
                    />
                </div>

                <div className="flex flex-col md:flex-row items-center justify-between gap-5">
                    <Input
                        disabled={loading}
                        required
                        type="tel"
                        name="phoneNumber"
                        value={phoneNumber}
                        onChange={handleOnChange}
                        placeholder="Numéro de Contact *"
                        className="disabled:opacity-100 w-full focus-visible:ring-1 focus-visible:ring-[#BDBDBD] focus-visible:ring-offset-0 bg-[#F9F9F9] border-2 border-[#BDBDBD] rounded-[12px] h-[54px] md:h-[58px] text-[#7E7E7E]/90 font-poppins font-semibold text-[15px] md:text-[16px] leading-[24px] tracking-wide px-5 placeholder:text-[#7E7E7E]/90 placeholder:font-poppins placeholder:font-semibold placeholder:leading-[24px] placeholder:tracking-wide"
                    />

                    <Input
                        disabled={loading}
                        required
                        type="text"
                        name="companyName"
                        value={companyName}
                        onChange={handleOnChange}
                        placeholder="Nom de l'Entreprise *"
                        className="disabled:opacity-100 w-full focus-visible:ring-1 focus-visible:ring-[#BDBDBD] focus-visible:ring-offset-0 bg-[#F9F9F9] border-2 border-[#BDBDBD] rounded-[12px] h-[54px] md:h-[58px] text-[#7E7E7E]/90 font-poppins font-semibold text-[15px] md:text-[16px] leading-[24px] tracking-wide px-5 placeholder:text-[#7E7E7E]/90 placeholder:font-poppins placeholder:font-semibold placeholder:leading-[24px] placeholder:tracking-wide"
                    />
                </div>

                <div className="flex flex-col md:flex-row items-center justify-between gap-5">
                    <Input
                        disabled={loading}
                        required
                        type="text"
                        name="productName"
                        value={productName}
                        onChange={handleOnChange}
                        placeholder="Nom du Produit *"
                        className="disabled:opacity-100 w-full focus-visible:ring-1 focus-visible:ring-[#BDBDBD] focus-visible:ring-offset-0 bg-[#F9F9F9] border-2 border-[#BDBDBD] rounded-[12px] h-[54px] md:h-[58px] text-[#7E7E7E]/90 font-poppins font-semibold text-[15px] md:text-[16px] leading-[24px] tracking-wide px-5 placeholder:text-[#7E7E7E]/90 placeholder:font-poppins placeholder:font-semibold placeholder:leading-[24px] placeholder:tracking-wide"
                    />

                    <Input
                        disabled={loading}
                        required
                        type="text"
                        name="message"
                        value={message}
                        onChange={handleOnChange}
                        placeholder="Certification Requise*"
                        className="disabled:opacity-100 w-full focus-visible:ring-1 focus-visible:ring-[#BDBDBD] focus-visible:ring-offset-0 bg-[#F9F9F9] border-2 border-[#BDBDBD] rounded-[12px] h-[54px] md:h-[58px] text-[#7E7E7E]/90 font-poppins font-semibold text-[15px] md:text-[16px] leading-[24px] tracking-wide px-5 placeholder:text-[#7E7E7E]/90 placeholder:font-poppins placeholder:font-semibold placeholder:leading-[24px] placeholder:tracking-wide"
                    />
                </div>

                <Button
                    disabled={loading}
                    type="submit"
                    className="disabled:opacity-100 mt-1 w-[218px] h-[50px] md:h-[60px] bg-[#1A8781] hover:bg-[#1A8781]/90 rounded-[5px] text-[15px] md:text-[15px] font-poppins tracking-wide leading-[28px] shadow-elegant transition-all duration-300 hover:translate-y-[-2px]"
                >
                    {loading ? (
                        <div className="flex gap-3 items-center justify-center">
                            <ClockLoader size={22} color="#fff" />
                            <span>Envoi en cours</span>
                        </div>
                    ) : (
                        <div className="flex gap-3 items-center justify-center">
                            <span>Prendre Rendez-vous</span>
                        </div>
                    )}
                </Button>
            </form>
        </div>
    );
};


const SchemeXFrenchIndex = () => {
    const [isSticky, setIsSticky] = useState(false);
    const [activeSection, setActiveSection] = useState("overview");
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const stickyRef = useRef(null);
    const mobileMenuRef = useRef(null);
    const toggleButtonRef = useRef(null);

    const SECTIONS = useMemo(
        () => [
            "overview",
            "process",
            "documents",
            "conclusion",
        ],
        []
    );

    const MENU_ITEMS = {
        overview: "Aperçu",
        process: "Processus",
        documents: "Documents",
        conclusion: "Conclusion",
    };

    const handleItemClick = (item) => {
        const element = document.getElementById(
            item.toLowerCase().replace(/\s+/g, "-")
        );
        if (element) {
            element.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
            setActiveSection(item);
            setIsMobileMenuOpen(false);
        }
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen((prevState) => !prevState);
    };

    // Close mobile menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                mobileMenuRef.current &&
                !mobileMenuRef.current.contains(event.target) &&
                toggleButtonRef.current &&
                !toggleButtonRef.current.contains(event.target)
            ) {
                setIsMobileMenuOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            if (stickyRef.current) {
                const rect = stickyRef.current.getBoundingClientRect();
                setIsSticky(rect.top <= 44);
            }
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll(); // Initial check

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        const handleScrollSpy = () => {
            const scrollPosition = window.scrollY + 200; // Offset for header

            for (let i = SECTIONS.length - 1; i >= 0; i--) {
                const section = SECTIONS[i];
                const element = document.getElementById(section);

                if (element) {
                    const offsetTop = element.offsetTop;

                    if (scrollPosition >= offsetTop) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener("scroll", handleScrollSpy);
        handleScrollSpy(); // Initial check

        return () => window.removeEventListener("scroll", handleScrollSpy);
    }, [SECTIONS]);

    return (
        <div
            ref={stickyRef}
            className={`sticky top-0 md:top-[44px] z-[50] transition-colors duration-300 w-full h-auto md:h-20 ${isSticky ? "bg-white/70 backdrop-blur-lg" : "bg-[#B9DEEB]"
                }`}
        >
            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center justify-between px-4 h-20">
                <div className="text-base font-semibold font-geist tracking-wider uppercase text-blue-900">
                    {MENU_ITEMS[activeSection]}
                </div>
                <button
                    ref={toggleButtonRef}
                    onClick={toggleMobileMenu}
                    className="p-2 rounded-md hover:bg-blue-100 transition-colors"
                    aria-label="Toggle menu"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-blue-900"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        {isMobileMenuOpen ? (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 15l7-7 7 7"
                            />
                        ) : (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 9l-7 7-7-7"
                            />
                        )}
                    </svg>
                </button>
            </div>

            {/* Mobile Menu Dropdown */}
            {isMobileMenuOpen && (
                <div
                    ref={mobileMenuRef}
                    className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg z-50 border-t border-gray-200"
                >
                    <div className="flex flex-col py-2">
                        {SECTIONS.map((item) => (
                            <div
                                key={item}
                                onClick={() => handleItemClick(item)}
                                className={`px-4 py-3 cursor-pointer transition-colors ${item === activeSection
                                    ? "bg-blue-50 text-blue-900 font-semibold"
                                    : "text-blue-950 hover:bg-blue-50"
                                    }`}
                            >
                                <div className="font-geist tracking-wider uppercase">
                                    {MENU_ITEMS[item]}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center justify-between px-12 h-full max-w-[88rem] mx-auto">
                {SECTIONS.map((item) => (
                    <div
                        key={item}
                        onClick={() => handleItemClick(item)}
                        className="relative cursor-pointer group whitespace-nowrap px-2"
                    >
                        <div
                            className={`text-base font-semibold font-geist tracking-wider uppercase transition-colors duration-300 ${item === activeSection
                                ? "text-blue-900"
                                : "text-blue-950 group-hover:text-blue-900"
                                }`}
                        >
                            {MENU_ITEMS[item]}
                        </div>
                        <div
                            className={`absolute bottom-0 left-0 w-full h-0.5 bg-blue-900 transition-transform duration-300 ${item === activeSection
                                ? "scale-x-100"
                                : "scale-x-0 group-hover:scale-x-100"
                                }`}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

const SchemeXFrenchMainContent = () => {
    return (
        <div>
            <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12">
                <div className="flex flex-col md:flex-row gap-6 md:gap-[48px] w-full">
                    {/* Left Side */}
                    <SchemeXFrenchMainContentLeft />
                    {/* Right Side */}
                    <ServicesRightSideContentFrench />
                </div>
            </div>
            <SchemeXFrenchServiceFaq />
            <SchemeXFrenchProductTable />
            <div id="services">
                <ServicesFrench />
            </div>
        </div>
    )
}

export const ServicesFrench = () => {
    return (
        <div className="pt-6 md:pt-12 pb-12  md:pb-16  overflow-x-hidden ">
            <div className="max-w-[80rem] w-full mx-auto">
                <div className="flex flex-col items-center justify-center">
                    <BoxReveal boxColor={"#B6B4DF"} duration={0.5}>
                        <h2 className="text-[30px] md:text-[48px] font-bold font-geist md:font-geist  text-center text-[#1E1E1E] ">
                            Nos Services
                        </h2>
                    </BoxReveal>

                    <BoxReveal boxColor={"#B6B4DF"} duration={0.5}>
                        <div className="hidden md:flex items-center w-[608.46px] gap-3 h-[35px] mx-auto justify-center">
                            <Separator className="w-[94.46px] h-[2px] bg-[#008080]" />
                            <span className="uppercase font-poppins font-semibold text-[20px] text-[#008080]">
                                Meilleur Consultant en Certificats d&apos;Inde
                            </span>
                            <Separator className="w-[94.46px] h-[2px] bg-[#008080]" />
                        </div>
                    </BoxReveal>
                </div>

                <div className="mt-16 md:mt-24 grid grid-cols-2 md:grid-cols-4 gap-x-3 md:gap-x-10 px-4 md:px-0 gap-y-12 md:gap-y-24">
                    <Link
                        to="/a-guide-to-bis-certification-for-foreign-manufacturers-indian-bis"
                        className="relative col-span-1 h-[145px] md:h-[240px] bg-[#B5DDEB] rounded-[15px] md:rounded-[20px] shadow-2xl shadow-blue-500/20 flex items-center justify-center md:block hover:scale-105 transition-all duration-300"
                    >
                        <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
                            <img
                src={BISImage}
                alt="BIS Logo"
                title="BIS Logo"
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
                            />
                        </div>
                        <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
                            Marque BIS (Licence ISI) pour Fabrication Étrangère
                        </p>
                    </Link>

                    <Link
                        to="/cdsco-registration-certification"
                        className="relative col-span-1 h-[145px] md:h-[240px] bg-[#B5DDEB] rounded-[15px] md:rounded-[20px] shadow-2xl shadow-blue-500/20 flex items-center justify-center md:block"
                    >
                        <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
                            <img
                                src={CDSCO}
                                alt="CDSCO"
                                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
                            />
                        </div>
                        <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
                            Certification d&apos;Enregistrement CDSCO
                        </p>
                    </Link>

                    <Link
                        to="/what-is-crs-bis-or-crs-registration"
                        className="relative col-span-1 h-[145px] md:h-[240px] bg-[#B5DDEB] rounded-[15px] md:rounded-[20px] shadow-2xl shadow-blue-500/20 flex items-center justify-center md:block"
                    >
                        <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
                            <img
                                src={BISCRS}
                                alt="BISCRS"
                                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
                            />
                        </div>
                        <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
                            Enregistrement BIS (CRS)
                        </p>
                    </Link>

                    <Link
                        to="/epr-certificate-for-plastic-waste-management-pwm"
                        className="relative col-span-1 h-[145px] md:h-[240px] bg-[#B5DDEB] rounded-[15px] md:rounded-[20px] shadow-2xl shadow-blue-500/20 flex items-center justify-center md:block"
                    >
                        <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
                            <img
                                src={PlasticWasteManagement}
                                alt="PlasticWasteManagement"
                                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
                            />
                        </div>
                        <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
                            Gestion des Déchets Plastiques
                        </p>
                    </Link>

                    <Link
                        to="/a-guide-on-how-to-obtain-epr-certificate"
                        className="relative col-span-1 h-[145px] md:h-[240px] bg-[#B5DDEB] rounded-[15px] md:rounded-[20px] shadow-2xl shadow-blue-500/20 flex items-center justify-center md:block"
                    >
                        <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
                            <img
                                src={EPRCertificate}
                                alt="EPRCertificate"
                                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
                            />
                        </div>
                        <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
                            Certifications Certificat EPR
                        </p>
                    </Link>

                    <Link
                        to="/a-guide-on-how-to-obtain-lmpc-certificate"
                        className="relative col-span-1 h-[145px] md:h-[240px] bg-[#B5DDEB] rounded-[15px] md:rounded-[20px] shadow-2xl shadow-blue-500/20 flex items-center justify-center md:block"
                    >
                        <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
                            <img
                                src={LMPC}
                                alt="LMPC"
                                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
                            />
                        </div>
                        <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
                            Certifications Certificat LMPC
                        </p>
                    </Link>

                    <Link
                        to="/what-is-bis-certificate-indian-bis"
                        className="relative col-span-1 h-[145px] md:h-[240px] bg-[#B5DDEB] rounded-[15px] md:rounded-[20px] shadow-2xl shadow-blue-500/20 flex items-center justify-center md:block"
                    >
                        <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
                            <img
                src={BISImage}
                alt="BIS Logo"
                title="BIS Logo"
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
                            />
                        </div>
                        <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
                            Certificat d&apos;Enregistrement BIS
                        </p>
                    </Link>

                    <Link
                        to="/a-guide-to-bis-certification-indian-bis"
                        className="relative col-span-1 h-[145px] md:h-[240px] bg-[#B5DDEB] rounded-[15px] md:rounded-[20px] shadow-2xl shadow-blue-500/20 flex items-center justify-center md:block"
                    >
                        <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
                            <img
                                src={ISIMark}
                                alt="ISIMark"
                                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
                            />
                        </div>
                        <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
                            MARQUE ISI (BIS) pour Fabricants Indiens
                        </p>
                    </Link>
                </div>
            </div>
        </div>
    );
};

const SchemeXFrenchProductTable = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const table2Ref = useRef(null);
    const table3Ref = useRef(null);

    return (
        <div className="w-full pb-12">
            <div className="max-w-[88rem] mx-auto px-4 md:px-12">

                <div className="flex flex-col gap-2 mt-6">
                    <h2 className="text-[28px] md:text-[40px] font-roboto font-bold text-[#131316] leading-none">
                        Norme de Sécurité par Produit
                    </h2>

                    <p className="font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-none mb-6">
                        Description des Machines et Équipements Électriques
                    </p>
                </div>

                <div className="relative mb-6">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                        <Search className="w-5 h-5 text-gray-400" />
                    </div>
                    <input
                        type="text"
                        placeholder={
                            "Rechercher par description ou code HS..."
                        }
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full p-3 pl-12 text-base font-geist text-gray-800 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#1A8781] focus:border-transparent transition-shadow hover:shadow-md"
                    />
                </div>
            </div>

            <div ref={table2Ref}>
                <TypeBTableFrench tableRef={table2Ref} searchQuery={searchQuery} />
            </div>
            <div ref={table3Ref}>
                <TypeCTableFrench searchQuery={searchQuery} />
            </div>

        </div>
    )
}

const productDataTableThird = [
    {
        id: 1,
        description: "Tous types de pompes pour la manipulation de liquides, élévateurs de liquides",
        hsCode: "841340, 841350, 841360, 841370, 841381, 841382, 841391 and 841392",
        indianStandard: "-",
        title: "-",
    },
    {
        id: 2,
        description: "Tous types de compresseurs",
        hsCode:
            "841430, 841440, 84148011, 84148090, 84149011,84149019, 84149040 and 84149090",
        indianStandard: "Clause 16 de IS 17093:2019\nClause 6.6 de IS 12258:1987",
        title:
            "Conditions d&apos;approvisionnement technique pour compresseurs d&apos;air alternatifs pour applications générales et industrielles\nCondition d&apos;approvisionnement technique pour compresseurs à vis d&apos;air (Inondés d&apos;Huile) pour applications générales et industrielles",
    },
    {
        id: 3,
        description:
            "Tous types de machines pour le traitement de matériaux par un processus impliquant un changement de température",
        hsCode:
            "841932, 841939, 841940, 841950, 841960, 841981, 841989 and 84199090",
        indianStandard: "-",
        title: "-",
    },
    {
        id: 4,
        description: "ou machines de purification pour liquides et gaz",
        hsCode: "842122, 842129, 842131, 842139, 842191 and 842199",
        indianStandard: "-",
        title: "-",
    },
    {
        id: 5,
        description:
            "Tous types de machines pour le remplissage, fermeture, scellage, étiquetage de bouteilles, emballage ou enveloppage",
        hsCode: "842220, 842230, 842240 and 842290",
        indianStandard: "-",
        title: "-",
    },
    {
        id: 6,
        description: "Tous types de grues",
        hsCode:
            "842611, 842612, 842619, 842620, 842630, 842641, 842649, 842691 and 84269990",
        indianStandard:
            "Clause 66.1, 66.1.1, 66.1.2, 66.1.3, 66.2, 66.2.1, 66.2.2, 66.3, 66.4, 66.5 et 66.6 de IS 3177:2020\nClause 8.1, 8.2, 8.3 & 45 de IS 4573:2020\nIS/ISO 15442:2012",
        title:
            "Code de Pratique pour Grues de Pont Électriques et Grues Portiques pour toutes Applications\nSpécification des Grues Mobiles à Entraînement Mécanique\nGrues - Exigences de sécurité pour grues chargeuses",
    },
    {
        id: 7,
        description: "Tous types de machines pour la construction",
        hsCode: "8429, 843010, 843020, 843031, 843039, 843041",
        indianStandard:
            "IS 17055 (Partie 7): 2020\nIS 17055 (Partie 8): 2020\nIS 17055 (Partie 12): 2020",
        title:
            "Sécurité des Machines de Terrassement Partie 7 Décapeuses\nExigences des Machines de Terrassement pour Niveleuses\nSécurité des Machines de Terrassement Partie 12 Finisseurs Routiers",
    },
    {
        id: 8,
        description: "Tous types de machines à tisser (métiers à tisser)",
        hsCode: "8446, 844811, 844819, 844842 and 844849",
        indianStandard: "IS 17361 (Partie 6) : 2020 / ISO 11111 (Partie 6) : 2005",
        title:
            "Exigences de Sécurité des Machines Textiles Partie 6 Machines de Fabrication de Tissus",
    },
    {
        id: 9,
        description: "Tous types de machines pour faire de la broderie.",
        hsCode: "84479020 and 844859",
        indianStandard: "IS 17361 (Partie 1): 2020 / ISO 11111 (Partie 1) : 2016",
        title: "Exigences de Sécurité des Machines Textiles Partie 1 Exigences Communes",
    },
    {
        id: 10,
        description: "Tous types de machines de découpe de métaux",
        hsCode: "8456, 8457, 8458, 8459, 8460, 8461 and 846693",
        indianStandard:
            "IS 17277 (Partie 1): 2019\nISO 16092-1 : 2017\nIS 17259: 2020\nISO 28881 : 2013\nIS 17258: 2019\nISO 23125 : 2015\nIS 17254:2019\nISO 16093 : 2017\nIS 17253 (Partie 1): 2019\nISO 16090-1 : 2017",
        title:
            "Sécurité des Machines-Outils Presses Partie 1 Exigences de Sécurité Générales\nSécurité des Machines-Outils Machines à Décharge Électrique\nSécurité des Machines-Outils Machines de Tournage\nSécurité des Machines-Outils Machines de Sciage pour Métal Froid\nSécurité des Machines-Outils Centres d&apos;Usinage, Fraiseuses, Machines de Transfert Partie 1 Exigences de Sécurité",
    },
    {
        id: 11,
        description:
            "Tous types de machines-outils pour travailler la pierre, la céramique, le béton, le ciment d&apos;amiante ou le verre minéral similaire",
        hsCode: "8464 and 84669100",
        indianStandard: "-",
        title: "-",
    },
    {
        id: 12,
        description: "Tous types de machines pour travailler le caoutchouc et les plastiques",
        hsCode: "8477",
        indianStandard: "IS/ISO 20430: 2020",
        title:
            "Machines de Plastiques et Caoutchouc-Machines de Moulage par Injection-Exigences de Sécurité",
    },
    {
        id: 13,
        description:
            "Tous types de machines incluant les machines pour travaux publics et construction et les machines et appareils mécaniques ayant des fonctions individuelles, non spécifiés",
        hsCode: "84791000, 84798999 and 84799090",
        indianStandard: "-",
        title: "-",
    },
    {
        id: 14,
        description:
            "All types of gears and gearing, toothed wheels, chain sprocket, transmission elements ball or roller screws, gear boxes and speed changers, including torque converters And (or)their assemblies /sub-assemblies /components",
        hsCode: "84834000 and 84839000",
        indianStandard: "-",
        title: "-",
    },
    {
        id: 15,
        description:
            "All types of Rotary electrical machines such as Generator, etc. Building and the machinery & mechanical appliances having individual functions, not specified",
        hsCode: "8501 and 8503",
        indianStandard:
            "Clause 4.7, 4.8 and 4.12 of section 2,\nclause 7.4 of Section 3, clause 8.6 of Section 4,\nClause 9.4 of section 5 of IS 5422:1996\nClause 11, 21, 22, 23, 25 and 26 of IS 13364\n(Part 1): 1992\nClause 11, 21, 22 23 25 and 26 of IS 13364\n(Part 2): 1992",
        title:
            "Turbine type generation\nAc generators driven by reciprocating internal\ncombustion engines - Specification: Part 1\nalternators rated up to 20 kVa\nAc generators driven by reciprocating internal\ncombustion engines - Specification: Part 2\nalternators rated above 20 kVa and up to 1250 kVa",
    },
    {
        id: 16,
        description: "All types of Diesel Generator",
        hsCode: "8502 and 8503",
        indianStandard:
            "Clause 5,6,7,8, 9 & 10 of IS/ISO 8528 (Part 2) : 2018\nClause 6 & 10 of IS/ISO 8528 (Part 3)\nClause 4, 5.5, 7.3.5, 7.3.7 & 7.4 of IS/ISO 8528 (Part 4): 2005\nClause 12, 13, 14, 15 of IS/ISO 8528-5: 2018\nClause 6.4 of IS/ISO 8528 (Part 8): 2016\nClause 9.1 of IS/ISO 8528 (Part 12): 1997",
        title:
            "Reciprocating Internal Combustion Engine Driven Alternating Current Generating Sets : Part 2 Engines\nReciprocating internal combustion engine driven alternating current generating sets: Part 3 alternating current generators for generating sets\nReciprocating internal combustion engine driven alternating current generating sets: Part 4 control gear and switchgear\nReciprocating Internal Combustion Engine Driven Alternating Current Generating Sets Part 5 Generating Sets\nReciprocating internal combustion engine driven alternating current generating sets: Part 8\nReciprocating internal combustion engine driven alternating current generating sets: Part 12 emergency power supply to safety",
    },
    {
        id: 17,
        description: "All types of Transformer",
        hsCode:
            "850421, 850422, 850423, 850431, 850432, 850433, 850434 and 850490.",
        indianStandard:
            "IS/IEC 61558-2-4 : 2009\nIS/IEC 61558-2-6 : 1997\nIS/IEC 61558-2-7 : 2007\nClause 5.6 & Cl 10 of IS 2026 (Part 1)\nClause 7.5, 7.6, 7.7 of IS 2026 (Part 6)",
        title:
            "Safety of Transformers, Reactors, Power Supply Units and Similar Product for Supply Voltages up to 1100 V Part 2-4: Particular Requirements and Tests for Isolating Transformers and Power Supply Units Incorporating\nSafety of power transformers, power supply units and similar: Part 2 particular requirement: Sec 6 safety isolating transformers for general use\nSafety of power transformers, power supplies reactors and similar products: Part 2-7 particular requirements and tests for transformers and power supplies for toys\nPower transformers: Part 1 general\nPower transformers: Part 6 reactors",
    },
    {
        id: 18,
        description: "All types of Power Semiconductor Converter",
        hsCode: "850440",
        indianStandard: "IS 16539-1-1:2017/ IEC 60146-1-1: 2009",
        title: "Clause 7 of Semicounductor Converters Part 1 General Requirements and Line Commutated Converters Section 1 Specification of basic requirements",
    },
    {
        id: 19,
        description:
            "All types of switch gear and control gear equipment operating at voltages not exceeding 1000 volts and (or) their assemblies /sub-assemblies /components",
        hsCode: "8536, 8537 and 8538",
        indianStandard: "Clause 8 of IS/IEC 61439 (Part 3): 2012",
        title:
            "Low-Voltage switchgear and control gear assemblies: Part 3 distribution boards intended to be operated by ordinary persons (DBO)",
    },
    {
        id: 20,
        description:
            "All types of switch gear and control gear equipment operating at voltages exceeding 1000 volts and (or) their assemblies /sub-assemblies /components",
        hsCode: "8535, 8537 and 8538",
        indianStandard: "-",
        title: "-",
    },
];

const TypeCTableFrench = ({ searchQuery }) => {
    // Filter data based on search query
    const filteredData = productDataTableThird.filter(item => {
        if (!searchQuery) return true;
        const query = searchQuery.toLowerCase();
        return (
            item.description.toLowerCase().includes(query) ||
            item.hsCode.toLowerCase().includes(query) ||
            item.indianStandard.toLowerCase().includes(query) ||
            item.title.toLowerCase().includes(query)
        );
    });

    return (
        <div className="max-w-[88rem] mx-auto px-4 md:px-12 mt-12">
            <p className="font-geist font-bold text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-none mb-6">
                TYPE C (Normes de Sécurité des Machines traitant des exigences de sécurité détaillées
                pour une machine particulière ou un groupe de machines)
            </p>

            <div className="rounded-md border bg-white shadow-sm">
                <Table>
                    <TableHeader>
                        <TableRow className="bg-[#F9F7F2] hover:bg-[#F9F7F2]/80">
                            <TableHead className="font-semibold font-geist text-left text-base md:text-lg w-[80px] border-r border-gray-300">
                                N° S.
                            </TableHead>
                            <TableHead className="font-semibold font-geist text-left text-base md:text-lg border-r border-gray-300">
                                Description des Machines et Équipements Électriques
                            </TableHead>
                            <TableHead className="font-semibold font-geist text-left text-base md:text-lg border-r border-gray-300">
                                Code HS
                            </TableHead>
                            <TableHead className="font-semibold font-geist text-left text-base md:text-lg border-r border-gray-300">
                                Norme Indienne/Clause Spécifique de la Norme Indienne
                            </TableHead>
                            <TableHead className="font-semibold font-geist text-left text-base md:text-lg">
                                Titre de la Norme Indienne
                            </TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {filteredData.length > 0 ? (
                            filteredData.map((item) => (
                                <TableRow key={item.id}>
                                    <TableCell className="font-medium font-geist text-base md:text-lg text-left border-r border-gray-200">
                                        {item.id}
                                    </TableCell>
                                    <TableCell className="font-geist text-base md:text-lg text-left border-r border-gray-200">
                                        {item.description}
                                    </TableCell>
                                    <TableCell className="font-geist text-base md:text-lg text-left border-r border-gray-200">
                                        {item.hsCode}
                                    </TableCell>
                                    <TableCell className="font-geist text-base md:text-lg text-left border-r border-gray-200">
                                        {item.indianStandard.split("\n").map((line, idx) => (
                                            <div key={idx}>{line}</div>
                                        ))}
                                    </TableCell>
                                    <TableCell className="font-geist text-base md:text-lg text-left">
                                        {item.title.split("\n").map((line, idx) => (
                                            <div key={idx}>{line}</div>
                                        ))}
                                    </TableCell>
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell colSpan={5} className="text-center py-8 font-geist text-gray-500">
                                    Aucun résultat trouvé pour &quot;{searchQuery}&quot;
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
};

const productDataTableSecond = [
    {
        id: 1,
        isNumber: "IS 16504 (Part 1):2019/IEC 60204-1:2016",
        title:
            "Safety of Machinery Electrical Equipment of Machines Part 1 General Requirements",
    },
    {
        id: 2,
        isNumber: "IS 16504 (Part 11) : 2020 /IEC 60204-11 : 2018",
        title:
            "Safety of Machinery - Electrical Equipment of Machines Part 11 Requirements for Equipment for Voltages above 1 000 V AC or 1 500 V DC and not Exceeding 36 kV",
    },
    {
        id: 3,
        isNumber: "IS/IEC 61508 (Part 1): 2010",
        title:
            "Functional Safety of Electrical-Electronic-Programmable Electronic Safety-related Systems Part 1- General Requirements",
    },
    {
        id: 4,
        isNumber: "IS/IEC 60529 : 2001",
        title: "Degree of Protection Provided by Enclosures (IP Code)",
    },
    {
        id: 5,
        isNumber: "IS 16806 (Part 1) : 2018/ ISO 29042-1 : 2008",
        title:
            "Safety of machinery - Evaluation of the emission of airborne hazardous substances - Part 1: Selection of test methods",
    },
    {
        id: 6,
        isNumber: "IS 16806 (Part 2) : 2018/ ISO 29042-2 : 2009",
        title:
            "Safety of Machinery Evaluation of the Emission of Airborne Hazardous Substances Part 2 Tracer Gas Method for the Measurement of the Emission Rate of a Given Pollutant",
    },
    {
        id: 7,
        isNumber: "IS 16806 (Part 3) : 2018/ ISO 29042-3 : 2009",
        title:
            "Safety of machinery - Evaluation of the emission of airborne hazardous substances - Part 3: Test bench method for the measurement of the emission rate of a given pollutant",
    },
    {
        id: 8,
        isNumber: "IS 16806 (Part 4) : 2018/ ISO 29042-4 : 2009",
        title:
            "Safety of machinery - Evaluation of the emission of airborne hazardous substances - Part 4: Tracer method for the measurement of the capture efficiency of an exhaust system",
    },
    {
        id: 9,
        isNumber: "IS 16806 (Part 5) : 2018/ ISO 29042-5 : 2010",
        title:
            "Safety of machinery - Evaluation of the emission of airborne hazardous substances - Part 5: Test bench method for the measurement of the separation efficiency by mass of air cleaning systems with unducted outlet",
    },
    {
        id: 10,
        isNumber: "IS 16806 (Part 6) : 2018/ ISO 29042-6 : 2010",
        title:
            "Safety of machinery - Evaluation of the emission of airborne hazardous substances - Part 6 : Test bench method for the measurement of the separation efficiency by mass of air cleaning systems with ducted outlet",
    },
    {
        id: 11,
        isNumber: "IS 16806 (Part 7) : 2018/ ISO 29042-7 : 2010",
        title:
            "Safety of machinery - Evaluation of the emission of airborne hazardous substances - Part 7: Test bench method for the measurement of the pollutant concentration parameter",
    },
    {
        id: 12,
        isNumber: "IS 16806 (Part 8) : 2018/ ISO 29042-8 : 2011",
        title:
            "Safety of machinery - Evaluation of the emission of airborne hazardous substances - Part 8: Room method for the measurement of the pollutant concentration parameter",
    },
    {
        id: 13,
        isNumber: "IS 16806 (Part 9) : 2018/ ISO 29042-9 : 2011",
        title:
            "Safety of machinery - Evaluation of the emission of airborne hazardous substances - Part 9: Decontamination index",
    },
    {
        id: 14,
        isNumber: "IS 10481:2020/ ISO 4413:2010",
        title:
            "Hydraulic Fluid Power- General Rules and Safety Requirements for Systems and their Components",
    },
    {
        id: 15,
        isNumber: "IS 12725:2021/ ISO 4414:2010",
        title:
            "Pneumatic Fluid Power- General Rules and Safety Requirements for Systems and their Components",
    },
    {
        id: 16,
        isNumber: "IS ISO 3457 : 2003",
        title: "Earth Moving Machinery - Guards - Definitions and Requirements",
    },
    {
        id: 17,
        isNumber: "IS 16501 : 2017/IEC 62061 : 2005",
        title:
            "Safety of Machinery-Functional Safety of Safety-Related Electrical Electronic and Programmable Electronic Control Systems",
    },
    {
        id: 18,
        isNumber: "IS 16502 (Part 2) : 2017/ IEC 61496-2 : 2013",
        title:
            "Safety of Machinery - Electro-Sensitive Protective Equipment Part 2 Particular Requirements for Equipment Using Active Opto-Electronic Protective Devices AOPDs",
    },
    {
        id: 19,
        isNumber: "IS 16503 (Part 3) : 2017/ IEC 61310-3 : 2007",
        title:
            "Safety of Machinery- Indication Marking and Actuation Part 3 Requirements for the Location and Operation of Actuators",
    },
    {
        id: 20,
        isNumber: "IS 16504 (Part 32) : 2017/IEC 60204-32 : 2008",
        title:
            "Safety of Machinery-Electrical Equipment of Machines Part 32 Requirements for Hoisting Machines",
    },
    {
        id: 21,
        isNumber: "IS 16503 (Part 1) : 2017/ IEC 61310-1 : 2007",
        title:
            "Safety of Machinery - Indication Marking and Actuation Part 1 Requirements for Visual Acoustic and Tactile Signals",
    },
    {
        id: 22,
        isNumber: "IS 16594 (Part 1) : 2017/ IEC 61496-1 : 2012",
        title:
            "Safety of Machinery - Electro-Sensitive Protective Equipment Part 1 General Requirements and Tests",
    },
    {
        id: 23,
        isNumber: "IS 16936 : 2018/ IEC TR 62513: 2008",
        title:
            "Safety of Machinery Guidelines for the Use of Communication Systems in Safety Related Applications",
    },
    {
        id: 24,
        isNumber: "IS 16503 (Part 2) : 2017/ IEC 61310-2 : 2007",
        title:
            "Safety of Machinery - Indication Marking and Actuation Part 2 Requirements for Marking",
    },
    {
        id: 25,
        isNumber: "IS 16807: 2020/",
        title: "Safety of Machinery Fire Prevention and Fire Protection",
    },
    {
        id: 26,
        isNumber: "IS 16808 : 2018/ ISO 14159 : 2002",
        title:
            "Safety of Machinery Hygiene Requirements for the Design of Machinery",
    },
    {
        id: 27,
        isNumber: "IS 16809 ( Part 1) : 2018/ ISO 14122-1 : 2016",
        title:
            "Safety of Machinery Permanent Means of Access to Machinery Part 1 Choice of Fixed Means and General Requirements of Access",
    },
    {
        id: 28,
        isNumber: "IS 16809 (Part 2) : 2018/ ISO 14122-2 : 2016",
        title:
            "Safety of Machinery Permanent Means of Access to Machinery Part 2 Working Platforms and Walkways",
    },
    {
        id: 29,
        isNumber: "IS 16809 (Part 3) : 2018/ ISO 14122-3 : 2016",
        title:
            "Safety of Machinery Permanent Means of Access to Machinery Part 3 Stairs Stepladders and Guard-Rails",
    },
    {
        id: 30,
        isNumber: "IS 16809 (Part 4) : 2018/ ISO 14122-4 : 2016",
        title:
            "Safety of Machinery Permanent Means of Access to Machinery Part 4 Fixed Ladders",
    },
    {
        id: 31,
        isNumber: "IS 16810 (Part 1) : 2018/ ISO 13849-1 : 2015",
        title:
            "Safety of Machinery Safety Related Parts of Control Systems Part 1 General Principles for Design",
    },
    {
        id: 32,
        isNumber: "IS 16810 (Part 2) : 2018/ ISO 13849-2 : 2012",
        title:
            "Safety of Machinery Safety Related Parts of Control Systems Part 2 Validation",
    },
    {
        id: 33,
        isNumber: "IS 16811: 2018/ 14120 : 2015",
        title:
            "Safety of Machinery Guards General Requirements for the Design and Construction of Fixed and Movable Guards",
    },
    {
        id: 34,
        isNumber: "IS 16812 : 2018/ ISO 14119 : 2013",
        title:
            "Safety of Machinery Interlocking Devices Associated with Guards Principles for Design and Selection",
    },
    {
        id: 35,
        isNumber: "IS 16813 : 2019/ ISO 14118 : 2017",
        title: "Safety of Machinery Prevention of Unexpected Start-Up",
    },
    {
        id: 36,
        isNumber: "IS 16814 : 2021/ ISO 13857: 2019",
        title:
            "Safety of Machinery Safety Distances to Prevent Hazard Zones Being Reached by Upper and Lower Limbs",
    },
    {
        id: 37,
        isNumber: "IS 16815 : 2019/ ISO 13855: 2010",
        title:
            "Safety of Machinery Positioning of Safeguards with Respect to the Approach Speeds of Parts of the Human Body",
    },
    {
        id: 38,
        isNumber: "IS 16816 : 2019/ ISO 13854 : 2017",
        title:
            "Safety of Machinery Minimum Gaps to Avoid Crushing of Parts of the Human Body",
    },
    {
        id: 39,
        isNumber: "IS 16817: 2020/ ISO 13851 : 2019",
        title:
            "Safety of Machinery Two-Hand Control Devices Principles for Design and Selection",
    },
    {
        id: 40,
        isNumber: "IS 16818 : 2018/ ISO 13850 : 2015",
        title: "Safety of Machinery Emergency Stop Function Principles for Design",
    },
    {
        id: 41,
        isNumber: "IS 16912 : 2018/ ISO 21469 : 2006",
        title:
            "Safety of Machinery Lubricants with Incidental Product -- Contact Hygiene Requirements",
    },
    {
        id: 42,
        isNumber: "IS 16834 (Part 1) : 2018/ ISO 14123-1 : 2015",
        title:
            "Safety of machinery - Reduction of risks to health resulting from hazardous substances emitted by machinery - Part 1: Principles and specifications for machinery manufacturers",
    },
    {
        id: 43,
        isNumber: "IS 16834 (Part 2) : 2018/ ISO 14123-2 : 2015",
        title:
            "Safety of machinery - Reduction of risks to health resulting from hazardous substances emitted by machinery - Part 2: Methodology leading to verification procedures",
    },
    {
        id: 44,
        isNumber: "IS 16835 (Part 1) : 2018/ ISO 13856-1 : 2013",
        title:
            "Safety of machinery - Pressure-sensitive protective devices - Part 1: General principles for design and testing of pressure- sensitive mats and pressure-sensitive floors",
    },
    {
        id: 45,
        isNumber: "IS 16835 (Part 2) : 2018/ ISO 13856-2 : 2013",
        title:
            "Safety of machinery - Pressure-sensitive protective devices - Part 2: General principles for design and testing of pressure- sensitive edges and pressure-sensitive bars",
    },
    {
        id: 46,
        isNumber: "IS 16835 (Part 3) : 2018/ ISO 13856-3 : 2013",
        title:
            "Safety of machinery - Pressure-sensitive protective devices - Part 3: General principles for design and testing of pressure-sensitive bumpers, plates, wires and similar devices.",
    },
    {
        id: 47,
        isNumber: "IS 16569: 2018/ ISO 11429:1996",
        title:
            "Ergonomics- System of Auditory and Visual Danger and Information Signals",
    },
    {
        id: 48,
        isNumber: "IS 16563 (Part 2) : 2017/ ISO 9355-2:1999",
        title:
            "Ergonomic Requirements for the Design of Displays and Control Actuators Part 2 Displays",
    },
    {
        id: 49,
        isNumber: "IS 16563 (Part 3) 2017 / ISO 9355-3:2006",
        title:
            "Ergonomic Requirements for the Design of Displays and Control Actuators Part 3 Control Actuators",
    },
    {
        id: 50,
        isNumber: "IS 16572 : 2017/ ISO 14738 : 2002",
        title:
            "Safety of Machinery - Anthropometric Requirements for the Design of Workstations at Machinery",
    },
    {
        id: 51,
        isNumber: "IS 16562 ( Part 1) : 2017/ ISO 15536-1 : 2005",
        title:
            "Ergonomics - Computer Manikins and Body Templates Part 1 General Requirements",
    },
    {
        id: 52,
        isNumber: "IS 16569:2018/ ISO 11429: 1996",
        title:
            "Ergonomics - System of auditory and visual danger and information signals",
    },
    {
        id: 53,
        isNumber: "IS 15296 : 2017/ ISO 11161: 2007",
        title:
            "Industrial Automation Systems - Safety of Integrated Manufacturing Systems - Basic Requirements",
    },
];
const TypeBTableFrench = ({ tableRef, searchQuery }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 20;

    // Filter data based on search query
    const filteredData = productDataTableSecond.filter(item => {
        if (!searchQuery) return true;
        const query = searchQuery.toLowerCase();
        return (
            item.isNumber.toLowerCase().includes(query) ||
            item.title.toLowerCase().includes(query)
        );
    });

    // Reset to first page when search query changes
    useEffect(() => {
        setCurrentPage(1);
    }, [searchQuery]);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredData.slice(
        indexOfFirstItem,
        indexOfLastItem
    );

    const totalPages = Math.ceil(filteredData.length / itemsPerPage);

    const scrollToTableTop = () => {
        if (tableRef?.current) {
            tableRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
            setTimeout(() => scrollToTableTop(), 100);
        }
    };

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
            setTimeout(() => scrollToTableTop(), 100);
        }
    };

    return (
        <div className="max-w-[88rem] mx-auto px-4 md:px-12 mt-12">
            <p className="font-geist font-bold text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-none mb-6">
                TYPE B (Normes de Sécurité Génériques traitant d&apos;un aspect de sécurité ou plus
                d&apos;un type de protection qui peut être utilisé dans une large gamme de
                machines)
            </p>

            <div className="rounded-md border bg-white shadow-sm">
                <Table>
                    <TableHeader>
                        <TableRow className="bg-[#F9F7F2] hover:bg-[#F9F7F2]/80">
                            <TableHead className="font-semibold font-geist text-left text-base md:text-lg w-[80px] border-r border-gray-300">
                                N° S.
                            </TableHead>
                            <TableHead className="font-semibold font-geist text-left text-base md:text-lg border-r border-gray-300">
                                Numéro IS
                            </TableHead>
                            <TableHead className="font-semibold font-geist text-left text-base md:text-lg">
                                Titre
                            </TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {currentItems.length > 0 ? (
                            currentItems.map((item) => (
                                <TableRow key={item.id}>
                                    <TableCell className="font-medium font-geist text-base md:text-lg text-left border-r border-gray-200">
                                        {item.id}
                                    </TableCell>
                                    <TableCell className="font-geist text-base md:text-lg text-left border-r border-gray-200">
                                        {item.isNumber}
                                    </TableCell>
                                    <TableCell className="font-geist text-base md:text-lg text-left">
                                        {item.title}
                                    </TableCell>
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell colSpan={3} className="text-center py-8 font-geist text-gray-500">
                                    Aucun résultat trouvé pour &quot;{searchQuery}&quot;
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
            {totalPages > 1 && (
                <div className="flex justify-end items-center mt-6">
                    <div className="flex items-center">
                        <button
                            onClick={handlePrevPage}
                            disabled={currentPage === 1}
                            className="px-4 py-2 mx-1 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            Précédent
                        </button>
                        <span className="px-4 py-2 font-geist text-sm">
                            Page {currentPage} sur {totalPages}
                        </span>
                        <button
                            onClick={handleNextPage}
                            disabled={currentPage === totalPages}
                            className="px-4 py-2 mx-1 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            Suivant
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

const SchemeXFrenchServiceFaq = () => {
    const faqData = [
        {
            question: "1. Qu&apos;est-ce que le Schéma X sous la certification BIS ?",
            answer: "Le Schéma X est un schéma d&apos;évaluation de la conformité introduit par le BIS indien pour les machines et équipements électriques. Il assure la conformité aux normes de sécurité et techniques strictes spécifiées dans le Règlement Technique Omnibus."
        },
        {
            question: "2. Le Schéma X est-il différent de la certification marque ISI ?",
            answer: "Oui. La marque ISI est généralement pour les biens de consommation et la conformité de base des produits, tandis que le Schéma X s&apos;applique aux produits complexes et de qualité industrielle qui nécessitent des tests avancés et une certification par un certificat BIS ou une licence BIS."
        },
        {
            question: "3. Qui doit demander la certification Schéma X ?",
            answer: "Les fabricants et importateurs de machines et équipements électriques listés sous le Règlement Technique Omnibus doivent demander le Schéma X et obtenir une certification BIS valide pour vendre ou distribuer légalement leurs produits en Inde. Les fabricants mondiaux ou étrangers ayant l&apos;intention de vendre des produits en Inde doivent également se conformer à ces règlements."
        },
        {
            question: "4. Quel est le coût de la certification BIS Schéma X ?",
            answer: "Le coût du Schéma X inclut les frais de demande, les frais de certification, les frais de révision du dossier technique, les coûts d&apos;inspection d&apos;usine, et les frais de test de produits. En moyenne, cela commence à ₹2,000 pour la demande et peut augmenter selon la complexité du produit. Pour plus de détails, contactez-nous à admin@bis-certifications.com."
        },
        {
            question: "5. Combien de temps faut-il pour obtenir une licence BIS sous le Schéma X ?",
            answer: "Le calendrier varie selon la documentation, les exigences de test, et les inspections d&apos;usine. Typiquement, cela prend 4-6 semaines à partir de la date d&apos;enregistrement BIS réussi et de soumission de demande pour les fabricants indiens et 60-90 jours pour les fabricants étrangers."
        },
        {
            question: "6. Les PME peuvent-elles également demander la certification BIS sous le Schéma X ?",
            answer: "Absolument. En fait, le BIS indien encourage les PME à demander une licence BIS ou un certificat de conformité sous le Schéma X pour améliorer la qualité, la conformité, et la compétitivité dans le secteur industriel."
        },
        {
            question: "7. La certification BIS sous le Schéma X est-elle obligatoire pour les exportations ?",
            answer: "Non. Les produits fabriqués exclusivement pour l&apos;exportation sont exemptés sous le Règlement Technique Omnibus. Cependant, les produits destinés aux marchés indiens doivent être certifiés sous le Schéma X."
        },
        {
            question: "8. Quelle est la validité de la licence BIS sous le Schéma X ?",
            answer: "Une licence BIS sous le Schéma X est généralement valide pour 3-6 ans et doit être renouvelée en conséquence. Le renouvellement implique le paiement des frais de certification BIS annuels et peut nécessiter une réévaluation selon les changements dans la portée du produit ou les normes."
        },
        {
            question: "9. Les fabricants étrangers peuvent-ils demander la certification Schéma X ?",
            answer: "Oui, les fabricants étrangers peuvent demander la certification Schéma X par l&apos;intermédiaire d&apos;un représentant indien autorisé. Le BIS indien nécessite une inspection d&apos;usine, qui peut prendre 3 jours pour les demandeurs étrangers, ainsi que les processus d&apos;enregistrement BIS standard et de test."
        },
        {
            question: "10. Qu&apos;est-ce qu&apos;un Dossier Technique et pourquoi est-il requis ?",
            answer: "Un Dossier Technique est un dossier de conformité détaillé requis sous le Schéma X. Il inclut les processus de fabrication, les détails du produit, les rapports de test, et les documents de contrôle qualité. Il soutient la conformité du produit aux Normes Indiennes pertinentes pendant le processus de certification BIS."
        },
        {
            question: "11. Comment le Schéma X est-il lié au Règlement Technique Omnibus ?",
            answer: "Le Règlement Technique Omnibus mandate l&apos;utilisation du Schéma X pour des catégories spécifiques de machines et équipements électriques en Inde. Les produits listés sous le règlement doivent être certifiés sous le Schéma X pour obtenir un certificat BIS valide ou une licence BIS."
        },
        {
            question: "12. Un certificat BIS sous le Schéma X peut-il être révoqué ?",
            answer: "Oui. Le BIS indien peut suspendre ou annuler une licence BIS ou un certificat sous le Schéma X si une non-conformité est trouvée pendant la surveillance ou si le produit ne répond pas aux Normes Indiennes requises."
        },
        {
            question: "13. Quelle est la différence entre une licence BIS et un certificat BIS sous le Schéma X ?",
            answer: "Une licence BIS est typiquement délivrée aux fabricants indiens, tandis qu&apos;un certificat de conformité BIS (CoC) est souvent délivré aux fabricants étrangers ou pour des cas spécifiques. Les deux servent le même but—assurer la conformité du produit sous le Schéma X."
        },
        {
            question: "14. La marque ISI est-elle autorisée pour les produits certifiés sous le Schéma X ?",
            answer: "Non. Les produits sous le Schéma X ne portent pas la marque ISI. Au lieu de cela, ils affichent la marque standard BIS pertinente au schéma de certification, tel que gouverné par le BIS indien."
        },
        {
            question: "Comment savoir si ma machine nécessite la certification Schéma X ?",
            answer: "Vérifiez la liste officielle dans le Règlement Technique Omnibus ou consultez un consultant BIS pour vérifier si votre machine tombe sous les exigences de certification Schéma X obligatoires."
        }
    ];

    return (
        <section
            id="faqs"
            className="my-2 scroll-mt-20"
            aria-label="Frequently Asked Questions"
        >
            <div className="max-w-[88rem] mx-auto px-4 py-8 md:p-12">
                <h4 className="text-[32px] md:text-[48px] text-center font-geist font-semibold text-[#181818]">
                    Questions Fréquemment Posées
                </h4>
                <p className="text-[#52525b] text-center text-[16px] md:text-[20px] font-geist">
                    Vous ne trouvez pas la réponse que vous cherchez ?{" "}
                    <a
                        href="/contact"
                        className="text-[#27272a] font-geist text-[20px] font-medium underline underline-offset-4 hover:text-[#1A8781] transition-colors"
                    >
                        Contactez-nous !
                    </a>
                </p>

                <div className="w-full max-w-[1104px] mt-[16px] md:mt-[24px] mx-auto">
                    <Accordion type="single" collapsible className="w-full">
                        {faqData.map((faq, index) => (
                            <AccordionItem key={index} value={`item-${index + 1}`}>
                                <AccordionTrigger className="font-geist text-[16px] md:text-[18px] text-[#3f3f46] font-medium">
                                    {faq.question}
                                </AccordionTrigger>
                                <AccordionContent className="font-geist text-[14px] md:text-[18px] text-[#5e5f6e]">
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
        </section>
    );
};

const SchemeXFrenchMainContentLeft = () => {
    return (
        <div className="flex-1">
            <div className="flex flex-col gap-[20px] md:gap-[40px]">

                {/* Overview Section */}
                <SchemeXFrenchMainContentLeftOverviewSection />

                {/* Divider */}
                <div className="service-left-content-divider" />

                {/* Process Section */}
                <SchemeXFrenchMainContentLeftProcessSection />

                {/* Divider */}
                <div className="service-left-content-divider" />

                {/* Documents Section */}
                <SchemeXFrenchMainContentLeftDocumentsSection />

                {/* Divider */}
                <div className="service-left-content-divider" />

                {/* Conclusion Section */}
                <SchemeXFrenchMainContentLeftConclusionSection />

                {/* Divider */}
                <div className="service-left-content-divider" />

                <ServiceAuthorFrench />
            </div>
        </div>
    )
}

const SchemeXFrenchMainContentLeftConclusionSection = () => {
    return (
        <div id="conclusion" className="flex flex-col scroll-mt-20">
            {/* Conclusion */}
            <div className="flex w-full items-center gap-3">
                <span className="service-left-content-index-heading">Conclusion</span>
                <Separator className="service-left-content-separator" />
            </div>

            <h2 className="service-left-content-heading-two">
                Conclusion
            </h2>

            <p className="service-left-content-paragraph">
                La certification BIS Schéma-X reste vitale pour maintenir la sécurité,
                la fiabilité et la qualité                 des appareillages de commutation basse tension et des équipements de commande,
                des machines et équipements électriques. Pour les fabricants d&apos;outils de machine
                applicables au traitement de la pierre, de la céramique, du béton, du ciment asphaltique
                et du verre minéral, la certification BIS Schéma-X est obligatoire.
            </p>


            <p className="service-left-content-paragraph">
                En remplissant ces obligations, les fabricants garantissent la conformité des produits,
                améliorent la confiance des consommateurs, ainsi que leur
                crédibilité sur le marché. Le Schéma-X assure que la production soit aussi
                fluide que possible, que les normes de sécurité dans le monde soient respectées, et que les
                marques reconnues gagnent une réputation positive.
            </p>

        </div>
    )
}

const SchemeXFrenchMainContentLeftDocumentsSection = () => {
    return (
        <div id="documents" className="flex flex-col scroll-mt-20">
            {/* Documents */}
            <div className="flex w-full items-center gap-3">
                <span className="service-left-content-index-heading">Documents</span>
                <Separator className="service-left-content-separator" />
            </div>

            <h2 className="service-left-content-heading-two">
                Documents Clés Requis pour la Certification BIS Schéma X
            </h2>


            <p className="service-left-content-paragraph">
                Pour rationaliser le processus de certification BIS, les fabricants sont tenus
                de rassembler et soumettre les documents suivants pendant la phase d&apos;enregistrement :
            </p>

            <div className="mt-[16px] md:mt-[24px]">
                <Table className="min-w-full divide-y divide-gray-200 shadow-sm rounded-lg">
                    <TableHeader className="bg-[#F9F7F2]">
                        <TableRow className="bg-[#1A8781]/10">
                            <TableHead className="px-6 py-3 text-left text-xs md:text-base font-geist font-medium text-gray-700 uppercase tracking-wider rounded-tl-lg">
                                N° S.
                            </TableHead>
                            <TableHead className="px-6 py-3 text-left text-xs md:text-base font-geist font-medium text-gray-700 uppercase tracking-wider">
                                Document Requis
                            </TableHead>
                            <TableHead className="px-6 py-3 text-left text-xs md:text-base font-geist font-medium text-gray-700 uppercase tracking-wider rounded-tr-lg">
                                Détails
                            </TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody className="bg-white divide-y divide-gray-200">
                        <TableRow className="hover:bg-gray-50">
                            <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                                1.
                            </TableCell>
                            <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d] font-medium">
                                Nom et Adresse (Usine et Bureau)
                            </TableCell>
                            <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                                Nom légal complet et adresses physiques du site de fabrication
                                et du bureau
                            </TableCell>
                        </TableRow>
                        <TableRow className="hover:bg-gray-50">
                            <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                                2.
                            </TableCell>
                            <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d] font-medium">
                                Informations PAN et GST
                            </TableCell>
                            <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                                Numéro de compte permanent (PAN) et détails d&apos;enregistrement GST
                            </TableCell>
                        </TableRow>
                        <TableRow className="hover:bg-gray-50">
                            <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                                3.
                            </TableCell>
                            <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d] font-medium">
                                Détails de Contact
                            </TableCell>
                            <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                                Adresse e-mail, numéro de mobile et ligne fixe pour les communications
                                officielles
                            </TableCell>
                        </TableRow>
                        <TableRow className="hover:bg-gray-50">
                            <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                                4.
                            </TableCell>
                            <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d] font-medium">
                                Détails de Gestion
                            </TableCell>
                            <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                                Noms, rôles et identifiants des cadres clés et du signataire autorisé
                            </TableCell>
                        </TableRow>
                        <TableRow className="hover:bg-gray-50">
                            <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                                5.
                            </TableCell>
                            <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d] font-medium">
                                Description du Produit
                            </TableCell>
                            <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                                Détails des machines et équipements couverts par la Première
                                Annexe du Règlement Technique Omnibus
                            </TableCell>
                        </TableRow>
                        <TableRow className="hover:bg-gray-50">
                            <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                                6.
                            </TableCell>
                            <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d] font-medium">
                                Classification du Produit
                            </TableCell>
                            <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                                Type spécifique, modèle et variété pour lesquels la licence BIS est
                                demandée
                            </TableCell>
                        </TableRow>
                        <TableRow className="hover:bg-gray-50">
                            <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                                7.
                            </TableCell>
                            <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d] font-medium">
                                Dossier technique
                            </TableCell>
                            <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                                Tous les détails techniques liés au produit et les détails
                                sur l&apos;unité de fabrication.
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </div>

            <h3 className="service-left-content-heading-three">
                Validité et Processus de Renouvellement du Certificat Schéma-X :
            </h3>

            <PointsListWithoutHeading
                points={[
                    "Validité et Renouvellement de Licence : Les licences BIS sous le Schéma-X sont délivrées pour une période de 3 à 6 ans pour la production continue. Une fois la période expirée, la licence peut être renouvelée pour la même durée par la soumission d'une demande de renouvellement, des frais requis et des documents de conformité.",
                    "Certificat de Conformité (CoC) : Un CoC est délivré pour une production unique et est applicable aux fabricants nationaux ainsi qu'étrangers. Puisqu'il s'applique uniquement à un seul lot, un CoC n'a pas d'option de renouvellement.",
                    "Rapport des Tests de Produit : Lorsque les rapports de test sont préparés dans le laboratoire du fabricant, les responsables BIS les vérifient lors de l'inspection d'usine en effectuant des tests de témoin. Si les tests sont effectués dans des installations sous-traitées, ces installations sont également inspectées et approuvées par BIS.",
                    "Examen de la Demande de Renouvellement : Pour une validité ininterrompue, un fabricant est tenu de continuer à se conformer aux dispositions du Schéma-X. Conformément au Règlement 8 des Règlements d'Évaluation de la Conformité BIS, le Bureau des Normes Indiennes traite la demande de renouvellement sous forme VIII. Le renouvellement n'est effectué qu'après vérification de la conformité satisfaisante.",
                ]}
            />
        </div>
    )
}

const SchemeXFrenchMainContentLeftProcessSection = () => {
    return (
        <div id="process" className="flex flex-col scroll-mt-20">
            {/* Process */}
            <div className="flex w-full items-center gap-3">
                <span className="service-left-content-index-heading">Processus</span>
                <Separator className="service-left-content-separator" />
            </div>

            <h2 className="service-left-content-heading-two">
                Étapes pour Obtenir la Certification sous le BIS Schéma-X
            </h2>


            <p className="service-left-content-paragraph">
                La délivrance du Certificat BIS sous le Schéma-X est une activité systématique destinée à
                s&apos;assurer que le fabricant a rempli les normes de sécurité, qualité et
                conformité applicables. Le processus est le suivant :
            </p>


            <PointsListWithoutHeading
                points={[
                    "Vérifier la Portée : Déterminer si votre produit est dans la portée du Schéma-X et s'il respecte les exigences de sécurité BIS. Vérifier les normes indiennes pertinentes et le calendrier technique pour déterminer si vous pourrez vous conformer.",
                    "Préparer les Documents Requis : Les fabricants doivent collecter et organiser les documents suivants : certificats d'entreprise enregistrée, documents de base de conception, documents de flux d'usine et de processus, rapports de test de service (si applicable), documents d'assurance qualité et de contrôle.",
                    "Construire le Dossier Technique : Un dossier technique est une partie indispensable pour la demande d'extension d'un certificat. Il doit contenir : Spécifications techniques du produit, Informations sur les méthodes et techniques, Documents de conformité et de test, Limitation et objectif prévu du produit, Documentation d'assurance qualité, Traçabilité des matières premières, traçabilité des sous-traitants, et le reste des preuves, Conformité aux normes dans le cadre défini.",
                    "Le Formulaire de Demande : Le formulaire de demande peut être soumis électroniquement sur le site Web BIS pour le lieu désigné. Le règlement des frais de demande est obligatoire. Le reste des documents vérifiant la demande doit être inclus pour une évaluation appropriée.",
                    "Inspection d'Usine : Pour les fabricants nationaux : L'inspection est menée sur une période maximale de 2 jours. Pour les fabricants étrangers : L'inspection est menée sur une période maximale de 3 jours (des jours supplémentaires peuvent s'accumuler en raison de demandes supplémentaires).",
                    "Test des Échantillons de Produit : Le test d'échantillon est effectué soit sur le site du fabricant soit dans des laboratoires approuvés BIS sous-traités (le test sous-traité est autorisé). Le test démontre le respect des normes indiennes pertinentes.",
                    "Délivrance de Certification : Si un produit répond à toutes les conditions, BIS accorde à chaque produit une Licence ou un Certificat de Conformité (CoC). La Marque Standard BIS peut être utilisée librement par le fabricant sur tous les produits certifiés.",
                ]}
            />


            <p className="service-left-content-paragraph">
                Ce dossier sert de preuve technique et statistique de la
                revendication du produit justifiant les normes de traçabilité de sécurité.
            </p>


            <p className="service-left-content-paragraph">
                Pendant la période d&apos;inspection, les responsables BIS sont censés :
                Analyser le dossier technique, Évaluer les méthodes de fabrication ainsi
                que les systèmes d&apos;assurance qualité de soutien, Observer les tests du
                produit, Déterminer la non-conformité (le cas échéant) et donner des étapes correctives. Un
                rapport détaillé de l&apos;audit est fourni au demandeur après la
                visite.
            </p>



            <p className="service-left-content-paragraph">
                Cette stratégie maintient la conformité avec la Norme BIS et est une
                reconnaissance de la conformité indienne et internationale, positionnant
                l&apos;industrie sur la confiance des consommateurs envers la sécurité et la qualité.
            </p>


            <h2 className="service-left-content-heading-three">
                Procédure pour les Fabricants Nationaux
            </h2>


            <p className="service-left-content-paragraph">
                Les fabricants nationaux suivent une approche directe en obtenant la
                Licence BIS sous le Schéma-X. Les étapes directes à suivre incluent :
            </p>


            <PointsListWithoutHeading
                points={[
                    "Documentation : Tous les documents relatifs au schéma doivent être rassemblés et préparés.",
                    "Exécution de la Demande : La demande doit être présentée avec les frais pertinents.",
                    "Enquête sur la Demande : toute demande soumise est soumise à un examen et un ensemble de questions subséquent est généré par BIS.",
                    "Nomination des Auditeurs : Les auditeurs sont nommés par BIS mais l'individu nommé est soumis au paiement des frais d'audit.",
                    "Audit d'Usine : Un audit d'examen et de travaux d'enquête est mené sur site et des échantillons pertinents sont collectés.",
                    "Évaluation des Échantillons : Les échantillons sont évalués dans un laboratoire reconnu BIS. Le demandeur paie tous les frais de test de laboratoire reconnus BIS.",
                    "Paiement des Frais de Licence et de Marquage : Les paiements requis sont effectués à BIS.",
                    "Octroi de Licence : Le certificat accordant la permission d'utiliser la Marque BIS est décerné par BIS.",
                ]}
            />


            <p className="service-left-content-paragraph">
                <strong>Calendrier Typique :</strong> Près de 90 jours ouvrables (selon la pratique BIS)
                sont nécessaires. Ceci est fourni s&apos;il n&apos;y a pas de non-conformités clés.
            </p>


            <h2 className="service-left-content-heading-three">
                Procédure pour les Fabricants Étrangers
            </h2>


            <p className="service-left-content-paragraph">
                Contrairement aux fabricants nationaux, les fabricants étrangers demandant un certificat BIS
                sous le Schéma-X sont tenus de se conformer à un processus plus strict
                et des étapes supplémentaires. La procédure est élaborée comme suit.
            </p>

            <PointsListWithoutHeading
                points={[
                    "Préparation de la Documentation : Entreprise enregistrée, la disposition du produit et de l'usine, les rapports de test, et tous les documents de gestion de la qualité associés doivent être dans le dossier configuré pour se conformer.",
                    "Soumission de la Demande : La demande, les frais requis et tous les matériaux de demande sont soumis via le portail en ligne BIS.",
                    "Enregistrement de la Demande et Examen : La demande est enregistrée par BIS et une vérification des documents est menée. Tout problème que BIS peut avoir doit être résolu par le demandeur en temps opportun.",
                    "Attribution d'Auditeur et Paiement : Les auditeurs BIS responsables des inspections d'usine sont assignés au demandeur pour l'audit. Le demandeur doit payer les frais établis pour l'audit mené, tel que déterminé par la législation applicable.",
                    "Préparation d'Audit : Les fabricants étrangers sont responsables des arrangements logistiques pour l'audit tels que la délivrance de visa, les billets d'avion, et les réservations d'hôtel pour les responsables BIS sont arrangées et payées.",
                    "Audit d'Usine et Sélection d'Échantillons : Les responsables BIS mènent un audit d'usine s'étalant sur 3 jours (plus de jours peuvent être ajoutés si plus de demandes sont nécessaires).",
                    "Test de Produit : Les échantillons sélectionnés sont transmis à un laboratoire accrédité BIS pour les tests. Dans certains cas, les tests sont sous-traités à d'autres laboratoires de test et donc le paiement est réglé par le laboratoire de test principal.",
                    "Paiement des Frais de Marquage et de Licence : Après des résultats d'audit et de test réussis, le fabricant doit payer les frais de marquage requis et les frais de licence à BIS.",
                    "Octroi de Licence : BIS délivre la Licence/Certificat de Conformité (CoC) une fois que toutes les conditions ont été suivies au total. BIS permet alors au fabricant d'utiliser la Marque Standard BIS sur d'autres produits certifiés, une fois que la conformité est confirmée.",
                ]}
            />

            <p className="service-left-content-paragraph">
                L&apos;audit comprend : Évaluation des systèmes d&apos;assurance qualité et des
                flux de travail dans les processus de fabrication, Évaluation de la conformité
                et de la documentation technique, Sélection d&apos;échantillons de test indépendants.
            </p>


            <p className="service-left-content-paragraph">
                L&apos;ensemble du processus prend, basé sur les pratiques de BIS, environ 6-7
                mois.
            </p>


            <h3 className="service-left-content-heading-three">
                Points Clés Supplémentaires pour les Fabricants Étrangers :
            </h3>


            <PointsListWithoutHeading
                points={[
                    "Classification FMCS : Tous les fabricants étrangers sont classés comme 'Grande Échelle' sous le Schéma de Certification des Fabricants Étrangers. Cette classification est indépendante de l'échelle des opérations menées.",
                    "Représentant Indien Autorisé (AIR) : Chaque fabricant étranger est tenu de désigner un Représentant Indien Autorisé (AIR). L'AIR est le point de contact principal pour le demandeur étranger et BIS, responsable de la conformité, de la collaboration et de la maintenance de la licence BIS.",
                    "Audits d'Usine : Les audits d'usine pour les fabricants étrangers sont complets et tendent à durer 3 jours. De plus, plus de jours sont requis dans le cas de demandes de produits multiples déposées.",
                ]}
            />

        </div>
    )
}

const SchemeXFrenchMainContentLeftOverviewSection = () => {
    // Download function for table data
    const downloadTableData = () => {
        const link = document.createElement("a");
        link.href = "/pdf/schemeXproduct.pdf";
        link.download = "SchemeXproduct.pdf";
        link.target = "_blank";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div id="overview" className="flex flex-col scroll-mt-20">
            {/* Overview */}
            <div className="flex w-full items-center gap-3">
                <span className="service-left-content-index-heading">Aperçu</span>
                <Separator className="service-left-content-separator" />
            </div>


            <h2 className="service-left-content-heading-two">
                Introduction à la Certification BIS Schéma X
            </h2>

            <p className="service-left-content-paragraph">
                Le Bureau des Normes Indiennes, ou BIS en abrégé, a lancé
                le &ldquo;Schéma X&rdquo; le 16 mars 2022, visant à améliorer la conformité
                sur la sécurité et la qualité des produits en Inde. Les fabricants indiens et étrangers
                peuvent demander la certification BIS pour les machines et équipements électriques,
                les composants comme les assemblages, sous-assemblages et, et les outils spécifiés dans
                l&apos;Annexe-II du Schéma-X et obtenir la certification avant d&apos;exporter,
                vendre ou distribuer en Inde.
            </p>


            <p className="service-left-content-paragraph">
                Sous le Schéma X, les fabricants peuvent demander une Licence BIS ou un
                Certificat de Conformité (CoC) pour les appareillages de commutation basse tension et les équipements de commande,
                les machines et équipements électriques. Une fois que les fabricants sont
                certifiés, ils sont autorisés à utiliser la marque Standard BIS, indiquant
                que leurs produits sont conformes aux normes établies en
                Inde.
            </p>


            <p className="service-left-content-paragraph">
                La certification, tout en promouvant le produit et la conformité avec les
                Normes Indiennes et les Règlements Gouvernementaux, aide à développer la confiance et
                la confiance des consommateurs dans les produits certifiés.
            </p>


            <h2 className="service-left-content-heading-three">
                Qu&apos;est-ce que la Certification Schéma X ?
            </h2>


            <p className="service-left-content-paragraph">
                Le Schéma X est un schéma de certification de produit développé sous les Règlements
                d&apos;Évaluation de la Conformité BIS, 2018 et plus tard, simplifié sous
                les Règlements d&apos;Évaluation de la Conformité BIS (Amendement), 2024.
            </p>



            <p className="service-left-content-paragraph">
                L&apos;objectif principal est d&apos;amener les normes de sécurité et de qualité indiennes aux
                normes mondiales, en particulier en ce qui concerne les machines industrielles et
                les équipements électriques. Les produits fabriqués en Inde ou importés en Inde
                sous ce schéma sont soumis à un examen rigoureux et à une évaluation pour
                prouver les normes techniques, de sécurité, ainsi que de performance.
            </p>


            <p className="service-left-content-paragraph">
                Les dispositions sous la portée originale de la Certification Schéma X ont été
                révisées et étendues avec le nouvellement émis Ordre de Sécurité des Machines et Équipements
                Électriques (Règlement Technique Omnibus), 2024, qui est
                sous la juridiction du Ministère des Industries Lourdes et a été
                mis en vigueur par BIS. L&apos;ordre entre en vigueur le 1er
                septembre 2026, et couvre un large spectre de machines et d&apos;équipements
                électriques tels que les pompes pour la manipulation de liquides, les compresseurs, les grues,
                les machines électriques rotatives, les transformateurs, et les appareillages de commutation et de commande.
            </p>


            <p className="service-left-content-paragraph">
                Les assemblages, sous-assemblages et composants de telles machines ou équipements
                font également partie de la portée de certification selon la Section 16 de la Loi du Bureau
                des Normes Indiennes, 2016.
            </p>

            <p className="service-left-content-paragraph">
                De plus, sous les Règles CMVR de 1989 (Construction et Fabrication de
                Règlement de Valve), Bowser et autres types d&apos;équipements de construction
                sous la juridiction du Schéma X, sont assurés que le marché n&apos;est pas
                exposé aux équipements qui manquent des exigences de sécurité et
                de normes techniques.
            </p>


            <h2 className="service-left-content-heading-three">
                Règlement Technique Omnibus (RTO)
            </h2>


            <p className="service-left-content-paragraph">
                Le Ministère des Industries Lourdes a publié le &ldquo;Règlement Technique
                Omnibus sur les Ordres de Sécurité (Sécurité des Machines et Équipements
                Électriques)&rdquo; via notification E-Gazette du 28 août 2024. Ce
                règlement innovant vise à améliorer - la sécurité, la qualité et
                la conformité des machines, équipements électriques et leurs assemblages, sous
                assemblages et composants, sous le Schéma X du Règlement BIS, 2016.
            </p>


            <p className="service-left-content-paragraph">
                Sous le RTO, toutes les catégories de machines et d&apos;équipements électriques, et
                toutes leurs pièces et composants sont inclus. Cependant, quelques catégories
                sont spécifiquement exclues :
            </p>

            <PointsListWithoutHeading
                points={[
                    "Toute machine et composants qui font partie de tout autre ordre sous la Section 16 qui est émis sous la Loi du Bureau des Normes Indiennes, 2016.",
                    "Biens domestiques fabriqués et articles qui sont uniquement destinés à l'exportation.",
                    "Machines et équipements de construction qui sont sous les Règles CMVR, 1989, prescrites par le Ministère du Transport Routier et des Autoroutes (MoRTH).",
                ]}
            />


            <p className="service-left-content-paragraph">
                Ces exceptions sont faites pour faciliter la conformité et éviter la duplication
                inutile de réglementation afin de promouvoir la facilité de faire des affaires.
            </p>



            <p className="service-left-content-paragraph">
                Le Règlement Technique Omnibus, 2024 couvre toutes les machines et
                équipements électriques, y compris les appareillages de commutation basse tension et les équipements de commande
                notifiés par le Ministère des Industries Lourdes, seront traités sous le
                cadre du Schéma X de Certification BIS. L&apos;Ordre entrera en vigueur
                le 1er septembre 2026 afin que les fabricants et importateurs aient
                assez de temps pour modifier leurs opérations selon les Ordres émis.
            </p>


            <h2 className="service-left-content-heading-three">
                Certification BIS sous le Règlement Technique Omnibus
            </h2>


            <p className="service-left-content-paragraph">
                Selon le RTO 2024, les fabricants, ainsi que les importateurs, de machines
                et équipements électriques qui incluent les pompes, pompes, compresseurs,
                centrifugeuses, grues, transformateurs, et appareillages de commutation doivent demander la Certification
                BIS sous le Schéma X.
            </p>



            <p className="service-left-content-paragraph">
                Sous le Schéma X, les fabricants peuvent choisir de demander :
            </p>


            <PointsListWithoutHeading
                points={["Une Licence BIS, ou", "Un Certificat de Conformité (CoC)"]}
            />


            <p className="service-left-content-paragraph">
                Les produits portant la Marque Standard BIS qui est une Marque de Conformité
                qui certifie et assure aux utilisateurs que le produit est sûr,
                fiable, et de bonne qualité. C&apos;est aussi une marque de confiance et de très
                bonne performance.
            </p>


            <h3 className="service-left-content-heading-three">
                Note Spéciale pour les PME
            </h3>


            <p className="service-left-content-paragraph">
                Comme avec de nombreux autres secteurs, les Micro, Petites et Moyennes Entreprises (PME)
                doivent également se conformer au Schéma X et obtenir la Certification BIS pour leurs
                machines et équipements électriques. Bien qu&apos;il puisse sembler que la conformité
                avec les exigences réglementaires puisse être difficile, le certificat Schéma X
                est un ajout de valeur et un avantage pour les PME pour les raisons suivantes :
            </p>


            <PointsListWithoutHeading
                points={[
                    "Prouve l'adhésion aux obligations légales et autres obligations requises établies par le gouvernement.",
                    "Augmente la réputation du produit et la confiance des consommateurs.",
                    "Facilite l'accès à un marché domestique et étranger plus large.",
                    "Améliore la position de la PME mondialement en termes de compétitivité, sécurité et qualité.",
                ]}
            />


            <h3 className="service-left-content-heading-three">
                Logo BIS Schéma X
            </h3>



            <p className="service-left-content-paragraph">
                La marque standard BIS du Schéma X forme une marque de qualité et un principe
                de confiance. Le Logo contient :
            </p>



            <PointsListWithoutHeading
                points={[
                    "le numéro de standard est affiché dans la partie supérieure du logo ; et",
                    "le numéro de licence affiché dans la partie inférieure du Logo au format : CM/L-XXXXXXXXXX",
                ]}
            />



            <p className="service-left-content-paragraph">
                Cette marque signifie qu'une Licence BIS a été délivrée avec succès au
                fabricant. Elle donne droit au fabricant de placer la Marque BIS et
                assure aux consommateurs que le produit est authentique et sûr.
            </p>


            <div className="flex justify-center mt-[20px] md:mt-[26px]">
                <img
                    src="/services-images/scheme-x-logo.png"
                    alt="BIS Scheme X logo"
                    title="BIS Scheme X Certification"
                    className="max-w-full h-auto rounded-lg shadow-md"
                />
            </div>


            <h3 className="service-left-content-heading-three">
                Implications Légales
            </h3>


            <p className="service-left-content-paragraph">
                La Marque Standard BIS est une marque de confiance et de qualité. La marque n'est
                disponible qu'après qu'un contrat valide soit en place. Seul un contrat valide
                permet au propriétaire d'utiliser la marque. Utiliser la marque sans un contrat valide
                est une infraction sous la constitution indienne et équivaut à
                avoir une marque légale. Le propriétaire de la marque est soumis à de lourdes
                restrictions pour l'utilisation de la licence CM/L-XXXXXXXXXX pour les produits
                qui n'ont pas de certification BIS.
            </p>




            <p className="service-left-content-paragraph">
                Il s'ensuit que chaque producteur est obligé de :
            </p>


            <PointsListWithoutHeading
                points={[
                    "Acquérir une Licence BIS valide sous le Schéma X.",
                    "Satisfaire aux exigences pertinentes des Normes Indiennes ; et",
                    "Apposer correctement les produits avec le Logo BIS approuvé.",
                ]}
            />


            <p className="service-left-content-paragraph">
                Ce cadre réglementaire est étendu pour protéger les intérêts des
                consommateurs et des hommes d'affaires, favorisant un marché qui met l'accent sur
                la sécurité, l'ouverture et la confiance.
            </p>



            <h2 className="service-left-content-heading-three">
                Différences Clés Entre le Schéma-I et le Schéma-X
            </h2>


            <h3 className="service-left-content-heading-three">
                Schéma-I
            </h3>


            <PointsListWithoutHeading
                points={[
                    "Inclut une catégorie plus large de produits de consommation tels que l'électronique, les appareils ménagers, et même les produits industriels.",
                    "Les produits délivrés un certificat sous ce schéma doivent avoir la Marque Standard ISI.",
                    "Se rapporte aux fabricants nationaux et étrangers.",
                    "Implique des audits d'usine et des tests d'échantillons pour déterminer la qualité et la conformité avec les Normes Indiennes.",
                ]}
            />

            <h3 className="service-left-content-heading-three">
                Schéma-X
            </h3>

            <PointsListWithoutHeading
                points={[
                    "Adresse les produits d'ingénierie industriels à haut risque et critiques pour la sécurité, qui incluent les équipements électriques, les machines, et les systèmes industriels de devoir considérable.",
                    "La certification est de plus grande rigueur que le Schéma-I. Elle implique des rapports techniques avancés, des vérifications de conformité, et des audits de certification étendus.",
                    "Le Schéma-X tend à être plus cher que le Schéma-I à cause de la documentation de conformité supplémentaire.",
                    "Toute entreprise qui traite avec des équipements électriques ou des machines industrielles est mandatée pour obtenir la certification sous le Schéma-X.",
                ]}
            />

            <div className="mt-[16px] md:mt-[24px]">
                <Table className="min-w-full divide-y divide-gray-200 shadow-sm rounded-lg">
                    <TableHeader className="bg-[#F9F7F2]">
                        <TableRow className="bg-[#1A8781]/10">
                            <TableHead className="px-6 py-3 text-left text-xs md:text-base font-geist font-medium text-gray-700 uppercase tracking-wider rounded-tl-lg">
                                Caractéristique
                            </TableHead>
                            <TableHead className="px-6 py-3 text-left text-xs md:text-base font-geist font-medium text-gray-700 uppercase tracking-wider">
                                Marque ISI
                            </TableHead>
                            <TableHead className="px-6 py-3 text-left text-xs md:text-base font-geist font-medium text-gray-700 uppercase tracking-wider rounded-tr-lg">
                                Schéma X
                            </TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody className="bg-white divide-y divide-gray-200">
                        <TableRow className="hover:bg-gray-50">
                            <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d] font-medium">
                                Géré par
                            </TableCell>
                            <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                                BIS Indien
                            </TableCell>
                            <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                                BIS Indien
                            </TableCell>
                        </TableRow>
                        <TableRow className="hover:bg-gray-50">
                            <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d] font-medium">
                                Type de Certification
                            </TableCell>
                            <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                                Licence BIS
                            </TableCell>
                            <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                                Certificat BIS / Licence BIS
                            </TableCell>
                        </TableRow>
                        <TableRow className="hover:bg-gray-50">
                            <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d] font-medium">
                                Produits Cibles
                            </TableCell>
                            <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                                Biens de consommation
                            </TableCell>
                            <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                                Machines et équipements électriques
                            </TableCell>
                        </TableRow>
                        <TableRow className="hover:bg-gray-50">
                            <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d] font-medium">
                                Marque Utilisée
                            </TableCell>
                            <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                                Marque ISI
                            </TableCell>
                            <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                                Marque standard BIS (sous le Schéma X)
                            </TableCell>
                        </TableRow>
                        <TableRow className="hover:bg-gray-50">
                            <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d] font-medium">
                                Niveau de Conformité
                            </TableCell>
                            <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                                Conformité aux normes indiennes
                            </TableCell>
                            <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                                Conformité technique et de sécurité haut de gamme
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </div>


            <h3 className="service-left-content-heading-three">
                Produits Couverts par le Schéma-X
            </h3>


            <p className="service-left-content-paragraph">
                Le Schéma-X couvre les produits avec le plus haut risque pour la sécurité et
                la performance, incluant :
            </p>



            <PointsListWithoutHeading
                points={[
                    "Équipements Électriques : Transformateurs industriels, unités d'alimentation électrique, et similaires, appareillages de commutation basse tension et équipements de commande, plus autres dispositifs haute tension.",
                    "Machines Lourdes : Presses hydrauliques, grues industrielles, outils de machine automatisés, et équipements spécialisés pour les industries à grande échelle.",
                    "Équipements Critiques pour la Vie : Extincteurs, récipients sous pression, systèmes électriques d'urgence, et autres dispositifs et systèmes pour la sécurité de la vie.",
                    "Électronique Spécialisée de Consommation et Industrielle : Appareils électroniques de qualité médicale et équipements incorporant des mesures de protection avancées.",
                ]}
            />

            {/* Scheme X Product Table 20 */}
            <div className="mt-[16px] md:mt-[24px]">

                <Table className="min-w-full divide-y divide-gray-200 shadow-sm rounded-lg">
                    <TableHeader className="bg-[#F9F7F2]">
                        <TableRow className="bg-[#1A8781]/10">
                            <TableHead className="px-6 py-3 text-left text-xs md:text-base font-geist font-medium text-gray-700 uppercase tracking-wider rounded-tl-lg">
                                N° Série
                            </TableHead>
                            <TableHead className="px-6 py-3 text-left text-xs md:text-base font-geist font-medium text-gray-700 uppercase tracking-wider">
                                Description des Machines et Équipements Électriques
                            </TableHead>
                            <TableHead className="px-6 py-3 text-left text-xs md:text-base font-geist font-medium text-gray-700 uppercase tracking-wider rounded-tr-lg">
                                Code HS
                            </TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody className="bg-white divide-y divide-gray-200">
                        <TableRow className="hover:bg-gray-50">
                            <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                                1
                            </TableCell>
                            <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                                <Link
                                    to="/certification-bis-schema-x-pour-pompes-et-elevateurs-de-liquides"
                                    className="text-[#1A8781] hover:text-[#156d68] hover:underline transition-colors duration-200"
                                >
                                    Tous types de pompes pour la manipulation de liquides, élévateurs de liquides et
                                    (ou) leurs assemblages / sous-assemblages / composants
                                </Link>
                            </TableCell>
                            <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                                841340, 841350, 841360, 841370, 841381, 841382, 841391 and
                                841392
                            </TableCell>
                        </TableRow>
                        <TableRow className="hover:bg-gray-50">
                            <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                                2
                            </TableCell>
                            <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                                <Link
                                    to="/certification-bis-schema-x-pour-compresseurs"
                                    className="text-[#1A8781] hover:text-[#156d68] hover:underline transition-colors duration-200"
                                >
                                    Tous types de compresseurs et (ou) leurs assemblages / sous-assemblages
                                    / composants
                                </Link>
                            </TableCell>
                            <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                                841430, 841440, 84148011, 84148090, 84149011, 84149019, 84149040
                                and 84149090
                            </TableCell>
                        </TableRow>
                        <TableRow className="hover:bg-gray-50">
                            <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                                3
                            </TableCell>
                            <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                                <Link
                                    to="/certification-bis-schema-x-pour-equipements-de-traitement-thermique"
                                    className="text-[#1A8781] hover:text-[#156d68] hover:underline transition-colors duration-200"
                                >
                                    Tous types de machines pour le traitement de matériaux par un processus
                                    impliquant un changement de température et (ou) leurs assemblages
                                    / sous-assemblages / composants
                                </Link>
                            </TableCell>
                            <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                                841932, 841939, 841940, 841950, 841960, 841981, 841989 and
                                84199090
                            </TableCell>
                        </TableRow>
                        <TableRow className="hover:bg-gray-50">
                            <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                                4
                            </TableCell>
                            <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                                <Link
                                    to="/certification-bis-schema-x-pour-centrifugeuses-et-machines-de-filtrage-ou-purification"
                                    className="text-[#1A8781] hover:text-[#156d68] hover:underline transition-colors duration-200"
                                >
                                    Tous types de centrifugeuses, machines de filtrage ou de purification pour
                                    liquides et gaz et (ou) leurs assemblages / sous-assemblages
                                    / composants
                                </Link>
                            </TableCell>
                            <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                                842111, 842112, 842119, 84212110, 84212190, 842122, 842129,
                                842131, 842139, 842191 and 842199
                            </TableCell>
                        </TableRow>
                        <TableRow className="hover:bg-gray-50">
                            <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                                5
                            </TableCell>
                            <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                                <Link
                                    to="/certification-bis-schema-x-pour-machines-de-conditionnement"
                                    className="text-[#1A8781] hover:text-[#156d68] hover:underline transition-colors duration-200"
                                >
                                    Tous types de machines pour le remplissage, fermeture, scellage, étiquetage
                                    de bouteilles, emballage ou enveloppage et (ou) leurs
                                    assemblages / sous-assemblages / composants
                                </Link>
                            </TableCell>
                            <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                                842220, 842230, 842240 and 842290
                            </TableCell>
                        </TableRow>
                        <TableRow className="hover:bg-gray-50">
                            <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                                6
                            </TableCell>
                            <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                                <Link
                                    to="/certification-bis-schema-x-pour-ponts-roulants"
                                    className="text-[#1A8781] hover:text-[#156d68] hover:underline transition-colors duration-200"
                                >
                                    Tous types de grues et (ou) leurs assemblages
                                    / sous-assemblages / composants
                                </Link>
                            </TableCell>
                            <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                                842611, 842612, 842619, 842620, 842630, 842641, 842649, 842691
                                and 84269990
                            </TableCell>
                        </TableRow>
                        <TableRow className="hover:bg-gray-50">
                            <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                                7
                            </TableCell>
                            <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                                <Link
                                    to="/certification-bis-schema-x-pour-machines-de-construction"
                                    className="text-[#1A8781] hover:text-[#156d68] hover:underline transition-colors duration-200"
                                >
                                    Tous types de machines pour la construction, terrassement, exploitation minière et
                                    (ou) leurs assemblages / sous-assemblages / composants
                                </Link>
                            </TableCell>
                            <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                                8429, 843010, 843020, 843031, 843039, 843041, 843049, 843050,
                                843141, 843142, 843143 and 843149
                            </TableCell>
                        </TableRow>
                        <TableRow className="hover:bg-gray-50">
                            <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                                8
                            </TableCell>
                            <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                                <Link
                                    to="/certification-bis-schema-x-pour-machines-a-tisser-metiers-a-tisser"
                                    className="text-[#1A8781] hover:text-[#156d68] hover:underline transition-colors duration-200"
                                >
                                    Tous types de machines à tisser (métiers à tisser) et (ou) leurs
                                    assemblages / sous-assemblages / composants
                                </Link>
                            </TableCell>
                            <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                                8446, 844811, 844819, 844842 and 844849
                            </TableCell>
                        </TableRow>
                        <TableRow className="hover:bg-gray-50">
                            <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                                9
                            </TableCell>
                            <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                                <Link
                                    to="/certification-bis-schema-x-pour-machines-a-broderie"
                                    className="text-[#1A8781] hover:text-[#156d68] hover:underline transition-colors duration-200"
                                >
                                    Tous types de machines pour la broderie et (ou) leurs
                                    assemblages / sous-assemblages / composants
                                </Link>
                            </TableCell>
                            <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                                84479020 and 844859
                            </TableCell>
                        </TableRow>
                        <TableRow className="hover:bg-gray-50">
                            <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                                10
                            </TableCell>
                            <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                                <Link
                                    to="/certification-bis-schema-x-pour-outils-de-machines-de-coupe-metallique"
                                    className="text-[#1A8781] hover:text-[#156d68] hover:underline transition-colors duration-200"
                                >
                                    Tous types d'outils de machines de coupe métallique couverts sous les
                                    rubriques 8456 à 8461 et (ou) leurs assemblages
                                    / sous-assemblages / composants
                                </Link>
                            </TableCell>
                            <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                                8456, 8457, 8458, 8459, 8460, 8461 and 846693
                            </TableCell>
                        </TableRow>
                        <TableRow className="hover:bg-gray-50">
                            <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                                11
                            </TableCell>
                            <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                                <Link
                                    to="/certification-bis-schema-x-pour-machines-a-outils"
                                    className="text-[#1A8781] hover:text-[#156d68] hover:underline transition-colors duration-200"
                                >
                                    Tous types de machines-outils pour travailler la pierre, la céramique,
                                    le béton, le ciment d'amiante ou le verre minéral similaire et (ou) leurs
                                    assemblages / sous-assemblages / composants
                                </Link>
                            </TableCell>
                            <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                                8464 and 84669100
                            </TableCell>
                        </TableRow>
                        <TableRow className="hover:bg-gray-50">
                            <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                                12
                            </TableCell>
                            <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                                <Link
                                    to="/certification-bis-schema-x-pour-machines-de-caoutchouc-et-plastiques"
                                    className="text-[#1A8781] hover:text-[#156d68] hover:underline transition-colors duration-200"
                                >
                                    Tous types de machines pour travailler le caoutchouc et les plastiques et (ou)
                                    leurs assemblages / sous-assemblages / composants
                                </Link>
                            </TableCell>
                            <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                                8477
                            </TableCell>
                        </TableRow>
                        <TableRow className="hover:bg-gray-50">
                            <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                                13
                            </TableCell>
                            <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                                <Link
                                    to="/certification-bis-schema-x-pour-travaux-publics-et-appareils-mecaniques"
                                    className="text-[#1A8781] hover:text-[#156d68] hover:underline transition-colors duration-200"
                                >
                                    Tous types de machines incluant les machines pour les travaux publics &
                                    la construction et les machines & appareils mécaniques ayant des
                                    fonctions individuelles, non spécifiés ou inclus ailleurs dans le
                                    Chapitre 84 et (ou) leurs assemblages / sous-assemblages / composants
                                </Link>
                            </TableCell>
                            <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                                84791000, 84798999 and 84799090
                            </TableCell>
                        </TableRow>
                        <TableRow className="hover:bg-gray-50">
                            <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                                14
                            </TableCell>
                            <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                                <Link
                                    to="/certification-bis-schema-x-pour-roues-dentees-et-elements-de-transmission"
                                    className="text-[#1A8781] hover:text-[#156d68] hover:underline transition-colors duration-200"
                                >
                                    Tous types d'engrenages et de transmission, roues dentées, pignons de chaîne,
                                    éléments de transmission, vis à billes ou à rouleaux, boîtes de vitesses et
                                    changeurs de vitesse, incluant les convertisseurs de couple et (ou) leurs
                                    assemblages / sous-assemblages / composants
                                </Link>
                            </TableCell>
                            <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                                84834000 and 84839000
                            </TableCell>
                        </TableRow>
                        <TableRow className="hover:bg-gray-50">
                            <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                                15
                            </TableCell>
                            <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                                <Link
                                    to="/certification-bis-schema-x-pour-machines-electriques-rotatives"
                                    className="text-[#1A8781] hover:text-[#156d68] hover:underline transition-colors duration-200"
                                >
                                    Tous types de machines électriques rotatives telles que les générateurs, etc.
                                    et (ou) leurs assemblages / sous-assemblages / composants
                                </Link>
                            </TableCell>
                            <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                                8501 and 8503
                            </TableCell>
                        </TableRow>
                        <TableRow className="hover:bg-gray-50">
                            <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                                16
                            </TableCell>
                            <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                                <Link
                                    to="/certification-bis-schema-x-pour-generateurs-diesel"
                                    className="text-[#1A8781] hover:text-[#156d68] hover:underline transition-colors duration-200"
                                >
                                    Tous types de générateurs diesel et (ou) leurs assemblages
                                    / sous-assemblages / composants
                                </Link>
                            </TableCell>
                            <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                                8502 and 8503
                            </TableCell>
                        </TableRow>
                        <TableRow className="hover:bg-gray-50">
                            <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                                17
                            </TableCell>
                            <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                                <Link
                                    to="/certification-bis-schema-x-pour-transformateurs"
                                    className="text-[#1A8781] hover:text-[#156d68] hover:underline transition-colors duration-200"
                                >
                                    Tous types de transformateurs et (ou) leurs assemblages
                                    / sous-assemblages / composants
                                </Link>
                            </TableCell>
                            <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                                850421, 850422, 850423, 850431, 850432, 850433, 850434 and
                                850490
                            </TableCell>
                        </TableRow>
                        <TableRow className="hover:bg-gray-50">
                            <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                                18
                            </TableCell>
                            <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                                <Link
                                    to="/certification-bis-schema-x-pour-convertisseurs-semiconducteurs-de-puissance"
                                    className="text-[#1A8781] hover:text-[#156d68] hover:underline transition-colors duration-200"
                                >
                                    Tous types de convertisseurs semiconducteurs de puissance et (ou) leurs
                                    assemblages / sous-assemblages / composants
                                </Link>
                            </TableCell>
                            <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                                850440
                            </TableCell>
                        </TableRow>
                        <TableRow className="hover:bg-gray-50">
                            <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                                19
                            </TableCell>
                            <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                                <Link
                                    to="/certification-bis-schema-x-pour-appareillage-et-commande-jusqu-a-1000-volts"
                                    className="text-[#1A8781] hover:text-[#156d68] hover:underline transition-colors duration-200"
                                >
                                    Tous types d'appareillage et d'équipement de commande fonctionnant à des
                                    tensions n'excédant pas 1000 volts et (ou) leurs assemblages
                                    / sous-assemblages / composants
                                </Link>
                            </TableCell>
                            <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                                8536, 8537 and 8538
                            </TableCell>
                        </TableRow>
                        <TableRow className="hover:bg-gray-50">
                            <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                                20
                            </TableCell>
                            <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                                <Link
                                    to="/certification-bis-schema-x-pour-appareillage-et-commande-au-dessus-1000-volts"
                                    className="text-[#1A8781] hover:text-[#156d68] hover:underline transition-colors duration-200"
                                >
                                    Tous types d'appareillage et d'équipement de commande fonctionnant à des
                                    tensions dépassant 1000 volts et (ou) leurs assemblages
                                    / sous-assemblages / composants
                                </Link>
                            </TableCell>
                            <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                                8535, 8537 and 8538
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>

                {/* Heading and Description */}
                <div className="mb-6">
                    <h3 className="text-[20px] md:text-[24px] font-roboto font-bold text-[#131316] mb-2">
                        Norme de Sécurité par Produit
                    </h3>
                    <p className="mt-[12px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
                        Description des Machines et Équipements Électriques
                    </p>
                </div>

                <div className="flex justify-end mb-4">
                    <button
                        onClick={downloadTableData}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-[#1A8781] text-white rounded-lg font-geist text-sm md:text-base hover:bg-[#156d68] transition-colors duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 md:h-5 md:w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                            />
                        </svg>
                        Télécharger PDF
                    </button>
                </div>
            </div>

            <h2 className="service-left-content-heading-three">
                Normes de Sécurité sous le BIS Schéma - X
            </h2>



            <p className="service-left-content-paragraph">
                Plus qu&apos;une simple nécessité légale, la Certification BIS Schéma - X
                offre une promesse de sécurité, qualité et fiabilité. Cette
                Certification, qui implique une adhésion stricte aux normes nationales et
                internationales, assure que les machines et appareils électriques
                offerts aux utilisateurs sont sûrs, respectueux de l&apos;environnement, et techniquement
                solides.
            </p>


            <p className="service-left-content-paragraph">
                Pour certifier sous le Schéma - X, les fabricants doivent se conformer aux
                composants de sécurité majeurs suivants :
            </p>



            <PointsListWithoutHeading
                points={[
                    "Sécurité Électrique : Conformité aux normes IEC et Indiennes applicables. La certification protège contre les courts-circuits, les chocs électriques, la panne d&apos;isolation, la perte de terre de protection, l&apos;inflammation de matériaux combustibles environnants, et le feu.",
                    "Sécurité Mécanique : Évaluation de l&apos;intégrité structurelle de la machine et de l&apos;intégrité des pièces mobiles et des nouveaux matériaux. Assure que l&apos;équipement est soumis en toute sécurité au stress mécanique, à l&apos;usure, et aux dangers opérationnels.",
                    "Sécurité Incendie : L&apos;utilisation de matériaux qui sont conçus et construits avec des matériaux résistants au feu. Conformité aux normes de performance de propagation de flamme pour contrôler les risques associés au feu.",
                    "Conformité Environnementale : L&apos;utilisation d&apos;énergie contrôlée et de matériaux écologiques dans la production d&apos;équipements. Encourage les fabricants à réduire l&apos;impact environnemental de leurs équipements.",
                    "Gestion de la Qualité : Contrôle dominant et autonome sur les processus de production pour maintenir les normes et standards prédéfinis. Focus sur la régulation des conditions d&apos;usine, incluant les audits de processus, et l&apos;adhésion continue.",
                ]}
            />



            <h2 className="service-left-content-heading-three">
                Normes Réglementaires sous le Schéma-X
            </h2>


            <p className="service-left-content-paragraph">
                Les fabricants sont tenus de se conformer aux Normes Indiennes Pertinentes
                qui sont alignées avec les Normes Internationales, incluant :
            </p>


            <h3 className="service-left-content-heading-three">
                Normes Type A :
            </h3>


            <PointsListWithoutHeading
                points={[
                    "IS 16819:2018 / ISO 12100:2010 – Sécurité des Machines : Principes Généraux pour la Conception, l&apos;Évaluation des Risques, et la Réduction des Risques.",
                ]}
            />


            <h3 className="service-left-content-heading-three">
                Normes Type B :
            </h3>


            <PointsListWithoutHeading
                points={[
                    "Décrites dans la Deuxième Annexe de l&apos;Ordre du Règlement Technique Omnibus (RTO), 2024.",
                ]}
            />



            <h3 className="service-left-content-heading-three">
                Normes Type C :
            </h3>


            <PointsListWithoutHeading
                points={["Décrites dans la Troisième Annexe de l&apos;Ordre RTO, 2024."]}
            />


            <h3 className="service-left-content-heading-three">
                Série IS/IEC 60947 :
            </h3>


            <PointsListWithoutHeading
                points={[
                    "Couvrent les appareillages de commutation basse tension et les équipements de commande en plusieurs parties et sections.",
                ]} />
        </div>
    )
}




const PointsListWithoutHeading = ({ points }) => {
    return (
        <div className="mt-[18px] md:mt-[18px]">
            <ul className="flex flex-col gap-3 list-none">
                {points.map((point, index) => (
                    <li key={index} className="flex items-start gap-3">
                        <div className="bg-green-500/10 p-1.5 rounded-full flex-shrink-0 flex items-center justify-center min-w-[24px] min-h-[24px] mt-0.5">
                            <Check size={12} className="text-[#020817]" />
                        </div>
                        <p className="font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose flex-1">
                            {point}
                        </p>
                    </li>
                ))}
            </ul>
        </div>
    );
};
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
import ServiceAuthorSpanish from "@/components/manual/ServiceAuthor/ServiceAuthorSpanish";
import FooterSpanish from "@/components/manual/Footer/FooterSpanish";
import ServicesRightSideContentSpanish from "@/components/manual/ServicesRightSideContent/ServicesRightSideContentSpanish";


const BASE_URL = import.meta.env.VITE_APP_BASE_URL;

const SchemeXSpanishMetaTags = () => {
    const breadcrumbStructuredData = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            {
                "@type": "ListItem",
                position: 1,
                name: "Inicio",
                item: window.location.origin + "/es/",
            },
            {
                "@type": "ListItem",
                position: 2,
                name: "Certificación BIS India Bajo Esquema-X",
                item: window.location.href,
            },
        ],
    };
    return (
        <Helmet>
            {/* Basic Meta Tags */}
            <title>
                Certificación BIS Esquema X | Seguridad de Maquinaria y Equipos Eléctricos
            </title>
            <meta
                name="description"
                content="La Certificación BIS Esquema X es requerida para garantizar la calidad y seguridad de equipos de conmutación de baja tensión, aparatos de control, maquinaria y equipos eléctricos."
            />
            <meta
                name="keywords"
                content="Esquema X, BIS Esquema X, Certificación BIS Esquema X, Certificación Esquema X, certificación de maquinaria, certificación de equipos eléctricos"
            />

            <meta name="author" content="Dhruv Aggarwal" />
            <meta name="publisher" content="Sun Certifications India" />
            <meta name="robots" content="index, follow" />


            {/* Canonical URL */}
            <link rel="canonical" href={window.location.href} />

            {/* Open Graph Meta Tags */}
            <meta
                property="og:title"
                content="Certificación BIS Esquema X | Seguridad de Maquinaria y Equipos Eléctricos"
            />
            <meta
                property="og:description"
                content="La Certificación BIS Esquema X es requerida para garantizar la calidad y seguridad de equipos de conmutación de baja tensión, aparatos de control, maquinaria y equipos eléctricos."
            />

            <meta property="og:type" content="website" />
            <meta property="og:url" content={window.location.href} />

            {/* Twitter Meta Tags */}
            <meta
                name="twitter:title"
                content="Certificación BIS Esquema X | Seguridad de Maquinaria y Equipos Eléctricos"
            />
            <meta
                name="twitter:description"
                content="La Certificación BIS Esquema X es requerida para garantizar la calidad y seguridad de equipos de conmutación de baja tensión, aparatos de control, maquinaria y equipos eléctricos."
            />
            <meta name="twitter:card" content="summary_large_image" />

            {/* Breadcrumb Structured Data */}
            <script type="application/ld+json">
                {JSON.stringify(breadcrumbStructuredData)}
            </script>
        </Helmet>
    )
}

const SchemeXSpanishBreadcrumb = () => {
    return (
        <div className="absolute md:top-5 top-3 left-0 w-full z-30">
            <div className="max-w-[80rem] mx-auto px-4">
                <div className="w-fit font-inter">
                    <Breadcrumb>
                        <BreadcrumbList>
                            <BreadcrumbItem>
                                <BreadcrumbLink asChild>
                                    <Link to="/es">Inicio</Link>
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator>
                                <SlashIcon />
                            </BreadcrumbSeparator>
                            <BreadcrumbItem>
                                <BreadcrumbPage>Certificación BIS India Bajo Esquema-X
                                </BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>
            </div>
        </div>
    )
}

const SchemeXSpanishHero = () => {
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
                            Experiencia Certificada
                        </span>
                    </div>

                    <h1 className="leading-[1.2] md:leading-[70px] z-[10] font-playfair font-bold text-[40px] md:text-[52px] text-[#1E1E1E] -mt-2">
                        <span className="relative">
                            Certificación BIS Esquema X
                            <span className="absolute -bottom-2 left-0 w-[120px] h-[8px] bg-[#1A8781]/10 rounded-full"></span>
                        </span>
                    </h1>

                    <p className="font-poppins text-[18px] md:text-[20px] z-[10] leading-[1.6] md:leading-[40px] text-[#332156] max-w-[490px] -mt-2">
                        La Certificación BIS Esquema X cubre Maquinaria, Equipos Eléctricos y Ensamblajes de Componentes, y Sub-ensamblajes bajo la Regulación Técnica Ómnibus (OTR).
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
                                Ver Servicios
                            </span>
                        </div>
                    </div>
                </div>

                {/* Right Side */}
                <SchemeXSpanishHeroContactForm />
            </div>

        </main>
    )
}

const SchemeXSpanishHeroContactForm = () => {
    const [loading, setLoading] = useState(false);

    // Function to get page name based on URL
    const getPageName = () => {
        const path = window.location.pathname;
        // Service pages
        if (path.includes("/es/certificacion-bis-india-bajo-esquema-x"))
            return "Scheme X Spanish";
        if (path.includes("/indian-bis-certification-under-scheme-x"))
            return "Scheme X";
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

        // Full name validation
        const nameRegex = /^[a-zA-ZÀ-ÿ\s.'-]{2,50}$/;
        if (!nameRegex.test(fullName)) {
            toast({
                variant: "destructive",
                title: "Por favor ingrese un nombre completo válido.",
                description: "El nombre solo debe contener letras y espacios.",
            });
            setLoading(false);
            return;
        }

        // Email validation
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        if (!emailRegex.test(email)) {
            toast({
                variant: "destructive",
                title: "Por favor ingrese una dirección de correo electrónico válida.",
                description: "Verifique si el formato de su correo electrónico es correcto",
            });
            setLoading(false);
            return;
        }

        // Phone number validation
        const phoneRegex = /^\+?[0-9\s-]{8,15}$/;
        if (!phoneRegex.test(phoneNumber)) {
            toast({
                variant: "destructive",
                title: "Por favor ingrese un número de teléfono válido",
                description: "El número de teléfono debe tener (8-15 dígitos)",
            });
            setLoading(false);
            return;
        }

        try {
            const response = await axios.post(
                `${BASE_URL}/appointment/submit-appointment`,
                formData
            );

            if (!response.data.success) {
                throw new Error(response.data.message);
            }
            toast({
                title: "¡Formulario de contacto enviado con éxito!",
                description:
                    "Gracias por contactarnos. Nuestro equipo se pondrá en contacto con usted pronto.",
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
                error.response?.data?.message || "Algo salió mal";
            toast({
                variant: "destructive",
                title: errorMessage || "¡Error al enviar el formulario de contacto!",
                description:
                    "Algo salió mal. Por favor verifique sus datos e intente nuevamente.",
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="z-20 w-full md:w-[580px] h-auto md:h-[435px] flex flex-col">
            <div className="flex w-full items-center gap-3">
                <span className="uppercase font-poppins font-semibold text-[18px] md:text-[20px] text-[#008080]">
                    Contáctenos
                </span>
                <Separator className="w-[94.46px] h-[2px] bg-[#008080]" />
            </div>

            <h3 className="text-[30px] md:text-[48px] font-inter font-bold text-[#1E1E1E]">
                Agendar una Cita
            </h3>

            <p className="font-medium font-poppins text-[18px] md:text-[20px] text-[#996C6C]">
                ¿Quiere contactar a nuestro equipo y programar una llamada?
                <span className="text-black"> Pruebe Ahora</span>
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
                        placeholder="Nombre Completo *"
                        className="disabled:opacity-100 w-full focus-visible:ring-1 focus-visible:ring-[#BDBDBD] focus-visible:ring-offset-0 bg-[#F9F9F9] border-2 border-[#BDBDBD] rounded-[12px] h-[54px] md:h-[58px] text-[#7E7E7E]/90 font-poppins font-semibold text-[15px] md:text-[16px] leading-[24px] tracking-wide px-5 placeholder:text-[#7E7E7E]/90 placeholder:font-poppins placeholder:font-semibold placeholder:leading-[24px] placeholder:tracking-wide"
                    />

                    <Input
                        disabled={loading}
                        required
                        type="email"
                        name="email"
                        value={email}
                        onChange={handleOnChange}
                        placeholder="Correo Electrónico *"
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
                        placeholder="Número de Contacto *"
                        className="disabled:opacity-100 w-full focus-visible:ring-1 focus-visible:ring-[#BDBDBD] focus-visible:ring-offset-0 bg-[#F9F9F9] border-2 border-[#BDBDBD] rounded-[12px] h-[54px] md:h-[58px] text-[#7E7E7E]/90 font-poppins font-semibold text-[15px] md:text-[16px] leading-[24px] tracking-wide px-5 placeholder:text-[#7E7E7E]/90 placeholder:font-poppins placeholder:font-semibold placeholder:leading-[24px] placeholder:tracking-wide"
                    />

                    <Input
                        disabled={loading}
                        required
                        type="text"
                        name="companyName"
                        value={companyName}
                        onChange={handleOnChange}
                        placeholder="Nombre de la Empresa *"
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
                        placeholder="Nombre del Producto *"
                        className="disabled:opacity-100 w-full focus-visible:ring-1 focus-visible:ring-[#BDBDBD] focus-visible:ring-offset-0 bg-[#F9F9F9] border-2 border-[#BDBDBD] rounded-[12px] h-[54px] md:h-[58px] text-[#7E7E7E]/90 font-poppins font-semibold text-[15px] md:text-[16px] leading-[24px] tracking-wide px-5 placeholder:text-[#7E7E7E]/90 placeholder:font-poppins placeholder:font-semibold placeholder:leading-[24px] placeholder:tracking-wide"
                    />

                    <Input
                        disabled={loading}
                        required
                        type="text"
                        name="message"
                        value={message}
                        onChange={handleOnChange}
                        placeholder="Certificación Requerida *"
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
                            <span>Enviando</span>
                        </div>
                    ) : (
                        <div className="flex gap-3 items-center justify-center">
                            <span>Agendar Cita</span>
                        </div>
                    )}
                </Button>
            </form>
        </div>
    );
};

const SchemeXSpanishIndex = () => {
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
        overview: "Descripción General",
        process: "Proceso",
        documents: "Documentos",
        conclusion: "Conclusión",
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
    )
}

const SchemeXSpanishMainContent = () => {
    return (
        <div>
            <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12">
                <div className="flex flex-col md:flex-row gap-6 md:gap-[48px] w-full">
                    {/* Left Side */}
                    <SchemeXSpanishMainContentLeft />
                    {/* Right Side */}
                    <ServicesRightSideContentSpanish />
                </div>
            </div>
            <SchemeXSpanishServiceFaq />
            <SchemeXSpanishProductTable />
            <div id="services">
                <ServicesSpanish />
            </div>
        </div>
    )
}

/* eslint-disable react/prop-types */
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
/* eslint-enable react/prop-types */

const SchemeXSpanishMainContentLeftOverviewSection = () => {
    return (
        <div id="overview" className="flex flex-col scroll-mt-20">
            {/* Overview */}
            <div className="flex w-full items-center gap-3">
                <span className="service-left-content-index-heading">Descripción General</span>
                <Separator className="service-left-content-separator" />
            </div>


            <h2 className="service-left-content-heading-two">
                Introducción a la Certificación BIS Esquema X
            </h2>

            <p className="service-left-content-paragraph">
                La Oficina de Normas de India, o BIS por sus siglas en inglés, lanzó el &ldquo;Esquema X&rdquo; el 16 de marzo de 2022, con el objetivo de mejorar el cumplimiento de la seguridad y calidad del producto en India. Los fabricantes indios y extranjeros pueden solicitar la certificación BIS para Maquinaria y equipos eléctricos, componentes como ensamblajes, sub-ensamblajes y Herramientas especificadas en el Anexo-II del Esquema-X y obtener la certificación antes de exportar, vender o distribuir en India.
            </p>


            <p className="service-left-content-paragraph">
                Bajo el Esquema X, los fabricantes pueden solicitar una Licencia BIS o un Certificado de Conformidad (CoC) para equipos de conmutación y control de baja tensión, maquinaria y equipos eléctricos. Una vez que los fabricantes están certificados, se les permite usar la marca estándar BIS, indicando que sus productos están de acuerdo con los estándares establecidos en India.
            </p>


            <p className="service-left-content-paragraph">
                La certificación, al tiempo que promueve el producto y el cumplimiento de las Normas Indias y las Regulaciones Gubernamentales, ayuda a desarrollar confianza y seguridad de los consumidores en los productos certificados.
            </p>


            <h2 className="service-left-content-heading-three">
                ¿Qué es la Certificación Esquema X?
            </h2>


            <p className="service-left-content-paragraph">
                El Esquema X es un esquema de certificación de productos desarrollado bajo las Regulaciones de Evaluación de Conformidad BIS, 2018 y posteriormente simplificado bajo las Regulaciones de Evaluación de Conformidad BIS (Enmienda), 2022.
            </p>



            <p className="service-left-content-paragraph">
                El objetivo principal es llevar los estándares de seguridad y calidad de India a los estándares globales, especialmente con respecto a la maquinaria industrial y los equipos eléctricos. Los productos fabricados o importados a India bajo este esquema están sujetos a un escrutinio y evaluación rigurosos para demostrar estándares técnicos, de seguridad y de rendimiento.
            </p>


            <p className="service-left-content-paragraph">
                Las disposiciones bajo el alcance original de la Certificación Esquema X se han revisado y ampliado con la Orden de Seguridad de Maquinaria y Equipos Eléctricos (Regulación Técnica Ómnibus) recién emitida, 2024, que está bajo la jurisdicción del Ministerio de Industrias Pesadas y ha sido puesta en vigor por el BIS. La orden entra en vigor el 1 de septiembre de 2026 y cubre un amplio espectro de maquinaria y equipos eléctricos como bombas para manejo de líquidos, compresores, grúas, máquinas eléctricas rotativas, transformadores y equipos de conmutación y control.
            </p>


            <p className="service-left-content-paragraph">
                Los ensamblajes, sub-ensamblajes y componentes de dicha maquinaria o equipo también forman parte del alcance de certificación según la Sección 16 de la Ley de la Oficina de Normas de India, 2016.
            </p>

            <p className="service-left-content-paragraph">
                Además, bajo las Reglas CMVR de 1989 (Regulación de Construcción y Fabricación de Válvulas), Bowser y otros tipos de equipos de construcción bajo la jurisdicción del Esquema X, se aseguran de que el mercado no quede expuesto a equipos que carecen de los requisitos de seguridad y estándares técnicos.
            </p>


            <h2 className="service-left-content-heading-three">
                Regulación Técnica Ómnibus (OTR)
            </h2>


            <p className="service-left-content-paragraph">
                El Ministerio de Industrias Pesadas emitió la &ldquo;Regulación Técnica Ómnibus sobre Órdenes de Seguridad (Seguridad de Maquinaria y Equipos Eléctricos)&rdquo; a través de la notificación E-Gazette del 28 de agosto de 2024. Esta innovadora regulación tiene la intención de mejorar la seguridad, calidad y cumplimiento de maquinaria, equipos eléctricos y sus ensamblajes, sub-ensamblajes y componentes, bajo el Esquema X de la Regulación BIS, 2016.
            </p>


            <p className="service-left-content-paragraph">
                Bajo la OTR, se incluyen todas las categorías de maquinaria y equipos eléctricos, y todas sus partes y componentes. Sin embargo, algunas categorías están específicamente excluidas:
            </p>

            <PointsListWithoutHeading
                points={[
                    "Cualquier maquinaria y componentes que sean parte de cualquier otra orden bajo la Sección 16 que sea emitida bajo la Ley de la Oficina de Normas de India, 2016.",
                    "Productos domésticos manufacturados y artículos que solo están destinados para exportación.",
                    "Maquinaria y equipos de construcción que están bajo las Reglas CMVR, 1989, prescritas por el Ministerio de Transporte por Carretera y Carreteras (MoRTH).",
                ]}
            />


            <p className="service-left-content-paragraph">
                Estas excepciones se hacen para facilitar el cumplimiento y evitar la duplicación innecesaria de regulación con el fin de promover la facilidad de hacer negocios.
            </p>



            <p className="service-left-content-paragraph">
                La Regulación Técnica Ómnibus, 2024 cubre toda la maquinaria y equipos eléctricos, incluidos los equipos de conmutación y control de baja tensión notificados por el Ministerio de Industrias Pesadas, serán tratados bajo el marco de Esquema X de Certificación BIS. La Orden entrará en vigor el 1 de septiembre de 2026 para que los fabricantes e importadores tengan suficiente para modificar sus operaciones según las Órdenes emitidas.
            </p>


            <h2 className="service-left-content-heading-three">
                Certificación BIS bajo la Regulación Técnica Ómnibus
            </h2>


            <p className="service-left-content-paragraph">
                Según la OTR 2024, los fabricantes, así como los importadores, de maquinaria y equipos eléctricos que incluyen bombas, bombas, compresores, centrífugas, grúas, transformadores y equipos de conmutación deben solicitar la Certificación BIS bajo el Esquema X.
            </p>



            <p className="service-left-content-paragraph">
                Bajo el Esquema X, los fabricantes pueden optar por solicitar:
            </p>


            <PointsListWithoutHeading
                points={["Una Licencia BIS, o", "Un Certificado de Conformidad (CoC)"]}
            />


            <p className="service-left-content-paragraph">
                Los productos que llevan la Marca Estándar BIS que es una Marca de Conformidad que certifica y asegura a los usuarios que el producto es seguro, confiable y de buena calidad. También es una marca de confianza y realmente buen rendimiento.
            </p>


            <h3 className="service-left-content-heading-three">
                Nota Especial para MSMEs
            </h3>


            <p className="service-left-content-paragraph">
                Al igual que con muchos otros sectores, las Micro, Pequeñas y Medianas Empresas (MSMEs) también deben cumplir con el Esquema X y obtener la Certificación BIS para su maquinaria y equipos eléctricos. Si bien puede parecer que el cumplimiento de los requisitos regulatorios puede ser desafiante, el certificado del Esquema X es una adición de valor y ventaja para las MSMEs por las siguientes razones:
            </p>


            <PointsListWithoutHeading
                points={[
                    "Demuestra adherencia a las obligaciones legales y otros requisitos establecidos por el gobierno.",
                    "Aumenta la reputación del producto y la confianza del consumidor.",
                    "Facilita el acceso a un mercado doméstico y extranjero más grande.",
                    "Mejora la posición de la MSME a nivel mundial con respecto a la competitividad, seguridad y calidad.",
                ]}
            />


            <h3 className="service-left-content-heading-three">
                Logotipo BIS Esquema X
            </h3>



            <p className="service-left-content-paragraph">
                La marca estándar BIS del Esquema X forma una marca de calidad y un principio de confianza. El Logotipo contiene:
            </p>



            <PointsListWithoutHeading
                points={[
                    "el número estándar se muestra en la parte superior del logotipo; y",
                    "el número de licencia se muestra en la parte inferior del Logotipo en el formato: CM/L-XXXXXXXXXX",
                ]}
            />



            <p className="service-left-content-paragraph">
                Esta marca significa que se ha emitido con éxito una Licencia BIS al fabricante. Le da derecho al fabricante a colocar la Marca BIS y asegura a los consumidores que el producto es auténtico y seguro.
            </p>


            <div className="flex justify-center mt-[20px] md:mt-[26px]">
                <img
                    src="/services-images/scheme-x-logo.png"
                    alt="Logotipo BIS Esquema X"
                    title="Certificación BIS Esquema X"
                    className="max-w-full h-auto rounded-lg shadow-md"
                />
            </div>


            <h3 className="service-left-content-heading-three">
                Implicaciones Legales
            </h3>


            <p className="service-left-content-paragraph">
                La Marca Estándar BIS es una marca de confianza y calidad. La marca solo está disponible después de que exista un contrato válido. Solo un contrato válido permite al propietario usar la marca. Usar la marca sin un contrato válido es una ofensa bajo la constitución india y es igual a tener una marca legal. El propietario de la marca está bajo fuertes restricciones para el uso de la licencia CM/L-XXXXXXXXXX para productos que no tienen certificación BIS.
            </p>




            <p className="service-left-content-paragraph">
                Se deduce que cada productor está obligado a:
            </p>


            <PointsListWithoutHeading
                points={[
                    "Adquirir una Licencia BIS válida bajo el Esquema X.",
                    "Satisfacer los requisitos relevantes de las Normas Indias; y",
                    "Fijar adecuadamente los productos con el Logotipo BIS aprobado.",
                ]}
            />


            <p className="service-left-content-paragraph">
                Este marco regulatorio se extiende para proteger los intereses de consumidores y empresarios, fomentando un mercado que enfatiza la seguridad, la apertura y la confianza.
            </p>



            <h2 className="service-left-content-heading-three">
                Diferencias Clave Entre el Esquema-I y el Esquema-X
            </h2>


            <h3 className="service-left-content-heading-three">
                Esquema-I
            </h3>


            <PointsListWithoutHeading
                points={[
                    "Incluye una categoría más amplia de productos de consumo como electrónicos, electrodomésticos e incluso productos industriales.",
                    "Los productos que reciben un certificado bajo este esquema deben tener la Marca ISI Estándar.",
                    "Se relaciona tanto con fabricantes nacionales como extranjeros.",
                    "Implica auditorías de fábrica y pruebas de muestras para determinar la calidad y el cumplimiento de las Normas Indias.",
                ]}
            />

            <h3 className="service-left-content-heading-three">
                Esquema-X
            </h3>

            <PointsListWithoutHeading
                points={[
                    "Aborda productos de ingeniería de alto riesgo e industriales críticos para la seguridad, que incluyen equipos eléctricos, maquinaria y sistemas industriales de considerable servicio.",
                    "La certificación es de mayor rigor que el Esquema-I. Implica informes técnicos avanzados, verificación de cumplimiento y auditorías de certificación extensivas.",
                    "El Esquema-X tiende a ser más costoso que el Esquema-I debido a la documentación de cumplimiento adicional.",
                    "Cualquier negocio que maneje equipos eléctricos o maquinaria industrial está obligado a obtener certificación bajo el Esquema-X.",
                ]}
            />

        </div>
    )
}

const SchemeXSpanishMainContentLeftProcessSection = () => {
    return (
        <div id="process" className="flex flex-col scroll-mt-20">
            {/* Process */}
            <div className="flex w-full items-center gap-3">
                <span className="service-left-content-index-heading">Proceso</span>
                <Separator className="service-left-content-separator" />
            </div>

            <h2 className="service-left-content-heading-two">
                Pasos para Obtener la Certificación Bajo el BIS Esquema-X
            </h2>


            <p className="service-left-content-paragraph">
                La emisión del Certificado BIS bajo el Esquema-X es una actividad sistemática destinada a garantizar que el fabricante cumpla con los estándares de seguridad, calidad y cumplimiento aplicables. El proceso es el siguiente:
            </p>


            <PointsListWithoutHeading
                points={[
                    "Verificar Alcance: Determine si su producto está dentro del alcance del Esquema-X y si cumple con los requisitos de seguridad BIS. Verifique las Normas Indias relevantes y el cronograma técnico para determinar si podrá cumplir.",
                    "Preparar los Documentos Requeridos: Los fabricantes deben recopilar y organizar los siguientes documentos: Certificados de negocio registrados, Documentos de base de diseño, Documentos de fábrica y flujo de proceso, Informes de prueba de servicio (si corresponde), Documentos de aseguramiento y control de calidad.",
                    "Construir el Archivo Técnico: Un archivo técnico es una parte indispensable para la solicitud de extensión de un certificado. Debe contener: Especificaciones técnicas del producto, Información de métodos y técnicas, Documentos de cumplimiento y prueba, Limitación y propósito previsto del producto, Documentación de aseguramiento de calidad, Trazabilidad de materias primas, trazabilidad de subcontratos y el resto de la evidencia, Conformidad con los estándares dentro del alcance enmarcado.",
                    "El Formulario de Solicitud: El formulario de solicitud se puede presentar electrónicamente en el sitio web del BIS para el lugar designado. La liquidación de la tarifa de solicitud es imprescindible. El resto de los documentos que verifican la solicitud deben incluirse para una evaluación adecuada.",
                    "Inspección de Fábrica: Para fabricantes nacionales: La inspección se realiza durante un período máximo de 2 días. Para fabricantes extranjeros: La inspección se realiza durante un período máximo de 3 días (días adicionales pueden acumularse debido a solicitudes adicionales).",
                    "Prueba de Muestras de Productos: La prueba de muestras se realiza ya sea en el sitio del fabricante o en laboratorios aprobados por BIS subcontratados (se permite la prueba subcontratada). La prueba demuestra el cumplimiento de las normas indias relevantes.",
                    "Emisión de Certificación: Si un producto cumple con todas las condiciones, BIS otorga a cada producto una Licencia o un Certificado de Conformidad (CoC). La Marca Estándar BIS puede ser utilizada libremente por el fabricante en todos los productos certificados.",
                ]}
            />


            <p className="service-left-content-paragraph">
                Este archivo sirve como evidencia técnica y estadística de la afirmación del producto que sustenta los estándares de rastreo de seguridad.
            </p>


            <p className="service-left-content-paragraph">
                Durante el período de inspección, se espera que los funcionarios del BIS: Analicen el archivo técnico, Evalúen las formas de fabricación junto con los sistemas de aseguramiento de calidad de apoyo, Observen las pruebas del producto, Determinen el incumplimiento (si lo hay) y proporcionen pasos correctivos. Se proporciona un informe detallado de la auditoría al solicitante después de la visita.
            </p>



            <p className="service-left-content-paragraph">
                Esta estrategia mantiene el cumplimiento con la Norma BIS y es un reconocimiento del cumplimiento indio e internacional, acorralando a la industria en la confianza del consumidor hacia la seguridad y la calidad.
            </p>


            <h2 className="service-left-content-heading-three">
                Procedimiento para Fabricantes Nacionales
            </h2>


            <p className="service-left-content-paragraph">
                Los fabricantes nacionales siguen un enfoque directo al obtener la Licencia BIS bajo el Esquema-X. Los pasos directos a seguir incluyen:
            </p>


            <PointsListWithoutHeading
                points={[
                    "Documentación: Todos los documentos relacionados con el esquema deben recopilarse y prepararse.",
                    "Ejecución de la Solicitud: La solicitud debe presentarse junto con las tarifas relevantes.",
                    "Investigación sobre la Solicitud: Cualquier solicitud presentada está sujeta a escrutinio y un conjunto subsiguiente de preguntas es generado por BIS.",
                    "Designación de Auditores: Los auditores son designados por BIS, pero el individuo nominado está sujeto al pago de las tarifas de auditoría.",
                    "Auditoría de Fábrica: Se realiza un examen y encuesta de auditoría de obras en el sitio y se recopilan muestras relevantes.",
                    "Evaluación de Muestras: Las muestras se evalúan en un laboratorio reconocido por BIS. El solicitante paga todas las tarifas de prueba de laboratorio reconocido por BIS.",
                    "Pago de Tarifas de Licenciamiento y Marcado: Los pagos requeridos se completan a BIS.",
                    "Concesión de Licenciamiento: El certificado que otorga permiso para usar la Marca BIS es otorgado por BIS.",
                ]}
            />


            <p className="service-left-content-paragraph">
                <strong>Cronograma Típico:</strong> Se necesitan cerca de 90 días hábiles (según la práctica de BIS). Esto siempre que no haya no conformidades clave.
            </p>


            <h2 className="service-left-content-heading-three">
                Procedimiento para Fabricantes Extranjeros
            </h2>


            <p className="service-left-content-paragraph">
                A diferencia de los fabricantes nacionales, los fabricantes extranjeros que solicitan un certificado BIS bajo el Esquema-X deben cumplir con un proceso más estricto y pasos adicionales. El procedimiento se detalla de la siguiente manera.
            </p>

        </div>
    )
}

const SchemeXSpanishMainContentLeftDocumentsSection = () => {
    return (
        <div id="documents" className="flex flex-col scroll-mt-20">
            {/* Documents */}
            <div className="flex w-full items-center gap-3">
                <span className="service-left-content-index-heading">Documentos</span>
                <Separator className="service-left-content-separator" />
            </div>

            <h2 className="service-left-content-heading-two">
                Documentos Clave Requeridos para la Certificación BIS Esquema X
            </h2>


            <p className="service-left-content-paragraph">
                Para agilizar el proceso de certificación BIS, los fabricantes deben recopilar y presentar los siguientes documentos durante la fase de registro:
            </p>

            <div className="mt-[16px] md:mt-[24px]">
                <Table className="min-w-full divide-y divide-gray-200 shadow-sm rounded-lg">
                    <TableHeader className="bg-[#F9F7F2]">
                        <TableRow className="bg-[#1A8781]/10">
                            <TableHead className="px-6 py-3 text-left text-xs md:text-base font-geist font-medium text-gray-700 uppercase tracking-wider rounded-tl-lg">
                                N° Serie
                            </TableHead>
                            <TableHead className="px-6 py-3 text-left text-xs md:text-base font-geist font-medium text-gray-700 uppercase tracking-wider">
                                Documento Requerido
                            </TableHead>
                            <TableHead className="px-6 py-3 text-left text-xs md:text-base font-geist font-medium text-gray-700 uppercase tracking-wider rounded-tr-lg">
                                Detalles
                            </TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody className="bg-white divide-y divide-gray-200">
                        <TableRow className="hover:bg-gray-50">
                            <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                                1.
                            </TableCell>
                            <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d] font-medium">
                                Nombre y Dirección (Fábrica y Oficina)
                            </TableCell>
                            <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                                Nombre legal completo y direcciones físicas del sitio de fabricación y oficina
                            </TableCell>
                        </TableRow>
                        <TableRow className="hover:bg-gray-50">
                            <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                                2.
                            </TableCell>
                            <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d] font-medium">
                                Información PAN y GST
                            </TableCell>
                            <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                                Número de Cuenta Permanente (PAN) y detalles de registro GST
                            </TableCell>
                        </TableRow>
                        <TableRow className="hover:bg-gray-50">
                            <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                                3.
                            </TableCell>
                            <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d] font-medium">
                                Detalles de Contacto
                            </TableCell>
                            <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                                Dirección de correo electrónico, número de móvil y teléfono fijo para comunicaciones oficiales
                            </TableCell>
                        </TableRow>
                        <TableRow className="hover:bg-gray-50">
                            <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                                4.
                            </TableCell>
                            <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d] font-medium">
                                Detalles de Gestión
                            </TableCell>
                            <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                                Nombres, roles e identificaciones de ejecutivos clave y firmante autorizado
                            </TableCell>
                        </TableRow>
                        <TableRow className="hover:bg-gray-50">
                            <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                                5.
                            </TableCell>
                            <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d] font-medium">
                                Descripción del Producto
                            </TableCell>
                            <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                                Detalles de maquinaria y equipo cubiertos bajo el Primer Anexo de la Regulación Técnica Ómnibus
                            </TableCell>
                        </TableRow>
                        <TableRow className="hover:bg-gray-50">
                            <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                                6.
                            </TableCell>
                            <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d] font-medium">
                                Clasificación del Producto
                            </TableCell>
                            <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                                Tipo específico, modelo y variedad para el cual se solicita la licencia BIS
                            </TableCell>
                        </TableRow>
                        <TableRow className="hover:bg-gray-50">
                            <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                                7.
                            </TableCell>
                            <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d] font-medium">
                                Archivo Técnico
                            </TableCell>
                            <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                                Todos los detalles técnicos relacionados con el producto y detalles sobre la unidad de fabricación.
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </div>

            <h3 className="service-left-content-heading-three">
                Validez y Proceso de Renovación del Certificado Esquema-X:
            </h3>

            <PointsListWithoutHeading
                points={[
                    "Validez y Renovación de Licencia: Las Licencias BIS bajo el Esquema-X se emiten por un período de 3 a 6 años para producción continua. Una vez que expire el período, la licencia puede renovarse por la misma duración mediante la presentación de una solicitud de renovación, la tarifa requerida y documentos de cumplimiento.",
                    "Certificado de Conformidad (CoC): Un CoC se emite para producción única, y es aplicable tanto para fabricantes nacionales como extranjeros. Dado que solo se aplica a un único lote, un CoC no tiene opción de renovación.",
                    "Informe de Pruebas de Productos: Cuando los informes de prueba se preparan en el laboratorio del fabricante, los funcionarios del BIS los verifican durante la inspección de fábrica realizando pruebas de testigos. Si las pruebas se realizan en instalaciones subcontratadas, esas instalaciones también son inspeccionadas y aprobadas por BIS.",
                    "Revisión de Solicitud de Renovación: Para validez ininterrumpida, un fabricante debe continuar cumpliendo con las disposiciones del Esquema-X. Según la Regulación 8 de las Regulaciones de Evaluación de Conformidad BIS, la Oficina de Normas de India procesa la solicitud de renovación en el formulario VIII. La renovación se realiza solo después de verificar un cumplimiento satisfactorio.",
                ]}
            />
        </div>
    )
}

const SchemeXSpanishMainContentLeftConclusionSection = () => {
    return (
        <div id="conclusion" className="flex flex-col scroll-mt-20">
            {/* Conclusion */}
            <div className="flex w-full items-center gap-3">
                <span className="service-left-content-index-heading">Conclusión</span>
                <Separator className="service-left-content-separator" />
            </div>

            <h2 className="service-left-content-heading-two">
                Conclusión
            </h2>

            <p className="service-left-content-paragraph">
                La Certificación BIS Esquema-X sigue siendo vital para mantener la seguridad, confiabilidad y calidad de los equipos de conmutación y control de baja tensión, maquinaria y equipos eléctricos. Para los fabricantes de máquinas herramientas aplicables al procesamiento de piedra, cerámica, concreto, cemento asfáltico y vidrio mineral, la certificación BIS Esquema-X es obligatoria.
            </p>


            <p className="service-left-content-paragraph">
                Al cumplir con estas obligaciones, los fabricantes garantizan la conformidad del producto, mejoran la confianza del consumidor, así como mejoran su credibilidad en el mercado. El Esquema-X garantiza que la producción sea lo más fluida posible, que se cumplan los estándares de seguridad en todo el mundo y que las marcas reconocidas obtengan una reputación positiva.
            </p>

        </div>
    )
}

const SchemeXSpanishMainContentLeft = () => {
    return (
        <div className="flex-1">
            <div className="flex flex-col gap-[20px] md:gap-[40px]">

                {/* Overview Section */}
                <SchemeXSpanishMainContentLeftOverviewSection />

                {/* Divider */}
                <div className="service-left-content-divider" />

                {/* Process Section */}
                <SchemeXSpanishMainContentLeftProcessSection />

                {/* Divider */}
                <div className="service-left-content-divider" />

                {/* Documents Section */}
                <SchemeXSpanishMainContentLeftDocumentsSection />

                {/* Divider */}
                <div className="service-left-content-divider" />

                {/* Conclusion Section */}
                <SchemeXSpanishMainContentLeftConclusionSection />

                {/* Divider */}
                <div className="service-left-content-divider" />

                <ServiceAuthorSpanish />
            </div>
        </div>
    )
}

const SchemeXSpanishServiceFaq = () => {
    const faqData = [
        { question: "1. ¿Qué es el Esquema X bajo la certificación BIS?", answer: "El Esquema X es un esquema de evaluación de la conformidad introducido por el BIS indio para maquinaria y equipo eléctrico. Asegura el cumplimiento de estrictos estándares de seguridad y técnicos especificados en la Regulación Técnica Ómnibus." },
        { question: "2. ¿El Esquema X es diferente de la certificación de marca ISI?", answer: "Sí. La marca ISI es generalmente para bienes de consumo y cumplimiento básico del producto, mientras que el Esquema X se aplica a productos complejos y de grado industrial que requieren pruebas y certificación avanzadas a través de un certificado BIS o licencia BIS." },
        { question: "3. ¿Quién necesita solicitar la certificación del Esquema X?", answer: "Los fabricantes e importadores de maquinaria y equipo eléctrico listados bajo la Regulación Técnica Ómnibus deben solicitar el Esquema X y obtener una certificación BIS válida para vender o distribuir legalmente sus productos en India. Los fabricantes globales o fabricantes extranjeros que pretendan vender productos en India también deben cumplir con estas regulaciones." },
        { question: "4. ¿Cuál es el costo de la certificación BIS Esquema X?", answer: "El costo del Esquema X incluye tarifas de solicitud, tarifas de certificación, cargos de revisión de archivos técnicos, costos de inspección de fábrica y cargos de pruebas de productos. En promedio, comienza en ₹2,000 para la solicitud y puede aumentar dependiendo de la complejidad del producto. Para más detalles contáctenos en admin@bis-certifications.com." },
        { question: "5. ¿Cuánto tiempo lleva obtener una licencia BIS bajo el Esquema X?", answer: "El cronograma varía según la documentación, los requisitos de prueba y las inspecciones de fábrica. Típicamente, toma de 4 a 6 semanas desde la fecha de registro BIS exitoso y presentación de la solicitud para fabricantes indios y de 60 a 90 días para fabricantes extranjeros." },
        { question: "6. ¿Las MIPYMES también pueden solicitar la certificación BIS bajo el Esquema X?", answer: "Absolutamente. De hecho, el BIS indio alienta a las MIPYMES a solicitar una licencia BIS o certificado de conformidad bajo el Esquema X para impulsar la calidad, el cumplimiento y la competitividad en el sector industrial." },
        { question: "7. ¿La certificación BIS bajo el Esquema X es obligatoria para las exportaciones?", answer: "No. Los productos fabricados exclusivamente para exportación están exentos bajo la Regulación Técnica Ómnibus. Sin embargo, los productos destinados a los mercados indios deben estar certificados bajo el Esquema X." },
        { question: "8. ¿Cuál es la validez de la licencia BIS bajo el Esquema X?", answer: "Una licencia BIS bajo el Esquema X es generalmente válida por 3-6 años y debe renovarse en consecuencia. La renovación implica el pago de la tarifa anual de certificación BIS y puede requerir reevaluación dependiendo de los cambios en el alcance del producto o los estándares." },
        { question: "9. ¿Los fabricantes extranjeros pueden solicitar la certificación del Esquema X?", answer: "Sí, los fabricantes extranjeros pueden solicitar la certificación del Esquema X a través de un representante indio autorizado. El BIS indio requiere una inspección de fábrica, que puede tomar 3 días para solicitantes extranjeros, junto con el registro BIS estándar y los procesos de prueba." },
        { question: "10. ¿Qué es un Archivo Técnico y por qué se requiere?", answer: "Un Archivo Técnico es un expediente de cumplimiento detallado requerido bajo el Esquema X. Incluye procesos de fabricación, detalles del producto, informes de prueba y documentos de control de calidad. Apoya la conformidad del producto con las Normas Indias relevantes durante el proceso de certificación BIS." },
        { question: "11. ¿Cómo se relaciona el Esquema X con la Regulación Técnica Ómnibus?", answer: "La Regulación Técnica Ómnibus exige el uso del Esquema X para categorías específicas de maquinaria y equipo eléctrico en India. Los productos listados bajo la regulación deben estar certificados bajo el Esquema X para obtener un certificado BIS válido o licencia BIS." },
        { question: "12. ¿Se puede revocar un certificado BIS bajo el Esquema X?", answer: "Sí. El BIS indio puede suspender o cancelar una licencia BIS o certificado bajo el Esquema X si se encuentra incumplimiento durante la vigilancia o si el producto no cumple con las Normas Indias requeridas." },
        { question: "13. ¿Cuál es la diferencia entre licencia BIS y certificado BIS bajo el Esquema X?", answer: "Una licencia BIS se emite típicamente a fabricantes indios, mientras que un certificado de conformidad BIS (CoC) a menudo se emite a fabricantes extranjeros o para casos específicos. Ambos sirven al mismo propósito: garantizar el cumplimiento del producto bajo el Esquema X." },
        { question: "14. ¿Se permite la marca ISI para productos certificados bajo el Esquema X?", answer: "No. Los productos bajo el Esquema X no llevan la marca ISI. En cambio, muestran la marca estándar BIS relevante para el esquema de certificación, según lo regido por el BIS indio." },
        { question: "¿Cómo sé si mi maquinaria requiere certificación del Esquema X?", answer: "Verifique la lista oficial en la Regulación Técnica Ómnibus o consulte con un consultor BIS para verificar si su maquinaria cae bajo los requisitos de certificación obligatoria del Esquema X." }
    ];

    return (
        <section id="faqs" className="my-2 scroll-mt-20" aria-label="Frequently Asked Questions">
            <div className="max-w-[88rem] mx-auto px-4 py-8 md:p-12">
                <h4 className="text-[32px] md:text-[48px] text-center font-geist font-semibold text-[#181818]">
                    Preguntas Frecuentes
                </h4>
                <p className="text-[#52525b] text-center text-[16px] md:text-[20px] font-geist">
                    ¿No puedes encontrar la respuesta que buscas?{" "}
                    <a href="/contact" className="text-[#27272a] font-geist text-[20px] font-medium underline underline-offset-4 hover:text-[#1A8781] transition-colors">
                        ¡Contáctanos!
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

const SchemeXSpanishProductTable = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const table2Ref = useRef(null);
    const table3Ref = useRef(null);

    return (
        <div className="w-full pb-12">
            <div className="max-w-[88rem] mx-auto px-4 md:px-12">
                <div className="flex flex-col gap-2 mt-6">
                    <h2 className="text-[28px] md:text-[40px] font-roboto font-bold text-[#131316] leading-none">
                        Estándar de Seguridad por Producto
                    </h2>

                    <p className="font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-none mb-6">
                        Descripción de Maquinaria y Equipo Eléctrico
                    </p>
                </div>

                <div className="relative mb-6">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                        <Search className="w-5 h-5 text-gray-400" />
                    </div>
                    <input
                        type="text"
                        placeholder="Buscar por descripción o código HS..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full p-3 pl-12 text-base font-geist text-gray-800 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#1A8781] focus:border-transparent transition-shadow hover:shadow-md"
                    />
                </div>
            </div>

            <div ref={table2Ref}>
                <TypeBTableSpanish tableRef={table2Ref} searchQuery={searchQuery} />
            </div>
            <div ref={table3Ref}>
                <TypeCTableSpanish searchQuery={searchQuery} />
            </div>
        </div>
    );
};

/* eslint-disable react/prop-types */
const TypeBTableSpanish = ({ tableRef, searchQuery }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 20;

    const filteredData = productDataTableSecond.filter(item => {
        if (!searchQuery) return true;
        const query = searchQuery.toLowerCase();
        return (
            item.isNumber.toLowerCase().includes(query) ||
            item.title.toLowerCase().includes(query)
        );
    });

    useEffect(() => {
        setCurrentPage(1);
    }, [searchQuery]);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);
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
                TIPO B (Normas de Seguridad Genéricas que tratan con uno o más aspectos de seguridad que pueden usarse en una amplia gama de maquinaria)
            </p>

            <div className="rounded-md border bg-white shadow-sm">
                <Table>
                    <TableHeader>
                        <TableRow className="bg-[#F9F7F2] hover:bg-[#F9F7F2]/80">
                            <TableHead className="font-semibold font-geist text-left text-base md:text-lg w-[80px] border-r border-gray-300">
                                S.No.
                            </TableHead>
                            <TableHead className="font-semibold font-geist text-left text-base md:text-lg border-r border-gray-300">
                                Número IS
                            </TableHead>
                            <TableHead className="font-semibold font-geist text-left text-base md:text-lg">
                                Título
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
                                    No se encontraron resultados para &quot;{searchQuery}&quot;
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
                            Anterior
                        </button>
                        <span className="px-4 py-2 font-geist text-sm">
                            Página {currentPage} de {totalPages}
                        </span>
                        <button
                            onClick={handleNextPage}
                            disabled={currentPage === totalPages}
                            className="px-4 py-2 mx-1 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            Siguiente
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

/* eslint-disable react/prop-types */
const TypeCTableSpanish = ({ searchQuery }) => {
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
                TIPO C (Normas de Seguridad de Máquinas que tratan con requisitos de seguridad detallados para una máquina particular o grupo de máquinas)
            </p>

            <div className="rounded-md border bg-white shadow-sm">
                <Table>
                    <TableHeader>
                        <TableRow className="bg-[#F9F7F2] hover:bg-[#F9F7F2]/80">
                            <TableHead className="font-semibold font-geist text-left text-base md:text-lg w-[80px] border-r border-gray-300">
                                S. No.
                            </TableHead>
                            <TableHead className="font-semibold font-geist text-left text-base md:text-lg border-r border-gray-300">
                                Descripción de Maquinaria y Equipo Eléctrico
                            </TableHead>
                            <TableHead className="font-semibold font-geist text-left text-base md:text-lg border-r border-gray-300">
                                Código HS
                            </TableHead>
                            <TableHead className="font-semibold font-geist text-left text-base md:text-lg border-r border-gray-300">
                                Norma India/Cláusula Específica de Norma India
                            </TableHead>
                            <TableHead className="font-semibold font-geist text-left text-base md:text-lg">
                                Título de Norma India
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
                                    No se encontraron resultados para &quot;{searchQuery}&quot;
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
    { id: 1, isNumber: "IS 16504 (Part 1):2019/IEC 60204-1:2016", title: "Safety of Machinery Electrical Equipment of Machines Part 1 General Requirements" },
    { id: 2, isNumber: "IS 16504 (Part 11) : 2020 /IEC 60204-11 : 2018", title: "Safety of Machinery - Electrical Equipment of Machines Part 11 Requirements for Equipment for Voltages above 1 000 V AC or 1 500 V DC and not Exceeding 36 kV" },
    { id: 3, isNumber: "IS/IEC 61508 (Part 1): 2010", title: "Functional Safety of Electrical-Electronic-Programmable Electronic Safety-related Systems Part 1- General Requirements" },
    { id: 4, isNumber: "IS/IEC 60529 : 2001", title: "Degree of Protection Provided by Enclosures (IP Code)" },
    { id: 5, isNumber: "IS 16806 (Part 1) : 2018/ ISO 29042-1 : 2008", title: "Safety of machinery - Evaluation of the emission of airborne hazardous substances - Part 1: Selection of test methods" },
    { id: 6, isNumber: "IS 16806 (Part 2) : 2018/ ISO 29042-2 : 2009", title: "Safety of Machinery Evaluation of the Emission of Airborne Hazardous Substances Part 2 Tracer Gas Method for the Measurement of the Emission Rate of a Given Pollutant" },
    { id: 7, isNumber: "IS 16806 (Part 3) : 2018/ ISO 29042-3 : 2009", title: "Safety of machinery - Evaluation of the emission of airborne hazardous substances - Part 3: Test bench method for the measurement of the emission rate of a given pollutant" },
    { id: 8, isNumber: "IS 16806 (Part 4) : 2018/ ISO 29042-4 : 2009", title: "Safety of machinery - Evaluation of the emission of airborne hazardous substances - Part 4: Tracer method for the measurement of the capture efficiency of an exhaust system" },
    { id: 9, isNumber: "IS 16806 (Part 5) : 2018/ ISO 29042-5 : 2010", title: "Safety of machinery - Evaluation of the emission of airborne hazardous substances - Part 5: Test bench method for the measurement of the separation efficiency by mass of air cleaning systems with unducted outlet" },
    { id: 10, isNumber: "IS 16806 (Part 6) : 2018/ ISO 29042-6 : 2010", title: "Safety of machinery - Evaluation of the emission of airborne hazardous substances - Part 6 : Test bench method for the measurement of the separation efficiency by mass of air cleaning systems with ducted outlet" },
    { id: 11, isNumber: "IS 16806 (Part 7) : 2018/ ISO 29042-7 : 2010", title: "Safety of machinery - Evaluation of the emission of airborne hazardous substances - Part 7: Test bench method for the measurement of the pollutant concentration parameter" },
    { id: 12, isNumber: "IS 16806 (Part 8) : 2018/ ISO 29042-8 : 2011", title: "Safety of machinery - Evaluation of the emission of airborne hazardous substances - Part 8: Room method for the measurement of the pollutant concentration parameter" },
    { id: 13, isNumber: "IS 16806 (Part 9) : 2018/ ISO 29042-9 : 2011", title: "Safety of machinery - Evaluation of the emission of airborne hazardous substances - Part 9: Decontamination index" },
    { id: 14, isNumber: "IS 10481:2020/ ISO 4413:2010", title: "Hydraulic Fluid Power- General Rules and Safety Requirements for Systems and their Components" },
    { id: 15, isNumber: "IS 12725:2021/ ISO 4414:2010", title: "Pneumatic Fluid Power- General Rules and Safety Requirements for Systems and their Components" },
    { id: 16, isNumber: "IS ISO 3457 : 2003", title: "Earth Moving Machinery - Guards - Definitions and Requirements" },
    { id: 17, isNumber: "IS 16501 : 2017/IEC 62061 : 2005", title: "Safety of Machinery-Functional Safety of Safety-Related Electrical Electronic and Programmable Electronic Control Systems" },
    { id: 18, isNumber: "IS 16502 (Part 2) : 2017/ IEC 61496-2 : 2013", title: "Safety of Machinery - Electro-Sensitive Protective Equipment Part 2 Particular Requirements for Equipment Using Active Opto-Electronic Protective Devices AOPDs" },
    { id: 19, isNumber: "IS 16503 (Part 3) : 2017/ IEC 61310-3 : 2007", title: "Safety of Machinery- Indication Marking and Actuation Part 3 Requirements for the Location and Operation of Actuators" },
    { id: 20, isNumber: "IS 16504 (Part 32) : 2017/IEC 60204-32 : 2008", title: "Safety of Machinery-Electrical Equipment of Machines Part 32 Requirements for Hoisting Machines" },
    { id: 21, isNumber: "IS 16503 (Part 1) : 2017/ IEC 61310-1 : 2007", title: "Safety of Machinery - Indication Marking and Actuation Part 1 Requirements for Visual Acoustic and Tactile Signals" },
    { id: 22, isNumber: "IS 16594 (Part 1) : 2017/ IEC 61496-1 : 2012", title: "Safety of Machinery - Electro-Sensitive Protective Equipment Part 1 General Requirements and Tests" },
    { id: 23, isNumber: "IS 16936 : 2018/ IEC TR 62513: 2008", title: "Safety of Machinery Guidelines for the Use of Communication Systems in Safety Related Applications" },
    { id: 24, isNumber: "IS 16503 (Part 2) : 2017/ IEC 61310-2 : 2007", title: "Safety of Machinery - Indication Marking and Actuation Part 2 Requirements for Marking" },
    { id: 25, isNumber: "IS 16807: 2020/", title: "Safety of Machinery Fire Prevention and Fire Protection" },
    { id: 26, isNumber: "IS 16808 : 2018/ ISO 14159 : 2002", title: "Safety of Machinery Hygiene Requirements for the Design of Machinery" },
    { id: 27, isNumber: "IS 16809 ( Part 1) : 2018/ ISO 14122-1 : 2016", title: "Safety of Machinery Permanent Means of Access to Machinery Part 1 Choice of Fixed Means and General Requirements of Access" },
    { id: 28, isNumber: "IS 16809 (Part 2) : 2018/ ISO 14122-2 : 2016", title: "Safety of Machinery Permanent Means of Access to Machinery Part 2 Working Platforms and Walkways" },
    { id: 29, isNumber: "IS 16809 (Part 3) : 2018/ ISO 14122-3 : 2016", title: "Safety of Machinery Permanent Means of Access to Machinery Part 3 Stairs Stepladders and Guard-Rails" },
    { id: 30, isNumber: "IS 16809 (Part 4) : 2018/ ISO 14122-4 : 2016", title: "Safety of Machinery Permanent Means of Access to Machinery Part 4 Fixed Ladders" },
    { id: 31, isNumber: "IS 16810 (Part 1) : 2018/ ISO 13849-1 : 2015", title: "Safety of Machinery Safety Related Parts of Control Systems Part 1 General Principles for Design" },
    { id: 32, isNumber: "IS 16810 (Part 2) : 2018/ ISO 13849-2 : 2012", title: "Safety of Machinery Safety Related Parts of Control Systems Part 2 Validation" },
    { id: 33, isNumber: "IS 16811: 2018/ 14120 : 2015", title: "Safety of Machinery Guards General Requirements for the Design and Construction of Fixed and Movable Guards" },
    { id: 34, isNumber: "IS 16812 : 2018/ ISO 14119 : 2013", title: "Safety of Machinery Interlocking Devices Associated with Guards Principles for Design and Selection" },
    { id: 35, isNumber: "IS 16813 : 2019/ ISO 14118 : 2017", title: "Safety of Machinery Prevention of Unexpected Start-Up" },
    { id: 36, isNumber: "IS 16814 : 2021/ ISO 13857: 2019", title: "Safety of Machinery Safety Distances to Prevent Hazard Zones Being Reached by Upper and Lower Limbs" },
    { id: 37, isNumber: "IS 16815 : 2019/ ISO 13855: 2010", title: "Safety of Machinery Positioning of Safeguards with Respect to the Approach Speeds of Parts of the Human Body" },
    { id: 38, isNumber: "IS 16816 : 2019/ ISO 13854 : 2017", title: "Safety of Machinery Minimum Gaps to Avoid Crushing of Parts of the Human Body" },
    { id: 39, isNumber: "IS 16817: 2020/ ISO 13851 : 2019", title: "Safety of Machinery Two-Hand Control Devices Principles for Design and Selection" },
    { id: 40, isNumber: "IS 16818 : 2018/ ISO 13850 : 2015", title: "Safety of Machinery Emergency Stop Function Principles for Design" },
    { id: 41, isNumber: "IS 16912 : 2018/ ISO 21469 : 2006", title: "Safety of Machinery Lubricants with Incidental Product -- Contact Hygiene Requirements" },
    { id: 42, isNumber: "IS 16834 (Part 1) : 2018/ ISO 14123-1 : 2015", title: "Safety of machinery - Reduction of risks to health resulting from hazardous substances emitted by machinery - Part 1: Principles and specifications for machinery manufacturers" },
    { id: 43, isNumber: "IS 16834 (Part 2) : 2018/ ISO 14123-2 : 2015", title: "Safety of machinery - Reduction of risks to health resulting from hazardous substances emitted by machinery - Part 2: Methodology leading to verification procedures" },
    { id: 44, isNumber: "IS 16835 (Part 1) : 2018/ ISO 13856-1 : 2013", title: "Safety of machinery - Pressure-sensitive protective devices - Part 1: General principles for design and testing of pressure- sensitive mats and pressure-sensitive floors" },
    { id: 45, isNumber: "IS 16835 (Part 2) : 2018/ ISO 13856-2 : 2013", title: "Safety of machinery - Pressure-sensitive protective devices - Part 2: General principles for design and testing of pressure- sensitive edges and pressure-sensitive bars" },
    { id: 46, isNumber: "IS 16835 (Part 3) : 2018/ ISO 13856-3 : 2013", title: "Safety of machinery - Pressure-sensitive protective devices - Part 3: General principles for design and testing of pressure-sensitive bumpers, plates, wires and similar devices." },
    { id: 47, isNumber: "IS 16569: 2018/ ISO 11429:1996", title: "Ergonomics- System of Auditory and Visual Danger and Information Signals" },
    { id: 48, isNumber: "IS 16563 (Part 2) : 2017/ ISO 9355-2:1999", title: "Ergonomic Requirements for the Design of Displays and Control Actuators Part 2 Displays" },
    { id: 49, isNumber: "IS 16563 (Part 3) 2017 / ISO 9355-3:2006", title: "Ergonomic Requirements for the Design of Displays and Control Actuators Part 3 Control Actuators" },
    { id: 50, isNumber: "IS 16572 : 2017/ ISO 14738 : 2002", title: "Safety of Machinery - Anthropometric Requirements for the Design of Workstations at Machinery" },
    { id: 51, isNumber: "IS 16562 ( Part 1) : 2017/ ISO 15536-1 : 2005", title: "Ergonomics - Computer Manikins and Body Templates Part 1 General Requirements" },
    { id: 52, isNumber: "IS 16569:2018/ ISO 11429: 1996", title: "Ergonomics - System of auditory and visual danger and information signals" },
    { id: 53, isNumber: "IS 15296 : 2017/ ISO 11161: 2007", title: "Industrial Automation Systems - Safety of Integrated Manufacturing Systems - Basic Requirements" },
];

const productDataTableThird = [
    { id: 1, description: "All types of Pumps for handling liquids, liquid elevators", hsCode: "841340, 841350, 841360, 841370, 841381, 841382, 841391 and 841392", indianStandard: "-", title: "-" },
    { id: 2, description: "All types of compressors", hsCode: "841430, 841440, 84148011, 84148090, 84149011,84149019, 84149040 and 84149090", indianStandard: "Clause 16 of IS 17093:2019\nClause 6.6 of IS 12258:1987", title: "Technical supply conditions for reciprocating air compressors for general purpose and industrial applications\nTechnical supply condition for air screw compressors (Oil Flooded) for general purpose and industrial applications" },
    { id: 3, description: "All types of machinery for Treatment of material by a process involving a Change of temperature", hsCode: "841932, 841939, 841940, 841950, 841960, 841981, 841989 and 84199090", indianStandard: "-", title: "-" },
    { id: 4, description: "or purifying machinery for liquid and gas", hsCode: "842122, 842129, 842131, 842139, 842191 and 842199", indianStandard: "-", title: "-" },
    { id: 5, description: "All types of machinery for filling, closing, sealing, labelling bottles, packing or wrapping", hsCode: "842220, 842230, 842240 and 842290", indianStandard: "-", title: "-" },
    { id: 6, description: "All types of cranes", hsCode: "842611, 842612, 842619, 842620, 842630, 842641, 842649, 842691 and 84269990", indianStandard: "Clause 66.1, 66.1.1, 66.1.2, 66.1.3, 66.2, 66.2.1, 66.2.2, 66.3, 66.4, 66.5 and 66.6 of IS 3177:2020\nClause 8.1, 8.2, 8.3 & 45 of IS 4573:2020\nIS/ISO 15442:2012", title: "Electric Overhead Travelling Crane and Gantry Crane for all Applications Code of Practice\nPower Driven Mobile Cranes Specification\nCranes - Safety requirements for loader cranes" },
    { id: 7, description: "All types of machinery for construction", hsCode: "8429, 843010, 843020, 843031, 843039, 843041", indianStandard: "IS 17055 (Part 7): 2020\nIS 17055 (Part 8): 2020\nIS 17055 (Part 12): 2020", title: "Earth-Moving Machinery Safety Part 7 Scrapers\nEarth-Moving Machinery Requirements For Graders\nEarth-Moving Machinery Safety Part 12 Road Pavers" },
    { id: 8, description: "All types of weaving machines (looms)", hsCode: "8446, 844811, 844819, 844842 and 844849", indianStandard: "IS 17361 (Part 6) : 2020 / ISO 11111 (Part 6) : 2005", title: "Textile Machinery Safety Requirements Part 6 Fabric Manufacturing Machinery" },
    { id: 9, description: "All types of machinery for making embroidery.", hsCode: "84479020 and 844859", indianStandard: "IS 17361 (Part 1): 2020 / ISO 11111 (Part 1) : 2016", title: "Textile Machiner Safety Requirements Part 1 Common Requirements" },
    { id: 10, description: "All types of metal cutting machines", hsCode: "8456, 8457, 8458, 8459, 8460, 8461 and 846693", indianStandard: "IS 17277 (Part 1): 2019\nISO 16092-1 : 2017\nIS 17259: 2020\nISO 28881 : 2013\nIS 17258: 2019\nISO 23125 : 2015\nIS 17254:2019\nISO 16093 : 2017\nIS 17253 (Part 1): 2019\nISO 16090-1 : 2017", title: "Machine Tools Safety Presses Part 1 General Safety Requirements\nMachine Tools Safety Electro-Discharge Machines\nMachine Tools Safety Turning Machines\nMachine Tools Safety Sawing Machines for Cold Metal\nMachine Tools Safety Machining Centres, Milling Machines, Transfer Machines Part 1 Safety Requirements" },
    { id: 11, description: "All types of machine tools for working stone, ceramics, concrete, asbestos cement or like mineral glass", hsCode: "8464 and 84669100", indianStandard: "-", title: "-" },
    { id: 12, description: "All types of machinery for working rubber and plastics", hsCode: "8477", indianStandard: "IS/ISO 20430: 2020", title: "Plastics and Rubber Machines-Injection Moulding Machines-Safety Requirements" },
    { id: 13, description: "All types of machines including the machines for public works & Building and the machinery & mechanical appliances having individual functions, not specified", hsCode: "84791000, 84798999 and 84799090", indianStandard: "-", title: "-" },
    { id: 14, description: "All types of gears and gearing, toothed wheels, chain sprocket, transmission elements ball or roller screws, gear boxes and speed changers, including torque converters And (or)their assemblies /sub-assemblies /components", hsCode: "84834000 and 84839000", indianStandard: "-", title: "-" },
    { id: 15, description: "All types of Rotary electrical machines such as Generator, etc. Building and the machinery & mechanical appliances having individual functions, not specified", hsCode: "8501 and 8503", indianStandard: "Clause 4.7, 4.8 and 4.12 of section 2,\nclause 7.4 of Section 3, clause 8.6 of Section 4,\nClause 9.4 of section 5 of IS 5422:1996\nClause 11, 21, 22, 23, 25 and 26 of IS 13364\n(Part 1): 1992\nClause 11, 21, 22 23 25 and 26 of IS 13364\n(Part 2): 1992", title: "Turbine type generation\nAc generators driven by reciprocating internal\ncombustion engines - Specification: Part 1\nalternators rated up to 20 kVa\nAc generators driven by reciprocating internal\ncombustion engines - Specification: Part 2\nalternators rated above 20 kVa and up to 1250 kVa" },
    { id: 16, description: "All types of Diesel Generator", hsCode: "8502 and 8503", indianStandard: "Clause 5,6,7,8, 9 & 10 of IS/ISO 8528 (Part 2) : 2018\nClause 6 & 10 of IS/ISO 8528 (Part 3)\nClause 4, 5.5, 7.3.5, 7.3.7 & 7.4 of IS/ISO 8528 (Part 4): 2005\nClause 12, 13, 14, 15 of IS/ISO 8528-5: 2018\nClause 6.4 of IS/ISO 8528 (Part 8): 2016\nClause 9.1 of IS/ISO 8528 (Part 12): 1997", title: "Reciprocating Internal Combustion Engine Driven Alternating Current Generating Sets : Part 2 Engines\nReciprocating internal combustion engine driven alternating current generating sets: Part 3 alternating current generators for generating sets\nReciprocating internal combustion engine driven alternating current generating sets: Part 4 control gear and switchgear\nReciprocating Internal Combustion Engine Driven Alternating Current Generating Sets Part 5 Generating Sets\nReciprocating internal combustion engine driven alternating current generating sets: Part 8\nReciprocating internal combustion engine driven alternating current generating sets: Part 12 emergency power supply to safety" },
    { id: 17, description: "All types of Transformer", hsCode: "850421, 850422, 850423, 850431, 850432, 850433, 850434 and 850490.", indianStandard: "IS/IEC 61558-2-4 : 2009\nIS/IEC 61558-2-6 : 1997\nIS/IEC 61558-2-7 : 2007\nClause 5.6 & Cl 10 of IS 2026 (Part 1)\nClause 7.5, 7.6, 7.7 of IS 2026 (Part 6)", title: "Safety of Transformers, Reactors, Power Supply Units and Similar Product for Supply Voltages up to 1100 V Part 2-4: Particular Requirements and Tests for Isolating Transformers and Power Supply Units Incorporating\nSafety of power transformers, power supply units and similar: Part 2 particular requirement: Sec 6 safety isolating transformers for general use\nSafety of power transformers, power supplies reactors and similar products: Part 2-7 particular requirements and tests for transformers and power supplies for toys\nPower transformers: Part 1 general\nPower transformers: Part 6 reactors" },
    { id: 18, description: "All types of Power Semiconductor Converter", hsCode: "850440", indianStandard: "IS 16539-1-1:2017/ IEC 60146-1-1: 2009", title: "Clause 7 of Semicounductor Converters Part 1 General Requirements and Line Commutated Converters Section 1 Specification of basic requirements" },
    { id: 19, description: "All types of switch gear and control gear equipment operating at voltages not exceeding 1000 volts and (or) their assemblies /sub-assemblies /components", hsCode: "8536, 8537 and 8538", indianStandard: "Clause 8 of IS/IEC 61439 (Part 3): 2012", title: "Low-Voltage switchgear and control gear assemblies: Part 3 distribution boards intended to be operated by ordinary persons (DBO)" },
    { id: 20, description: "All types of switch gear and control gear equipment operating at voltages exceeding 1000 volts and (or) their assemblies /sub-assemblies /components", hsCode: "8535, 8537 and 8538", indianStandard: "-", title: "-" },
];

export const ServicesSpanish = () => {
    return (
        <div className="pt-6 md:pt-12 pb-12  md:pb-16  overflow-x-hidden ">
            <div className="max-w-[80rem] w-full mx-auto">
                <div className="flex flex-col items-center justify-center">
                    <BoxReveal boxColor={"#B6B4DF"} duration={0.5}>
                        <h2 className="text-[30px] md:text-[48px] font-bold font-geist md:font-geist  text-center text-[#1E1E1E] ">
                            Nuestros Servicios
                        </h2>
                    </BoxReveal>

                    <BoxReveal boxColor={"#B6B4DF"} duration={0.5}>
                        <div className="hidden md:flex items-center w-[608.46px] gap-3 h-[35px] mx-auto justify-center">
                            <Separator className="w-[94.46px] h-[2px] bg-[#008080]" />
                            <span className="uppercase font-poppins font-semibold text-[20px] text-[#008080]">
                                El Mejor Consultor de Certificados de India
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
                                alt="BIS"
                                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
                            />
                        </div>
                        <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
                            Marca BIS (Licencia ISI) para Fabricante Extranjero
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
                            Certificación de Registro CDSCO
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
                            Registro BIS (CRS)
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
                            Gestión de Residuos Plásticos
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
                            Certificaciones de Certificado EPR
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
                            Certificaciones de Certificado LMPC
                        </p>
                    </Link>

                    <Link
                        to="/what-is-bis-certificate-indian-bis"
                        className="relative col-span-1 h-[145px] md:h-[240px] bg-[#B5DDEB] rounded-[15px] md:rounded-[20px] shadow-2xl shadow-blue-500/20 flex items-center justify-center md:block"
                    >
                        <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
                            <img
                                src={BISImage}
                                alt="BIS"
                                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
                            />
                        </div>
                        <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
                            Certificado de Registro BIS
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
                            MARCA ISI (BIS) para Fabricantes Indios
                        </p>
                    </Link>
                </div>
            </div>
        </div>
    );
};

const SchemeXSpanish = () => {
    return (
        <div className="relative">
            {/* Scheme X Spanish Meta Tags */}
            <SchemeXSpanishMetaTags />
            {/* Scheme X Spanish Breadcrumb */}
            <SchemeXSpanishBreadcrumb />
            {/* Scheme X Spanish Hero Section */}
            <SchemeXSpanishHero />
            {/* Scheme X Spanish Index Section */}
            <SchemeXSpanishIndex />

            {/* Scheme X Spanish Main Content Section */}
            <SchemeXSpanishMainContent />

            {/* Footer Section */}
            <FooterSpanish />
            {/* Scroll To Top Button Section */}
            <ScrollToTopButton />

        </div>
    )
}

export default SchemeXSpanish


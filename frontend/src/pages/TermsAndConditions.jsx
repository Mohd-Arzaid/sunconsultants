import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, FileText, Scale, AlertTriangle, Users, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "@/common/Footer";
import ScrollToTopButton from "@/components/common/ScrollToTop";
import Navbar from "@/common/Navbar";
import SEOBreadcrumbs from "@/components/common/SEOBreadcrumbs";

const TermsAndConditions = () => {
    const { t } = useTranslation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <>
            <SEOBreadcrumbs customTitle="Terms and Conditions | Sun Certifications India" />
            <Helmet>
                <title>Terms and Conditions | Sun Certifications India</title>
                <meta
                    name="description"
                    content="Read our terms and conditions for using our certification services at Sun Certifications India."
                />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://bis-certifications.com/terms-and-conditions" />
            </Helmet>

            <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
            
            <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
                <div className="container mx-auto px-4 py-8">
                    <div className="max-w-4xl mx-auto">
                        {/* Header */}
                        <div className="text-center mb-12">
                            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                                Terms and Conditions
                            </h1>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                Please read these terms and conditions carefully before using our services.
                            </p>
                            <p className="text-sm text-gray-500 mt-4">
                                Last updated: January 15, 2024
                            </p>
                        </div>

                        {/* Terms Content */}
                        <div className="space-y-8">
                            {/* Acceptance of Terms */}
                            <Card className="border-l-4 border-l-blue-500">
                                <CardContent className="p-8">
                                    <div className="flex items-center mb-6">
                                        <Scale className="h-8 w-8 text-blue-500 mr-3" />
                                        <h2 className="text-2xl font-bold text-gray-900">
                                            Acceptance of Terms
                                        </h2>
                                    </div>
                                    <div className="space-y-4 text-gray-700">
                                        <p>
                                            By accessing and using the services of Sun Certifications India, you accept and agree to be bound by the terms and provision of this agreement.
                                        </p>
                                        <p>
                                            If you do not agree to abide by the above, please do not use this service.
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Services Description */}
                            <Card className="border-l-4 border-l-green-500">
                                <CardContent className="p-8">
                                    <div className="flex items-center mb-6">
                                        <Shield className="h-8 w-8 text-green-500 mr-3" />
                                        <h2 className="text-2xl font-bold text-gray-900">
                                            Services Description
                                        </h2>
                                    </div>
                                    <div className="space-y-4 text-gray-700">
                                        <p>Sun Certifications India provides:</p>
                                        <ul className="list-disc list-inside space-y-2 ml-4">
                                            <li>BIS certification consultation and support</li>
                                            <li>ISI Mark certification assistance</li>
                                            <li>Regulatory compliance guidance</li>
                                            <li>Document preparation and review</li>
                                            <li>Testing coordination and facility liaison</li>
                                        </ul>
                                    </div>
                                </CardContent>
                            </Card>

                            {/* User Responsibilities */}
                            <Card className="border-l-4 border-l-orange-500">
                                <CardContent className="p-8">
                                    <div className="flex items-center mb-6">
                                        <Users className="h-8 w-8 text-orange-500 mr-3" />
                                        <h2 className="text-2xl font-bold text-gray-900">
                                            User Responsibilities
                                        </h2>
                                    </div>
                                    <div className="space-y-4 text-gray-700">
                                        <p>As a user of our services, you agree to:</p>
                                        <ul className="list-disc list-inside space-y-2 ml-4">
                                            <li>Provide accurate and complete information</li>
                                            <li>Maintain confidentiality of your account details</li>
                                            <li>Use our services only for lawful purposes</li>
                                            <li>Comply with all applicable laws and regulations</li>
                                            <li>Respect intellectual property rights</li>
                                        </ul>
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Payment Terms */}
                            <Card className="border-l-4 border-l-purple-500">
                                <CardContent className="p-8">
                                    <div className="flex items-center mb-6">
                                        <FileText className="h-8 w-8 text-purple-500 mr-3" />
                                        <h2 className="text-2xl font-bold text-gray-900">
                                            Payment Terms
                                        </h2>
                                    </div>
                                    <div className="space-y-4 text-gray-700">
                                        <ul className="list-disc list-inside space-y-2 ml-4">
                                            <li>Payment terms will be specified in the service agreement</li>
                                            <li>All fees are non-refundable unless otherwise specified</li>
                                            <li>Additional charges may apply for expedited services</li>
                                            <li>Government fees and testing charges are separate</li>
                                        </ul>
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Limitation of Liability */}
                            <Card className="border-l-4 border-l-red-500">
                                <CardContent className="p-8">
                                    <div className="flex items-center mb-6">
                                        <AlertTriangle className="h-8 w-8 text-red-500 mr-3" />
                                        <h2 className="text-2xl font-bold text-gray-900">
                                            Limitation of Liability
                                        </h2>
                                    </div>
                                    <div className="space-y-4 text-gray-700">
                                        <p>
                                            Sun Certifications India shall not be liable for any indirect, incidental, 
                                            special, consequential, or punitive damages, including without limitation, 
                                            loss of profits, data, use, goodwill, or other intangible losses.
                                        </p>
                                        <p>
                                            Our liability is limited to the amount paid for the specific service 
                                            that gave rise to the claim.
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Intellectual Property */}
                            <Card className="border-l-4 border-l-indigo-500">
                                <CardContent className="p-8">
                                    <div className="flex items-center mb-6">
                                        <Shield className="h-8 w-8 text-indigo-500 mr-3" />
                                        <h2 className="text-2xl font-bold text-gray-900">
                                            Intellectual Property
                                        </h2>
                                    </div>
                                    <div className="space-y-4 text-gray-700">
                                        <p>
                                            All content, trademarks, and data on this website, including but not limited 
                                            to software, databases, text, graphics, icons, hyperlinks, private information, 
                                            designs, and agreements, are the property of or licensed to Sun Certifications India.
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Contact Information */}
                            <Card className="border-l-4 border-l-teal-500">
                                <CardContent className="p-8">
                                    <div className="flex items-center mb-6">
                                        <Mail className="h-8 w-8 text-teal-500 mr-3" />
                                        <h2 className="text-2xl font-bold text-gray-900">
                                            Contact Information
                                        </h2>
                                    </div>
                                    <div className="space-y-4 text-gray-700">
                                        <p>If you have questions about these terms and conditions, please contact us:</p>
                                        <div className="bg-gray-50 p-4 rounded-lg">
                                            <p><strong>Email:</strong> admin@bis-certifications.com</p>
                                            <p><strong>Phone:</strong> +91-8010505057</p>
                                            <p><strong>Address:</strong> New Delhi, India</p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Changes to Terms */}
                            <Card className="bg-blue-50 border-blue-200">
                                <CardContent className="p-8">
                                    <h2 className="text-2xl font-bold text-gray-900 mb-4">
                                        Changes to Terms
                                    </h2>
                                    <p className="text-gray-700">
                                        We reserve the right to modify these terms at any time. Changes will be effective 
                                        immediately upon posting on our website. Your continued use of our services after 
                                        any changes constitutes acceptance of the new terms.
                                    </p>
                                </CardContent>
                            </Card>
                        </div>

                                                 {/* CTA Section */}
                         <div className="mt-16 text-center">
                             <div className="bg-blue-100 p-8 rounded-lg">
                                 <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                     Need Help with Certification?
                                 </h3>
                                 <p className="text-gray-700 mb-6">
                                     Our experts are here to guide you through the certification process.
                                 </p>
                                 <Link
                                     to="/contact"
                                     className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                                 >
                                     Contact Us Today
                                 </Link>
                             </div>
                         </div>
                    </div>
                </div>

                <Footer />
            </div>
            <ScrollToTopButton />
        </>
    );
};

export default TermsAndConditions;

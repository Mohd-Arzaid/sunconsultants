import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Shield, Lock, Eye, FileText, Mail, User } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "@/common/Footer";
import ScrollToTopButton from "@/components/common/ScrollToTop";
import Navbar from "@/common/Navbar";
import SEOBreadcrumbs from "@/components/common/SEOBreadcrumbs";

const PrivacyPolicy = () => {
    const { t } = useTranslation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <>
            <SEOBreadcrumbs customTitle="Privacy Policy | Sun Certifications India" />
            <Helmet>
                <title>Privacy Policy | Sun Certifications India</title>
                <meta
                    name="description"
                    content="Learn about our privacy policy, data protection measures, and how we handle your information at Sun Certifications India."
                />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://bis-certifications.com/privacy-policy" />
            </Helmet>

            <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
            
            <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
                <div className="container mx-auto px-4 py-8">
                    <div className="max-w-4xl mx-auto">
                        {/* Header */}
                        <div className="text-center mb-12">
                            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                                Privacy Policy
                            </h1>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                Your privacy is important to us. This policy explains how we collect, use, and protect your information.
                            </p>
                            <p className="text-sm text-gray-500 mt-4">
                                Last updated: January 15, 2024
                            </p>
                        </div>

                        {/* Privacy Policy Content */}
                        <div className="space-y-8">
                            {/* Information We Collect */}
                            <Card className="border-l-4 border-l-blue-500">
                                <CardContent className="p-8">
                                    <div className="flex items-center mb-6">
                                        <User className="h-8 w-8 text-blue-500 mr-3" />
                                        <h2 className="text-2xl font-bold text-gray-900">
                                            Information We Collect
                                        </h2>
                                    </div>
                                    <div className="space-y-4 text-gray-700">
                                        <p>We collect information you provide directly to us, such as when you:</p>
                                        <ul className="list-disc list-inside space-y-2 ml-4">
                                            <li>Fill out forms on our website</li>
                                            <li>Contact us for certification services</li>
                                            <li>Subscribe to our newsletter</li>
                                            <li>Request quotes or consultations</li>
                                        </ul>
                                        <p>This may include:</p>
                                        <ul className="list-disc list-inside space-y-2 ml-4">
                                            <li>Name and contact information</li>
                                            <li>Company details</li>
                                            <li>Product information</li>
                                            <li>Communication preferences</li>
                                        </ul>
                                    </div>
                                </CardContent>
                            </Card>

                            {/* How We Use Information */}
                            <Card className="border-l-4 border-l-green-500">
                                <CardContent className="p-8">
                                    <div className="flex items-center mb-6">
                                        <FileText className="h-8 w-8 text-green-500 mr-3" />
                                        <h2 className="text-2xl font-bold text-gray-900">
                                            How We Use Your Information
                                        </h2>
                                    </div>
                                    <div className="space-y-4 text-gray-700">
                                        <p>We use the information we collect to:</p>
                                        <ul className="list-disc list-inside space-y-2 ml-4">
                                            <li>Provide and improve our certification services</li>
                                            <li>Communicate with you about your projects</li>
                                            <li>Send you updates about regulations and standards</li>
                                            <li>Respond to your inquiries and support requests</li>
                                            <li>Comply with legal and regulatory requirements</li>
                                        </ul>
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Information Sharing */}
                            <Card className="border-l-4 border-l-orange-500">
                                <CardContent className="p-8">
                                    <div className="flex items-center mb-6">
                                        <Shield className="h-8 w-8 text-orange-500 mr-3" />
                                        <h2 className="text-2xl font-bold text-gray-900">
                                            Information Sharing
                                        </h2>
                                    </div>
                                    <div className="space-y-4 text-gray-700">
                                        <p>We do not sell, trade, or otherwise transfer your personal information to third parties except:</p>
                                        <ul className="list-disc list-inside space-y-2 ml-4">
                                            <li>With your explicit consent</li>
                                            <li>To trusted service providers who assist in our operations</li>
                                            <li>When required by law or to protect our rights</li>
                                            <li>With regulatory bodies for certification purposes</li>
                                        </ul>
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Data Security */}
                            <Card className="border-l-4 border-l-red-500">
                                <CardContent className="p-8">
                                    <div className="flex items-center mb-6">
                                        <Lock className="h-8 w-8 text-red-500 mr-3" />
                                        <h2 className="text-2xl font-bold text-gray-900">
                                            Data Security
                                        </h2>
                                    </div>
                                    <div className="space-y-4 text-gray-700">
                                        <p>We implement appropriate security measures to protect your personal information:</p>
                                        <ul className="list-disc list-inside space-y-2 ml-4">
                                            <li>Secure SSL encryption for data transmission</li>
                                            <li>Regular security audits and updates</li>
                                            <li>Restricted access to personal information</li>
                                            <li>Secure data storage and backup systems</li>
                                        </ul>
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Your Rights */}
                            <Card className="border-l-4 border-l-purple-500">
                                <CardContent className="p-8">
                                    <div className="flex items-center mb-6">
                                        <Eye className="h-8 w-8 text-purple-500 mr-3" />
                                        <h2 className="text-2xl font-bold text-gray-900">
                                            Your Rights
                                        </h2>
                                    </div>
                                    <div className="space-y-4 text-gray-700">
                                        <p>You have the right to:</p>
                                        <ul className="list-disc list-inside space-y-2 ml-4">
                                            <li>Access your personal information</li>
                                            <li>Request corrections to your data</li>
                                            <li>Request deletion of your information</li>
                                            <li>Opt-out of marketing communications</li>
                                            <li>Lodge a complaint with regulatory authorities</li>
                                        </ul>
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Contact Information */}
                            <Card className="border-l-4 border-l-indigo-500">
                                <CardContent className="p-8">
                                    <div className="flex items-center mb-6">
                                        <Mail className="h-8 w-8 text-indigo-500 mr-3" />
                                        <h2 className="text-2xl font-bold text-gray-900">
                                            Contact Us
                                        </h2>
                                    </div>
                                    <div className="space-y-4 text-gray-700">
                                        <p>If you have questions about this privacy policy or our data practices, please contact us:</p>
                                        <div className="bg-gray-50 p-4 rounded-lg">
                                            <p><strong>Email:</strong> admin@bis-certifications.com</p>
                                            <p><strong>Phone:</strong> +91-8010505057</p>
                                            <p><strong>Address:</strong> New Delhi, India</p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Updates to Policy */}
                            <Card className="bg-blue-50 border-blue-200">
                                <CardContent className="p-8">
                                    <h2 className="text-2xl font-bold text-gray-900 mb-4">
                                        Updates to This Policy
                                    </h2>
                                    <p className="text-gray-700">
                                        We may update this privacy policy from time to time. We will notify you of any 
                                        changes by posting the new policy on this page and updating the "Last updated" date.
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

export default PrivacyPolicy;

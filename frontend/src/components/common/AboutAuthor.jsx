const AboutAuthor = () => {
    return (
        <section>
            <div className="bg-[#F9F7F2] border border-gray-200 rounded-lg p-6 md:p-8">
                <h3 className="font-geist text-[18px] md:text-[22px] font-semibold text-[#1A8781] mb-4">
                    About the Author
                </h3>

                <div className="space-y-3">
                    <div>
                        <p className="font-geist text-[16px] md:text-[20px] font-semibold text-[#131316]">
                            Dhruv Aggarwal
                        </p>
                        <p className="font-geist text-[14px] md:text-[18px] text-[#42434d]">
                            Head of Operations at Sun Certifications India
                        </p>
                    </div>

                    <div>
                        <p className="font-geist text-[14px] md:text-[18px] text-[#42434d]">
                            <span className="font-medium">Experience:</span> 10+ years & Handled 1000+ projects
                        </p>
                        <p className="font-geist text-[14px] md:text-[18px] text-[#42434d]">
                            Awarded by many Indian and International organisations
                        </p>
                    </div>

                    <div className="pt-2">
                        <p className="font-geist text-[14px] md:text-[18px] text-[#42434d]">
                            <span className="font-medium">LinkedIn:</span>{" "}
                            <a
                                href="https://www.linkedin.com/in/dhruv-aggarwal-44b116155"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[#1A8781] underline hover:text-[#125E5A]"
                            >
                                linkedin.com/in/dhruv-aggarwal-44b116155
                            </a>
                        </p>
                        <p className="font-geist text-[14px] md:text-[18px] text-[#42434d]">
                            <span className="font-medium">Contact:</span>{" "}
                            <a
                                href="mailto:admin@indiancertifications.com"
                                className="text-[#1A8781] underline hover:text-[#125E5A]"
                            >
                                admin@indiancertifications.com
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutAuthor; 
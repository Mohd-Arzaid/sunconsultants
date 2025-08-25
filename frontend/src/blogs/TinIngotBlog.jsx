import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb"
import { SlashIcon } from "lucide-react"
import { Link } from "react-router-dom"

const TinIngotBlog = () => {
    return (
        <div className="relative w-full">

            <TinIngotBlogBreadcrumb />

            <TinIngotBlogMainContent />


        </div>
    )
}

export default TinIngotBlog

const TinIngotBlogBreadcrumb = () => {
    return (
        <div className="absolute md:top-5 top-3 left-0 w-full z-30">
            <div className="max-w-[80rem] mx-auto px-4">
                <div className="w-fit font-inter">
                    <Breadcrumb>
                        <BreadcrumbList>
                            <BreadcrumbItem>
                                <BreadcrumbLink asChild>
                                    <Link to="/">
                                        Home
                                    </Link>
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator>
                                <SlashIcon />
                            </BreadcrumbSeparator>

                            <BreadcrumbItem>
                                <BreadcrumbLink asChild>
                                    <Link to="/Blogs">
                                        Latest Blogs
                                    </Link>
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator>
                                <SlashIcon />
                            </BreadcrumbSeparator>

                            <BreadcrumbItem>
                                <BreadcrumbPage>
                                    BIS Certification for Tin Ingot under IS 26:2024
                                </BreadcrumbPage>

                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>
            </div>
        </div>
    )
}

const TinIngotBlogMainContent = () => {
    return (
        <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12 pt-[60px] md:pt-[75px]">
            <div className="flex flex-col md:flex-row gap-6 md:gap-[48px] w-full">

                {/* Left Side Content */}
                <TinIngotBlogMainContentLeft />

                {/* Right Side Content */}
                <TinIngotBlogMainContentRight />
            </div>
        </div>
    )
}


const TinIngotBlogMainContentLeft = () => {
    return (
        <div className="">

        </div>
    )
}

const TinIngotBlogMainContentRight = () => {
    return (
        <div className="">

        </div>
    )
}
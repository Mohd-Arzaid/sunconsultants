import { AlignLeft, ArrowRightIcon } from "lucide-react";
import BlogImageOne from "../../assets/images/BlogImageOne.png";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";

const CDSCOContentRight = () => {
  return (
    <div className="flex flex-col gap-4">
      {/* Latest Blogs */}
      <LatestBlog />
    </div>
  );
};

export default CDSCOContentRight;

const LatestBlog = () => {
  const blogPosts = [
    {
      image: BlogImageOne,
      category: "CDSCO",
      title: "QCO Notification for Work Chairs",
      url: "#",
    },
    {
      image: BlogImageOne,
      category: "CDSCO",
      title: "QCO Notification for Work Chairs",
      url: "#",
    },
    {
      image: BlogImageOne,
      category: "CDSCO",
      title: "QCO Notification for Work Chairs",
      url: "#",
    },
    {
      image: BlogImageOne,
      category: "CDSCO",
      title: "QCO Notification for Work Chairs",
      url: "#",
    },
  ];

  return (
    <div className="w-[360px] p-6 rounded-lg bg-gray-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
      <div className="flex gap-2 items-center ">
        <AlignLeft className="text-[#232327]" />
        <h1 className="text-xl font-geist font-semibold  text-[#232327]">
          Latest Blogs
        </h1>
      </div>
      <div className="mt-5 space-y-5">
        {blogPosts.map((post, index) => (
          <div key={index}>
            <div className=" group flex gap-4  transition-all duration-300">
              <img
                src={post.image || "/placeholder.svg"}
                alt="Post Image"
                className="h-20 w-20 object-cover shrink-0 overflow-hidden rounded-md transition-transform duration-300 group-hover:scale-105 "
              />

              <div className=" h-20 w-20 flex flex-1 flex-col justify-between">
                <div className="space-y-2">
                  <Badge
                    variant="outline"
                    className=" bg-emerald-50 font-geist text-emerald-700 border-emerald-200 hover:bg-emerald-100 hover:text-emerald-800"
                  >
                    {post.category}
                  </Badge>
                  <p className="line-clamp-2 font-geist text-sm font-normal text-zinc-900">
                    {post.title}
                  </p>

                  <Button
                    variant="link"
                    className="text-blue-900 font-geist hover:text-blue-950 p-0 h-auto font-normal text-sm"
                  >
                    Read More
                    <ArrowRightIcon className="-ml-1 mt-0.5 w-2 h-2" />
                  </Button>
                </div>
              </div>
            </div>

            {index < blogPosts.length - 1 && (
              <div className="mt-5 h-px w-full bg-gradient-to-r from-transparent via-border to-transparent" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

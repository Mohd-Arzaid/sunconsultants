import { Skeleton } from "./skeleton";

const BlogsSkeleton = () => {
  return (
    <div className="relative w-full min-h-screen">
      {/* Breadcrumb Skeleton */}
      <div className="absolute md:top-5 top-3 left-0 w-full z-30">
        <div className="max-w-[80rem] mx-auto px-4">
          <div className="w-full overflow-x-auto scrollbar-hide font-inter">
            <div className="w-fit min-w-full">
              <div className="flex items-center gap-2">
                <Skeleton className="h-4 w-16" />
                <Skeleton className="h-4 w-1" />
                <Skeleton className="h-4 w-32" />
                <Skeleton className="h-4 w-1" />
                <Skeleton className="h-4 w-48 md:w-64" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Container */}
      <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12 pt-[60px] md:pt-[75px]">
        <div className="flex flex-col md:flex-row gap-6 md:gap-[48px] w-full">
          {/* Left Side Content Skeleton */}
          <div className="flex-1 overflow-y-auto pt-2 px-2 -mt-2 -mx-2">
            {/* Main Blog Content Card */}
            <div className="relative p-6 mb-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] overflow-hidden">
              {/* Subtle Shimmer Overlay */}
              <div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full animate-shimmer pointer-events-none"
                style={{ animationDuration: "3s" }}
              />

              <div className="relative space-y-6">
                {/* Main Heading Skeleton (H1) */}
                <div className="space-y-2">
                  <Skeleton className="h-7 md:h-8 w-full max-w-[95%] rounded-md" />
                  <Skeleton className="h-7 md:h-8 w-full max-w-[75%] rounded-md" />
                </div>

                {/* Introduction Paragraphs */}
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-full rounded" />
                    <Skeleton className="h-4 w-full rounded" />
                    <Skeleton className="h-4 w-[92%] rounded" />
                  </div>
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-full rounded" />
                    <Skeleton className="h-4 w-[88%] rounded" />
                  </div>
                </div>

                {/* Separator Line */}
                <div className="h-px w-full bg-gray-300 my-6" />

                {/* Section Heading Skeleton (H2) */}
                <Skeleton className="h-6 w-2/3 rounded-md" />

                {/* Section Content */}
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-full rounded" />
                    <Skeleton className="h-4 w-[95%] rounded" />
                  </div>

                  {/* List Items Skeleton */}
                  <div className="space-y-2 pl-4">
                    <Skeleton className="h-4 w-4/5 rounded" />
                    <Skeleton className="h-4 w-3/4 rounded" />
                    <Skeleton className="h-4 w-5/6 rounded" />
                  </div>

                  <div className="space-y-2">
                    <Skeleton className="h-4 w-full rounded" />
                    <Skeleton className="h-4 w-[90%] rounded" />
                  </div>
                </div>

                {/* Separator Line */}
                <div className="h-px w-full bg-gray-300 my-6" />

                {/* Another H2 Section */}
                <Skeleton className="h-6 w-3/4 rounded-md" />

                {/* Section Content */}
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-full rounded" />
                    <Skeleton className="h-4 w-[93%] rounded" />
                  </div>
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-full rounded" />
                    <Skeleton className="h-4 w-[88%] rounded" />
                  </div>
                </div>

                {/* Separator Line */}
                <div className="h-px w-full bg-gray-300 my-6" />

                {/* Process Section with H3 Subheadings */}
                <Skeleton className="h-6 w-2/3 rounded-md" />

                <div className="space-y-4">
                  {/* H3 Subheading */}
                  <Skeleton className="h-5 w-1/3 rounded-md" />
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-full rounded" />
                    <Skeleton className="h-4 w-[90%] rounded" />
                  </div>

                  {/* Another H3 */}
                  <Skeleton className="h-5 w-2/5 rounded-md mt-4" />
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-full rounded" />
                    <Skeleton className="h-4 w-[85%] rounded" />
                  </div>

                  {/* List Items */}
                  <div className="space-y-2 pl-4">
                    <Skeleton className="h-4 w-4/5 rounded" />
                    <Skeleton className="h-4 w-3/4 rounded" />
                    <Skeleton className="h-4 w-5/6 rounded" />
                  </div>

                  <div className="space-y-2">
                    <Skeleton className="h-4 w-full rounded" />
                    <Skeleton className="h-4 w-[88%] rounded" />
                  </div>

                  {/* More H3 Subheadings */}
                  <Skeleton className="h-5 w-1/4 rounded-md mt-4" />
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-full rounded" />
                    <Skeleton className="h-4 w-[92%] rounded" />
                  </div>

                  <Skeleton className="h-5 w-1/3 rounded-md mt-4" />
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-full rounded" />
                    <Skeleton className="h-4 w-[90%] rounded" />
                  </div>
                </div>

                {/* Separator Line */}
                <div className="h-px w-full bg-gray-300 my-6" />

                {/* Another H2 Section */}
                <Skeleton className="h-6 w-3/5 rounded-md" />

                <div className="space-y-4">
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-full rounded" />
                    <Skeleton className="h-4 w-[95%] rounded" />
                  </div>
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-full rounded" />
                    <Skeleton className="h-4 w-[88%] rounded" />
                  </div>
                </div>

                {/* Separator Line */}
                <div className="h-px w-full bg-gray-300 my-6" />

                {/* Cost Section */}
                <Skeleton className="h-6 w-1/2 rounded-md" />

                <div className="space-y-4">
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-full rounded" />
                    <Skeleton className="h-4 w-[90%] rounded" />
                  </div>

                  {/* List Items */}
                  <div className="space-y-2 pl-4">
                    <Skeleton className="h-4 w-4/5 rounded" />
                  </div>

                  <div className="space-y-2">
                    <Skeleton className="h-4 w-full rounded" />
                    <Skeleton className="h-4 w-[85%] rounded" />
                  </div>
                </div>

                {/* Separator Line */}
                <div className="h-px w-full bg-gray-300 my-6" />

                {/* Consultants Section */}
                <Skeleton className="h-6 w-2/3 rounded-md" />

                <div className="space-y-4">
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-full rounded" />
                    <Skeleton className="h-4 w-[93%] rounded" />
                  </div>
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-full rounded" />
                    <Skeleton className="h-4 w-[88%] rounded" />
                  </div>

                  {/* List Items */}
                  <div className="space-y-2 pl-4">
                    <Skeleton className="h-4 w-4/5 rounded" />
                    <Skeleton className="h-4 w-3/4 rounded" />
                    <Skeleton className="h-4 w-5/6 rounded" />
                    <Skeleton className="h-4 w-4/5 rounded" />
                    <Skeleton className="h-4 w-3/4 rounded" />
                  </div>

                  <div className="space-y-2">
                    <Skeleton className="h-4 w-full rounded" />
                    <Skeleton className="h-4 w-[90%] rounded" />
                  </div>
                </div>

                {/* Separator Line */}
                <div className="h-px w-full bg-gray-300 my-6" />

                {/* Key Takeaways Section */}
                <Skeleton className="h-6 w-2/5 rounded-md" />

                <div className="space-y-3">
                  <div className="space-y-2 pl-4">
                    <Skeleton className="h-4 w-4/5 rounded" />
                    <Skeleton className="h-4 w-3/4 rounded" />
                    <Skeleton className="h-4 w-5/6 rounded" />
                  </div>
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-full rounded" />
                    <Skeleton className="h-4 w-[88%] rounded" />
                  </div>
                </div>

                {/* Separator Line */}
                <div className="h-px w-full bg-gray-300 my-6" />

                {/* Conclusion Section */}
                <Skeleton className="h-6 w-1/4 rounded-md" />

                <div className="space-y-4">
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-full rounded" />
                    <Skeleton className="h-4 w-[95%] rounded" />
                    <Skeleton className="h-4 w-full rounded" />
                  </div>
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-full rounded" />
                    <Skeleton className="h-4 w-[92%] rounded" />
                  </div>
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-full rounded" />
                    <Skeleton className="h-4 w-[88%] rounded" />
                  </div>
                </div>

                {/* Featured Image Skeleton */}
                <div className="flex justify-center mb-6">
                  <Skeleton className="w-full max-w-md h-48 md:h-64 rounded-lg" />
                </div>

                {/* Author Section Skeleton */}
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <div className="flex items-center gap-4">
                    <Skeleton className="h-12 w-12 rounded-full" />
                    <div className="flex-1 space-y-2">
                      <Skeleton className="h-4 w-32 rounded" />
                      <Skeleton className="h-3 w-48 rounded" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side Content Skeleton */}
          <div className="flex flex-col gap-6 w-full md:w-[360px]">
            {/* BIS QCO Updates Card Skeleton */}
            <div className="relative w-full md:w-[360px] p-6 rounded-lg bg-gray-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] overflow-hidden">
              <div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/8 to-transparent -translate-x-full animate-shimmer pointer-events-none"
                style={{ animationDuration: "3s" }}
              />

              <div className="relative space-y-5">
                {/* Header */}
                <div className="flex gap-2 items-center">
                  <Skeleton className="h-5 w-5 rounded" />
                  <Skeleton className="h-6 w-40 rounded-md" />
                </div>

                {/* Marquee Content Skeleton */}
                <div className="space-y-5">
                  {[1, 2, 3].map((item) => (
                    <div key={item} className="flex gap-4">
                      <Skeleton className="h-20 w-20 flex-shrink-0 rounded-md" />
                      <div className="flex-1 space-y-2">
                        <Skeleton className="h-4 w-full rounded" />
                        <Skeleton className="h-4 w-3/4 rounded" />
                        <Skeleton className="h-3 w-20 rounded mt-2" />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Button Skeleton */}
                <Skeleton className="h-10 w-full rounded-lg mt-5" />
              </div>
            </div>

            {/* Client Testimonial Card Skeleton */}
            <div className="relative w-full md:w-[360px] rounded-lg overflow-hidden bg-gray-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075]">
              <div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/8 to-transparent -translate-x-full animate-shimmer pointer-events-none"
                style={{ animationDuration: "3s" }}
              />

              <div className="relative pt-6 px-6 pb-4">
                {/* Header */}
                <div className="flex gap-2 items-center">
                  <Skeleton className="h-5 w-5 rounded" />
                  <Skeleton className="h-6 w-36 rounded-md" />
                </div>

                {/* Testimonials Skeleton */}
                <div className="mt-8 mb-5 space-y-4">
                  {[1, 2].map((item) => (
                    <div
                      key={item}
                      className="bg-white p-4 rounded-lg border border-gray-300"
                    >
                      <div className="space-y-3">
                        <div>
                          <Skeleton className="h-4 w-32 rounded mb-2" />
                          <Skeleton className="h-3 w-48 rounded" />
                        </div>
                        <div className="space-y-2">
                          <Skeleton className="h-3 w-full rounded" />
                          <Skeleton className="h-3 w-[95%] rounded" />
                          <Skeleton className="h-3 w-4/5 rounded" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Why Choose Us Card Skeleton */}
            <div className="relative w-full md:w-[360px] p-5 rounded-lg bg-gradient-to-br from-slate-50 to-gray-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] overflow-hidden">
              <div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/8 to-transparent -translate-x-full animate-shimmer pointer-events-none"
                style={{ animationDuration: "3s" }}
              />

              <div className="relative space-y-4">
                {/* Header */}
                <div className="flex gap-2 items-center">
                  <Skeleton className="h-5 w-5 rounded" />
                  <Skeleton className="h-6 w-40 rounded-md" />
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-2">
                  {[1, 2, 3, 4].map((item) => (
                    <div
                      key={item}
                      className="bg-white p-2 rounded-lg border border-gray-200"
                    >
                      <Skeleton className="h-6 w-12 mx-auto mb-1 rounded" />
                      <Skeleton className="h-3 w-20 mx-auto rounded" />
                    </div>
                  ))}
                </div>

                {/* Reasons List */}
                <div className="space-y-3">
                  {[1, 2, 3, 4].map((item) => (
                    <div
                      key={item}
                      className="bg-white rounded-lg p-3 border border-gray-200"
                    >
                      <div className="flex gap-3 items-start">
                        <Skeleton className="h-8 w-8 rounded-lg flex-shrink-0" />
                        <div className="flex-1 space-y-2">
                          <Skeleton className="h-4 w-24 rounded" />
                          <Skeleton className="h-3 w-full rounded" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Performance Section */}
                <div className="bg-blue-50 rounded-lg p-3 border border-blue-100">
                  <div className="flex items-center gap-1 mb-2">
                    <Skeleton className="h-4 w-4 rounded" />
                    <Skeleton className="h-4 w-20 rounded" />
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    {[1, 2, 3].map((item) => (
                      <div key={item} className="text-center">
                        <Skeleton className="h-1.5 w-full rounded-full mb-1" />
                        <Skeleton className="h-3 w-12 mx-auto rounded" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form Card Skeleton */}
            <div className="relative w-full md:w-[360px] md:sticky md:top-[128px] md:self-start p-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] overflow-hidden">
              <div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/8 to-transparent -translate-x-full animate-shimmer pointer-events-none"
                style={{ animationDuration: "3s" }}
              />

              <div className="relative space-y-5">
                {/* Header */}
                <div className="flex gap-2 items-center">
                  <Skeleton className="h-5 w-5 rounded" />
                  <Skeleton className="h-6 w-44 rounded-md" />
                </div>

                {/* Intro Text */}
                <div className="space-y-2">
                  <Skeleton className="h-3 w-full rounded" />
                  <Skeleton className="h-3 w-[95%] rounded" />
                </div>

                {/* Form Fields */}
                <div className="space-y-4">
                  {[1, 2, 3, 4].map((item) => (
                    <div key={item} className="relative">
                      <Skeleton className="h-10 w-full rounded-lg" />
                    </div>
                  ))}
                </div>

                {/* Submit Button */}
                <Skeleton className="h-10 w-full rounded-lg mt-5" />

                {/* Privacy Note */}
                <div className="space-y-1">
                  <Skeleton className="h-3 w-full rounded" />
                  <Skeleton className="h-3 w-3/4 rounded" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section Skeleton */}
      <div className="pt-6 md:pt-8 pb-12 md:pb-16 overflow-x-hidden">
        <div className="max-w-[80rem] w-full mx-auto">
          <div className="flex flex-col items-center justify-center">
            {/* Heading */}
            <Skeleton className="h-[30px] md:h-[48px] w-[200px] md:w-[300px] rounded-md mb-4" />

            {/* Separator with text */}
            <div className="hidden md:flex items-center w-[608.46px] gap-3 h-[35px] mx-auto justify-center mb-16">
              <Skeleton className="w-[94.46px] h-[2px] rounded" />
              <Skeleton className="h-[20px] w-[250px] rounded" />
              <Skeleton className="w-[94.46px] h-[2px] rounded" />
            </div>

            {/* Services Grid */}
            <div className="mt-16 md:mt-24 grid grid-cols-2 md:grid-cols-4 gap-x-3 md:gap-x-10 px-4 md:px-0 gap-y-12 md:gap-y-24">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                <div
                  key={item}
                  className="relative col-span-1 h-[145px] md:h-[240px] bg-[#B5DDEB] rounded-[15px] md:rounded-[20px] shadow-2xl shadow-blue-500/20 flex items-center justify-center md:block"
                >
                  {/* Image Skeleton */}
                  <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
                    <Skeleton className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full" />
                  </div>
                  {/* Text Skeleton */}
                  <div className="mt-8 md:mt-28 px-3 md:px-0">
                    <Skeleton className="h-4 md:h-6 w-full max-w-[120px] md:max-w-[180px] mx-auto rounded" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogsSkeleton;

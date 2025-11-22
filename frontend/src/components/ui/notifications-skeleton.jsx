import { Skeleton } from "./skeleton";

const NotificationsSkeleton = () => {
  return (
    <div className="bg-white relative w-full min-h-screen">
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
            {/* Notification Header Card Skeleton */}
            <div className="relative p-4 md:p-6 mb-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] overflow-hidden">
              {/* Shimmer Overlay */}
              <div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full animate-shimmer pointer-events-none"
                style={{ animationDuration: "3s" }}
              />

              <div className="relative">
                {/* Header Content - Flex Layout */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  {/* Left Side - Icon + Title */}
                  <div className="flex items-center gap-3 md:gap-4 flex-1 min-w-0">
                    {/* Icon Circle */}
                    <Skeleton className="w-12 h-12 md:w-14 md:h-14 rounded-full flex-shrink-0" />

                    {/* Title and Tag */}
                    <div className="flex flex-col gap-0.5 min-w-0 flex-1">
                      <Skeleton className="h-6 md:h-8 w-full max-w-[85%] rounded-md" />
                      <div className="flex items-center gap-2">
                        <Skeleton className="h-3 w-3 rounded-full" />
                        <Skeleton className="h-4 w-32 rounded" />
                      </div>
                    </div>
                  </div>

                  {/* Right Side - Date and Location */}
                  <div className="flex flex-col items-start md:items-end justify-center gap-1 md:gap-0.5 flex-shrink-0">
                    <Skeleton className="h-4 md:h-5 w-24 md:w-28 rounded" />
                    <div className="flex items-center gap-2">
                      <Skeleton className="h-4 w-4 rounded" />
                      <Skeleton className="h-4 md:h-5 w-20 md:w-24 rounded" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Notification Content Card Skeleton */}
            <div className="relative p-6 mb-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] overflow-hidden">
              {/* Shimmer Overlay */}
              <div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full animate-shimmer pointer-events-none"
                style={{ animationDuration: "3s" }}
              />

              <div className="relative space-y-4">
                {/* H2 Heading with inline span */}
                <div className="space-y-2">
                  <Skeleton className="h-6 w-full max-w-[90%] rounded-md" />
                  <Skeleton className="h-6 w-full max-w-[75%] rounded-md" />
                </div>

                {/* Greeting Paragraph */}
                <Skeleton className="h-4 w-32 rounded" />

                {/* Main Content Paragraphs */}
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-full rounded" />
                    <Skeleton className="h-4 w-full rounded" />
                    <Skeleton className="h-4 w-[95%] rounded" />
                  </div>
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-full rounded" />
                    <Skeleton className="h-4 w-[88%] rounded" />
                  </div>
                </div>

                {/* QCO Notification Section */}
                <div className="space-y-3">
                  {/* H3 Heading */}
                  <Skeleton className="h-6 w-full max-w-[85%] rounded-md" />

                  {/* Date Paragraph */}
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-full rounded" />
                    <Skeleton className="h-4 w-[90%] rounded" />
                  </div>

                  {/* List Items */}
                  <div className="space-y-2 pl-4">
                    <Skeleton className="h-4 w-4/5 rounded" />
                    <Skeleton className="h-4 w-3/4 rounded" />
                    <Skeleton className="h-4 w-5/6 rounded" />
                  </div>
                </div>

                {/* Closing Paragraph */}
                <div className="space-y-2">
                  <Skeleton className="h-4 w-full rounded" />
                  <Skeleton className="h-4 w-[92%] rounded" />
                </div>
              </div>
            </div>

            {/* PDF Viewer Section Skeleton */}
            <div className="mt-8 rounded-xl overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075]">
              <div className="relative">
                <div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full animate-shimmer pointer-events-none"
                  style={{ animationDuration: "3s" }}
                />
                <Skeleton className="w-full h-[800px] rounded-lg" />
              </div>
            </div>

            {/* About Author Section Skeleton */}
            <div className="mt-8">
              <div className="relative p-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] overflow-hidden">
                <div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full animate-shimmer pointer-events-none"
                  style={{ animationDuration: "3s" }}
                />
                <div className="relative flex items-center gap-4">
                  <Skeleton className="h-12 w-12 rounded-full" />
                  <div className="flex-1 space-y-2">
                    <Skeleton className="h-4 w-32 rounded" />
                    <Skeleton className="h-3 w-48 rounded" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side Content Skeleton */}
          <div className="flex flex-col gap-6 w-full md:w-[360px]">
            {/* Latest Blog Card Skeleton */}
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

                {/* Blog Items */}
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

                {/* Button */}
                <Skeleton className="h-10 w-full rounded-lg mt-5" />
              </div>
            </div>

            {/* Contact Form Card Skeleton */}
            <div className="relative w-full md:w-[360px] md:sticky md:top-[128px] md:self-start p-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] overflow-hidden">
              <div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/8 to-transparent -translate-x-full animate-shimmer pointer-events-none"
                style={{ animationDuration: "3s" }}
              />

              <div className="relative space-y-5">
                {/* Form Header */}
                <div className="flex gap-2 items-center">
                  <Skeleton className="h-5 w-5 rounded" />
                  <Skeleton className="h-6 w-44 rounded-md" />
                </div>

                {/* Form Description */}
                <div className="space-y-2">
                  <Skeleton className="h-3 w-full rounded" />
                  <Skeleton className="h-3 w-[95%] rounded" />
                  <Skeleton className="h-3 w-[90%] rounded" />
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

export default NotificationsSkeleton;

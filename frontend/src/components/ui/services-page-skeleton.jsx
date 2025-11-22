import { Skeleton } from "./skeleton";

const ServicesPageSkeleton = () => {
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
                <Skeleton className="h-4 w-48 md:w-64" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section Skeleton */}
      <section className="relative pt-[60px] md:pt-[104px] pb-[30px] md:pb-[106px] overflow-x-hidden bg-[#F9F7F2]">
        {/* Background gradient placeholder */}
        <div className="hidden md:block absolute inset-0 rounded-bl-full z-10 transform translate-x-1/2 bg-gray-200/30"></div>

        {/* Decorative element placeholder */}
        <div className="absolute top-[20%] z-[10] right-[15%] w-[20px] h-[20px] rounded-full bg-[#1A8781]/30"></div>

        <div className="max-w-[84rem] gap-[40px] md:gap-[90px] flex flex-col md:flex-row items-center justify-center h-full w-full mx-auto px-4 md:px-0">
          {/* Left Side - Hero Content */}
          <div className="relative flex flex-col gap-6 md:gap-8 w-full md:w-[533px] items-start">
            {/* Badge Skeleton */}
            <div className="inline-flex items-center">
              <Skeleton className="h-[3px] w-[40px] mr-4" />
              <Skeleton className="h-4 w-32 md:w-40" />
            </div>

            {/* Main Heading Skeleton */}
            <div className="space-y-2 w-full">
              <Skeleton className="h-[40px] md:h-[52px] w-full max-w-[90%]" />
              <Skeleton className="h-[40px] md:h-[52px] w-full max-w-[75%]" />
            </div>

            {/* Paragraph Skeleton */}
            <div className="space-y-2 w-full -mt-2">
              <Skeleton className="h-4 md:h-5 w-full" />
              <Skeleton className="h-4 md:h-5 w-full" />
              <Skeleton className="h-4 md:h-5 w-[95%]" />
            </div>

            {/* CTA Button Skeleton */}
            <div className="flex items-center -mt-2">
              <Skeleton className="h-12 w-12 rounded-full mr-3" />
              <Skeleton className="h-6 w-32 md:w-40" />
            </div>
          </div>

          {/* Right Side - Contact Form Skeleton */}
          <div className="z-20 w-full md:w-[580px] h-auto md:h-[435px] flex flex-col">
            {/* Form Header */}
            <div className="flex w-full items-center gap-3 mb-4">
              <Skeleton className="h-5 md:h-6 w-24 md:w-32" />
              <Skeleton className="h-[2px] w-[94.46px]" />
            </div>

            {/* Form Title */}
            <Skeleton className="h-[30px] md:h-[48px] w-64 md:w-80 mb-2" />

            {/* Form Subtitle */}
            <Skeleton className="h-5 md:h-6 w-full max-w-[90%] mb-5" />

            {/* Form Fields */}
            <div className="flex flex-col gap-5">
              {/* First Row - 2 fields */}
              <div className="flex flex-col md:flex-row items-center justify-between gap-5">
                <Skeleton className="w-full h-[54px] md:h-[58px] rounded-[12px]" />
                <Skeleton className="w-full h-[54px] md:h-[58px] rounded-[12px]" />
              </div>

              {/* Second Row - 2 fields */}
              <div className="flex flex-col md:flex-row items-center justify-between gap-5">
                <Skeleton className="w-full h-[54px] md:h-[58px] rounded-[12px]" />
                <Skeleton className="w-full h-[54px] md:h-[58px] rounded-[12px]" />
              </div>

              {/* Third Row - 2 fields */}
              <div className="flex flex-col md:flex-row items-center justify-between gap-5">
                <Skeleton className="w-full h-[54px] md:h-[58px] rounded-[12px]" />
                <Skeleton className="w-full h-[54px] md:h-[58px] rounded-[12px]" />
              </div>

              {/* Submit Button */}
              <Skeleton className="w-[218px] h-[50px] md:h-[60px] rounded-[5px] mt-1" />
            </div>
          </div>
        </div>
      </section>

      {/* Sticky Navigation Skeleton */}
      <div className="sticky top-0 md:top-[44px] z-[50] w-full h-auto md:h-20 bg-[#B9DEEB]">
        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center justify-between px-4 h-20">
          <Skeleton className="h-5 w-32" />
          <Skeleton className="h-6 w-6 rounded-md" />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center justify-between px-12 h-full max-w-[88rem] mx-auto">
          {[1, 2, 3, 4, 5].map((item) => (
            <Skeleton key={item} className="h-5 w-24 md:w-32" />
          ))}
        </div>
      </div>

      {/* Main Content Section Skeleton */}
      <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12">
        <div className="flex flex-col md:flex-row gap-6 md:gap-[48px] w-full">
          {/* Left Side Content Skeleton */}
          <div className="flex-1">
            <div className="flex flex-col gap-[20px] md:gap-[40px]">
              {/* Overview Section */}
              <div className="flex flex-col scroll-mt-20">
                {/* Section Header */}
                <div className="flex w-full items-center gap-3 mb-4">
                  <Skeleton className="h-5 md:h-6 w-20 md:w-28" />
                  <Skeleton className="h-[1.5px] w-[94.46px]" />
                </div>

                {/* Main Heading */}
                <Skeleton className="h-[28px] md:h-[40px] w-full max-w-[85%] mb-3 md:mb-0" />

                {/* Image Skeleton */}
                <div className="flex justify-center mt-[20px] md:mt-[26px] mb-4">
                  <Skeleton className="w-full max-w-md h-48 md:h-64 rounded-lg" />
                </div>

                {/* Paragraphs */}
                <div className="space-y-4 mt-[16px] md:mt-[18px]">
                  <div className="space-y-2">
                    <Skeleton className="h-4 md:h-5 w-full" />
                    <Skeleton className="h-4 md:h-5 w-full" />
                    <Skeleton className="h-4 md:h-5 w-[92%]" />
                  </div>
                  <div className="space-y-2">
                    <Skeleton className="h-4 md:h-5 w-full" />
                    <Skeleton className="h-4 md:h-5 w-[88%]" />
                  </div>
                  <div className="space-y-2">
                    <Skeleton className="h-4 md:h-5 w-full" />
                    <Skeleton className="h-4 md:h-5 w-[95%]" />
                  </div>
                </div>

                {/* H2 Subheading */}
                <Skeleton className="h-5 md:h-6 w-2/3 mt-[12px] md:mt-[16px]" />

                {/* More Paragraphs */}
                <div className="space-y-4 mt-[16px] md:mt-[18px]">
                  <div className="space-y-2">
                    <Skeleton className="h-4 md:h-5 w-full" />
                    <Skeleton className="h-4 md:h-5 w-[90%]" />
                  </div>
                  <div className="space-y-2">
                    <Skeleton className="h-4 md:h-5 w-full" />
                    <Skeleton className="h-4 md:h-5 w-[93%]" />
                  </div>
                </div>

                {/* Another H2 */}
                <Skeleton className="h-5 md:h-6 w-3/5 mt-[12px] md:mt-[16px]" />

                {/* More Paragraphs */}
                <div className="space-y-4 mt-[16px] md:mt-[18px]">
                  <div className="space-y-2">
                    <Skeleton className="h-4 md:h-5 w-full" />
                    <Skeleton className="h-4 md:h-5 w-[91%]" />
                  </div>
                  <div className="space-y-2">
                    <Skeleton className="h-4 md:h-5 w-full" />
                    <Skeleton className="h-4 md:h-5 w-[89%]" />
                  </div>
                </div>

                {/* Bullet List Skeleton */}
                <div className="mt-[18px] md:mt-[18px] space-y-3">
                  {[1, 2, 3, 4].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <Skeleton className="h-6 w-6 rounded-full flex-shrink-0 mt-0.5" />
                      <Skeleton className="h-4 md:h-5 w-full max-w-[90%]" />
                    </div>
                  ))}
                </div>

                {/* More Paragraphs */}
                <div className="space-y-4 mt-[16px] md:mt-[18px]">
                  <div className="space-y-2">
                    <Skeleton className="h-4 md:h-5 w-full" />
                    <Skeleton className="h-4 md:h-5 w-[94%]" />
                    <Skeleton className="h-4 md:h-5 w-[87%]" />
                  </div>
                </div>

                {/* Another H2 */}
                <Skeleton className="h-5 md:h-6 w-4/5 mt-[12px] md:mt-[16px]" />

                {/* Paragraphs with bold text pattern */}
                <div className="space-y-4 mt-[16px] md:mt-[18px]">
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                    <div key={item} className="space-y-2">
                      <Skeleton className="h-4 md:h-5 w-full" />
                      <Skeleton className="h-4 md:h-5 w-[90%]" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Divider */}
              <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-500 to-transparent" />

              {/* Requirement Section */}
              <div className="flex flex-col scroll-mt-20">
                {/* Section Header */}
                <div className="flex w-full items-center gap-3 mb-4">
                  <Skeleton className="h-5 md:h-6 w-28 md:w-36" />
                  <Skeleton className="h-[1.5px] w-[94.46px]" />
                </div>

                {/* Main Heading */}
                <Skeleton className="h-[28px] md:h-[40px] w-full max-w-[80%] mb-3 md:mb-0" />

                {/* Paragraph */}
                <div className="space-y-2 mt-[16px] md:mt-[18px]">
                  <Skeleton className="h-4 md:h-5 w-full" />
                  <Skeleton className="h-4 md:h-5 w-[93%]" />
                </div>

                {/* Bullet List */}
                <div className="mt-[18px] md:mt-[18px] space-y-3">
                  {[1, 2, 3, 4, 5, 6].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <Skeleton className="h-6 w-6 rounded-full flex-shrink-0 mt-0.5" />
                      <Skeleton className="h-4 md:h-5 w-full max-w-[88%]" />
                    </div>
                  ))}
                </div>

                {/* H2 Subheading */}
                <Skeleton className="h-5 md:h-6 w-3/4 mt-[12px] md:mt-[16px]" />

                {/* Paragraph */}
                <div className="space-y-2 mt-[16px] md:mt-[18px]">
                  <Skeleton className="h-4 md:h-5 w-full" />
                  <Skeleton className="h-4 md:h-5 w-[95%]" />
                  <Skeleton className="h-4 md:h-5 w-[88%]" />
                </div>

                {/* H3 Subheading */}
                <Skeleton className="h-5 md:h-6 w-1/3 mt-[12px] md:mt-[16px]" />

                {/* Bullet List */}
                <div className="mt-[18px] md:mt-[18px] space-y-3">
                  {[1, 2, 3, 4, 5].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <Skeleton className="h-6 w-6 rounded-full flex-shrink-0 mt-0.5" />
                      <Skeleton className="h-4 md:h-5 w-full max-w-[85%]" />
                    </div>
                  ))}
                </div>

                {/* Another H3 */}
                <Skeleton className="h-5 md:h-6 w-2/5 mt-[12px] md:mt-[16px]" />

                {/* Bullet List */}
                <div className="mt-[18px] md:mt-[18px] space-y-3">
                  {[1, 2, 3, 4].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <Skeleton className="h-6 w-6 rounded-full flex-shrink-0 mt-0.5" />
                      <Skeleton className="h-4 md:h-5 w-full max-w-[90%]" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Divider */}
              <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-500 to-transparent" />

              {/* Documents Section */}
              <div className="flex flex-col scroll-mt-20">
                {/* Section Header */}
                <div className="flex w-full items-center gap-3 mb-4">
                  <Skeleton className="h-5 md:h-6 w-32 md:w-40" />
                  <Skeleton className="h-[1.5px] w-[94.46px]" />
                </div>

                {/* Main Heading */}
                <Skeleton className="h-[28px] md:h-[40px] w-full max-w-[75%] mb-3 md:mb-0" />

                {/* Paragraph */}
                <div className="space-y-2 mt-[16px] md:mt-[18px]">
                  <Skeleton className="h-4 md:h-5 w-full" />
                </div>

                {/* Bullet List - Long list */}
                <div className="mt-[18px] md:mt-[18px] space-y-3">
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].map(
                    (item) => (
                      <div key={item} className="flex items-start gap-3">
                        <Skeleton className="h-6 w-6 rounded-full flex-shrink-0 mt-0.5" />
                        <Skeleton className="h-4 md:h-5 w-full max-w-[92%]" />
                      </div>
                    )
                  )}
                </div>

                {/* H3 Subheading */}
                <Skeleton className="h-5 md:h-6 w-2/5 mt-[12px] md:mt-[16px]" />

                {/* Paragraph */}
                <div className="space-y-2 mt-[16px] md:mt-[18px]">
                  <Skeleton className="h-4 md:h-5 w-full" />
                  <Skeleton className="h-4 md:h-5 w-[91%]" />
                </div>

                {/* Bullet List */}
                <div className="mt-[18px] md:mt-[18px] space-y-3">
                  {[1, 2, 3, 4, 5].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <Skeleton className="h-6 w-6 rounded-full flex-shrink-0 mt-0.5" />
                      <Skeleton className="h-4 md:h-5 w-full max-w-[87%]" />
                    </div>
                  ))}
                </div>

                {/* Another H3 */}
                <Skeleton className="h-5 md:h-6 w-1/3 mt-[12px] md:mt-[16px]" />

                {/* Paragraph */}
                <div className="space-y-2 mt-[16px] md:mt-[18px]">
                  <Skeleton className="h-4 md:h-5 w-full" />
                  <Skeleton className="h-4 md:h-5 w-[94%]" />
                </div>

                {/* Bullet List */}
                <div className="mt-[18px] md:mt-[18px] space-y-3">
                  {[1, 2, 3].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <Skeleton className="h-6 w-6 rounded-full flex-shrink-0 mt-0.5" />
                      <Skeleton className="h-4 md:h-5 w-full max-w-[89%]" />
                    </div>
                  ))}
                </div>

                {/* Paragraph */}
                <div className="space-y-2 mt-[16px] md:mt-[18px]">
                  <Skeleton className="h-4 md:h-5 w-full" />
                  <Skeleton className="h-4 md:h-5 w-[96%]" />
                </div>
              </div>

              {/* Divider */}
              <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-500 to-transparent" />

              {/* Conclusion Section */}
              <div className="flex flex-col scroll-mt-20">
                {/* Section Header */}
                <div className="flex w-full items-center gap-3 mb-4">
                  <Skeleton className="h-5 md:h-6 w-24 md:w-32" />
                  <Skeleton className="h-[1.5px] w-[94.46px]" />
                </div>

                {/* Main Heading */}
                <Skeleton className="h-[28px] md:h-[40px] w-32 md:w-40 mb-3 md:mb-0" />

                {/* Paragraphs */}
                <div className="space-y-4 mt-[16px] md:mt-[18px]">
                  <div className="space-y-2">
                    <Skeleton className="h-4 md:h-5 w-full" />
                    <Skeleton className="h-4 md:h-5 w-[95%]" />
                    <Skeleton className="h-4 md:h-5 w-full" />
                  </div>
                  <div className="space-y-2">
                    <Skeleton className="h-4 md:h-5 w-full" />
                    <Skeleton className="h-4 md:h-5 w-[92%]" />
                  </div>
                  <div className="space-y-2">
                    <Skeleton className="h-4 md:h-5 w-full" />
                    <Skeleton className="h-4 md:h-5 w-[88%]" />
                  </div>
                </div>
              </div>

              {/* Divider */}
              <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-500 to-transparent" />

              {/* Author Section Skeleton */}
              <div className="mt-6 pt-6">
                <div className="flex items-center gap-4">
                  <Skeleton className="h-12 w-12 rounded-full" />
                  <div className="flex-1 space-y-2">
                    <Skeleton className="h-4 w-32" />
                    <Skeleton className="h-3 w-48" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side Content Skeleton - ServicesRightSideContentEng placeholder */}
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

                {/* Content items */}
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

      {/* FAQ Section Skeleton */}
      <section className="my-2 scroll-mt-20">
        <div className="max-w-[88rem] mx-auto px-4 pt-5 pb-9 md:pb-12">
          {/* FAQ Heading */}
          <Skeleton className="h-[32px] md:h-[48px] w-80 md:w-96 mx-auto mb-4" />

          {/* FAQ Subtitle */}
          <div className="flex items-center justify-center gap-2 mb-6">
            <Skeleton className="h-4 md:h-5 w-64 md:w-80" />
            <Skeleton className="h-4 md:h-5 w-24 md:w-32" />
          </div>

          {/* FAQ Accordion Items */}
          <div className="w-full max-w-[1104px] mt-[16px] md:mt-[24px] mx-auto space-y-2">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
              <div key={item} className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <Skeleton className="h-5 md:h-6 w-full max-w-[85%]" />
                  <Skeleton className="h-5 w-5 rounded" />
                </div>
                <Skeleton className="h-4 md:h-5 w-full max-w-[90%] mt-2" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Table Section Skeleton */}
      <div
        id="product-table"
        className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12"
      >
        <div className="space-y-4">
          <Skeleton className="h-8 md:h-10 w-64 md:w-80" />
          <div className="overflow-x-auto">
            <div className="min-w-full">
              {/* Table Header */}
              <div className="grid grid-cols-4 gap-4 p-4 bg-gray-100 rounded-t-lg">
                {[1, 2, 3, 4].map((col) => (
                  <Skeleton key={col} className="h-6 w-full" />
                ))}
              </div>
              {/* Table Rows */}
              {[1, 2, 3, 4, 5].map((row) => (
                <div
                  key={row}
                  className="grid grid-cols-4 gap-4 p-4 border-b border-gray-200"
                >
                  {[1, 2, 3, 4].map((col) => (
                    <Skeleton key={col} className="h-5 w-full" />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Services Grid Section Skeleton */}
      <div
        id="services"
        className="pt-6 md:pt-8 pb-12 md:pb-16 overflow-x-hidden"
      >
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

      {/* Footer Skeleton */}
      <div className="bg-gray-100 py-12">
        <div className="max-w-[88rem] mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((col) => (
              <div key={col} className="space-y-4">
                <Skeleton className="h-6 w-32" />
                <div className="space-y-2">
                  {[1, 2, 3, 4].map((item) => (
                    <Skeleton key={item} className="h-4 w-full max-w-[80%]" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPageSkeleton;

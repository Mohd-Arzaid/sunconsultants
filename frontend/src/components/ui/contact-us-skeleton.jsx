import { Skeleton } from "./skeleton";

const ContactUsSkeleton = () => {
  return (
    <>
      {/* Main Content Section */}
      <main className="w-full pt-[30px] md:pt-[50px] pb-[50px] md:pb-[90px] relative overflow-hidden bg-gradient-to-b from-white to-[#D2DCFF]">
        {/* Navigation Breadcrumb Skeleton */}
        <div className="absolute md:top-5 top-3 left-0 w-full">
          <div className="max-w-[80rem] mx-auto px-4">
            <div className="w-fit font-inter">
              <div className="flex items-center gap-2">
                <Skeleton className="h-4 w-16" />
                <Skeleton className="h-4 w-1" />
                <Skeleton className="h-4 w-32" />
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Container */}
        <div className="max-w-[84rem] z-[100] gap-[40px] md:gap-[90px] flex flex-col md:flex-row items-center justify-center h-full w-full mx-auto px-4 md:px-0">
          {/* Contact Form Section Skeleton (Left Side) */}
          <div className="w-full md:w-[600px] flex flex-col items-center justify-center order-2 md:order-1">
            {/* Page Header Skeleton */}
            <div className="w-full md:w-[600px] flex flex-col items-center justify-center">
              <Skeleton className="h-10 md:h-14 w-48 md:w-64 mb-4 md:mb-6" />
              <div className="flex w-full items-center justify-center gap-2 md:gap-3 mt-2 md:mt-0">
                <Skeleton className="hidden md:block w-[94.46px] h-[2px]" />
                <Skeleton className="h-5 md:h-6 w-64 md:w-80" />
                <Skeleton className="hidden md:block w-[94.46px] h-[2px]" />
              </div>
            </div>

            {/* Form Skeleton */}
            <div className="flex flex-col mt-4 gap-5 w-full">
              {/* Full Name Input */}
              <Skeleton className="w-full h-[50px] md:h-[58px] rounded-[12px]" />

              {/* Phone Number Input */}
              <Skeleton className="w-full h-[50px] md:h-[58px] rounded-[12px]" />

              {/* Email Input */}
              <Skeleton className="w-full h-[50px] md:h-[58px] rounded-[12px]" />

              {/* Message Textarea */}
              <Skeleton className="w-full h-48 md:h-64 rounded-[12px]" />

              {/* Submit Button */}
              <Skeleton className="w-full h-[50px] md:h-[58px] rounded-[12px]" />
            </div>
          </div>

          {/* Hero Image Section Skeleton (Right Side) */}
          <div className="z-20 w-full md:w-[580px] flex flex-col order-1 md:order-2">
            <Skeleton className="w-full h-[400px] md:h-[500px] rounded-lg" />
          </div>
        </div>
      </main>

      {/* Contact Information Section Skeleton */}
      <div className="w-full h-auto md:h-[196px] bg-[#B9DEEB] py-8 md:py-0">
        <div className="max-w-[84rem] h-full mx-auto flex flex-col md:flex-row items-center justify-between px-4 md:px-0 gap-8 md:gap-0">
          {/* Get In Touch Section */}
          <div className="w-full h-full flex flex-col items-center justify-center">
            <Skeleton className="h-7 md:h-9 w-56 md:w-72 mb-3" />
            <Skeleton className="h-5 md:h-6 w-64 md:w-80" />
          </div>

          {/* Vertical Separator */}
          <div className="hidden md:block w-[3px] h-[109px] bg-[#005065] rounded-xl" />
          <div className="md:hidden w-full h-[3px] bg-[#005065] rounded-xl" />

          {/* Email Section */}
          <div className="w-full flex flex-col items-center justify-center">
            <Skeleton className="h-7 md:h-9 w-24 md:w-32 mb-3" />
            <Skeleton className="h-5 md:h-6 w-64 md:w-80" />
          </div>

          {/* Vertical Separator */}
          <div className="hidden md:block w-[3px] h-[109px] bg-[#005065] rounded-xl" />
          <div className="md:hidden w-full h-[3px] bg-[#005065] rounded-xl" />

          {/* Phone Section */}
          <div className="w-full flex flex-col items-center justify-center">
            <Skeleton className="h-7 md:h-9 w-40 md:w-48 mb-3" />
            <Skeleton className="h-5 md:h-6 w-48 md:w-56" />
          </div>
        </div>
      </div>

      {/* Footer Skeleton */}
      <div className="bg-gray-900 text-white py-12">
        <div className="max-w-[84rem] mx-auto px-4 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="space-y-4">
                <Skeleton className="h-6 w-32" />
                <div className="space-y-2">
                  <Skeleton className="h-4 w-24" />
                  <Skeleton className="h-4 w-28" />
                  <Skeleton className="h-4 w-20" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUsSkeleton;

import { Skeleton } from "./skeleton";

const ContactHomeSkeleton = () => {
  return (
    <div className="pt-8 md:pt-8 pb-8 md:pb-8 overflow-x-hidden">
      <div className="max-w-[88rem] px-4 md:px-8 w-full flex flex-col md:flex-row items-center justify-between mx-auto">
        {/* Left Side - Form Section */}
        <div className="w-full md:w-1/2">
          {/* Separator with text - Hidden on mobile, visible on desktop */}
          <div className="hidden md:flex w-full items-center gap-3 mb-4">
            <Skeleton className="h-6 w-80" />
            <Skeleton className="w-[94.46px] h-[2px]" />
          </div>

          {/* Heading Skeleton */}
          <Skeleton className="h-7 md:h-10 w-48 md:w-64 mb-3 md:mb-4" />

          {/* Description Skeleton */}
          <div className="space-y-2 mb-6">
            <Skeleton className="h-5 md:h-6 w-full max-w-md" />
            <Skeleton className="h-5 md:h-6 w-3/4 max-w-sm" />
          </div>

          {/* Form Skeleton */}
          <form className="mt-6 flex flex-col gap-4">
            {/* Full Name Input Skeleton */}
            <Skeleton className="w-full md:w-[600px] h-14 md:h-[72px] rounded-xl md:rounded-[15px]" />

            {/* Email Address Input Skeleton */}
            <Skeleton className="w-full md:w-[600px] h-14 md:h-[72px] rounded-xl md:rounded-[15px]" />

            {/* Phone Number Input Skeleton */}
            <Skeleton className="w-full md:w-[600px] h-14 md:h-[72px] rounded-xl md:rounded-[15px]" />

            {/* Message Input Skeleton */}
            <Skeleton className="w-full md:w-[600px] h-14 md:h-[72px] rounded-xl md:rounded-[15px]" />

            {/* Submit Button Skeleton */}
            <Skeleton className="w-full md:w-[600px] mt-2 h-14 md:h-[72px] rounded-xl md:rounded-[15px]" />
          </form>
        </div>

        {/* Right Side - Images Section - Hidden on mobile, visible on desktop */}
        <div className="hidden md:block relative w-[600px] h-[539px] mr-5 mt-16">
          {/* Main Contact Image Skeleton */}
          <Skeleton className="absolute right-0 w-[475.99px] h-[539px] rounded-lg" />

          {/* Child Image Skeleton - Positioned with transforms */}
          <Skeleton className="absolute w-[350px] h-[350px] -translate-x-[70px] translate-y-[180px] rounded-lg" />
        </div>
      </div>
    </div>
  );
};

export default ContactHomeSkeleton;

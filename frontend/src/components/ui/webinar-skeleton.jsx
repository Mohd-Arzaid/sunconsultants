import { Skeleton } from "./skeleton";

const WebinarSkeleton = () => {
  return (
    <div className="overflow-hidden relative bg-[#F9F7F2]">
      {/* Breadcrumb Skeleton */}
      <div className="absolute md:top-5 top-3 left-0 w-full z-30">
        <div className="max-w-[80rem] mx-auto px-4">
          <div className="w-fit font-inter">
            <div className="flex items-center gap-2">
              <Skeleton className="h-4 w-16" />
              <Skeleton className="h-4 w-1" />
              <Skeleton className="h-4 w-52" />
            </div>
          </div>
        </div>
      </div>

      {/* Webinar Hero Section Skeleton */}
      <div className="max-w-[84rem] mx-auto px-4 md:px-12 pt-10 md:pt-14 pb-10 md:pb-20">
        {/* Heading Section */}
        <div className="text-center mb-8 md:mb-9">
          <Skeleton className="h-10 md:h-14 w-72 md:w-96 mx-auto mb-3 md:mb-4" />
          <div className="space-y-2 max-w-xl md:max-w-3xl mx-auto">
            <Skeleton className="h-5 w-full" />
            <Skeleton className="h-5 w-full" />
            <Skeleton className="h-5 w-4/5 mx-auto" />
          </div>
        </div>

        {/* Buttons Section */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 mb-10 md:mb-12">
          <Skeleton className="w-full md:w-48 h-12 rounded-full" />
          <Skeleton className="w-full md:w-48 h-12 rounded-full" />
        </div>

        {/* Hero Image Section */}
        <div className="relative rounded-2xl md:rounded-3xl shadow-lg md:shadow-2xl overflow-hidden h-[400px] md:h-[500px]">
          <Skeleton className="w-full h-full" />
          {/* Overlay content skeleton */}
          <div className="absolute inset-0 flex flex-col items-center justify-center z-20 p-4 md:p-8">
            <Skeleton className="h-10 w-48 md:w-64 mb-6 md:mb-8 rounded-xl" />
            <Skeleton className="h-8 md:h-12 w-64 md:w-96 mb-5 md:mb-6" />
            <Skeleton className="h-12 md:h-14 w-40 md:w-48 rounded-full" />
          </div>
        </div>
      </div>

      {/* Past Webinars Section Skeleton */}
      <div className="bg-gradient-to-b from-[#F9F7F2] to-white pb-12 md:pb-20">
        <div className="max-w-[84rem] mx-auto px-4 md:px-12">
          {/* Heading */}
          <div className="flex flex-col gap-2 mb-8 md:mb-12">
            <Skeleton className="h-10 md:h-12 w-64 md:w-80" />
            <div className="space-y-2 max-w-xl md:max-w-2xl">
              <Skeleton className="h-5 w-full" />
              <Skeleton className="h-5 w-4/5" />
            </div>
          </div>

          {/* Webinar Cards Skeleton */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="group bg-white rounded-xl md:rounded-2xl overflow-hidden shadow-lg border border-[#1A8781]/10"
              >
                {/* Image Section */}
                <div className="relative h-40 md:h-48 overflow-hidden">
                  <Skeleton className="w-full h-full" />
                  <div className="absolute top-4 right-4">
                    <Skeleton className="h-6 w-32 rounded-full" />
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-4 md:p-6">
                  <Skeleton className="h-6 md:h-7 w-full mb-3" />
                  <Skeleton className="h-6 md:h-7 w-4/5 mb-4" />
                  <div className="space-y-2 mb-4">
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-3/4" />
                  </div>

                  <div className="flex flex-col gap-2 md:gap-3 mb-5 md:mb-6">
                    <div className="flex items-center gap-2">
                      <Skeleton className="w-4 h-4 rounded" />
                      <Skeleton className="h-4 w-32" />
                    </div>
                    <div className="flex items-center gap-2">
                      <Skeleton className="w-4 h-4 rounded" />
                      <Skeleton className="h-4 w-40" />
                    </div>
                  </div>

                  <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                    <Skeleton className="h-10 w-32 rounded-full" />
                    <div className="flex items-center gap-2">
                      <Skeleton className="w-8 h-8 rounded-full" />
                      <Skeleton className="h-4 w-24" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Webinar Benefits Section Skeleton */}
      <div className="max-w-[84rem] mx-auto px-4 md:px-12 pb-12 md:pb-20 pt-16">
        <div className="text-center mb-12 md:mb-16">
          <Skeleton className="h-10 md:h-12 w-72 md:w-96 mx-auto mb-4" />
          <div className="space-y-2 max-w-xl md:max-w-2xl mx-auto">
            <Skeleton className="h-5 w-full" />
            <Skeleton className="h-5 w-4/5 mx-auto" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8">
          {[1, 2, 3, 4].map((item) => (
            <div
              key={item}
              className="group bg-white rounded-xl md:rounded-2xl p-6 md:p-8 shadow-lg border border-[#1A8781]/30 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#1A8781]/10 rounded-bl-full -mr-10 -mt-10"></div>
              <Skeleton className="w-12 h-12 md:w-16 md:h-16 rounded mb-4 md:mb-6" />
              <Skeleton className="h-6 md:h-7 w-40 md:w-48 mb-3" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-4/5" />
              </div>
            </div>
          ))}
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
    </div>
  );
};

export default WebinarSkeleton;

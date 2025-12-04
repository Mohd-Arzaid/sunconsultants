import { Skeleton } from "./skeleton";

const CountriesSkeleton = () => {
  // Show enough cards to match the original (22 countries)
  const skeletonCards = Array.from({ length: 22 }, (_, i) => i);

  return (
    <div className="relative bg-white py-12 md:py-0">
      <div className="max-w-[88rem] mx-auto w-full px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-[18px]">
          {/* Left Side */}
          <div className="w-full md:max-w-[383px] flex flex-col gap-[30px] items-center text-center md:items-start md:text-left">
            <div className="flex flex-col gap-2 md:gap-[20px]">
              {/* Heading Skeleton */}
              <Skeleton className="h-8 md:h-10 w-full max-w-[350px] rounded-md" />

              {/* Subtitle Skeleton */}
              <Skeleton className="h-5 md:h-6 w-48 md:w-64 rounded-md" />
            </div>

            {/* Navigation Buttons Skeleton */}
            <div className="flex gap-4 items-center">
              {/* Previous Button Skeleton */}
              <Skeleton className="rounded-full w-[40px] h-[40px] md:w-[48px] md:h-[48px]" />

              {/* Next Button Skeleton */}
              <Skeleton className="rounded-full w-[40px] h-[40px] md:w-[48px] md:h-[48px]" />
            </div>
          </div>

          {/* Right Side - Countries Cards */}
          <div className="w-full px-0 md:px-[22px] py-3 md:pt-14 md:pb-10 overflow-hidden scrollbar-hide [mask-image:linear-gradient(to_right,black_90%,transparent)]">
            <div className="flex gap-4 md:gap-[22px] w-max">
              {/* Mobile Cards Skeleton */}
              {skeletonCards.map((index) => (
                <div
                  key={`mobile-${index}`}
                  className="md:hidden w-[280px] h-[280px] bg-[#B5DDEB] shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] rounded-[12px] p-4 flex flex-col items-center justify-center flex-shrink-0"
                >
                  {/* Image Area Skeleton */}
                  <div className="w-full h-full flex items-center justify-center overflow-hidden mb-3">
                    <Skeleton className="w-full h-full rounded-md" />
                  </div>

                  {/* Country Name with Star Skeleton */}
                  <div className="mt-3 px-1 flex items-center justify-between w-full">
                    <div className="flex items-center gap-1">
                      {/* Star Icon Skeleton */}
                      <Skeleton className="w-4 h-4 rounded-full" />
                      {/* Country Name Skeleton */}
                      <Skeleton className="h-4 w-20 rounded-md" />
                    </div>
                  </div>
                </div>
              ))}

              {/* Desktop Cards Skeleton */}
              {skeletonCards.map((index) => (
                <div
                  key={`desktop-${index}`}
                  className="hidden w-[380px] h-[380px] bg-[#B5DDEB] shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] rounded-[12px] p-6 md:flex flex-col items-center justify-center"
                >
                  {/* Image Area Skeleton */}
                  <div className="w-full h-full flex items-center justify-center mb-4">
                    <Skeleton className="w-full h-full rounded-md" />
                  </div>

                  {/* Country Name with Star Skeleton */}
                  <div className="mt-4 px-2 flex items-center justify-between w-full">
                    <div className="flex items-center gap-2">
                      {/* Star Icon Skeleton */}
                      <Skeleton className="w-5 h-5 rounded-full" />
                      {/* Country Name Skeleton */}
                      <Skeleton className="h-6 w-24 rounded-md" />
                    </div>
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

export default CountriesSkeleton;

import { Skeleton } from "./skeleton";

const LatestNewsSkeleton = () => {
  // Show enough items to match the scrolling effect (8 notifications duplicated 3 times = 24)
  const skeletonItems = Array.from({ length: 8 }, (_, i) => i);

  return (
    <div className="h-20 md:h-28 border-2 my-8 bg-[#B9DEEB]">
      <div className="max-w-[84rem] mx-auto h-full flex justify-between items-center px-4 md:px-0">
        {/* Left Side - Heading Section */}
        <div className="flex flex-col items-center justify-center">
          <div className="flex items-center gap-2">
            {/* "Latest" text skeleton */}
            <Skeleton className="h-5 md:h-9 w-20 md:w-32 rounded-md" />

            {/* "Updates" text skeleton with gradient effect */}
            <Skeleton className="h-5 md:h-9 w-24 md:w-36 rounded-md" />

            {/* SVG icon skeleton - hidden on mobile, visible on desktop */}
            <Skeleton className="hidden md:block w-16 h-16 rounded-md" />
          </div>
        </div>

        {/* Right Side - Marquee Section */}
        <div className="flex w-[50%] md:w-[77%]">
          <div className="flex overflow-hidden h-full [mask-image:linear-gradient(to_right,transparent_0%,black_15%,black_85%,transparent_100%)]">
            <div className="flex gap-14 pr-14 items-center justify-center flex-none w-max">
              {skeletonItems.map((index) => (
                <div key={index} className="flex items-center gap-2">
                  {/* Emoji placeholder skeleton */}
                  <Skeleton className="w-5 h-5 md:w-6 md:h-6 rounded-full" />
                  {/* Notification text skeleton */}
                  <Skeleton className="h-5 md:h-6 w-48 md:w-64 rounded-md" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestNewsSkeleton;

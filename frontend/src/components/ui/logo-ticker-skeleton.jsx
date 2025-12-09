import React from "react";
import { Skeleton } from "./skeleton";

const LogoTickerSkeleton = () => {
  // Match the number of logos (6 logos duplicated = 12 items)
  const skeletonCount = 12;

  return (
    <div className="bg-white w-full py-3 md:py-5">
      <div className="max-w-[84rem] mx-auto px-2 md:px-4">
        <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]">
          <ul className="flex w-max min-w-full shrink-0 flex-nowrap gap-1 md:gap-6">
            {Array.from({ length: skeletonCount }).map((_, i) => (
              <li
                key={i}
                className="flex items-center justify-center px-3 md:px-6 py-2 md:py-4 shrink-0"
              >
                <Skeleton className="w-[160px] h-[37px] scale-[0.8] md:scale-100" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LogoTickerSkeleton;

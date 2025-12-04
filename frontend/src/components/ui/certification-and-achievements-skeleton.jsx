import { Skeleton } from "./skeleton";

const CertificationAndAchievementsSkeleton = () => {
  // Show 4 cards to match the original (4 certificates)
  const skeletonCards = Array.from({ length: 4 }, (_, i) => i);

  return (
    <div className="bg-white pt-8 py-4">
      <div className="max-w-[88rem] mx-auto px-4">
        {/* Heading Skeleton */}
        <Skeleton className="h-9 md:h-14 w-80 md:w-[32rem] mx-auto mb-10 rounded-md" />

        {/* Grid Layout Skeleton - matches exact responsive grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {skeletonCards.map((index) => (
            <div
              key={index}
              className="relative bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-[#1A8781]/60"
              style={{
                boxShadow:
                  "0 8px 40px -8px rgba(26,135,129,0.10), 0 1.5px 8px 0 rgba(10,67,148,0.08)",
              }}
            >
              {/* Image Area Skeleton - matches exact height */}
              <div className="relative w-full h-[140px] md:h-[160px] overflow-hidden bg-gray-200">
                <Skeleton className="w-full h-full rounded-none" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CertificationAndAchievementsSkeleton;

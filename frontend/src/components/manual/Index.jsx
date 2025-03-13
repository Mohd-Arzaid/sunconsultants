import React from 'react'

const Index = () => {
  return (
    <div className="bg-[#B9DEEB]   w-full h-20">
    <div className="flex items-center justify-between px-12 h-full max-w-[88rem] mx-auto">
      {[
        "Overview",
        "Eligibility",
        "Classification",
        "Documents",
        "Registration",
        "Licensing",
        "Consulting",
        "FAQs",
      ].map((item) => (
        <div
          key={item}
          className={`relative cursor-pointer group ${
            item === "Overview"
              ? "after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-blue-900"
              : ""
          }`}
        >
          <div
            className={`text-base font-bold font-roboto tracking-wider uppercase transition-colors duration-300 ${
              item === "Overview"
                ? "text-blue-900"
                : "text-blue-950 group-hover:text-blue-900"
            }`}
          >
            {item}
          </div>
          {item !== "Overview" && (
            <div className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-900 scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
          )}
        </div>
      ))}
    </div>
  </div>

  )
}

export default Index

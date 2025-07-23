import React from "react";
import { useLocation } from "react-router-dom";

const SimpleBreadcrumbs = () => {
  const location = useLocation();
  
  // Always show for testing - don't hide on home page initially
  console.log("SimpleBreadcrumbs - Current path:", location.pathname);
  
  // Simple test breadcrumb
  return (
    <div className="w-full bg-red-100 border-2 border-red-500 p-4">
      <div className="max-w-[84rem] mx-auto">
        <p className="text-red-800 font-bold">
          🍞 TEST BREADCRUMBS - Current path: {location.pathname}
        </p>
        <div className="flex items-center gap-2 mt-2">
          <span className="bg-red-200 px-2 py-1 rounded">Home</span>
          <span>{'>'}</span>
          <span className="bg-red-300 px-2 py-1 rounded">Current Page</span>
        </div>
      </div>
    </div>
  );
};

export default SimpleBreadcrumbs;
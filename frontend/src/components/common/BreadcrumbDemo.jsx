import React from "react";
import VisualBreadcrumbs from "./VisualBreadcrumbs";
import { BREADCRUMB_THEMES } from "./BreadcrumbThemes";

/**
 * Demo component to showcase breadcrumb themes and functionality
 * This can be temporarily added to any page for testing
 */
const BreadcrumbDemo = () => {
  const demoPages = [
    {
      title: "Default Theme - About Page",
      path: "/about",
      theme: "default"
    },
    {
      title: "Service Theme - CDSCO Page",
      path: "/cdsco-registration-certification",
      theme: "service"
    },
    {
      title: "Update Theme - BIS Updates",
      path: "/bis-qco-updates",
      theme: "update"
    },
    {
      title: "Service Theme - BIS Certification",
      path: "/what-is-bis-certificate-indian-bis",
      theme: "service"
    }
  ];

  return (
    <div className="w-full bg-gray-50 py-8">
      <div className="max-w-[84rem] mx-auto px-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          🍞 Breadcrumb Demo - Different Themes
        </h2>
        
        <div className="space-y-6">
          {demoPages.map((demo, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="p-4 bg-gray-100 border-b">
                <h3 className="font-semibold text-gray-700">{demo.title}</h3>
                <p className="text-sm text-gray-500">Path: {demo.path}</p>
                <p className="text-sm text-gray-500">Theme: {demo.theme}</p>
              </div>
              
              {/* Demo breadcrumb */}
              <VisualBreadcrumbs 
                customPath={demo.path}
                customTitle={demo.title}
                className="border-b-0"
              />
            </div>
          ))}
        </div>

        <div className="mt-8 p-6 bg-blue-50 rounded-lg">
          <h3 className="font-semibold text-blue-800 mb-3">🎨 Available Themes</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            {Object.entries(BREADCRUMB_THEMES).map(([themeName, theme]) => (
              <div key={themeName} className="bg-white p-3 rounded border">
                <h4 className="font-medium text-gray-800 capitalize">{themeName} Theme</h4>
                <div className="mt-2 space-y-1 text-xs text-gray-600">
                  <div>Container: Gradient background</div>
                  <div>Links: Interactive hover states</div>
                  <div>Current: Highlighted current page</div>
                  <div>Colors: Brand-consistent palette</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 p-6 bg-green-50 rounded-lg">
          <h3 className="font-semibold text-green-800 mb-3">✨ Features Showcase</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div className="bg-white p-3 rounded border">
              <h4 className="font-medium text-green-800">🎨 Visual Appeal</h4>
              <ul className="mt-2 space-y-1 text-green-700">
                <li>• Gradient backgrounds</li>
                <li>• Smooth animations</li>
                <li>• Hover effects</li>
                <li>• Brand color matching</li>
              </ul>
            </div>
            <div className="bg-white p-3 rounded border">
              <h4 className="font-medium text-green-800">📱 Responsive</h4>
              <ul className="mt-2 space-y-1 text-green-700">
                <li>• Mobile-optimized</li>
                <li>• Text truncation</li>
                <li>• Adaptive spacing</li>
                <li>• Touch-friendly</li>
              </ul>
            </div>
            <div className="bg-white p-3 rounded border">
              <h4 className="font-medium text-green-800">♿ Accessible</h4>
              <ul className="mt-2 space-y-1 text-green-700">
                <li>• ARIA compliant</li>
                <li>• Semantic markup</li>
                <li>• Keyboard navigation</li>
                <li>• Screen reader friendly</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BreadcrumbDemo;
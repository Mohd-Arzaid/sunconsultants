import VisualBreadcrumbs from "./VisualBreadcrumbs";
import CompactBreadcrumbs from "./CompactBreadcrumbs";
import ResponsiveBreadcrumbs from "./ResponsiveBreadcrumbs";

/**
 * Breadcrumb Demo Component
 * Showcases different breadcrumb styles and configurations
 * Useful for testing and development
 */
const BreadcrumbDemo = () => {
  return (
    <div className="container mx-auto p-8 space-y-8">
      <h1 className="text-3xl font-bold text-center mb-8">
        Breadcrumb Components Demo
      </h1>

      {/* Visual Breadcrumbs with different separators */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Visual Breadcrumbs (Desktop)</h2>
        
        <div className="space-y-3">
          <div>
            <p className="text-sm text-slate-600 mb-2">Default (Chevron)</p>
            <VisualBreadcrumbs 
              customTitle="Demo Page"
              customPath="/contact"
            />
          </div>

          <div>
            <p className="text-sm text-slate-600 mb-2">Slash Separator</p>
            <VisualBreadcrumbs 
              customTitle="Demo Page"
              customPath="/contact"
              separator="slash"
            />
          </div>

          <div>
            <p className="text-sm text-slate-600 mb-2">Arrow Separator</p>
            <VisualBreadcrumbs 
              customTitle="Demo Page"
              customPath="/contact"
              separator="arrow"
            />
          </div>

          <div>
            <p className="text-sm text-slate-600 mb-2">Without Home Icon</p>
            <VisualBreadcrumbs 
              customTitle="Demo Page"
              customPath="/contact"
              showHome={false}
            />
          </div>
        </div>
      </section>

      {/* Compact Breadcrumbs */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Compact Breadcrumbs (Mobile)</h2>
        
        <div className="space-y-3">
          <div>
            <p className="text-sm text-slate-600 mb-2">Default with Back Button</p>
            <CompactBreadcrumbs 
              customTitle="Demo Page"
              customPath="/contact"
            />
          </div>

          <div>
            <p className="text-sm text-slate-600 mb-2">Without Back Button</p>
            <CompactBreadcrumbs 
              customTitle="Demo Page"
              customPath="/contact"
              showBackButton={false}
            />
          </div>

          <div>
            <p className="text-sm text-slate-600 mb-2">Deep Navigation Example</p>
            <CompactBreadcrumbs 
              customTitle="Notification Detail"
              customPath="/bis-qco-updates/bis-certificate-for-work-chairs"
              maxItems={3}
            />
          </div>
        </div>
      </section>

      {/* Responsive Breadcrumbs */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Responsive Breadcrumbs</h2>
        <p className="text-sm text-slate-600">
          Automatically switches between desktop and mobile views based on screen size
        </p>
        
        <div className="space-y-3">
          <div>
            <p className="text-sm text-slate-600 mb-2">Service Page Example</p>
            <ResponsiveBreadcrumbs 
              customTitle="BIS Certification Services"
              customPath="/what-is-bis-certificate-indian-bis"
            />
          </div>

          <div>
            <p className="text-sm text-slate-600 mb-2">Notification Detail Example</p>
            <ResponsiveBreadcrumbs 
              customTitle="BIS Certificate for Work Chairs"
              customPath="/bis-qco-updates/bis-certificate-for-work-chairs"
            />
          </div>
        </div>
      </section>

      {/* Usage Examples */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Usage Examples</h2>
        
        <div className="bg-slate-100 p-4 rounded-lg">
          <h3 className="font-medium mb-2">Basic Implementation:</h3>
          <pre className="text-sm bg-white p-3 rounded border overflow-x-auto">
{`// Simple page breadcrumb
<VisualBreadcrumbs customTitle="Contact Us" />

// Responsive breadcrumb for all devices
<ResponsiveBreadcrumbs customTitle="BIS Certification" />

// Custom styled breadcrumb
<VisualBreadcrumbs 
  customTitle="Services"
  separator="arrow"
  className="my-4 mx-auto max-w-6xl"
/>`}
          </pre>
        </div>

        <div className="bg-slate-100 p-4 rounded-lg">
          <h3 className="font-medium mb-2">Dynamic Content:</h3>
          <pre className="text-sm bg-white p-3 rounded border overflow-x-auto">
{`// For dynamic routes like notification details
<ResponsiveBreadcrumbs 
  customTitle={notificationTitle}
  customPath={location.pathname}
/>

// For multilingual pages
<ResponsiveBreadcrumbs 
  customTitle={t('pageTitle')}
  customPath={\`/\${lang}/\${pageName}\`}
/>`}
          </pre>
        </div>
      </section>
    </div>
  );
};

export default BreadcrumbDemo;
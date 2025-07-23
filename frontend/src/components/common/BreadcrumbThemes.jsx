// Breadcrumb theme configurations for different page types

export const BREADCRUMB_THEMES = {
  default: {
    container: "bg-gradient-to-r from-[#EBF3F5]/70 to-[#C5E2F0]/40 border-b border-[#1A8781]/20",
    linkText: "text-[#42434d] hover:text-[#1A8781]",
    linkBg: "hover:bg-[#EBF3F5]/60 border border-transparent hover:border-[#1A8781]/30",
    currentPage: "text-[#1E1E1E] bg-gradient-to-r from-[#1A8781]/10 to-[#125E5A]/5 border border-[#1A8781]/30",
    separator: "text-[#1A8781]/40 hover:text-[#1A8781]/70",
    ellipsis: "text-[#1A8781]/50 hover:text-[#1A8781]/80"
  },
  
  service: {
    container: "bg-gradient-to-r from-[#D8E6EF]/70 to-[#C5E2F0]/50 border-b border-[#125E5A]/25",
    linkText: "text-[#332156] hover:text-[#125E5A]",
    linkBg: "hover:bg-[#D8E6EF]/60 border border-transparent hover:border-[#125E5A]/30",
    currentPage: "text-[#1E1E1E] bg-gradient-to-r from-[#125E5A]/10 to-[#1A8781]/5 border border-[#125E5A]/30",
    separator: "text-[#125E5A]/40 hover:text-[#125E5A]/70",
    ellipsis: "text-[#125E5A]/50 hover:text-[#125E5A]/80"
  },
  
  update: {
    container: "bg-gradient-to-r from-[#ffffff]/70 to-[#f2f1ed]/40 border-b border-amber-300/30",
    linkText: "text-amber-700 hover:text-amber-800",
    linkBg: "hover:bg-amber-50/60 border border-transparent hover:border-amber-300/40",
    currentPage: "text-amber-900 bg-gradient-to-r from-amber-100/80 to-yellow-100/60 border border-amber-300/40",
    separator: "text-amber-500/40 hover:text-amber-500/70",
    ellipsis: "text-amber-500/50 hover:text-amber-500/80"
  },
  
  dark: {
    container: "bg-gradient-to-r from-slate-800/70 to-slate-700/40 border-b border-slate-600/30",
    linkText: "text-slate-300 hover:text-white",
    linkBg: "hover:bg-slate-700/60 border border-transparent hover:border-slate-500/40",
    currentPage: "text-white bg-gradient-to-r from-slate-600/50 to-slate-500/30 border border-slate-500/40",
    separator: "text-slate-400/40 hover:text-slate-300/70",
    ellipsis: "text-slate-400/50 hover:text-slate-300/80"
  }
};

// Function to get theme based on page path
export const getBreadcrumbTheme = (pathname) => {
  if (pathname.includes('/bis-qco-updates') || pathname.includes('/ministry-updates')) {
    return BREADCRUMB_THEMES.update;
  }
  
  if (pathname.includes('/cdsco') || 
      pathname.includes('/bis-certification') || 
      pathname.includes('/epr-certificate') ||
      pathname.includes('/scheme-x') ||
      pathname.includes('/certificate')) {
    return BREADCRUMB_THEMES.service;
  }
  
  return BREADCRUMB_THEMES.default;
};

export default {
  BREADCRUMB_THEMES,
  getBreadcrumbTheme
};
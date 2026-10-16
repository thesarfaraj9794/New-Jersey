import React, { useState } from 'react';

interface HeaderProps {
  currentPath: string;
  onNavigate: (path: string, param?: string) => void;
  onOpenQuote: () => void;
  onOpenWeeblyStudio: () => void;
  currentCityName?: string;
}

export const Header: React.FC<HeaderProps> = ({
  currentPath,
  onNavigate,
  onOpenQuote,
  onOpenWeeblyStudio,
  currentCityName = 'Edison',
}) => {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-[#faf8ff]/95 backdrop-blur-md shadow-[0_1px_8px_rgba(0,0,0,0.06)]">
      {/* Top Banner Bar */}
      <div className="bg-[#00236f] text-white py-1.5 px-4 sm:px-6">
        <div className="max-w-[1200px] mx-auto flex flex-col sm:flex-row items-center justify-between text-center sm:text-left gap-1">
          <div className="flex items-center gap-2 text-xs font-semibold">
            <span className="material-symbols-outlined text-[#fd651e] text-[16px]">verified</span>
            <span className="tracking-wide">
              Serving All 21 New Jersey Counties • 24/7 Emergency Dispatch • Licensed &amp; Insured NJ HIC# 13VH09876500
            </span>
          </div>
          <div className="flex items-center gap-3 text-xs">
            <div className="flex items-center gap-1 font-semibold">
              <span className="text-[#b6c4ff]">Call Toll-Free:</span>
              <a
                className="font-bold text-white hover:text-[#ffdbce] transition-colors"
                href="tel:8005556577"
              >
                (800) 555-NJ-PRO
              </a>
            </div>
            <button
              onClick={onOpenWeeblyStudio}
              className="hidden lg:inline-flex items-center gap-1 text-[11px] font-bold bg-[#1e3a8a] hover:bg-[#fd651e] text-white px-2 py-0.5 rounded transition-colors border border-[#dce1ff]/30"
              title="Weebly Implementation &amp; $150 Project Delivery Console"
            >
              <span className="material-symbols-outlined text-[13px]">tune</span>
              <span>Weebly Studio &amp; SEO Engine</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="h-20 max-w-[1200px] mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Brand Lockup */}
        <div
          onClick={() => onNavigate('home')}
          className="flex items-center gap-3 cursor-pointer group select-none"
        >
          <img
            alt="Garden State Tradecraft Logo"
            className="h-8 w-auto object-contain transition-transform group-hover:scale-105"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCTrEIsp42SMAP8Cx3fIbyquZAWQOa3K8lcEkJXOy3c5mms3VqXkBhNni993ECVJPA4riQz7rh5tTHIjPsk5Fs1NLJACHAmFg_skaVSSMV9OdiZ5nI0WNwXK56vKdkY16KWgckqnEk5g4Dzv6X_0GTdglFzYDl6yhBT8YlhezfmL2I0hPmk0nFz-ijdfd2qkGPFKHz1T51yNBdjFCXc7ysJBviHxUq4oJiO9fgYOweWVMO79tsPBXOY"
          />
          <div className="flex flex-col">
            <span className="font-heading text-xl sm:text-2xl text-[#00236f] font-bold leading-none tracking-tight">
              Garden State
            </span>
            <span className="text-xs text-[#a73a00] tracking-widest uppercase font-bold">
              Tradecraft
            </span>
          </div>
        </div>

        {/* Desktop Nav Links */}
        <nav className="hidden xl:flex items-center gap-6">
          <button
            onClick={() => onNavigate('home')}
            className={`font-semibold text-sm transition-colors py-1.5 px-2 ${
              currentPath === 'home'
                ? 'text-[#00236f] font-bold border-b-2 border-[#00236f]'
                : 'text-[#444651] hover:text-[#00236f]'
            }`}
          >
            Home
          </button>

          {/* Services Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              onClick={() => onNavigate('services')}
              className={`flex items-center gap-1 font-semibold text-sm transition-colors py-1.5 px-2 ${
                currentPath.startsWith('services')
                  ? 'text-[#00236f] font-bold border-b-2 border-[#00236f]'
                  : 'text-[#444651] hover:text-[#00236f]'
              }`}
            >
              <span>Our Services</span>
              <span className="material-symbols-outlined text-[18px]">expand_more</span>
            </button>

            {servicesOpen && (
              <div className="absolute left-0 top-full flex flex-col w-64 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.12)] rounded-xl py-2 z-50 border border-slate-100">
                <button
                  onClick={() => {
                    onNavigate('services-hvac');
                    setServicesOpen(false);
                  }}
                  className="text-left text-sm px-4 py-2 text-[#444651] hover:bg-[#eaedff] hover:text-[#00236f] transition-colors flex items-center gap-2"
                >
                  <span className="material-symbols-outlined text-[18px] text-[#a73a00]">mode_fan</span>
                  <span>HVAC Heating &amp; Cooling</span>
                </button>
                <button
                  onClick={() => {
                    onNavigate('services-plumbing');
                    setServicesOpen(false);
                  }}
                  className="text-left text-sm px-4 py-2 text-[#444651] hover:bg-[#eaedff] hover:text-[#00236f] transition-colors flex items-center gap-2"
                >
                  <span className="material-symbols-outlined text-[18px] text-[#a73a00]">plumbing</span>
                  <span>Plumbing &amp; Drains</span>
                </button>
                <button
                  onClick={() => {
                    onNavigate('services-electrical');
                    setServicesOpen(false);
                  }}
                  className="text-left text-sm px-4 py-2 text-[#444651] hover:bg-[#eaedff] hover:text-[#00236f] transition-colors flex items-center gap-2"
                >
                  <span className="material-symbols-outlined text-[18px] text-[#a73a00]">bolt</span>
                  <span>Electrical Contracting</span>
                </button>
                <button
                  onClick={() => {
                    onNavigate('services-roofing');
                    setServicesOpen(false);
                  }}
                  className="text-left text-sm px-4 py-2 text-[#444651] hover:bg-[#eaedff] hover:text-[#00236f] transition-colors flex items-center gap-2"
                >
                  <span className="material-symbols-outlined text-[18px] text-[#a73a00]">roofing</span>
                  <span>Roofing &amp; Siding</span>
                </button>
                <div className="border-t border-slate-100 my-1"></div>
                <button
                  onClick={() => {
                    onNavigate('services-emergency');
                    setServicesOpen(false);
                  }}
                  className="text-left text-sm px-4 py-2 text-[#a73a00] font-bold hover:bg-[#eaedff] transition-colors flex items-center gap-2"
                >
                  <span className="material-symbols-outlined text-[18px]">e911_emergency</span>
                  <span>24/7 Rapid Dispatch</span>
                </button>
              </div>
            )}
          </div>

          {/* Service Areas (Highlights active when viewing city templates) */}
          <button
            onClick={() => onNavigate('service-areas')}
            className={`font-semibold text-sm transition-colors py-1.5 px-3 rounded-lg flex items-center gap-1 ${
              currentPath === 'service-areas' || currentPath === 'city'
                ? 'bg-[#1e3a8a] text-white font-bold'
                : 'text-[#444651] hover:text-[#00236f]'
            }`}
          >
            <span>Service Areas</span>
            {currentPath === 'city' && (
              <span className="bg-[#fd651e] text-white text-[10px] px-1.5 py-0.2 rounded font-bold uppercase tracking-wider">
                {currentCityName}
              </span>
            )}
          </button>

          <button
            onClick={() => onNavigate('about-us')}
            className={`font-semibold text-sm transition-colors py-1.5 px-2 ${
              currentPath === 'about-us'
                ? 'text-[#00236f] font-bold border-b-2 border-[#00236f]'
                : 'text-[#444651] hover:text-[#00236f]'
            }`}
          >
            About Us
          </button>

          <button
            onClick={() => onNavigate('reviews')}
            className={`font-semibold text-sm transition-colors py-1.5 px-2 ${
              currentPath === 'reviews'
                ? 'text-[#00236f] font-bold border-b-2 border-[#00236f]'
                : 'text-[#444651] hover:text-[#00236f]'
            }`}
          >
            Reviews
          </button>

          <button
            onClick={() => onNavigate('faqs')}
            className={`font-semibold text-sm transition-colors py-1.5 px-2 ${
              currentPath === 'faqs'
                ? 'text-[#00236f] font-bold border-b-2 border-[#00236f]'
                : 'text-[#444651] hover:text-[#00236f]'
            }`}
          >
            FAQs
          </button>

          <button
            onClick={() => onNavigate('contact')}
            className={`font-semibold text-sm transition-colors py-1.5 px-2 ${
              currentPath === 'contact'
                ? 'text-[#00236f] font-bold border-b-2 border-[#00236f]'
                : 'text-[#444651] hover:text-[#00236f]'
            }`}
          >
            Contact
          </button>
        </nav>

        {/* Right CTA Actions */}
        <div className="flex items-center gap-3">
          {/* 24/7 Dispatch Button */}
          <a
            className="hidden md:flex items-center gap-2 px-3 py-2 rounded-lg bg-[#e2e7ff] text-[#00236f] hover:bg-[#00236f] hover:text-white transition-all text-sm font-semibold"
            href="tel:2015550199"
          >
            <span className="material-symbols-outlined text-[18px] text-[#a73a00]">
              e911_emergency
            </span>
            <div className="flex flex-col text-left leading-tight">
              <span className="text-[10px] uppercase font-bold text-[#a73a00]">24/7 Dispatch</span>
              <span className="font-bold text-xs sm:text-sm">(201) 555-0199</span>
            </div>
          </a>

          {/* Request Free Quote Button */}
          <button
            onClick={onOpenQuote}
            className="px-4 py-2.5 rounded-lg bg-[#a73a00] text-white hover:bg-[#852e00] transition-colors text-sm font-bold shadow-sm flex items-center gap-1.5"
          >
            <span className="material-symbols-outlined text-[18px]">request_quote</span>
            <span className="hidden sm:inline">Request Free Quote</span>
            <span className="sm:hidden">Get Quote</span>
          </button>

          {/* Weebly Control Panel Icon Button */}
          <button
            onClick={onOpenWeeblyStudio}
            className="w-9 h-9 rounded-full bg-[#00236f] hover:bg-[#1e3a8a] text-white flex items-center justify-center shrink-0 transition-all shadow-sm"
            title="Open Weebly Studio &amp; 564 NJ Cities SEO Manager"
          >
            <span className="material-symbols-outlined text-white text-[18px]">settings_suggest</span>
          </button>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden w-9 h-9 rounded-lg bg-slate-100 flex items-center justify-center text-[#00236f]"
            aria-label="Toggle Navigation Menu"
          >
            <span className="material-symbols-outlined">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-t border-slate-200 px-6 py-4 flex flex-col gap-3 shadow-xl">
          <div className="flex items-center justify-between pb-2 border-b border-slate-100">
            <span className="text-xs font-bold text-[#00236f] uppercase tracking-wider">
              Navigation Menu
            </span>
            <button
              onClick={() => {
                onOpenWeeblyStudio();
                setMobileMenuOpen(false);
              }}
              className="text-xs font-bold bg-[#1e3a8a] text-white px-2.5 py-1 rounded flex items-center gap-1"
            >
              <span className="material-symbols-outlined text-[14px]">tune</span>
              <span>Weebly Studio &amp; SEO</span>
            </button>
          </div>

          <button
            onClick={() => {
              onNavigate('home');
              setMobileMenuOpen(false);
            }}
            className="text-left font-semibold py-2 text-[#131b2e] hover:text-[#00236f]"
          >
            Home
          </button>

          <div className="flex flex-col pl-2 border-l-2 border-slate-200 gap-1.5 my-1">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Services</span>
            <button
              onClick={() => {
                onNavigate('services-hvac');
                setMobileMenuOpen(false);
              }}
              className="text-left text-sm py-1 text-[#444651]"
            >
              HVAC Heating &amp; AC
            </button>
            <button
              onClick={() => {
                onNavigate('services-plumbing');
                setMobileMenuOpen(false);
              }}
              className="text-left text-sm py-1 text-[#444651]"
            >
              Plumbing &amp; Drains
            </button>
            <button
              onClick={() => {
                onNavigate('services-electrical');
                setMobileMenuOpen(false);
              }}
              className="text-left text-sm py-1 text-[#444651]"
            >
              Electrical Contracting
            </button>
            <button
              onClick={() => {
                onNavigate('services-roofing');
                setMobileMenuOpen(false);
              }}
              className="text-left text-sm py-1 text-[#444651]"
            >
              Roofing &amp; Siding
            </button>
            <button
              onClick={() => {
                onNavigate('services-emergency');
                setMobileMenuOpen(false);
              }}
              className="text-left text-sm py-1 font-bold text-[#a73a00]"
            >
              24/7 Rapid Emergency Dispatch
            </button>
          </div>

          <button
            onClick={() => {
              onNavigate('service-areas');
              setMobileMenuOpen(false);
            }}
            className="text-left font-semibold py-2 text-[#00236f] flex items-center justify-between"
          >
            <span>Service Areas (500+ NJ Cities)</span>
            <span className="bg-[#eaedff] text-[#00236f] text-xs px-2 py-0.5 rounded-full font-bold">
              All 21 Counties
            </span>
          </button>

          <button
            onClick={() => {
              onNavigate('city', 'edison');
              setMobileMenuOpen(false);
            }}
            className="text-left font-semibold py-2 text-[#444651] pl-4 text-sm"
          >
            → Edison, NJ Template
          </button>

          <button
            onClick={() => {
              onNavigate('about-us');
              setMobileMenuOpen(false);
            }}
            className="text-left font-semibold py-2 text-[#131b2e]"
          >
            About Us
          </button>

          <button
            onClick={() => {
              onNavigate('reviews');
              setMobileMenuOpen(false);
            }}
            className="text-left font-semibold py-2 text-[#131b2e]"
          >
            Reviews &amp; Proof
          </button>

          <button
            onClick={() => {
              onNavigate('faqs');
              setMobileMenuOpen(false);
            }}
            className="text-left font-semibold py-2 text-[#131b2e]"
          >
            FAQs
          </button>

          <button
            onClick={() => {
              onNavigate('contact');
              setMobileMenuOpen(false);
            }}
            className="text-left font-semibold py-2 text-[#131b2e]"
          >
            Contact
          </button>

          <div className="pt-2 flex flex-col gap-2">
            <a
              href="tel:2015550199"
              className="w-full py-2.5 rounded-lg bg-[#00236f] text-white text-center font-bold text-sm flex items-center justify-center gap-2"
            >
              <span className="material-symbols-outlined text-[18px]">call</span>
              <span>Direct Emergency: (201) 555-0199</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

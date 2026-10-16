import React from 'react';

interface FooterProps {
  onNavigate: (path: string, param?: string) => void;
  onOpenWeeblyStudio: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenWeeblyStudio }) => {
  return (
    <footer className="w-full bg-[#f2f3ff] text-[#131b2e] mt-16 pt-16 pb-12 shadow-[0_-1px_4px_rgba(0,0,0,0.03)] border-t border-slate-200">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-12">
          {/* Col 1: Brand & Credentials */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <img
                alt="Garden State Tradecraft Logo"
                className="h-8 w-auto object-contain"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCTrEIsp42SMAP8Cx3fIbyquZAWQOa3K8lcEkJXOy3c5mms3VqXkBhNni993ECVJPA4riQz7rh5tTHIjPsk5Fs1NLJACHAmFg_skaVSSMV9OdiZ5nI0WNwXK56vKdkY16KWgckqnEk5g4Dzv6X_0GTdglFzYDl6yhBT8YlhezfmL2I0hPmk0nFz-ijdfd2qkGPFKHz1T51yNBdjFCXc7ysJBviHxUq4oJiO9fgYOweWVMO79tsPBXOY"
              />
              <span className="font-heading text-lg font-bold text-[#00236f]">
                Garden State Tradecraft
              </span>
            </div>
            <p className="text-xs text-[#444651] leading-relaxed">
              New Jersey's premier full-service tradecraft contractor. Providing trusted emergency dispatch and mechanical contracting to homeowners and commercial facilities statewide.
            </p>
            <div className="flex flex-col gap-1.5 text-xs">
              <div className="flex items-center gap-1.5 text-[#00236f] font-bold">
                <span className="material-symbols-outlined text-[16px]">verified_user</span>
                <span>NJ HIC License #13VH09876500</span>
              </div>
              <div className="flex items-center gap-1.5 text-[#444651]">
                <span className="material-symbols-outlined text-[16px] text-[#004942]">shield</span>
                <span>Fully Bonded &amp; Insured ($2M Aggregate)</span>
              </div>
              <div className="flex items-center gap-1.5 text-[#a73a00] font-bold">
                <span className="material-symbols-outlined text-[16px]">grade</span>
                <span>BBB Accredited Business (A+ Rating)</span>
              </div>
            </div>
          </div>

          {/* Col 2: Core Services */}
          <div className="flex flex-col gap-3">
            <h4 className="font-heading text-sm font-bold text-[#00236f] tracking-tight uppercase">
              Core Services
            </h4>
            <ul className="flex flex-col gap-2 text-xs text-[#444651]">
              <li>
                <button
                  onClick={() => onNavigate('services-hvac')}
                  className="hover:text-[#a73a00] transition-colors text-left"
                >
                  HVAC Heating &amp; Cooling
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('services-plumbing')}
                  className="hover:text-[#a73a00] transition-colors text-left"
                >
                  Plumbing &amp; Drain Cleaning
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('services-roofing')}
                  className="hover:text-[#a73a00] transition-colors text-left"
                >
                  Roofing, Siding &amp; Gutters
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('services-electrical')}
                  className="hover:text-[#a73a00] transition-colors text-left"
                >
                  Electrical Panels &amp; Wiring
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('services-emergency')}
                  className="hover:text-[#a73a00] transition-colors font-bold text-[#a73a00] text-left"
                >
                  24/7 Rapid Emergency Dispatch
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Service Counties */}
          <div className="flex flex-col gap-3">
            <h4 className="font-heading text-sm font-bold text-[#00236f] tracking-tight uppercase">
              Service Counties
            </h4>
            <ul className="grid grid-cols-2 gap-y-2 gap-x-1 text-xs text-[#444651]">
              <li>
                <button onClick={() => onNavigate('service-areas')} className="hover:text-[#a73a00] transition-colors text-left">
                  Bergen County
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('service-areas')} className="hover:text-[#a73a00] transition-colors text-left">
                  Essex County
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('service-areas')} className="hover:text-[#a73a00] transition-colors text-left">
                  Middlesex County
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('service-areas')} className="hover:text-[#a73a00] transition-colors text-left">
                  Morris County
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('service-areas')} className="hover:text-[#a73a00] transition-colors text-left">
                  Monmouth County
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('service-areas')} className="hover:text-[#a73a00] transition-colors text-left">
                  Ocean County
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('service-areas')} className="hover:text-[#a73a00] transition-colors text-left">
                  Hudson County
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('service-areas')} className="hover:text-[#a73a00] transition-colors text-left">
                  Union County
                </button>
              </li>
            </ul>
            <span className="text-xs text-[#444651] italic">+ 13 additional NJ counties</span>
          </div>

          {/* Col 4: Dispatch Headquarters */}
          <div className="flex flex-col gap-3">
            <h4 className="font-heading text-sm font-bold text-[#00236f] tracking-tight uppercase">
              Dispatch Headquarters
            </h4>
            <div className="flex flex-col gap-2 text-xs text-[#444651]">
              <div className="flex items-start gap-2">
                <span className="material-symbols-outlined text-[18px] text-[#00236f] shrink-0">
                  location_on
                </span>
                <span>
                  100 Metroplex Dr, Suite 300<br />Edison, NJ 08817
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[18px] text-[#00236f] shrink-0">
                  call
                </span>
                <a href="tel:2015550199" className="hover:underline">Dispatch: (201) 555-0199</a>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[18px] text-[#00236f] shrink-0">
                  mail
                </span>
                <span className="truncate">dispatch@gardenstatetradecraft.com</span>
              </div>
              <p className="text-[11px] text-[#757682] pt-1 leading-snug">
                Free written estimates provided for all planned installations and replacements within 24 hours.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Weebly Certification Row */}
        <div className="pt-8 mt-4 bg-[#e2e7ff]/40 rounded-xl p-4 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#444651]">
          <div className="text-center md:text-left">
            <span>© 2026 Garden State Tradecraft LLC. All rights reserved. New Jersey Lic #13VH09876500.</span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs">
            <button
              onClick={() => onNavigate('privacy-policy')}
              className="hover:text-[#00236f] transition-colors"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => onNavigate('terms-conditions')}
              className="hover:text-[#00236f] transition-colors"
            >
              Terms &amp; Conditions
            </button>
            <button
              onClick={() => onNavigate('accessibility')}
              className="hover:text-[#00236f] transition-colors"
            >
              Accessibility
            </button>
            <span className="text-slate-300">|</span>
            <button
              onClick={onOpenWeeblyStudio}
              className="text-[#00236f] font-bold hover:underline flex items-center gap-1"
            >
              <span className="material-symbols-outlined text-[14px] text-emerald-600">verified</span>
              <span>Weebly Site Implementation Verified</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

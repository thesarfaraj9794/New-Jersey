import React, { useState } from 'react';
import { TRADE_SERVICES, TradeService } from '../data/tradeServices';

interface ServicesPageProps {
  currentSubService?: string;
  onNavigate: (path: string, param?: string) => void;
  onOpenQuote: () => void;
  onSelectCity: (slug: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({
  currentSubService,
  onNavigate,
  onOpenQuote,
  onSelectCity,
}) => {
  // If a specific sub-service is requested (e.g. 'services-hvac'), find it
  const activeService: TradeService =
    TRADE_SERVICES.find((s) => s.slug === currentSubService) || TRADE_SERVICES[0];

  const [activeTab, setActiveTab] = useState(activeService.id);

  const selected = TRADE_SERVICES.find((s) => s.id === activeTab) || TRADE_SERVICES[0];

  return (
    <div className="flex flex-col w-full bg-[#faf8ff] pb-16">
      {/* Header Banner */}
      <section className="w-full bg-[#f2f3ff] py-10 md:py-14 border-b border-slate-100">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 flex flex-col gap-3">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-semibold text-[#444651]">
            <button onClick={() => onNavigate('home')} className="hover:text-[#00236f] transition-colors">
              Home
            </button>
            <span className="material-symbols-outlined text-[14px]">chevron_right</span>
            <span className="text-[#00236f] font-bold">Our Services</span>
            <span className="material-symbols-outlined text-[14px]">chevron_right</span>
            <span className="text-[#a73a00] font-bold">{selected.shortName}</span>
          </nav>

          <span className="text-xs text-[#a73a00] font-bold uppercase tracking-wider">
            Licensed New Jersey Tradecraft Disciplines
          </span>

          <h1 className="font-heading text-3xl sm:text-4xl text-[#00236f] font-extrabold tracking-tight">
            Commercial &amp; Residential Mechanical Contracting
          </h1>

          <p className="text-sm sm:text-base text-[#444651] max-w-3xl">
            Fully certified, licensed, and bonded across all 21 New Jersey counties. Every installation is engineered to withstand Atlantic coastal storms and polar winter freezes under strict NJ Uniform Construction Code (UCC) Chapter 23 standards.
          </p>
        </div>
      </section>

      {/* Service Category Switcher Tabs */}
      <div className="w-full bg-white border-b border-slate-200 sticky top-20 z-30 shadow-sm">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 flex items-center gap-2 overflow-x-auto py-2.5">
          {TRADE_SERVICES.map((s) => (
            <button
              key={s.id}
              onClick={() => setActiveTab(s.id)}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-bold whitespace-nowrap transition-colors flex items-center gap-1.5 ${
                activeTab === s.id
                  ? 'bg-[#00236f] text-white shadow-sm'
                  : 'text-[#444651] hover:bg-[#f2f3ff] hover:text-[#00236f]'
              }`}
            >
              <span>{s.shortName}</span>
            </button>
          ))}
          <button
            onClick={() => onNavigate('service-areas')}
            className="ml-auto px-3.5 py-1.5 rounded-lg bg-[#eaedff] text-[#00236f] hover:bg-[#dce1ff] text-xs font-bold whitespace-nowrap flex items-center gap-1"
          >
            <span className="material-symbols-outlined text-[14px]">location_on</span>
            <span>View City Coverage</span>
          </button>
        </div>
      </div>

      {/* Main Service Content Presentation */}
      <main className="max-w-[1200px] mx-auto px-4 sm:px-6 pt-10 flex flex-col gap-12">
        {/* Service Hero Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white p-6 sm:p-8 rounded-xl shadow-sm border border-slate-100">
          <div className="lg:col-span-7 flex flex-col gap-4">
            <div className="inline-flex items-center gap-2 self-start bg-[#eaedff] text-[#00236f] px-3 py-1 rounded-full text-xs font-bold">
              <span className="material-symbols-outlined text-[16px] text-[#a73a00]">verified</span>
              <span>{selected.licenseRequirement}</span>
            </div>

            <h2 className="font-heading text-2xl sm:text-3xl text-[#00236f] font-bold">
              {selected.name}
            </h2>

            <p className="text-sm font-semibold text-[#a73a00]">{selected.tagline}</p>

            <p className="text-sm sm:text-base text-[#444651] leading-relaxed">
              {selected.description}
            </p>

            <div className="p-3 bg-[#f2f3ff] rounded-lg border border-slate-200/60 text-xs text-[#00236f] font-semibold flex items-center gap-2">
              <span className="material-symbols-outlined text-[18px] text-[#00236f]">gavel</span>
              <span><strong>Code Standard:</strong> {selected.njCodeFocus}</span>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={onOpenQuote}
                className="px-5 py-2.5 rounded-lg bg-[#a73a00] text-white font-bold text-sm hover:bg-[#852e00] transition-colors flex items-center gap-1.5 shadow-sm"
              >
                <span className="material-symbols-outlined text-[18px]">request_quote</span>
                <span>Request Written Estimate</span>
              </button>
              <a
                href="tel:2015550199"
                className="px-5 py-2.5 rounded-lg bg-[#eaedff] text-[#00236f] font-bold text-sm hover:bg-[#dce1ff] transition-colors flex items-center gap-1.5"
              >
                <span className="material-symbols-outlined text-[18px]">call</span>
                <span>Direct Hotline: (201) 555-0199</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 h-72 sm:h-80 rounded-xl overflow-hidden shadow-md relative">
            <img
              src={selected.heroImage}
              alt={selected.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-3 left-3 right-3 bg-[#00236f]/90 backdrop-blur-sm text-white p-3 rounded-lg text-xs flex items-center justify-between">
              <span className="font-bold">Rapid Dispatch</span>
              <span className="text-[#b6c4ff]">{selected.avgResponse}</span>
            </div>
          </div>
        </div>

        {/* Scope Highlights Bento */}
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-1">
            <span className="text-xs text-[#a73a00] font-bold uppercase tracking-wider">
              Technical Capabilities
            </span>
            <h3 className="font-heading text-xl sm:text-2xl text-[#00236f] font-bold">
              Engineering Scope &amp; Specializations
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {selected.scopeHighlights.map((scope, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex flex-col gap-3"
              >
                <div className="w-10 h-10 rounded-lg bg-[#eaedff] text-[#00236f] flex items-center justify-center">
                  <span className="material-symbols-outlined text-[24px]">{scope.icon}</span>
                </div>
                <h4 className="font-heading text-base sm:text-lg text-[#00236f] font-bold">
                  {scope.title}
                </h4>
                <p className="text-xs sm:text-sm text-[#444651] leading-relaxed">{scope.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Key Features Check List */}
        <div className="bg-[#eaedff] p-6 sm:p-8 rounded-xl border border-[#dae2fd] flex flex-col gap-4">
          <h3 className="font-heading text-lg sm:text-xl text-[#00236f] font-bold">
            Included in Every {selected.shortName} Project:
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {selected.features.map((feature, idx) => (
              <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#131b2e]">
                <span className="material-symbols-outlined text-[#a73a00] text-[18px] shrink-0 mt-0.5">
                  check_circle
                </span>
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 4-Step Process Section */}
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-1">
            <span className="text-xs text-[#a73a00] font-bold uppercase tracking-wider">
              Execution Methodology
            </span>
            <h3 className="font-heading text-xl sm:text-2xl text-[#00236f] font-bold">
              How We Execute Your Project
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {selected.process.map((p, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex flex-col gap-3"
              >
                <span className="text-2xl font-extrabold text-[#fd651e] font-heading">{p.step}</span>
                <h4 className="font-heading text-base font-bold text-[#00236f]">{p.title}</h4>
                <p className="text-xs text-[#444651] leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Localized City Links for this service */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex flex-col gap-4">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <div className="flex flex-col">
              <span className="text-xs text-[#a73a00] font-bold uppercase tracking-wider">
                Targeted NJ Municipalities
              </span>
              <h4 className="font-heading text-base font-bold text-[#00236f]">
                Looking for {selected.shortName} in your hometown?
              </h4>
            </div>
            <button
              onClick={() => onNavigate('service-areas')}
              className="text-xs font-bold text-[#00236f] hover:text-[#a73a00] flex items-center gap-1"
            >
              <span>View All 564 Municipalities</span>
              <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-2 pt-2">
            {[
              { name: 'Edison', slug: 'edison' },
              { name: 'Morristown', slug: 'morristown' },
              { name: 'Cherry Hill', slug: 'cherryhill' },
              { name: 'Hoboken', slug: 'hoboken' },
              { name: 'Toms River', slug: 'tomsriver' },
              { name: 'Paramus', slug: 'paramus' },
            ].map((c) => (
              <button
                key={c.slug}
                onClick={() => onSelectCity(c.slug)}
                className="p-2.5 rounded-lg bg-[#f2f3ff] hover:bg-[#eaedff] text-left text-xs font-bold text-[#00236f] transition-colors border border-slate-200/50 flex items-center justify-between"
              >
                <span>{c.name}, NJ</span>
                <span className="material-symbols-outlined text-[14px] text-[#a73a00]">arrow_forward</span>
              </button>
            ))}
          </div>
        </div>

        {/* Service FAQs */}
        <div className="flex flex-col gap-4">
          <h3 className="font-heading text-xl text-[#00236f] font-bold">
            Frequently Asked {selected.shortName} Questions
          </h3>
          <div className="flex flex-col gap-3">
            {selected.faqs.map((faq, idx) => (
              <div key={idx} className="bg-white p-5 rounded-xl shadow-sm border border-slate-100 flex flex-col gap-2">
                <span className="font-heading text-sm sm:text-base font-bold text-[#00236f]">
                  {faq.q}
                </span>
                <p className="text-xs sm:text-sm text-[#444651] leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

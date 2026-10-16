import React, { useState } from 'react';
import { TRADE_SERVICES } from '../data/tradeServices';
import { NJ_COUNTIES, FEATURED_CITIES } from '../data/njLocations';

interface HomePageProps {
  onNavigate: (path: string, param?: string) => void;
  onSelectCity: (slug: string) => void;
  onOpenQuote: () => void;
  onOpenWeeblyStudio: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onSelectCity,
  onOpenQuote,
  onOpenWeeblyStudio,
}) => {
  const [selectedCounty, setSelectedCounty] = useState('Middlesex County');
  const [estimateZip, setEstimateZip] = useState('08817');
  const [estimatePhone, setEstimatePhone] = useState('');
  const [estimateService, setEstimateService] = useState('hvac');
  const [heroFormSubmitted, setHeroFormSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const handleHeroSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setHeroFormSubmitted(true);
  };

  const homeFaqs = [
    {
      q: 'Are your contractors licensed, bonded, and insured in New Jersey?',
      a: 'Yes. Garden State Tradecraft holds NJ Home Improvement Contractor License #13VH09876500, Master Plumber License #36BI123456, and Electrical Contractor License #34EI098765. We carry $2,000,000 aggregate commercial general liability insurance and comprehensive workman’s comp.',
    },
    {
      q: 'Do you manage municipal permits and UCC inspections across New Jersey townships?',
      a: 'Absolutely. New Jersey has strict Uniform Construction Code (UCC) enforcement. We prepare all architectural schematics, pull all building, electrical, plumbing, and mechanical permits, schedule township sub-code inspectors, and hand you the final Certificate of Approval.',
    },
    {
      q: 'How fast is your 24/7 emergency dispatch response time?',
      a: 'With mobile staging units strategically stationed along the NJ Turnpike, Garden State Parkway, I-287, Route 1, Route 80, and Route 70 corridors, our average recorded arrival time for critical emergencies is between 25 and 40 minutes statewide.',
    },
    {
      q: 'Do you offer free written estimates?',
      a: 'Yes, we provide itemized, transparent flat-rate proposals for all planned HVAC replacements, complete roof replacements, 200A panel upgrades, and whole-home plumbing overhauls within 24 hours of site assessment.',
    },
  ];

  const testimonials = [
    {
      name: 'Dr. Vikram Patel',
      town: 'North Edison, NJ (08820)',
      service: 'Dual-Zone Heat Pump & 200A Upgrade',
      quote:
        'When our central AC failed during a heatwave, Garden State Tradecraft dispatched a master crew within 35 minutes. They replaced our obsolete split-bus panel, coordinated with PSE&G, and installed a whisper-quiet inverter heat pump. True master craftsmen.',
      rating: 5,
    },
    {
      name: 'Margaret S.',
      town: 'Morristown, NJ (07960)',
      service: 'Historic Boiler Replacement',
      quote:
        'Working on a 1912 colonial home requires genuine trade competence. They balanced our cast-iron radiators, replaced the aging gas boiler, and filed the town permits on South Street seamlessly.',
      rating: 5,
    },
    {
      name: 'Robert C.',
      town: 'Cherry Hill, NJ (08003)',
      service: 'Sump Pump & Basement Water Protection',
      quote:
        'The storm downpour inundated our Barclay Farm neighborhood. Their plumber installed a dual cast-iron pump with an AGM battery backup that ran flawlessly when the power tripped. Saved our finished basement.',
      rating: 5,
    },
  ];

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative w-full bg-[#faf8ff] pt-6 pb-16 md:py-20 overflow-hidden border-b border-slate-100">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Hero Left Content */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 self-start bg-[#dce1ff] text-[#00164e] px-3.5 py-1.5 rounded-full text-xs font-bold shadow-sm">
              <span className="material-symbols-outlined text-[16px] text-[#00236f]">shield</span>
              <span>New Jersey Licensed &amp; Insured Master Tradecraft • Statewide Dispatch</span>
            </div>

            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#00236f] tracking-tight leading-tight">
              New Jersey’s Trusted Mechanical &amp; Exterior Contractors
            </h1>

            <p className="text-base sm:text-lg text-[#444651] leading-relaxed">
              Serving residential and commercial property owners across all 21 New Jersey counties. Precision HVAC heat pumps, master plumbing, 200A electrical panel modernizations, and storm-rated architectural roofing.
            </p>

            {/* Micro Metrics Strip */}
            <div className="grid grid-cols-3 gap-3 pt-2">
              <div className="bg-[#eaedff] p-3.5 rounded-xl border border-[#dae2fd]">
                <span className="font-heading text-lg sm:text-xl font-bold text-[#00236f] block">
                  35 Mins
                </span>
                <span className="text-[11px] text-[#444651] leading-tight">Average Emergency Truck Arrival</span>
              </div>
              <div className="bg-[#eaedff] p-3.5 rounded-xl border border-[#dae2fd]">
                <span className="font-heading text-lg sm:text-xl font-bold text-[#00236f] block">
                  564 Cities
                </span>
                <span className="text-[11px] text-[#444651] leading-tight">Full NJ Municipal Coverage</span>
              </div>
              <div className="bg-[#eaedff] p-3.5 rounded-xl border border-[#dae2fd]">
                <span className="font-heading text-lg sm:text-xl font-bold text-[#00236f] block">
                  100% UCC
                </span>
                <span className="text-[11px] text-[#444651] leading-tight">Permit Code Handled</span>
              </div>
            </div>

            {/* Quick Link to Master City Template (Edison) */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => onNavigate('city', 'edison')}
                className="px-4 py-2.5 rounded-lg bg-[#00236f] text-white hover:bg-[#1e3a8a] transition-colors text-xs sm:text-sm font-bold flex items-center gap-2 shadow-sm"
              >
                <span className="material-symbols-outlined text-[18px] text-[#fd651e]">location_city</span>
                <span>View Edison, NJ Service Template</span>
              </button>
              <button
                onClick={() => onNavigate('service-areas')}
                className="px-4 py-2.5 rounded-lg bg-[#eaedff] text-[#00236f] hover:bg-[#dce1ff] transition-colors text-xs sm:text-sm font-bold flex items-center gap-1.5"
              >
                <span>Browse All 21 Counties</span>
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </button>
            </div>
          </div>

          {/* Hero Right Quick Quote / Dispatch Form */}
          <div className="lg:col-span-5 bg-white p-6 sm:p-7 rounded-xl shadow-md border border-slate-100">
            <div className="flex flex-col gap-1 pb-4 border-b border-slate-100">
              <div className="flex items-center justify-between">
                <span className="text-xs text-[#a73a00] font-bold uppercase tracking-wider">
                  Statewide Fast Track
                </span>
                <span className="bg-[#eaedff] text-[#00236f] text-xs px-2.5 py-0.5 rounded-full font-bold">
                  24/7 Available
                </span>
              </div>
              <h2 className="font-heading text-xl text-[#00236f] font-bold">Get a Fast Written Estimate</h2>
              <p className="text-xs text-[#444651]">Direct coordination with licensed New Jersey tradespeople.</p>
            </div>

            <form onSubmit={handleHeroSubmit} className="flex flex-col gap-3.5 pt-4">
              <div className="flex flex-col gap-1">
                <label className="text-xs text-[#131b2e] font-semibold">Service Required</label>
                <select
                  value={estimateService}
                  onChange={(e) => setEstimateService(e.target.value)}
                  className="h-11 px-3 rounded-lg bg-[#f2f3ff] text-sm text-[#131b2e] focus:outline-none focus:ring-2 focus:ring-[#00236f] border border-slate-200"
                >
                  <option value="hvac">HVAC: High-Efficiency Heat Pump / AC / Boiler</option>
                  <option value="plumbing">Master Plumbing: Water Heaters, Sump &amp; Sewer</option>
                  <option value="electrical">Electrical: 200A Panel, EV Charger &amp; Wiring</option>
                  <option value="roofing">Roofing: GAF Wind-Proof Shingles &amp; Gutters</option>
                  <option value="emergency">24/7 Urgent Dispatch: Active Leak / No Heat / Hazard</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="flex flex-col gap-1">
                  <label className="text-xs text-[#131b2e] font-semibold">NJ Zip Code</label>
                  <input
                    type="text"
                    value={estimateZip}
                    onChange={(e) => setEstimateZip(e.target.value)}
                    placeholder="08817"
                    className="h-11 px-3 rounded-lg bg-[#f2f3ff] text-sm text-[#131b2e] focus:outline-none focus:ring-2 focus:ring-[#00236f] border border-slate-200"
                    required
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-xs text-[#131b2e] font-semibold">Your Phone</label>
                  <input
                    type="tel"
                    value={estimatePhone}
                    onChange={(e) => setEstimatePhone(e.target.value)}
                    placeholder="(201) 555-0199"
                    className="h-11 px-3 rounded-lg bg-[#f2f3ff] text-sm text-[#131b2e] focus:outline-none focus:ring-2 focus:ring-[#00236f] border border-slate-200"
                    required
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-xs text-[#131b2e] font-semibold">City or Municipality</label>
                <input
                  type="text"
                  placeholder="e.g. Edison, Morristown, Paramus"
                  className="h-11 px-3 rounded-lg bg-[#f2f3ff] text-sm text-[#131b2e] focus:outline-none focus:ring-2 focus:ring-[#00236f] border border-slate-200"
                />
              </div>

              <button
                type="submit"
                className="h-12 mt-2 rounded-lg bg-[#a73a00] text-white font-heading text-sm font-bold hover:bg-[#852e00] transition-colors flex items-center justify-center gap-2 shadow-sm"
              >
                <span className="material-symbols-outlined text-[20px]">bolt</span>
                <span>Request Priority Estimate</span>
              </button>

              {heroFormSubmitted && (
                <div className="p-3 rounded-lg bg-[#eaedff] text-[#00236f] text-xs font-semibold text-center border border-[#b6c4ff]">
                  ✓ Dispatch confirmation: Request received for Zip {estimateZip}. A licensed NJ project manager will contact you within 15 minutes.
                </div>
              )}

              <div className="pt-2 flex items-center justify-between text-xs text-[#444651]">
                <span className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-[16px] text-[#004942]">verified</span>
                  <span>Licensed NJ HIC</span>
                </span>
                <span className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-[16px] text-[#a73a00]">call</span>
                  <span>Direct: (800) 555-NJ-PRO</span>
                </span>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* 4 Core Tradecraft Services Section */}
      <section className="w-full bg-[#f2f3ff] py-16">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 flex flex-col gap-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="max-w-2xl flex flex-col gap-2">
              <span className="text-xs text-[#a73a00] font-bold uppercase tracking-wider">
                Full-Service Regional Tradecraft
              </span>
              <h2 className="font-heading text-2xl sm:text-3xl text-[#00236f] font-bold tracking-tight">
                Our Primary Tradecraft Disciplines
              </h2>
              <p className="text-sm sm:text-base text-[#444651]">
                Every installation executed in strict accordance with the New Jersey Uniform Construction Code (UCC).
              </p>
            </div>
            <button
              onClick={() => onNavigate('services')}
              className="font-bold text-xs sm:text-sm text-[#00236f] hover:text-[#a73a00] transition-colors flex items-center gap-1"
            >
              <span>Explore All Specifications</span>
              <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {TRADE_SERVICES.map((s) => (
              <div
                key={s.id}
                className="bg-white rounded-xl overflow-hidden shadow-sm flex flex-col justify-between border border-slate-100 group"
              >
                <div
                  className="h-52 w-full bg-cover bg-center relative"
                  style={{ backgroundImage: `url('${s.heroImage}')` }}
                >
                  <div className="absolute inset-0 bg-[#00236f]/30 mix-blend-multiply group-hover:bg-[#00236f]/20 transition-all"></div>
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-[#00236f] flex items-center gap-1.5 shadow-sm">
                    <span className="material-symbols-outlined text-[16px] text-[#a73a00]">verified</span>
                    <span>{s.badge}</span>
                  </div>
                </div>

                <div className="p-6 flex flex-col gap-4">
                  <div>
                    <h3 className="font-heading text-lg sm:text-xl text-[#00236f] font-bold">{s.name}</h3>
                    <p className="text-xs text-[#a73a00] font-semibold mt-0.5">{s.tagline}</p>
                  </div>

                  <p className="text-xs sm:text-sm text-[#444651] leading-relaxed">{s.description}</p>

                  <ul className="flex flex-col gap-1.5 text-xs sm:text-sm text-[#131b2e]">
                    {s.features.slice(0, 3).map((f, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-[#a73a00] text-[16px]">check_circle</span>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-4 flex items-center justify-between border-t border-slate-100">
                    <button
                      onClick={() => onNavigate(s.slug)}
                      className="text-xs sm:text-sm font-bold text-[#00236f] hover:text-[#a73a00] transition-colors flex items-center gap-1"
                    >
                      <span>View Service Scope</span>
                      <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                    </button>
                    <span className="text-xs text-[#444651]">{s.avgResponse}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="w-full bg-[#faf8ff] py-16">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 flex flex-col gap-12">
          <div className="text-center max-w-2xl mx-auto flex flex-col gap-2">
            <span className="text-xs text-[#a73a00] font-bold uppercase tracking-wider">
              Statewide Integrity
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl text-[#00236f] font-bold tracking-tight">
              Why New Jersey Property Owners Depend On Our Tradecraft
            </h2>
            <p className="text-sm sm:text-base text-[#444651]">
              Built on certified municipal compliance, master-licensed technicians, and transparent pricing.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm flex flex-col gap-3 border border-slate-100">
              <div className="w-10 h-10 rounded-lg bg-[#eaedff] flex items-center justify-center text-[#00236f]">
                <span className="material-symbols-outlined text-[24px]">verified_user</span>
              </div>
              <h3 className="font-heading text-lg text-[#00236f] font-bold">Licensed &amp; Bonded</h3>
              <p className="text-xs sm:text-sm text-[#444651] leading-relaxed">
                NJ Home Improvement Contractor Lic #13VH09876500, Master Plumber #36BI123456, and Electrical #34EI098765 backed by $2M coverage.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm flex flex-col gap-3 border border-slate-100">
              <div className="w-10 h-10 rounded-lg bg-[#eaedff] flex items-center justify-center text-[#00236f]">
                <span className="material-symbols-outlined text-[24px]">account_balance</span>
              </div>
              <h3 className="font-heading text-lg text-[#00236f] font-bold">Municipal Permit Team</h3>
              <p className="text-xs sm:text-sm text-[#444651] leading-relaxed">
                We handle 100% of New Jersey township UCC sub-code filings, engineering drawings, and final building inspector signoffs.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm flex flex-col gap-3 border border-slate-100">
              <div className="w-10 h-10 rounded-lg bg-[#eaedff] flex items-center justify-center text-[#00236f]">
                <span className="material-symbols-outlined text-[24px]">payments</span>
              </div>
              <h3 className="font-heading text-lg text-[#00236f] font-bold">Fixed Flat-Rate Quotes</h3>
              <p className="text-xs sm:text-sm text-[#444651] leading-relaxed">
                No hidden bridge tolls, travel fees, or mid-job surprise surcharges. Transparent written quotes before work begins.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm flex flex-col gap-3 border border-slate-100">
              <div className="w-10 h-10 rounded-lg bg-[#eaedff] flex items-center justify-center text-[#00236f]">
                <span className="material-symbols-outlined text-[24px]">handshake</span>
              </div>
              <h3 className="font-heading text-lg text-[#00236f] font-bold">10-Year Craftsmanship</h3>
              <p className="text-xs sm:text-sm text-[#444651] leading-relaxed">
                All major installations—from whole-home heat pump conversions to full roof tear-offs—carry our 10-year workmanship warranty.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas Statewide Explorer Section */}
      <section className="w-full bg-[#eaedff] py-16">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 flex flex-col gap-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="max-w-2xl flex flex-col gap-2">
              <span className="text-xs text-[#a73a00] font-bold uppercase tracking-wider">
                Statewide New Jersey Reach
              </span>
              <h2 className="font-heading text-2xl sm:text-3xl text-[#00236f] font-bold tracking-tight">
                500+ Cities &amp; Municipalities Across All 21 Counties
              </h2>
              <p className="text-sm sm:text-base text-[#444651]">
                Select a county or view our approved city blueprints customized for local micro-climates, water conditions, and building codes.
              </p>
            </div>

            <button
              onClick={() => onNavigate('service-areas')}
              className="bg-[#00236f] text-white px-5 py-2.5 rounded-lg text-xs sm:text-sm font-bold hover:bg-[#1e3a8a] transition-colors flex items-center gap-1.5 self-start md:self-auto shrink-0 shadow-sm"
            >
              <span>Explore Complete County Directory</span>
              <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </button>
          </div>

          {/* Featured City Blueprints */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.keys(FEATURED_CITIES).map((key) => {
              const c = FEATURED_CITIES[key];
              return (
                <div
                  key={c.slug}
                  onClick={() => onSelectCity(c.slug)}
                  className="bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition-all cursor-pointer flex flex-col justify-between border border-slate-100 group"
                >
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-[#a73a00] uppercase tracking-wider">
                        {c.region}
                      </span>
                      <span className="bg-[#eaedff] text-[#00236f] text-xs px-2 py-0.5 rounded font-bold">
                        {c.zipCodes[0]}
                      </span>
                    </div>
                    <h3 className="font-heading text-lg font-bold text-[#00236f] group-hover:text-[#a73a00] transition-colors">
                      {c.name}, NJ
                    </h3>
                    <p className="text-xs text-[#444651] line-clamp-2">{c.metaDescription}</p>
                  </div>

                  <div className="pt-4 mt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                    <span className="text-[#00236f] font-semibold flex items-center gap-1">
                      <span>View City Page</span>
                      <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                    </span>
                    <span className="text-[#444651]">{c.avgArrivalMins} min dispatch</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* 21 Counties Quick Selector */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex flex-col gap-4">
            <span className="text-xs font-bold text-[#00236f] uppercase tracking-wider">
              Select Your New Jersey County:
            </span>
            <div className="flex flex-wrap gap-2">
              {NJ_COUNTIES.map((county) => (
                <button
                  key={county}
                  onClick={() => {
                    setSelectedCounty(county);
                    onNavigate('service-areas');
                  }}
                  className={`text-xs px-3 py-1.5 rounded-lg font-semibold transition-colors ${
                    selectedCounty === county
                      ? 'bg-[#00236f] text-white'
                      : 'bg-[#f2f3ff] text-[#444651] hover:bg-[#dce1ff]'
                  }`}
                >
                  {county}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="w-full bg-[#faf8ff] py-16">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 flex flex-col gap-10">
          <div className="text-center max-w-2xl mx-auto flex flex-col gap-2">
            <span className="text-xs text-[#a73a00] font-bold uppercase tracking-wider">
              Verified Regional Reputation
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl text-[#00236f] font-bold tracking-tight">
              What New Jersey Homeowners Say
            </h2>
            <p className="text-sm sm:text-base text-[#444651]">
              Real testimonials from customers across Middlesex, Morris, and Camden counties.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex flex-col justify-between gap-4"
              >
                <div className="flex flex-col gap-3">
                  <div className="flex text-[#fd651e]">
                    {[...Array(t.rating)].map((_, i) => (
                      <span key={i} className="material-symbols-outlined text-[18px]">
                        star
                      </span>
                    ))}
                  </div>
                  <p className="text-xs sm:text-sm text-[#444651] italic leading-relaxed">
                    "{t.quote}"
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex flex-col">
                  <span className="font-heading text-sm font-bold text-[#00236f]">{t.name}</span>
                  <span className="text-xs text-[#a73a00] font-semibold">{t.town}</span>
                  <span className="text-[11px] text-[#757682]">{t.service}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full bg-[#f2f3ff] py-16">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-4 flex flex-col gap-4">
            <span className="text-xs text-[#a73a00] font-bold uppercase tracking-wider">
              Common Inquiries
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl text-[#00236f] font-bold tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-xs sm:text-sm text-[#444651]">
              Learn about our state licensing, municipal inspections, pricing policies, and dispatch response times.
            </p>
            <button
              onClick={onOpenQuote}
              className="mt-2 px-4 py-2.5 rounded-lg bg-[#a73a00] text-white font-bold text-xs sm:text-sm hover:bg-[#852e00] transition-colors self-start"
            >
              Ask a Specific Question
            </button>
          </div>

          <div className="lg:col-span-8 flex flex-col gap-4">
            {homeFaqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl p-5 shadow-sm border border-slate-100 transition-colors"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full text-left font-heading text-sm sm:text-base text-[#00236f] font-bold flex items-center justify-between cursor-pointer gap-2"
                  >
                    <span>{faq.q}</span>
                    <span
                      className={`material-symbols-outlined text-[#00236f] text-[20px] transition-transform ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    >
                      expand_more
                    </span>
                  </button>
                  {isOpen && (
                    <div className="text-xs sm:text-sm text-[#444651] pt-3 leading-relaxed border-t border-slate-100 mt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Emergency Bottom Banner */}
      <section className="w-full bg-[#00236f] text-white py-12 px-4 sm:px-6">
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="flex flex-col gap-2">
            <span className="text-xs text-[#fd651e] font-bold uppercase tracking-wider">
              24/7 Rapid Dispatch Center
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-white">
              Need Urgent Mechanical or Storm Repair in New Jersey?
            </h2>
            <p className="text-xs sm:text-sm text-[#b6c4ff] max-w-xl">
              Trucks roving all 21 counties day and night. Call our toll-free direct emergency hotline for prioritized truck arrival.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href="tel:8005556577"
              className="px-6 py-3.5 rounded-lg bg-[#a73a00] hover:bg-[#852e00] text-white font-heading font-bold text-sm flex items-center gap-2 shadow-sm transition-colors"
            >
              <span className="material-symbols-outlined text-[20px]">call</span>
              <span>(800) 555-NJ-PRO</span>
            </a>
            <button
              onClick={onOpenQuote}
              className="px-6 py-3.5 rounded-lg bg-white hover:bg-slate-100 text-[#00236f] font-heading font-bold text-sm transition-colors"
            >
              Request Free Quote
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

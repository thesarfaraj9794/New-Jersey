import React, { useState } from 'react';
import { NJCityData, FEATURED_CITIES } from '../data/njLocations';

interface CityPageProps {
  cityData?: NJCityData;
  onNavigate: (path: string, param?: string) => void;
  onSelectCity: (slug: string) => void;
  onOpenQuote: () => void;
  onOpenWeeblyStudio: () => void;
}

export const CityPage: React.FC<CityPageProps> = ({
  cityData = FEATURED_CITIES.edison,
  onNavigate,
  onSelectCity,
  onOpenQuote,
  onOpenWeeblyStudio,
}) => {
  // Form submission state
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [selectedService, setSelectedService] = useState('hvac');
  const [inputZip, setInputZip] = useState(cityData.zipCodes[0] || '08817');
  const [inputPhone, setInputPhone] = useState('');
  const [inputStreet, setInputStreet] = useState('');

  // FAQ Accordion open items state
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const handleDispatchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  // Safe fallback if cityData is missing something
  const city = cityData;

  return (
    <div className="flex flex-col w-full">
      {/* Weebly Template Review Bar (Allows reviewers to test the template for all 500+ NJ locations) */}
      <div className="w-full bg-[#1e3a8a] text-white py-2 px-4 border-b border-[#00236f]">
        <div className="max-w-[1200px] mx-auto flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2">
            <span className="bg-[#fd651e] text-white px-2 py-0.5 rounded font-bold uppercase tracking-wider text-[10px]">
              Weebly Master City Template
            </span>
            <span className="font-semibold text-[#b6c4ff]">
              Reviewing: <span className="text-white font-bold">{city.name}, NJ</span> ({city.county})
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-slate-300 hidden sm:inline">Preview Template in:</span>
            <select
              value={city.slug}
              onChange={(e) => onSelectCity(e.target.value)}
              className="bg-[#00236f] text-white border border-[#b6c4ff]/40 rounded px-2 py-1 text-xs font-semibold focus:outline-none"
            >
              <option value="edison">Edison, NJ (Central - Middlesex)</option>
              <option value="morristown">Morristown, NJ (North - Morris)</option>
              <option value="cherryhill">Cherry Hill, NJ (South - Camden)</option>
              <option value="hoboken">Hoboken, NJ (Urban - Hudson)</option>
              <option value="tomsriver">Toms River, NJ (Jersey Shore - Ocean)</option>
              <option value="paramus">Paramus, NJ (North - Bergen)</option>
            </select>
            <button
              onClick={onOpenWeeblyStudio}
              className="bg-white/10 hover:bg-white/20 text-white px-2.5 py-1 rounded text-xs font-bold transition-colors flex items-center gap-1 border border-white/20"
            >
              <span className="material-symbols-outlined text-[14px]">table_chart</span>
              <span>564 City Spreadsheet &amp; CSV</span>
            </button>
          </div>
        </div>
      </div>

      {/* Dispatch Banner & Breadcrumbs Section */}
      <section className="w-full bg-[#f2f3ff] py-6">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 flex flex-col gap-4">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-semibold text-[#444651] flex-wrap">
            <button onClick={() => onNavigate('home')} className="hover:text-[#00236f] transition-colors">
              Home
            </button>
            <span className="material-symbols-outlined text-[14px]">chevron_right</span>
            <button onClick={() => onNavigate('service-areas')} className="hover:text-[#00236f] transition-colors">
              Service Areas
            </button>
            <span className="material-symbols-outlined text-[14px]">chevron_right</span>
            <button onClick={() => onNavigate('service-areas')} className="hover:text-[#00236f] transition-colors">
              {city.county}
            </button>
            <span className="material-symbols-outlined text-[14px]">chevron_right</span>
            <span className="text-[#00236f] font-bold">{city.name}, NJ</span>
          </nav>

          <div className="flex flex-wrap items-center justify-between gap-3 bg-white p-3.5 rounded-xl shadow-sm border border-slate-100">
            <div className="flex items-center gap-2 text-xs text-[#a73a00] font-bold">
              <span className="material-symbols-outlined text-[18px]">near_me</span>
              <span className="tracking-wide">
                LOCAL CONTRACTOR SPECIALISTS IN {city.name.toUpperCase()}, NJ ({city.zipCodes.join(', ')})
              </span>
            </div>
            <div className="flex items-center gap-4 text-[#444651] text-xs font-semibold">
              <span className="flex items-center gap-1.5">
                <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#fd651e] animate-pulse"></span>
                <span>{city.activeDispatches} Dispatch Units Active in {city.zipCodes[0]}</span>
              </span>
              <span className="text-slate-300">|</span>
              <span className="text-[#00236f] font-bold">{city.county.replace(' County', '')} Hub</span>
            </div>
          </div>
        </div>
      </section>

      {/* Local Authority Hero & Quick Dispatch Estimator Sidebar */}
      <section className="w-full bg-[#faf8ff] py-12 md:py-16">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Local Authority Copy */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 self-start bg-[#dce1ff] text-[#00164e] px-3 py-1 rounded-full text-xs font-bold">
              <span className="material-symbols-outlined text-[16px] text-[#00236f]">location_city</span>
              <span>Serving All {city.name} Wards Since 2008</span>
            </div>

            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-[#00236f] font-extrabold tracking-tight leading-tight">
              Licensed Contracting &amp; Home Services in {city.name}, New Jersey
            </h1>

            <p className="text-base sm:text-lg text-[#444651] leading-relaxed">
              Rapid local dispatch for emergency HVAC, master plumbing, electrical rewiring, and storm-grade exterior roofing across {city.neighborhoods.map(n => n.name.split('&')[0].trim()).join(', ')}. Built for the distinct demands of {city.county} infrastructure.
            </p>

            {/* Dispatch Stats Micro-Dashboard */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="bg-[#eaedff] p-4 rounded-xl shadow-sm flex flex-col gap-1 border border-[#dae2fd]">
                <span className="material-symbols-outlined text-[#a73a00] text-[24px]">timer</span>
                <span className="font-heading text-xl font-bold text-[#00236f]">{city.avgArrivalMins} Mins</span>
                <span className="text-xs text-[#444651] leading-tight">Average truck arrival across {city.name} Twp</span>
              </div>

              <div className="bg-[#eaedff] p-4 rounded-xl shadow-sm flex flex-col gap-1 border border-[#dae2fd]">
                <span className="material-symbols-outlined text-[#00236f] text-[24px]">assignment_turned_in</span>
                <span className="font-heading text-xl font-bold text-[#00236f]">Pre-Cleared</span>
                <span className="text-xs text-[#444651] leading-tight">Coordinated with {city.name} Building Dept</span>
              </div>

              <div className="bg-[#00236f] text-white p-4 rounded-xl shadow-sm flex flex-col justify-between gap-1">
                <span className="material-symbols-outlined text-[#fd651e] text-[24px]">call</span>
                <span className="text-[11px] text-[#b6c4ff] uppercase tracking-wider font-bold">Local Direct</span>
                <a
                  className="font-heading text-base sm:text-lg font-bold text-white hover:text-[#ffdbce] transition-colors"
                  href={`tel:${city.localPhone.replace(/[^0-9]/g, '')}`}
                >
                  {city.localPhone}
                </a>
              </div>
            </div>

            {/* License Badges */}
            <div className="flex flex-wrap items-center gap-6 pt-2 text-xs font-semibold text-[#444651]">
              <span className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[#fd651e] text-[18px]">verified</span>
                <span>NJ HIC #13VH09876500</span>
              </span>
              <span className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[#fd651e] text-[18px]">gavel</span>
                <span>Master Plumber Lic #36BI123456</span>
              </span>
              <span className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[#fd651e] text-[18px]">electric_bolt</span>
                <span>Electrical Lic #34EI098765</span>
              </span>
            </div>
          </div>

          {/* Right Column: Quick Dispatch Estimator Sidebar Box */}
          <div className="lg:col-span-5 bg-white p-6 rounded-xl shadow-md border border-slate-100">
            <div className="flex flex-col gap-2 pb-4 border-b border-slate-100">
              <div className="flex items-center justify-between">
                <span className="text-xs text-[#a73a00] font-bold uppercase tracking-wider">
                  {city.name} Service Center
                </span>
                <span className="bg-[#eaedff] text-[#00236f] text-xs px-2.5 py-0.5 rounded-full font-bold">
                  Zip: {city.zipCodes.join('/')}
                </span>
              </div>
              <h2 className="font-heading text-xl text-[#00236f] font-bold">Schedule Priority Technician</h2>
              <p className="text-xs text-[#444651]">Immediate response dispatch units stationed along arterial corridors.</p>
            </div>

            <form onSubmit={handleDispatchSubmit} className="flex flex-col gap-3.5 pt-4">
              <div className="flex flex-col gap-1">
                <label className="text-xs text-[#131b2e] font-semibold" htmlFor="city-service">
                  Required Tradecraft
                </label>
                <select
                  id="city-service"
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  className="h-12 px-3 rounded-lg bg-[#f2f3ff] text-[#131b2e] text-sm focus:outline-none focus:ring-2 focus:ring-[#00236f] border border-slate-200"
                >
                  <option value="hvac">HVAC: AC / Furnace Replacement or Repair</option>
                  <option value="plumbing">Master Plumbing: Water Heaters &amp; Mains</option>
                  <option value="electrical">Electrical: 200A Panel / Rewiring / EV</option>
                  <option value="roofing">Roofing &amp; Gutters: Wind / Storm Shield</option>
                  <option value="emergency">Emergency: Immediate Truck Dispatch</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="flex flex-col gap-1">
                  <label className="text-xs text-[#131b2e] font-semibold" htmlFor="city-zip">
                    {city.name} ZIP
                  </label>
                  <input
                    id="city-zip"
                    type="text"
                    value={inputZip}
                    onChange={(e) => setInputZip(e.target.value)}
                    className="h-12 px-3 rounded-lg bg-[#f2f3ff] text-[#131b2e] text-sm focus:outline-none focus:ring-2 focus:ring-[#00236f] border border-slate-200"
                    placeholder={city.zipCodes[0]}
                    required
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-xs text-[#131b2e] font-semibold" htmlFor="city-phone">
                    Phone Number
                  </label>
                  <input
                    id="city-phone"
                    type="tel"
                    value={inputPhone}
                    onChange={(e) => setInputPhone(e.target.value)}
                    className="h-12 px-3 rounded-lg bg-[#f2f3ff] text-[#131b2e] text-sm focus:outline-none focus:ring-2 focus:ring-[#00236f] border border-slate-200"
                    placeholder="(732) 000-0000"
                    required
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-xs text-[#131b2e] font-semibold" htmlFor="city-street">
                  Street Address / Neighborhood
                </label>
                <input
                  id="city-street"
                  type="text"
                  value={inputStreet}
                  onChange={(e) => setInputStreet(e.target.value)}
                  className="h-12 px-3 rounded-lg bg-[#f2f3ff] text-[#131b2e] text-sm focus:outline-none focus:ring-2 focus:ring-[#00236f] border border-slate-200"
                  placeholder={`e.g. Main Street, ${city.name}`}
                />
              </div>

              <button
                type="submit"
                className="h-12 mt-2 rounded-lg bg-[#a73a00] text-white font-heading text-sm font-bold hover:bg-[#852e00] transition-colors flex items-center justify-center gap-2 shadow-sm"
              >
                <span className="material-symbols-outlined text-[20px]">bolt</span>
                <span>Request {city.name} Dispatch</span>
              </button>

              {formSubmitted && (
                <div className="p-3.5 rounded-lg bg-[#eaedff] text-[#00236f] text-xs font-semibold text-center border border-[#b6c4ff] animate-fadeIn">
                  ✓ Dispatch team notified! A {city.county.replace(' County', '')} master technician will call {inputPhone || 'your phone'} within 9 minutes.
                </div>
              )}

              <div className="pt-2 flex items-center justify-between text-xs text-[#444651]">
                <span className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-[16px] text-[#004942]">lock</span>
                  <span>No upfront credit card</span>
                </span>
                <span className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-[16px] text-[#a73a00]">flash_on</span>
                  <span>Same-Day Slot Guarantee</span>
                </span>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Neighborhood Coverage & Specific Mechanical Challenges Section */}
      <section className="w-full bg-[#eaedff] py-16">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 flex flex-col gap-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="max-w-2xl flex flex-col gap-2">
              <span className="text-xs text-[#a73a00] font-bold uppercase tracking-wider">
                Local Micro-Climate &amp; Infrastructure
              </span>
              <h2 className="font-heading text-2xl sm:text-3xl text-[#00236f] font-bold tracking-tight">
                {city.name} Neighborhood Coverage &amp; Specific Mechanical Challenges
              </h2>
              <p className="text-sm sm:text-base text-[#444651]">
                We understand the unique building age, municipal code demands, and environmental factors across {city.name}’s zip codes.
              </p>
            </div>

            <div className="bg-white px-4 py-2.5 rounded-xl shadow-sm flex items-center gap-3 shrink-0 border border-slate-100">
              <span className="material-symbols-outlined text-[#00236f] text-[28px]">domain</span>
              <div className="flex flex-col">
                <span className="text-xs text-[#444651]">Municipal Jurisdiction</span>
                <span className="text-sm text-[#00236f] font-bold">{city.municipalComplex}</span>
              </div>
            </div>
          </div>

          {/* Grid of Neighborhood Profiles & Challenges */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {city.neighborhoods.map((n, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl shadow-sm flex flex-col gap-4 border border-slate-100">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded bg-[#eaedff] text-xs font-bold text-[#00236f]">
                    {n.zip}
                  </span>
                  <span className="material-symbols-outlined text-[#a73a00] text-[22px]">{n.icon}</span>
                </div>
                <h3 className="font-heading text-lg text-[#00236f] font-bold">{n.name}</h3>
                <p className="text-xs sm:text-sm text-[#444651] leading-relaxed">{n.description}</p>
                <div className="pt-2 mt-auto flex flex-col gap-1 bg-[#f2f3ff] p-3 rounded-lg border border-slate-100">
                  <span className="text-xs text-[#00236f] font-bold">Common Local Service:</span>
                  <span className="text-xs text-[#444651]">{n.commonService}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Regional Technical Realities Banner */}
          <div className="bg-[#dae2fd] p-6 md:p-8 rounded-xl flex flex-col lg:flex-row items-center gap-6 justify-between border border-[#b6c4ff]/50">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#00236f] text-white flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-[28px]">water_drop</span>
              </div>
              <div className="flex flex-col gap-1">
                <h4 className="font-heading text-lg sm:text-xl text-[#00236f] font-bold">
                  {city.waterIssueTitle}
                </h4>
                <p className="text-xs sm:text-sm text-[#444651] max-w-2xl leading-relaxed">
                  {city.waterIssueDesc}
                </p>
              </div>
            </div>
            <a
              className="px-5 py-3 rounded-lg bg-[#00236f] text-white hover:bg-[#1e3a8a] transition-colors text-sm font-bold whitespace-nowrap shrink-0 flex items-center gap-2 shadow-sm"
              href={`tel:${city.localPhone.replace(/[^0-9]/g, '')}`}
            >
              <span className="material-symbols-outlined text-[18px]">engineering</span>
              <span>Consult {city.name} Water Specialist</span>
            </a>
          </div>
        </div>
      </section>

      {/* Available Trade Services in City Section (4 Core Cards) */}
      <section className="w-full bg-[#faf8ff] py-16">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 flex flex-col gap-10">
          <div className="flex flex-col gap-2">
            <span className="text-xs text-[#a73a00] font-bold uppercase tracking-wider">
              {city.county} Solutions
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl text-[#00236f] font-bold tracking-tight">
              Available Trade Services in {city.name}, NJ
            </h2>
            <p className="text-sm sm:text-base text-[#444651]">
              Every service executed in direct compliance with NJ Uniform Construction Code (UCC) Chapter 23.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Service 1: HVAC */}
            <div className="bg-[#f2f3ff] rounded-xl overflow-hidden shadow-sm flex flex-col justify-between border border-slate-100">
              <div
                className="h-48 w-full bg-cover bg-center relative"
                style={{
                  backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuDrYw_zTh6bYUltdtYokfzjH-zzppYFqnBmLFlDPyMfhJ-rDxsz0xFLmkQdKcQbZ4Ss01nfOg0Wbg2eGzBsaMXCbA4xvqPG_8TbT_tImcbhCf5PBCAt2-JErMq68sjQ-_VNbDdnmTcRmHjIo5mX6Ifxfatf-FY2fWlNr5hU2jP-5N6uOBjT8P3vtIPz-gaEAsCxJb2jQmFDTjY9ex7Rjcru_bDWpNHjXbLFcf5SONYrQ7fWf743ZFJQ')`,
                }}
              >
                <div className="absolute inset-0 bg-[#00236f]/30 mix-blend-multiply"></div>
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-[#00236f] flex items-center gap-1.5 shadow-sm">
                  <span className="material-symbols-outlined text-[16px] text-[#a73a00]">mode_fan</span>
                  <span>HVAC Heating &amp; AC</span>
                </div>
              </div>
              <div className="p-6 flex flex-col gap-4">
                <h3 className="font-heading text-lg sm:text-xl text-[#00236f] font-bold">
                  Emergency HVAC &amp; Heat Pump Installations
                </h3>
                <p className="text-xs sm:text-sm text-[#444651] leading-relaxed">
                  High-humidity {city.name} summers stress condenser coils, while January cold snaps threaten aging furnaces. We install high-SEER2 inverter systems, dual-fuel heat pumps, and execute 2-hour compressor replacements.
                </p>
                <ul className="flex flex-col gap-1.5 text-xs sm:text-sm text-[#131b2e]">
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#a73a00] text-[16px]">check_circle</span>
                    <span>Same-day emergency AC refrigerant leak repairs</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#a73a00] text-[16px]">check_circle</span>
                    <span>High-efficiency gas boiler upgrades with chimney liners</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#a73a00] text-[16px]">check_circle</span>
                    <span>Full duct zoning for multi-story {city.name} homes</span>
                  </li>
                </ul>
                <div className="pt-4 flex items-center justify-between border-t border-slate-200">
                  <button
                    onClick={() => onNavigate('services-hvac')}
                    className="text-xs sm:text-sm font-bold text-[#00236f] hover:text-[#a73a00] transition-colors flex items-center gap-1"
                  >
                    <span>Dispatch {city.name} HVAC Team</span>
                    <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                  </button>
                  <span className="text-xs text-[#444651]">Avg arrival: {city.avgArrivalMins} min</span>
                </div>
              </div>
            </div>

            {/* Service 2: Plumbing */}
            <div className="bg-[#f2f3ff] rounded-xl overflow-hidden shadow-sm flex flex-col justify-between border border-slate-100">
              <div
                className="h-48 w-full bg-cover bg-center relative"
                style={{
                  backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuBcTms-QUm4oKDNa90aWJHI7EftxTBVjGgb0PcVkfsPM5C2R17fjzf_PYWsFYC5JD0yWm4yxI0tYf7Bpq9Y1_7PUL4bOcHGpRw9bQCiGohL1-KAAGOOa7Won6dLZ682RpQ-Is14r1z6qGVbingXItU1_TIoA7tE5ju27gYNjb0FKqROmfQ6ujdGOaNEbRTbrGVdqi85aMRD9K_JkABc8piuMmARI5zVxNUCANR-1K4GrkUDydKGmZ4y')`,
                }}
              >
                <div className="absolute inset-0 bg-[#00236f]/30 mix-blend-multiply"></div>
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-[#00236f] flex items-center gap-1.5 shadow-sm">
                  <span className="material-symbols-outlined text-[16px] text-[#a73a00]">plumbing</span>
                  <span>Master Plumbing</span>
                </div>
              </div>
              <div className="p-6 flex flex-col gap-4">
                <h3 className="font-heading text-lg sm:text-xl text-[#00236f] font-bold">
                  Master Plumbing, Sump Pumps &amp; Water Heaters
                </h3>
                <p className="text-xs sm:text-sm text-[#444651] leading-relaxed">
                  From water table management in low-elevation {city.name} neighborhoods to mineral calcification inside water heaters, our licensed master plumbers resolve sewer and potable issues with zero guesswork.
                </p>
                <ul className="flex flex-col gap-1.5 text-xs sm:text-sm text-[#131b2e]">
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#a73a00] text-[16px]">check_circle</span>
                    <span>Commercial grade cast-iron sump pumps with battery backups</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#a73a00] text-[16px]">check_circle</span>
                    <span>Trenchless sewer line repairs avoiding driveway damage</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#a73a00] text-[16px]">check_circle</span>
                    <span>Tankless water heater conversions with gas load calculations</span>
                  </li>
                </ul>
                <div className="pt-4 flex items-center justify-between border-t border-slate-200">
                  <button
                    onClick={() => onNavigate('services-plumbing')}
                    className="text-xs sm:text-sm font-bold text-[#00236f] hover:text-[#a73a00] transition-colors flex items-center gap-1"
                  >
                    <span>Book {city.name} Master Plumber</span>
                    <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                  </button>
                  <span className="text-xs text-[#444651]">Licensed #36BI123456</span>
                </div>
              </div>
            </div>

            {/* Service 3: Electrical */}
            <div className="bg-[#f2f3ff] rounded-xl overflow-hidden shadow-sm flex flex-col justify-between border border-slate-100">
              <div
                className="h-48 w-full bg-cover bg-center relative"
                style={{
                  backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuAvC6YIUkO9pyhzMkVGTV9CFyGZVieWyH033_XrdDwZ9HiR87uaL1nUwqd4L2kOnMIFcRRLb12HJ2JeKUqFTm3ZIYWGL6DSkP55H027iUJ63QB2GoWmbqAu1bmfGQRnQXyfhebz0E0RxO7RFtBlDGYZVjgXfTE2c8weTg0qKtzB8vGXryhGXoO7OxtlMKemyYlXyUrdzUhGos_i0n22Iz7Jw0Tuf50sp-AdAbS9qWkfgdBVJbuaaPJh')`,
                }}
              >
                <div className="absolute inset-0 bg-[#00236f]/30 mix-blend-multiply"></div>
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-[#00236f] flex items-center gap-1.5 shadow-sm">
                  <span className="material-symbols-outlined text-[16px] text-[#a73a00]">bolt</span>
                  <span>Electrical Contracting</span>
                </div>
              </div>
              <div className="p-6 flex flex-col gap-4">
                <h3 className="font-heading text-lg sm:text-xl text-[#00236f] font-bold">
                  200A Electrical Panel Upgrades &amp; EV Chargers
                </h3>
                <p className="text-xs sm:text-sm text-[#444651] leading-relaxed">
                  Many mid-century homes in {city.zipCodes[0]} still operate on obsolete 100A Federal Pacific or split-bus panels. We upgrade your main service to 200A/400A, prep for solar integrations, and install Level 2 Tesla/Universal EV chargers.
                </p>
                <ul className="flex flex-col gap-1.5 text-xs sm:text-sm text-[#131b2e]">
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#a73a00] text-[16px]">check_circle</span>
                    <span>PSE&amp;G utility hookup coordination &amp; meter socket resets</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#a73a00] text-[16px]">check_circle</span>
                    <span>Whole-home surge protection guarding expensive smart appliances</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#a73a00] text-[16px]">check_circle</span>
                    <span>Dedicated heavy-amperage lines for induction cooktops &amp; heat pumps</span>
                  </li>
                </ul>
                <div className="pt-4 flex items-center justify-between border-t border-slate-200">
                  <button
                    onClick={() => onNavigate('services-electrical')}
                    className="text-xs sm:text-sm font-bold text-[#00236f] hover:text-[#a73a00] transition-colors flex items-center gap-1"
                  >
                    <span>Request Electrical Inspection</span>
                    <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                  </button>
                  <span className="text-xs text-[#444651]">UCC Code Compliant</span>
                </div>
              </div>
            </div>

            {/* Service 4: Roofing */}
            <div className="bg-[#f2f3ff] rounded-xl overflow-hidden shadow-sm flex flex-col justify-between border border-slate-100">
              <div
                className="h-48 w-full bg-cover bg-center relative"
                style={{
                  backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuCFW0CvAtxhbZaSeCw449auz0-MbNFq69xG3l9SbWcTD6fdyzo1HqGLL_HbY00s3nK7pvG8WjJjZYXVJ3mj23XvExjfRIYIlkxm-A1cy8g5EwSRp7Zw6Rt58PW8lXS7Zvg6Nj-Bg0WNLg-zVXGQfXMTCmdd9DsVG0wK2qWFtz_M-QP6r5a6GoeahfO55I1ENwHyMrLUm2ZMAv6HfvVlCa633uShDZ9aQPrt-cThdvfdMXLxwHlPTZMA')`,
                }}
              >
                <div className="absolute inset-0 bg-[#00236f]/30 mix-blend-multiply"></div>
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-[#00236f] flex items-center gap-1.5 shadow-sm">
                  <span className="material-symbols-outlined text-[16px] text-[#a73a00]">roofing</span>
                  <span>Roofing &amp; Exteriors</span>
                </div>
              </div>
              <div className="p-6 flex flex-col gap-4">
                <h3 className="font-heading text-lg sm:text-xl text-[#00236f] font-bold">
                  Storm-Resistant Roofing &amp; Seamless Gutters
                </h3>
                <p className="text-xs sm:text-sm text-[#444651] leading-relaxed">
                  New Jersey nor'easters and summer cloudbursts punish vulnerable roof valleys. We install architectural shingle systems engineered for 130 MPH wind-resistance with 6-inch seamless K-style gutters to steer water away from foundations.
                </p>
                <ul className="flex flex-col gap-1.5 text-xs sm:text-sm text-[#131b2e]">
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#a73a00] text-[16px]">check_circle</span>
                    <span>GAF &amp; CertainTeed certified 50-year warranty installations</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#a73a00] text-[16px]">check_circle</span>
                    <span>Complete tear-off with plywood redecking and ice-shield barriers</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#a73a00] text-[16px]">check_circle</span>
                    <span>Emergency storm tarping and insurance claim assistance</span>
                  </li>
                </ul>
                <div className="pt-4 flex items-center justify-between border-t border-slate-200">
                  <button
                    onClick={() => onNavigate('services-roofing')}
                    className="text-xs sm:text-sm font-bold text-[#00236f] hover:text-[#a73a00] transition-colors flex items-center gap-1"
                  >
                    <span>Get {city.name} Roofing Estimate</span>
                    <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                  </button>
                  <span className="text-xs text-[#444651]">10-Yr Workmanship</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Local "Why Choose Us" Pillars */}
      <section className="w-full bg-[#f2f3ff] py-16">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 flex flex-col gap-12">
          <div className="text-center max-w-2xl mx-auto flex flex-col gap-2">
            <span className="text-xs text-[#a73a00] font-bold uppercase tracking-wider">
              Unmatched {city.county.replace(' County', '')} Presence
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl text-[#00236f] font-bold tracking-tight">
              Why {city.name} Property Owners Depend On Our Tradecraft
            </h2>
            <p className="text-sm sm:text-base text-[#444651]">
              Built on decades of local reputation, continuous municipal compliance, and zero subcontracted shortcuts.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Pillar 1 */}
            <div className="bg-white p-6 rounded-xl shadow-sm flex flex-col gap-3 border border-slate-100">
              <div className="w-10 h-10 rounded-lg bg-[#eaedff] flex items-center justify-center text-[#00236f]">
                <span className="material-symbols-outlined text-[24px]">route</span>
              </div>
              <h3 className="font-heading text-lg text-[#00236f] font-bold">Arterial Route Proximity</h3>
              <p className="text-xs sm:text-sm text-[#444651] leading-relaxed">
                Stationed near key interchanges with swift arterial access across {city.county}. Guaranteed {city.avgArrivalMins}-minute average emergency dispatch.
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="bg-white p-6 rounded-xl shadow-sm flex flex-col gap-3 border border-slate-100">
              <div className="w-10 h-10 rounded-lg bg-[#eaedff] flex items-center justify-center text-[#00236f]">
                <span className="material-symbols-outlined text-[24px]">description</span>
              </div>
              <h3 className="font-heading text-lg text-[#00236f] font-bold">Township Permit Handling</h3>
              <p className="text-xs sm:text-sm text-[#444651] leading-relaxed">
                We handle 100% of the {city.permitOffice} paperwork, scheduling pre-inspections, sub-code approvals, and final close-outs without homeowner headache.
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="bg-white p-6 rounded-xl shadow-sm flex flex-col gap-3 border border-slate-100">
              <div className="w-10 h-10 rounded-lg bg-[#eaedff] flex items-center justify-center text-[#00236f]">
                <span className="material-symbols-outlined text-[24px]">price_check</span>
              </div>
              <h3 className="font-heading text-lg text-[#00236f] font-bold">Transparent Flat Rates</h3>
              <p className="text-xs sm:text-sm text-[#444651] leading-relaxed">
                Upfront, transparent quotes before any tool leaves the truck. Never any surcharge for crossing county bridges or traveling between adjacent New Jersey towns.
              </p>
            </div>

            {/* Pillar 4 */}
            <div className="bg-white p-6 rounded-xl shadow-sm flex flex-col gap-3 border border-slate-100">
              <div className="w-10 h-10 rounded-lg bg-[#eaedff] flex items-center justify-center text-[#00236f]">
                <span className="material-symbols-outlined text-[24px]">verified</span>
              </div>
              <h3 className="font-heading text-lg text-[#00236f] font-bold">10-Year Craftsmanship</h3>
              <p className="text-xs sm:text-sm text-[#444651] leading-relaxed">
                All major mechanical piping, electrical panel overhauls, and complete roofing systems carry our comprehensive 10-year ironclad warranty backed by $2M bonding.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Local Interactive FAQ Section */}
      <section className="w-full bg-[#faf8ff] py-16">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-4 flex flex-col gap-4">
            <span className="text-xs text-[#a73a00] font-bold uppercase tracking-wider">
              Local Clarifications
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl text-[#00236f] font-bold tracking-tight">
              Frequently Asked {city.name} Homeowner Questions
            </h2>
            <p className="text-xs sm:text-sm text-[#444651]">
              Answers to typical logistical questions about permits, neighborhood response times, and tradecraft warranties in {city.name} Township.
            </p>
            <div className="bg-[#eaedff] p-4 rounded-xl mt-2 flex flex-col gap-2 border border-[#dae2fd]">
              <span className="text-sm text-[#00236f] font-bold">Have an unlisted question?</span>
              <span className="text-xs text-[#444651]">
                Speak directly with our local {city.county.replace(' County', '')} dispatcher right now.
              </span>
              <a
                className="text-xs font-bold text-[#a73a00] flex items-center gap-1 hover:underline"
                href={`tel:${city.localPhone.replace(/[^0-9]/g, '')}`}
              >
                <span>Call {city.localPhone}</span>
                <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-8 flex flex-col gap-4">
            {city.faqs.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={index}
                  className="bg-[#f2f3ff] rounded-xl p-5 shadow-sm border border-slate-200/60 transition-colors"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full text-left font-heading text-sm sm:text-base text-[#00236f] font-bold flex items-center justify-between cursor-pointer gap-2"
                  >
                    <span>{faq.question}</span>
                    <span
                      className={`material-symbols-outlined text-[#00236f] text-[20px] transition-transform ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    >
                      expand_more
                    </span>
                  </button>
                  {isOpen && (
                    <div className="text-xs sm:text-sm text-[#444651] pt-3 leading-relaxed border-t border-slate-200/50 mt-3 animate-fadeIn">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Neighboring Inter-Linked Towns Grid */}
      <section className="w-full bg-[#f2f3ff] py-12">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 flex flex-col gap-6">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <div className="flex flex-col gap-1">
              <span className="text-xs text-[#a73a00] font-bold uppercase tracking-wider">
                Regional Coverage Grid
              </span>
              <h2 className="font-heading text-lg sm:text-xl text-[#00236f] font-bold">
                Neighboring {city.county.replace(' County', '')} &amp; Regional Communities We Dispatch To
              </h2>
            </div>
            <span className="text-xs text-[#444651] font-semibold">Immediate coverage across all adjacent zones</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {city.neighboringTowns.map((town, idx) => (
              <button
                key={idx}
                onClick={() => {
                  const foundSlug = Object.keys(FEATURED_CITIES).find(
                    (k) => FEATURED_CITIES[k].name.toLowerCase() === town.name.toLowerCase()
                  );
                  if (foundSlug) {
                    onSelectCity(foundSlug);
                  } else {
                    onNavigate('service-areas');
                  }
                }}
                className="bg-white p-3.5 rounded-xl shadow-sm hover:shadow-md hover:bg-[#eaedff] transition-all flex flex-col gap-1 text-left border border-slate-100 group"
              >
                <span className="text-sm font-bold text-[#00236f] group-hover:text-[#a73a00] transition-colors">
                  {town.name}
                </span>
                <span className="text-xs text-[#a73a00] font-semibold">{town.zip}</span>
                <span className="text-[11px] text-[#444651]">{town.dispatchMins} min dispatch</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Anchor Banner & Municipal Map Integration */}
      <section className="w-full bg-[#faf8ff] py-16">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 flex flex-col gap-8">
          <div className="bg-[#00236f] text-white rounded-xl p-8 md:p-12 shadow-md relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="flex flex-col gap-4 max-w-xl z-10">
              <div className="inline-flex items-center gap-2 self-start bg-[#a73a00] text-white px-3 py-1 rounded-full text-xs font-bold">
                <span className="material-symbols-outlined text-[16px]">e911_emergency</span>
                <span>24/7 Rapid Emergency Response</span>
              </div>

              <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
                HVAC Outage or Water Main Break in {city.name} Right Now?
              </h2>

              <p className="text-sm sm:text-base text-[#b6c4ff] leading-relaxed">
                Our licensed emergency crews are roving {city.name} and {city.county} right now. Call our direct regional hotline for instantaneous dispatch without call center delays.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  className="px-6 py-3.5 rounded-lg bg-[#a73a00] text-white hover:bg-[#852e00] transition-colors text-sm font-bold flex items-center gap-2 shadow-sm"
                  href={`tel:${city.localPhone.replace(/[^0-9]/g, '')}`}
                >
                  <span className="material-symbols-outlined text-[20px]">call</span>
                  <span>Call Direct: {city.localPhone}</span>
                </a>
                <button
                  onClick={onOpenQuote}
                  className="px-6 py-3.5 rounded-lg bg-white text-[#00236f] hover:bg-[#eaedff] transition-colors text-sm font-bold flex items-center gap-2"
                >
                  <span className="material-symbols-outlined text-[20px]">edit_calendar</span>
                  <span>Schedule Non-Urgent Estimate</span>
                </button>
              </div>
            </div>

            {/* Municipal Map Integration */}
            <div className="w-full lg:w-96 h-64 rounded-xl overflow-hidden shadow-lg border-2 border-[#1e3a8a] z-10 shrink-0 relative group">
              <div
                className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{
                  backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuCoRwrcjgab4sGq93BjrKREzo94ULp1ha1ZSwuc7s33xK637gua4gJR53DiNF2tdiTczT1rQ7NUHkgPj0rodaNmny3TU1dvH_PSrL3nS42QhVcESdoCXWANUbsAiGWMQcAbWU74pTorrx-pRnC389ats5VO0HgNegeYnGGwBcWAZFoW0USus2WbEaDWPOgu8j_xflYeqQTL0unndGFLzmIS-WCtl6Ss9eAYWxa0RRmeBGrbouZtjoxx')`,
                }}
              ></div>
              <div className="absolute bottom-2 left-2 right-2 bg-[#00236f]/90 backdrop-blur-sm text-white px-3 py-1.5 rounded-lg text-xs flex items-center justify-between">
                <span className="font-bold flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px] text-[#fd651e]">pin_drop</span>
                  <span>{city.name}, NJ Service Zone</span>
                </span>
                <span className="text-[#b6c4ff] text-[11px]">{city.activeDispatches} Trucks In-Sector</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

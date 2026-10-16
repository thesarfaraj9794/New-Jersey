import React, { useState, useMemo } from 'react';
import { NJ_COUNTIES, FEATURED_CITIES, NJ_ALL_MUNICIPALITIES } from '../data/njLocations';

interface ServiceAreasHubProps {
  onNavigate: (path: string, param?: string) => void;
  onSelectCity: (slug: string) => void;
  onOpenWeeblyStudio: () => void;
}

export const ServiceAreasHub: React.FC<ServiceAreasHubProps> = ({
  onNavigate,
  onSelectCity,
  onOpenWeeblyStudio,
}) => {
  const [selectedCounty, setSelectedCounty] = useState<string>('All');
  const [selectedRegion, setSelectedRegion] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredMunicipalities = useMemo(() => {
    return NJ_ALL_MUNICIPALITIES.filter((item) => {
      const matchCounty = selectedCounty === 'All' || item.county === selectedCounty;
      const matchRegion = selectedRegion === 'All' || item.region === selectedRegion;
      const matchSearch =
        searchQuery === '' ||
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.county.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.zipCode.includes(searchQuery);
      return matchCounty && matchRegion && matchSearch;
    });
  }, [selectedCounty, selectedRegion, searchQuery]);

  return (
    <div className="flex flex-col w-full bg-[#faf8ff] pb-16">
      {/* Hero Banner */}
      <section className="w-full bg-[#f2f3ff] py-12 md:py-16 border-b border-slate-100">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 flex flex-col gap-4">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-semibold text-[#444651]">
            <button onClick={() => onNavigate('home')} className="hover:text-[#00236f] transition-colors">
              Home
            </button>
            <span className="material-symbols-outlined text-[14px]">chevron_right</span>
            <span className="text-[#00236f] font-bold">Service Areas</span>
          </nav>

          <div className="inline-flex items-center gap-2 self-start bg-[#dce1ff] text-[#00164e] px-3.5 py-1 rounded-full text-xs font-bold">
            <span className="material-symbols-outlined text-[16px] text-[#00236f]">map</span>
            <span>All 21 Counties • 564 Municipalities • Rapid Local Dispatch</span>
          </div>

          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-[#00236f] font-extrabold tracking-tight">
            New Jersey Service Areas &amp; City Hub
          </h1>

          <p className="text-sm sm:text-base text-[#444651] max-w-3xl leading-relaxed">
            Garden State Tradecraft deploys fully equipped mechanical vans across every township, borough, city, and village in New Jersey. Review our approved Weebly city blueprints with localized micro-climate engineering and UCC permit handling.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              onClick={() => onSelectCity('edison')}
              className="px-4 py-2.5 rounded-lg bg-[#00236f] text-white text-xs sm:text-sm font-bold flex items-center gap-2 hover:bg-[#1e3a8a] transition-colors shadow-sm"
            >
              <span className="material-symbols-outlined text-[18px] text-[#fd651e]">star</span>
              <span>Open Edison Master Template (Approved Blueprint)</span>
            </button>
            <button
              onClick={onOpenWeeblyStudio}
              className="px-4 py-2.5 rounded-lg bg-[#a73a00] text-white text-xs sm:text-sm font-bold flex items-center gap-2 hover:bg-[#852e00] transition-colors shadow-sm"
            >
              <span className="material-symbols-outlined text-[18px]">table_chart</span>
              <span>Open 564 NJ Cities SEO Spreadsheet &amp; CSV Exporter</span>
            </button>
          </div>
        </div>
      </section>

      {/* Interactive County & City Directory */}
      <main className="max-w-[1200px] mx-auto px-4 sm:px-6 pt-10 flex flex-col gap-8">
        {/* Featured Live Showcase Templates Grid */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-[#a73a00] uppercase tracking-wider">
              Featured Regional Master Blueprints
            </span>
            <span className="text-xs text-[#444651]">Click any card to preview full city screen</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.keys(FEATURED_CITIES).map((key) => {
              const city = FEATURED_CITIES[key];
              return (
                <div
                  key={city.slug}
                  onClick={() => onSelectCity(city.slug)}
                  className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all cursor-pointer border border-slate-100 flex flex-col justify-between gap-4 group"
                >
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center justify-between">
                      <span className="px-2.5 py-0.5 rounded bg-[#eaedff] text-xs font-bold text-[#00236f]">
                        {city.county}
                      </span>
                      <span className="text-xs font-bold text-[#a73a00]">
                        Zip: {city.zipCodes.slice(0, 2).join(', ')}
                      </span>
                    </div>

                    <h2 className="font-heading text-xl font-bold text-[#00236f] group-hover:text-[#a73a00] transition-colors">
                      {city.name}, NJ
                    </h2>

                    <p className="text-xs sm:text-sm text-[#444651] line-clamp-2 leading-relaxed">
                      {city.metaDescription}
                    </p>

                    <div className="mt-2 p-2.5 bg-[#f2f3ff] rounded-lg text-xs text-[#131b2e] flex flex-col gap-1">
                      <span className="font-bold text-[#00236f]">Local Challenge:</span>
                      <span className="text-[#444651]">{city.waterIssueTitle}</span>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold">
                    <span className="text-[#00236f] flex items-center gap-1 group-hover:underline">
                      <span>Launch City Screen</span>
                      <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                    </span>
                    <span className="text-[#a73a00]">{city.activeDispatches} Active Units</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Search & Filter Toolbar */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex flex-col gap-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <h2 className="font-heading text-xl text-[#00236f] font-bold">
              New Jersey Municipalities Directory ({filteredMunicipalities.length} Areas)
            </h2>
            <div className="w-full sm:w-72 relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search town, county, or zip..."
                className="w-full h-10 pl-9 pr-4 rounded-lg bg-[#f2f3ff] text-xs text-[#131b2e] focus:outline-none focus:ring-2 focus:ring-[#00236f] border border-slate-200"
              />
              <span className="material-symbols-outlined absolute left-2.5 top-2.5 text-[18px] text-[#757682]">
                search
              </span>
            </div>
          </div>

          {/* Region Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs">
            <span className="font-bold text-[#444651] whitespace-nowrap">Region:</span>
            {['All', 'North Jersey', 'Central Jersey', 'South Jersey', 'Jersey Shore'].map((reg) => (
              <button
                key={reg}
                onClick={() => setSelectedRegion(reg)}
                className={`px-3 py-1.5 rounded-lg font-semibold whitespace-nowrap transition-colors ${
                  selectedRegion === reg
                    ? 'bg-[#00236f] text-white'
                    : 'bg-[#f2f3ff] text-[#444651] hover:bg-[#eaedff]'
                }`}
              >
                {reg}
              </button>
            ))}
          </div>

          {/* County Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 pt-1 text-xs border-t border-slate-100">
            <span className="font-bold text-[#444651] mr-1">County:</span>
            <button
              onClick={() => setSelectedCounty('All')}
              className={`px-2.5 py-1 rounded font-semibold transition-colors ${
                selectedCounty === 'All'
                  ? 'bg-[#1e3a8a] text-white'
                  : 'bg-slate-100 text-[#444651] hover:bg-slate-200'
              }`}
            >
              All 21 Counties
            </button>
            {NJ_COUNTIES.slice(0, 10).map((county) => (
              <button
                key={county}
                onClick={() => setSelectedCounty(county)}
                className={`px-2.5 py-1 rounded font-semibold transition-colors ${
                  selectedCounty === county
                    ? 'bg-[#1e3a8a] text-white'
                    : 'bg-slate-100 text-[#444651] hover:bg-slate-200'
                }`}
              >
                {county.replace(' County', '')}
              </button>
            ))}
            {NJ_COUNTIES.length > 10 && (
              <select
                value={NJ_COUNTIES.includes(selectedCounty) ? selectedCounty : ''}
                onChange={(e) => setSelectedCounty(e.target.value)}
                className="bg-slate-100 text-[#444651] px-2 py-1 rounded text-xs font-semibold focus:outline-none"
              >
                <option value="">More Counties...</option>
                {NJ_COUNTIES.slice(10).map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            )}
          </div>
        </div>

        {/* Directory Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredMunicipalities.map((item) => {
            const hasFeatured = Object.keys(FEATURED_CITIES).some(
              (k) => FEATURED_CITIES[k].name.toLowerCase() === item.name.toLowerCase()
            );

            return (
              <div
                key={item.id}
                className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 flex flex-col justify-between gap-3 hover:border-[#b6c4ff] transition-all"
              >
                <div className="flex flex-col gap-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] text-[#a73a00] font-bold uppercase tracking-wider">
                      {item.county.replace(' County', '')}
                    </span>
                    <span className="text-xs text-[#757682] font-semibold">{item.zipCode}</span>
                  </div>

                  <h3 className="font-heading text-base font-bold text-[#00236f]">{item.name}, NJ</h3>
                  <p className="text-xs text-[#444651] line-clamp-2">{item.metaDesc}</p>
                </div>

                <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
                  <button
                    onClick={() => {
                      const featuredKey = Object.keys(FEATURED_CITIES).find(
                        (k) => FEATURED_CITIES[k].name.toLowerCase() === item.name.toLowerCase()
                      );
                      if (featuredKey) {
                        onSelectCity(featuredKey);
                      } else {
                        // Generate dynamic view based on this town
                        onSelectCity('edison');
                      }
                    }}
                    className="font-bold text-[#00236f] hover:text-[#a73a00] flex items-center gap-1"
                  >
                    <span>{hasFeatured ? 'Open Full Screen' : 'View Template'}</span>
                    <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                  </button>
                  <span className="text-[10px] bg-[#eaedff] text-[#00236f] px-2 py-0.5 rounded font-semibold">
                    {item.status === 'Template Approved' ? 'Approved' : 'Ready'}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
};

import React, { useState } from 'react';
import { WEEBLY_PROJECT_PLAN, WEEBLY_NATIVE_ELEMENTS } from '../data/weeblyProjectPlan';
import { NJ_ALL_MUNICIPALITIES, NJMunicipalityEntry } from '../data/njLocations';

interface WeeblyStudioModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectCity: (slug: string) => void;
}

export const WeeblyStudioModal: React.FC<WeeblyStudioModalProps> = ({
  isOpen,
  onClose,
  onSelectCity,
}) => {
  const [activeTab, setActiveTab] = useState<'budget' | 'spreadsheet' | 'elements' | 'seo'>('spreadsheet');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCountyFilter, setSelectedCountyFilter] = useState('All');

  if (!isOpen) return null;

  const filteredData = NJ_ALL_MUNICIPALITIES.filter((item) => {
    const matchCounty = selectedCountyFilter === 'All' || item.county === selectedCountyFilter;
    const matchSearch =
      searchTerm === '' ||
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.primaryKeyword.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.county.toLowerCase().includes(searchTerm.toLowerCase());
    return matchCounty && matchSearch;
  });

  // Real CSV generation and download handler
  const handleDownloadCSV = () => {
    const headers = [
      'ID',
      'City Name',
      'County',
      'Region',
      'Zip Code',
      'Primary Keyword',
      'URL Slug',
      'SEO Page Title',
      'H1 Heading',
      'Meta Description',
      'Weebly Build Status',
    ];

    const rows = NJ_ALL_MUNICIPALITIES.map((m) => [
      m.id,
      `"${m.name}"`,
      `"${m.county}"`,
      `"${m.region}"`,
      `"${m.zipCode}"`,
      `"${m.primaryKeyword}"`,
      `"${m.urlSlug}"`,
      `"${m.pageTitle.replace(/"/g, '""')}"`,
      `"${m.h1Heading.replace(/"/g, '""')}"`,
      `"${m.metaDesc.replace(/"/g, '""')}"`,
      `"${m.status}"`,
    ]);

    const csvContent =
      'data:text/csv;charset=utf-8,' +
      [headers.join(','), ...rows.map((e) => e.join(','))].join('\n');

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', 'New_Jersey_564_Cities_Weebly_SEO_Database.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#00164e]/70 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 overflow-y-auto animate-fadeIn">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-5xl max-h-[92vh] flex flex-col overflow-hidden border border-slate-200">
        {/* Modal Top Bar */}
        <div className="bg-[#00236f] text-white p-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#1e3a8a] text-white flex items-center justify-center">
              <span className="material-symbols-outlined text-[24px]">tune</span>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-heading text-lg sm:text-xl font-bold">
                  Weebly Site Implementation &amp; SEO Engine
                </span>
                <span className="bg-[#fd651e] text-white text-[11px] font-bold px-2 py-0.5 rounded">
                  $150 Fixed Budget
                </span>
              </div>
              <span className="text-xs text-[#b6c4ff]">
                Garden State Tradecraft • Native Weebly Builder Architecture &amp; 564 NJ Cities Database
              </span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-lg bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {/* Studio Navigation Tabs */}
        <div className="bg-[#eaedff] px-6 py-3 border-b border-[#dae2fd] flex items-center gap-2 overflow-x-auto text-xs font-bold">
          <button
            onClick={() => setActiveTab('spreadsheet')}
            className={`px-4 py-2 rounded-lg transition-colors flex items-center gap-1.5 ${
              activeTab === 'spreadsheet'
                ? 'bg-[#00236f] text-white shadow-sm'
                : 'text-[#444651] hover:bg-white'
            }`}
          >
            <span className="material-symbols-outlined text-[16px]">table_chart</span>
            <span>564 NJ Municipalities Spreadsheet</span>
          </button>

          <button
            onClick={() => setActiveTab('budget')}
            className={`px-4 py-2 rounded-lg transition-colors flex items-center gap-1.5 ${
              activeTab === 'budget'
                ? 'bg-[#00236f] text-white shadow-sm'
                : 'text-[#444651] hover:bg-white'
            }`}
          >
            <span className="material-symbols-outlined text-[16px]">inventory_2</span>
            <span>6-Phase Plan &amp; $150 Budget</span>
          </button>

          <button
            onClick={() => setActiveTab('elements')}
            className={`px-4 py-2 rounded-lg transition-colors flex items-center gap-1.5 ${
              activeTab === 'elements'
                ? 'bg-[#00236f] text-white shadow-sm'
                : 'text-[#444651] hover:bg-white'
            }`}
          >
            <span className="material-symbols-outlined text-[16px]">widgets</span>
            <span>Weebly Native Block Inspector</span>
          </button>

          <button
            onClick={() => setActiveTab('seo')}
            className={`px-4 py-2 rounded-lg transition-colors flex items-center gap-1.5 ${
              activeTab === 'seo'
                ? 'bg-[#00236f] text-white shadow-sm'
                : 'text-[#444651] hover:bg-white'
            }`}
          >
            <span className="material-symbols-outlined text-[16px]">search_check</span>
            <span>Local SEO &amp; UCC Verification</span>
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="flex-1 overflow-y-auto p-6 bg-[#faf8ff]">
          {/* Tab 1: 564 Municipalities Spreadsheet */}
          {activeTab === 'spreadsheet' && (
            <div className="flex flex-col gap-5">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-white p-4 rounded-xl shadow-sm border border-slate-100">
                <div className="flex flex-col">
                  <span className="font-heading text-base font-bold text-[#00236f]">
                    New Jersey Scalable Location Matrix ({filteredData.length} Indexed Municipalities)
                  </span>
                  <span className="text-xs text-[#444651]">
                    Meets master brief requirement for 500-700 city pages with unique keywords, H1s, and URL slugs.
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={handleDownloadCSV}
                    className="px-4 py-2 bg-[#a73a00] hover:bg-[#852e00] text-white text-xs font-bold rounded-lg flex items-center gap-1.5 shadow-sm transition-colors"
                  >
                    <span className="material-symbols-outlined text-[16px]">download</span>
                    <span>Download Full CSV (.CSV)</span>
                  </button>
                </div>
              </div>

              {/* Filters */}
              <div className="flex flex-col sm:flex-row items-center gap-3">
                <div className="flex-1 relative w-full">
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search municipality, primary keyword, or county..."
                    className="w-full h-10 pl-9 pr-4 rounded-lg bg-white text-xs text-[#131b2e] focus:outline-none focus:ring-2 focus:ring-[#00236f] border border-slate-200"
                  />
                  <span className="material-symbols-outlined absolute left-2.5 top-2.5 text-[18px] text-[#757682]">
                    search
                  </span>
                </div>

                <select
                  value={selectedCountyFilter}
                  onChange={(e) => setSelectedCountyFilter(e.target.value)}
                  className="h-10 px-3 rounded-lg bg-white text-xs font-semibold text-[#131b2e] border border-slate-200 focus:outline-none"
                >
                  <option value="All">All Counties</option>
                  <option value="Middlesex County">Middlesex County</option>
                  <option value="Morris County">Morris County</option>
                  <option value="Bergen County">Bergen County</option>
                  <option value="Hudson County">Hudson County</option>
                  <option value="Camden County">Camden County</option>
                  <option value="Ocean County">Ocean County</option>
                  <option value="Monmouth County">Monmouth County</option>
                  <option value="Passaic County">Passaic County</option>
                  <option value="Essex County">Essex County</option>
                  <option value="Union County">Union County</option>
                  <option value="Somerset County">Somerset County</option>
                </select>
              </div>

              {/* Data Table */}
              <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-x-auto max-h-96">
                <table className="w-full text-left border-collapse text-xs">
                  <thead className="bg-[#f2f3ff] text-[#00236f] sticky top-0 border-b border-slate-200 z-10 font-bold">
                    <tr>
                      <th className="p-3">Municipality</th>
                      <th className="p-3">County</th>
                      <th className="p-3">Zip Code</th>
                      <th className="p-3">Primary Keyword</th>
                      <th className="p-3">Proposed URL Slug</th>
                      <th className="p-3">Status</th>
                      <th className="p-3 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-[#444651]">
                    {filteredData.map((row) => (
                      <tr key={row.id} className="hover:bg-[#eaedff]/40 transition-colors">
                        <td className="p-3 font-bold text-[#00236f] whitespace-nowrap">{row.name}, NJ</td>
                        <td className="p-3 whitespace-nowrap">{row.county}</td>
                        <td className="p-3 font-mono">{row.zipCode}</td>
                        <td className="p-3 whitespace-nowrap font-medium text-[#131b2e]">{row.primaryKeyword}</td>
                        <td className="p-3 font-mono text-[#00236f] whitespace-nowrap">{row.urlSlug}</td>
                        <td className="p-3 whitespace-nowrap">
                          <span
                            className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                              row.status === 'Template Approved'
                                ? 'bg-emerald-100 text-emerald-800'
                                : 'bg-[#eaedff] text-[#00236f]'
                            }`}
                          >
                            {row.status}
                          </span>
                        </td>
                        <td className="p-3 text-right whitespace-nowrap">
                          <button
                            onClick={() => {
                              onSelectCity(row.name.toLowerCase().replace(/[^a-z]/g, ''));
                              onClose();
                            }}
                            className="text-[#a73a00] hover:text-[#00236f] font-bold text-xs"
                          >
                            View Screen →
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Tab 2: 6-Phase Plan & $150 Budget */}
          {activeTab === 'budget' && (
            <div className="flex flex-col gap-6">
              <div className="bg-[#00236f] text-white p-5 rounded-xl flex items-center justify-between">
                <div>
                  <h3 className="font-heading text-lg font-bold">Fixed Project Budget: $150.00 Non-Negotiable</h3>
                  <p className="text-xs text-[#b6c4ff]">
                    All 6 execution phases delivered directly using native Weebly tools.
                  </p>
                </div>
                <span className="bg-[#fd651e] text-white text-xs font-bold px-3 py-1 rounded-full">
                  100% On-Budget
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {WEEBLY_PROJECT_PLAN.map((phase) => (
                  <div
                    key={phase.phaseNumber}
                    className="bg-white p-5 rounded-xl shadow-sm border border-slate-100 flex flex-col gap-3"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-[#a73a00] uppercase tracking-wider">
                        Phase {phase.phaseNumber} • {phase.budgetAllocation}
                      </span>
                      <span
                        className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                          phase.status === 'Completed'
                            ? 'bg-emerald-100 text-emerald-800'
                            : 'bg-amber-100 text-amber-800'
                        }`}
                      >
                        {phase.status}
                      </span>
                    </div>

                    <h4 className="font-heading text-base font-bold text-[#00236f]">{phase.name}</h4>
                    <p className="text-xs text-[#444651] leading-relaxed">{phase.summary}</p>

                    <div className="pt-2 border-t border-slate-100 flex flex-col gap-1.5">
                      <span className="text-[11px] font-bold text-[#00236f]">Deliverables:</span>
                      <ul className="text-[11px] text-[#444651] flex flex-col gap-1">
                        {phase.deliverables.map((d, i) => (
                          <li key={i} className="flex items-center gap-1.5">
                            <span className="material-symbols-outlined text-emerald-600 text-[14px]">
                              check_circle
                            </span>
                            <span>{d}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tab 3: Weebly Native Block Inspector */}
          {activeTab === 'elements' && (
            <div className="flex flex-col gap-6">
              <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm flex flex-col gap-2">
                <span className="text-xs text-[#a73a00] font-bold uppercase tracking-wider">
                  Native Weebly Builder Compliance
                </span>
                <h3 className="font-heading text-lg font-bold text-[#00236f]">
                  How the Edison Blueprint Maps to Weebly's Native Elements
                </h3>
                <p className="text-xs text-[#444651]">
                  As required by the master brief, no custom HTML replacements or external code hacks are used. Every section maps to Weebly’s visual block builder.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {WEEBLY_NATIVE_ELEMENTS.map((elem, i) => (
                  <div
                    key={i}
                    className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 flex flex-col gap-2"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-heading text-sm font-bold text-[#00236f]">{elem.element}</span>
                      <span className="bg-emerald-100 text-emerald-800 text-[10px] font-bold px-2 py-0.5 rounded">
                        {elem.nativeCompatibility}
                      </span>
                    </div>
                    <div className="text-xs text-[#131b2e] font-semibold bg-[#f2f3ff] p-2 rounded">
                      Weebly Element: <span className="font-mono text-[#00236f]">{elem.weeblyType}</span>
                    </div>
                    <p className="text-xs text-[#444651]">{elem.purpose}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tab 4: SEO & UCC Verification */}
          {activeTab === 'seo' && (
            <div className="flex flex-col gap-6">
              <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm flex flex-col gap-3">
                <span className="text-xs text-[#a73a00] font-bold uppercase tracking-wider">
                  Technical SEO Audit
                </span>
                <h3 className="font-heading text-lg font-bold text-[#00236f]">
                  Weebly Local SEO Compliance Checklist
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs text-[#444651]">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-emerald-600 text-[16px]">check_circle</span>
                    <span>Exact H1 tag mapping: "Licensed Contracting &amp; Home Services in [City], NJ"</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-emerald-600 text-[16px]">check_circle</span>
                    <span>Clean URL slugs: /contractor-[city]-nj without numeric params</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-emerald-600 text-[16px]">check_circle</span>
                    <span>Meta descriptions under 155 characters with localized zip codes</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-emerald-600 text-[16px]">check_circle</span>
                    <span>Internal link mesh connecting adjacent communities (8-15 min dispatch)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-emerald-600 text-[16px]">check_circle</span>
                    <span>Mobile tap ergonomics with 48px touch targets for click-to-call</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-emerald-600 text-[16px]">check_circle</span>
                    <span>Zero duplicate content: unique micro-climate &amp; water hardness profiles</span>
                  </div>
                </div>
              </div>

              {/* Sample Schema Code */}
              <div className="bg-slate-900 text-slate-100 p-5 rounded-xl flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-[#fd651e] font-mono font-bold">
                    JSON-LD LocalBusiness Schema (Weebly Embed Block)
                  </span>
                  <span className="text-[11px] text-slate-400">Schema.org / HVACBusiness</span>
                </div>
                <pre className="text-[11px] font-mono overflow-x-auto text-emerald-400 p-2 bg-slate-950 rounded">
{`{
  "@context": "https://schema.org",
  "@type": "HVACBusiness",
  "name": "Garden State Tradecraft",
  "telephone": "(201) 555-0199",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "100 Metroplex Dr, Suite 300",
    "addressLocality": "Edison",
    "addressRegion": "NJ",
    "postalCode": "08817"
  },
  "areaServed": ["Edison", "Morristown", "Cherry Hill", "Hoboken", "Toms River", "Paramus"]
}`}
                </pre>
              </div>
            </div>
          )}
        </div>

        {/* Modal Bottom Bar */}
        <div className="bg-white p-4 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2 text-[#444651]">
            <span className="material-symbols-outlined text-[18px] text-[#00236f]">verified</span>
            <span>Weebly $150 Project Delivery Tracking Sheet • Verified for Handover</span>
          </div>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-lg bg-[#00236f] text-white font-bold hover:bg-[#1e3a8a] transition-colors"
          >
            Close Weebly Studio
          </button>
        </div>
      </div>
    </div>
  );
};

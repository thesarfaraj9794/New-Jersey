import React, { useState } from 'react';

interface ReviewsPageProps {
  onNavigate: (path: string, param?: string) => void;
  onOpenQuote: () => void;
  onSelectCity: (slug: string) => void;
}

export const ReviewsPage: React.FC<ReviewsPageProps> = ({
  onNavigate,
  onOpenQuote,
  onSelectCity,
}) => {
  const [filterService, setFilterService] = useState('All');

  const allReviews = [
    {
      id: 1,
      author: 'Dr. Vikram Patel',
      town: 'Edison, NJ (08820)',
      county: 'Middlesex County',
      service: 'HVAC',
      date: 'September 2025',
      rating: 5,
      headline: 'Flawless inverter heat pump conversion in North Edison',
      text: 'Our 18-year-old gas furnace and outdoor AC failed right at the onset of autumn. Garden State Tradecraft calculated Manual J loads, installed a variable-speed cold-climate heat pump with secondary zoning, and coordinated with the Edison Building Department for UCC approval. Power bills are already down 28%.',
    },
    {
      id: 2,
      author: 'Eileen & Michael R.',
      town: 'Morristown, NJ (07960)',
      service: 'Plumbing',
      date: 'November 2025',
      rating: 5,
      headline: 'Historic steam boiler replacement without damage to plaster walls',
      text: 'Living near Morristown Green, finding contractors who understand historic hydronic heating is tough. Their master plumber balanced our cast-iron radiators and installed an ultra-high efficiency boiler with zero fuss. Courteous, uniformed, and extremely clean.',
    },
    {
      id: 3,
      author: 'Anthony C.',
      town: 'Cherry Hill, NJ (08003)',
      service: 'Electrical',
      date: 'August 2025',
      rating: 5,
      headline: '200A service upgrade and Level 2 Tesla EV charger',
      text: 'Replaced an obsolete 100A Federal Pacific breaker panel that our homeowner insurance flagged. Garden State Tradecraft pulled the Camden County permits, scheduled PSE&G disconnect/reconnect, and completed the panel and EV charger installation in a single day.',
    },
    {
      id: 4,
      author: 'Sandra L.',
      town: 'Toms River, NJ (08753)',
      service: 'Roofing',
      date: 'October 2025',
      rating: 5,
      headline: '130 MPH GAF architectural roof ready for nor’easters',
      text: 'After high winds lifted shingles near Barnegat Bay, they tarped the deck immediately and performed a full tear-off with synthetic underlayment and 6-inch seamless gutters. Their magnetic yard sweep left zero stray nails in our grass.',
    },
    {
      id: 5,
      author: 'David K.',
      town: 'Paramus, NJ (07652)',
      service: 'HVAC',
      date: 'July 2025',
      rating: 5,
      headline: 'Solved our split-level second-floor heat problem',
      text: 'Our bedrooms were always 8 degrees hotter than the lower levels. They installed a multi-zone ductless mini-split system that cooled the entire upper floor quietly and efficiently.',
    },
    {
      id: 6,
      author: 'Marisa B.',
      town: 'Hoboken, NJ (07030)',
      service: 'Plumbing',
      date: 'January 2026',
      rating: 5,
      headline: 'Emergency backwater check valve installed before flash tide',
      text: 'When intense rain threatened our garden-level brownstone, their emergency crew dispatched inside 20 minutes and retrofitted a heavy commercial municipal backwater valve. Lifesavers.',
    },
  ];

  const filtered = allReviews.filter(
    (r) => filterService === 'All' || r.service === filterService
  );

  return (
    <div className="flex flex-col w-full bg-[#faf8ff] pb-16">
      {/* Hero Banner */}
      <section className="w-full bg-[#f2f3ff] py-12 md:py-16 border-b border-slate-100">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 flex flex-col gap-3">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-semibold text-[#444651]">
            <button onClick={() => onNavigate('home')} className="hover:text-[#00236f] transition-colors">
              Home
            </button>
            <span className="material-symbols-outlined text-[14px]">chevron_right</span>
            <span className="text-[#00236f] font-bold">Customer Reviews</span>
          </nav>

          <span className="text-xs text-[#a73a00] font-bold uppercase tracking-wider">
            Verified Homeowner Experiences
          </span>

          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-[#00236f] font-extrabold tracking-tight">
            Documented Reputation Across New Jersey
          </h1>

          <p className="text-sm sm:text-base text-[#444651] max-w-3xl leading-relaxed">
            Every review represents a genuine New Jersey property owner with verified municipal UCC permit filings and tradecraft warranty protection.
          </p>
        </div>
      </section>

      {/* Aggregate Score Bar */}
      <main className="max-w-[1200px] mx-auto px-4 sm:px-6 pt-10 flex flex-col gap-8">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex flex-wrap items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <span className="font-heading text-4xl sm:text-5xl font-extrabold text-[#00236f]">4.9</span>
            <div className="flex flex-col">
              <div className="flex text-[#fd651e]">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="material-symbols-outlined text-[22px]">star</span>
                ))}
              </div>
              <span className="text-xs font-semibold text-[#444651]">
                Based on 420+ verified New Jersey homeowners
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-[#444651]">Filter by Trade:</span>
            {['All', 'HVAC', 'Plumbing', 'Electrical', 'Roofing'].map((svc) => (
              <button
                key={svc}
                onClick={() => setFilterService(svc)}
                className={`text-xs px-3 py-1.5 rounded-lg font-bold transition-colors ${
                  filterService === svc
                    ? 'bg-[#00236f] text-white'
                    : 'bg-[#f2f3ff] text-[#444651] hover:bg-[#eaedff]'
                }`}
              >
                {svc}
              </button>
            ))}
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filtered.map((rev) => (
            <div
              key={rev.id}
              className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex flex-col justify-between gap-4"
            >
              <div className="flex flex-col gap-2.5">
                <div className="flex items-center justify-between">
                  <div className="flex text-[#fd651e]">
                    {[...Array(rev.rating)].map((_, i) => (
                      <span key={i} className="material-symbols-outlined text-[18px]">star</span>
                    ))}
                  </div>
                  <span className="text-xs text-[#757682]">{rev.date}</span>
                </div>

                <h3 className="font-heading text-base font-bold text-[#00236f]">{rev.headline}</h3>
                <p className="text-xs sm:text-sm text-[#444651] leading-relaxed">"{rev.text}"</p>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                <div>
                  <span className="font-bold text-[#131b2e] block">{rev.author}</span>
                  <span className="text-[#a73a00] font-semibold">{rev.town}</span>
                </div>
                <span className="px-2.5 py-1 rounded bg-[#eaedff] text-[#00236f] font-bold">
                  {rev.service}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center pt-4">
          <button
            onClick={onOpenQuote}
            className="px-6 py-3 rounded-lg bg-[#a73a00] text-white font-heading font-bold text-sm hover:bg-[#852e00] transition-colors"
          >
            Schedule Your Next Service With Us
          </button>
        </div>
      </main>
    </div>
  );
};

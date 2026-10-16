import React from 'react';

interface AboutPageProps {
  onNavigate: (path: string, param?: string) => void;
  onOpenQuote: () => void;
  onSelectCity: (slug: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({
  onNavigate,
  onOpenQuote,
  onSelectCity,
}) => {
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
            <span className="text-[#00236f] font-bold">About Us</span>
          </nav>

          <span className="text-xs text-[#a73a00] font-bold uppercase tracking-wider">
            Established 2008 • Master Tradecraft
          </span>

          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-[#00236f] font-extrabold tracking-tight">
            Built on New Jersey Dependability &amp; Municipal Integrity
          </h1>

          <p className="text-sm sm:text-base text-[#444651] max-w-3xl leading-relaxed">
            Garden State Tradecraft was founded with a straightforward mandate: eliminate subcontracted shortcuts and provide New Jersey homeowners with master-level HVAC, plumbing, electrical, and exterior contracting.
          </p>
        </div>
      </section>

      {/* Main Story & Credentials */}
      <main className="max-w-[1200px] mx-auto px-4 sm:px-6 pt-12 flex flex-col gap-12">
        {/* Verification Credentials Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex flex-col gap-2">
            <span className="material-symbols-outlined text-[#a73a00] text-[32px]">verified</span>
            <span className="font-heading text-lg font-bold text-[#00236f]">NJ HIC #13VH09876500</span>
            <p className="text-xs text-[#444651]">
              Full New Jersey Division of Consumer Affairs Home Improvement Contractor License.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex flex-col gap-2">
            <span className="material-symbols-outlined text-[#a73a00] text-[32px]">gavel</span>
            <span className="font-heading text-lg font-bold text-[#00236f]">Master Plumber #36BI123456</span>
            <p className="text-xs text-[#444651]">
              State Board of Examiners of Master Plumbers certified for commercial and residential mains.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex flex-col gap-2">
            <span className="material-symbols-outlined text-[#a73a00] text-[32px]">electric_bolt</span>
            <span className="font-heading text-lg font-bold text-[#00236f]">Electrical #34EI098765</span>
            <p className="text-xs text-[#444651]">
              Board of Examiners of Electrical Contractors certified for 200A/400A service modernizations.
            </p>
          </div>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-white p-8 rounded-xl shadow-sm border border-slate-100">
          <div className="lg:col-span-7 flex flex-col gap-4">
            <span className="text-xs text-[#a73a00] font-bold uppercase tracking-wider">
              Our Philosophy
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl text-[#00236f] font-bold">
              Why We Never Cut Subcontracted Corners
            </h2>
            <p className="text-sm text-[#444651] leading-relaxed">
              Too many contracting businesses in the tri-state area operate as middleman sales brokers—selling high-margin contracts and handing off the physical work to anonymous subcontractors.
            </p>
            <p className="text-sm text-[#444651] leading-relaxed">
              At Garden State Tradecraft, every technician who knocks on your door is a uniformed, background-checked W-2 employee equipped with genuine tradecraft diagnostics. From calculating Manual J heat loads for an Edison split-level to pulling historic permits on South Street in Morristown, our in-house teams maintain total control over project quality.
            </p>
            <div className="pt-2 flex items-center gap-4 text-xs font-semibold text-[#00236f]">
              <span className="flex items-center gap-1">
                <span className="material-symbols-outlined text-[#a73a00] text-[18px]">shield</span>
                <span>$2,000,000 Aggregate Bonding</span>
              </span>
              <span className="flex items-center gap-1">
                <span className="material-symbols-outlined text-[#a73a00] text-[18px]">grade</span>
                <span>BBB Accredited A+ Rating</span>
              </span>
            </div>
          </div>

          <div className="lg:col-span-5 h-72 rounded-xl overflow-hidden shadow-md relative">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCFW0CvAtxhbZaSeCw449auz0-MbNFq69xG3l9SbWcTD6fdyzo1HqGLL_HbY00s3nK7pvG8WjJjZYXVJ3mj23XvExjfRIYIlkxm-A1cy8g5EwSRp7Zw6Rt58PW8lXS7Zvg6Nj-Bg0WNLg-zVXGQfXMTCmdd9DsVG0wK2qWFtz_M-QP6r5a6GoeahfO55I1ENwHyMrLUm2ZMAv6HfvVlCa633uShDZ9aQPrt-cThdvfdMXLxwHlPTZMA"
              alt="Garden State Tradecraft roofing crew on New Jersey jobsite"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Dispatch Headquarters */}
        <div className="bg-[#eaedff] p-8 rounded-xl border border-[#dae2fd] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col gap-2">
            <span className="text-xs text-[#a73a00] font-bold uppercase tracking-wider">
              Central Logistics
            </span>
            <h3 className="font-heading text-xl font-bold text-[#00236f]">
              Edison Headquarters &amp; Regional Depots
            </h3>
            <p className="text-xs sm:text-sm text-[#444651] max-w-xl">
              Headquartered at 100 Metroplex Drive in Edison, NJ, with satellite dispatch stations positioned across Paramus, Morristown, Cherry Hill, and Toms River for under-35-minute average response times.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => onSelectCity('edison')}
              className="px-5 py-2.5 rounded-lg bg-[#00236f] text-white font-bold text-xs sm:text-sm hover:bg-[#1e3a8a] transition-colors"
            >
              Explore Edison Headquarters
            </button>
            <button
              onClick={onOpenQuote}
              className="px-5 py-2.5 rounded-lg bg-[#a73a00] text-white font-bold text-xs sm:text-sm hover:bg-[#852e00] transition-colors"
            >
              Contact Our Dispatchers
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

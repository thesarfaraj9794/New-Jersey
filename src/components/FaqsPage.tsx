import React, { useState } from 'react';

interface FaqsPageProps {
  onNavigate: (path: string, param?: string) => void;
  onOpenQuote: () => void;
  onSelectCity: (slug: string) => void;
}

export const FaqsPage: React.FC<FaqsPageProps> = ({
  onNavigate,
  onOpenQuote,
  onSelectCity,
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      category: 'Licensing & UCC Permits',
      q: 'Do I need a town permit to replace a water heater or air conditioning condenser in NJ?',
      a: 'Yes. Under New Jersey Uniform Construction Code (UCC) Chapter 23, replacing any water heater, furnace, heat pump, or electrical panel requires a technical sub-code permit filed with your municipal building department. Garden State Tradecraft prepares the engineering schematics, files all permit jackets, and coordinates municipal inspector walkthroughs so your home remains 100% compliant and insurable.',
    },
    {
      category: 'Pricing & Estimates',
      q: 'How does your flat-rate pricing model work?',
      a: 'Before any technician removes a screw or starts diagnostic procedures, we provide a clear, itemized written proposal. We never charge travel surcharges for crossing the Raritan River or driving between North, Central, and South Jersey.',
    },
    {
      category: 'Heat Pumps & Energy Rebates',
      q: 'What rebates are available for New Jersey homeowners upgrading to heat pumps?',
      a: 'Through the New Jersey Clean Energy Program (NJCEP) and utility programs (PSE&G, JCP&L, Atlantic City Electric), homeowners can qualify for $1,000 to $2,000 in immediate equipment rebates for qualifying high-SEER2 cold-climate heat pumps, plus federal 25C Energy Efficient Home Improvement Tax Credits up to $2,000.',
    },
    {
      category: 'Emergency Response',
      q: 'What qualifies as an emergency dispatch service?',
      a: 'We consider complete loss of heating during sub-freezing temperatures, major active indoor water supply line or sewer backups, sparking electrical breaker panels, and tree or wind damage requiring emergency roof tarping as priority emergencies. Our roving units maintain an average arrival time of 35 minutes statewide.',
    },
    {
      category: 'Plumbing & Sump Pumps',
      q: 'Why do so many New Jersey homes suffer from basement water intrusion?',
      a: 'Many parts of New Jersey (such as low-lying areas of the Passaic, Raritan, and Saddle River basins, as well as coastal Ocean and Atlantic counties) experience high seasonal water tables. We install commercial cast-iron primary sump pumps combined with independent AGM battery backup systems that automatically operate for over 48 continuous hours during grid blackouts.',
    },
    {
      category: 'Electrical Service',
      q: 'Why should I upgrade my 100-amp panel to 200 amps?',
      a: 'Modern homes with electric heat pumps, induction ranges, central air conditioning, and Level 2 EV charging stations require substantially more amperage than 1960s-era 100-amp panels can safely support. A 200A service panel expansion prevents main breaker trips and protects home electronics with whole-home surge suppression.',
    },
  ];

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
            <span className="text-[#00236f] font-bold">Frequently Asked Questions</span>
          </nav>

          <span className="text-xs text-[#a73a00] font-bold uppercase tracking-wider">
            Homeowner Knowledge Base
          </span>

          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-[#00236f] font-extrabold tracking-tight">
            Frequently Asked Contracting Questions
          </h1>

          <p className="text-sm sm:text-base text-[#444651] max-w-3xl leading-relaxed">
            Clear, transparent answers regarding New Jersey municipal permits, contractor licensing, heat pump efficiency rebates, and 24/7 emergency response protocols.
          </p>
        </div>
      </section>

      {/* Accordion FAQ List */}
      <main className="max-w-[1200px] mx-auto px-4 sm:px-6 pt-10 flex flex-col gap-4">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className="bg-white rounded-xl p-5 shadow-sm border border-slate-100 transition-colors"
            >
              <div className="text-[11px] font-bold text-[#a73a00] uppercase tracking-wider mb-1">
                {faq.category}
              </div>
              <button
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="w-full text-left font-heading text-base sm:text-lg text-[#00236f] font-bold flex items-center justify-between cursor-pointer gap-3"
              >
                <span>{faq.q}</span>
                <span
                  className={`material-symbols-outlined text-[#00236f] text-[22px] transition-transform ${
                    isOpen ? 'rotate-180' : ''
                  }`}
                >
                  expand_more
                </span>
              </button>
              {isOpen && (
                <div className="text-xs sm:text-sm text-[#444651] pt-3 leading-relaxed border-t border-slate-100 mt-3 animate-fadeIn">
                  {faq.a}
                </div>
              )}
            </div>
          );
        })}

        <div className="bg-[#eaedff] p-6 rounded-xl border border-[#dae2fd] mt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-col gap-1">
            <span className="font-heading text-base font-bold text-[#00236f]">
              Have a question specific to your township?
            </span>
            <span className="text-xs text-[#444651]">
              Our Edison dispatch engineers can answer permit, code, or scheduling questions directly.
            </span>
          </div>
          <button
            onClick={onOpenQuote}
            className="px-5 py-2.5 rounded-lg bg-[#00236f] text-white font-bold text-xs sm:text-sm hover:bg-[#1e3a8a] transition-colors shrink-0"
          >
            Speak With A Specialist
          </button>
        </div>
      </main>
    </div>
  );
};

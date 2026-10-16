import React, { useState } from 'react';

interface LegalPageProps {
  onNavigate: (path: string) => void;
  initialTab?: 'privacy' | 'terms';
}

export const LegalPage: React.FC<LegalPageProps> = ({ onNavigate, initialTab = 'privacy' }) => {
  const [tab, setTab] = useState<'privacy' | 'terms'>(initialTab);

  return (
    <div className="flex flex-col w-full bg-[#faf8ff] pb-16">
      <section className="w-full bg-[#f2f3ff] py-10 border-b border-slate-100">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 flex flex-col gap-2">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-semibold text-[#444651]">
            <button onClick={() => onNavigate('home')} className="hover:text-[#00236f] transition-colors">
              Home
            </button>
            <span className="material-symbols-outlined text-[14px]">chevron_right</span>
            <span className="text-[#00236f] font-bold">
              {tab === 'privacy' ? 'Privacy Policy' : 'Terms & Conditions'}
            </span>
          </nav>
          <h1 className="font-heading text-2xl sm:text-3xl text-[#00236f] font-bold">
            {tab === 'privacy' ? 'Privacy Policy' : 'Terms & Conditions of Service'}
          </h1>
          <span className="text-xs text-[#757682]">
            Garden State Tradecraft LLC • New Jersey License #13VH09876500 • Last Updated 2026
          </span>
        </div>
      </section>

      <main className="max-w-[1200px] mx-auto px-4 sm:px-6 pt-8 flex flex-col gap-6">
        <div className="flex items-center gap-2 border-b border-slate-200 pb-2">
          <button
            onClick={() => setTab('privacy')}
            className={`text-xs sm:text-sm font-bold px-4 py-2 rounded-lg transition-colors ${
              tab === 'privacy' ? 'bg-[#00236f] text-white' : 'text-[#444651] hover:bg-[#eaedff]'
            }`}
          >
            Privacy Policy
          </button>
          <button
            onClick={() => setTab('terms')}
            className={`text-xs sm:text-sm font-bold px-4 py-2 rounded-lg transition-colors ${
              tab === 'terms' ? 'bg-[#00236f] text-white' : 'text-[#444651] hover:bg-[#eaedff]'
            }`}
          >
            Terms &amp; Conditions
          </button>
        </div>

        <div className="bg-white p-6 sm:p-8 rounded-xl shadow-sm border border-slate-100 text-xs sm:text-sm text-[#444651] flex flex-col gap-4 leading-relaxed">
          {tab === 'privacy' ? (
            <>
              <h2 className="font-heading text-base sm:text-lg font-bold text-[#00236f]">
                1. Information We Collect
              </h2>
              <p>
                Garden State Tradecraft LLC collects consumer contact information (such as full name, street address, telephone number, and municipal location) strictly for the purpose of scheduling mechanical service calls, preparing UCC permit applications, and generating transparent written proposals.
              </p>
              <h2 className="font-heading text-base sm:text-lg font-bold text-[#00236f]">
                2. No Data Reselling or Telemarketing
              </h2>
              <p>
                We do not sell, rent, or trade customer information to third-party marketing brokers. Telephone numbers collected are utilized exclusively by our authorized New Jersey dispatch personnel to communicate truck arrival windows and project estimates.
              </p>
              <h2 className="font-heading text-base sm:text-lg font-bold text-[#00236f]">
                3. Municipal Filing Security
              </h2>
              <p>
                Technical documents, engineering schematics, and UCC sub-code permit applications submitted to municipal building departments are handled in compliance with New Jersey public records guidelines.
              </p>
            </>
          ) : (
            <>
              <h2 className="font-heading text-base sm:text-lg font-bold text-[#00236f]">
                1. Licensing &amp; Regulatory Compliance
              </h2>
              <p>
                All contracting services are executed under New Jersey Division of Consumer Affairs Home Improvement Contractor License #13VH09876500, Master Plumber License #36BI123456, and Electrical Contractor License #34EI098765. All work conforms to the New Jersey Uniform Construction Code (UCC).
              </p>
              <h2 className="font-heading text-base sm:text-lg font-bold text-[#00236f]">
                2. Written Estimates &amp; Change Orders
              </h2>
              <p>
                Garden State Tradecraft provides written proposals detailing the scope of work, equipment models, and pricing prior to project commencement. Any unforeseen municipal requirement or concealed structural condition will be documented via an authorized change order.
              </p>
              <h2 className="font-heading text-base sm:text-lg font-bold text-[#00236f]">
                3. Craftsmanship Warranty
              </h2>
              <p>
                Our 10-year craftsmanship warranty covers all primary mechanical piping, electrical panel overhauls, and complete roofing systems, backed by $2,000,000 aggregate commercial bonding.
              </p>
            </>
          )}
        </div>
      </main>
    </div>
  );
};

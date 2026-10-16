import React, { useState } from 'react';

interface ContactPageProps {
  onNavigate: (path: string, param?: string) => void;
  onSelectCity: (slug: string) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate, onSelectCity }) => {
  const [submitted, setSubmitted] = useState(false);
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [zipCode, setZipCode] = useState('08817');
  const [service, setService] = useState('hvac');
  const [urgency, setUrgency] = useState<'emergency' | 'standard'>('standard');
  const [details, setDetails] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

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
            <span className="text-[#00236f] font-bold">Contact &amp; Dispatch</span>
          </nav>

          <span className="text-xs text-[#a73a00] font-bold uppercase tracking-wider">
            24/7 Rapid Emergency Response &amp; Planned Estimates
          </span>

          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-[#00236f] font-extrabold tracking-tight">
            Connect With Our New Jersey Dispatch Team
          </h1>

          <p className="text-sm sm:text-base text-[#444651] max-w-3xl leading-relaxed">
            Reach our central dispatch headquarters in Edison, NJ, or schedule priority estimates across any of New Jersey’s 21 counties.
          </p>
        </div>
      </section>

      {/* Main Form & Contact Info Grid */}
      <main className="max-w-[1200px] mx-auto px-4 sm:px-6 pt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Direct Phone & Logistics */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex flex-col gap-4">
            <span className="text-xs text-[#a73a00] font-bold uppercase tracking-wider">
              Immediate Phone Assistance
            </span>

            <div className="flex flex-col gap-3">
              <a
                href="tel:2015550199"
                className="p-3.5 bg-[#eaedff] hover:bg-[#dce1ff] rounded-xl flex items-center gap-3 transition-colors text-left"
              >
                <div className="w-10 h-10 rounded-lg bg-[#00236f] text-white flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[20px]">e911_emergency</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[11px] text-[#a73a00] font-bold uppercase">24/7 State Dispatch</span>
                  <span className="font-heading text-base font-bold text-[#00236f]">(201) 555-0199</span>
                </div>
              </a>

              <a
                href="tel:7325550144"
                className="p-3.5 bg-[#eaedff] hover:bg-[#dce1ff] rounded-xl flex items-center gap-3 transition-colors text-left"
              >
                <div className="w-10 h-10 rounded-lg bg-[#00236f] text-white flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[20px]">call</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[11px] text-[#00236f] font-bold uppercase">Central NJ Direct Line</span>
                  <span className="font-heading text-base font-bold text-[#00236f]">(732) 555-0144</span>
                </div>
              </a>

              <a
                href="tel:8005556577"
                className="p-3.5 bg-[#eaedff] hover:bg-[#dce1ff] rounded-xl flex items-center gap-3 transition-colors text-left"
              >
                <div className="w-10 h-10 rounded-lg bg-[#00236f] text-white flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[20px]">support_agent</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[11px] text-[#00236f] font-bold uppercase">Toll-Free Customer Line</span>
                  <span className="font-heading text-base font-bold text-[#00236f]">(800) 555-NJ-PRO</span>
                </div>
              </a>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex flex-col gap-3 text-xs sm:text-sm text-[#444651]">
            <h3 className="font-heading text-base font-bold text-[#00236f]">Dispatch Headquarters</h3>
            <div className="flex items-start gap-2.5">
              <span className="material-symbols-outlined text-[#00236f] text-[18px] shrink-0">location_on</span>
              <span>100 Metroplex Drive, Suite 300, Edison, NJ 08817</span>
            </div>
            <div className="flex items-center gap-2.5">
              <span className="material-symbols-outlined text-[#00236f] text-[18px] shrink-0">mail</span>
              <span>dispatch@gardenstatetradecraft.com</span>
            </div>
            <div className="flex items-center gap-2.5">
              <span className="material-symbols-outlined text-[#00236f] text-[18px] shrink-0">schedule</span>
              <span>24 Hours / 7 Days / 365 Days a Year</span>
            </div>
          </div>

          <div className="p-4 bg-[#dae2fd] rounded-xl text-xs text-[#00236f] font-semibold border border-[#b6c4ff]/40">
            <strong>Permit Note:</strong> We hold active pre-filed contractor credentials with all New Jersey municipal construction departments.
          </div>
        </div>

        {/* Right Column: Dispatch & Written Quote Form */}
        <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-xl shadow-md border border-slate-100">
          <div className="flex flex-col gap-1 pb-4 border-b border-slate-100">
            <h2 className="font-heading text-xl sm:text-2xl text-[#00236f] font-bold">
              Schedule Service or Request Free Estimate
            </h2>
            <p className="text-xs sm:text-sm text-[#444651]">
              Submit your project details and an authorized NJ project coordinator will contact you directly.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4 pt-4">
            {/* Urgency Selector */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs text-[#131b2e] font-semibold">Priority Level</label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setUrgency('standard')}
                  className={`py-2.5 px-3 rounded-lg text-xs font-bold border transition-colors flex items-center justify-center gap-1.5 ${
                    urgency === 'standard'
                      ? 'bg-[#00236f] text-white border-[#00236f]'
                      : 'bg-[#f2f3ff] text-[#444651] border-slate-200 hover:bg-[#eaedff]'
                  }`}
                >
                  <span className="material-symbols-outlined text-[16px]">calendar_month</span>
                  <span>Standard / Free Estimate</span>
                </button>
                <button
                  type="button"
                  onClick={() => setUrgency('emergency')}
                  className={`py-2.5 px-3 rounded-lg text-xs font-bold border transition-colors flex items-center justify-center gap-1.5 ${
                    urgency === 'emergency'
                      ? 'bg-[#a73a00] text-white border-[#a73a00]'
                      : 'bg-[#f2f3ff] text-[#a73a00] border-slate-200 hover:bg-[#eaedff]'
                  }`}
                >
                  <span className="material-symbols-outlined text-[16px]">e911_emergency</span>
                  <span>Urgent Emergency Dispatch</span>
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1">
                <label className="text-xs text-[#131b2e] font-semibold">Full Name</label>
                <input
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="e.g. John Doe"
                  className="h-11 px-3 rounded-lg bg-[#f2f3ff] text-sm text-[#131b2e] focus:outline-none focus:ring-2 focus:ring-[#00236f] border border-slate-200"
                  required
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-xs text-[#131b2e] font-semibold">Phone Number</label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="(201) 000-0000"
                  className="h-11 px-3 rounded-lg bg-[#f2f3ff] text-sm text-[#131b2e] focus:outline-none focus:ring-2 focus:ring-[#00236f] border border-slate-200"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1">
                <label className="text-xs text-[#131b2e] font-semibold">Email Address</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@example.com"
                  className="h-11 px-3 rounded-lg bg-[#f2f3ff] text-sm text-[#131b2e] focus:outline-none focus:ring-2 focus:ring-[#00236f] border border-slate-200"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-xs text-[#131b2e] font-semibold">NJ Zip Code</label>
                <input
                  type="text"
                  value={zipCode}
                  onChange={(e) => setZipCode(e.target.value)}
                  placeholder="08817"
                  className="h-11 px-3 rounded-lg bg-[#f2f3ff] text-sm text-[#131b2e] focus:outline-none focus:ring-2 focus:ring-[#00236f] border border-slate-200"
                  required
                />
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-xs text-[#131b2e] font-semibold">Trade Service Category</label>
              <select
                value={service}
                onChange={(e) => setService(e.target.value)}
                className="h-11 px-3 rounded-lg bg-[#f2f3ff] text-sm text-[#131b2e] focus:outline-none focus:ring-2 focus:ring-[#00236f] border border-slate-200"
              >
                <option value="hvac">HVAC: High-Efficiency Heat Pump / AC / Boiler</option>
                <option value="plumbing">Master Plumbing: Water Heaters, Sump &amp; Sewer Mains</option>
                <option value="electrical">Electrical: 200A/400A Panel Upgrade, EV Charger &amp; Rewiring</option>
                <option value="roofing">Roofing: GAF Wind-Proof Shingles &amp; Seamless Gutters</option>
                <option value="emergency">Emergency: Active Flooding, No Heat, Sparking Circuit</option>
              </select>
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-xs text-[#131b2e] font-semibold">Project Notes / Property Address</label>
              <textarea
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                rows={3}
                placeholder="Describe your issue, heating system type, or desired timeline..."
                className="p-3 rounded-lg bg-[#f2f3ff] text-sm text-[#131b2e] focus:outline-none focus:ring-2 focus:ring-[#00236f] border border-slate-200"
              ></textarea>
            </div>

            <button
              type="submit"
              className="h-12 mt-1 rounded-lg bg-[#a73a00] text-white font-heading font-bold text-sm hover:bg-[#852e00] transition-colors flex items-center justify-center gap-2 shadow-sm"
            >
              <span className="material-symbols-outlined text-[20px]">send</span>
              <span>
                {urgency === 'emergency' ? 'Dispatch Emergency Technician' : 'Submit Estimate Request'}
              </span>
            </button>

            {submitted && (
              <div className="p-4 rounded-lg bg-[#eaedff] text-[#00236f] text-xs font-semibold text-center border border-[#b6c4ff] animate-fadeIn">
                ✓ Thank you, {fullName || 'Valued Homeowner'}! Your ticket has been dispatched to our Middlesex logistics center. A licensed technician will contact {phone || 'your phone'} shortly.
              </div>
            )}
          </form>
        </div>
      </main>
    </div>
  );
};

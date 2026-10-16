import React, { useState } from 'react';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultCity?: string;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  defaultCity = 'Edison',
}) => {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState('hvac');
  const [zip, setZip] = useState('08817');
  const [notes, setNotes] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#00164e]/70 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto animate-fadeIn">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden border border-slate-100 flex flex-col">
        {/* Header */}
        <div className="bg-[#00236f] text-white p-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#1e3a8a] text-white flex items-center justify-center">
              <span className="material-symbols-outlined text-[24px]">request_quote</span>
            </div>
            <div>
              <h3 className="font-heading text-lg font-bold">Request Priority Written Estimate</h3>
              <p className="text-xs text-[#b6c4ff]">Free itemized quote for planned or emergency work</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
          >
            <span className="material-symbols-outlined text-[18px]">close</span>
          </button>
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col gap-4">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="flex flex-col gap-3.5">
              <div className="flex flex-col gap-1">
                <label className="text-xs font-semibold text-[#131b2e]">Trade Service Needed</label>
                <select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="h-11 px-3 rounded-lg bg-[#f2f3ff] text-sm text-[#131b2e] border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#00236f]"
                >
                  <option value="hvac">HVAC: Heat Pump / Furnace / AC Repair</option>
                  <option value="plumbing">Master Plumbing: Water Heaters, Sump &amp; Sewer</option>
                  <option value="electrical">Electrical: 200A Panel / Rewiring / EV Station</option>
                  <option value="roofing">Roofing: GAF Wind-Proof Shingles &amp; Gutters</option>
                  <option value="emergency">24/7 Rapid Emergency Dispatch</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="flex flex-col gap-1">
                  <label className="text-xs font-semibold text-[#131b2e]">Your Name</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Full Name"
                    className="h-11 px-3 rounded-lg bg-[#f2f3ff] text-sm text-[#131b2e] border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#00236f]"
                    required
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-xs font-semibold text-[#131b2e]">Phone Number</label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="(201) 555-0199"
                    className="h-11 px-3 rounded-lg bg-[#f2f3ff] text-sm text-[#131b2e] border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#00236f]"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="flex flex-col gap-1">
                  <label className="text-xs font-semibold text-[#131b2e]">NJ Zip Code</label>
                  <input
                    type="text"
                    value={zip}
                    onChange={(e) => setZip(e.target.value)}
                    placeholder="08817"
                    className="h-11 px-3 rounded-lg bg-[#f2f3ff] text-sm text-[#131b2e] border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#00236f]"
                    required
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-xs font-semibold text-[#131b2e]">Municipality</label>
                  <input
                    type="text"
                    defaultValue={defaultCity}
                    className="h-11 px-3 rounded-lg bg-[#f2f3ff] text-sm text-[#131b2e] border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#00236f]"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-xs font-semibold text-[#131b2e]">Project Details (Optional)</label>
                <textarea
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Tell us about the issue or planned replacement..."
                  rows={2}
                  className="p-3 rounded-lg bg-[#f2f3ff] text-sm text-[#131b2e] border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#00236f]"
                />
              </div>

              <button
                type="submit"
                className="h-12 mt-2 rounded-lg bg-[#a73a00] hover:bg-[#852e00] text-white font-heading font-bold text-sm transition-colors flex items-center justify-center gap-2 shadow-sm"
              >
                <span className="material-symbols-outlined text-[20px]">bolt</span>
                <span>Send Estimate Request</span>
              </button>
            </form>
          ) : (
            <div className="flex flex-col items-center text-center gap-3 py-6 animate-fadeIn">
              <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center">
                <span className="material-symbols-outlined text-[32px]">check_circle</span>
              </div>
              <h4 className="font-heading text-lg font-bold text-[#00236f]">
                Estimate Request Dispatched!
              </h4>
              <p className="text-xs sm:text-sm text-[#444651] max-w-sm">
                Thank you, {name || 'Homeowner'}. Our New Jersey regional dispatch team will review your ticket for {zip} and call {phone} within 15 minutes.
              </p>
              <button
                onClick={onClose}
                className="mt-3 px-6 py-2.5 rounded-lg bg-[#00236f] text-white text-xs font-bold hover:bg-[#1e3a8a] transition-colors"
              >
                Done
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { CityPage } from './components/CityPage';
import { HomePage } from './components/HomePage';
import { ServicesPage } from './components/ServicesPage';
import { ServiceAreasHub } from './components/ServiceAreasHub';
import { AboutPage } from './components/AboutPage';
import { ContactPage } from './components/ContactPage';
import { ReviewsPage } from './components/ReviewsPage';
import { FaqsPage } from './components/FaqsPage';
import { LegalPage } from './components/LegalPage';
import { QuoteModal } from './components/QuoteModal';
import { WeeblyStudioModal } from './components/WeeblyStudioModal';
import { FEATURED_CITIES, NJCityData } from './data/njLocations';

export default function App() {
  // Navigation path: 'city' (Edison template shown in mockup), 'home', 'services', 'services-hvac', 'service-areas', etc.
  const [currentPath, setCurrentPath] = useState<string>('city');
  const [currentCitySlug, setCurrentCitySlug] = useState<string>('edison');

  // Modals state
  const [quoteModalOpen, setQuoteModalOpen] = useState<boolean>(false);
  const [weeblyStudioOpen, setWeeblyStudioOpen] = useState<boolean>(false);

  // Scroll to top on navigation change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPath, currentCitySlug]);

  const handleNavigate = (path: string, param?: string) => {
    if (path === 'city') {
      if (param) setCurrentCitySlug(param);
      setCurrentPath('city');
    } else {
      setCurrentPath(path);
    }
  };

  const handleSelectCity = (slug: string) => {
    setCurrentCitySlug(slug);
    setCurrentPath('city');
  };

  const currentCityData: NJCityData =
    FEATURED_CITIES[currentCitySlug] || FEATURED_CITIES.edison;

  return (
    <div className="min-h-screen flex flex-col bg-[#faf8ff] text-[#131b2e] selection:bg-[#fd651e] selection:text-white">
      {/* Universal Fixed Header */}
      <Header
        currentPath={currentPath}
        onNavigate={handleNavigate}
        onOpenQuote={() => setQuoteModalOpen(true)}
        onOpenWeeblyStudio={() => setWeeblyStudioOpen(true)}
        currentCityName={currentCityData.name}
      />

      {/* Main Content Area (offset by header height) */}
      <main className="w-full pt-24 sm:pt-28 flex-1">
        {currentPath === 'city' && (
          <CityPage
            cityData={currentCityData}
            onNavigate={handleNavigate}
            onSelectCity={handleSelectCity}
            onOpenQuote={() => setQuoteModalOpen(true)}
            onOpenWeeblyStudio={() => setWeeblyStudioOpen(true)}
          />
        )}

        {currentPath === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
            onSelectCity={handleSelectCity}
            onOpenQuote={() => setQuoteModalOpen(true)}
            onOpenWeeblyStudio={() => setWeeblyStudioOpen(true)}
          />
        )}

        {currentPath.startsWith('services') && (
          <ServicesPage
            currentSubService={currentPath}
            onNavigate={handleNavigate}
            onOpenQuote={() => setQuoteModalOpen(true)}
            onSelectCity={handleSelectCity}
          />
        )}

        {currentPath === 'service-areas' && (
          <ServiceAreasHub
            onNavigate={handleNavigate}
            onSelectCity={handleSelectCity}
            onOpenWeeblyStudio={() => setWeeblyStudioOpen(true)}
          />
        )}

        {currentPath === 'about-us' && (
          <AboutPage
            onNavigate={handleNavigate}
            onOpenQuote={() => setQuoteModalOpen(true)}
            onSelectCity={handleSelectCity}
          />
        )}

        {currentPath === 'contact' && (
          <ContactPage
            onNavigate={handleNavigate}
            onSelectCity={handleSelectCity}
          />
        )}

        {currentPath === 'reviews' && (
          <ReviewsPage
            onNavigate={handleNavigate}
            onOpenQuote={() => setQuoteModalOpen(true)}
            onSelectCity={handleSelectCity}
          />
        )}

        {currentPath === 'faqs' && (
          <FaqsPage
            onNavigate={handleNavigate}
            onOpenQuote={() => setQuoteModalOpen(true)}
            onSelectCity={handleSelectCity}
          />
        )}

        {(currentPath === 'privacy-policy' || currentPath === 'terms-conditions' || currentPath === 'accessibility') && (
          <LegalPage
            onNavigate={handleNavigate}
            initialTab={currentPath === 'terms-conditions' ? 'terms' : 'privacy'}
          />
        )}
      </main>

      {/* Sticky Mobile Conversion Bar (Visible only on mobile viewports) */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white shadow-[0_-4px_16px_rgba(0,0,0,0.1)] px-4 py-2.5 flex items-center justify-between gap-3 border-t border-slate-200">
        <a
          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-lg bg-[#00236f] text-white font-heading font-bold text-xs"
          href="tel:2015550199"
        >
          <span className="material-symbols-outlined text-[18px]">call</span>
          <span>Emergency Call</span>
        </a>
        <button
          onClick={() => setQuoteModalOpen(true)}
          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-lg bg-[#a73a00] text-white font-heading font-bold text-xs"
        >
          <span className="material-symbols-outlined text-[18px]">send</span>
          <span>Instant Estimate</span>
        </button>
      </div>

      {/* Global Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenWeeblyStudio={() => setWeeblyStudioOpen(true)}
      />

      {/* Request Quote Modal */}
      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
        defaultCity={currentCityData.name}
      />

      {/* Weebly Studio & 564 NJ Cities SEO Manager Modal */}
      <WeeblyStudioModal
        isOpen={weeblyStudioOpen}
        onClose={() => setWeeblyStudioOpen(false)}
        onSelectCity={handleSelectCity}
      />
    </div>
  );
}

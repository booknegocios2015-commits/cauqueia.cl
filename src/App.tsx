import React from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';

import { HeroSection } from './sections/01_Hero';
import { SameGoalSection } from './sections/02_SameGoal';
import { CaptureArchitectureSection } from './sections/03_CaptureArchitecture';
import { EcosystemOrganicSection } from './sections/03_EcosystemOrganic';
import { EcosystemGoogleAdsSection } from './sections/04_EcosystemGoogleAds';
import { EcosystemMetaAdsSection } from './sections/05_EcosystemMetaAds';
import { ComparisonSection } from './sections/06_Comparison';
import { ComplementSection } from './sections/07_Complement';
import { AdaptableIndustriesSection } from './sections/AdaptableIndustries';
import { CustomDevelopmentSection } from './sections/CustomDevelopment';
import { FinalCTASection } from './sections/08_FinalCTA';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-[#0A0F1E] flex flex-col font-sans selection:bg-[#3D5AFE] selection:text-white">
      {/* Sticky Top Navbar */}
      <Navbar />

      {/* Main Flow */}
      <main className="flex-1">
        <HeroSection />
        <SameGoalSection />
        <CaptureArchitectureSection />
        <EcosystemOrganicSection />
        <EcosystemGoogleAdsSection />
        <EcosystemMetaAdsSection />
        <ComparisonSection />
        <ComplementSection />
        <AdaptableIndustriesSection />
        <CustomDevelopmentSection />
        <FinalCTASection />
      </main>

      {/* Floating WhatsApp Action Button */}
      <WhatsAppButton />

      {/* Footer */}
      <Footer />
    </div>
  );
}

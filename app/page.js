'use client';
import Cursor from '@/components/Cursor';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Ticker from '@/components/Ticker';
import MissionStory from '@/components/MissionStory';
import Services from '@/components/Services';
import Testimonials from '@/components/Testimonials';
import VitaPlate from '@/components/VitaPlate';
import WaitlistBanner from '@/components/WaitlistBanner';
import Work from '@/components/Work';
import ProofStack from '@/components/ProofStack';
import ClientTrust from '@/components/ClientTrust';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Cursor />
      <Navbar />
      <main>
        <Hero />
        <Ticker />
        <MissionStory />
        <Services />
        <Testimonials />
        <VitaPlate />
        <WaitlistBanner />
        <Work />
        <ProofStack />
        <ClientTrust />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

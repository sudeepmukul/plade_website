import CustomCursor from '@/components/CustomCursor';
import ScrollProgress from '@/components/ScrollProgress';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Marquee from '@/components/Marquee';
import Features from '@/components/Features';
import HowItWorks from '@/components/HowItWorks';
import TechStack from '@/components/TechStack';
import Download from '@/components/Download';
import Footer from '@/components/Footer';

/* =============================================
   PAGE-LEVEL SEO METADATA
   ============================================= */
export const metadata = {
  title: 'PLADE — Learn Code. Shoot Targets. Free FPS Coding Game Download',
  description:
    'PLADE is a free first-person shooter coding education game built on Unreal Engine 5. Master Python, Java, and C by shooting syntax targets and solving coding challenges with AI-powered local LLM evaluation. Download free for Windows.',
  keywords: [
    'PLADE game download',
    'coding game free download',
    'FPS coding game Windows',
    'learn to code through gaming',
    'Unreal Engine 5 coding game',
    'AI code evaluation game',
    'Python Java C game',
    'gamified programming education',
    'first person shooter coding',
    'offline coding game',
    'learn programming FPS',
    'coding shooter game free',
    'PLADE download Windows',
    'educational FPS game',
    'code learning game 2026',
  ],
  alternates: {
    canonical: 'https://plade.web.app',
  },
};

export default function HomePage() {
  return (
    <>
      {/* Interactive overlays */}
      <CustomCursor />
      <ScrollProgress />

      {/* Navigation */}
      <header>
        <Navbar />
      </header>

      {/* Main content */}
      <main>
        <Hero />
        <Marquee />
        <Features />
        <HowItWorks />
        <TechStack />
        <Download />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}

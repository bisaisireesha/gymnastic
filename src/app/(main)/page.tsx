import Hero from "@/components/Hero";
import About from "@/components/About";
import Coaches from "@/components/Coaches";
import Schedule from "@/components/Schedule";

import Gallery from "@/components/Gallery";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import RegisterSection from "@/components/RegisterSection";
import Activities from "@/components/Activities";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Activities />
      <Coaches />
      <Schedule />

      <Gallery />
      <Pricing />
      <div id="blog" className="section container" style={{ textAlign: 'center' }}>
         <h2 className="text-gradient">Latest News & Blog</h2>
         <p style={{ color: 'var(--text-secondary)' }}>Check back soon for updates!</p>
      </div>
      <FAQ />
      <RegisterSection />
    </main>
  );
}

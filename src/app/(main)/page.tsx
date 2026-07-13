import Hero from "@/components/Hero";
import About from "@/components/About";
import Classes from "@/components/Classes";
import Coaches from "@/components/Coaches";
import Schedule from "@/components/Schedule";
import Events from "@/components/Events";
import Gallery from "@/components/Gallery";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <div id="programs">
        {/* Placeholder for specific programs section if distinct from classes */}
      </div>
      <Classes />
      <Coaches />
      <Schedule />
      <Events />
      <Gallery />
      <Pricing />
      <div id="blog" className="section container" style={{ textAlign: 'center' }}>
         <h2 className="text-gradient">Latest News & Blog</h2>
         <p style={{ color: 'var(--text-secondary)' }}>Check back soon for updates!</p>
      </div>
      <FAQ />
      <Contact />
    </main>
  );
}

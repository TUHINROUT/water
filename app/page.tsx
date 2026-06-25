import Hero from '@/components/Hero';
import TrustBar from '@/components/TrustBar';
import About from '@/components/About';
import BrandsBar from '@/components/BrandsBar';
import Products from '@/components/Products';
import CommercialRO from '@/components/CommercialRO';
import OurClients from '@/components/OurClients';
import { WhyUs, Services, Testimonials, CTAStrip } from '@/components/Sections';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <main>
      <Hero />
      <TrustBar />
      <About />
      <BrandsBar />
      <Products />
      <CommercialRO />
      <OurClients />
      <WhyUs />
      <Services />
      <Testimonials />
      <CTAStrip />
      <Contact />

      {/* Map */}
      {/* <div className="map-section">
        <div className="container">
          <div className="map-wrap">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3765.342!2d83.975!3d21.47!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1f34!2sAinthapali%2C%20Sambalpur%2C%20Odisha!5e0!3m2!1sen!2sin!4v1"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Aquagrand Store Location"
            />
          </div>
        </div>
      </div> */}
    </main>
  );
}

import SEO from '../components/SEO';

export default function Services() {
  return (
    <>
      <SEO title="Services" description="UniQue WebCraft offers SEO optimization, digital marketing, social media marketing, business graphics, poster/banner design, digital marriage cards, authentic Pattachitra from Raghurajpur, and solar panel assistance in Bhubaneswar." canonical="https://yourdomain.com/services" />
      <div className="page services-page">
        <section className="page-hero">
          <h1>Our Services</h1>
          <p>From SEO and digital marketing to authentic Pattachitra art and solar panel solutions — we help your brand shine and your home shine brighter.</p>
        </section>
        <section className="services-grid">
          <div className="container">
            <div className="service-card glass-card">
              <h3>🎨 Pattachitra Art (Raghurajpur)</h3>
              <p>Authentic, handcrafted Pattachitra paintings directly from the artisans of Raghurajpur, Odisha. Perfect for home decor, gifts, and cultural preservation. Special price available for bulk orders.</p>
            </div>
            <div className="service-card glass-card">
              <h3>☀️ Solar Panel Assistance</h3>
              <p>Expert consultation and assistance for solar panel installation, maintenance, and optimization. Reduce your electricity bills and go green with our trusted solar partners.</p>
            </div>
            <div className="service-card glass-card">
              <h3>🌐 SEO Optimization</h3>
              <p>Improve your search rankings and drive organic traffic with proven on-page, off-page, and technical SEO strategies.</p>
            </div>
            <div className="service-card glass-card">
              <h3>📈 Digital Marketing</h3>
              <p>Run targeted ad campaigns, build funnels, and grow your business with data-driven digital marketing.</p>
            </div>
            <div className="service-card glass-card">
              <h3>📱 Social Media Marketing</h3>
              <p>Engage your audience, build brand awareness, and drive conversions on Facebook, Instagram, LinkedIn, and more.</p>
            </div>
            <div className="service-card glass-card">
              <h3>🖼️ Business Graphics</h3>
              <p>Professional logos, branding kits, business cards, and marketing collateral that leave a lasting impression.</p>
            </div>
            <div className="service-card glass-card">
              <h3>🎪 Poster & Banner Design</h3>
              <p>Eye-catching posters, banners, and promotional graphics for events, sales, and social media campaigns.</p>
            </div>
            <div className="service-card glass-card">
              <h3>💍 Digital Marriage Cards</h3>
              <p>Beautiful, shareable digital marriage invitation cards with custom designs and RSVP features.</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

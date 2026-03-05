import SEO from '../components/SEO';

export default function Home() {
  return (
    <>
      <SEO title="Home" description="UniQue WebCraft: Premium web, SEO, digital marketing, graphics, and digital marriage cards — crafted with Indian creativity from Bhubaneswar." canonical="https://yourdomain.com/" />
      <div className="page home-page">
        <section className="hero">
          <div className="hero-content">
            <h1 className="hero-title">UniQue WebCraft</h1>
            <p className="hero-subtitle">Where Indian creativity meets modern technology. We build stunning websites, grow your brand with SEO & digital marketing, and design beautiful graphics — right here in Bhubaneswar.</p>
            <div className="hero-actions">
              <a href="/services" className="btn btn-primary">Explore Services</a>
              <a href="/hire-us" className="btn btn-secondary">Get a Quote</a>
            </div>
          </div>
        </section>
        <section className="features">
          <div className="container">
            <h2>Our Craft</h2>
            <div className="features-grid">
              <div className="feature-card glass-card">
                <h3>🎨 Pattachitra Art (Raghurajpur)</h3>
                <p>Authentic handcrafted Pattachitra from Raghurajpur artisans. Special price for bulk orders. Perfect for home decor and gifts.</p>
                <a href="/services" className="btn">View Art</a>
              </div>
              <div className="feature-card glass-card">
                <h3>☀️ Solar Panel Assistance</h3>
                <p>Go green with our solar panel consultation and installation assistance. Reduce bills and embrace clean energy.</p>
                <a href="/services" className="btn">Learn More</a>
              </div>
              <div className="feature-card glass-card">
                <h3>🌐 Website Development</h3>
                <p>Modern, responsive websites that blend Indian aesthetics with global standards. Perfect for businesses and startups.</p>
                <a href="/hire-us" className="btn">Get Started</a>
              </div>
              <div className="feature-card glass-card">
                <h3>📈 Digital Marketing & SEO</h3>
                <p>Boost your online presence with SEO, social media, and targeted campaigns tailored for the Indian market.</p>
                <a href="/services" className="btn">Learn More</a>
              </div>
              <div className="feature-card glass-card">
                <h3>🎨 Graphics & Design</h3>
                <p>Business graphics, posters, banners, and stunning digital marriage cards that celebrate Indian traditions.</p>
                <a href="/services" className="btn">View Designs</a>
              </div>
              <div className="feature-card glass-card">
                <h3>🎓 College Projects</h3>
                <p>Ready-to-submit academic projects in various technologies. Built with care for students across India.</p>
                <a href="/projects" className="btn">Browse Projects</a>
              </div>
            </div>
          </div>
        </section>

        <section className="stats">
          <div className="container">
            <div className="stats-grid">
              <div className="stat-card glass-card">
                <h3>120+</h3>
                <p>Happy Clients</p>
              </div>
              <div className="stat-card glass-card">
                <h3>250+</h3>
                <p>Projects Delivered</p>
              </div>
              <div className="stat-card glass-card">
                <h3>4.9/5</h3>
                <p>Client Rating</p>
              </div>
              <div className="stat-card glass-card">
                <h3>🇮🇳</h3>
                <p>Made in India</p>
              </div>
            </div>
          </div>
        </section>

        <section className="testimonials">
          <div className="container">
            <h2>Client Love</h2>
            <div className="testimonials-grid">
              <div className="testimonial-card glass-card">
                <p className="quote">“UniQue WebCraft brought our vision to life with a website that truly reflects our Indian roots while being globally competitive.”</p>
                <p className="author">— Anjali, Small Business Owner, Bhubaneswar</p>
              </div>
              <div className="testimonial-card glass-card">
                <p className="quote">“My college project was delivered with complete documentation and demo. The team understood exactly what I needed.”</p>
                <p className="author">— Ravi, BTech Student, Odisha</p>
              </div>
              <div className="testimonial-card glass-card">
                <p className="quote">“Professional team, clean code, SEO-ready, and they incorporated our cultural elements beautifully.”</p>
                <p className="author">— Priya, Startup Founder, Cuttack</p>
              </div>
            </div>
          </div>
        </section>

        <section className="contact-info">
          <div className="container">
            <h2>Visit Us</h2>
            <div className="contact-grid">
              <div className="contact-card glass-card">
                <h3>📍 Office</h3>
                <p>Bhubaneswar, Odisha</p>
                <p>India</p>
                <p>🕐 Working Hours: 10:00 AM - 7:00 PM</p>
              </div>
              <div className="contact-card glass-card">
                <h3>📞 Contact</h3>
                <p>Email: jd.jagannath.dash@gmail.com</p>
                <p>Phone: +91 9777237126</p>
                <p>WhatsApp: <a className="link" href="https://wa.me/919777237126" target="_blank" rel="noreferrer">Chat Now</a></p>
              </div>
              <div className="contact-card glass-card">
                <h3>🚀 Quick Action</h3>
                <p>Ready to grow your business with our unique Indian touch?</p>
                <a href="/hire-us" className="nav-cta">Get a Quote</a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

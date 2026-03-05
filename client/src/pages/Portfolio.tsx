import { Helmet } from 'react-helmet-async';
import './Portfolio.css';

export default function Portfolio() {
  return (
    <>
      <Helmet>
        <title>Jagannath Dash (JD) - Portfolio | UniQue WebCraft</title>
        <meta name="description" content="Jagannath Dash (JD) - MCA graduate with 4 years of experience in web development, hosting, and multi-language programming." />
      </Helmet>
      <div className="page">
        <section className="portfolio-hero">
          <div className="container">
            <div className="portfolio-card glass-card">
              <div className="portfolio-header">
                <div className="profile-image-wrapper">
                  <img 
                    src="https://via.placeholder.com/150x150/2563eb/ffffff?text=JD" 
                    alt="Jagannath Dash (JD)" 
                    className="profile-image"
                  />
                </div>
                <h1>Jagannath Dash</h1>
                <p className="portfolio-tagline">(JD)</p>
              </div>
              <div className="portfolio-body">
                <div className="portfolio-section">
                  <h2>About</h2>
                  <p>MCA graduate with 4 years of experience in web development, hosting, and multi-language programming. Passionate about building scalable, modern web applications and helping businesses grow online.</p>
                </div>
                <div className="portfolio-section">
                  <h2>Skills & Technologies</h2>
                  <ul className="skills-list">
                    <li>Frontend: React, TypeScript, JavaScript, HTML5, CSS3, TailwindCSS</li>
                    <li>Backend: Node.js, Express, PHP, Python, Java, Spring Boot</li>
                    <li>Databases: MySQL, MongoDB, PostgreSQL</li>
                    <li>Frameworks: Laravel, Django, Angular, Next.js</li>
                    <li>DevOps & Hosting: AWS, Hostinger, cPanel, Git, CI/CD</li>
                    <li>Mobile: Android, Kotlin, React Native</li>
                  </ul>
                </div>
                <div className="portfolio-section">
                  <h2>Experience</h2>
                  <p><strong>4+ years</strong> in full‑stack development, deployment, and client solutions across domains like e‑commerce, education, solar energy, digital marketing, and custom business tools.</p>
                </div>
                <div className="portfolio-section">
                  <h2>Contact</h2>
                  <div className="contact-info">
                    <p><strong>Email:</strong> <a href="mailto:jd.jagannath.dash@gmail.com">jd.jagannath.dash@gmail.com</a></p>
                    <p><strong>WhatsApp:</strong> <a href="https://wa.me/919777237126" target="_blank" rel="noopener noreferrer">+91 9777237126</a></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

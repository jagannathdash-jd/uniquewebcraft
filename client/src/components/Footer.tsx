import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="glass-footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h4>Services</h4>
            <ul>
              <li><Link to="/services">Pattachitra Art (Raghurajpur)</Link></li>
              <li><Link to="/services">Solar Panel Assistance</Link></li>
              <li><Link to="/services">SEO & Digital Marketing</Link></li>
              <li><Link to="/services">Social Media Marketing</Link></li>
              <li><Link to="/services">Graphics & Posters</Link></li>
              <li><Link to="/services">Digital Marriage Cards</Link></li>
              <li><Link to="/hire-us">Website Development</Link></li>
              <li><Link to="/projects">College Projects</Link></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Company</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/projects">Portfolio</Link></li>
              <li><Link to="/hire-us">Get Quote</Link></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/projects">View Projects</Link></li>
              <li><Link to="/hire-us">Contact Us</Link></li>
              <li><a href="tel:+919777237126">Call Now</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 UniQue WebCraft. All rights reserved.</p>
          <p className="footer-design-credit">Made with <span className="heart">&hearts;</span> by <Link to="/portfolio" className="jd-link">JD</Link></p>
        </div>
      </div>
    </footer>
  );
}

import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="glass-header">
      <div className="container">
        <div className="header-content">
          <Link to="/" className="logo">
            <svg className="logo-icon" width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="36" height="36" rx="9" fill="url(#logo-gradient)" />
              <path d="M10 12C10 10.8954 10.8954 10 12 10H16C17.1046 10 18 10.8954 18 12V16C18 17.1046 17.1046 18 16 18H12C10.8954 18 10 17.1046 10 16V12Z" fill="#ffffff" />
              <path d="M18 18C18 16.8954 18.8954 16 20 16H24C25.1046 16 26 16.8954 26 18V22C26 23.1046 25.1046 24 24 24H20C18.8954 24 18 23.1046 18 22V18Z" fill="#ffffff" />
              <path d="M14 22C14 20.8954 14.8954 20 16 20H20C21.1046 20 22 20.8954 22 22V24C22 25.1046 21.1046 26 20 26H16C14.8954 26 14 25.1046 14 24V22Z" fill="#ffffff" />
              <defs>
                <linearGradient id="logo-gradient" x1="0" y1="0" x2="36" y2="36">
                  <stop stopColor="#1e40af" />
                  <stop offset="0.7" stopColor="#2563eb" />
                  <stop offset="1" stopColor="#ff9966" />
                </linearGradient>
              </defs>
            </svg>
            <span className="logo-text">UniQue WebCraft</span>
          </Link>
          <nav className="desktop-nav">
            <ul className="nav-menu">
              <li><Link to="/" className={isActive('/') ? 'active' : ''}>Home</Link></li>
              <li><Link to="/services" className={isActive('/services') ? 'active' : ''}>Services</Link></li>
              <li><Link to="/projects" className={isActive('/projects') ? 'active' : ''}>Portfolio</Link></li>
              <li><Link to="/hire-us" className={isActive('/hire-us') ? 'active' : ''}>Get Quote</Link></li>
              <li><a href="tel:+919777237126" className="nav-cta">Call Now</a></li>
            </ul>
          </nav>
          <button className="mobile-menu-toggle">
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  );
}

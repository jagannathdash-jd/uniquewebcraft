import { useState, useEffect } from 'react';
import { api, type Project } from '../api';
import SEO from '../components/SEO';

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [filtered, setFiltered] = useState<Project[]>([]);
  const [categories] = useState(['All', 'MCA', 'BSc CS', 'BTech CS', 'Web', 'AI/ML', 'Android', 'Java', 'Python', 'C#', 'PHP', 'Laravel', 'Django', 'Angular', 'Spring Boot']);
  const [activeCategory, setActiveCategory] = useState('All');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const getDiscountedPrice = (p: Project) => {
    const raw = (p.price || '').replace(/[^0-9]/g, '');
    const n = Number(raw);
    return Number.isFinite(n) && n > 0 ? n : null;
  };

  const formatINR = (amount: number) => `₹${amount.toLocaleString('en-IN')}`;

  const getPricing = (p: Project) => {
    const discounted = getDiscountedPrice(p);
    if (!discounted) return null;
    const discountPercent = 35;
    const mrp = Math.round(discounted / (1 - discountPercent / 100));
    return { mrp, discountPercent, discounted };
  };

  const getWhatsAppHref = (p: Project) => {
    const pricing = getPricing(p);
    const priceLine = pricing
      ? `\nMRP: ${formatINR(pricing.mrp)}\nDiscount: ${pricing.discountPercent}%\nOffer Price: ${formatINR(pricing.discounted)}`
      : p.price
        ? `\nPrice: ${p.price}`
        : '';

    const text = `Hi UniQue WebCraft, I want this college project:\n\nProject: ${p.title}\nTech: ${p.tech_stack}${priceLine}\n\nPlease share demo + documentation details.`;
    return `https://wa.me/919777237126?text=${encodeURIComponent(text)}`;
  };

  useEffect(() => {
    api.getProjects()
      .then(setProjects)
      .then(() => setLoading(false))
      .catch((e) => {
        setError(e.message);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    if (activeCategory === 'All') {
      setFiltered(projects);
    } else {
      setFiltered(projects.filter(p => p.categories.includes(activeCategory)));
    }
  }, [activeCategory, projects]);

  if (loading) return <div className="page loading">Loading projects...</div>;
  if (error) return <div className="page error">Error: {error}</div>;

  return (
    <>
      <SEO title="College Project Solutions" description="Browse our ready-to-submit academic projects across MCA, BSc CS, BTech CS, Web, AI/ML, and Android domains." canonical="https://yourdomain.com/projects" />
      <div className="page projects-page">
        <section className="page-hero">
          <h1>College Project Solutions</h1>
          <p>Browse our ready-to-submit academic projects across various domains.</p>
        </section>
        <section className="filters">
          <div className="container">
            {categories.map(cat => (
              <button
                key={cat}
                className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </section>
        <section className="projects-grid">
          <div className="container">
            {filtered.length === 0 ? (
              <p>No projects found.</p>
            ) : (
              filtered.map(project => (
                <div key={project.id} className="project-card glass-card">
                  <div className="project-image" aria-hidden="true">
                    <div className="project-image-inner">
                      <span className="project-image-text">{project.title.slice(0, 2).toUpperCase()}</span>
                    </div>
                  </div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <p><strong>Tech:</strong> {project.tech_stack}</p>
                  {(() => {
                    const pricing = getPricing(project);
                    if (!pricing) return project.price ? <p className="price">{project.price}</p> : null;
                    return (
                      <div className="price-block">
                        <span className="discount-badge">-{pricing.discountPercent}%</span>
                        <div className="price-lines">
                          <div className="mrp">MRP <span className="strike">{formatINR(pricing.mrp)}</span></div>
                          <div className="sale">Offer Price <span className="sale-amount">{formatINR(pricing.discounted)}</span></div>
                        </div>
                      </div>
                    );
                  })()}
                  <div className="project-actions">
                    {project.demo_url && (
                      <a
                        href={project.demo_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-secondary"
                      >
                        View Demo
                      </a>
                    )}
                    <a
                      className="btn btn-primary"
                      href={getWhatsAppHref(project)}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Get This Project
                    </a>
                    <a className="btn btn-secondary" href="/hire-us">Contact Us</a>
                  </div>
                </div>
              ))
            )}
          </div>
        </section>
      </div>
    </>
  );
}

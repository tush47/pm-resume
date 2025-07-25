import React from "react";
import "./CutePortfolio.css";

export default function TusharAPMPortfolio() {
  return (
    <main className="cute-bg">
      {/* Banner Image */}
      {/* <div className="banner-image-container">
        <img src="/banner.jpeg" alt="Banner" className="banner-image" />
      </div> */}
      {/* Header with Name and Resume */}
      <header className="cute-header" style={{position:'relative'}}>
        <div className="header-title-row">
          <h1 className="cute-title">Tushar Sohal</h1>
          <a href="https://docs.google.com/document/d/1NhamOGv9aQihDb6Wne1eZOjh_jPNA5pvzrUPE510nWM/edit?usp=sharing" target="_blank" className="resume-side-link" download>
            Resume
          </a>
        </div>
        <p className="cute-tagline">Aspiring PM passionate about building delightful products.</p>
      </header>

      {/* About Section */}
      <section className="cute-card about-me-card">
        <h2 className="cute-section-title">👋 About Me</h2>
        <p>
          Final-year B.Tech student at <span className="highlight">NIT Kurukshetra</span>, blending <span className="highlight">engineering</span>, <span className="highlight">design</span>, and <span className="highlight">strategy</span> to craft meaningful digital experiences.<br/>
          Passionate about <span className="highlight">user-first</span> and <span className="highlight">data-driven</span> product development.
        </p>
      </section>

      {/* Experience Section */}
      <section className="cute-card">
        <h2 className="cute-section-title">💼 Experience</h2>
        <div className="cute-links">
          <div className="cute-link-card" style={{alignItems:'flex-start',textAlign:'left',minWidth:'260px'}}>
            <img src="/tmrw_logo.jpg" alt="TMRW House of Brands" className="cute-link-icon" />
            <div className="cute-link-title">TMRW House of Brands <span className="highlight">SDE Intern</span></div>
            <div className="cute-link-desc" style={{whiteSpace:'normal'}}>
              <div><span className="highlight">Jan 2025 – Jul 2025 · Bengaluru, On-site</span></div>
              <ul style={{margin:'0.7em 0 0 1em',padding:'0',listStyle:'disc'}}>
                <li>Drove <span className="highlight">feature development</span> for D2C brands: <span className="highlight">Wrogn, Veirdo, Juneberry</span></li>
                <li>Boosted <span className="highlight">PLP conversions by 6%</span> via topline/inline optimizations</li>
                <li>Built <span className="highlight">quick filters</span> for Veirdo, improving navigation & discoverability</li>
                <li>Led <span className="highlight">cart coupon</span> rollout for Wrogn, achieving <span className="highlight">16% uplift</span> in cart conversions</li>
                <li>Presented architecture to <span className="highlight">CTO & Tech Architects</span></li>
                <li>Added <span className="highlight">cart nudges</span> (+4% conversion), free shipping banners, dynamic pricing</li>
              </ul>
            </div>
          </div>
          <div className="cute-link-card" style={{alignItems:'flex-start',textAlign:'left',minWidth:'260px'}}>
            <img src="/suv_logo.jpeg" alt="SUV Associates Pvt Ltd." className="cute-link-icon !w-[79px]" />
            <div className="cute-link-title">SUV Associates Pvt Ltd. <span className="highlight">WordPress Developer Intern</span></div>
            <div className="cute-link-desc" style={{whiteSpace:'normal'}}>
              <div><span className="highlight">Jan 2024 – Jun 2024 · Remote</span></div>
              <ul style={{margin:'0.7em 0 0 1em',padding:'0',listStyle:'disc'}}>
                <li>Revamped company website, improving <span className="highlight">UX, SEO, and performance</span></li>
                <li>Used <span className="highlight">Elementor, Yoast SEO, WPForms, WooCommerce, WP Rocket</span></li>
                <li>Ensured <span className="highlight">mobile responsiveness</span> and <span className="highlight">fast loading</span></li>
                <li>Collaborated with <span className="highlight">CEO & directors</span> for business-aligned features</li>
                <li>Drove <span className="highlight">traffic & engagement</span> through iterative updates</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* PRDs Section */}
      <section className="cute-card">
        <h2 className="cute-section-title">📝 Product Requirement Docs (PRDs)</h2>
        <div className="cute-links">
          <a href="https://drive.google.com/file/d/1D_cRs8uXRUmhpVUaL0BW1O2FhGq4yOuY/view" className="cute-link-card">
            <img src="https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f4c3.svg" alt="PRD 2" target="_blank" className="cute-link-icon" />
            <div className="cute-link-title">Group/Blanket Account System for Shared Living Purchases</div>
            <div className="cute-link-desc">Product Requirement Doc (DOCX) for a system enabling group or blanket accounts to manage shared purchases in co-living or roommate scenarios.</div>
          </a>
          <a href="https://drive.google.com/file/d/1x6bgcagKo6Hgjsx53O3oAOLKys9mWyvs/view" className="cute-link-card" target="_blank">
            <img src="https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f399.svg" alt="Podcast Marketplace" className="cute-link-icon" />
            <div className="cute-link-title">Marketplace Platform for Podcast Editors & Creators</div>
            <div className="cute-link-desc">Product Requirement Doc (DOCX) for a platform connecting podcast editors and creators.</div>
          </a>
        </div>
      </section>

      {/* Contact Section */}
      <section className="cute-card">
        <h2 className="cute-section-title">📬 Contact</h2>
        <div className="cute-links">
          <a href="mailto:tusharsohal2003@gmail.com" target="_blank" className="cute-link-card">
            <img src="https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/2709.svg" alt="Email" className="cute-link-icon" />
            <div className="cute-link-title">Email</div>
            <div className="cute-link-desc">tusharsohal2003@gmail.com<br/>Drop me a line for opportunities or collaboration!</div>
          </a>
          <a href="https://www.linkedin.com/in/tushar-sohal" className="cute-link-card" target="_blank" rel="noreferrer">
            <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/linkedin.svg" alt="LinkedIn" className="cute-link-icon" style={{background:'#e3f2fd',borderRadius:'50%',padding:'6px'}} />
            <div className="cute-link-title">LinkedIn</div>
            <div className="cute-link-desc">Message or connect with me on LinkedIn.</div>
          </a>
          <a href="https://github.com/tush47" className="cute-link-card" target="_blank" rel="noreferrer">
            <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/github.svg" alt="GitHub" className="cute-link-icon" style={{background:'#ede7f6',borderRadius:'50%',padding:'6px'}} />
            <div className="cute-link-title">GitHub</div>
            <div className="cute-link-desc">See my code, projects, and open-source work.</div>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="cute-footer">
        {/* <img src="/footer_blob.svg" alt="footer blob" className="footer-blob" /> */}
        <div>Made with <span role="img" aria-label="heart">💙</span> by Tushar Sohal · APM Aspirant · 2025</div>
      </footer>
    </main>
  );
}

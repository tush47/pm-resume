import React from "react";
import "./CutePortfolio.css";

export default function TusharDataAnalystPortfolio() {
  return (
    <main className="cute-bg">
      {/* Header with Name and Resume */}
      <header className="cute-header" style={{position:'relative'}}>
        <div className="header-title-row">
          <h1 className="cute-title">Tushar Sohal</h1>
          <a href="https://docs.google.com/document/d/1eY8qXpLWyYYnjcpzTjlL_sxADyQB_CK3IDlauUBINP4/edit?usp=sharing" target="_blank" className="resume-side-link" download>
            Resume
          </a>
        </div>
        <p className="cute-tagline">Aspiring Data Analyst passionate about transforming data into actionable insights.</p>
      </header>

      {/* About Section */}
      <section className="cute-card about-me-card">
        <h2 className="cute-section-title">👋 About Me</h2>
        <p>
          Final-year B.Tech student at <span className="highlight">NIT Kurukshetra</span>, blending <span className="highlight">statistics</span>, <span className="highlight">programming</span>, and <span className="highlight">business acumen</span> to extract meaningful insights from complex datasets.<br/>
          Passionate about <span className="highlight">data-driven</span> decision making and <span className="highlight">predictive analytics</span>.
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
                <li>Analyzed <span className="highlight">user behavior data</span> to drive feature development for D2C brands</li>
                <li>Implemented <span className="highlight">A/B testing</span> that boosted PLP conversions by 6%</li>
                <li>Built <span className="highlight">data pipelines</span> for cart analytics and conversion tracking</li>
                <li>Created <span className="highlight">dashboard visualizations</span> for business stakeholders</li>
                <li>Presented <span className="highlight">data insights</span> to CTO & Tech Architects</li>
                <li>Optimized <span className="highlight">conversion funnels</span> using data-driven approaches</li>
              </ul>
            </div>
          </div>
          <div className="cute-link-card" style={{alignItems:'flex-start',textAlign:'left',minWidth:'260px'}}>
            <img src="/suv_logo.jpeg" alt="SUV Associates Pvt Ltd." className="cute-link-icon !w-[79px]" />
            <div className="cute-link-title">SUV Associates Pvt Ltd. <span className="highlight">WordPress Developer Intern</span></div>
            <div className="cute-link-desc" style={{whiteSpace:'normal'}}>
              <div><span className="highlight">Jan 2024 – Jun 2024 · Remote</span></div>
              <ul style={{margin:'0.7em 0 0 1em',padding:'0',listStyle:'disc'}}>
                <li>Analyzed <span className="highlight">website analytics</span> to improve UX, SEO, and performance</li>
                <li>Implemented <span className="highlight">data tracking</span> using Google Analytics and heatmaps</li>
                <li>Created <span className="highlight">performance reports</span> for mobile responsiveness and loading speed</li>
                <li>Collaborated with <span className="highlight">stakeholders</span> to align data insights with business goals</li>
                <li>Drove <span className="highlight">traffic & engagement</span> through data-driven optimizations</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="cute-card">
        <h2 className="cute-section-title">📊 Data Analytics Projects</h2>
        <div className="cute-links">
          <a href="https://github.com/tush47/SkyVision-Weather-Classifier" className="cute-link-card" target="_blank">
            <img src="https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f4c3.svg" alt="Weather Classifier" className="cute-link-icon" />
            <div className="cute-link-title">Sky Vision Weather Classifier</div>
            <div className="cute-link-desc">Built a CNN model using TensorFlow and OpenCV to classify 11 weather conditions with 97% accuracy, implementing data preprocessing and model optimization.</div>
          </a>
          <a href="https://github.com/tush47/WhatsApp-Chat-Analyzer" className="cute-link-card" target="_blank">
            <img src="https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f399.svg" alt="WhatsApp Analysis" className="cute-link-icon" />
            <div className="cute-link-title">WhatsApp Chat Analysis App</div>
            <div className="cute-link-desc">Developed an interactive Streamlit app for analyzing WhatsApp chat data with text preprocessing, visualization, and modular data pipelines.</div>
          </a>
          <a href="https://github.com/tush47/Student-marks-predictor" className="cute-link-card" target="_blank">
            <img src="https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f4d1.svg" alt="Student Predictor" className="cute-link-icon" />
            <div className="cute-link-title">Student Marks Predictor</div>
            <div className="cute-link-desc">Developed predictive models using Linear Regression, KNN, and Decision Trees achieving 92% R² score with comprehensive data pipeline.</div>
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
        <div>Made with <span role="img" aria-label="heart">💙</span> by Tushar Sohal · Data Analyst Aspirant · 2025</div>
      </footer>
    </main>
  );
}

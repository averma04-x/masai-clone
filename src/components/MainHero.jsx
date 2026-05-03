import './MainHero.css';

export default function MainHero() {
  return (
    <section className="main-hero-section">
      
      {/* Top Text Area */}
      <div className="hero-text-center">
        <h1 className="hero-main-title">
          Your AI Powered <br /> Future, Starts at Masai
        </h1>
        <h2 className="hero-subtitle">
          India’s Top Job-Ready <span className="highlight-underline">Certification Platform</span>
        </h2>
        <button className="btn-explore">Explore Now &rarr;</button>
      </div>

      {/* Stats Cards Area with Red Grid Background */}
      <div className="stats-grid-wrapper">
        <div className="red-grid-bg"></div> {/* The faint red grid lines */}
        
        <div className="stats-cards-container">
          
          {/* Card 1 */}
          <div className="stat-card">
            <h3 className="stat-number">40,000+</h3>
            <p className="stat-text">Active Learners Accelerating Their Careers</p>
            <div className="stat-icon-placeholder">
               <span style={{color: '#e31e24', fontSize: '2rem'}}>📈</span>
            </div>
          </div>

          {/* Card 2 */}
          <div className="stat-card">
            <h3 className="stat-number">10,000+</h3>
            <p className="stat-text">Masai Graduates Placed in Top Companies</p>
            <div className="stat-faces">
              {/* Overlapping circle avatars */}
              <div className="avatar"></div>
              <div className="avatar"></div>
              <div className="avatar"></div>
              <div className="avatar"></div>
            </div>
          </div>

          {/* Card 3 (Centered below) */}
          <div className="stat-card centered-card">
            <h3 className="stat-number">16+</h3>
            <p className="stat-text">Institutes of National Importance such as IITs, IIMs, XLRI & BITS</p>
            <div className="stat-logos-mini">
              <div className="mini-logo"></div>
              <div className="mini-logo"></div>
              <div className="mini-logo"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
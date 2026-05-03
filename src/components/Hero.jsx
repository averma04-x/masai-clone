import './Hero.css';

export default function Hero() {
  return (
    <div className="hero-dark-bg">
      <div className="hero-image-card">
        
        {/* Green Admission Timer Badge */}
        <div className="admission-badge">
          <span className="diamond">✦</span> 
          Admission Closes In 
          <span className="timer-box">7 Days</span> 
          <span className="timer-box">0 Hours</span> 
          <span className="diamond">✦</span>
        </div>

        {/* Text Content */}
        <h1 className="hero-heading">Think you're ready for 60 days at IIT Mandi?</h1>
        <p className="hero-subheading">Not just a course, a full IIT campus experience</p>

        {/* Bottom Tags */}
        <div className="hero-tags">
          <span className="tag-outline">Fully Residential</span>
          <span className="tag-outline">Taught By IIT Mandi Faculty</span>
          <span className="tag-outline">CCE, IIT Mandi Certification</span>
          <span className="tag-outline">Real Projects & Real Demos</span>
        </div>

      </div>
    </div>
  );
}
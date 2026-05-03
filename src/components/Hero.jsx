// src/components/Hero.jsx
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero-container">
      <div className="hero-content">
        <h1>Driven by Outcomes, <br/><span>Fueled by Ambition.</span></h1>
        <p>
          Launch your career in Tech with Masai School. No upfront fees, 
          pay only when you get hired.
        </p>
        <div className="hero-buttons">
          <button className="primary-btn">Apply Now</button>
          <button className="secondary-btn">View Courses</button>
        </div>
      </div>
      
      <div className="hero-image">
        {/* We will use a placeholder box here until you download the real image */}
        <div className="image-placeholder">
          <p>🎓 Student Graphic Goes Here</p>
        </div>
      </div>
    </section>
  );
}
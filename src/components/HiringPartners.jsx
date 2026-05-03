// src/components/HiringPartners.jsx
import './HiringPartners.css';

// A list of fake companies for now!
const companies = ['Amazon', 'Google', 'Microsoft', 'Swiggy', 'Ola', 'Uber', 'Flipkart', 'Zomato'];

export default function HiringPartners() {
  return (
    <section className="hiring-partners">
      <h2>Top Companies Hiring Our Graduates</h2>
      
      <div className="marquee">
        <div className="marquee-content">
          {/* We double the list so the scrolling loop is perfectly seamless */}
          {[...companies, ...companies].map((company, index) => (
            <div className="company-logo" key={index}>
              {company}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

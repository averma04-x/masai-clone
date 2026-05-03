import './InstitutionalPartners.css';

export default function InstitutionalPartners() {
  // Array of placeholder logo URLs
  const logos = [
    "https://upload.wikimedia.org/wikipedia/en/thumb/1/12/IIT_Guwahati_Logo.svg/1200px-IIT_Guwahati_Logo.svg.png",
    "https://nsdcindia.org/assets/images/logo.png",
    "https://iimmumbai.ac.in/images/logo.png",
    "https://www.iimsirmaur.ac.in/assets/images/logo.png",
    "https://upload.wikimedia.org/wikipedia/en/5/52/Indian_Institute_of_Technology_Patna_Logo.svg"
  ];

  return (
    <section className="partners-white-section">
      <div className="partners-marquee">
        <div className="partners-marquee-content">
          {/* duplicate the array to make the scrolling seamless */}
          {[...logos, ...logos, ...logos].map((logo, index) => (
            <div className="partner-logo-box" key={index}>
              <img src={logo} alt="Partner Logo" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
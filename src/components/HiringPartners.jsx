import './HiringPartners.css';

// These are actual image links of company logos!
const companyLogos = [
  "https://masai-website-images.s3.ap-south-1.amazonaws.com/paytm_rect_06df45a24f.svg",
  "https://masai-website-images.s3.ap-south-1.amazonaws.com/amazon_rect_9e0cd101b1.svg",
  "https://masai-website-images.s3.ap-south-1.amazonaws.com/swiggy_rect_26c29f71f1.svg",
  "https://masai-website-images.s3.ap-south-1.amazonaws.com/dream11_rect_10204b6b66.svg",
  "https://masai-website-images.s3.ap-south-1.amazonaws.com/ola_rect_b4a1b02bb5.svg"
];

export default function HiringPartners() {
  return (
    <section className="hiring-partners">
      <h2>Top Companies Hiring Our Graduates</h2>
      
      <div className="marquee">
        <div className="marquee-content">
          {[...companyLogos, ...companyLogos].map((logoUrl, index) => (
            <div className="company-logo" key={index} style={{background: 'transparent', boxShadow: 'none'}}>
              <img src={logoUrl} alt="Company Logo" style={{ height: '40px' }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
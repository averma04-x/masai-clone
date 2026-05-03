import { useState } from 'react';
import './Navbar.css';

export default function Navbar() {
  const [isCoursesOpen, setIsCoursesOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('Popular & Trending Courses');

  const categories = [
    { name: 'Popular & Trending Courses', icon: '🔥' },
    { name: 'Data Science and AI-ML', icon: '⚛️' },
    { name: 'Analytics and AI', icon: '📊' },
    { name: 'Product Management with AI', icon: '🗂️' },
    { name: 'Entrepreneurship and Leadership', icon: '💼' },
    { name: 'Business Management', icon: '🎯' },
    { name: 'Marketing and Analytics', icon: '🎯' },
    { name: 'Cybersecurity', icon: '🛡️' },
    { name: 'Finance and Technology', icon: '💰' },
    { name: 'Software Development Engineering', icon: '💻' }
  ];

  // Exact data mapped from your screenshots!
  const coursesData = {
    'Popular & Trending Courses': [
      { uni: 'Vishlesan i-Hub, IIT Patna', title: 'Artificial Intelligence and Machine Learning', closed: false, link: 'https://www.masaischool.com/program/iit-patna/ai-ml-sop' },
      { uni: 'E&ICT Academy, IIT Roorkee', title: 'Artificial Intelligence and Machine Learning Certification Program', closed: false, link: '#' },
      { uni: 'E&ICT Academy, IIT Roorkee', title: 'Certification in Data Science and Artificial Intelligence Program', closed: false, link: '#' },
      { uni: 'E&ICT Academy, IIT Roorkee', title: 'Certification Program in Data Analytics with AI and Gen AI', closed: false, link: '#' },
      { uni: 'iHUB DivyaSampark, IIT Roorkee', title: 'Future-Ready Product Management with Applied AI Program', closed: false, link: '#' },
      { uni: 'CCE, IIT MANDI', title: 'Certification in Artificial Intelligence and Machine Learning Program', closed: false, link: '#' }
    ],
    'Data Science and AI-ML': [
      { uni: 'Vishlesan i-Hub, IIT Patna', title: 'Applied AI & ML Essentials (in Tamil)', closed: false, link: '#' },
      { uni: 'Vishlesan i-Hub, IIT Patna', title: 'Artificial Intelligence and Machine Learning', closed: false, link: '#' },
      { uni: 'Vishlesan i-Hub, IIT Patna', title: 'Artificial Intelligence and Machine Learning (in Telugu)', closed: false, link: 'https://www.masaischool.com/our-program/iit-patna/ai-ml-telugu' },
      { uni: 'CCE, IIT MANDI', title: 'Certification in Artificial Intelligence and Machine Learning Program', closed: false, link: '#' },
      { uni: 'E&ICT Academy, IIT Roorkee', title: 'Certification in Data Science and Artificial Intelligence Program', closed: false, link: '#' },
      { uni: 'CCE, IIT MANDI', title: 'HIMSHIKHAR 2026 - Summer Residential Program at IIT Mandi', closed: false, link: '#' },
      { uni: 'Vishlesan i-Hub, IIT Patna', title: 'Applied AI & ML Essentials (in Hindi)', closed: true, link: '#' },
      { uni: 'Vishlesan i-Hub, IIT Patna', title: 'Certification in Applied AI & ML Essentials (in Marathi)', closed: true, link: '#' },
      { uni: 'Vishlesan i-Hub, IIT Patna', title: 'Certification in Applied AI & ML Essentials (in Marathi) (Foundation)', closed: true, link: '#' },
      { uni: 'Vishlesan i-Hub, IIT Patna', title: 'Certification in Applied AI & ML Essentials (Kannada)', closed: true, link: '#' }
    ],
    'Analytics and AI': [
      { uni: 'Vishlesan i-Hub, IIT Patna', title: 'Certificate Program in Data Analytics and Generative AI (in Tamil)', closed: false, link: '#' },
      { uni: 'Vishlesan i-Hub, IIT Patna', title: 'Certificate Program in Data Analytics and Generative AI(in Telugu)', closed: false, link: '#' },
      { uni: 'BITS School of Management', title: 'Certification Program in Business Analytics with Gen & Agentic AI', closed: false, link: '#' },
      { uni: 'E&ICT Academy, IIT Roorkee', title: 'Certification Program in Data Analytics with AI and Gen AI', closed: false, link: '#' },
      { uni: 'Vishlesan i-Hub, IIT Patna', title: 'Certificate Program in Data Analytics and Generative AI', closed: true, link: '#' },
      { uni: 'Vishlesan i-Hub, IIT Patna', title: 'Certification Program in Data Analytics with Gen & Agentic AI', closed: true, link: '#' },
      { uni: 'IIM Sirmaur', title: 'EDGE: Essentials of Data Analytics, Gen AI & Execution', closed: true, link: '#' },
      { uni: 'CCE, IIT MANDI', title: 'Minor in Artificial Intelligence & Data Science', closed: true, link: '#' }
    ],
    'Product Management with AI': [
      { uni: 'iHUB DivyaSampark, IIT Roorkee', title: 'Future-Ready Product Management with Applied AI Program', closed: false, link: '#' },
      { uni: 'IIM Ranchi', title: 'Executive Program in Data-Driven Product Management', closed: false, link: '#' },
      { uni: 'IIM Trichy', title: 'Product Management in the Agentic AI Era', closed: false, link: '#' },
      { uni: 'IIM Rohtak', title: 'AI-Powered Product Management & Growth Marketing Program', closed: true, link: '#' },
      { uni: 'Vishlesan i-Hub, IIT Patna', title: 'Gen AI Product Launchpad', closed: true, link: '#' },
      { uni: 'Vishlesan i-Hub, IIT Patna', title: 'Product Management and Agentic AI', closed: true, link: '#' },
      { uni: 'BITS School of Management', title: 'Product Management with Generative & Agentic AI', closed: true, link: '#' }
    ],
    'Entrepreneurship and Leadership': [
      { uni: 'BITS School of Management', title: 'Executive Programme in AI-Driven Leadership & Decision Making', closed: false, link: '#' },
      { uni: 'BITS School of Management', title: 'Online PGP in AI-Powered Business Management', closed: false, link: '#' },
      { uni: 'IIM Mumbai', title: 'Certificate Program in Entrepreneurship and Start Up Mastery', closed: true, link: 'https://www.masaischool.com/our-program/iim-mumbai/entrepreneurship' },
      { uni: 'Vishlesan i-Hub, IIT Patna', title: 'Entrepreneurship & Leadership Toolkit Program', closed: true, link: '#' },
      { uni: 'XLRI Leadership Education and Development', title: 'Entrepreneurship Launchpad', closed: true, link: '#' },
      { uni: 'FITT, IIT Delhi', title: 'Pre-incubation and Entrepreneurship leveraging AI Program', closed: true, link: '#' }
    ],
    'Business Management': [
      { uni: 'NMIMS CDOE', title: 'Online MBA', closed: false, link: '#' },
      { uni: 'Rotman School of Management, University of Toronto', title: 'Certification in Data Driven Decision Making with GenAI', closed: true, link: '#' },
      { uni: 'IIM Ranchi', title: 'Executive Certificate Programme in Business Analytics and AI for Aspiring Managers', closed: true, link: '#' }
    ],
    'Marketing and Analytics': [
      { uni: 'IIM Ranchi', title: 'Digital Marketing with Applied AI', closed: false, link: 'https://www.masaischool.com/our-program/iim-ranchi/digital-marketing' },
      { uni: 'IIM Rohtak', title: 'Advanced Digital Marketing & AI Strategies Certification', closed: true, link: '#' },
      { uni: 'IIM Mumbai', title: 'AI, Analytics, and Disruptive Technologies for Business Intelligence', closed: true, link: '#' },
      { uni: 'IIM Sirmaur', title: 'Digital Marketing', closed: true, link: '#' },
      { uni: 'IIM Mumbai', title: 'Digital Marketing & Analytics', closed: true, link: '#' },
      { uni: 'BITS School of Management', title: 'Professional Certificate in Digital Marketing and Analytics with AI', closed: true, link: '#' }
    ],
    'Cybersecurity': [
      { uni: 'iHUB DivyaSampark, IIT Roorkee', title: 'Cyber Security and Ethical Hacking with applied AI', closed: true, link: 'https://www.masaischool.com/our-program/iit-roorkee/cyber-security' },
      { uni: 'CCE, IIT MANDI', title: 'IIT Mandi Cybersecurity', closed: true, link: '#' },
      { uni: 'PwC Academy', title: 'PwC Cybersecurity and Ethical Hacking with AI', closed: true, link: '#' }
    ],
    'Finance and Technology': [
      { uni: 'PwC Academy', title: 'Certification in Financial Services and Fintech Program', closed: true, link: '#' },
      { uni: 'BITS School of Management', title: 'Executive Certification in FinTech & Artificial Intelligence', closed: true, link: '#' },
      { uni: 'IIM Trichy', title: 'Professional Certificate in FinTech & Artificial Intelligence', closed: true, link: '#' }
    ],
    'Software Development Engineering': [
      { uni: 'CCE, IIT MANDI', title: 'Minor in Embedded Systems', closed: true, link: 'https://www.masaischool.com/embedded-system' },
      { uni: 'iHUB DivyaSampark, IIT Roorkee', title: 'New Age Software Engineering Program', closed: true, link: '#' },
      { uni: 'CCE, IIT MANDI', title: 'Software development 2.0 with emerging tech', closed: true, link: '#' },
      { uni: 'Vishlesan i-Hub, IIT Patna', title: 'Software Development Engineering with Applied AI', closed: true, link: '#' },
      { uni: 'Vishlesan i-Hub, IIT Patna', title: 'Software Development Engineering with Applied AI (in Telugu)', closed: true, link: '#' },
      { uni: 'Vishlesan i-Hub, IIT Patna', title: 'Software Development Engineering with Applied AI (in Hindi)', closed: true, link: '#' },
      { uni: 'Vishlesan i-Hub, IIT Patna', title: 'Software Development Engineering with Applied AI (in Marathi)', closed: true, link: '#' },
      { uni: 'Vishlesan i-Hub, IIT Patna', title: 'Software Development Engineering with Applied AI (in Tamil)', closed: true, link: '#' },
      { uni: 'E&ICT Academy, IIT Roorkee', title: 'Software Engineering with AI Program', closed: true, link: '#' }
    ]
  };

  const displayedCourses = coursesData[activeTab] || [];

  return (
    <nav className="masai-navbar">
      <div className="masai-logo">
        masai<span className="red-dot">.</span>
      </div>

      <div className="nav-center">
        <div 
          className="mega-menu-wrapper"
          onMouseEnter={() => setIsCoursesOpen(true)}
          onMouseLeave={() => setIsCoursesOpen(false)}
        >
          <button className="nav-pill-white">
            Our Courses 
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{marginLeft: '8px', transform: isCoursesOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s'}}>
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </button>

          {isCoursesOpen && (
            <div className="mega-menu-container">
              
              {/* Left Sidebar */}
              <div className="mega-menu-sidebar">
                {categories.map((category) => (
                  <div 
                    key={category.name}
                    className={`sidebar-item ${activeTab === category.name ? 'active' : ''}`}
                    onMouseEnter={() => setActiveTab(category.name)}
                  >
                    <span className="sidebar-icon">{category.icon}</span>
                    <span className="sidebar-text">{category.name}</span>
                    <span className="sidebar-arrow">›</span>
                  </div>
                ))}
              </div>

              {/* Right Content */}
              <div className="mega-menu-content">
                <h3 className="mega-menu-title">{activeTab} Courses</h3>
                
                <div className="courses-grid-2col">
                  {displayedCourses.map((course, index) => (
                    /* The card is now an 'a' tag linking to the course! */
                    <a href={course.link} target="_blank" rel="noreferrer" className="mega-course-card" key={index}>
                      <div className="course-logo-placeholder">🎓</div>
                      <div className="course-info">
                        <p className="course-uni">{course.uni}</p>
                        <p className={`course-name ${course.closed ? 'text-grey' : ''}`}>{course.title}</p>
                        
                        {/* Red Badge Renders here if course is closed */}
                        {course.closed && (
                          <span className="badge-closed">Application Closed</span>
                        )}
                      </div>
                    </a>
                  ))}
                </div>
              </div>

            </div>
          )}
        </div>

        <span className="nav-link">For Students</span>
        <span className="nav-link">For Graduates</span>
        <span className="nav-link">For Professionals</span>
        <span className="nav-link">Hire From Us</span>
      </div>

      <div className="nav-right">
        <button className="nav-pill-red">Login / Sign up</button>
      </div>
    </nav>
  );
}
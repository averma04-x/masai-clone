// src/components/Navbar.jsx
import './Navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-left">
        {/* We can use text for now, or you can download their logo later */}
        <h2 className="logo" style={{ color: 'var(--masai-red)', fontWeight: 'bold' }}>
          Masai.
        </h2>
      </div>

      <ul className="nav-links">
        <li><a href="#courses">Courses</a></li>
        <li><a href="#fees">Fees & ISA</a></li>
        <li><a href="#events">Events</a></li>
        <li><a href="#about">About Us</a></li>
      </ul>

      <div className="nav-right">
        <button className="login-btn">Login</button>
        <button className="signup-btn">Sign Up</button>
      </div>
    </nav>
  );
}
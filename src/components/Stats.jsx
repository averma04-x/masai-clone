// src/components/Stats.jsx
import './Stats.css';

// We put the data in an array so it's easy to add or change later!
const statsData = [
  { number: '40,000+', label: 'Learners Enrolled' },
  { number: '10,000+', label: 'Graduates Placed' },
  { number: '4,000+', label: 'Hiring Partners' },
  { number: '₹7.2 LPA', label: 'Average Salary' }
];

export default function Stats() {
  return (
    <section className="stats-container">
      {statsData.map((stat, index) => (
        <div className="stat-box" key={index}>
          <h2>{stat.number}</h2>
          <p>{stat.label}</p>
        </div>
      ))}
    </section>
  );
}
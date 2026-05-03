// src/App.jsx
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats'; 
import HiringPartners from './components/HiringPartners'; 

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Stats /> 
      <HiringPartners />
    </div>
  );
}

export default App;
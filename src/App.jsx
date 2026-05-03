// src/App.jsx
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero'; // <-- 1. Import it here!

function App() {
  return (
    <div>
      <Navbar />
      <Hero /> {/* <-- 2. Add it directly under the Navbar! */}
    </div>
  );
}

export default App;
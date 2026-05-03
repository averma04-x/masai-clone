import Navbar from './components/Navbar';
import Hero from './components/Hero'; //  IIT Mandi banner
import MainHero from './components/MainHero'; // The new dark text & cards
import InstitutionalPartners from './components/InstitutionalPartners'; // The white logos

function App() {
  return (
    <>
      <Navbar />
      <Hero /> 
      <MainHero />
      <InstitutionalPartners />
    </>
  )
}

export default App;
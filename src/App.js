import './App.css';
import FAQS from './components/FAQS/FAQS';
import FeaturePage from './components/FeaturePage/FeaturePage';
import Footer from './components/Footer/Footer';
import LandingPage from './components/LandingPage/LandingPage';
import Navbar from "./components/Navbar/Navbar"

function App() {
  return (
    <div>
      <Navbar />
      <LandingPage />
      <FeaturePage />
      <FAQS />
      <Footer />
    </div>
  );
}

export default App;

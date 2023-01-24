// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import BlogsPage from './pages/BlogsPage';
import ContactPage from './pages/ContactPage';
import ServicesPage from './pages/ServicesPage';
import Portfolio from './pages/Portfolio';
import Footer from './components/Footer/Footer';
import PricePage from './pages/PricePage';

function App() {
  return (
    <div className="App">

      <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Blogs/" element={<BlogsPage />} />
          <Route path="/About/" element={<AboutPage />} />
          <Route path="/Contact/" element={<ContactPage />} />
          <Route path="/Services/" element={<ServicesPage />} />
          <Route path="/Price/" element={<PricePage />} />
          <Route path="/Portfolio/" element={<Portfolio />} />
        </Routes>
        <Footer />
      </Router>
      
    </div>
  );
}

export default App;

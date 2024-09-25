import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Use Routes instead of Switch
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'font-awesome/css/font-awesome.min.css';
import Navbar from './components/abcd'; // Ensure Navbar is correctly referenced
import Main from './components/Mainarea'; // Keep this if it's your main content
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import AboutPage from './components/AboutPage'; // Import your AboutPage component
import Services from './components/Services'; // Import your AboutPage component
import ServiceDetails from './components/ServiceDetails';
import Projects from './components/Projects';
import ProjectDetails from './components/ProjectDetails';
import TeamSection from './components/Team';
import TeamMemberDetails from './components/TeamMember';
import FaqPage from './components/FaqPage';
import BlogPage from './components/Blog';
import ContactPage from './components/ContactPage';
import WhatsAppWidget from './components/Whatsapp';
function App() {
  return (
    <Router>
      <Navbar />
      <Routes> {/* Use Routes instead of Switch */}
        <Route path="/" element={<Main />} /> {/* Updated to use element prop */}
        <Route path="/about" element={<AboutPage />} /> {/* Updated to use element prop */}
        <Route path="/services" element={<Services />} /> {/* Updated to use element prop */}
        <Route path="/service-details" element={<ServiceDetails />} /> {/* Updated to use element prop */}
        <Route path="/projects" element={<Projects />} /> {/* Updated to use element prop */}
        <Route path="/project-details" element={<ProjectDetails />} /> {/* Updated to use element prop */}
        <Route path="/team" element={<TeamSection />} /> {/* Updated to use element prop */}
        <Route path="/team-details" element={<TeamMemberDetails />} /> {/* Updated to use element prop */}
        <Route path="/faq" element={<FaqPage />} /> {/* Updated to use element prop */}
        <Route path="/blog-grid" element={<BlogPage />} /> {/* Updated to use element prop */}
        <Route path="/contact" element={<ContactPage />} /> {/* Updated to use element prop */}
        {/* You can add more routes here as needed */}
      </Routes>
      <Footer />
      <BackToTop />
      <WhatsAppWidget />
    </Router>
  );
}

export default App;
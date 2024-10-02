import React from 'react';
import { Route, Routes } from 'react-router-dom'; // Only import Route and Routes
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'font-awesome/css/font-awesome.min.css';
import Navbar from './components/abcd';
import Main from './components/Mainarea';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import AboutPage from './components/AboutPage';
import Services from './components/Services';
import ServiceDetails from './components/ServiceDetails';
import Projects from './components/Projects';
import ProjectDetails from './components/ProjectDetails';
import TeamSection from './components/Team';
import TeamMemberDetails from './components/TeamMember';
import BlogPage from './components/Blog';
import ContactPage from './components/ContactPage';
import WhatsAppWidget from './components/Whatsapp';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<Services />} />
        <Route path="/service-details" element={<ServiceDetails />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/project-details" element={<ProjectDetails />} />
        <Route path="/team" element={<TeamSection />} />
        <Route path="/team-details" element={<TeamMemberDetails />} />
        <Route path="/blog-grid" element={<BlogPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
      <BackToTop />
      <WhatsAppWidget />
    </>
  );
}

export default App;
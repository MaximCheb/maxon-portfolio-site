import React  from 'react';
// import { useTranslation } from "react-i18next";

import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import "./styles/main.css"

import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home";
import Footer from "./components/footer/Footer";
// import Work from "./pages/Works";
import Project from './pages/Project';
import Projects from './pages/Projects';
import Contacts from './pages/Contacts';
// import About from './pages/About';


function App() {
  // const { t, i18n, ready } = useTranslation();

  // const changeLanguage = (lng) => {
  //   i18n.changeLanguage(lng);
  // };
  return (
    <div className="App">  
    <Router>
			{/* <ScrollToTop />  	 */}
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          {/* <Route path="/about" element={<About />} /> */}
          <Route path="/project/:id" element={<Project />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
        <Footer />
    </Router>
    </div>
  );
}

export default App;

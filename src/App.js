import React  from 'react';
// import { useTranslation } from "react-i18next";

import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import "./styles/main.css"

import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home";
import Footer from "./components/footer/Footer";
import Project from './pages/Project';
import Projects from './pages/Projects';
import Contacts from './pages/Contacts';


function App() {
  return (
    <div className="App">  
    <Router>
			{/* <ScrollToTop />  	 */}
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/project/:id" element={<Project />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
        <Footer />
    </Router>
    </div>
  );
}

export default App;

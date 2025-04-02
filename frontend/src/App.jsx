import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./pages/About";
import Ameniti from "./pages/Ameniti";
import Floorplan from "./pages/Floorplan";
import LifeStyle from "./pages/LifeStyle";
import Contact from "./pages/Contact";
import ResidentsOnly from "./pages/ResidentsOnly";
import LeaseRenewalApplicationForm from "./pages/LeaseRenewalApplicationForm";
import ArchitecturalModificationForm from "./pages/ArchitecturalModificationForm";
import CommonAreaHallwayModification from "./pages/CommonAreaHallwayModification";
import ResidentRegistrationForm from "./pages/ResidentRegistrationForm";
import WindMitigationReport from "./pages/WindMitigationReport";
import PetRegitrationForm from "./pages/PetRegitrationForm";
import Discipline from "./pages/Discipline";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/amenities" element={<Ameniti />} />
        <Route path="/floor-plan" element={<Floorplan />} />
        <Route path="/life-style" element={<LifeStyle />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/residentsOnly" element={<ResidentsOnly />} />
        <Route path="/leaseRenewalApplicationForm" element={<LeaseRenewalApplicationForm />} />
        <Route path="/architecturalModificationForm" element={<ArchitecturalModificationForm />} />
        <Route path="/commonAreaHallwayModification" element={<CommonAreaHallwayModification />} />
        <Route path="/residentRegistrationForm" element={<ResidentRegistrationForm />} />
        <Route path="/windMitigationReport" element={<WindMitigationReport />} />
        <Route path="/petRegitrationForm" element={<PetRegitrationForm />} />
        <Route path="/discipline" element={<Discipline />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;

import { Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./components/pages/HomePage.jsx";
import Careers from "./components/pages/Careers.jsx";
import Research from "./components/pages/Research.jsx";
import Manifesto from "./components/pages/Manifesto.jsx";

export default function App() {
  return (
    <div className="font-sans bg-white text-gray-900">
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/manifesto" element={<Manifesto />} />
          <Route path="/research" element={<Research />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

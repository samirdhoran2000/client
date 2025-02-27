import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomeComponents";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SLAPage from "./page/SLAPage";
import FDMPage from "./page/FDMPage";
import ReverseEngineeringPage from "./page/ReverseEngineeringPage";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/3d-services/sla" element={<SLAPage />} />
          <Route path="/3d-services/fdm" element={<FDMPage />} />
          <Route path="/engineering/reverse-engineering" element={<ReverseEngineeringPage />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;

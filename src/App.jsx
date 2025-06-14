import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";
import ScrollToTop from "./Components/ScrollToTop";
import BackToTop from "./Components/BackToTop";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Resume from "./Pages/Resume";
import Project from "./Pages/Project";
import Blog from "./Pages/Blog";

function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Header />
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/projects" element={<Project />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
        </div>
        <BackToTop />
      </Router>
    </>
  );
}

export default App;
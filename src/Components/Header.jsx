import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const navItems = ["Home", "About", "Resume", "Projects", "Blog", "Contact"];

export default function Header({ activeSection, setActiveSection }) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`navbar fixed-top ${isScrolled ? "bg-dark shadow-lg" : "bg-transparent"} transition`}
      style={{ backdropFilter: isScrolled ? "blur(10px)" : "none" }}
    >
      <div className="container py-2">
        {/* Mobile - Centered */}
        <div className="d-flex d-sm-none justify-content-center w-100">
          <div
            className={`rounded-pill text-center px-4 py-2 ${isScrolled ? "bg-dark" : "bg-secondary bg-opacity-50"}`}
          >
            {navItems.map((item) => (
              <Link
                key={item}
                to={item === "Home" ? "/" : `/${item.toLowerCase()}`} // Check for "Home"
                className={`btn btn-sm border-0 text-light mx-1 ${
                  activeSection === item.toLowerCase() ? "text-danger" : "text-secondary"
                }`}
                onClick={() => setActiveSection(item.toLowerCase())} // Update active section
              >
                {item}
              </Link>
            ))}
          </div>
        </div>

        {/* Desktop - Right-Aligned */}
        <div className="d-none d-sm-flex w-100">
          <div className="ms-auto">
            <div
              className={`rounded-pill px-4 py-2 ${isScrolled ? "bg-dark" : "bg-secondary bg-opacity-50"}`}
            >
              {navItems.map((item) => (
                <Link
                  key={item}
                  to={item === "Home" ? "/" : `/${item.toLowerCase()}`} // Check for "Home"
                  className={`btn btn-sm text-light mx-1 ${
                    activeSection === item.toLowerCase() ? "text-warning" : "text-secondary"
                  }`}
                  onClick={() => setActiveSection(item.toLowerCase())} // Update active section
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}

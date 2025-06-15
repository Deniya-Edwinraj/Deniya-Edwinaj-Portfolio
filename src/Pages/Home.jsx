import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Code2,
  Layout,
  Github,
  Linkedin,
  User,
} from "lucide-react";
import { FaGithub, FaLinkedinIn, FaMedium } from "react-icons/fa";
import Profile from "../assets/Images/2.png";

export default function Home() {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "auto";
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const services = [
    {
      title: "Web Design",
      icon: Layout,
      description:
        "Crafting visually stunning and user-focused designs that combine aesthetics with functionality. Every layout is built with accessibility, scalability, and strong brand identity in mind.",
    },
    {
      title: "Web Development",
      icon: Code2,
      description:
        "Delivering end-to-end development solutions, from responsive front-end interfaces to powerful back-end systems. Emphasizing performance, smooth UX, and future-ready scalability.",
    },
  ];

  const contactInfo = [
    { label: "EMAIL", value: "deniyaedwinraj@gmail.com", icon: Mail },
    { label: "PHONE", value: "070 703 2334", icon: Phone },
    { label: "LOCATION", value: "Jaffna, Sri Lanka", icon: MapPin },
  ];

  const icons = [
    {
      id: 1,
      name: "GitHub",
      icon: <FaGithub />,
      bg: "bg-danger",
      url: "https://github.com/Deniya-Edwinraj",
    },
    {
      id: 2,
      name: "LinkedIn",
      icon: <FaLinkedinIn />,
      bg: "bg-danger",
      url: "https://www.linkedin.com/in/deniya-edwinraj/",
    },
    {
      id: 3,
      name: "Medium",
      icon: <FaMedium />,
      bg: "bg-danger",
      url: "https://medium.com/@deniyaedwinraj",
    },
  ];

  const [hoveredIndex, setHoveredIndex] = useState(null);
  return (
    <section id="home" className="text-light py-5 mt-5">
      <div className="container">
        <div className="row g-5">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="col-md-5"
          >
            <div className="shadow-box bg-dark rounded-4 p-4">
              <div className="red-shadow d-inline-flex align-items-center justify-content-center rounded-circle">
                <User color="#fff" size={28} />
              </div>

              <h1 className="display-5 mt-3 fw-bold">
                Hi, I’m <span className="icon">Deniya</span>
              </h1>
              <p className="fs-5 text-secondary">Full Stack Developer</p>
              <div className="pt-2">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <div key={index} className="mb-3">
                      <div className="d-flex align-items-center gap-2">
                        <div className="text-danger">
                          <Icon size={18} />
                        </div>{" "}
                        <a
                          href={
                            info.label === "EMAIL"
                              ? `mailto:${info.value}`
                              : info.label === "PHONE"
                              ? `tel:${info.value.replace(/\s+/g, "")}`
                              : info.label === "LOCATION"
                              ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                                  info.value
                                )}`
                              : "#"
                          }
                          className="text-light small text-decoration-none"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {info.value}
                        </a>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="d-flex gap-2 justify-content-start align-items-end">
                {icons.map((item, index) => (
                  <a
                    key={item.id}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-decoration-none"
                  >
                    <div
                      className="position-relative text-center"
                      style={{
                        width: "3.5rem",
                        height: "3.5rem",
                        overflowX: "visible",
                        overflowY: "clip",
                      }}
                    >
                      <div
                        className={`rounded-circle d-flex justify-content-center align-items-center position-absolute top-0 start-0 text-white mt-3 social-shadow`}
                        style={{
                          // width: "3.5rem",
                          // height: "3.5rem",
                          transform:
                            hoveredIndex === index ? "scale(0.6)" : "scale(1)",
                          transformOrigin: "top",
                          transition: "transform 0.3s",
                        }}
                        onMouseOver={() => setHoveredIndex(index)}
                        onMouseOut={() => setHoveredIndex(null)}
                      >
                        {item.icon}
                      </div>

                      <div
                        className="position-absolute text-light end-0 text-center translate-middle-x"
                        style={{
                          bottom: hoveredIndex === index ? "0" : "-1.5rem",
                          transition: "bottom 0.3s",
                          fontSize: "0.6rem",
                          fontWeight: "300",
                          letterSpacing: "0.5px",
                        }}
                      >
                        {item.name}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="shadow-box rounded-4 mt-3 p-4">
              <p className="fs-6 text-secondary">
                Download my curriculum vitae:
              </p>
              <div className="d-flex gap-3 justify-content-start align-items-end">
                <a
                  href="https://drive.google.com/file/d/1vhYj_YwD0y5e0ea4Zedmvl3o41X96OgA/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button text-decoration-none"
                >
                  Download CV
                </a>
                <a
                  href="mailto:deniyaedwinraj@gmail.com?subject=Hiring%20Opportunity&body=Hi%2C%20I%27m%20interested%20in%20discussing%20a%20project%20with%20you."
                  className="button text-decoration-none"
                >
                  Hire Me
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="col-md-7"
          >
            <div
              className="rounded-4 p-5 shadow-box overflow-hidden"
              style={{ height: "550px" }}
            >
              <img
                src={Profile}
                alt="Profile"
                className="w-100 h-100 rounded mb-4"
                style={{ objectFit: "cover" }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

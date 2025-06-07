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
import {
  contactInfo,
  icons,
  experienceData,
  services,
  educationData,
} from "../Constants/Data";
import ExperienceCard from "../Components/ExperienceCard";

export default function About() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  return (
    <section id="about" className="text-light py-5 mt-5">
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
              <p className="fs-5 m-0 text-secondary">Full Stack Developer</p>
              <div className="pt-2">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <div key={index} className="mb-3">
                      <div className="d-flex align-items-center gap-2">
                        <div className="text-danger">{info.icon}</div>
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

              <div className="d-flex gap-3 justify-content-start align-items-end">
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
                        className="position-absolute text-light end-0 translate-middle-x"
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
          </motion.div>

          {/* Right Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="col-md-7"
          >
            <div className="my-4">
              <h1 className="display-6 fw-bold">About Me</h1>
              <div
                className="bg-danger"
                style={{ width: "60px", height: "4px" }}
              ></div>
              <p className="mt-3 text-light">
                I'm Deniya Edwinraj - a Full Stack Developer based in Sri Lanka.
                With a passion for building clean, efficient, and scalable web
                applications, I specialize in both frontend and backend
                development. Whether it's crafting user-friendly interfaces or
                architecting powerful backend systems, I love turning ideas into
                reality through code. I'm always up for a challenge and
                constantly explore new technologies to deliver modern, impactful
                solutions.
              </p>
            </div>
            <div className="shadow-box rounded-4 mt-3 p-4">
              <p className="fs-6 text-secondary">
                Download my curriculum vitae:
              </p>
              <div className="d-flex gap-5 justify-content-start align-items-end">
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
        </div>

        <motion.div
          initial={{ opacity: 0, x: 100, y: -50 }} // starts off to the right and above
          whileInView={{ opacity: 1, x: 0, y: 0 }} // animates to its natural position
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="col-md-12"
        >
          <div className="my-5">
            <h1 className="display-6 fw-bold mb-4">What I'm Doing</h1>
            <div className="row g-4">
              {services.map((service, index) => (
                <div key={index} className="col-md-3">
                  <div className="p-4 shadow-box rounded-4 h-100">
                    <div className="text-danger mb-3">{service.icon}</div>
                    <h5 className="fw-semibold">{service.title}</h5>
                    <p className="small text-light">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <div className="row py-5 d-flex justify-content-center align-items-center text-center">
          <p className="text-danger">Over 1 years of experience</p>
          <h1 className="display-4 fw-bold">My Experience</h1>
          <div
            className="bg-danger"
            style={{ width: "60px", height: "4px" }}
          ></div>
          <div className="mt-4">
            {experienceData.map((item, index) => (
              <ExperienceCard
                key={index}
                year={item.year}
                title={item.title}
                role={item.role}
                description={item.description}
                imageSrc={item.imageSrc}
              />
            ))}
          </div>
        </div>

        <div className="row py-5 d-flex justify-content-center align-items-center text-center">
          <p className="text-danger">Phd, Master and Bachelo</p>
          <h1 className="display-4 fw-bold">My Education</h1>
          <div
            className="bg-danger"
            style={{ width: "60px", height: "4px" }}
          ></div>
          <div className="mt-4">
            {educationData.map((item, index) => (
              <ExperienceCard
                key={index}
                year={item.year}
                title={item.title}
                role={item.role}
                description={item.description}
                imageSrc={item.imageSrc}
              />
            ))}
          </div>
        </div>

        {/* Right Column */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="col-md-12"
        >
          <div className="shadow-box rounded-4 mt-3 p-4 justify-content-center align-items-center text-center">
            <h1 className="display-4 fw-bold">My Achievements</h1>

            {/* Centered red line */}
            <div
              className="bg-danger mx-auto"
              style={{ width: "60px", height: "4px" }}
            ></div>

            <h6 className="card-title text-light text-start mt-4">
              Yaal Geeks Challenge (2023) participation - YGC Innovation
              Festival
            </h6>

            <p className="fs-6 text-secondary text-start mt-2">
              I took part in the Yaal Geek Challenge, representing my startup
              idea. I participated in the Startup Essential Accelerator Program,
              which was organised by Yaal IT Hub. I proposed that we sell
              eco-friendly paper-made event decorations and decorative
              ornaments. I advanced to the final round to present my final
              presentation to 20 teams. This participation provides me many
              benefits like One-to-One Mentoring, Continuous Monitoring, Seed
              Funding, Networking Opportunities, Business Training, and
              Showcasing Opportunities.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ReCAPTCHA from "react-google-recaptcha";
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

export default function Contact() {
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
      url: "https://github.com/your-username",
    },
    {
      id: 2,
      name: "LinkedIn",
      icon: <FaLinkedinIn />,
      bg: "bg-danger",
      url: "https://www.linkedin.com/in/your-profile",
    },
    {
      id: 3,
      name: "Medium",
      icon: <FaMedium />,
      bg: "bg-danger",
      url: "https://medium.com/@your-profile",
    },
  ];

  
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    fullName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [recaptchaVerified, setRecaptchaVerified] = useState(false); // To check if reCAPTCHA is verified

  const regex = {
    fullName: /^[a-zA-Z\s]{3,}$/, // At least 3 characters, only letters and spaces
    email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, // Email pattern
    phone: /^[0-9]{10}$/, // Valid 10-digit phone number
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    if (regex[name] && !regex[name].test(value)) {
      setErrors({
        ...errors,
        [name]: `${name.charAt(0).toUpperCase() + name.slice(1)} is invalid.`,
      });
    } else {
      setErrors({
        ...errors,
        [name]: "",
      });
    }
  };

  const handleRecaptcha = (value) => {
    if (value) {
      setRecaptchaVerified(true); // Set reCAPTCHA as verified
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (recaptchaVerified) {
      // Form submit logic here (e.g., API call or form handling)
      alert("Form submitted successfully!");
    } else {
      alert("Please verify that you are human!");
    }
  };

  return (
    <section id="contact" className="text-light py-5 mt-5">
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
                  const Icon = info.icon; // 👈 Assign the component
                  return (
                    <div key={index} className="mb-3">
                      <div className="d-flex align-items-center gap-2">
                        <div className="text-danger">
                          <Icon size={18} />
                        </div>{" "}
                        {/* ✅ Fixed here */}
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
            <div className="container shadow-box rounded-4 p-4">
              <h1 className="display-6 fw-bold">Contact Me</h1>
              <div
                className="bg-danger"
                style={{ width: "60px", height: "4px" }}
              ></div>
              <form onSubmit={handleSubmit}>
                {/* Full Name and Email Row */}
                <div className="row my-3">
                  <div className="col-md-6">
                    <label htmlFor="fullName" className="form-label">
                      Full Name
                    </label>
                    <input
                      type="text"
                      className={`form-control ${
                        errors.fullName ? "is-invalid" : ""
                      }`}
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                    />
                    {errors.fullName && (
                      <div className="invalid-feedback text-danger">
                        {errors.fullName}
                      </div>
                    )}
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="email" className="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      className={`form-control ${
                        errors.email ? "is-invalid" : ""
                      }`}
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                    {errors.email && (
                      <div className="invalid-feedback text-danger">
                        {errors.email}
                      </div>
                    )}
                  </div>
                </div>

                {/* Phone Number and Subject Row */}
                <div className="row mb-3">
                  <div className="col-md-6">
                    <label htmlFor="phone" className="form-label">
                      Phone Number
                    </label>
                    <input
                      type="text"
                      className={`form-control ${
                        errors.phone ? "is-invalid" : ""
                      }`}
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                    {errors.phone && (
                      <div className="invalid-feedback text-danger">
                        {errors.phone}
                      </div>
                    )}
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="subject" className="form-label">
                      Subject
                    </label>
                    <input
                      type="text"
                      className={`form-control ${
                        errors.subject ? "is-invalid" : ""
                      }`}
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                    />
                    {errors.subject && (
                      <div className="invalid-feedback text-danger">
                        {errors.subject}
                      </div>
                    )}
                  </div>
                </div>

                {/* Message Row */}
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">
                    Message
                  </label>
                  <textarea
                    className={`form-control ${
                      errors.message ? "is-invalid" : ""
                    }`}
                    id="message"
                    name="message"
                    rows="3"
                    value={formData.message}
                    onChange={handleChange}
                  />
                  {errors.message && (
                    <div className="invalid-feedback text-danger">
                      {errors.message}
                    </div>
                  )}
                </div>

                {/* reCAPTCHA Row */}
                <div className="mb-3">
                  <ReCAPTCHA
                    sitekey="6LcVdPsqAAAAAFeo84JcbbftJHjL6T0UKf0KCAjQ"
                    onChange={handleRecaptcha}
                    theme="dark"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="button fw-bold"
                  disabled={
                    Object.values(errors).some((err) => err !== "") ||
                    !recaptchaVerified
                  }
                >
                  Submit
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

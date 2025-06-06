import { FaGithub, FaLinkedinIn, FaMedium } from 'react-icons/fa';
import { Mail, Phone, MapPin } from 'lucide-react'; 
import experience1 from "../assets/Images/4.png";
import experience2 from "../assets/Images/5.png";
import education1 from "../assets/Images/e1.jpeg";
import education3 from "../assets/Images/e3.jpeg";
import {
  FaLaptopCode,
  FaCode,
  FaServer,
  FaShieldAlt,
  FaRocket,
  FaTools,
} from "react-icons/fa";


export const services = [
  {
    title: "Web Design",
    icon: <FaLaptopCode size={28} />,
    description:
      "Crafting visually appealing, responsive, and brand-aligned website layouts with a focus on user experience, accessibility, and modern design trends.",
  },
  {
    title: "Web Development",
    icon: <FaCode size={28} />,
    description:
      "Building robust, scalable web applications using modern frameworks and best practices — from static websites to full-stack dynamic platforms.",
  },
  {
    title: "Frontend Services",
    icon: <FaCode size={28} />,
    description:
      "Developing intuitive, responsive user interfaces with technologies like React, Vite, or Next — ensuring smooth user interactions and cross-device compatibility.",
  },
  {
    title: "Backend Services",
    icon: <FaServer size={28} />,
    description:
      "Implementing secure and efficient server-side logic, APIs, and database integrations using Node.js, Express, MongoDB, and more.",
  },
  {
    title: "Security & Optimization",
    icon: <FaShieldAlt size={28} />,
    description:
      "Enhancing website performance, applying SEO best practices, and securing apps with encryption, authentication, and vulnerability protection techniques.",
  },
  {
    title: "DevOps & Deployment",
    icon: <FaRocket size={28} />,
    description:
      "Automating deployment workflows, managing cloud hosting (AWS, Vercel, Cpanel), and setting up CI/CD pipelines to ensure fast and reliable software delivery.",
  },
  {
    title: "Maintenance & Support",
    icon: <FaTools size={28} />,
    description:
      "Providing ongoing technical support, bug fixes, updates, and performance monitoring to keep your application running smoothly post-launch.",
  },
];

export const contactInfo = [
    { label: "EMAIL", value: "deniyaedwinraj@gmail.com", icon: <Mail size={20}/> },
    { label: "PHONE", value: "070 703 2334", icon: <Phone size={20}/> },
    { label: "LOCATION", value: "Jaffna, Sri Lanka", icon: <MapPin size={20}/> },
  ];

export const icons = [
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

export const experienceData = [
  {
    year: "2024 November – Present",
    title: "ADADA DIGITAL PVT LTD",
    role: "Frontend Web Developer",
    description: "Building and optimizing responsive web interfaces using modern frameworks, with a focus on performance, accessibility, and user experience.",
    imageSrc: experience2,
  },
  {
    year: "2024 April – 2024 November",
    title: "Uki Technology School",
    role: "Intern Assistant Lecturer",
    description: "Assisted in delivering coding bootcamps and mentoring students on web development fundamentals, project building, and industry best practices.",
    imageSrc: experience1,
  },
];

export const educationData = [
  {
    year: "2024 – 2027",
    title: "University of Colombo School of Computing",
    role: "Bachelor of Information Technology",
    imageSrc: education3,
  },
  {
    year: "2023 August – 2024 March",
    title: "Uki Technology School",
    role: "Full-stack Web Development.",
    imageSrc: experience1,
  },
    {
    year: "2007 - 2022",
    title: "Uki Technology School",
    role: "Advanced Level in Pysical Science, Secondary Education, Primary Education",
    imageSrc: education1,
  },
];

export const blogData = [
  {
    image: 'https://source.unsplash.com/400x300/?podcast,studio',
    category: 'Application',
    time: '5 min read',
    title: 'Mobile app landing design & app maintain',
  },
  {
    image: 'https://source.unsplash.com/400x300/?coding,react',
    category: 'Development',
    time: '8 min read',
    title: 'React Hooks best practices in 2025',
  },
    {
    image: 'https://source.unsplash.com/400x300/?podcast,studio',
    category: 'Application',
    time: '5 min read',
    title: 'Mobile app landing design & app maintain',
  },
  {
    image: 'https://source.unsplash.com/400x300/?coding,react',
    category: 'Development',
    time: '8 min read',
    title: 'React Hooks best practices in 2025',
  }
];
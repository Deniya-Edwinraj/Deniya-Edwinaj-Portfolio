import {
  FaBalanceScale,
  FaChartLine,
  FaGithub,
  FaGlobe,
  FaJava,
  FaLinkedinIn,
  FaMedium,
  FaNodeJs,
  FaPhp,
  FaProjectDiagram,
  FaSitemap,
  FaUserCog,
  FaUsers,
} from "react-icons/fa";
import { Mail, Phone, MapPin } from "lucide-react";
import experience1 from "../assets/Images/4.png";
import experience2 from "../assets/Images/5.png";
import education1 from "../assets/Images/e1.jpeg";
import education3 from "../assets/Images/e3.jpeg";
import project1 from "../assets/Images/p1.png";
import project2 from "../assets/Images/p2.png";
import project3 from "../assets/Images/p3.png";

import {
  FaLaptopCode,
  FaCode,
  FaServer,
  FaShieldAlt,
  FaRocket,
  FaTools,
} from "react-icons/fa";

import {
  FaJs,
  FaPython,
  FaBootstrap,
  FaReact,
  FaTrello,
  FaSlack,
  FaJira,
  FaGoogleDrive,
} from "react-icons/fa";
import {
  SiMongodb,
  SiGoogledocs,
  SiGooglesheets,
  SiGoogleclassroom,
  SiGooglemeet,
  SiTailwindcss,
  SiMaterialdesign,
  SiFigma,
  SiExpress,
  SiVite,
  SiNextdotjs,
  SiLaravel,
  SiMysql,
  SiShopify,
  SiBitbucket,
  SiGoogleanalytics,
  SiGit,
  SiSemrush,
  SiCss3,
  SiOpenproject,
} from "react-icons/si";
import { MdCall, MdDesignServices, MdOutlineChecklist } from "react-icons/md";
import { GiMeditation, GiPublicSpeaker } from "react-icons/gi";
import {
  BsPeopleFill,
  BsPersonCheck,
  BsChatSquareQuote,
  BsFillPuzzleFill,
} from "react-icons/bs";
import { FaEarListen, FaListCheck } from "react-icons/fa6";
import { HiOutlineUserGroup } from "react-icons/hi";
import { TbArrowsShuffle } from "react-icons/tb";

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
  {
    label: "EMAIL",
    value: "deniyaedwinraj@gmail.com",
    icon: <Mail size={20} />,
  },
  { label: "PHONE", value: "070 703 2334", icon: <Phone size={20} /> },
  { label: "LOCATION", value: "Jaffna, Sri Lanka", icon: <MapPin size={20} /> },
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
    description:
      "Building and optimizing responsive web interfaces using modern frameworks, with a focus on performance, accessibility, and user experience.",
    imageSrc: experience2,
  },
  {
    year: "2024 April – 2024 November",
    title: "Uki Technology School",
    role: "Intern Assistant Lecturer",
    description:
      "Assisted in delivering coding bootcamps and mentoring students on web development fundamentals, project building, and industry best practices.",
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
    role: "Full-stack Web Development",
    imageSrc: experience1,
  },
  {
    year: "2007 - 2022",
    title: "Chundikuli Girls' College",
    role: "Advanced Level in Pysical Science stream, Secondary Education, Primary Education",
    imageSrc: education1,
  },
];

export const projectData = [
  {
    image: project3,
    category: "Full Stack",
    title: "Mr.Bot AI Chatbot",
    technology: "React js, Node js, MongoDB, Express, Nodemailer, Gemini API",
    description:
      "An AI-powered chatbot that interacts with users intelligently using the Gemini API. Ideal for customer support or education platforms, this chatbot offers smart responses, email integration, and conversation logging.",
    url: "https://mrbot-frontend.vercel.app/",
    githubUrl: "https://github.com/Deniya-Edwinraj/Mr.Bot-Frontend",
  },
  {
    image: project1,
    category: "Full Stack",
    title: "MASK Ecommerce website",
    technology:
      "React js, Node js, MongoDB, Express, Cloudinary, Nodemailer, Multer",
    description:
      "A fully functional e-commerce platform where users can browse, search, and purchase products. Features include authentication, cart management, image uploads, and order handling with admin approval.",
    url: "https://frontend-mask.vercel.app/",
    githubUrl: "https://github.com/Deniya-Edwinraj/frontend-MASK",
  },
  {
    image: project2,
    category: "Full Stack",
    title: "MASK Ecommerce Admin",
    technology:
      "Vite js, Node js, MongoDB, Express, Cloudinary, Nodemailer, Multer",
    description:
      "An admin dashboard for managing the MASK Ecommerce platform. Admins can manage products, view orders, control inventory, and monitor user activities through a clean and responsive interface.",
    url: "https://mask-admin.vercel.app/",
    githubUrl: "https://github.com/Deniya-Edwinraj/MASK-Admin",
  },
];

export const Tskills = {
  programming: [
    { name: "Javascript", icon: <FaJs /> },
    { name: "Python", icon: <FaPython /> },
    { name: "React js", icon: <FaReact /> },
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "Node js", icon: <FaNodeJs /> },
    { name: "Express", icon: <SiExpress /> },
    { name: "Vite", icon: <SiVite /> },
    { name: "Next js", icon: <SiNextdotjs /> },
    { name: "Java", icon: <FaJava /> },
    { name: "PHP", icon: <FaPhp /> },
    { name: "Laravel", icon: <SiLaravel /> },
    { name: "MYSQL", icon: <SiMysql /> },
    { name: "Shopify", icon: <SiShopify /> },
    { name: "Git", icon: <SiGit /> },
    { name: "GitHub", icon: <FaGithub /> },
    { name: "BitBucket", icon: <SiBitbucket /> },
    { name: "SEO", icon: <FaGlobe /> },
    { name: "Data Science", icon: <FaChartLine /> },
  ],
  styling: [
    { name: "Bootstrap", icon: <FaBootstrap /> },
    { name: "Material UI", icon: <SiMaterialdesign /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    { name: "Cascading Style Sheets", icon: <SiCss3 /> },
  ],
  productivityTools: [
    { name: "Trello", icon: <FaTrello /> },
    { name: "Slack", icon: <FaSlack /> },
    { name: "Jira board", icon: <FaJira /> },
    { name: "Google Docs", icon: <SiGoogledocs /> },
    { name: "Google Sheets", icon: <SiGooglesheets /> },
    { name: "Google Drive", icon: <FaGoogleDrive /> },
    { name: "Google Classroom", icon: <SiGoogleclassroom /> },
    { name: "Google Meet", icon: <SiGooglemeet /> },
    { name: "Zoom", icon: <SiGooglemeet /> },
    { name: "Mirosoft Teams", icon: <MdCall /> },

    { name: "Wireframing", icon: <MdDesignServices /> },
    { name: "Canva", icon: <MdDesignServices /> },
    { name: "Figma", icon: <SiFigma /> },
  ],
  projectManagement: [
    { name: "Agile", icon: <SiOpenproject /> },
    { name: "Scrum", icon: <FaUserCog /> },
    { name: "Project Management", icon: <FaProjectDiagram /> },
  ],
};

export const Sskills = [
  { name: "Leadership", icon: <BsPersonCheck /> },
  { name: "Communication", icon: <BsChatSquareQuote /> },
  { name: "Teamwork", icon: <BsPeopleFill /> },
  { name: "Public speech", icon: <GiPublicSpeaker /> },
  { name: "Adaptation", icon: <BsFillPuzzleFill /> },
  { name: "Problem Solving", icon: <FaTools /> },
  { name: "Critical Thinking", icon: <FaShieldAlt /> },
  { name: "Time Management", icon: <FaRocket /> },
  { name: "Creativity", icon: <FaLaptopCode /> },
  { name: "Conflict Resolution", icon: <FaBalanceScale /> },
  { name: "Decision Making", icon: <FaSitemap /> },
  { name: "Active Listening", icon: <FaEarListen /> },
  { name: "Collaboration", icon: <FaUsers /> },
  { name: "Networking", icon: <HiOutlineUserGroup /> },
  { name: "Flexibility", icon: <TbArrowsShuffle /> },
  { name: "Stress Management", icon: <GiMeditation /> },
  { name: "Self-Motivation", icon: <FaRocket /> },
  { name: "Conflict Management", icon: <FaShieldAlt /> },
  { name: "Accountability", icon: <MdOutlineChecklist /> },
];

export const educationtimelineData = [
  {
    title: "Bachelor of Information Technology",
    job: "University of Colombo School of Computing (2025 – 2027)",
    description:
      "BIT is the Bachelor of Information Technology Degree (External) programme introduced by the University of Colombo School of Computing (UCSC),",
  },
  {
    title: "Full-stack Web Development",
    job: "Uki Technology School (2023 August – 2024 March)",
    description:
      "Uki Accelarator Programme Six-month certificate course for full-stack web development.",
  },
  {
    title: "Advanced Level",
    job: "Chundikuli Girls College (2022)",
    description:
      "Very Good Pass in Combine Mathematics, Credit Pass in Chemistry, Ordinary Pass in Physics",
  },
  {
    title: "Ordinary Level",
    job: "Chundikuli Girls College (2018)",
    description:
      "Distinction Pass in English, ICT, History, Very Good Pass in Tamil, Christianity, Mathematics, Commerce and Credit Pass in Art, Science",
  },
];

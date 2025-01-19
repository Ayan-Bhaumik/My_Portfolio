import {
  c,
  python,
  java,
  cpp,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  git,
  edunet,
  weatherpedia,
  termpw,
  payloadmaster,
  threejs,
  mhft,
  sketcher,
  mathwork,
  CompileVortex,
  eduskill,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export const services = [
  { title: "C", icon: c },
  { title: "C++", icon: cpp },
  { title: "Python", icon: python },
  { title: "Java", icon: java },
];

export const technologies = [
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "Rect JS", icon: reactjs },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Node JS", icon: nodejs },
  { name: "Three JS", icon: threejs },
  { name: "git", icon: git },
];

export const experiences = [
  {
    title: "CTO",
    company_name: "Apni Estate",
    icon: eduskill,
    iconBg: "#161329",
    date: "Dec 2024 - Present",
    points: [
      "Collaborated with cross-functional teams to develop and launch new features for smooth user experience, services, and deployment.",
      "Contributing to a 35% in success of the project.",
    ],
  },

  {
    title: "Artificial Intelligence Intern",
    company_name: "The ICFAI University, Tripura",
    icon: edunet,
    iconBg: "#161329",
    date: "Oct 2024 - Dec 2024",
    points: [
      "Engineered a comprehensive AI DDM model utilizing PyQt5 (frontend), dotenv, subprocess, threading, json, os, time (backend).",
      "Maximized the model's performance by refining model parameters and employing ensemble methods, yielding an outstanding accuracy percentage of 94.50%.",
      "Designed to continuously learn and adapt through interactions with users and by processing real-world data.",
    ],
  },

  {
    title: "Web App & Android Development Intern",
    company_name: "OraRide | Insyssky",
    icon: mathwork,
    iconBg: "#161329",
    date: "June 2024 - July 2024",
    points: [
      "Completed Web App & Android Development internship, gaining a strong foundation in Figma & Andoid Studio including data analysis and processing.",
      "Acquired practical skills in React JS, Kotlin, Flutter, TS, TCSS, CSS & HTML.",
      "Directly work with OraRide development team to develop & deploy their Web App.",
      "Developed expertise in Web App & Android Development.",
    ],
  },
 
];

export const socialLinks = [
  {
    name: "LinkedIn",
    iconUrl: "https://www.linkedin.com/in/ayan-bhaumik/",
    link: "https://www.linkedin.com/in/ayan-bhaumik/",
  }
];

export const projects = [
  {
    name: "Dollar Sense",
    description:
      "Web-based concept platform that allows users to access financial data with solutions",
    tags: [
      { name: "HTML", color: "blue-text-gradient" },
      { name: "CSS", color: "green-text-gradient" },
      { name: "bootstrap 5.3.0", color: "pink-text-gradient" },
    ],
    image: weatherpedia,
    source_code_link: "https://ayan-bhaumik.github.io/Finance-Fintech/",
  },
  {
    name: "Zefrus",
    description:
      "Zefrus a visually captivating website inspired by Zentry.",
    tags: [
      { name: "Javascript", color: "pink-text-gradient" },
      { name: "HTML", color: "green-text-gradient" },
      { name: "Tailwind CSS", color: "pink-text-gradient" },
      { name: "React.js", color: "pink-text-gradient" },
      { name: "GSAP", color: "pink-text-gradient" },
    ],
    image: termpw,
    source_code_link: "https://ayan-bhaumik.github.io/Zefrus/",
  },
  {
    name: "IGRIS - DDM AI Model",
    description:
      "IGRIS is designed to be a comprehensive and adaptable AI that can seamlessly integrate into various aspects of human life.",
    tags: [
      { name: "Machine Learning", color: "blue-text-gradient" },
      { name: "DDM", color: "green-text-gradient" },
      { name: "Python", color: "pink-text-gradient" },
    ],
    image: mhft,
    source_code_link:
      "https://github.com/Ayan-Bhaumik/IGRIS",
  },
  {
    name: "Apple 15 Pro",
    description:
      "Recreate the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects. From custom animations to animated 3D models .",
    tags: [
      { name: "React.js", color: "blue-text-gradient" },
      { name: "Three.js", color: "blue-text-gradient" },
      { name: "HTML", color: "blue-text-gradient" },
      { name: "React Three Fiber", color: "blue-text-gradient" },
      { name: "React Three Drei", color: "blue-text-gradient" },
      { name: "GSAP (Greensock)", color: "blue-text-gradient" },
      { name: "Vite", color: "blue-text-gradient" },
      { name: "Tailwind CSS", color: "blue-text-gradient" },
    ],
    image: payloadmaster,
    source_code_link: "https://github.com/Ayan-Bhaumik/Iphone_Clone/",
  },
  /*
  {
    name: "CompileVortex",
    description:
      "Tool to automate payload creation using the Metasploit framework",
    tags: [
      { name: "Javascript", color: "blue-text-gradient" },
      { name: "CSS", color: "green-text-gradient" },
      { name: "HTML", color: "pink-text-gradient" },
    ],
    image: CompileVortex,
    source_code_link: "https://github.com/lohitkolluri/CompileVortex",
  },
  {
    name: "Sketcher",
    description:
      "Convert an input image to a pencil sketch using OpenCV and Matplotlib libraries.",
    tags: [
      { name: "OpenCV", color: "blue-text-gradient" },
      { name: "Matplotlib", color: "green-text-gradient" },
      { name: "Python", color: "pink-text-gradient" },
    ],

    image: sketcher,
    source_code_link: "https://github.com/lohitkolluri/Image_to_Pencil_Sketch_App",
  },*/
];

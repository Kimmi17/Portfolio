import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import lamablogImg from "@/public/lamablog.png";
import spotifycloneappImg from "@/public/spotifycloneapp.png";
import ecommerceappImg from "@/public/ecommerceapp.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated Samk University of Applied Sciences",
    location: "Rauma, FL",
    description: "I graduated with bachelor degree in Business Administration.",
    icon: React.createElement(LuGraduationCap),
    date: "2020",
  },
  {
    title: "Marketing Assistant",
    location: "Remote work",
    description:
      "Writing property descriptions, taking or obtaining photos, and uploading listings to the company's website and various real estate platforms. Posting property listings, sharing relevant content, engaging with followers, and running targeted advertising campaigns.Assist in creating and sending email marketing campaigns to clients and leads, including newsletters, property updates, and promotional offers.",
    icon: React.createElement(CgWorkAlt),
    date: "2021",
  },
  {
    title: "Self-taught Developer",
    location: "Espoo, FL",
    description:
      "A self-taught developer with over two years of experience learning to code in my free time. For the past fourteen months, I've been fully immersed in creating web applications using modern technologies",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Spotify-clone App",
    description:
      "I developed a dynamic and responsive user interface that closely mirrors Spotify's design. The project seamlessly integrates Supabase for database management and authentication, and Stripe for handling premium subscriptions. Key features include song uploads, robust authentication.",
    tags: [
      "NextJS 13",
      "React",
      "Stripe",
      "Supabase",
      "PostgreSQL",
      "Tailwind",
    ],
    imageUrl: spotifycloneappImg,
  },
  {
    title: "E-Commerce App",
    description:
      "The project focused on harnessing the power of Next.js 13 App Router to create seamless client-side routing for an E-Commerce platform, complete with an Admin Dashboard. My tasks included environment setup, authentication, the creation of modal and form components, database configuration, and extensive UI/UX development.",
    tags: [
      "Typescript",
      "NextJS 13 App Router",
      "React Hooks",
      "Custom Fonts",
      "Tailwind",
      "Prisma",
      "MySQL",
    ],
    imageUrl: ecommerceappImg,
  },
  {
    title: "Lama Blog",
    description:
      "The application offers multiple pages tailored to meet bloggers' unique needs. I implemented a login and registration system based on JSON web token authentication. A standout feature of the application is the rich text editor that enables bloggers to create, update, and delete their posts with ease",
    tags: [
      "ES6",
      "ReactJS",
      "Sass",
      "React router",
      "ExpressJS",
      "JSON Web Token",
      "MySQL",
    ],
    imageUrl: lamablogImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Redux",
  "Next.js",
  "Node.js",
  "Git",
  "Material UI",
  "Tailwind",
  "Express",
  "Prisma",
  "AWS",
  "MongoDB",
  "MySQL",
  "PostgreSQL",
  "MongoDB",
  "Java",
  "C#",
  "Python",
] as const;

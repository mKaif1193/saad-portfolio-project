import { Icons } from "@/components/Icons";
import {
  HomeIcon,
  GraduationCapIcon,
  FolderClosedIcon,
  PhoneIcon,
  BriefcaseIcon,
} from "lucide-react";

export const DATA = {
  name: "Saad",
  initials: "S",
  url: "https://saad-portfolio-project.vercel.app/",
  location: "Islamabad, Pakistan",
  locationLink: "https://www.google.com/maps/place/islamabad",
  description:
    "Passionate Software Engineer with 3 years' experience, specializing in modern web development, crafting user-friendly interfaces, and delivering impactful solutions.",
  summary:
    "I'm a Software Engineer with 3 years of experience building modern, user-friendly web applications and solving real-world problems through technology. My journey includes working on diverse projects, ranging from sleek front-end designs to complex full-stack systems, leveraging cutting-edge technologies like React, Next.js, Node.js, Express.js, Nest.js, Django, GraphQL, MySQL, PostgreSQL, and MongoDB. I passionate about coding and problem-solving, I thrive on tackling new challenges and learning emerging technologies. My portfolio showcases the projects I've developed, highlighting my technical expertise and commitment to delivering impactful solutions.",
  avatarUrl: "https://avatar.iran.liara.run/public/boy?username=Saad",
  skills: {
    languages: ["JavaScript", "TypeScript", "Python"],
    frontend: [
      "HTML",
      "CSS",
      "React.js",
      "Next.js",
      "Tailwind CSS",
      "Bootstrap",
    ],
    backend: [
      "Node.js",
      "Express.js",
      "Nest.js",
      "Django",
      "GraphQL",
      "Ruby on Rails",
      "REST APIs",
    ],
    databases: ["MongoDB", "MySQL", "PostgreSQL"],
    tools: [
      "VS Code",
      "Git",
      "GitHub",
      "Postman",
      "Docker",
      "Kubernetes",
      "AWS",
      "Adobe XD",
      "Figma",
    ],
  },
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "#education", icon: GraduationCapIcon, label: "Education" },
    { href: "#work", icon: BriefcaseIcon, label: "Work" },
    { href: "#projects", icon: FolderClosedIcon, label: "Projects" },
    { href: "#contact", icon: PhoneIcon, label: "Contact" },
  ],
  contact: {
    email: "saadrana4251@gmail.com",
    tel: "+923123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "",
        icon: Icons.x,
        navbar: true,
      },
      Email: {
        name: "Send Email",
        url: "",
        icon: Icons.email,
        navbar: false,
      },
    },
  },
  work: [
    {
      company: "Atomic Finance",
      href: "https://atomic.finance",
      badges: [],
      location: "Remote",
      title: "Dot Plus",
      logoUrl: "/exp1.svg",
      start: "July 2023",
      end: "Present",
      description:
        "Implemented the Bitcoin discreet log contract (DLC) protocol specifications as an open source Typescript SDK. Dockerized all microservices and setup production kubernetes cluster. Architected a data lake using AWS S3 and Athena for historical backtesting of bitcoin trading strategies. Built a mobile app using react native and typescript.",
    },
    {
      company: "Shopify",
      badges: [],
      href: "https://shopify.com",
      location: "Remote",
      title: "Plan Software",
      logoUrl: "/shopify.svg",
      start: "November 2022",
      end: "June 2023",
      description:
        "Implemented a custom Kubernetes controller in Go to automate the deployment of MySQL and ProxySQL custom resources in order to enable 2,000+ internal developers to instantly deploy their app databases to production. Wrote several scripts in Go to automate MySQL database failovers while maintaining master-slave replication topologies and keeping Zookeeper nodes consistent with changes.",
    },
    {
      company: "Nvidia",
      href: "https://nvidia.com/",
      badges: [],
      location: "Santa Clara, CA",
      title: "Software Engineer",
      logoUrl: "/nvidia.png",
      start: "December 2021",
      end: "August 2022",
      description:
        "Architected and wrote the entire MVP of the GeForce Now Cloud Gaming internal admin and A/B testing dashboard using React, Redux, TypeScript, and Python. Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit laudantium architecto est veniam vel. Expedita fuga dolorum, ab praesentium repellat minima necessitatibus voluptatum explicabo distinctio exercitationem fugiat.",
    },
    {
      company: "Lime",
      href: "https://li.me/",
      badges: [],
      location: "San Francisco, CA",
      title: "Software Engineer",
      logoUrl: "/lime.svg",
      start: "January 2021",
      end: "November 2021",
      description:
        "Proposed and implemented an internal ruby API for sending/receiving commands to scooters over LTE networks. Developed a fully automated bike firmware update system to handle asynchronous firmware updates of over 100,000+ scooters worldwide, and provide progress reports in real-time using React, Ruby on Rails, PostgreSQL and AWS EC2 saving hundreds of developer hours.",
    },
  ],
  education: [
    {
      school: "Virtual University (VU) of Pakistan",
      href: "https://www.vu.edu.pk/",
      degree: "Master's in Islamic Studies (MS Islamic Studies)",
      logoUrl: "vu.png",
      start: "2018",
      end: "2020",
    },
    {
      school: "Virtual University (VU) of Pakistan",
      href: "https://www.vu.edu.pk/",
      degree: "Bachelor's in Computer Science (BS CS)",
      logoUrl: "vu.png",
      start: "2014",
      end: "2018",
    },
    {
      school: "Allama Iqbal Open University (AIOU)",
      href: "https://www.aiou.edu.pk/",
      degree: "Bachelor's in English (BS English)",
      logoUrl: "aiou.png",
      start: "2014",
      end: "2018",
    },
  ],
  projects: [
    {
      title: "Chat Collect",
      dates: "March 27, 2020",
      href: "",
      active: true,
      description:
        "With the release of the OpenAI GPT Store, I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod tempore eos quis culpa ex sapiente eaque sequi hic odio, quas unde accusantium facere ipsam deserunt praesentium. Sapiente sint incidunt necessitatibus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae voluptate eum adipisci vitae officia nemo voluptatum harum nam amet fugit.",
      technologies: [
        "React.js",
        "Tailwind CSS",
        "Next.js",
        "GraphQL",
        "MongoDB",
      ],
      links: [
        {
          type: "Website",
          href: "",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Github",
          href: "",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "llm.report",
      dates: "December 20, 2022",
      href: "",
      active: true,
      description:
        "Developed an open-source logging and analytics platform for OpenAI: Log your ChatGPT API requests, analyze costs, and improve your prompts. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt deleniti iste, dignissimos officia voluptates nulla repellat veritatis ea porro mollitia commodi excepturi libero fugit fugiat vitae maxime ratione. Harum facere porro in! Eos quo mollitia a ullam maiores ratione repellendus, amet exercitationem id. Est pariatur reprehenderit labore, eveniet necessitatibus quam.",
      technologies: [
        "Next.js",
        "React.js",
        "Django",
        "Tailwind CSS",
        "PostgreSQL",
      ],
      links: [
        {
          type: "Website",
          href: "",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Github",
          href: "",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
  ],
} as const;

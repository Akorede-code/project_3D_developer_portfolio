import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  school,
  portfolio,
  servicom,
  carrent,
  jobit,
  tripguide,
  threejs,
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

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "ReactJS Developer",
    icon: mobile,
  },
  {
    title: "Typescript Developer",
    icon: backend,
  },
  {
    title: "Node JS Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "LUTH",
    icon: reactjs,
    iconBg: "#383E56",
    date: "Jan 2020 - Present",
    points: [
      "Developing reusable UI components with React.js and Tailwind CSS.",
      "Managing application state and data flow for consistent performance.",
      "Integrating RESTful or GraphQL APIs with front-end applications.",
      "Optimizing application speed, accessibility, and responsiveness across devices.",
      "Writing clean, maintainable, and well-documented code following best practices.",
      "Collaborating on version control using Git and managing deployments.",
      "Implementing testing and debugging strategies to ensure code quality.",
    ],
  },
  {
    title: "React Typescript Developer",
    company_name: "LUTH",
    icon: typescript,
    iconBg: "#E6DEDD",
    date: "Jan 2020 - Present",
    points: [
      "Develop and maintain web applications using React, TypeScript, and modern front-end frameworks.",
      "Build reusable, modular, and maintainable UI components following best practices.",
      "Implement strict type checking and interface definitions to improve code reliability and reduce runtime errors.",
      "Utilize tools like React Router, React Query, and Context API (or Redux) for efficient state and data management.",
      "Ensure responsiveness, accessibility, and cross-browser compatibility.",
      "Collaborate using Git, CI/CD pipelines, and Agile methodologies.",
      "Optimize performance through code-splitting, lazy loading, and other modern optimization techniques.",
      "Conduct testing with tools such as Jest, React Testing Library, or Cypress to ensure reliability and code quality.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "LUTH",
    icon: html,
    iconBg: "#383E56",
    date: "Jan 2020 - Present",
    points: [
      "As a Web Developer, I design and build responsive, user-friendly web applications using modern technologies like React, TypeScript, JavaScript, and Tailwind CSS. I focus on creating clean, efficient, and scalable code that enhances performance and user experience. I collaborate with cross-functional teams to translate business requirements into functional and visually appealing web solutions, ensuring accessibility, responsiveness, and maintainability across all platforms.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "LUTH",
    icon: javascript,
    iconBg: "#E6DEDD",
    date: "Jan 2020 - Present",
    points: [
      "As a Full Stack Developer, I design, develop, and maintain end-to-end web applications using modern technologies. I work with React, TypeScript, and Tailwind CSS on the frontend, and Node.js, Express, and SQL/NoSQL databases on the backend. I focus on building scalable, secure, and user-friendly solutions while ensuring seamless integration between client and server. I collaborate closely with teams to deliver efficient, maintainable, and high-performing applications.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Dr. Akinkugbe",
    designation: "Dermatologist Consultant",
    company: "LUTH Hospital",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Boluwade Kujero",
    designation: "PM",
    company: "BT & LUTH Hospital",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Dr. Babawale Bello",
    designation: "DCMAC",
    company: "LUTH Hospital",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "School Portal",
    description:
      "Developed a comprehensive school management portal that enables new student applications, registration, and admission processing. The platform also supports management of existing students, staff, and administrators, providing features for user authentication, data management, and role-based access control. Designed with a responsive interface for seamless access across devices, ensuring efficient communication and administrative operations.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mssql",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: school,
    source_code_link: "https://github.com/",
  },
  {
    name: "Feedback Platform",
    description:
      "Developed a feedback management platform for SERVICOM using React, TypeScript, and Tailwind CSS, integrated with Firebase as the backend database. The platform enables patients to submit feedback, complaints, and suggestions easily, while administrators can review, categorize, and respond to submissions in real time. Designed with a clean, responsive user interface to enhance accessibility and improve communication between patients and service management teams.",
    tags: [
      {
        name: "react-typescript",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: servicom,
    source_code_link: "https://github.com/",
  },
  {
    name: "3D Portfolio",
    description:
      "Built an interactive 3D portfolio webpage using Three.js and Tailwind CSS, showcasing projects and skills in an engaging visual format. The site features smooth animations, dynamic lighting, and responsive design, providing an immersive user experience that blends creativity with modern web technologies.",
    tags: [
      {
        name: "threejs",
        color: "blue-text-gradient",
      },
      {
        name: "3D model",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: portfolio,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };

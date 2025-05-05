/* Images */
/* Projects Section */
import ProjectsImage1 from "@/public/assets/my-daktari.png";
import ProjectsImage2 from "@/public/assets/resume-ai.png";
import ProjectsImage3 from "@/public/assets/Diabetes.png";
import ProjectsImage4 from "@/public/assets/ecom.png";
import ProjectsImage5 from "@/public/assets/pendeza.png";
// Import for GitHub view more card
import { FaGithub } from "react-icons/fa";

/* Blog Section */
import blogimg1 from '@/public/assets/seo.jpg'
import blogimg2 from '@/public/assets/vim.png'
import blogimg3 from '@/public/assets/hydration.jpg'
import blogimg4 from '@/public/assets/react.png'

/* Data */
/* About Section */
const credentials = [
  {
    title: "Name",
    value: "Cleve Momanyi",
  },
  // {
  //   title: "BIRTHDAY",
  //   value: "1st April 2003",
  // },
  // {
  //   title: "AGE",
  //   value: "21 years",
  // },

  {
    title: "ADRESS",
    value: "Nairobi, KENYA",
  },
  {
    title: "PHONE",
    value: "(+254) 700 164 733",
    href:"tel:+254700164733",
  },
  {
    title: "EMAIL",
    value: "clevemomanyi@gmail.com",
    href:"mailto:clevemomanyi@gmail.com?subject=Collaboration%20Opportunity!"
  },
  {
    title: "GITHUB",
    value: "clevecodes",
    href:"https://github.com/cleve-codes/"
  },
  {
    title: "LINKEDIN",
    value: "Cleve Momanyi",
    href:"https://www.linkedin.com/in/cleve-momanyi/"
  }
]

/* Projects Section */
const projects = [
  {
    title: 'My Daktari - Doctor Booking Platform',
    tech: 'React, Nodejs, MongoDB, Stripe',
    img: ProjectsImage1,
    url: 'https://my-daktari.vercel.app/'
  },
  {
    title: 'Advanced AI Resume Builder - SaaS',
    tech: 'Nextjs, Postgresql, OpenAI API',
    img: ProjectsImage2,
    url: "https://ai-resume-builder-blue.vercel.app/",
  },
  {
    title: "Diabetes Prediction App - Machine Learning",
    tech: "React, TailwindCSS, Flask",
    img: ProjectsImage3,
    url: 'https://diabetes-prediction-seven.vercel.app/'
  },
  {
    title: "Ecommerce API with Microservices",
    tech: "Node, Express, Postgres, Redis, Docker",
    img: ProjectsImage4,
    url: "https://github.com/cleve-codes/pwd-store"
  },
  {
    title: "Pendeza Digital Store - Landing Page",
    tech: "React, TailwindCSS, GSAP",
    img: ProjectsImage5,
    url: "https://wibe-studio-seven.vercel.app/"
  },
  // New "View More Projects" card with GitHub link
  {
    title: "View More Projects",
    tech: "Check out my GitHub",
    isViewMore: true, // Special flag to identify this as the "View More" card
    url: "https://github.com/cleve-codes",
    icon: FaGithub,
  }
]


/* Portofolio section */
const tabHeaders = [
  {
    title: 'Experience',
    value: 'experience'
  },
  {
    title: 'Education',
    value: 'education'
  },
  {
    title: 'Skills',
    value: 'skills'
  },
]


const experience = [
  {
    company: 'Swap Space Limited',
    jobTitle: 'Backend Developer - Intern',
    description: 'I worked as a Backend Developer Intern at Swap Space Limited, where I was responsible for developing and maintaining the company\'s backend systems. My role involved working with Node.js, Express.js, and MongoDB to build RESTful APIs and ensure the smooth functioning of the backend infrastructure.',
    date: '2025 Mar - Present'
  },
  {
    company: 'STATSSPEAK Limited Kenya',
    jobTitle: 'Frontend Developer - Intern',
    description: 'I worked as a Frontend Developer Intern at STATSSPEAK Limited Kenya, where I was responsible for developing and enhancing the company\'s website and other software products. My role involved implementing responsive designs, optimizing user interfaces, and ensuring a seamless user experience across various platforms.',
    date: '2024 Jul - 2024 Dec'
  },
  {
    company: 'PENDEZA ONLINE STORE',
    jobTitle: 'Frontend Developer',
    description: 'I worked working at Pendeza Online Store as the Lead Frontend Developer where I was responsible for the development of the company\'s website and also the company\'s mobile app',
    date: '2023 Nov - 2024 Jan'
  },
]

const education = [
  {
    school: "African Leadership Experience - ALX",
    date: 'May 2025 - Present',
    degree: 'AWS Cloud Computing',
    description: 'Currently enrolled in the AWS Cloud Computing program at ALX, I am dedicated to mastering the art of cloud computing. This program equips me with the skills to design, deploy, and manage cloud-based solutions, ensuring optimal performance and security for various applications.'
  },
  {
    school: "MURANG'A UNIVERSITY OF TECHNOLOGY",
    date: 'Sep 2021 - Apr 2025',
    degree: 'BSc. Computer Science',
    description: "Recently finished my BSc. Computer Science degree at Murang'a University of Technology, where I honed my skills in programming, software development, and computer systems. The program provided a solid foundation in theoretical and practical aspects of computer science."
  },
  {
    school: 'THE MACHAKOS SCHOOL',
    date: '2017 - 2020',
    degree: 'High School',
    description: 'Thrived at The Machakos School from 2017 to 2020, excelling in KCSE exams. Fueled by a passion for Computer Science and IT, I paved the way for my journey in university education.'
  }
]

const skills = [
  {
    skill: 'UI/UX Design',
    percentage: 95,
  },
  {
    skill: 'HTML5 & CSS3',
    percentage: 89,
  },
  {
    skill: 'JavaScript (ES6+)',
    percentage: 90,
  },
  {
    skill: 'REACT / NEXT.JS',
    percentage: 90,
  },
  {
    skill: 'TYPESCRIPT',
    percentage: 85,
  },
  {
    skill: 'Node/Express',
    percentage: 90,
  },
  {
    skill: 'VERSION CONTROL (GIT)',
    percentage: 90,
  }
]

/* Services Section */
const servicesData = [
  {
    service: 'Web Development',
    description: 'Sculpting immersive FrontEnd experiences with a palette of cutting-edge technologies, bringing your digital dreams to life.',
  },
  {
    service: 'UI/UX Design',
    description: 'Infusing passion into pixels, I design UI/UX that dances between aesthetics and intuition, turning concepts into visual masterpieces.',
  },
  {
    service: 'SEO/Digital Marketing',
    description: 'Ignite your online presence! With SEO and Digital Marketing wizardry, I craft strategies that propel you into the spotlight, ensuring your story captivates the digital realm.',
  },
];

/* Testimonials Section */
const testimonials = [
  {
    text: '"Cleve is a true gem in the world of web development! His attention to detail and innovative approach to design is unmatched. Highly recommend!"',
    name: "Jeffers Abaga",
    job: "Startup Founder",
  },
  {
    text: '"Working with Cleve was a game-changer for our project. His expertise in UI/UX design transformed our vision into a stunning reality. Highly recommend!"',
    name: "Olafemi Oladimeji",
    job: "UX Designer",
  },
  {
    text: '"Cleve is a coding wizard! His ability to solve complex problems and deliver high-quality code is impressive. A valuable asset to any team!"',
    name: "Abdikadir Hassan",
    job: "Software Engineer",
  },
  {
    text: '"Cleve is a talented developer with a keen eye for design. He transformed our website into a visually stunning and user-friendly platform. Highly recommend!"',
    name: "Ankit Sharma",
    job: "Graphic Designer",
  },
  {
    text: '"Cleve is a true professional! His dedication to delivering high-quality work and his ability to meet tight deadlines is commendable. A pleasure to work with!"',
    name: "Martha Wanjiru",
    job: "Project Manager",
  },
  {
    text: '"Cleve is an exceptional developer! His creativity and problem-solving skills are top-notch. He brought our project to life with his innovative ideas!"',
    name: "John Charles",
    job: "Entrepreneur",
  }
];

/* Blog Section */
const blogs = [
  {
    title: "The Ultimate Guide to SEO",
    date: "Dec 15, 2023",
    img: blogimg1,
    content: "Explore the intricate world of SEO with our comprehensive guide. From on-page optimization to backlink strategies, we delve into the key elements that can skyrocket your website's visibility. Uncover valuable insights, stay updated on algorithm changes, and master the art of SEO to ensure your digital presence thrives in the competitive online landscape."
  },
  {
    title: "My Journey from Vscode to Vim",
    date: "Dec 22, 2023",
    img: blogimg2,
    content: "Embark on a coding odyssey as I share my personal journey from Vscode to Vim. Discover the challenges, triumphs, and the profound impact this switch had on my coding efficiency. Join me in this exploration of text editors, and learn how embracing Vim can transform your coding experience, making it more efficient and enjoyable."
  },
  {
    title: "Hydration errors and how to fix them",
    date: "Jan 27, 2024",
    img: blogimg3,
    content: "In the dynamic realm of web development, hydration errors can be stumbling blocks in your projects. Fear not! This blog post serves as your guide to understanding common hydration errors and provides practical solutions. Learn how to troubleshoot and keep your projects hydrated and error-free, ensuring a smooth and reliable user experience."
  },
  {
    title: "Why React",
    date: "Feb 10, 2024",
    img: blogimg4,
    content: "Delve into the world of React.js and uncover the reasons why it has become the preferred library for building modern web applications. From its powerful component-based architecture to the efficiency of virtual DOM, explore the key features that make React a game-changer in front-end development. Discover the elegance and simplicity that React brings to crafting robust and interactive user interfaces."
  }
];

export {
  experience,
  education,
  skills,
  tabHeaders,
  projects,
  servicesData,
  testimonials,
  blogs,
  credentials,
 };

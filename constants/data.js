/* Images */
/* Projects Section */
import ProjectsImage1 from "@/public/assets/store.jpg";
import ProjectsImage2 from "@/public/assets/landing.png";
import ProjectsImage3 from "@/public/assets/seo.png";
import ProjectsImage4 from "@/public/assets/expense.png";
import ProjectsImage5 from "@/public/assets/minimalist.png";
import ProjectsImage6 from "@/public/assets/geritch.png";

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
  {
    title: "BIRTHDAY",
    value: "1st April 2003",
  },
  {
    title: "AGE",
    value: "21 years",
  },
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
]

/* Projects Section */
const projects = [
  {
    title: 'Pendeza Online Store',
    tech: 'NextJS, TypeScript, Stripe',
    img: ProjectsImage1,
    url: 'https://github.com/Cleve-codes/Pendeza-Digital-Store'
  },
  {
    title: 'Pendeza Landing Page',
    tech: 'React, TailwindCSS, GSAP',
    img: ProjectsImage2,
    url: "https://wibe-studio-seven.vercel.app/",
  },
  {
    title: "SM Digital Agency",
    tech: "React, TailwindCSS",
    img: ProjectsImage3,
    url: 'https://sms-seo.netlify.app/'
  },
  {
    title: "Expense Tracker App",
    tech: "React, Redux, Tailwind",
    img: ProjectsImage4,
    url: 'https://react-expense-tracker-9b90o0viy-cleve-codes.vercel.app/'
  },
  {
    title: "Minimalist Portofolio",
    tech: "NextJS, TypeScript, TailwindCSS",
    img: ProjectsImage5,
    url: "https://jeffsfolio.netlify.app"
  },
  {
    title: "Restaurant Landing Page",
    tech: "ReactJS, TailwindCSS",
    img: ProjectsImage6,
    url: "https://simple-react-landing-page.vercel.app/"
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
  {
    company: 'NETSCALING TECHNOLOGIES',
    date: '2023 Apr - Oct',
    jobTitle: 'Web Developer - Intern',
    description: 'Interned at NTD for 3 months where I worked on various projects and also learned a lot about web development and design and also got to work with a lot of experienced'
  }
]

const education = [
  {
    school: "MURANG'A UNIVERSITY OF TECHNOLOGY",
    date: '2021 - Today',
    degree: 'BSc. Computer Science',
    description: 'Pursuing a BSc. in Computer Science at Murang\'a University of Technology since 2021, I am currently in my final semester and set to complete my studies by April. I specialize in web development and design, with a strong passion for machine learning, AI, and an emerging interest in cybersecurity.'
  },
  {
    school: "SELF TAUGHT",
    date: '2020 - Today',
    degree: 'Web Development and Design',
    description: 'Pioneer of my own coding odyssey since 2020, I\'ve been crafting the digital realm through self-taught web development and design. Every line of code tells a story, and each project is a canvas where creativity meets functionality, my journey unfolds in the ever-evolving landscape of web development, where innovation knows no bounds.'
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
    text: '"Working with Cleve was an absolute delight. Their creativity and technical expertise transformed our project into a masterpiece. Highly recommended!"',
    name: "Jeffers Abaga",
    job: "Startup Founder",
  },
  {
    text: '"Exceptional work! Cleve brings a unique blend of innovation and precision to every project. A true professional in the field."',
    name: "Maureen Wambui",
    job: "UX Designer",
  },
  {
    text: '"Wagwan! Cleve\'s FrontEnd skills are unparalleled. They not only meet but exceed expectations. Looking forward to future collaborations."',
    name: "Sarah Kinyua",
    job: "Software Engineer",
  },
  {
    text: '"Cleve is a creative genius! Their UI/UX designs are not just visually stunning but also incredibly user-friendly. A pleasure to work with."',
    name: "Michael Wafula",
    job: "Graphic Designer",
  },
  {
    text: '"Incredible SEO and Digital Marketing expertise! Cleve knows how to boost online visibility and drive results. Highly satisfied with the outcomes."',
    name: "Wendy Achieng",
    job: "Marketing Specialist",
  },
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

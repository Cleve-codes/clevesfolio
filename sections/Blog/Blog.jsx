import CarouselImg from '@/components/ui/carouselImg';
import React from 'react'
import

// const blogImages = [

// ]

const blogs = [
  {
    title: "The Ultimate Guide to SEO",
    date: "July 15, 2021",

    content: "Explore the intricate world of SEO with our comprehensive guide. From on-page optimization to backlink strategies, we delve into the key elements that can skyrocket your website's visibility. Uncover valuable insights, stay updated on algorithm changes, and master the art of SEO to ensure your digital presence thrives in the competitive online landscape."
  },
  {
    title: "My Journey from Vscode to Vim",
    date: "July 15, 2021",
    content: "Embark on a coding odyssey as I share my personal journey from Vscode to Vim. Discover the challenges, triumphs, and the profound impact this switch had on my coding efficiency. Join me in this exploration of text editors, and learn how embracing Vim can transform your coding experience, making it more efficient and enjoyable."
  },
  {
    title: "Hydration errors and how to fix them",
    date: "July 15, 2021",
    content: "In the dynamic realm of web development, hydration errors can be stumbling blocks in your projects. Fear not! This blog post serves as your guide to understanding common hydration errors and provides practical solutions. Learn how to troubleshoot and keep your projects hydrated and error-free, ensuring a smooth and reliable user experience."
  },
  {
    title: "Why React",
    date: "July 15, 2021",
    content: "Delve into the world of React.js and uncover the reasons why it has become the preferred library for building modern web applications. From its powerful component-based architecture to the efficiency of virtual DOM, explore the key features that make React a game-changer in front-end development. Discover the elegance and simplicity that React brings to crafting robust and interactive user interfaces."
  }
];

const Blog = () => {
  return (
    <div className='blog-section' >
      <div >
            <h1 className="span" >INSIGHTS HUB</h1>
            <div className="about-header">
              <h1 className="h1" >Latest Blogs</h1>
              <div className="separator"></div>
            </div>
          </div>
        <div>
          {blogs.map((blog, index) => (
            <div key={index} className="blog">
              <CarouselImg
               />
            </div>
          ))}
        </div>
    </div>
  )
}

export default Blog
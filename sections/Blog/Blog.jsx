import CarouselImg from '@/components/ui/carouselImg';
import React from 'react'
import img1 from '@/public/assets/seo.jpg'
import img2 from '@/public/assets/vim.png'
import img3 from '@/public/assets/hydration.jpg'
import img4 from '@/public/assets/react.png'
import { Button } from '@/components/ui/button';
import './Blog.css'
import Link from 'next/link';


const blogs = [
  {
    title: "The Ultimate Guide to SEO",
    date: "Dec 15, 2023",
    img: img1,
    content: "Explore the intricate world of SEO with our comprehensive guide. From on-page optimization to backlink strategies, we delve into the key elements that can skyrocket your website's visibility. Uncover valuable insights, stay updated on algorithm changes, and master the art of SEO to ensure your digital presence thrives in the competitive online landscape."
  },
  {
    title: "My Journey from Vscode to Vim",
    date: "Dec 22, 2023",
    img: img2,
    content: "Embark on a coding odyssey as I share my personal journey from Vscode to Vim. Discover the challenges, triumphs, and the profound impact this switch had on my coding efficiency. Join me in this exploration of text editors, and learn how embracing Vim can transform your coding experience, making it more efficient and enjoyable."
  },
  {
    title: "Hydration errors and how to fix them",
    date: "Jan 27, 2024",
    img: img3,
    content: "In the dynamic realm of web development, hydration errors can be stumbling blocks in your projects. Fear not! This blog post serves as your guide to understanding common hydration errors and provides practical solutions. Learn how to troubleshoot and keep your projects hydrated and error-free, ensuring a smooth and reliable user experience."
  },
  {
    title: "Why React",
    date: "Feb 10, 2024",
    img: img4,
    content: "Delve into the world of React.js and uncover the reasons why it has become the preferred library for building modern web applications. From its powerful component-based architecture to the efficiency of virtual DOM, explore the key features that make React a game-changer in front-end development. Discover the elegance and simplicity that React brings to crafting robust and interactive user interfaces."
  }
];

const Blog = () => {
  return (
    <div className='blog-section' id="blog" >
      <div >
            <h1 className="span" >INSIGHTS HUB</h1>
            <div className="about-header">
              <h1 className="h1" >Latest Blogs</h1>
              <div className="separator"></div>
            </div>
          </div>
        <div className="blog" >
          {blogs.map((blog, index) => (
            <div className='blog-post'  key={index}>
              <Link href="https://hashnode.com" target="_blank">
              <CarouselImg
                img={blog.img}
                title={blog.title}
                tech={blog.date}
                usage="blog"
                />
                </Link>
            </div>
          ))}
        </div>
        {/* <div className='articles-btn' > */}
          <Button
          className="input-contact"
          variant="ghost"
          id="articles-btn"
          >
            Load More Articles
          </Button>
        {/* </div> */}
    </div>
  )
}

export default Blog
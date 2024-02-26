import CarouselImg from '@/components/ui/carouselImg';
import React from 'react'
import { Button } from '@/components/ui/button';
import './Blog.css'
import Link from 'next/link';


import { blogs } from '@/constants/data';

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
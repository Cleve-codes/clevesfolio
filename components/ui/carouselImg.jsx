import { cn } from '@/lib/utils'
import Image from 'next/image'
import React from 'react'

const CarouselImg = ({img, tech, title, usage}) => {
  return (
    <div>
      <div>
          <Image 
            alt={title || "Project image"} 
            src={img} 
            className={cn('carousel-img', usage === "blog" && "blog-image")}
            width={800}
            height={600}
            style={{ 
              width: '100%', 
              height: '270px', 
              objectFit: 'cover'
            }}
          />
      </div>
      <div>
        <h4 className='text-[#888888] sm:text-[1.125em] mt-[1em]' >{tech}</h4>
        <h2 className='text-[#dddddd] sm:text-[1.825em]' >{title}</h2>
      </div>
    </div>
  )
}

export default CarouselImg
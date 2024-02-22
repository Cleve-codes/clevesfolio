import { cn } from '@/lib/utils'
import Image from 'next/image'
import React from 'react'

const CarouselImg = ({img, tech, title, usage}) => {
  return (
    <div>
      <div>
          <Image alt="img" src={img} className={cn('carousel-img', usage === "blog" && "blog-image")} />
      </div>
      <div>
        <h4 className='text-[#888888] text-[18px] mt-[1em]' >{tech}</h4>
        <h2 className='text-[#dddddd] text-[30px]' >{title}</h2>
      </div>
    </div>
  )
}

export default CarouselImg
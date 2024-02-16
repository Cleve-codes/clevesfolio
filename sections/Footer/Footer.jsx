import React from 'react'
import './Footer.css'
import { ArrowUp } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
// import { Link } from 'next/link'

const Footer = () => {
  return (
    <div className='footer-section' >
    <div aria-hidden="true" className="flex w-full" >
      <Link href="#home" >
        <Button variant="ghost" className="footer-btn" size={30} >
          <ArrowUp />
        </Button>
      </Link>
      </div>
      <div className='footer-text' >
        <p>Copyright &copy; 2024. All rights reserved.</p>
        <div>
          Developed by{" "}
          <span>Cleve</span>
        </div>
      </div>

    </div>

  )
}

export default Footer
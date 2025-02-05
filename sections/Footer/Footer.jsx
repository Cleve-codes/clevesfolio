import React from 'react'
import './Footer.css'
import { ArrowUp } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'


const Footer = () => {
  return (
    <div className='footer-section'>
      <div aria-hidden="true" className="flex w-full">
        <div className='button-container' >
        <Link href="#home">
          <Button variant="ghost" className="footer-btn" size={30}>
            <ArrowUp />
          </Button>
        </Link>
        </div>
      </div>
      <div className='footer-text'>
        <p>Copyright &copy; 2025. All rights reserved.</p>
        <div>
          Developed by{" "}
          <span>
          <Link href="https://github.com/cleve-codes/" target='_blank' >
          Cleve
          </Link>
          </span>
        </div>
      </div>
    </div>
  );
};


export default Footer
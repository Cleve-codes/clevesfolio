// import React from 'react'
import style from "./Navbar.module.css";
import { Menu } from "lucide-react";
import img1 from "@/public/assets/twitter.svg";
import img2 from "@/public/assets/instagram.svg";
import img3 from "@/public/assets/github.svg";
// import { CiMenuBurger } from "react-icons/ci";

import {
  Sheet,
  SheetFooter,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { forwardRef } from "react";

const socialMediaIcons = [
  {
    name: "twitter",
    icon: img1,
  },
  {
    name: "Instagram",
    icon: img2,
  },
  {
    name: "Github",
    icon: img3,
  },
];

const Navbar = forwardRef((props, ref) => {
  return (
    <Sheet>
      <SheetTrigger className={style.nav}>
        <h1 className={style.h1}>
          <span className="sm:text-[20px]">Menu </span>
          <Menu color="#ffffff" width={30} height={30} ref={ref} />
          {/* <CiMenuBurger /> */}
        </h1>
      </SheetTrigger>
      <SheetContent className={style.sheetContent}>
        <SheetHeader className={style.sheetHeader}>
          <SheetTitle className={style.sheetTitle}>Menu</SheetTitle>
          {/* <SheetClose className={style.sheetClose}><X /> </SheetClose> */}
        </SheetHeader>
        <SheetDescription className={style.sheetDesc}>
          <ul>
            <li>
              <Link href="#home">Home</Link>
            </li>
            <li>
              <Link href="#about">About</Link>
            </li>
            <li>
              <Link href="#portofolio">Portofolio</Link>
            </li>
            <li>
              <Link href="#projects">Projects</Link>
            </li>
            <li>
              <Link href="#services">Services</Link>
            </li>
            <li>
              <Link href="#testimonials">Testimonials</Link>
            </li>
            <li>
              <Link href="#blog">Blogs</Link>
            </li>
            <li>
              <Link href="#contact">Contact</Link>
            </li>
          </ul>
        </SheetDescription>
        <SheetFooter className={style.sheetFooter}>
          <div>
            Developed by{" "}
            <span>
              <Link href="https://github.com/cleve-codes/" target="_blank">
                Cleve
              </Link>
            </span>
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
});

Navbar.displayName = "Navbar";

export default Navbar;

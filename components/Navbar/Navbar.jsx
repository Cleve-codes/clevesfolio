// import React from 'react'
import style from "./Navbar.module.css";
import { Menu } from "lucide-react";
// import { CiMenuBurger } from "react-icons/ci";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Navbar = () => {
  return (
    <Sheet>
      <SheetTrigger
      className={style.nav}
      >
        <h1 className={style.h1}>
          <span>Menu </span>
          <Menu color="#ffffff" />
          {/* <CiMenuBurger /> */}
        </h1>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Menu</SheetTitle>
        </SheetHeader>
        <SheetDescription>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Portofolio</li>
            <li>Services</li>
            <li>Customers</li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>
        </SheetDescription>
      </SheetContent>
    </Sheet>
  );
};

export default Navbar;

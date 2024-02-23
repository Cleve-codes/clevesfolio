import { useEffect } from "react";
import "./Cursor.css";
import { motion, useMotionValue, useSpring } from "framer-motion";

const Cursor = () => {

  const cursorSize = 30;

  const mouse = {
    x: useMotionValue(0),
    y: useMotionValue(0),
  };

  const smoothOptions ={
    stiffness: 300,
    damping: 20,
    mass: .1,
  }

  const smoothMouse = {
    x: useSpring(mouse.x, smoothOptions),
    y: useSpring(mouse.y, smoothOptions),
  }

  const manageMouseMove = (e) => {
    const { clientX, clientY } = e;
    mouse.x.set(clientX - cursorSize / 2);
    mouse.y.set(clientY - cursorSize / 2);
  }


  useEffect(() => {
    window.addEventListener("mousemove", manageMouseMove);
    return () => {
      window.removeEventListener("mousemove", manageMouseMove);
    };
  });



  return (
    <motion.div
    style={{left: smoothMouse.x, top: smoothMouse.y}}
    className="cursor"
    ></motion.div>
  );
};

export default Cursor;

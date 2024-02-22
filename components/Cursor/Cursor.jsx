import React, { useEffect, useState } from "react";
import "./Cursor.css";

const Cursor = () => {
  const [cursorStyle, setCursorStyle] = useState({ top: 0, left: 0 });
  const [expand, setExpand] = useState(false);

  useEffect(() => {
    const onMouseMove = (e) => {
      setCursorStyle({ top: e.pageY - 10, left: e.pageX - 10 });
    };

    const onClick = () => {
      setExpand(true);
      setTimeout(() => {
        setExpand(false);
      }, 500);
    };

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("click", onClick);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("click", onClick);
    };
  }, []);

  return (
    <div
      className={`cursor ${expand ? "expand" : ""}`}
      style={{ top: cursorStyle.top, left: cursorStyle.left }}
    ></div>
  );
};

export default Cursor;

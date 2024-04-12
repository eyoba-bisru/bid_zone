"use client";

import React from "react";
import { Button } from "./ui/button";

const ScrollToTop = () => {
  const [show, setShow] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      className={`${
        show ? "opacity-100" : "opacity-0"
      } fixed bottom-10 right-10 z-50 transition-all duration-300`}
    >
      <Button
        onClick={scrollToTop}
        variant="ghost"
        className="w-12 h-12 rounded-full"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.5 15.75l7.5-7.5 7.5 7.5"
          />
        </svg>
      </Button>
    </div>
  );
};

export default ScrollToTop;

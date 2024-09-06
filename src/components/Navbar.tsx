"use client";

import { useState, useEffect } from "react";
import { motion, useAnimation, useScroll } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const controls = useAnimation();
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const navigate = useNavigate();

  function update() {
    if (scrollY.current > scrollY.prev) {
      setHidden(true);
    } else if (scrollY.current < scrollY.prev) {
      setHidden(false);
    }
  }

  useEffect(() => {
    return scrollY.onChange(() => update());
  });

  const variants = {
    visible: { opacity: 1, y: 0 },
    initial: { opacity: 0, y: -75 },
    hidden: { opacity: 0, y: -25 },
  };

  return (
    <header className="w-full top-0 z-50">
      <motion.nav
        initial="initial"
        animate="visible"
        variants={variants}
        transition={{ ease: [0.1, 0.25, 0.3, 1], duration: 0.6 }}
        className="mx-auto flex-1 max-w-11xl items-center flex-row justify-center p-6 lg:px-8 bg-transparent "
      >
        <motion.div
          animate={hidden ? "hidden" : "visible"}
          variants={variants}
          onHoverStart={() => setHidden(false)}
          transition={{ ease: [0.1, 0.25, 0.3, 1], duration: 0.6 }}
          className="flex items-center gap-10"
        >
          <div className=" lg:flex lg:flex-1 lg:justify-start ">
            <div className="lg:flex font-lite lg:gap-x-12 lg:justify-start">
              <a
                href="#"
                className="text-2xl leading-6 "
                onClick={() => navigate("/")}
              >
                Ashish Kumar
              </a>
            </div>
          </div>
          <div className="hidden lg:flex lg:flex-1 font-lite lg:justify-start text-center lg:gap-x-6">
            <a
              className="text-md leading-6  "
              onClick={() => navigate("/feed")}
            >
              Feed
            </a>
            {/* <a
              className="text-md leading-6  "
              onClick={() => navigate("/projects")}
            >
              Projects
            </a> */}
            <a className="text-md leading-6 " onClick={() => navigate("/work")}>
              Work
            </a>
            <a
              className="text-md leading-6 "
              onClick={() => navigate("/about")}
            >
              About
            </a>
          </div>

          {/* <div className="hidden lg:flex  lg:justify-start">
            <div className="lg:flex font-lite lg:gap-x-12">
              <a href="#" className="text-md leading-6 ">
                Projects
              </a>
              <a href="#" className="text-md leading-6 ">
                Skills
              </a>
              <a href="#" className="text-md leading-6 ">
                About
              </a>
            </div>
          </div> */}

          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="-m-2.5 inline-flex items-center  rounded-md p-2.5 text-white"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-9"
              >
                <path
                  fillRule="evenodd"
                  d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm8.25 5.25a.75.75 0 0 1 .75-.75h8.25a.75.75 0 0 1 0 1.5H12a.75.75 0 0 1-.75-.75Z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>

          {/* <div className="hidden lg:flex  lg:justify-end"></div> */}

          <div className=" lg:flex lg:flex-1 lg:justify-between ">
            <a href="#" className="text-sm leading-6 ">
              Let's Collaborate <span aria-hidden="true">&rarr;</span>
            </a>
            <a href="#" className="text-sm leading-6 ">
              Connect <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </motion.div>
      </motion.nav>

      {/* Mobile Menu */}
      <div
        className={`fixed z-40 w-full bg-black text-white overflow-hidden flex flex-col lg:hidden gap-12 origin-top duration-700 ${
          !mobileMenuOpen ? "h-0" : "h-full"
        }`}
      >
        <div className="px-8">
          <div className="flex flex-col gap-8 tracking-wider">
            <a href="#">Projects</a>
            <a href="#">Skills</a>
            <a href="#">Classic</a>
          </div>
        </div>
      </div>
    </header>
  );
}

"use client";

import { useState, useEffect } from "react";
import {
  AnimatePresence,
  motion,
  useAnimation,
  useScroll,
} from "framer-motion";
import { useNavigate } from "react-router-dom";
import { FaHome, FaUserAlt, FaBriefcase, FaEnvelope } from "react-icons/fa";

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

  const [isOpen, setIsOpen] = useState(false);

  const toggleDock = () => setIsOpen(!isOpen);

  return (
    <>
      <header className="w-full top-0 z-50">
        <motion.nav
          initial="initial"
          animate="visible"
          variants={variants}
          transition={{ ease: [0.1, 0.25, 0.3, 1], duration: 0.6 }}
          className="mx-auto flex-1 max-w-11xl items-center flex-row justify-center  min-[320px]:py-6 min-[320px]:px-4 lg:px-8 bg-transparent "
        >
          <motion.div
            animate={hidden ? "hidden" : "visible"}
            variants={variants}
            onHoverStart={() => setHidden(false)}
            transition={{ ease: [0.1, 0.25, 0.3, 1], duration: 0.6 }}
            className="flex items-center gap-10"
          >
            <div className=" flex font-lite flex-1 lg:justify-start sm:justify-between">
              <a
                href="#"
                className="lg:text-2xl min-[320px]:text-md min-[640px]:text-2xl leading-6 "
                onClick={() => navigate("/")}
              >
                Ashish Kumar
              </a>
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
              <a
                className="text-md leading-6 "
                onClick={() => navigate("/work")}
              >
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

            {/* <div className="flex lg:hidden">
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
</div> */}

            {/* <div className="hidden lg:flex  lg:justify-end"></div> */}

            {/* <div className=" lg:flex lg:flex-1 lg:justify-between ">
<a href="#" className="text-sm leading-6 ">
  Let's Collaborate <span aria-hidden="true">&rarr;</span>
</a>
<a href="#" className="text-sm leading-6 ">
  Connect <span aria-hidden="true">&rarr;</span>
</a>
</div> */}
            <div className="lg:flex lg:flex-1 lg:justify-between">
              <a
                href="mailto:code.ashishkumar@gmail.com?subject=Collaboration%20Request&body=Hi,%20I%20would%20like%20to%20collaborate%20with%20you."
                className="text-sm hidden lg:block leading-6"
              >
                Let's Collaborate <span aria-hidden="true">&rarr;</span>
              </a>
              <a
                href="mailto:code.ashishkumar@gmail.com?subject=Connect&body=Hi,%20I%20would%20like%20to%20connect%20with%20you."
                className="text-sm leading-6"
              >
                Connect <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </motion.div>
        </motion.nav>
      </header>
      <div className="fixed m-auto lg:hidden bottom-10 left-1/2 transform -translate-x-1/2 z-50">
        {/* Floating Button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={toggleDock}
          className="bg-blue-500 rounded-full w-16 h-16 flex items-center justify-center shadow-lg text-white"
        >
          <FaHome size={24} />
        </motion.button>

        {/* Dock Navigation */}
      </div>

      <div className="fixed m-auto  bottom-28 left-1/2 transform -translate-x-1/2 z-50">
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="bg-white text-white color-white rounded-lg py-6 px-10 shadow-xl "
              style={{ transform: "translateX(-50%)" }}
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 50 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
            >
              <div className="grid grid-cols-4 gap-16 sm:shrink">
                <motion.a
                  href="#"
                  className="flex flex-col items-center"
                  whileHover={{ scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <FaHome size={28} />
                  <span className="text-sm mt-2">Home</span>
                </motion.a>

                <motion.a
                  href="#"
                  className="flex flex-col items-center"
                  whileHover={{ scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <FaUserAlt size={28} />
                  <span className="text-sm mt-2">Profile</span>
                </motion.a>

                <motion.a
                  href="#"
                  className="flex flex-col items-center"
                  whileHover={{ scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <FaBriefcase size={28} />
                  <span className="text-sm mt-2">Work</span>
                </motion.a>

                <motion.a
                  href="#"
                  className="flex flex-col items-center"
                  whileHover={{ scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <FaEnvelope size={28} />
                  <span className="text-sm mt-2">Contact</span>
                </motion.a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}

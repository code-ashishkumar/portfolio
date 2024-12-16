"use client";

import { AnimatePresence, motion, useScroll } from "framer-motion";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Example() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { scrollY }: any = useScroll();
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
  console.log("hidden", hidden)
  const variants = {
    visible: { opacity: 1, y: 0 },
    initial: { opacity: 0, y: -75 },
    hidden: { opacity: 0, y: -25 },
  };

  const [isOpen, setIsOpen] = useState(false);

  const toggleDock = () => setIsOpen(!isOpen);

  const handleNavigate = (path: string) => {
    toggleDock()
    navigate(path);
  };

  return (
    <>
      <header className="w-full fixed top-0 z-50">
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
            className="flex  items-center gap-10 z-10"
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
            <div className="flex md:flex-1 md:justify-between">
              <a
                href="mailto:code.ashishkumar@gmail.com?subject=Collaboration%20Request&body=Hi,%20I%20would%20like%20to%20collaborate%20with%20you."
                className="text-sm leading-6 hidden md:block"
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
          className="bg-gray-400 rounded-full w-16 h-16 flex items-center justify-center shadow-lg text-white"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
            <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
            <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
          </svg>

          {/* <FaHome size={24} /> */}
        </motion.button>

        {/* Dock Navigation */}
      </div>

      <div className="fixed m-auto w-96 lg:hidden bottom-28 left-1/2 transform -translate-x-1/2 z-50">
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
              <div className="flex flex-wrap flex-row gap-7 shrink">
                <motion.a
                  href="#"
                  className="flex flex-col items-center"
                  whileHover={{ scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  onClick={() => handleNavigate("/")}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                    <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
                    <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
                  </svg>

                  {/* <FaHome size={28} /> */}
                  <span className="text-sm mt-2">Home</span>
                </motion.a>

                <motion.a
                  className="flex flex-col items-center"
                  whileHover={{ scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  onClick={() => handleNavigate("/feed")}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                    <path fillRule="evenodd" d="M3 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 5.25Zm0 4.5A.75.75 0 0 1 3.75 9h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 9.75Zm0 4.5a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Zm0 4.5a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
                  </svg>

                  {/* <Fa size={28} /> */}
                  <span className="text-sm mt-2">Feed</span>
                </motion.a>

                <motion.a
                  className="flex flex-col items-center"
                  whileHover={{ scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  onClick={() => handleNavigate("/about")}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                    <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clipRule="evenodd" />
                  </svg>

                  {/* <FaUserAlt size={28} /> */}
                  <span className="text-sm mt-2">About</span>
                </motion.a>



                <motion.a
                  href="#"
                  className="flex flex-col items-center"
                  whileHover={{ scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  onClick={() => handleNavigate("/work")}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                    <path fillRule="evenodd" d="M7.5 5.25a3 3 0 0 1 3-3h3a3 3 0 0 1 3 3v.205c.933.085 1.857.197 2.774.334 1.454.218 2.476 1.483 2.476 2.917v3.033c0 1.211-.734 2.352-1.936 2.752A24.726 24.726 0 0 1 12 15.75c-2.73 0-5.357-.442-7.814-1.259-1.202-.4-1.936-1.541-1.936-2.752V8.706c0-1.434 1.022-2.7 2.476-2.917A48.814 48.814 0 0 1 7.5 5.455V5.25Zm7.5 0v.09a49.488 49.488 0 0 0-6 0v-.09a1.5 1.5 0 0 1 1.5-1.5h3a1.5 1.5 0 0 1 1.5 1.5Zm-3 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clipRule="evenodd" />
                    <path d="M3 18.4v-2.796a4.3 4.3 0 0 0 .713.31A26.226 26.226 0 0 0 12 17.25c2.892 0 5.68-.468 8.287-1.335.252-.084.49-.189.713-.311V18.4c0 1.452-1.047 2.728-2.523 2.923-2.12.282-4.282.427-6.477.427a49.19 49.19 0 0 1-6.477-.427C4.047 21.128 3 19.852 3 18.4Z" />
                  </svg>
                  {/* <FaBriefcase size={28} /> */}
                  <span className="text-sm mt-2">Work</span>
                </motion.a>

                <motion.a
                  href="mailto:code.ashishkumar@gmail.com?subject=Connect&body=Hi,%20I%20would%20like%20to%20connect%20with%20you."
                  className="flex flex-col items-center"
                  whileHover={{ scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                    <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                    <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
                  </svg>

                  {/* <FaEnvelope size={28} /> */}
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

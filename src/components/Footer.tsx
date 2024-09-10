import React, { useState } from "react";
import { motion } from "framer-motion";
import avatar from "../assets/IMG_1667.jpg";

// Social media links
const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com",
    icon: "https://via.placeholder.com/40x40?text=G",
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com",
    icon: "https://via.placeholder.com/40x40?text=L",
  },
  {
    name: "Email",
    url: "https://instagram.com",
    icon: "https://via.placeholder.com/40x40?text=I",
  },
  {
    name: "YouTube",
    url: "https://youtube.com",
    icon: "https://via.placeholder.com/40x40?text=Y",
  },
];

// Footer component
const Footer = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <>
      <div className="flex px-8 justify-center items-center bg-white">
        <div
          className="relative overflow-hidden h-20 w-full text-start"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <motion.div
            className="absolute inset-0 flex flex-col justify-center"
            animate={{ y: isHovered ? "-100%" : "0%" }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            <h1 className="text-6xl  text-black">Let's collaborate</h1>
          </motion.div>

          <motion.div
            className="absolute inset-0 flex flex-col justify-center"
            animate={{ y: isHovered ? "0%" : "100%" }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            <h1 className="text-6xl  text-black">code.ashishkumar@gmail.com</h1>
          </motion.div>
        </div>
      </div>
      <footer className="bg-white text-black py-8">
        {/* Top Section with Social Media Links */}
        <div className="px-8 flex-1 flex-col items-center justify-center shrink ">
          <motion.div
            className="flex  border-y text-center border-neutral-200  divide-x "
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <motion.div
              className="p-2 text-start  w-60 hidden lg:block "
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.h1
                className="color-black"
                // whileHover={{ scale: 1.06 }}
                transition={{
                  duration: 0.2,
                  type: "spring",
                  stiffness: 400,
                  damping: 10,
                }}
              >
                Name
              </motion.h1>
            </motion.div>

            {socialLinks.map((link, index) => (
              <motion.div
                key={index}
                href={link.url}
                className="p-2  hover:bg-neutral-100 hover:ease-in duration-200 cursor-pointer flex-1 "
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.h1
                  key={index}
                  className="color-black shrink "
                  whileHover={{ scale: 1.1 }}
                  transition={{
                    duration: 0.2,
                    type: "spring",
                    stiffness: 400,
                    damping: 10,
                  }}
                >
                  {link.name}
                </motion.h1>
              </motion.div>
            ))}
            <motion.div
              className="p-2 w-60 hidden lg:block  text-end"
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.h1
                className="color-black"
                transition={{
                  duration: 0.2,
                  type: "spring",
                  stiffness: 400,
                  damping: 10,
                }}
              >
                2024
              </motion.h1>
            </motion.div>
          </motion.div>

          {/* Bottom Section with Image */}
          {/* <motion.div
            className=" w-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <img
              src={avatar}
              alt="Footer Image"
              className="rounded-lg shadow-lg object-contain   w-full h-96"
            />
          </motion.div> */}
          <motion.div
            className="relative rounded-lg pt-2 shadow-lg object-contain h-96 w-full"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            {/* Image */}
            <motion.img
              src={avatar}
              alt="Ashish Kumar"
              className="rounded-lg w-full h-full object-contain"
              width="200px"
              height="200px"
            />

            {/* Gray overlay div */}
            <motion.div className="absolute inset-0 bg-gray-200 bg-opacity-50 transition-opacity duration-300 hover:opacity-0"></motion.div>
          </motion.div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

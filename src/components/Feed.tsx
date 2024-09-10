import React from "react";
import { motion } from "framer-motion";

const images1 = [
  "https://img.freepik.com/free-vector/web-page-vertical-design-set-with-new-project-symbols_1284-10212.jpg?w=1380&t=st=1725201663~exp=1725202263~hmac=f5b58787fd6d3825942036dbbc0ed6fb0a4155c7ae5ac9cc396975e041f1a4de",
  "https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg?auto=compress&cs=tinysrgb&w=800",
];

const images = [
  "https://img.freepik.com/free-vector/web-page-vertical-design-set-with-new-project-symbols_1284-10212.jpg?w=1380&t=st=1725201663~exp=1725202263~hmac=f5b58787fd6d3825942036dbbc0ed6fb0a4155c7ae5ac9cc396975e041f1a4de",
  "https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg?auto=compress&cs=tinysrgb&w=800",
  "https://images.pexels.com/photos/633409/pexels-photo-633409.jpeg?auto=compress&cs=tinysrgb&w=800",
];
const text = [
  { content: "This is", fade: true },
  { content: " " },
  { content: "all", fade: true },
  { content: " " },
  { content: "of", fade: true },
  { content: " " },
  { content: "my work", fade: false },
  { content: " " },
  { content: "from", fade: true },
  { content: " " },
  { content: "design", fade: false },
  { content: " " },
  { content: " " },
  { content: "to", fade: true },
  { content: " " },
  { content: "finish", fade: false },
];

const Feed = () => {
  return (
    <div className="relative mx-auto   lg:px-8  lg:py-10 min-[320px]:px-4 min-[320px]:py-4">
      <motion.div
        initial="hidden"
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="  lg:text-8xl min-[320px]:text-4xl font-medium tracking-tight"
      >
        {text.map((char, index) => (
          <motion.h1
            key={index}
            initial={{ opacity: 0, x: 0 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              delay: index * 0.07,
              duration: 0.5,
              ease: "easeOut",
            }}
            className={`${char.fade ? "inline-block text-gray-400" : "inline-block"}`}
          >
            {char.content === " "
              ? // ? window.innerWidth > 768
                "\u00A0"
              : // : " "
                char.content}

            {/* Add space if the character is a space */}
          </motion.h1>
        ))}
      </motion.div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-2  pb-2 pt-11">
        {images1.map((src, index) => (
          <motion.div
            key={index}
            className="relative overflow-hidden "
            // whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <motion.img
              src={src}
              alt={`Gallery image ${index + 1}`}
              className="w-full  block object-center render-auto object-cover"
              // whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 ">
        {images.map((src, index) => (
          <motion.div
            key={index}
            className="relative overflow-hidden "
            // whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <motion.img
              src={src}
              alt={`Gallery image ${index + 1}`}
              className="w-full  block object-center render-auto object-cover"
              // whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Feed;

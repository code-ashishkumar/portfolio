import React from "react";
import { motion, useAnimation, useScroll, useTransform } from "framer-motion";
import avatar from "../assets/IMG_1667.jpg";

const Landing = () => {
  // Scroll animation
  const { scrollY } = useScroll();
  const yTransform = useTransform(scrollY, [0, 1000], [0, 100]); // Adjust values based on your needs

  const controls = useAnimation();

  React.useEffect(() => {
    controls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    });
  }, [controls]);

  return (
    <div className=" mx-auto max-w-7xl py-40 min-[320px]:py-20 min-[320px]:px-6 lg:py-40  relative isolate px-6 lg:px-8">
      <div className="text-center">
        <motion.img
          src={avatar}
          alt="Ashish Kumar"
          className="object-cover m-auto pb-6 rounded-full"
          width="400px"
          height="400px"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        />

        <motion.h1
          className="lg:text-7xl min-[320px]:text-4xl font-lite tracking-tight  pb-2"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <span className="text-gray-400 ">Passionate</span> React Developer
        </motion.h1>

        <div className="relative overflow-hidden">
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent"
          />
          <motion.h1
            className="font-lite tracking-tight sm:text-4xl text-black bg-clip-text bg-gradient-to-r from-gray-800 via-gray-500 to-gray-800"
            initial={{ opacity: 0, y: 50 }}
            animate={controls}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Creating <span className="text-gray-400">Dynamic</span> Web
            Experiences
          </motion.h1>
        </div>

        <motion.h1
          className="mt-4 mx-auto lg:text-2xl max-w-4xl min-[320px]:text-sm text-lite text-lg leading-7 tracking-tight"
          style={{ y: yTransform }} // Applying scroll-based transformation
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          As a dedicated React developer, I specialize in crafting
          high-performance, interactive web applications that deliver seamless
          user experiences. With a solid foundation in modern JavaScript and a
          deep understanding of React’s ecosystem, I build scalable solutions
          that drive user engagement and business growth.
        </motion.h1>
      </div>
    </div>
  );
};

export default Landing;

import { motion, useScroll } from "framer-motion";
import React, { useRef } from "react";
import dits from "../assets/images/image.png";
import omninous from "../assets/images/download.png";

function About() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const text = [
    { content: "I'm", fade: true },
    { content: " " },
    { content: "a", fade: true },
    { content: " " },
    { content: "Mern", fade: true },
    { content: " " },
    { content: "Stack", fade: true },
    { content: " " },
    { content: "Engineer,", fade: false },
    { content: " " },
    { content: "Django Developer", fade: true },
    { content: " " },
    { content: "and", fade: true },
    { content: " " },
    { content: "designer.", fade: false },
    { content: " " },
    { content: "Living in", fade: true },
    { content: " " },
    { content: "Chandigarh", fade: false },
  ];

  return (
    <>
      <div className="mx-auto  py-10 sm:py-48 lg:py-10  px-8">
        <motion.div
          initial="hidden"
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-8xl font-medium tracking-tight"
        >
          {text.map((char, index) => (
            <motion.h1
              key={index}
              initial={{ opacity: 0, x: 0 }} // Initial state for each character
              animate={{ opacity: 1, x: 0 }} // Animate to final state
              transition={{
                delay: index * 0.07, // Staggered delay for each character
                duration: 0.5,
                ease: "easeOut",
              }}
              className={`${char.fade ? "inline-block text-gray-400" : "inline-block"}`}
            >
              {char.content === " " ? "\u00A0" : char.content}
              {/* Add space if the character is a space */}
            </motion.h1>
          ))}
        </motion.div>
      </div>
      <section className="grid relative py-20 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4  px-8">
        {/* <h1 className="progress text-4xl font-medium px-1 py-4">id</h1> */}
        <div className="progress text-6xl font-medium px-2 col-span-2">
          I have three years of experience in building interactive high
          performance web applications
        </div>
        <div className="py-4 text-gray-400 col-span-2">
          Experience Experience Experience Experience Experience Experience
          Experience Experience Experience Experience Experience Experience
          Experience Experience Experience Experience Experience Experience
          Experience Experience Experience Experience Experience Experience
          Experience Experience Experience Experience Experience Experience
          Experience Experience Experience Experience Experience Experience
          Experience Experience Experience Experience Experience Experience
          Experience Experience Experience Experience Experience Experience
        </div>
      </section>
      <section className="grid relative py-20 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4  px-8">
        <div className="sticky flex justify-center items-center top-6 rounded-full bg-black w-10 h-10 text-white text-center text-2xl font-medium ">
          <div className="text-center">1</div>
        </div>
        <div className="progress text-6xl font-medium px-2 ">
          <h1>Work Experience</h1>
        </div>

        <div className="lg:col-span-2 flex flex-col gap-6">
          <img src={dits} alt="Ashish Kumar" className=" my-2 w-16 h-10" />
          <div className=" font-bold  tracking-wide">
            <h1>Ditstek Innovations, Frontend Engineer</h1>
            <h1>2022 - Present, Chandigarh</h1>
          </div>
          <div className="text-gray-400">
            Experience Experience Experience Experience Experience Experience
            Experience Experience Experience Experience Experience Experience
            Experience Experience Experience Experience Experience Experience
            Experience Experience Experience Experience Experience Experience
            Experience Experience Experience Experience Experience Experience
            Experience Experience Experience Experience Experience Experience
            Experience Experience Experience Experience Experience Experience
            Experience Experience Experience Experience Experience Experience
          </div>
          <div className="relative w-1 h-20 bg-gray-300  overflow-hidden">
            {/* Green animation inside the timeline */}
            <motion.div
              className="absolute bottom-0 w-full h-full bg-green-500"
              initial={{ y: "100%" }}
              animate={{ y: "-100%" }}
              transition={{
                duration: 0.6, // Faster speed
                ease: "linear",
                repeat: Infinity,
              }}
            />
          </div>
          <img src={omninous} alt="Ashish Kumar" className=" my-2 w-10 h-10" />
          <div className=" font-bold  tracking-wide">
            <h1>Ominous Solutions, Django Developer</h1>
            <h1>2021 - 2022, Mohali</h1>
          </div>
          <div className="text-gray-400">
            Experience Experience Experience Experience Experience Experience
            Experience Experience Experience Experience Experience Experience
            Experience Experience Experience Experience Experience Experience
            Experience Experience Experience Experience Experience Experience
            Experience Experience Experience Experience Experience Experience
            Experience Experience Experience Experience Experience Experience
            Experience Experience Experience Experience Experience Experience
            Experience Experience Experience Experience Experience Experience
          </div>
          {/* <div className="relative w-1 h-20 bg-gray-300  overflow-hidden">
            <motion.div
              className="absolute bottom-0 w-full h-full bg-green-500"
              initial={{ y: "100%" }}
              animate={{ y: "-100%" }}
              transition={{
                duration: 0.6, // Faster speed
                ease: "linear",
                repeat: Infinity,
              }}
            />
          </div> */}
        </div>
      </section>
    </>
  );
}

export default About;

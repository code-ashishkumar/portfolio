import { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import dits from "../assets/images/image.png";
import omninous from "../assets/images/download.png";

function Item({ id, title, content }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  return (
    <section className="grid relative py-20 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4  px-8">
      <h1 className="progress text-4xl font-medium px-1 py-4">{id}</h1>
      <h1 className="progress text-4xl font-medium px-2 py-4 text-end">
        {title}
      </h1>
      <div className="py-4 text-gray-400 col-span-2">{content}</div>
    </section>
  );
}

export default function Work() {
  const text = [
    { content: "I", fade: true },
    { content: " " },
    { content: "Create", fade: true },
    { content: " " },
    { content: "Interactive", fade: true },
    { content: " " },
    { content: "High", fade: true },
    { content: " " },
    { content: "Performance", fade: false },
    { content: " " },
    { content: "Web", fade: true },
    { content: " " },
    { content: "Applications", fade: true },
    { content: " " },
    { content: "with", fade: true },
    { content: " " },
    { content: "Smooth", fade: true },
    { content: " " },
    { content: "User", fade: true },
    { content: " " },
    { content: "Experience,", fade: false },
  ];

  return (
    <>
      <div className="mx-auto  py-6 sm:py-48 lg:py-10  px-8">
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
        <div className="sticky flex justify-center items-center top-6 rounded-full bg-black w-10 h-10 text-white text-center text-2xl font-medium ">
          <div className="text-center">1</div>
        </div>
        <div className="progress text-6xl font-medium px-2 ">
          <h1>Frontend Engineer, React</h1>
        </div>

        <div className="lg:col-span-2 flex flex-col gap-6">
          <img src={dits} alt="Ashish Kumar" className=" my-2 w-16 h-10" />
          <div className=" font-bold  tracking-wide">
            <h1>A2Z Sync & Amazon, Frontend Engineer</h1>
            <h1>Ditstek Innovations</h1>
            <h1>2024 - Present, Chandigarh</h1>
          </div>
          <div className="text-gray-400">
            A2Z Sync & Amazon, is a automotive product that collab with Amazon
            for selling the vehicles. <br /> I have worked on this project and
            built the responsive frontend pages in react, integrated into the
            Laravel mix framwork through webpack. <br /> I have created reusable
            components and used them into the pages tha I have built. <br /> I
            have built the Lending system and dealership information pages. I
            used typescript ensuring the types and intefaces are properly
            defined. Created test cases with Jest and React Testing Library
            <div className="py-2 text-gray-700">
              Tech Stack : Reactjs, Typescript, Laravel Mix, Webpack, eslint,
              prettier,
            </div>
            <div className="text-gray-700">Others : Teams, Jira, Bitbucket</div>
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

          <img src={dits} alt="Ashish Kumar" className=" my-2 w-16 h-10" />
          <div className=" font-bold  tracking-wide">
            <h1>Chat App, Frontend Engineer</h1>
            <h1>Ditstek Innovations</h1>
            <h1>2024 - 2024, Chandigarh</h1>
          </div>
          <div className="text-gray-400">
            Chat App I have created for a project name City Wide. The Chat was
            built for handeling the quick intercation between the patrol agents
            and management officers. <br /> I have created the Chat sytem with
            react, socket and nodejs. The system should have the functioanlity
            of realtime messaging, typing indicator, online and offline statsus,
            read, unread system, timestamp diffrenciate, group messaging and
            images and voice sending features. <br /> All of tehse features I
            have built with socket io
            <div className="py-2 text-gray-700">
              Tech Stack : Reactjs, Typescript, Laravel, Webpack, eslint,
              prettier,
            </div>
            <div className="text-gray-700">Others : Slack, Trello, Github</div>
          </div>

          <img src={dits} alt="Ashish Kumar" className=" my-2 w-16 h-10" />
          <div className=" font-bold  tracking-wide">
            <h1>Praxis Financial Services, Frontend Engineer</h1>
            <h1>Ditstek Innovations</h1>
            <h1>2022 - 2024, Chandigarh</h1>
          </div>
          <div className="text-gray-400">
            Praxis Financial Services is a product pay the panel beaters on
            behalf of lenders. <br /> I created this project from scratch on the
            fronend. From design to architecture I created the pages that
            interact with user with many features. <br />I have used typescript
            with poper tyypes and interfaces defined. The system runs on the
            Redux-Toolkit
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
          <img src={dits} alt="Ashish Kumar" className=" my-2 w-16 h-10" />
          <div className=" font-bold  tracking-wide">
            <h1>Praxis Financial Services, Frontend Engineer</h1>
            <h1>Ditstek Innovations</h1>
            <h1>2022 - Present, Chandigarh</h1>
          </div>
          <div className="text-gray-400">
            Praxis Financial Services is a product pay the panel beaters on
            behalf of lenders
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
            <h1>Blog App, Django Developer</h1>
            <h1>Ominous Solutions</h1>
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

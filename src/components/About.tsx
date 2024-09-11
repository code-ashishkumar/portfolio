import { motion } from "framer-motion";
import omninous from "../assets/images/download.png";
import dits from "../assets/images/image.png";

function About() {
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
    <div className=" lg:px-8  lg:py-10 min-[320px]:px-4 min-[320px]:py-4">
      <motion.div
        initial="hidden"
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="  lg:text-8xl min-[320px]:text-4xl font-medium tracking-tight"
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
            {char.content === " "
              ? // ? window.innerWidth > 768
                "\u00A0"
              : // : " "
                char.content}

            {/* {char.content === " "
              ? window.innerWidth > 768
                ? "\u00A0"
                : " "
              : char.content} */}

            {/* Add space if the character is a space */}
          </motion.h1>
        ))}
      </motion.div>

      <section className="flex flex-col lg:grid lg:relative lg:pt-20 min-[320px]:pt-10 sm:grid-cols-1 min-[320px]:shrink md:grid-cols-3 lg:grid-cols-4 gap-4  min-[320px]:py-6">
        {/* <h1 className="progress text-4xl font-medium px-1 py-4">id</h1> */}
        <div className="progress lg:text-6xl min-[320px]:text-2xl  font-medium  col-span-2">
          I have three years of experience in building interactive high
          performance web applications
        </div>
        <div className="py-4 text-gray-400 col-span-2 min-[320px]:shrink tracking-tight">
          My expertise spans both frontend and backend development, ensuring
          seamless user experiences and scalable, maintainable solutions. I
          specialize in React, Node.js, MongoDB, Express, and Django, combining
          these technologies to create robust applications. With a strong focus
          on performance optimization, clean architecture, and a keen eye for
          design, I strive to deliver impactful digital solutions that meet
          modern web standards.
        </div>
      </section>
      <section className="flex flex-col  lg:grid lg:relative  min-[320px]:shrink lg:py-20 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 min-[320px]:py-4">
        <div className="sticky hidden lg:block lg:flex  justify-center items-center top-6 rounded-full bg-black w-10 h-10 text-white text-center text-2xl font-medium ">
          <div className=" text-center items-center">1</div>
        </div>
        <div className="progress md:text-4xl lg:text-5xl xl:text-6xl font-medium  min-[320px]:shrink min-[320px]:text-4xl  tracking-tigh">
          <h1>Work Experience</h1>
        </div>

        <div className="lg:col-span-2 flex flex-col gap-6">
          <img src={dits} alt="Ashish Kumar" className=" my-2 w-16 h-10" />
          <div className=" font-bold  tracking-wide">
            <h1>Ditstek Innovations, Frontend Engineer</h1>
            <h1>2022 - Present, Chandigarh</h1>
          </div>
          <div className="text-gray-400 min-[320px]:shrink tracking-tigh">
            As a Frontend Engineer at Ditstek Innovations (2022 - Present,
            Chandigarh), I have been deeply involved in developing
            high-performance, responsive, and intuitive web applications, with a
            strong emphasis on React and TypeScript. <br /> My responsibilities
            include creating scalable, reusable components and ensuring a
            seamless, interactive user experience across various platforms.
            <br /> I work closely with backend teams to integrate RESTful APIs
            and GraphQL, ensuring optimal data handling and performance. I
            specialize in state management using Redux-Toolkit and Context API,
            ensuring efficient data flow and reducing unnecessary re-renders. I
            also prioritize code quality, maintaining best practices through
            tools like ESLint, Prettier, and Husky for pre-commit hooks, which
            enforce clean and consistent code. My work involves utilizing UI
            libraries such as Ant Design and Material-UI, enhancing design
            consistency and speeding up development. <br /> I regularly
            implement performance optimizations, including lazy loading and
            code-splitting, to ensure faster load times. Additionally, I focus
            on cross-browser compatibility, accessibility (WCAG standards), and
            mobile-first design to deliver a comprehensive and inclusive user
            experience. With an eye for detail and a commitment to delivering
            robust, maintainable code, I contribute to the innovative solutions
            at Ditstek Innovations, driving forward their web application
            projects.
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
            A Django Developer at Ominous Solutions, I contributed to the
            development of scalable and secure web applications. I worked
            extensively with Django's robust framework, ensuring efficient
            database interactions through Django ORM. My role involved
            implementing secure RESTful APIs, managing user authentication,
            session handling, and applying best practices like CSRF protection.
            I followed the MVC architecture, creating maintainable and flexible
            code that supported a wide range of business requirements. This
            experience strengthened my expertise in back-end development and
            server-side logic.
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
    </div>
  );
}

export default About;

import { motion } from "framer-motion";

// function Item({ id, title, content }) {
//   const ref = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["end end", "start start"],
//   });

//   return (
//     <section className="grid relative py-20 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4  px-8">
//       <h1 className="progress text-4xl font-medium px-1 py-4">{id}</h1>
//       <h1 className="progress text-6xl font-medium px-2 py-4 ">{title}</h1>
//       <div className="py-4 text-gray-400 col-span-2">{content}</div>
//     </section>
//   );
// }

export default function Projects() {
  const text = [
    { content: "These are", fade: true },
    { content: " " },
    { content: "all", fade: true },
    { content: " " },
    { content: "of", fade: true },
    { content: " " },
    { content: "my", fade: true },
    { content: " " },
    { content: "projects", fade: false },
    { content: " " },
    { content: "from", fade: true },
    { content: " " },
    { content: "design", fade: true },
    { content: " " },
    { content: "to", fade: true },
    { content: " " },
    { content: "finish", fade: false },
  ];

  // const experiences = [
  //   {
  //     id: "1",
  //     title: "React Developer",
  //     content: `Experience Experience Experience Experience Experience Experience
  //       Experience Experience Experience Experience Experience Experience
  //       Experience Experience Experience Experience Experience Experience
  //       Experience Experience Experience Experience Experience Experience
  //       Experience Experience Experience Experience Experience Experience
  //       Experience Experience Experience Experience Experience Experience
  //       Experience Experience Experience Experience Experience Experience
  //       Experience Experience Experience Experience Experience Experience`,
  //   },
  //   {
  //     id: "2",
  //     title: "Web Developer",
  //     content: "Experience with React, Next.js, and Tailwind CSS",
  //   },
  //   {
  //     id: "3",
  //     title: "Python Developer",
  //     content: "Experience with React, Next.js, and Tailwind CSS",
  //   },
  // ];
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
      {/* {experiences.map((experience) => (
        <Item {...experience} />
      ))} */}
    </>
  );
}

import { motion } from "framer-motion";
import projectVideo from "../assets/projects/screen-capture.mp4";
import projectVideo2 from "../assets/projects/screen-capture2.mp4";
import { useRef, useEffect } from "react";
import imageLong from "../assets/projects/image-long.png";
import imageDashboard from "../assets/projects/image-dashboard.png";

const images1 = [projectVideo, imageLong];

const images = [
  projectVideo,
  imageDashboard,
  "https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg?auto=compress&cs=tinysrgb&w=800",
  "https://images.pexels.com/photos/633409/pexels-photo-633409.jpeg?auto=compress&cs=tinysrgb&w=800",
  projectVideo2,
  // imageLong,
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
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 1.5;
    }
  }, []);

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
            className={`${
              char.fade ? "inline-block text-gray-400" : "inline-block"
            }`}
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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-3  pb-2 pt-11">
        {images1.map((src, index) => (
          <motion.div
            key={index}
            className="relative  h-full  overflow-hidden "
            // whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            {/* 
            <motion.img
              src={src}
              alt={`Gallery image ${index + 1}`}
              className="w-full    block  render-auto object-center"
              // whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            /> */}

            {!src.includes(".mp4") ? (
              <motion.img
                src={src}
                alt={`Gallery image ${index + 1}`}
                className="w-full  block object-center render-auto "
                // whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              />
            ) : (
              <motion.video
                src={src}
                ref={videoRef}
                autoPlay
                controls={false}
                muted
                playsInline
                className="w-full h-full block  object-top render-auto "
                // whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              />
            )}
          </motion.div>
        ))}
      </div>
      <div className="grid gap-3 auto-rows-min grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-[repeat(4,minmax(200px,1fr))] h-min justify-start p-0 relative w-full">
        {images.map((src, index) =>
          !src.includes(".mp4") ? (
            <motion.img
              src={src}
              alt={`Gallery image ${index + 1}`}
              className="w-full block  render-auto object-cover"
              // whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            />
          ) : (
            <motion.video
              src={src}
              ref={videoRef}
              autoPlay
              controls={false}
              muted
              playsInline
              className="w-full h-full block object-contain  object-top col-span-2   render-auto "
              // whileHover={{ scale: 1.1 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
          )
        )}
      </div>
    </div>
  );
};

export default Feed;

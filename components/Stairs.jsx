"use client";
import { motion } from "framer-motion";

const stairAnimation = {
  initial: {
    right: "0%",
  },
  animate: {
    right: "100%",
  },
  exit: {
    left: ["100%", "0%"],
  },
  // initial: {
  //   top: "0%",
  // },
  // animate: {
  //   top: "100%",
  // },
  // exit: {
  //   top: ["100%", "0%"],
  // },
};

const reversedIndex = (index) => {
  const totalSteps = 5;
  return totalSteps - index - 1;
};

const Stairs = () => {
  return (
    <>
      {[...Array(5)].map((_, index) => {
        return(<motion.div
          key={index}
          variants={stairAnimation}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{
            duration: 0.2,
            ease: "easeInOut",
            delay: reversedIndex(index) * 0.1,
          }}
          className="w-full h-full bg-accent relative"
        />);
      })}
    </>
  );
};

export default Stairs;

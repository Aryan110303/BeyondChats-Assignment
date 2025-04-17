import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

export const SlideTabsExample = () => {
  return (
    <div className="py-4">
      <SlideTabs />
    </div>
  );
};

const SlideTabs = () => {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <ul
      onMouseLeave={() => {
        setPosition((pv) => ({
          ...pv,
          opacity: 0,
        }));
      }}
      className="relative mx-auto flex w-fit rounded-full border-2 border-[#7b80ff] bg-main/50 backdrop-blur-md p-1"
    >
      <Tab setPosition={setPosition} onClick={() => scrollToSection('hero')}>Start</Tab>
      <Tab setPosition={setPosition} onClick={() => scrollToSection('bento')}>Perks</Tab>
      <Tab setPosition={setPosition} onClick={() => scrollToSection('AI')}>AI-ish</Tab>
      <Tab setPosition={setPosition} onClick={() => scrollToSection('steps')}>Steps</Tab>
      <Tab setPosition={setPosition} onClick={() => scrollToSection('try')}>Fine, I'll Try</Tab>

      <Cursor position={position} />
    </ul>
  );
};

const Tab = ({ children, setPosition, onClick }) => {
  const ref = useRef(null);

  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        if (!ref?.current) return;

        const { width } = ref.current.getBoundingClientRect();

        setPosition({
          left: ref.current.offsetLeft,
          width,
          opacity: 1,
        });
      }}
      onClick={onClick}
      className="relative z-10 block cursor-pointer px-3 py-1.5 text-xs uppercase text-[#7b80ff] mix-blend-difference md:px-5 md:py-3 md:text-base font-gothic hover:text-white transition-colors duration-200"
    >
      {children}
    </li>
  );
};

const Cursor = ({ position }) => {
  return (
    <motion.li
      animate={{
        ...position,
      }}
      className="absolute z-0 h-7 rounded-full bg-[#7b80ff] md:h-12"
    />
  );
};
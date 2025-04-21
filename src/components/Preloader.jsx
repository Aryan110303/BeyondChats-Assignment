import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Preloader = ({ onComplete }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 30); // Slowed down progress

    // Simulate asset loading
    const loadingTimeout = setTimeout(() => {
      setIsExiting(true);
      setTimeout(() => {
        setIsLoading(false);
        onComplete();
      }, 1500); // Added delay for exit animation
    }, 4000); // Increased total loading time

    return () => {
      clearInterval(interval);
      clearTimeout(loadingTimeout);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
          className="fixed inset-0 bg-black flex flex-col items-center justify-center z-50"
        >
          <div className="relative w-64 h-64">
            {/* Animated circles */}
            <motion.div
              className="absolute inset-0 border-2 border-[#7b80ff] rounded-full"
              animate={{
                scale: isExiting ? [1, 1.5, 2] : [1, 1.2, 1],
                rotate: isExiting ? [0, 180, 360] : [0, 180, 360],
                opacity: isExiting ? [1, 0.5, 0] : 1,
              }}
              transition={{
                duration: isExiting ? 1.5 : 3,
                repeat: isExiting ? 0 : Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute inset-0 border-2 border-[#7b80ff] rounded-full"
              animate={{
                scale: isExiting ? [1.2, 1.5, 2] : [1.2, 1, 1.2],
                rotate: isExiting ? [360, 180, 0] : [360, 180, 0],
                opacity: isExiting ? [1, 0.5, 0] : 1,
              }}
              transition={{
                duration: isExiting ? 1.5 : 3,
                repeat: isExiting ? 0 : Infinity,
                ease: "easeInOut",
              }}
            />
            
            {/* Center text */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: isExiting ? 0 : 1 }}
              transition={{ duration: 1 }}
            >
              <h2 className="text-2xl font-gothic text-[#7b80ff]">FLUX</h2>
            </motion.div>
          </div>

          {/* Progress bar */}
          <motion.div
            className="mt-12 w-64 h-1 bg-gray-800 rounded-full overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: isExiting ? 0 : 1 }}
            transition={{ duration: 1 }}
          >
            <motion.div
              className="h-full bg-[#7b80ff]"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>

          {/* Loading text */}
          <motion.p
            className="mt-4 text-gray-400 font-gothic"
            initial={{ opacity: 0 }}
            animate={{ opacity: isExiting ? 0 : 1 }}
            transition={{ duration: 1 }}
          >
            Loading your financial future...
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader; 
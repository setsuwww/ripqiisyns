import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function IntroWrapper({ children }) {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowIntro(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {showIntro && (
          <motion.div
            key="intro"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, y: -200 }}
            transition={{ duration: 1 }}
            className="fixed inset-0 flex items-center justify-center bg-black z-50 lg:p-0 p-8"
          >
            <div className="ring ring-sky-500/10 border-0 border-t-2 border-sky-500/20 rounded-xl p-8 flex flex-row items-center gap-12">

              <div className="flex flex-col text-left">
                <motion.h1
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -200, opacity: 0 }}
                  transition={{ duration: 1 }}
                  className="text-4xl font-bold gradient-text"
                >
                  Sheeshh!
                </motion.h1>

                <motion.p
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -100, opacity: 0 }}
                  transition={{ duration: 1, delay: 0.3 }}
                  className="mt-4 text-lg text-gray-300 max-w-sm"
                >
                  Welcome to my Portfolio! feel the Essence & Art of Elegance.
                </motion.p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {!showIntro && <>{children}</>}
    </>
  );
}

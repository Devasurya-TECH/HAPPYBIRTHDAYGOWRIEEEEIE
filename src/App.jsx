import React, { useState, Suspense, lazy } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Envelope from "./components/Envelope";
import Hero from "./components/Hero";
import FloatingHearts from "./components/FloatingHearts";

// Lazy load all heavy downstream components to eliminate main-thread stutter
const Memories = lazy(() => import("./components/Memories"));
const LoveMessage = lazy(() => import("./components/LoveMessage"));
const Celebration = lazy(() => import("./components/Celebration"));
const Ending = lazy(() => import("./components/Ending"));
import BackgroundMusic from "./components/BackgroundMusic";

function App() {
  const [introFinished, setIntroFinished] = useState(false);
  const [showSurprise, setShowSurprise] = useState(false);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);

  return (
    <div className="relative min-h-screen text-white bg-black">
      <div className="mesh-bg" />

      {/* Always show hearts and background music */}
      <FloatingHearts />
      <BackgroundMusic autoplay={isMusicPlaying} />

      <AnimatePresence mode="wait">
        {!introFinished && (
          <Envelope
            key="envelope"
            onStartMusic={() => setIsMusicPlaying(true)}
            onComplete={() => setIntroFinished(true)}
          />
        )}
      </AnimatePresence>

      {introFinished && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 w-full"
        >
          {!showSurprise ? (
            <AnimatePresence mode="wait">
              <Hero key="hero" onOpen={() => setShowSurprise(true)} />
            </AnimatePresence>
          ) : (
            <div className="relative">
              {/* Individual Suspense blocks for staggered hydration */}
              <Suspense fallback={<SectionLoader text="Curating memories..." />}>
                <Memories />
              </Suspense>

              <Suspense fallback={<SectionLoader text="Preparing your message..." />}>
                <LoveMessage />
              </Suspense>

              <Suspense fallback={<SectionLoader text="Setting up celebration..." />}>
                <Celebration />
              </Suspense>

              <Suspense fallback={<SectionLoader text="Finalizing..." />}>
                <Ending />
              </Suspense>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
}

const SectionLoader = ({ text }) => (
  <div className="h-64 flex flex-col items-center justify-center gap-4 bg-black/50 backdrop-blur-sm">
    <div className="relative w-12 h-12">
      <div className="absolute inset-0 border-2 border-premium-rose/20 rounded-full" />
      <motion.div
        className="absolute inset-0 border-2 border-t-premium-rose rounded-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      />
    </div>
    <p className="font-sans text-xs uppercase tracking-widest text-premium-rose animate-pulse">
      {text}
    </p>
  </div>
);

export default App;

import React from "react";
import { motion } from "framer-motion";
import Monkey from "./Monkey";

const SectionDivider = ({ icon = "❤️", text = "" }) => (
  <div className="flex items-center gap-6 my-4 w-full max-w-xl mx-auto">
    <div className="flex-1 h-px bg-gradient-to-r from-transparent via-premium-rose/50 to-transparent" />
    <span className="text-premium-gold font-script text-2xl flex items-center gap-2">
      {icon} {text && <span className="text-premium-soft">{text}</span>} {icon}
    </span>
    <div className="flex-1 h-px bg-gradient-to-r from-transparent via-premium-rose/50 to-transparent" />
  </div>
);

const GlowCircle = ({ className, fromColor }) => (
  <div
    className={`absolute rounded-full pointer-events-none animate-pulse bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] to-transparent ${className} ${fromColor}`}
  />
);

const Hero = ({ onOpen }) => {
  const bgImage = "/couple photos/IMG_20251219_125421639.webp";

  const letters = "Happy Birthday".split("");
  const name = "Shottey ♡".split("");

  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden">
      {/* Cinematic Background with slow zoom */}
      <motion.div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat will-change-transform"
        style={{
          backgroundImage: `url("${bgImage}")`,
          backfaceVisibility: "hidden",
        }}
        initial={{ scale: 1.2, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 1.1, opacity: 0, filter: "blur(10px)" }}
        transition={{ duration: 2.5, ease: [0.22, 1, 0.36, 1] }}
      />

      {/* Multi-layer overlays for depth */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/70 via-black/20 to-black/80" />
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-premium-deep/30 via-transparent to-premium-rose/20" />

      {/* Glow orbs - Optimized with Radial Gradients */}
      <GlowCircle
        className="top-1/4 -right-20 w-[500px] h-[500px] opacity-40"
        fromColor="from-premium-rose"
      />
      <GlowCircle
        className="bottom-1/4 -left-20 w-[500px] h-[500px] opacity-40"
        fromColor="from-premium-deep"
      />
      <GlowCircle
        className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-20"
        fromColor="from-premium-rose"
      />

      {/* Main glass card */}
      <motion.div
        className="z-20 text-center px-4 max-w-7xl w-full flex flex-col items-center justify-center h-full relative"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1.4 }}
      >
        <motion.div
          className="mb-8 flex flex-col items-center justify-center gap-2"
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.9, duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <h1 className="font-display text-5xl sm:text-7xl md:text-9xl lg:text-[10rem] text-white leading-none drop-shadow-[0_4px_40px_rgba(243,58,106,0.6)]">
            Happy Birthday
          </h1>
          <div className="font-script text-6xl sm:text-8xl md:text-[8rem] lg:text-[10rem] text-premium-rose italic">
            Shottey ❤️
          </div>
        </motion.div>

        <SectionDivider icon="🌹" />

        <motion.p
          className="font-script text-2xl md:text-4xl text-white/90 mt-6 mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5 }}
        >
          A small surprise made just for you.
        </motion.p>

        <motion.button
          onClick={onOpen}
          className="group relative px-14 py-5 rounded-full text-xl font-semibold overflow-hidden border border-white/30 backdrop-blur-md text-white"
          style={{
            background:
              "linear-gradient(135deg, rgba(243,58,106,0.3) 0%, rgba(74,20,140,0.3) 100%)",
          }}
          whileHover={{
            scale: 1.07,
            boxShadow: "0 0 60px rgba(243,58,106,0.5)",
          }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.8 }}
        >
          <span className="relative z-10 flex items-center gap-3">
            <span>Open Your Surprise</span>
            <motion.span
              animate={{ x: [0, 6, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-premium-rose to-premium-deep opacity-0 group-hover:opacity-40 transition-opacity duration-500" />
        </motion.button>
      </motion.div>

      {/* Floating monkey in corner */}
      <motion.div
        className="absolute bottom-10 left-8 z-20"
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        <Monkey type="floating" />
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 right-1/2 translate-x-1/2 z-20 flex flex-col items-center gap-2 text-white/40"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.5 }}
      >
        <span className="text-xs uppercase tracking-[0.4em] font-sans">
          scroll
        </span>
        <motion.div
          className="w-px h-10 bg-gradient-to-b from-white/40 to-transparent"
          animate={{ scaleY: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </motion.div>
    </div>
  );
};

export default Hero;

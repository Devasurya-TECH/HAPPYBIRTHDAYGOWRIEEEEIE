import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import Monkey from "./Monkey";
import Balloons from "./Balloons";

const Celebration = () => {
  const [isBlown, setIsBlown] = useState(false);

  const handleBlow = () => {
    setIsBlown(true);

    // Multi-phase confetti explosion
    confetti({
      particleCount: 150,
      spread: 80,
      origin: { y: 0.6 },
      colors: ["#F33A6A", "#D4AF37", "#E1BEE7", "#ffffff", "#f9a8d4"],
    });
    setTimeout(
      () =>
        confetti({
          particleCount: 100,
          angle: 60,
          spread: 70,
          origin: { x: 0 },
          colors: ["#F33A6A", "#D4AF37", "#fbbf24"],
        }),
      300,
    );
    setTimeout(
      () =>
        confetti({
          particleCount: 100,
          angle: 120,
          spread: 70,
          origin: { x: 1 },
          colors: ["#F33A6A", "#E1BEE7", "#c084fc"],
        }),
      500,
    );

    // Star burst
    setTimeout(() => {
      const defaults = {
        startVelocity: 30,
        spread: 360,
        ticks: 60,
        zIndex: 9999,
        shapes: ["star"],
      };
      confetti({
        ...defaults,
        particleCount: 80,
        origin: { x: 0.5, y: 0.4 },
        colors: ["#D4AF37", "#ffffff", "#fbbf24"],
      });
    }, 800);

    // Rain
    const duration = 5000;
    const end = Date.now() + duration;
    const intervalId = setInterval(() => {
      if (Date.now() > end) return clearInterval(intervalId);
      confetti({
        particleCount: 4,
        startVelocity: 0,
        ticks: 200,
        origin: { x: Math.random(), y: -0.1 },
        colors: ["#F33A6A", "#D4AF37", "#E1BEE7", "#c084fc"],
        gravity: 0.5,
        drift: Math.random() - 0.3,
      });
    }, 80);
  };

  return (
    <section className="py-32 px-4 min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
      {/* Deep glow backdrop - Optimized */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-premium-rose/20 to-transparent rounded-full" />
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-yellow-400/10 to-transparent rounded-full" />
      </div>

      {/* Header */}
      <motion.div
        className="text-center z-10 relative mb-16 md:mb-24"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <p className="font-sans uppercase tracking-[0.5em] text-premium-gold text-xs md:text-sm font-semibold mb-6 opacity-70">
          🎂 &nbsp; Make a Wish &nbsp; 🎂
        </p>
        <h2
          className="font-display text-6xl md:text-[8rem] text-white leading-tight mb-2"
          style={{
            textShadow:
              "0 0 50px rgba(212,175,55,0.4), 0 0 100px rgba(212,175,55,0.2)",
          }}
        >
          Gowry,
        </h2>
        <p
          className="font-script text-2xl md:text-4xl text-premium-rose/90"
          style={{ textShadow: "0 0 20px rgba(243,58,106,0.3)" }}
        >
          it's time to blow the candle!
        </p>
      </motion.div>

      {/* Cake Container - Removed scaling hack for better layout stability */}
      <motion.div
        className="relative z-10 w-full max-w-md aspect-square flex items-center justify-center -mt-10 md:-mt-16 mb-20 md:mb-28"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
      >
        <div className="relative flex flex-col items-center scale-[1.8] md:scale-[2.2]">
          {/* Candle */}
          <AnimatePresence>
            {!isBlown && (
              <motion.div
                className="absolute -top-16 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center"
                exit={{ y: 20, opacity: 0, scale: 0 }}
                transition={{ duration: 0.4 }}
              >
                {/* Flame */}
                <motion.div
                  className="w-5 h-8 rounded-full mb-0 shadow-[0_0_20px_#fbbf24]"
                  style={{
                    background:
                      "radial-gradient(circle at 50% 80%, #f97316, #fbbf24, #fff7ed)",
                  }}
                  animate={{
                    scaleX: [1, 0.8, 1.2, 1],
                    scaleY: [1, 1.15, 0.9, 1],
                    rotate: [-3, 5, -4, 3, -2],
                  }}
                  transition={{ duration: 0.4, repeat: Infinity }}
                />
                <div className="absolute top-0 w-12 h-12 bg-orange-400/20 blur-xl rounded-full" />
                <div className="w-3 h-12 bg-gradient-to-b from-white to-neutral-300 rounded-full shadow-lg" />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Top cake tier */}
          <motion.div
            className="w-32 h-20 rounded-t-2xl relative overflow-hidden border-t border-white/10"
            style={{
              background: "linear-gradient(to bottom, #F33A6A, #4A148C)",
            }}
            animate={isBlown ? { scaleY: 0.94, y: 2 } : {}}
          >
            <div className="absolute top-0 w-full h-5 bg-white/20 rounded-t-2xl" />
            <div className="absolute top-4 flex justify-around w-full px-2">
              {[0, 1, 2, 3].map((i) => (
                <div key={i} className="w-5 h-6 bg-white/20 rounded-b-full" />
              ))}
            </div>
            <div className="absolute bottom-4 flex justify-around w-full px-4 opacity-70">
              {["⭐", "💕", "⭐"].map((s, i) => (
                <span key={i} className="text-[10px]">
                  {s}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Bottom cake tier */}
          <div
            className="w-48 h-14 -mt-1 rounded-b-2xl relative overflow-hidden border-b-2 border-black/20"
            style={{
              background:
                "linear-gradient(to bottom, rgba(74,20,140,1), rgba(30,8,60,1))",
            }}
          >
            <div className="absolute top-0 w-full h-4 bg-white/5" />
            <div className="absolute bottom-2 flex justify-around w-full px-4 opacity-70">
              {["🌸", "❤️", "🌸"].map((s, i) => (
                <span key={i} className="text-[10px]">
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* Plate shadow */}
          <div className="w-64 h-6 bg-black/40 blur-lg rounded-full -mt-2 opacity-50" />
        </div>
      </motion.div>

      {/* CTA or Post-blow celebration */}
      <div className="z-10 relative flex flex-col items-center w-full max-w-4xl px-4">
        {!isBlown ? (
          <motion.button
            onClick={handleBlow}
            className="group relative px-12 py-5 md:px-20 md:py-8 rounded-full text-xl md:text-3xl font-bold text-white overflow-hidden"
            style={{
              background:
                "linear-gradient(135deg, rgba(243,58,106,0.6) 0%, rgba(74,20,140,0.6) 100%)",
              boxShadow:
                "0 20px 50px rgba(243,58,106,0.3), inset 0 1px 1px rgba(255,255,255,0.2)",
              backdropFilter: "blur(8px)",
            }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 30px 60px rgba(243,58,106,0.5)",
            }}
            whileTap={{ scale: 0.96 }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <span className="relative z-10 flex items-center gap-4">
              <span className="animate-pulse">🕯️</span>
              Blow the Candle!
              <span className="animate-pulse">🕯️</span>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
          </motion.button>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center flex flex-col items-center gap-12 w-full"
          >
            {/* Balloons added to scene */}
            <Balloons />

            {/* Typography focused message */}
            <div className="relative">
              <motion.h3
                className="font-display text-5xl md:text-9xl text-white leading-none mb-4"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                Happy Birthday
                <br />
                <span className="text-premium-rose font-script block mt-6 md:mt-10 italic">
                  Shottey!
                </span>
              </motion.h3>

              <motion.div
                initial={{ opacity: 0, letterSpacing: "0.2em" }}
                animate={{ opacity: 1, letterSpacing: "0.5em" }}
                transition={{ delay: 0.6, duration: 1.5 }}
                className="mt-8 md:mt-12"
              >
                <p className="font-sans uppercase text-premium-gold text-lg md:text-3xl font-bold tracking-[0.5em]">
                  Licence Edukan Time Ayi
                </p>
              </motion.div>
            </div>

            {/* Emojis with staggered entrance */}
            <div className="flex justify-center flex-wrap gap-4 md:gap-8 mt-4">
              {["🎉", "🎊", "💕", "🌹", "🎂", "✨"].map((e, i) => (
                <motion.span
                  key={i}
                  className="text-3xl md:text-5xl"
                  initial={{ scale: 0, rotate: -45 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{
                    delay: 1.2 + i * 0.1,
                    type: "spring",
                    stiffness: 200,
                  }}
                >
                  {e}
                </motion.span>
              ))}
            </div>

            {/* Celebrating monkeys - Positioned as a framing element */}
            <div className="flex justify-between w-full max-w-2xl mt-16 md:mt-24 pointer-events-none opacity-80">
              <motion.div
                animate={{ y: [0, -15, 0], rotate: [-10, 10, -10] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <Monkey type="playful" className="scale-75 md:scale-100" />
              </motion.div>
              <motion.div
                animate={{ y: [15, 0, 15], rotate: [10, -10, 10] }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="mt-8"
              >
                <Monkey type="floating" className="scale-75 md:scale-100" />
              </motion.div>
              <motion.div
                animate={{ y: [0, -15, 0], rotate: [-10, 10, -10] }}
                transition={{
                  duration: 2.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
              >
                <Monkey type="peek" className="scale-75 md:scale-100" />
              </motion.div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Celebration;

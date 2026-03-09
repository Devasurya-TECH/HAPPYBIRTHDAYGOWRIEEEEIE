import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Heart } from "lucide-react";
import Monkey from "./Monkey";

const fullMessage = `nte ponn potteyy,

nee first ente life il vannapo I did never thought of having a future with you, but now here I am. Oufffff engneyalle life oke pooyee.

nml kand mutti adhyam nink enne ishtallarunnn. enit pinne nml mindi, enit nml frnds aayi, enit nml close frnds aayi.

then one day nee ennod just “nink ishtalle” enn choich. apo sathyathi enik arinjudaarun how did I felt about you.

nja apo fun ine “nml frnds alle” enn prnju, but since that day I really know what I had with you.

and you just start ignoring me. it just strike me hard, and enik ninte eduth ente feelings endha enn thurann pryanm enn thooni.

sathyathi ann nml orumich veetil pokamenn vicharich. avide thudangi ellam.

ipol njan dhaa ivde nink veendi ee website undakkunnu😁

ik you had so many traumas in your life and I cant fix you, but I can be with you from now to the end while you eventually becoming a better person and overcoming the traumas you lived.

Happy birthday to the most beautiful and kind girl I know.

I love you. I don't know how much.

I just love you sooooooo much❤️😘.
`;

const LoveMessage = () => {
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const sectionRef = useRef(null);

  // Start typing when section enters viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setHasStarted(true);
      },
      { threshold: 0.3 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasStarted) return;
    if (index < fullMessage.length) {
      const timer = setTimeout(() => {
        setDisplayText((prev) => prev + fullMessage[index]);
        setIndex((prev) => prev + 1);
      }, 28);
      return () => clearTimeout(timer);
    } else {
      setIsFinished(true);
    }
  }, [index, hasStarted]);

  return (
    <section
      ref={sectionRef}
      className="py-40 px-4 md:px-8 relative overflow-hidden flex items-center justify-center min-h-screen"
    >
      {/* Cinematic Blurred Background */}
      <motion.div
        className="absolute inset-0 z-0 bg-cover bg-center bg-fixed opacity-40 blur-xl"
        style={{
          backgroundImage: `url("/couple photos/IMG_20251113_WA0034.webp")`,
        }}
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 10, ease: "easeOut" }}
      />

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 z-[5] bg-black/60" />

      {/* Background orbs - Optimized */}
      <div className="absolute top-1/4 left-1/3 w-80 h-80 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-premium-rose/40 to-transparent rounded-full animate-pulse pointer-events-none z-[6]" />
      <div
        className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-premium-deep/40 to-transparent rounded-full animate-pulse pointer-events-none z-[6]"
        style={{ animationDelay: "2s" }}
      />

      <motion.div
        className="max-w-6xl w-full relative z-10 mx-auto flex flex-col items-center justify-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        {/* Section eyebrow */}
        <div className="text-center mb-12">
          <motion.span
            className="font-sans uppercase tracking-[0.5em] text-premium-gold text-sm font-semibold"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            ✨ Words From My Heart ✨
          </motion.span>
          <div className="mt-4 flex items-center justify-center gap-4">
            <div className="h-px w-20 bg-gradient-to-r from-transparent to-premium-rose/60" />
            <Heart className="text-premium-rose fill-premium-rose" size={20} />
            <div className="h-px w-20 bg-gradient-to-l from-transparent to-premium-rose/60" />
          </div>
        </div>

        {/* Card */}
        <div
          className="w-full rounded-[2.5rem] p-10 md:p-20 relative flex flex-col items-center justify-center"
          style={{
            background:
              "linear-gradient(145deg, rgba(255,255,255,0.06) 0%, rgba(243,58,106,0.04) 100%)",
            border: "1px solid rgba(255,255,255,0.12)",
            boxShadow:
              "0 20px 80px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.1)",
            backdropFilter: "blur(12px)",
          }}
        >
          {/* Monkey decoration */}
          <div className="absolute -top-10 -right-6 md:-top-14 md:-right-10 rotate-12 z-20">
            <Monkey type="playful" />
          </div>

          {/* Heart icon top */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200, delay: 0.3 }}
            className="flex justify-center mb-8"
          >
            <div className="relative">
              <Heart
                size={56}
                className="text-premium-rose fill-premium-rose/30"
              />
              <div className="absolute inset-0 blur-xl bg-premium-rose/40 rounded-full" />
            </div>
          </motion.div>

          {/* Typewriter text */}
          <p className="font-script text-2xl md:text-4xl text-white/90 leading-[1.8] text-center whitespace-pre-wrap min-h-[300px]">
            {displayText}
            <motion.span
              className="inline-block w-1 h-8 md:h-12 bg-premium-rose ml-1 align-middle"
              style={{ boxShadow: "0 0 12px rgba(243,58,106,0.9)" }}
              animate={{ opacity: isFinished ? 0 : [1, 0, 1] }}
              transition={{ duration: 0.7, repeat: isFinished ? 0 : Infinity }}
            />
          </p>

          {/* Finished sparkles */}
          <AnimatePresence>
            {isFinished && (
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-col items-center gap-4 mt-10"
              >
                <div className="flex gap-4">
                  {[].map((e, i) => (
                    <motion.span
                      key={i}
                      className="text-3xl"
                      initial={{ scale: 0, rotate: -30 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{
                        delay: i * 0.1,
                        type: "spring",
                        stiffness: 300,
                      }}
                    >
                      {e}
                    </motion.span>
                  ))}
                </div>
                <p className="font-sans uppercase tracking-[0.4em] text-premium-gold text-xs">
                  Always & forever yours
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </section>
  );
};

export default LoveMessage;

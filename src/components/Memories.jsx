import React from "react";
import { motion } from "framer-motion";
import Monkey from "./Monkey";

const photos = [
  {
    src: "/couple photos/IMG_20251029_144409.webp",
    caption: "Sweet Moments",
  },
  {
    src: "/couple photos/IMG_20251109_151929972.webp",
    caption: "Your Radiant Glow",
  },
  {
    src: "/couple photos/IMG-20251113-WA0034.webp",
    caption: "Together Forever",
  },
  {
    src: "/couple photos/IMG_20251116_184402557.webp",
    caption: "A Special Day",
  },
  {
    src: "/couple photos/IMG_20251219_125423955.webp",
    caption: "Memory Lane",
  },
  {
    src: "/couple photos/IMG_20260103_185128604.webp",
    caption: "Pure Happiness",
  },
  {
    src: "/couple photos/IMG_20260103_185134374.webp",
    caption: "Deep in Love",
  },
  {
    src: "/couple photos/IMG_20251102_165228640.webp",
    caption: "Pure Magic",
  },
];

const Memories = () => {
  return (
    <section className="py-32 px-4 md:px-8 max-w-[1400px] mx-auto min-h-screen flex flex-col items-center relative z-10">
      {/* Header */}
      <div className="text-center mb-24">
        <motion.span
          className="font-sans uppercase tracking-[0.5em] text-premium-rose text-sm font-semibold mb-4 block"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          ❤️ &nbsp; Our Story &nbsp; ❤️
        </motion.span>
        <motion.h2
          className="font-display text-6xl md:text-8xl text-white mb-6"
          style={{ textShadow: "0 0 40px rgba(243,58,106,0.5)" }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Beautiful{" "}
          <span className="text-premium-rose font-script italic">Memories</span>
        </motion.h2>
      </div>

      {/* Masonry Layout via CSS columns */}
      <div className="w-full columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
        {photos.map((photo, index) => (
          <motion.div
            key={index}
            className="break-inside-avoid relative overflow-hidden rounded-2xl group cursor-pointer shadow-[0_10px_40px_rgba(0,0,0,0.5)] will-change-transform backface-hidden"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "200px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative w-full overflow-hidden block">
              <img
                src={photo.src}
                alt={photo.caption}
                className="w-full h-auto object-cover transform transition-transform duration-[1200ms] group-hover:scale-110 will-change-transform"
                loading="lazy"
                decoding="async"
              />

              {/* Cinematic Overlay & Caption */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none flex flex-col justify-end p-6">
                <motion.div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <p className="font-script text-2xl md:text-3xl text-white mb-2">
                    {photo.caption}
                  </p>
                  <div className="w-12 h-0.5 bg-premium-rose rounded-full" />
                </motion.div>
              </div>
            </div>

            {/* Occasional Monkey Decor */}
            {index === 2 && (
              <div className="absolute -top-6 -right-4 z-20 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
                <Monkey type="peek" className="scale-75" />
              </div>
            )}
            {index === 6 && (
              <div className="absolute -bottom-6 -left-4 z-20 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
                <Monkey type="playful" className="scale-75" />
              </div>
            )}
          </motion.div>
        ))}
      </div>

      <motion.p
        className="text-center font-script text-3xl md:text-4xl text-premium-rose/70 mt-32"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        "Every picture is a piece of my heart" 💕
      </motion.p>
    </section>
  );
};

export default Memories;

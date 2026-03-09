import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Volume2, VolumeX } from "lucide-react";

const BackgroundMusic = ({ autoplay = false }) => {
    const [isMuted, setIsMuted] = useState(false);
    const audioRef = useRef(null);

    useEffect(() => {
        if (autoplay && audioRef.current) {
            audioRef.current.play().catch((err) => {
                console.log("Autoplay blocked or failed:", err);
            });
        }
    }, [autoplay]);

    const toggleMute = () => {
        if (audioRef.current) {
            audioRef.current.muted = !isMuted;
            setIsMuted(!isMuted);
        }
    };

    return (
        <div className="fixed bottom-6 right-6 z-[100]">
            <audio
                ref={audioRef}
                src="/background.mp3"
                loop
                preload="auto"
            />

            <motion.button
                onClick={toggleMute}
                className="p-3 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-premium-rose shadow-lg hover:bg-black/60 transition-all"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 }}
            >
                <AnimatePresence mode="wait">
                    {isMuted ? (
                        <motion.div
                            key="muted"
                            initial={{ opacity: 0, rotate: -45 }}
                            animate={{ opacity: 1, rotate: 0 }}
                            exit={{ opacity: 0, rotate: 45 }}
                        >
                            <VolumeX size={20} />
                        </motion.div>
                    ) : (
                        <motion.div
                            key="unmuted"
                            initial={{ opacity: 0, rotate: -45 }}
                            animate={{ opacity: 1, rotate: 0 }}
                            exit={{ opacity: 0, rotate: 45 }}
                        >
                            <Volume2 size={20} />
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.button>
        </div>
    );
};

export default BackgroundMusic;

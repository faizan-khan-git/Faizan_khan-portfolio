import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import profileImg from '../assets/image.png';

const roles = ["FULL-STACK DEVELOPER", "BACKEND SPECIALIST", "GENAI ENTHUSIAST"];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const { scrollY } = useScroll();
  const yParallax = useTransform(scrollY, [0, 1000], [0, 300]);
  const opacityParallax = useTransform(scrollY, [0, 500], [1, 0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-zinc-950">
      {/* Background Image with Parallax & Blend */}
      <motion.div 
        style={{ y: yParallax, opacity: opacityParallax }}
        className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none"
      >
        <div className="relative w-full max-w-2xl aspect-square md:aspect-auto md:h-full md:w-auto opacity-30 md:opacity-40">
           {/* Fade edges to blend seamlessly into zinc-950 background */}
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-zinc-950 z-10" />
          <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-transparent to-zinc-950 z-10" />
          <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-zinc-950/20 to-transparent z-10" />
          <img 
            src={profileImg} 
            alt="Faizan Khan" 
            className="w-full h-full object-cover object-center grayscale mix-blend-screen"
          />
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 w-full">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-zinc-400 font-medium tracking-wide mb-6 text-sm md:text-base uppercase"
        >
          Hi, I'm Md Faizan Khan
        </motion.p>
        
        <div className="h-[80px] md:h-[120px] flex items-center justify-center overflow-visible w-full">
          <AnimatePresence mode="wait">
            <motion.h1
              key={roles[roleIndex]}
              initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, y: -30, filter: 'blur(8px)' }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter w-full max-w-6xl text-glow"
            >
              {roles[roleIndex]}
            </motion.h1>
          </AnimatePresence>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-10"
      >
        <span className="text-[10px] md:text-xs font-semibold tracking-[0.2em] text-zinc-500 uppercase">
          Scroll to scrub timeline
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <ChevronDown className="w-5 h-5 text-zinc-400" />
        </motion.div>
      </motion.div>
    </section>
  );
}

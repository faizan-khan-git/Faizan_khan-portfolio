import { motion } from "framer-motion";
import profileImg from "../assets/image.png";
import { Server, Zap } from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="py-32 px-6 relative z-10 w-full max-w-7xl mx-auto"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="glass-card rounded-3xl p-8 md:p-12 lg:p-16 flex flex-col lg:flex-row gap-12 items-center relative overflow-hidden"
      >
        {/* Decorative background glow */}
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-zinc-700/20 rounded-full blur-[100px] pointer-events-none" />

        {/* Left: Image Placeholder */}
        <div className="w-full lg:w-1/3 flex justify-center lg:justify-start">
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden border border-zinc-700/50 shadow-2xl">
            <img
              src={profileImg}
              alt="Faizan Khan Profile"
              className="w-full h-full object-cover object-center grayscale transition-all duration-700 brightness-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 to-transparent pointer-events-none" />
          </div>
        </div>

        {/* Right: Content */}
        <div className="w-full lg:w-2/3 flex flex-col gap-6">
          {/* Status Badge */}
          <div className="flex items-center gap-2 self-start px-4 py-2 rounded-full glass-card border-zinc-700/50">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span className="text-xs font-semibold tracking-wider text-zinc-300 uppercase">
              Open to Opportunities
            </span>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
            Hello, I'm Md Faizan Khan
          </h2>

          <p className="text-lg md:text-xl text-zinc-400 leading-relaxed font-light">
            Results-oriented Computer Science student at IIIT Guwahati
            specializing in full-stack development, scalable backend systems,
            and GenAI applications. Proven expertise in designing RESTful APIs,
            microservices, and RAG pipelines.
          </p>

          {/* Sub-cards */}
          <div className="grid sm:grid-cols-2 gap-4 mt-4">
            <div className="glass-card p-5 rounded-2xl flex items-start gap-4 hover:bg-zinc-800/40 transition-colors">
              <div className="p-3 bg-zinc-800/50 rounded-xl text-white">
                <Server className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-zinc-100 font-semibold mb-1">
                  Microservices Architecture
                </h4>
                <p className="text-sm text-zinc-400">
                  Designing highly scalable, decoupled backend systems.
                </p>
              </div>
            </div>

            <div className="glass-card p-5 rounded-2xl flex items-start gap-4 hover:bg-zinc-800/40 transition-colors">
              <div className="p-3 bg-zinc-800/50 rounded-xl text-white">
                <Zap className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-zinc-100 font-semibold mb-1">
                  REST API Design
                </h4>
                <p className="text-sm text-zinc-400">
                  Building secure, high-performance API layers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

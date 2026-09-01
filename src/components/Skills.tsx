import { motion } from 'framer-motion';

const skills = [
  "Java", "C", "SQL", "JavaScript", "Node.js", "Express.js", 
  "React.js", "Next.js", "FastAPI", "LangChain", 
  "PostgreSQL", "MongoDB", "AWS", "Docker"
];

export default function Skills() {
  // Duplicate skills array to create a seamless infinite marquee
  const marqueeItems = [...skills, ...skills, ...skills];

  return (
    <section id="skills" className="py-24 w-full overflow-hidden flex flex-col items-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-12 text-center"
      >
        <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-4">Technologies I Work With</h2>
        <div className="h-1 w-20 bg-zinc-700 rounded-full mx-auto"></div>
      </motion.div>

      {/* Marquee Container */}
      <div className="relative w-full max-w-[100vw] overflow-hidden py-8 flex">
        {/* Fade Edges */}
        <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-zinc-950 to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-zinc-950 to-transparent z-10 pointer-events-none" />
        
        <div className="animate-marquee gap-4 flex items-center">
          {marqueeItems.map((skill, idx) => (
            <div 
              key={idx}
              className="glass-card px-6 py-3 rounded-full text-zinc-300 font-medium whitespace-nowrap border-zinc-800/50 hover:bg-zinc-800 hover:text-white transition-colors cursor-default"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

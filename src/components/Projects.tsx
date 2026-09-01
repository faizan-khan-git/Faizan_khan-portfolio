import { motion } from 'framer-motion';

const projects = [
  {
    title: "AttendNova",
    description: "Automated facial recognition attendance system utilizing a real-time ML pipeline and multi-threaded MJPEG HTTP server to identify students and sync data seamlessly.",
    tags: ["React", "Node.js", "PostgreSQL", "OpenCV"],
    link: "#"
  },
  {
    title: "Full Stack RAG Chatbot",
    description: "Production-ready Retrieval Augmented Generation microservice utilizing Gemini 2.0 Flash with local sentence-transformer embeddings and persistent vector store.",
    tags: ["FastAPI", "LangChain", "Gemini 2.0", "ChromaDB", "React"],
    link: "#"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 max-w-7xl mx-auto w-full">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16 text-center md:text-left"
      >
        <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-4">Featured Engineering Projects</h2>
        <div className="h-1 w-20 bg-zinc-700 rounded-full mx-auto md:mx-0"></div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, idx) => (
          <motion.a
            href={project.link}
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            className="group glass-card p-8 rounded-3xl flex flex-col justify-between h-full hover:-translate-y-2 border-glow transition-all duration-300 relative overflow-hidden block"
          >
            {/* Subtle glow overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-zinc-800/0 to-zinc-800/0 group-hover:from-zinc-800/20 group-hover:to-transparent transition-all duration-500 pointer-events-none" />
            
            <div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-glow transition-all">
                {project.title}
              </h3>
              <p className="text-zinc-400 leading-relaxed mb-8 font-light">
                {project.description}
              </p>
            </div>
            
            <div className="flex flex-wrap gap-2 mt-auto">
              {project.tags.map((tag, tIdx) => (
                <span 
                  key={tIdx} 
                  className="px-3 py-1 rounded-full text-xs font-medium bg-zinc-800/50 text-zinc-300 border border-zinc-700/50"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}

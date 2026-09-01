import { motion } from 'framer-motion';

const experiences = [
  {
    role: "Backend Developer Intern",
    company: "Emvo AI",
    date: "Apr 2026 – Jul 2026",
    description: "Architected highly scalable microservices and secure RESTful APIs using FastAPI. Optimized PostgreSQL and MongoDB schemas, drastically improving query performance and data retrieval times."
  },
  {
    role: "Software Development Engineer Intern",
    company: "Emigro Consulting IT",
    date: "Dec 2025 – Mar 2026",
    description: "Engineered responsive, enterprise-grade web interfaces using React.js and Next.js. Designed scalable AWS cloud infrastructure (ECS, SQS, EventBridge) and automated CI/CD pipelines."
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 max-w-4xl mx-auto w-full">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16 text-center md:text-left"
      >
        <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-4">Professional Experience</h2>
        <div className="h-1 w-20 bg-zinc-700 rounded-full mx-auto md:mx-0"></div>
      </motion.div>

      <div className="relative border-l border-zinc-800 ml-4 md:ml-0 md:pl-8 space-y-12">
        {experiences.map((exp, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="relative pl-8 md:pl-0"
          >
            {/* Timeline Dot */}
            <div className="absolute -left-[41px] md:-left-[41px] top-1.5 w-5 h-5 rounded-full bg-zinc-900 border-2 border-zinc-600 flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-zinc-400"></div>
            </div>

            <div className="glass-card p-6 md:p-8 rounded-2xl border-glow transition-all duration-300 group">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-white">{exp.role}</h3>
                  <h4 className="text-lg font-medium text-zinc-400">{exp.company}</h4>
                </div>
                <span className="inline-block px-4 py-1.5 rounded-full glass-card text-xs font-semibold text-zinc-300 whitespace-nowrap self-start md:self-auto">
                  {exp.date}
                </span>
              </div>
              <p className="text-zinc-400 leading-relaxed">
                {exp.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

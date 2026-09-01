import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 max-w-7xl mx-auto w-full relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16 text-center md:text-left"
      >
        <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-4">Let's Build Something Exceptional</h2>
        <div className="h-1 w-20 bg-zinc-700 rounded-full mx-auto md:mx-0"></div>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-16 items-start">
        {/* Left Column: Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col gap-8"
        >
          <p className="text-lg md:text-xl text-zinc-400 font-light leading-relaxed">
            I'm currently looking for new opportunities and my inbox is always open. Whether you have a question, a project proposal, or just want to say hi, I'll try my best to get back to you!
          </p>

          <div className="flex flex-col gap-6 mt-4">
            <a href="mailto:faizan.khan23b@iiitg.ac.in" className="flex items-center gap-4 text-zinc-300 hover:text-white transition-colors group w-fit">
              <div className="p-3 rounded-full bg-zinc-900 border border-zinc-800 group-hover:bg-zinc-800 transition-colors">
                <Mail className="w-5 h-5" />
              </div>
              <span className="text-lg">faizan.khan23b@iiitg.ac.in</span>
            </a>

            <div className="flex items-center gap-4 mt-2">
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="p-3 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 hover:bg-zinc-800 hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
              <a href="https://github.com" target="_blank" rel="noreferrer" className="p-3 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 hover:bg-zinc-800 hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              </a>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <form className="glass-card p-8 rounded-3xl flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-zinc-400 mb-2">Your Name</label>
              <input 
                type="text" 
                id="name" 
                className="w-full bg-zinc-900/50 border border-zinc-800 rounded-xl px-4 py-3 text-white placeholder-zinc-600 focus:outline-none focus:ring-2 focus:ring-zinc-600 focus:border-transparent transition-all"
                placeholder="John Doe"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-zinc-400 mb-2">Your Email</label>
              <input 
                type="email" 
                id="email" 
                className="w-full bg-zinc-900/50 border border-zinc-800 rounded-xl px-4 py-3 text-white placeholder-zinc-600 focus:outline-none focus:ring-2 focus:ring-zinc-600 focus:border-transparent transition-all"
                placeholder="john@example.com"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-zinc-400 mb-2">Project Details</label>
              <textarea 
                id="message" 
                rows={5}
                className="w-full bg-zinc-900/50 border border-zinc-800 rounded-xl px-4 py-3 text-white placeholder-zinc-600 focus:outline-none focus:ring-2 focus:ring-zinc-600 focus:border-transparent transition-all resize-none"
                placeholder="Tell me about your project..."
              ></textarea>
            </div>

            <button 
              type="submit"
              className="mt-2 w-full py-4 rounded-xl font-bold text-white bg-zinc-800 border border-zinc-700 hover:bg-gradient-to-r hover:from-zinc-700 hover:to-zinc-600 transition-all duration-300 shadow-lg hover:shadow-zinc-700/25"
            >
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}

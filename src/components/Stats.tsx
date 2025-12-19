import { motion } from 'framer-motion';
import { stats, instagramHighlights } from '@/data/mockData';

export function Stats() {
  return (
    <section id="stats" className="py-24 gradient-accent text-white relative overflow-hidden">
      {/* Floating background effect */}
      <motion.div
        className="absolute top-0 right-0 w-full h-full opacity-10"
        animate={{
          transform: ['translate(0, 0)', 'translate(-20px, -20px)', 'translate(0, 0)'],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="w-full h-full bg-[radial-gradient(circle,_rgba(255,255,255,0.1)_0%,_transparent_70%)]" />
      </motion.div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          Our Growing Community
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 mb-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-6xl md:text-7xl font-bold mb-2 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                {stat.number}
              </div>
              <div className="text-xl uppercase tracking-wider opacity-90">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 p-6 glass-effect rounded-2xl max-w-3xl mx-auto"
        >
          <p className="text-lg">
            🌟 <strong>Join our thriving fitness community!</strong> Get daily motivation, workout tips, and transformation stories to fuel your journey.
          </p>
        </motion.div>

        {/* Instagram Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-effect rounded-2xl p-8"
        >
          <h3 className="text-3xl font-bold text-center mb-8">🌟 Instagram Community</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {instagramHighlights.map((highlight, index) => (
              <motion.div
                key={highlight.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5, backgroundColor: 'rgba(255, 255, 255, 0.25)' }}
                className="glass-effect rounded-xl p-6 text-center transition-all"
              >
                <div className="text-4xl mb-4">{highlight.icon}</div>
                <h4 className="font-bold text-lg mb-2">{highlight.title}</h4>
                <p className="text-sm opacity-90">{highlight.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
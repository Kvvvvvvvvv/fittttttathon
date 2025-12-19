import { motion } from 'framer-motion';
import { offerings, facultyMembers } from '@/data/mockData';

export function Programs() {
  return (
    <section id="programs" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 relative pb-4"
        >
          What We Offer
          <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-20 h-1 gradient-primary rounded-full" />
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {offerings.map((offering, index) => (
            <motion.div
              key={offering.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="text-center p-8 rounded-2xl glass-effect hover:bg-gray-50 transition-all"
            >
              <div className="text-6xl mb-6 inline-block transform hover:scale-125 hover:-rotate-12 transition-transform">
                {offering.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">
                {offering.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {offering.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Faculty Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-3xl font-bold mb-8 text-gray-800">Meet Our Faculty</h3>
          <div className="flex flex-wrap justify-center gap-8">
            {facultyMembers.map((faculty, index) => (
              <motion.div
                key={faculty.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.05 }}
                className="max-w-xs"
              >
                <img
                  src={faculty.image}
                  alt={faculty.name}
                  className="w-full rounded-2xl shadow-lg mb-4"
                />
                <p className="font-bold text-lg text-gray-800">{faculty.name}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
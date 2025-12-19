import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { problemSolutions } from '@/data/mockData';

export function Benefits() {
  return (
    <section id="benefits" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 relative pb-4"
        >
          Your Fitness Journey
          <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-20 h-1 gradient-primary rounded-full" />
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {problemSolutions.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <Card className="h-full border-t-4 border-t-transparent hover:border-t-primary-purple transition-all shadow-sm hover:shadow-xl">
                <CardContent className="p-8 text-center">
                  <div className="text-6xl mb-6 inline-block transform hover:scale-110 hover:rotate-6 transition-transform">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-800">
                    {item.problem}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {item.solution}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
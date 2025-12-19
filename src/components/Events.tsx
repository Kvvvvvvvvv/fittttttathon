import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { events } from '@/data/mockData';

export function Events() {
  return (
    <section id="events" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 relative pb-4"
        >
          Recent Events
          <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-20 h-1 gradient-primary rounded-full" />
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <Card className="overflow-hidden shadow-md hover:shadow-2xl transition-all">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-64 object-cover"
                />
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-800">
                    {event.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {event.description}
                  </p>
                  <Badge className="gradient-primary text-white px-4 py-1 rounded-full">
                    {event.date}
                  </Badge>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
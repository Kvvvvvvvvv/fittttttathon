import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { socialLinks } from '@/data/mockData';

export function CTA() {
  return (
    <section id="cta" className="py-24 bg-white">
      <div className="container mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-6"
        >
          Ready to Transform?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-xl text-gray-600 italic mb-12 max-w-2xl mx-auto"
        >
          No experience needed. Just bring your commitment.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-6 mb-12"
        >
          <Button
            asChild
            size="lg"
            className="gradient-whatsapp text-white rounded-full px-8 py-6 text-lg shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all"
          >
            <a href={socialLinks.whatsapp} target="_blank" rel="noopener noreferrer">
              Join WhatsApp Group
            </a>
          </Button>

          <Button
            asChild
            size="lg"
            className="gradient-instagram text-white rounded-full px-8 py-6 text-lg shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all"
          >
            <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer">
              Follow on Instagram
            </a>
          </Button>

          <Button
            asChild
            size="lg"
            className="gradient-email text-white rounded-full px-8 py-6 text-lg shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all"
          >
            <a href={socialLinks.email}>
              Email Club Leads
            </a>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="max-w-2xl mx-auto p-8 bg-white rounded-2xl shadow-md border border-gray-100"
        >
          <p className="text-gray-700">
            For more information, please contact us through our social media channels or email
          </p>
        </motion.div>
      </div>
    </section>
  );
}
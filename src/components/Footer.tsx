import { motion } from 'framer-motion';

export function Footer() {
  return (
    <footer className="bg-dark-900 text-white/80 py-12 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-0.5 gradient-primary" />
      
      <div className="container mx-auto px-6 text-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          © 2025 VIT Chennai Fitness Club. Transform Your Body & Mind.
        </motion.p>
      </div>
    </footer>
  );
}
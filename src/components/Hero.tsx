import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center gradient-hero text-white overflow-hidden">
      {/* Animated background overlay */}
      <motion.div
        className="absolute inset-0 opacity-50"
        animate={{
          background: [
            'radial-gradient(circle at 20% 50%, rgba(102, 126, 234, 0.1) 0%, transparent 50%)',
            'radial-gradient(circle at 80% 80%, rgba(78, 205, 196, 0.1) 0%, transparent 50%)',
            'radial-gradient(circle at 20% 50%, rgba(102, 126, 234, 0.1) 0%, transparent 50%)',
          ],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="container mx-auto px-6 py-32 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Transform Your Body & Mind
            </h1>
            <p className="text-xl md:text-2xl font-light mb-4 opacity-95">
              Build strength, endurance, and join our fitness community
            </p>
            <p className="text-lg mb-8 opacity-90 max-w-xl">
              Transform your college experience through structured fitness programs that build discipline and lifelong healthy habits
            </p>
            <Button
              onClick={() => scrollToSection('cta')}
              size="lg"
              className="gradient-primary text-white rounded-full px-8 py-6 text-lg shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all"
            >
              Start Your Journey
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
            whileHover={{ scale: 1.02, rotateY: 5, rotateX: 5 }}
            style={{ perspective: 1000 }}
          >
            <img
              src="/images/team.jpeg"
              alt="Fitness Club Team at VIT Chennai"
              className="rounded-3xl shadow-2xl w-full"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Benefits } from '@/components/Benefits';
import { Programs } from '@/components/Programs';
import { Stats } from '@/components/Stats';
import { Events } from '@/components/Events';
import { CTA } from '@/components/CTA';
import { Chatbox } from '@/components/Chatbox';
import { Footer } from '@/components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Benefits />
        <Programs />
        <Stats />
        <Events />
        <CTA />
      </main>
      <Footer />
      <Chatbox />
    </div>
  );
}

export default App;
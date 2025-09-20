import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Problem from '@/components/Problem';
import Solution from '@/components/Solution';
import Demo from '@/components/Demo';
import HowItWorks from '@/components/HowItWorks';
import TechStack from '@/components/TechStack';
import MVP from '@/components/MVP';
import Roadmap from '@/components/Roadmap';
import Impact from '@/components/Impact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-charcoal">
      <Navigation />
      <Hero />
      <Problem />
      <Solution />
      <Demo />
      <HowItWorks />
      <TechStack />
      <MVP />
      <Roadmap />
      <Impact />
      <Footer />
    </div>
  );
};

export default Index;

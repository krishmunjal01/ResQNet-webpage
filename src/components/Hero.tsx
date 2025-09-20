import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Download } from 'lucide-react';
import heroBg from '@/assets/hero-bg.jpg';

const Hero = () => {
  const scrollToDemo = () => {
    const element = document.getElementById('demo');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const downloadPitch = () => {
    // Simulate PDF download
    console.log('Downloading pitch PDF...');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-charcoal/90 via-charcoal/70 to-charcoal/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        {/* Badge */}
        <Badge className="mb-8 bg-electric-blue/20 text-electric-blue border-electric-blue/30 px-4 py-2 text-sm font-medium">
          Selected — Tekathon 4.0 (Phase 2)
        </Badge>

        {/* Main Headline */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-sora mb-6 leading-tight">
          <span className="text-primary">ResQNet</span>
          <br />
          <span className="text-gradient">Autonomous Disaster</span>
          <br />
          <span className="text-gradient">Management</span>
        </h1>

        {/* Subheading */}
        <p className="text-xl md:text-2xl text-text-secondary mb-12 max-w-4xl mx-auto leading-relaxed">
          Real-time drones + IoT + AI pathfinding to find victims, route responders, and optimise relief coordination.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button 
            onClick={scrollToDemo}
            className="btn-electric group text-lg px-8 py-4"
          >
            Live Prototype
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          </div>

        {/* Floating Animation Elements */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-electric-blue/10 rounded-full blur-3xl float-animation" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-electric-blue/5 rounded-full blur-3xl float-animation" style={{ animationDelay: '2s' }} />
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-text-muted animate-bounce">
        <div className="w-6 h-10 border-2 border-electric-blue/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-electric-blue rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
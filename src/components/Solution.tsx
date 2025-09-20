import { Zap, Eye, Wifi, Monitor, Smartphone, Brain } from 'lucide-react';

const Solution = () => {
  const solutions = [
    {
      icon: Zap,
      title: "Autonomous Drone Swarms",
      description: "Continuous aerial coverage with coordinated flight patterns"
    },
    {
      icon: Eye,
      title: "YOLO Victim Detection",
      description: "Fast & accurate recognition using advanced computer vision"
    },
    {
      icon: Wifi,
      title: "IoT Ground Sensors",
      description: "Flood, fire, and air quality data telemetry in real-time"
    },
    {
      icon: Monitor,
      title: "Unified Dashboard",
      description: "Interactive map with live video feeds and resource allocation"
    },
    {
      icon: Smartphone,
      title: "Offline-First App",
      description: "Mesh communications and cached maps for disconnected areas"
    },
    {
      icon: Brain,
      title: "Predictive Risk AI",
      description: "Forecast disaster hotspots for proactive response planning"
    }
  ];

  return (
    <section id="solution" className="py-20 bg-charcoal-light">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-sora mb-6 text-primary">
            Our Solution — <span className="text-gradient">End-to-End Coordination</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-4xl mx-auto">
            Integrated autonomous systems working together to save lives through intelligent coordination
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <div 
              key={index} 
              className="card-glass p-8 group hover:shadow-intense transition-all duration-500 hover:-translate-y-2"
            >
              <div className="mb-6">
                <div className="p-4 bg-electric-blue/10 rounded-2xl w-fit group-hover:bg-electric-blue/20 transition-colors group-hover:scale-110 transform duration-300">
                  <solution.icon className="h-8 w-8 text-electric-blue" />
                </div>
              </div>
              <h3 className="text-xl font-bold font-sora mb-4 text-primary">
                {solution.title}
              </h3>
              <p className="text-text-secondary leading-relaxed">
                {solution.description}
              </p>
            </div>
          ))}
        </div>

        {/* Key Benefits */}
        <div className="mt-20 text-center">
          <h3 className="text-3xl font-bold font-sora mb-12 text-primary">
            Why ResQNet Works
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Real-Time Intelligence",
                description: "Live data streams from multiple sources for instant decision making",
                benefit: "40% faster response times"
              },
              {
                title: "Autonomous Coordination", 
                description: "AI-powered resource allocation and task optimization",
                benefit: "60% better resource utilization"
              },
              {
                title: "Scalable Infrastructure",
                description: "Cloud-native architecture that grows with demand",
                benefit: "Unlimited geographical coverage"
              }
            ].map((benefit, index) => (
              <div key={index} className="card-glass p-6">
                <h4 className="text-lg font-bold font-sora mb-3 text-electric-blue">
                  {benefit.title}
                </h4>
                <p className="text-text-secondary mb-4">
                  {benefit.description}
                </p>
                <div className="text-sm font-semibold text-electric-blue bg-electric-blue/10 px-3 py-1 rounded-full inline-block">
                  {benefit.benefit}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;
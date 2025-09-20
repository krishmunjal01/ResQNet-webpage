import { ArrowRight, AlertTriangle, Zap, Brain, Radio, Users, CheckCircle } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: AlertTriangle,
      title: "Crisis Detected",
      description: "Natural disaster or emergency situation occurs",
      color: "text-danger"
    },
    {
      icon: Zap,
      title: "Autonomous Deployment",
      description: "Drone swarms automatically dispatch to affected area",
      color: "text-electric-blue"
    },
    {
      icon: Brain,
      title: "AI Analysis",
      description: "YOLO computer vision identifies victims and hazards",
      color: "text-electric-blue"
    },
    {
      icon: Radio,
      title: "Unified Dashboard",
      description: "Real-time data streams to coordination center",
      color: "text-electric-blue"
    },
    {
      icon: Users,
      title: "Coordinated Response",
      description: "Optimal resource allocation to NGOs and authorities",
      color: "text-warning"
    },
    {
      icon: CheckCircle,
      title: "Lives Saved",
      description: "Faster, more efficient rescue operations",
      color: "text-success"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-charcoal">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-sora mb-6 text-primary">
            How It Works
          </h2>
          <p className="text-xl text-text-secondary max-w-4xl mx-auto">
            From Crisis to Coordinated Response — The ResQNet Workflow
          </p>
        </div>

        {/* Main Workflow */}
        <div className="relative max-w-6xl mx-auto">
          {/* Connection Lines */}
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-danger via-electric-blue to-success transform -translate-y-1/2 z-0" />
          
          {/* Steps */}
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center group">
                {/* Icon Circle */}
                <div className={`relative p-6 rounded-full bg-charcoal-light border-2 border-charcoal-lighter group-hover:border-electric-blue transition-all duration-500 shadow-card group-hover:shadow-glow mb-4`}>
                  <step.icon className={`h-8 w-8 ${step.color} group-hover:scale-110 transition-transform`} />
                  
                  {/* Step Number */}
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-electric-blue text-charcoal text-xs font-bold rounded-full flex items-center justify-center">
                    {index + 1}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold font-sora mb-2 text-primary group-hover:text-electric-blue transition-colors">
                  {step.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {step.description}
                </p>

                {/* Arrow (hidden on last item) */}
                {index < steps.length - 1 && (
                  <ArrowRight className="hidden lg:block absolute top-8 -right-4 h-6 w-6 text-electric-blue/50" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Metrics Section */}
        <div className="mt-20 card-glass p-8 rounded-2xl">
          <h3 className="text-2xl font-bold font-sora text-center mb-8 text-primary">
            Performance Metrics
          </h3>
          
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { 
                metric: "< 2 min", 
                label: "Detection Latency",
                description: "From disaster to victim identification"
              },
              { 
                metric: "45 min", 
                label: "Drone Endurance",
                description: "Continuous operation per battery cycle"
              },
              { 
                metric: "10 km²", 
                label: "Coverage Area",
                description: "Per 10-drone swarm deployment"
              },
              { 
                metric: "99.2%", 
                label: "Network Uptime",
                description: "Mesh communication reliability"
              }
            ].map((item, index) => (
              <div key={index} className="group">
                <div className="text-3xl font-bold font-sora text-electric-blue mb-2 group-hover:scale-110 transition-transform">
                  {item.metric}
                </div>
                <div className="text-lg font-semibold text-primary mb-1">
                  {item.label}
                </div>
                <div className="text-sm text-text-muted">
                  {item.description}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technology Integration Diagram */}
        <div className="mt-20 text-center">
          <h3 className="text-3xl font-bold font-sora mb-12 text-primary">
            Technology Integration
          </h3>
          
          <div className="relative max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { name: "Edge Computing", desc: "Real-time processing" },
                { name: "Computer Vision", desc: "YOLO object detection" },
                { name: "IoT Sensors", desc: "Environmental monitoring" },
                { name: "Mesh Networks", desc: "Resilient communication" }
              ].map((tech, index) => (
                <div key={index} className="card-glass p-6 group hover:shadow-intense transition-all duration-500">
                  <div className="w-12 h-12 bg-electric-blue/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-electric-blue/20 transition-colors">
                    <div className="w-6 h-6 bg-electric-blue rounded-sm" />
                  </div>
                  <h4 className="font-bold font-sora text-primary mb-2">{tech.name}</h4>
                  <p className="text-sm text-text-secondary">{tech.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
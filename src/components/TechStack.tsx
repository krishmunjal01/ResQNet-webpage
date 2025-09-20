import { Code, Database, Cloud, Zap, Smartphone, Shield } from 'lucide-react';

const TechStack = () => {
  const categories = [
    {
      icon: Zap,
      title: "Edge & Drones",
      color: "text-electric-blue",
      technologies: ["ROS (Robot Operating System)", "Python & OpenCV", "YOLOv8 Computer Vision", "Drone APIs & SDKs"]
    },
    {
      icon: Database,
      title: "Sensors & IoT",
      color: "text-warning",
      technologies: ["Arduino / Raspberry Pi", "MQTT Telemetry Protocol", "Environmental Sensors", "Mesh Communication"]
    },
    {
      icon: Code,
      title: "Backend Systems",
      color: "text-success",
      technologies: ["FastAPI Framework", "MQTT Broker", "Task Queue Management", "WebSocket Real-time Data"]
    },
    {
      icon: Smartphone,
      title: "AI & Machine Learning",
      color: "text-electric-blue",
      technologies: ["YOLOv8 Object Detection", "Custom Pathfinding Algorithms", "Predictive Risk Models", "Computer Vision Pipeline"]
    },
    {
      icon: Cloud,
      title: "Frontend & UI",
      color: "text-electric-blue",
      technologies: ["React / Next.js", "Interactive Map Integration", "WebSocket Live Streams", "Progressive Web App"]
    },
    {
      icon: Shield,
      title: "Cloud & Infrastructure",
      color: "text-danger",
      technologies: ["AWS / Firebase", "CDN & Edge Deployment", "S3 Object Storage", "Auto-scaling Architecture"]
    }
  ];

  const metrics = [
    { label: "Detection Accuracy", value: "94.2%", description: "YOLO victim identification rate" },
    { label: "Response Time", value: "< 3 min", description: "From detection to dispatch" },
    { label: "Drone Coverage", value: "10 km²", description: "Per swarm deployment" },
    { label: "System Uptime", value: "99.8%", description: "Network availability" }
  ];

  return (
    <section id="tech" className="py-20 bg-charcoal-light">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-sora mb-6 text-primary">
            Technical Architecture
          </h2>
          <p className="text-xl text-text-secondary max-w-4xl mx-auto">
            Enterprise-grade technology stack designed for mission-critical disaster response
          </p>
        </div>

        {/* Tech Stack Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {categories.map((category, index) => (
            <div key={index} className="card-glass p-8 group hover:shadow-intense transition-all duration-500 hover:-translate-y-2">
              <div className="mb-6">
                <div className="p-4 bg-electric-blue/10 rounded-2xl w-fit group-hover:bg-electric-blue/20 transition-colors">
                  <category.icon className={`h-8 w-8 ${category.color}`} />
                </div>
              </div>
              
              <h3 className="text-xl font-bold font-sora mb-4 text-primary">
                {category.title}
              </h3>
              
              <ul className="space-y-3">
                {category.technologies.map((tech, techIndex) => (
                  <li key={techIndex} className="flex items-center text-text-secondary">
                    <div className="w-2 h-2 bg-electric-blue rounded-full mr-3 flex-shrink-0" />
                    <span className="text-sm">{tech}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Performance Metrics */}
        <div className="card-glass p-8 rounded-2xl mb-16">
          <h3 className="text-2xl font-bold font-sora text-center mb-8 text-primary">
            System Performance
          </h3>
          
          <div className="grid md:grid-cols-4 gap-8">
            {metrics.map((metric, index) => (
              <div key={index} className="text-center group">
                <div className="text-3xl font-bold font-sora text-electric-blue mb-2 group-hover:scale-110 transition-transform">
                  {metric.value}
                </div>
                <div className="text-lg font-semibold text-primary mb-1">
                  {metric.label}
                </div>
                <div className="text-sm text-text-muted">
                  {metric.description}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Architecture Highlights */}
        <div className="text-center">
          <h3 className="text-3xl font-bold font-sora mb-12 text-primary">
            Key Architecture Features
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Resilient Design",
                description: "Mesh networking ensures communication even when infrastructure fails",
                features: ["Offline-first architecture", "Redundant communication paths", "Edge computing capabilities"]
              },
              {
                title: "Scalable Infrastructure",
                description: "Cloud-native design that adapts to emergency scale requirements",
                features: ["Auto-scaling capabilities", "Global CDN deployment", "Multi-region redundancy"]
              },
              {
                title: "Real-time Processing",
                description: "Sub-second response times for critical life-saving decisions",
                features: ["WebSocket live streams", "Edge AI processing", "Optimized data pipelines"]
              }
            ].map((feature, index) => (
              <div key={index} className="card-glass p-6">
                <h4 className="text-xl font-bold font-sora mb-4 text-electric-blue">
                  {feature.title}
                </h4>
                <p className="text-text-secondary mb-4">
                  {feature.description}
                </p>
                <ul className="space-y-2">
                  {feature.features.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center text-sm text-text-secondary">
                      <div className="w-1.5 h-1.5 bg-electric-blue rounded-full mr-2" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Technology Logos/Badges */}
        <div className="mt-16 text-center">
          <p className="text-text-muted mb-8">Built with industry-leading technologies</p>
          <div className="flex flex-wrap justify-center gap-4">
            {["React", "Python", "AWS", "OpenCV", "MQTT", "FastAPI", "YOLOv8", "ROS"].map((tech, index) => (
              <div key={index} className="px-4 py-2 bg-charcoal-lighter rounded-lg text-sm text-text-secondary border border-electric-blue/20 hover:border-electric-blue/50 transition-colors">
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
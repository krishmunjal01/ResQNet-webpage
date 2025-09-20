import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Target, Users, Globe } from 'lucide-react';

const Roadmap = () => {
  const phases = [
    {
      phase: "Phase 1",
      title: "Prototype & Foundation",
      timeline: "Current - 3 months",
      status: "In Progress",
      statusColor: "bg-electric-blue/20 text-electric-blue border-electric-blue/30",
      icon: Target,
      objectives: [
        "Complete hackathon prototype demonstration",
        "Establish YOLO detection baseline (>90% accuracy)",
        "Develop core mesh communication protocol",
        "Create unified dashboard interface"
      ],
      deliverables: [
        "Working drone swarm (3-5 units)",
        "Basic victim detection system",
        "Real-time coordination dashboard",
        "Offline mesh network demo"
      ]
    },
    {
      phase: "Phase 2", 
      title: "Swarm Intelligence & Scaling",
      timeline: "3-6 months",
      status: "Planned",
      statusColor: "bg-warning/20 text-warning border-warning/30",
      icon: Users,
      objectives: [
        "Advanced swarm coordination algorithms",
        "Enhanced IoT sensor integration",
        "Predictive risk modeling deployment",
        "Government stakeholder engagement"
      ],
      deliverables: [
        "20+ drone swarm capability",
        "Environmental sensor network",
        "AI-powered risk prediction",
        "Pilot program partnerships"
      ]
    },
    {
      phase: "Phase 3",
      title: "Nationwide Deployment",
      timeline: "6-12 months", 
      status: "Future",
      statusColor: "bg-charcoal-lighter/50 text-text-muted border-charcoal-lighter",
      icon: Globe,
      objectives: [
        "National emergency services integration",
        "Government API standardization", 
        "Multi-state pilot programs",
        "Public-private partnerships"
      ],
      deliverables: [
        "National coordination network",
        "Standardized emergency protocols",
        "Commercial deployment ready",
        "International expansion framework"
      ]
    }
  ];

  const milestones = [
    { date: "Q1 2025", event: "Hackathon Demo Complete", completed: true },
    { date: "Q2 2025", event: "First Government Pilot", completed: false },
    { date: "Q3 2025", event: "Multi-State Testing", completed: false },
    { date: "Q4 2025", event: "Commercial Launch", completed: false }
  ];

  return (
    <section id="roadmap" className="py-20 bg-charcoal-light">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-sora mb-6 text-primary">
            Development Roadmap
          </h2>
          <p className="text-xl text-text-secondary max-w-4xl mx-auto">
            Strategic development phases from prototype to nationwide deployment
          </p>
        </div>

        {/* Phase Cards */}
        <div className="space-y-8 mb-16">
          {phases.map((phase, index) => (
            <Card key={index} className="card-glass p-8 group hover:shadow-intense transition-all duration-500">
              <div className="grid lg:grid-cols-3 gap-8">
                {/* Phase Header */}
                <div className="lg:col-span-1">
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-electric-blue/10 rounded-lg mr-4 group-hover:bg-electric-blue/20 transition-colors">
                      <phase.icon className="h-6 w-6 text-electric-blue" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-electric-blue mb-1">
                        {phase.phase}
                      </div>
                      <h3 className="text-xl font-bold font-sora text-primary">
                        {phase.title}
                      </h3>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Calendar className="h-4 w-4 text-text-muted" />
                      <span className="text-text-secondary">{phase.timeline}</span>
                    </div>
                    <Badge className={phase.statusColor}>
                      {phase.status}
                    </Badge>
                  </div>
                </div>

                {/* Objectives */}
                <div className="lg:col-span-1">
                  <h4 className="font-bold font-sora text-primary mb-4">
                    Key Objectives
                  </h4>
                  <ul className="space-y-2">
                    {phase.objectives.map((objective, objIndex) => (
                      <li key={objIndex} className="flex items-start text-sm text-text-secondary">
                        <div className="w-1.5 h-1.5 bg-electric-blue rounded-full mr-3 mt-2 flex-shrink-0" />
                        {objective}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Deliverables */}
                <div className="lg:col-span-1">
                  <h4 className="font-bold font-sora text-primary mb-4">
                    Expected Deliverables
                  </h4>
                  <ul className="space-y-2">
                    {phase.deliverables.map((deliverable, delIndex) => (
                      <li key={delIndex} className="flex items-start text-sm text-text-secondary">
                        <div className="w-1.5 h-1.5 bg-success rounded-full mr-3 mt-2 flex-shrink-0" />
                        {deliverable}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Timeline */}
        <div className="card-glass p-8 rounded-2xl mb-16">
          <h3 className="text-2xl font-bold font-sora text-center mb-8 text-primary">
            Key Milestones
          </h3>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-charcoal-lighter transform -translate-y-1/2" />
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {milestones.map((milestone, index) => (
                <div key={index} className="relative text-center">
                  {/* Timeline Dot */}
                  <div className={`mx-auto w-4 h-4 rounded-full mb-4 ${
                    milestone.completed ? 'bg-success' : 'bg-charcoal-lighter'
                  }`} />
                  
                  <div className="text-sm font-semibold text-electric-blue mb-1">
                    {milestone.date}
                  </div>
                  <div className="text-sm text-text-secondary">
                    {milestone.event}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scaling Strategy */}
        <div className="text-center">
          <h3 className="text-3xl font-bold font-sora mb-12 text-primary">
            Scaling Strategy
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Technical Scaling",
                description: "Infrastructure that grows with demand",
                points: ["Cloud-native architecture", "Auto-scaling capabilities", "Global CDN deployment"]
              },
              {
                title: "Operational Scaling", 
                description: "Processes for nationwide coordination",
                points: ["Standardized protocols", "Training programs", "24/7 support centers"]
              },
              {
                title: "Partnership Scaling",
                description: "Building ecosystem of stakeholders", 
                points: ["Government partnerships", "NGO integrations", "Industry collaborations"]
              }
            ].map((strategy, index) => (
              <Card key={index} className="card-glass p-6 text-center group hover:shadow-intense transition-all duration-500">
                <h4 className="text-xl font-bold font-sora mb-4 text-electric-blue">
                  {strategy.title}
                </h4>
                <p className="text-text-secondary mb-4">
                  {strategy.description}
                </p>
                <ul className="space-y-2">
                  {strategy.points.map((point, pointIndex) => (
                    <li key={pointIndex} className="text-sm text-text-secondary">
                      • {point}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
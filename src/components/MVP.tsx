import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Play, CheckCircle, Calendar, Target } from 'lucide-react';

const MVP = () => {
  const demoFeatures = [
    {
      title: "Live Drone Survey Demo",
      description: "Real footage of autonomous drones conducting area surveillance with YOLO object detection",
      duration: "2 minutes",
      status: "Ready"
    },
    {
      title: "Interactive Dashboard",
      description: "Command center interface showing live map data, drone status, and emergency coordination",
      duration: "3 minutes", 
      status: "Ready"
    },
    {
      title: "Offline Mesh Demo",
      description: "Demonstration of mesh network communication when traditional infrastructure fails",
      duration: "2 minutes",
      status: "Ready"
    },
    {
      title: "AI Incident Report",
      description: "Automated report generation with victim detection data and recommended response actions",
      duration: "1 minute",
      status: "Ready"
    },
    {
      title: "Roadmap Presentation",
      description: "Future development phases and scaling strategy for nationwide deployment",
      duration: "2 minutes",
      status: "Ready"
    }
  ];

  const outcomes = [
    "Demonstrate 40% faster victim identification compared to traditional methods",
    "Show 30% reduction in redundant emergency dispatches through AI coordination", 
    "Prove mesh network resilience in infrastructure-failure scenarios",
    "Present clear path to government integration and scaling"
  ];

  return (
    <section id="mvp" className="py-20 bg-charcoal">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-sora mb-6 text-primary">
            MVP — <span className="text-gradient">Hackathon Demo</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-4xl mx-auto">
            10-minute comprehensive demonstration of the ResQNet disaster response system
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Demo Components */}
          <div>
            <h3 className="text-2xl font-bold font-sora mb-8 text-primary">
              Demo Components
            </h3>
            
            <div className="space-y-6">
              {demoFeatures.map((feature, index) => (
                <Card key={index} className="card-glass p-6 group hover:shadow-intense transition-all duration-500">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center">
                      <div className="p-3 bg-electric-blue/10 rounded-lg mr-4 group-hover:bg-electric-blue/20 transition-colors">
                        <Play className="h-5 w-5 text-electric-blue" />
                      </div>
                      <div>
                        <h4 className="font-bold font-sora text-primary mb-1">
                          {feature.title}
                        </h4>
                        <div className="text-sm text-text-muted">
                          {feature.duration} • {feature.status}
                        </div>
                      </div>
                    </div>
                    <CheckCircle className="h-5 w-5 text-success flex-shrink-0" />
                  </div>
                  
                  <p className="text-text-secondary leading-relaxed">
                    {feature.description}
                  </p>
                </Card>
              ))}
            </div>

            <div className="mt-8 text-center">
              <Button className="btn-electric">
                <Play className="h-5 w-5 mr-2" />
                Start Demo Sequence
              </Button>
            </div>
          </div>

          {/* Expected Outcomes */}
          <div>
            <h3 className="text-2xl font-bold font-sora mb-8 text-primary">
              Expected Outcomes
            </h3>
            
            <Card className="card-glass p-8 mb-8">
              <div className="mb-6">
                <Target className="h-8 w-8 text-electric-blue mb-4" />
                <h4 className="text-xl font-bold font-sora text-primary mb-4">
                  Demonstration Goals
                </h4>
              </div>
              
              <ul className="space-y-4">
                {outcomes.map((outcome, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-success mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-text-secondary">{outcome}</span>
                  </li>
                ))}
              </ul>
            </Card>

            {/* Demo Timeline */}
            <Card className="card-glass p-8">
              <div className="mb-6">
                <Calendar className="h-8 w-8 text-electric-blue mb-4" />
                <h4 className="text-xl font-bold font-sora text-primary mb-4">
                  Demo Timeline
                </h4>
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-charcoal-lighter rounded-lg">
                  <span className="text-text-secondary">Setup & Introduction</span>
                  <span className="text-electric-blue font-semibold">1 min</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-charcoal-lighter rounded-lg">
                  <span className="text-text-secondary">Live System Demo</span>
                  <span className="text-electric-blue font-semibold">7 min</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-charcoal-lighter rounded-lg">
                  <span className="text-text-secondary">Q&A + Next Steps</span>
                  <span className="text-electric-blue font-semibold">2 min</span>
                </div>
              </div>
              
              <div className="mt-6 pt-4 border-t border-charcoal-lighter">
                <div className="flex justify-between items-center">
                  <span className="font-bold text-primary">Total Duration</span>
                  <span className="text-xl font-bold text-electric-blue">10 min</span>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Judge Evaluation Criteria */}
        <div className="mt-16 card-glass p-8 rounded-2xl">
          <h3 className="text-2xl font-bold font-sora text-center mb-8 text-primary">
            Judge Evaluation Focus
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Technical Innovation",
                points: ["YOLO detection accuracy", "Real-time processing speed", "Mesh network resilience"]
              },
              {
                title: "Practical Impact", 
                points: ["End-to-end workflow demo", "Measurable efficiency gains", "Scalability potential"]
              },
              {
                title: "Implementation Readiness",
                points: ["Government integration path", "Cost-effectiveness analysis", "Ethical considerations"]
              }
            ].map((criteria, index) => (
              <div key={index} className="text-center">
                <h4 className="text-lg font-bold font-sora mb-4 text-electric-blue">
                  {criteria.title}
                </h4>
                <ul className="space-y-2">
                  {criteria.points.map((point, pointIndex) => (
                    <li key={pointIndex} className="text-sm text-text-secondary">
                      • {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MVP;
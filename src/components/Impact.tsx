import { Card } from '@/components/ui/card';
import { TrendingUp, Clock, DollarSign, Users, Heart, Globe } from 'lucide-react';

const Impact = () => {
  const impacts = [
    {
      icon: Clock,
      title: "Faster Rescues",
      description: "More Lives Saved",
      metric: "40%",
      detail: "Reduction in victim identification time through AI-powered detection"
    },
    {
      icon: DollarSign,
      title: "Smarter Allocation", 
      description: "Less Resource Waste",
      metric: "30%",
      detail: "Decrease in redundant emergency dispatches via intelligent coordination"
    },
    {
      icon: Users,
      title: "Unified Data",
      description: "Better Coordination",
      metric: "60%",
      detail: "Improvement in inter-agency communication and response coordination"
    },
    {
      icon: Heart,
      title: "Economic Resilience",
      description: "Reduced Disaster Impact",
      metric: "25%",
      detail: "Estimated reduction in economic losses through faster response times"
    }
  ];

  const simulationResults = [
    {
      scenario: "Urban Flood Response",
      improvement: "40% faster victim identification",
      details: "Autonomous drones detected stranded individuals 4.2 minutes faster than traditional methods"
    },
    {
      scenario: "Resource Coordination",
      improvement: "30% fewer redundant dispatches", 
      details: "AI coordination system eliminated duplicate emergency team deployments"
    },
    {
      scenario: "Communication Reliability",
      improvement: "99.2% network uptime",
      details: "Mesh networking maintained communication even with 60% infrastructure failure"
    },
    {
      scenario: "Coverage Efficiency",
      improvement: "10x larger area coverage",
      details: "Drone swarms covered 10 km² compared to 1 km² with traditional ground teams"
    }
  ];

  const globalImpact = [
    {
      title: "Immediate Impact",
      timeframe: "0-6 months",
      benefits: [
        "Reduced emergency response times",
        "Improved victim survival rates", 
        "Better resource utilization",
        "Enhanced coordination between agencies"
      ]
    },
    {
      title: "Medium-term Impact",
      timeframe: "6-24 months", 
      benefits: [
        "Standardized national emergency protocols",
        "Reduced disaster-related economic losses",
        "Improved emergency preparedness",
        "International cooperation frameworks"
      ]
    },
    {
      title: "Long-term Impact",
      timeframe: "2+ years",
      benefits: [
        "Global disaster response network",
        "Climate resilience enhancement",
        "Technology transfer to developing nations",
        "Sustainable emergency management ecosystem"
      ]
    }
  ];

  return (
    <section id="impact" className="py-20 bg-charcoal">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-sora mb-6 text-primary">
            Measuring <span className="text-gradient">Real Impact</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-4xl mx-auto">
            Quantified improvements in disaster response effectiveness and efficiency
          </p>
        </div>

        {/* Key Impact Metrics */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {impacts.map((impact, index) => (
            <Card key={index} className="card-glass p-8 text-center group hover:shadow-intense transition-all duration-500 hover:-translate-y-2">
              <div className="mb-6">
                <div className="p-4 bg-electric-blue/10 rounded-2xl w-fit mx-auto group-hover:bg-electric-blue/20 transition-colors">
                  <impact.icon className="h-8 w-8 text-electric-blue" />
                </div>
              </div>
              
              <div className="text-4xl font-bold font-sora text-electric-blue mb-2 group-hover:scale-110 transition-transform">
                {impact.metric}
              </div>
              
              <h3 className="text-lg font-bold font-sora text-primary mb-2">
                {impact.title}
              </h3>
              
              <p className="text-text-secondary mb-4">
                {impact.description}
              </p>
              
              <p className="text-sm text-text-muted">
                {impact.detail}
              </p>
            </Card>
          ))}
        </div>

        {/* Simulation Results */}
        <div className="card-glass p-8 rounded-2xl mb-16">
          <h3 className="text-2xl font-bold font-sora text-center mb-8 text-primary">
            Simulation Test Results
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            {simulationResults.map((result, index) => (
              <div key={index} className="border border-charcoal-lighter rounded-lg p-6 group hover:border-electric-blue/50 transition-colors">
                <div className="flex items-center mb-4">
                  <TrendingUp className="h-5 w-5 text-success mr-3" />
                  <h4 className="font-bold font-sora text-primary">
                    {result.scenario}
                  </h4>
                </div>
                
                <div className="text-xl font-bold text-electric-blue mb-2">
                  {result.improvement}
                </div>
                
                <p className="text-sm text-text-secondary">
                  {result.details}
                </p>
              </div>
            ))}
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-text-muted">
              Based on controlled testing scenarios simulating real disaster conditions
            </p>
          </div>
        </div>

        {/* Global Impact Timeline */}
        <div className="space-y-8">
          <h3 className="text-3xl font-bold font-sora text-center text-primary">
            Projected Global Impact
          </h3>
          
          {globalImpact.map((phase, index) => (
            <Card key={index} className="card-glass p-8 group hover:shadow-intense transition-all duration-500">
              <div className="grid lg:grid-cols-4 gap-6 items-center">
                <div className="lg:col-span-1">
                  <div className="flex items-center mb-4">
                    <Globe className="h-6 w-6 text-electric-blue mr-3" />
                    <div>
                      <h4 className="text-xl font-bold font-sora text-primary">
                        {phase.title}
                      </h4>
                      <p className="text-sm text-electric-blue">
                        {phase.timeframe}
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="lg:col-span-3">
                  <div className="grid md:grid-cols-2 gap-4">
                    {phase.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-start">
                        <div className="w-2 h-2 bg-electric-blue rounded-full mr-3 mt-2 flex-shrink-0" />
                        <span className="text-text-secondary">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Economic Impact */}
        <div className="mt-16 card-glass p-8 rounded-2xl text-center">
          <h3 className="text-2xl font-bold font-sora mb-6 text-primary">
            Economic & Social Returns
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group">
              <div className="text-3xl font-bold font-sora text-electric-blue mb-2 group-hover:scale-110 transition-transform">
                $2.4B
              </div>
              <div className="text-primary font-semibold mb-1">
                Potential Annual Savings
              </div>
              <div className="text-sm text-text-muted">
                Reduced disaster response costs and economic losses
              </div>
            </div>
            
            <div className="group">
              <div className="text-3xl font-bold font-sora text-electric-blue mb-2 group-hover:scale-110 transition-transform">
                15,000+
              </div>
              <div className="text-primary font-semibold mb-1">
                Lives Protected Annually
              </div>
              <div className="text-sm text-text-muted">
                Estimated through faster response and coordination
              </div>
            </div>
            
            <div className="group">
              <div className="text-3xl font-bold font-sora text-electric-blue mb-2 group-hover:scale-110 transition-transform">
                50+
              </div>
              <div className="text-primary font-semibold mb-1">
                Countries Potential Deployment
              </div>
              <div className="text-sm text-text-muted">
                Global market opportunity for technology transfer
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;
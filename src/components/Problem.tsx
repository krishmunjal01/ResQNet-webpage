import { AlertTriangle, Clock, Users, MapPin } from 'lucide-react';

const Problem = () => {
  const problems = [
    {
      icon: AlertTriangle,
      title: "Fragmented Response",
      description: "Delays & wasted resources due to poor coordination between emergency teams"
    },
    {
      icon: Clock,
      title: "No Real-Time Coordination",
      description: "Authorities lack live awareness of disaster situations and resource deployment"
    },
    {
      icon: Users,
      title: "Human Limits",
      description: "Floods, earthquakes, and disasters restrict human rescuer access to critical areas"
    }
  ];

  return (
    <section id="problem" className="py-20 bg-charcoal">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-sora mb-6 text-primary">
            The Critical Challenge
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Current disaster response systems fail when coordination matters most
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <div 
              key={index} 
              className="card-glass p-8 text-center group hover:shadow-intense transition-all duration-500"
            >
              <div className="mb-6 flex justify-center">
                <div className="p-4 bg-electric-blue/10 rounded-2xl group-hover:bg-electric-blue/20 transition-colors">
                  <problem.icon className="h-12 w-12 text-electric-blue" />
                </div>
              </div>
              <h3 className="text-2xl font-bold font-sora mb-4 text-primary">
                {problem.title}
              </h3>
              <p className="text-text-secondary leading-relaxed">
                {problem.description}
              </p>
            </div>
          ))}
        </div>

        {/* Statistics */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { number: "40%", label: "Slower Response" },
            { number: "60%", label: "Resource Waste" },
            { number: "3x", label: "Communication Delays" },
            { number: "50%", label: "Coverage Gaps" }
          ].map((stat, index) => (
            <div key={index} className="group">
              <div className="text-4xl font-bold font-sora text-electric-blue mb-2 group-hover:scale-110 transition-transform">
                {stat.number}
              </div>
              <div className="text-text-muted">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Problem;
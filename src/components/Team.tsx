import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Github, Linkedin, Mail, Code, Zap, Database, Palette, Cloud } from 'lucide-react';
import teamPhoto from '@/assets/team-photo.jpg';

const Team = () => {
  const members = [
    {
      name: "Krish",
      role: "Lead & Full-stack + ML",
      expertise: ["Technical Leadership", "Machine Learning", "System Architecture", "Full-stack Development"],
      icon: Code,
      description: "Leading the technical vision and ML implementations for autonomous detection systems."
    },
    {
      name: "Bhavya", 
      role: "Drones & Computer Vision",
      expertise: ["Drone Technology", "Computer Vision", "YOLO Implementation", "Autonomous Systems"],
      icon: Zap,
      description: "Developing drone coordination systems and computer vision algorithms for victim detection."
    },
    {
      name: "Akshat",
      role: "IoT & Embedded Systems", 
      expertise: ["IoT Architecture", "Embedded Programming", "Sensor Networks", "Hardware Integration"],
      icon: Database,
      description: "Building IoT sensor networks and embedded systems for real-time environmental monitoring."
    },
    {
      name: "Raghav",
      role: "Frontend & UX Design",
      expertise: ["React Development", "UI/UX Design", "Interactive Dashboards", "User Experience"],
      icon: Palette, 
      description: "Creating intuitive interfaces and dashboards for emergency response coordination."
    },
    {
      name: "Shivam",
      role: "Backend & Cloud Infrastructure",
      expertise: ["Cloud Architecture", "Backend APIs", "DevOps", "System Scaling"],
      icon: Cloud,
      description: "Architecting scalable cloud infrastructure and backend systems for nationwide deployment."
    }
  ];

  const achievements = [
    "Selected for Ideathon 4.0 Phase 3",
    "Selected for Tekathon 4.0",
  ];

  const values = [
    {
      title: "Innovation First",
      description: "Pushing the boundaries of disaster response technology"
    },
    {
      title: "Human-Centered",
      description: "Every line of code is written to save lives"
    },
    {
      title: "Open Collaboration", 
      description: "Working with governments, NGOs, and communities"
    },
    {
      title: "Sustainable Impact",
      description: "Building solutions that last and scale globally"
    }
  ];

  return (
    <section id="team" className="py-20 bg-charcoal-light">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-sora mb-6 text-primary">
            Team <span className="text-gradient">ResQNet</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-4xl mx-auto">
            Passionate engineers and innovators united by the mission to revolutionize disaster response
          </p>
        </div>

        {/* Team Photo */}
        <div className="mb-16 text-center">
          <div className="relative inline-block">
            <img 
              src={teamPhoto} 
              alt="Team ResQNet" 
              className="rounded-2xl shadow-intense max-w-2xl w-full h-auto"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/20 to-transparent rounded-2xl" />
          </div>
        </div>

        {/* Team Members */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {members.map((member, index) => (
            <Card key={index} className="card-glass p-8 text-center group hover:shadow-intense transition-all duration-500 hover:-translate-y-2">
              {/* Icon */}
              <div className="mb-6">
                <div className="p-4 bg-electric-blue/10 rounded-2xl w-fit mx-auto group-hover:bg-electric-blue/20 transition-colors">
                  <member.icon className="h-8 w-8 text-electric-blue" />
                </div>
              </div>

              {/* Name & Role */}
              <h3 className="text-xl font-bold font-sora text-primary mb-2">
                {member.name}
              </h3>
              <p className="text-electric-blue font-semibold mb-4">
                {member.role}
              </p>

              {/* Description */}
              <p className="text-text-secondary text-sm mb-6 leading-relaxed">
                {member.description}
              </p>

              {/* Expertise Tags */}
              <div className="flex flex-wrap gap-2 justify-center mb-6">
                {member.expertise.map((skill, skillIndex) => (
                  <Badge 
                    key={skillIndex} 
                    className="bg-charcoal-lighter/50 text-text-secondary border-charcoal-lighter text-xs"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>

              {/* Social Links */}
              <div className="flex justify-center space-x-4">
                <button className="p-2 bg-charcoal-lighter rounded-lg hover:bg-electric-blue/20 transition-colors">
                  <Github className="h-4 w-4 text-text-secondary hover:text-electric-blue" />
                </button>
                <button className="p-2 bg-charcoal-lighter rounded-lg hover:bg-electric-blue/20 transition-colors">
                  <Linkedin className="h-4 w-4 text-text-secondary hover:text-electric-blue" />
                </button>
                <button className="p-2 bg-charcoal-lighter rounded-lg hover:bg-electric-blue/20 transition-colors">
                  <Mail className="h-4 w-4 text-text-secondary hover:text-electric-blue" />
                </button>
              </div>
            </Card>
          ))}
        </div>

        {/* Team Achievements */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <Card className="card-glass p-8">
            <h3 className="text-2xl font-bold font-sora mb-6 text-primary">
              Team Achievements
            </h3>
            <ul className="space-y-4">
              {achievements.map((achievement, index) => (
                <li key={index} className="flex items-start">
                  <div className="w-2 h-2 bg-electric-blue rounded-full mr-4 mt-2 flex-shrink-0" />
                  <span className="text-text-secondary">{achievement}</span>
                </li>
              ))}
            </ul>
          </Card>

          <Card className="card-glass p-8">
            <h3 className="text-2xl font-bold font-sora mb-6 text-primary">
              Our Values
            </h3>
            <div className="space-y-4">
              {values.map((value, index) => (
                <div key={index}>
                  <h4 className="font-bold text-electric-blue mb-1">
                    {value.title}
                  </h4>
                  <p className="text-sm text-text-secondary">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Contact Section */}
        <div className="card-glass p-8 rounded-2xl text-center">
          <h3 className="text-2xl font-bold font-sora mb-6 text-primary">
            Get In Touch
          </h3>
          
          <p className="text-text-secondary mb-8 max-w-2xl mx-auto">
            Interested in collaborating, investing, or learning more about ResQNet? 
            We'd love to hear from you.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <div className="flex items-center text-electric-blue">
              <Mail className="h-5 w-5 mr-3" />
              <span className="font-semibold">ResQNet.team@contact.com</span>
            </div>
            
            <div className="flex space-x-4">
              <button className="p-3 bg-electric-blue/10 rounded-lg hover:bg-electric-blue/20 transition-colors group">
                <Github className="h-5 w-5 text-electric-blue group-hover:scale-110 transition-transform" />
              </button>
              <button className="p-3 bg-electric-blue/10 rounded-lg hover:bg-electric-blue/20 transition-colors group">
                <Linkedin className="h-5 w-5 text-electric-blue group-hover:scale-110 transition-transform" />
              </button>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-charcoal-lighter">
            <p className="text-sm text-text-muted">
              Available for partnerships, pilot programs, and investment discussions
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
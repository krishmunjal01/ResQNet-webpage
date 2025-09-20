import { Button } from '@/components/ui/button';
import { ExternalLink, Zap } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="py-16 bg-charcoal border-t border-charcoal-lighter">
      <div className="container mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-4 gap-8 mb-12">
          {/* Brand & Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <Zap className="h-8 w-8 text-electric-blue" />
              <span className="text-2xl font-bold font-sora text-primary">ResQNet</span>
            </div>
            
            <p className="text-text-secondary mb-6 leading-relaxed max-w-md">
              Autonomous Disaster Management & Coordination System revolutionizing emergency response 
              through AI-powered drones, IoT sensors, and unified coordination platforms.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              {/* Removed the "Download Pitch PDF" Button */}
            </div>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="text-lg font-bold font-sora text-primary mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[{ label: 'Problem', id: 'problem' },
                { label: 'Solution', id: 'solution' },
                { label: 'Live Demo', id: 'demo' },
                { label: 'Technology', id: 'tech' },
                { label: 'Team', id: 'team' }]
                .map((link) => (
                  <li key={link.id}>
                    <button
                      onClick={() => {
                        const element = document.getElementById(link.id);
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
                      className="text-text-secondary hover:text-electric-blue transition-colors"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
            </ul>
          </div>

          {/* Project Info Section */}
          <div>
            <h3 className="text-lg font-bold font-sora text-primary mb-4">
              Project Details
            </h3>
            <div className="space-y-3 text-sm">
              <div>
                <span className="text-text-muted">Competition:</span>
                <br />
                <span className="text-text-secondary">Tekathon 4.0 (Phase 2)</span>
              </div>
              <div>
                <span className="text-text-muted">Category:</span>
                <br />
                <span className="text-text-secondary">Disaster Management</span>
              </div>
              <div>
                <span className="text-text-muted">Status:</span>
                <br />
                <span className="text-electric-blue">Active Development</span>
              </div>
              <div>
                <span className="text-text-muted">Contact:</span>
                <br />
                <span className="text-text-secondary">ResQNet.team@contact.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Judge Notes Card */}
        <div className="card-glass p-6 rounded-2xl mb-8">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-lg font-bold font-sora text-primary mb-2">
                📋 Judge Evaluation Notes
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4 text-sm">
                <div>
                  <span className="font-semibold text-electric-blue">Detection:</span>
                  <p className="text-text-secondary">Watch YOLO accuracy in live demo</p>
                </div>
                <div>
                  <span className="font-semibold text-electric-blue">Workflow:</span>
                  <p className="text-text-secondary">End-to-end: sense → AI → dispatch</p>
                </div>
                <div>
                  <span className="font-semibold text-electric-blue">Resilience:</span>
                  <p className="text-text-secondary">Offline mesh network capability</p>
                </div>
                <div>
                  <span className="font-semibold text-electric-blue">Export:</span>
                  <p className="text-text-secondary">Incident report PDF generation</p>
                </div>
                <div>
                  <span className="font-semibold text-electric-blue">Scale:</span>
                  <p className="text-text-secondary">Scalability + ethics assessment</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-charcoal-lighter">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-text-muted text-sm">
              © ResQNet 2025 • Tekathon Phase 3 Pitch Prototype
            </div>
            
            <div className="flex items-center gap-4 text-sm">
              <span className="text-text-muted">Static site • Read-only • Export enabled</span>
              <div className="w-2 h-2 bg-electric-blue rounded-full animate-pulse" />
              <span className="text-electric-blue">Live Demo Active</span>
            </div>
          </div>
          
          {/* Watermark */}
          <div className="mt-4 text-center">
            <p className="text-xs text-text-muted opacity-75">
              ResQNet — Tekathon Phase 3 — Read-Only Preview
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

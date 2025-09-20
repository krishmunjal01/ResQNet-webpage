import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Play, Pause, RotateCcw, Download, MapPin, Zap, Wifi, Users, AlertTriangle } from 'lucide-react';
import demoDashboard from '@/assets/demo-dashboard.jpg';

const Demo = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [simulationStep, setSimulationStep] = useState(0);
  const [activeLayer, setActiveLayer] = useState({
    drones: true,
    sensors: true,
    victims: true,
    resources: true
  });
  const [selectedMarker, setSelectedMarker] = useState<any>(null);

  const simulationSteps = [
    "Drones begin area survey",
    "YOLO detects potential victim",
    "AI calculates optimal rescue path", 
    "Emergency team dispatched",
    "Rescue operation completed"
  ];

  const mockData = {
    drones: [
      { id: 1, x: 25, y: 30, status: 'patrolling', battery: 85 },
      { id: 2, x: 60, y: 45, status: 'investigating', battery: 72 },
      { id: 3, x: 80, y: 25, status: 'returning', battery: 45 }
    ],
    sensors: [
      { id: 1, x: 40, y: 60, type: 'flood', value: 'Critical', active: true },
      { id: 2, x: 70, y: 70, type: 'air_quality', value: 'Normal', active: true },
      { id: 3, x: 20, y: 80, type: 'temperature', value: 'High', active: true }
    ],
    victims: [
      { id: 1, x: 45, y: 55, confidence: 94, severity: 'Critical', time: '2 min ago' },
      { id: 2, x: 65, y: 35, confidence: 87, severity: 'Moderate', time: '5 min ago' }
    ],
    resources: [
      { id: 1, x: 15, y: 15, type: 'ambulance', status: 'en-route' },
      { id: 2, x: 85, y: 85, type: 'fire_truck', status: 'available' }
    ]
  };

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying) {
      interval = setInterval(() => {
        setSimulationStep((prev) => (prev + 1) % simulationSteps.length);
      }, 3000);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  const toggleLayer = (layer: string) => {
    setActiveLayer(prev => ({ ...prev, [layer]: !prev[layer as keyof typeof prev] }));
  };

  const MarkerIcon = ({ type, active = true }: { type: string, active?: boolean }) => {
    const icons = {
      drone: Zap,
      sensor: Wifi,
      victim: AlertTriangle,
      resource: Users
    };
    const Icon = icons[type as keyof typeof icons];
    return <Icon className={`h-4 w-4 ${active ? 'text-electric-blue' : 'text-gray-500'}`} />;
  };

  return (
    <section id="demo" className="py-20 bg-charcoal">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-sora mb-6 text-primary">
            Live Prototype — <span className="text-gradient">Interactive Demo</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-4xl mx-auto">
            Experience real-time disaster coordination in action
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Demo Area */}
          <div className="lg:col-span-2 space-y-6">
            {/* Map Interface */}
            <Card className="relative card-glass p-6 h-96 overflow-hidden">
              <div 
                className="absolute inset-0 bg-cover bg-center opacity-20"
                style={{ backgroundImage: `url(${demoDashboard})` }}
              />
              <div className="relative z-10 h-full">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-bold font-sora text-primary">
                    Disaster Zone: Flood Area Alpha
                  </h3>
                  <Badge className="bg-danger/20 text-danger border-danger/30">
                    Active Emergency
                  </Badge>
                </div>

                {/* Interactive Map Area */}
                <div className="relative h-full bg-charcoal-lighter/50 rounded-lg border border-electric-blue/20">
                  {/* Drone Markers */}
                  {activeLayer.drones && mockData.drones.map(drone => (
                    <button
                      key={`drone-${drone.id}`}
                      className="absolute p-2 bg-electric-blue/20 rounded-full glow-pulse hover:bg-electric-blue/40 transition-colors"
                      style={{ left: `${drone.x}%`, top: `${drone.y}%` }}
                      onClick={() => setSelectedMarker({ type: 'drone', data: drone })}
                    >
                      <Zap className="h-4 w-4 text-electric-blue" />
                    </button>
                  ))}

                  {/* Sensor Markers */}
                  {activeLayer.sensors && mockData.sensors.map(sensor => (
                    <button
                      key={`sensor-${sensor.id}`}
                      className="absolute p-2 bg-warning/20 rounded-full pulse-ring hover:bg-warning/40 transition-colors"
                      style={{ left: `${sensor.x}%`, top: `${sensor.y}%` }}
                      onClick={() => setSelectedMarker({ type: 'sensor', data: sensor })}
                    >
                      <Wifi className="h-4 w-4 text-warning" />
                    </button>
                  ))}

                  {/* Victim Markers */}
                  {activeLayer.victims && mockData.victims.map(victim => (
                    <button
                      key={`victim-${victim.id}`}
                      className="absolute p-2 bg-danger/20 rounded-full glow-pulse hover:bg-danger/40 transition-colors"
                      style={{ left: `${victim.x}%`, top: `${victim.y}%` }}
                      onClick={() => setSelectedMarker({ type: 'victim', data: victim })}
                    >
                      <AlertTriangle className="h-4 w-4 text-danger" />
                    </button>
                  ))}

                  {/* Resource Markers */}
                  {activeLayer.resources && mockData.resources.map(resource => (
                    <button
                      key={`resource-${resource.id}`}
                      className="absolute p-2 bg-success/20 rounded-full hover:bg-success/40 transition-colors"
                      style={{ left: `${resource.x}%`, top: `${resource.y}%` }}
                      onClick={() => setSelectedMarker({ type: 'resource', data: resource })}
                    >
                      <Users className="h-4 w-4 text-success" />
                    </button>
                  ))}

                  {/* Instructions Overlay */}
                  <div className="absolute top-4 left-4 bg-charcoal/90 backdrop-blur-sm rounded-lg p-4">
                    <div className="text-sm text-text-secondary space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-electric-blue rounded-full"></span>
                        1. Drones survey area
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-warning rounded-full"></span>
                        2. YOLO detects victims
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-danger rounded-full"></span>
                        3. AI suggests safe path
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-success rounded-full"></span>
                        4. Dispatch response team
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Simulation Controls */}
            <Card className="card-glass p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold font-sora text-primary">
                  Simulation Control
                </h3>
                <div className="flex gap-2">
                  <Button
                    onClick={() => setIsPlaying(!isPlaying)}
                    variant="outline"
                    className="btn-electric-outline"
                  >
                    {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                  </Button>
                  <Button
                    onClick={() => { setIsPlaying(false); setSimulationStep(0); }}
                    variant="outline"
                    className="btn-electric-outline"
                  >
                    <RotateCcw className="h-4 w-4" />
                  </Button>
                  <Button className="btn-electric">
                    <Download className="h-4 w-4 mr-2" />
                    Export Report
                  </Button>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="text-sm text-text-muted">Current Step:</div>
                <div className="text-electric-blue font-semibold">
                  {simulationSteps[simulationStep]}
                </div>
                <div className="w-full bg-charcoal-lighter rounded-full h-2">
                  <div 
                    className="bg-electric-blue h-2 rounded-full transition-all duration-300"
                    style={{ width: `${((simulationStep + 1) / simulationSteps.length) * 100}%` }}
                  />
                </div>
              </div>
            </Card>
          </div>

          {/* Control Panel */}
          <div className="space-y-6">
            {/* Layer Controls */}
            <Card className="card-glass p-6">
              <h3 className="text-lg font-bold font-sora text-primary mb-4">
                Map Layers
              </h3>
              <div className="space-y-3">
                {Object.entries(activeLayer).map(([layer, active]) => (
                  <button
                    key={layer}
                    onClick={() => toggleLayer(layer)}
                    className="flex items-center justify-between w-full p-2 rounded-lg bg-charcoal-lighter/50 hover:bg-charcoal-lighter transition-colors"
                  >
                    <div className="flex items-center gap-2">
                      <MarkerIcon type={layer.slice(0, -1)} active={active} />
                      <span className="text-text-secondary capitalize">
                        {layer}
                      </span>
                    </div>
                    <div className={`w-8 h-4 rounded-full transition-colors ${
                      active ? 'bg-electric-blue' : 'bg-charcoal-lighter'
                    }`}>
                      <div className={`w-4 h-4 bg-white rounded-full transition-transform ${
                        active ? 'translate-x-4' : 'translate-x-0'
                      }`} />
                    </div>
                  </button>
                ))}
              </div>
            </Card>

            {/* Statistics */}
            <Card className="card-glass p-6">
              <h3 className="text-lg font-bold font-sora text-primary mb-4">
                Live Statistics
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-text-secondary">Active Drones</span>
                  <span className="text-electric-blue font-semibold">3</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-secondary">Victims Detected</span>
                  <span className="text-danger font-semibold">2</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-secondary">Response Time</span>
                  <span className="text-success font-semibold">4.2 min</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-secondary">Coverage Area</span>
                  <span className="text-electric-blue font-semibold">2.4 km²</span>
                </div>
              </div>
            </Card>

            {/* Selected Marker Info */}
            {selectedMarker && (
              <Card className="card-glass p-6">
                <h3 className="text-lg font-bold font-sora text-primary mb-4">
                  {selectedMarker.type.charAt(0).toUpperCase() + selectedMarker.type.slice(1)} Details
                </h3>
                <div className="space-y-2 text-sm">
                  {Object.entries(selectedMarker.data).map(([key, value]) => (
                    <div key={key} className="flex justify-between">
                      <span className="text-text-secondary capitalize">{key}:</span>
                      <span className="text-primary">{String(value)}</span>
                    </div>
                  ))}
                </div>
                <Button 
                  onClick={() => setSelectedMarker(null)}
                  className="w-full mt-4 btn-electric-outline"
                >
                  Close
                </Button>
              </Card>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Demo;
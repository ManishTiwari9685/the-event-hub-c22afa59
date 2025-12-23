import { Heart, Cake, PartyPopper, Calendar, Users, Star, Mic, Truck, Settings, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ServiceCard from '@/components/ServiceCard';

const Services = () => {
  const eventServices = [
    {
      icon: Heart,
      title: 'Wedding Planning & Management',
      description: 'Complete wedding solutions from venue selection, decoration, catering coordination to guest management and entertainment.',
    },
    {
      icon: Cake,
      title: 'Birthday & Anniversary Events',
      description: 'Creative themes, stunning decorations, entertainment, and seamless execution for memorable celebrations.',
    },
    {
      icon: PartyPopper,
      title: 'Festival & Cultural Events',
      description: 'Grand celebrations for Diwali, Holi, Navratri, and other cultural festivities with traditional touches.',
    },
    {
      icon: Calendar,
      title: 'Corporate Events & Conferences',
      description: 'Professional management of seminars, product launches, team building events, and corporate galas.',
    },
    {
      icon: Star,
      title: 'Special Occasions',
      description: 'Baby showers, engagement ceremonies, farewell parties, and other milestone celebrations.',
    },
    {
      icon: Settings,
      title: 'Exhibition & Trade Shows',
      description: 'End-to-end management for exhibitions, brand activations, and promotional events.',
    },
  ];

  const staffingServices = [
    {
      icon: Users,
      title: 'Event Volunteers & Crew',
      description: 'Trained volunteers for guest registration, ushering, coordination, and on-ground support.',
    },
    {
      icon: Mic,
      title: 'Anchors & Emcees',
      description: 'Professional hosts and anchors for corporate events, weddings, and entertainment shows.',
    },
    {
      icon: Truck,
      title: 'Logistics & Production Staff',
      description: 'Porters, setup crew, and production assistants for smooth event operations.',
    },
    {
      icon: Shield,
      title: 'VIP Desk & Crowd Management',
      description: 'Professional teams for registration desks, VIP management, and crowd control.',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-secondary/50 to-background">
        <div className="container mx-auto px-4 text-center">
          <span className="text-primary font-semibold uppercase tracking-wider text-sm animate-fade-in-up">Our Services</span>
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mt-4 animate-fade-in-up stagger-1">
            Comprehensive Event <span className="text-gradient">Solutions</span>
          </h1>
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto animate-fade-in-up stagger-2">
            From intimate gatherings to grand celebrations, we provide end-to-end event management and staffing solutions tailored to your unique requirements.
          </p>
        </div>
      </section>

      {/* Event Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">Event Management</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-4">
              Events We Manage
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {eventServices.map((service, index) => (
              <ServiceCard
                key={service.title}
                icon={service.icon}
                title={service.title}
                description={service.description}
                delay={index * 100}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Staffing Services */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">Manpower Solutions</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-4">
              Staffing & Manpower Services
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Get trained and reliable staff for seamless event execution. Our team includes volunteers, coordinators, anchors, and production professionals.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {staffingServices.map((service, index) => (
              <ServiceCard
                key={service.title}
                icon={service.icon}
                title={service.title}
                description={service.description}
                delay={index * 100}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-hero rounded-3xl p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-0 right-0 w-64 h-64 bg-background rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-background rounded-full blur-3xl" />
            </div>
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-4">
                Need Custom Event Solutions?
              </h2>
              <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
                Every event is unique. Contact us to discuss your specific requirements and let us craft a personalized solution for you.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild size="lg" variant="secondary" className="shadow-lg">
                  <Link to="/book-event">Book Your Event</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                  <Link to="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;

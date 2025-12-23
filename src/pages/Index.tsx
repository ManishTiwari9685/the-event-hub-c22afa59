import { Link } from 'react-router-dom';
import { ArrowRight, Heart, Cake, PartyPopper, Calendar, Users, Star, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import StatCard from '@/components/StatCard';
import ServiceCard from '@/components/ServiceCard';
import heroImage from '@/assets/hero-event.jpg';
import teamImage from '@/assets/team-volunteers.jpg';

const Index = () => {
  const services = [
    {
      icon: Heart,
      title: 'Wedding Events',
      description: 'Transform your special day into an extraordinary celebration with our comprehensive wedding planning and execution services.',
    },
    {
      icon: Cake,
      title: 'Birthday Celebrations',
      description: 'Create magical birthday moments for all ages with our creative themes, decorations, and entertainment solutions.',
    },
    {
      icon: PartyPopper,
      title: 'Festival Events',
      description: 'Celebrate cultural festivities with grandeur. From Diwali to Holi, we manage it all with perfection.',
    },
    {
      icon: Calendar,
      title: 'Corporate Events',
      description: 'Professional event management for conferences, seminars, product launches, and corporate gatherings.',
    },
    {
      icon: Users,
      title: 'Staffing Solutions',
      description: 'Get trained volunteers, coordinators, anchors, and production staff for seamless event execution.',
    },
    {
      icon: Star,
      title: 'Occasion Management',
      description: 'From anniversaries to baby showers, we handle every special occasion with care and creativity.',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-sm font-medium text-primary">Your Premier Event Partner</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight text-foreground">
              Crafting <span className="text-gradient">Unforgettable</span> Event Experiences
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-lg">
              From weddings to corporate galas, we transform your vision into reality. Get trained staff, seamless coordination, and exceptional execution.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-gradient-hero hover:opacity-90 shadow-soft animate-pulse-glow">
                <Link to="/book-event">
                  Book Your Event <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/5">
                <Link to="/services">
                  Explore Services
                </Link>
              </Button>
            </div>
          </div>
          
          <div className="relative animate-fade-in-right">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={heroImage} 
                alt="Beautiful wedding event managed by The Event Hub" 
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 to-transparent" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-card p-6 rounded-xl shadow-card animate-float">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-hero rounded-full flex items-center justify-center">
                  <Star className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <div className="text-2xl font-heading font-bold text-foreground">500+</div>
                  <div className="text-sm text-muted-foreground">Events Delivered</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gradient-hero py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <StatCard number="500+" label="Events Managed" delay={0} />
            <StatCard number="2000+" label="Trained Volunteers" delay={100} />
            <StatCard number="100+" label="Venues Covered" delay={200} />
            <StatCard number="50+" label="Trusted Clients" delay={300} />
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img 
                src={teamImage} 
                alt="The Event Hub professional team" 
                className="rounded-2xl shadow-card w-full"
              />
              <div className="absolute -bottom-8 -right-8 bg-gradient-hero p-6 rounded-xl text-primary-foreground hidden md:block">
                <div className="text-3xl font-heading font-bold">5+</div>
                <div className="text-sm">Years of Excellence</div>
              </div>
            </div>
            
            <div className="space-y-6">
              <span className="text-primary font-semibold uppercase tracking-wider text-sm">Welcome to The Event Hub</span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
                Your Trusted Partner in Creating Memorable Events
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                At The Event Hub, we provide trained and reliable event staff for all types of events — from corporate conferences and weddings to college fests and public gatherings. We're more than a staffing agency — we're your event manpower partners, bringing professionalism, energy, and value to every event.
              </p>
              
              <div className="grid grid-cols-3 gap-6 py-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <Star className="w-8 h-8 text-primary" />
                  </div>
                  <div className="font-semibold text-foreground">Experience</div>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <Heart className="w-8 h-8 text-primary" />
                  </div>
                  <div className="font-semibold text-foreground">Excellence</div>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <PartyPopper className="w-8 h-8 text-primary" />
                  </div>
                  <div className="font-semibold text-foreground">Innovation</div>
                </div>
              </div>
              
              <Button asChild className="bg-gradient-hero hover:opacity-90 shadow-soft">
                <Link to="/about">
                  Learn More About Us <ChevronRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">What We Offer</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-4">
              Comprehensive Event Solutions
            </h2>
            <p className="text-muted-foreground mt-4">
              From intimate gatherings to grand celebrations, we provide end-to-end event management services tailored to your unique requirements.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
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

      {/* CTA Section */}
      <section className="py-24 bg-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-background mb-6">
              Ready to Create Your Perfect Event?
            </h2>
            <p className="text-background/70 text-lg mb-8">
              Whether you're planning a dream wedding, a corporate conference, or looking for a career in event management – we're here to help.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-gradient-hero hover:opacity-90 shadow-glow">
                <Link to="/book-event">Book an Event</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-background/30 text-background hover:bg-background/10">
                <Link to="/careers">Join Our Team</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;

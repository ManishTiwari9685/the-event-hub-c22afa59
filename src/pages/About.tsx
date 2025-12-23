import { Phone, Mail, Instagram, Twitter, Linkedin, Star, Award, Target, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import founderImage from '@/assets/founder-portrait.jpg';
import teamImage from '@/assets/team-volunteers.jpg';

const About = () => {
  const values = [
    {
      icon: Star,
      title: 'Excellence',
      description: 'We strive for perfection in every event we manage, ensuring exceptional experiences.',
    },
    {
      icon: Heart,
      title: 'Passion',
      description: 'Our love for creating memorable moments drives us to go above and beyond.',
    },
    {
      icon: Target,
      title: 'Precision',
      description: 'Meticulous planning and flawless execution are at the core of our operations.',
    },
    {
      icon: Award,
      title: 'Integrity',
      description: 'We build trust through transparency, reliability, and professional ethics.',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-secondary/50 to-background">
        <div className="container mx-auto px-4 text-center">
          <span className="text-primary font-semibold uppercase tracking-wider text-sm animate-fade-in-up">About Us</span>
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mt-4 animate-fade-in-up stagger-1">
            The Story Behind <span className="text-gradient">The Event Hub</span>
          </h1>
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto animate-fade-in-up stagger-2">
            A passionate team dedicated to transforming your vision into extraordinary event experiences.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative animate-fade-in-left">
              <img 
                src={teamImage} 
                alt="The Event Hub Team" 
                className="rounded-2xl shadow-card w-full"
              />
              <div className="absolute -bottom-6 -right-6 bg-gradient-hero p-6 rounded-xl text-primary-foreground hidden md:block animate-float">
                <div className="text-3xl font-heading font-bold">500+</div>
                <div className="text-sm">Successful Events</div>
              </div>
            </div>
            
            <div className="space-y-6 animate-fade-in-right">
              <span className="text-primary font-semibold uppercase tracking-wider text-sm">Our Journey</span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
                Creating Exceptional Event Experiences
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Founded with a vision to revolutionize event management in India, The Event Hub has grown to become a trusted name in the industry. We specialize in managing all types of events — from dream weddings and birthday celebrations to corporate conferences and cultural festivals.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                What sets us apart is our commitment to providing trained, reliable staff and our attention to every detail. We don't just manage events; we create memorable experiences that last a lifetime.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our network of over 2000+ trained volunteers, coordinators, and event professionals ensures seamless execution across 100+ venues. Whether you're looking to book an event or build a career in event management, The Event Hub is your premier destination.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">Our Values</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-4">
              What Drives Us
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div 
                key={value.title}
                className="text-center p-8 bg-card rounded-2xl shadow-card animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 bg-gradient-hero rounded-xl flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-foreground mb-3">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">Leadership</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-4">
              Meet Our Founder
            </h2>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-card rounded-3xl shadow-card overflow-hidden">
              <div className="grid md:grid-cols-2">
                <div className="relative">
                  <img 
                    src={founderImage} 
                    alt="Manish Tiwari - Founder & CEO of The Event Hub" 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <h3 className="font-heading text-3xl font-bold text-foreground mb-2">Manish Tiwari</h3>
                  <p className="text-primary font-semibold mb-6">Founder & Chief Executive Officer</p>
                  
                  <p className="text-muted-foreground leading-relaxed mb-8">
                    A visionary leader with a passion for creating exceptional event experiences, Manish Tiwari founded The Event Hub with the mission to transform how events are managed in India. His dedication to excellence and innovation has established The Event Hub as a trusted name in the industry.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-primary" />
                      <a href="tel:7724965509" className="text-muted-foreground hover:text-primary transition-colors">
                        +91 7724965509
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="w-5 h-5 text-primary" />
                      <a href="mailto:manishtiwari9685@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                        manishtiwari9685@gmail.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex gap-4 mt-8">
                    <a
                      href="https://instagram.com/Being_Hindu_Manish_Tiwari"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      <Instagram className="w-5 h-5" />
                    </a>
                    <a
                      href="https://twitter.com/Manish_Tiwari_9685"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      <Twitter className="w-5 h-5" />
                    </a>
                    <a
                      href="https://linkedin.com/in/Manish_Tiwari_9685"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-background mb-6">
            Ready to Work With Us?
          </h2>
          <p className="text-background/70 max-w-xl mx-auto mb-8">
            Whether you're planning an event or looking to join our team, we'd love to hear from you.
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
      </section>

      <Footer />
    </div>
  );
};

export default About;

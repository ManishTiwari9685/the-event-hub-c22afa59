import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Instagram, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-hero rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-heading font-bold text-xl">E</span>
              </div>
              <span className="font-heading text-xl font-bold">
                THE EVENT <span className="text-primary">HUB</span>
              </span>
            </div>
            <p className="text-background/70 text-sm leading-relaxed">
              Your premier destination for exceptional event management services. We transform your vision into unforgettable experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'Services', 'About Us', 'Careers', 'Book Event', 'Contact'].map((link) => (
                <li key={link}>
                  <Link
                    to={`/${link === 'Home' ? '' : link.toLowerCase().replace(' ', '-')}`}
                    className="text-background/70 hover:text-primary transition-colors text-sm"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3">
              {['Wedding Events', 'Birthday Celebrations', 'Corporate Events', 'Festival Events', 'Staffing Solutions'].map((service) => (
                <li key={service}>
                  <span className="text-background/70 text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-6">Get In Touch</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary" />
                <a href="tel:7724965509" className="text-background/70 hover:text-primary transition-colors text-sm">
                  +91 7724965509
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary" />
                <a href="mailto:manishtiwari9685@gmail.com" className="text-background/70 hover:text-primary transition-colors text-sm">
                  manishtiwari9685@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-background/70 text-sm">India</span>
              </li>
            </ul>

            {/* Social Links */}
            <div className="flex gap-4 mt-6">
              <a
                href="https://instagram.com/Being_Hindu_Manish_Tiwari"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com/Manish_Tiwari_9685"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/Manish_Tiwari_9685"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/50 text-sm">
            © {new Date().getFullYear()} The Event Hub. All rights reserved.
          </p>
          <p className="text-background/50 text-sm">
            Managed by <span className="text-primary">Manish Tiwari</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

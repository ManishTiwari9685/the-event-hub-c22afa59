import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: number;
}

const ServiceCard = ({ icon: Icon, title, description, delay = 0 }: ServiceCardProps) => {
  return (
    <div
      className="group p-8 bg-card rounded-2xl shadow-card hover:shadow-glow transition-all duration-500 border border-border hover:border-primary/30 animate-fade-in-up"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="w-16 h-16 bg-gradient-hero rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
        <Icon className="w-8 h-8 text-primary-foreground" />
      </div>
      <h3 className="font-heading text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
        {title}
      </h3>
      <p className="text-muted-foreground leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default ServiceCard;

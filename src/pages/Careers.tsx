import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Users, Mic, Truck, Settings, Briefcase, GraduationCap, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { submitToGoogleSheets } from '@/lib/googleSheets';
import teamImage from '@/assets/team-volunteers.jpg';

const formSchema = z.object({
  fullName: z.string().min(2, 'Name must be at least 2 characters').max(100),
  email: z.string().email('Please enter a valid email'),
  phone: z.string().min(10, 'Please enter a valid phone number').max(15),
  position: z.string().min(1, 'Please select a position'),
  experience: z.string().min(1, 'Please select your experience level'),
  city: z.string().min(2, 'Please enter your city').max(50),
  about: z.string().min(10, 'Please tell us about yourself (min 10 characters)').max(500),
});

type FormValues = z.infer<typeof formSchema>;

const positions = [
  { value: 'volunteer', label: 'Event Volunteer', icon: Users },
  { value: 'coordinator', label: 'Event Coordinator', icon: Briefcase },
  { value: 'anchor', label: 'Anchor / Emcee', icon: Mic },
  { value: 'logistics', label: 'Logistics Staff', icon: Truck },
  { value: 'porter', label: 'Porter / Setup Crew', icon: Settings },
  { value: 'production', label: 'Production Assistant', icon: Settings },
  { value: 'event_manager', label: 'Event Manager', icon: Briefcase },
  { value: 'event_organiser', label: 'Event Organiser', icon: GraduationCap },
];

const experienceLevels = [
  { value: 'fresher', label: 'Fresher (0-6 months)' },
  { value: 'junior', label: 'Junior (6 months - 2 years)' },
  { value: 'mid', label: 'Mid Level (2-5 years)' },
  { value: 'senior', label: 'Senior (5+ years)' },
];

const Careers = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: '',
      email: '',
      phone: '',
      position: '',
      experience: '',
      city: '',
      about: '',
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    
    const success = await submitToGoogleSheets({
      formType: 'Career Application',
      timestamp: new Date().toISOString(),
      ...data,
    });

    if (success) {
      toast({
        title: 'Application Submitted Successfully!',
        description: 'Thank you for your interest. We will review your application and get back to you soon.',
      });
      form.reset();
    } else {
      toast({
        title: 'Submission Failed',
        description: 'There was an error submitting your application. Please try again.',
        variant: 'destructive',
      });
    }
    
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-secondary/50 to-background">
        <div className="container mx-auto px-4 text-center">
          <span className="text-primary font-semibold uppercase tracking-wider text-sm animate-fade-in-up">Careers</span>
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mt-4 animate-fade-in-up stagger-1">
            Build Your Career with <span className="text-gradient">The Event Hub</span>
          </h1>
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto animate-fade-in-up stagger-2">
            Join our dynamic team of event professionals. Whether you're a volunteer, coordinator, anchor, or logistics expert — we have opportunities for you.
          </p>
        </div>
      </section>

      {/* Positions */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold text-foreground">Open Positions</h2>
            <p className="text-muted-foreground mt-2">Explore opportunities across various roles</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {positions.map((position, index) => (
              <div 
                key={position.value}
                className="p-6 bg-card rounded-xl shadow-card text-center hover:shadow-glow transition-all duration-300 animate-fade-in-up cursor-pointer group"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="w-12 h-12 bg-gradient-hero rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <position.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-semibold text-foreground text-sm">{position.label}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-6">
              <span className="text-primary font-semibold uppercase tracking-wider text-sm">Join Our Team</span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
                Apply Now
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Take the first step towards an exciting career in event management. Fill out the application form and our team will get in touch with you.
              </p>
              
              <img 
                src={teamImage} 
                alt="The Event Hub Team" 
                className="rounded-2xl shadow-card w-full hidden lg:block"
              />
              
              <div className="bg-gradient-hero p-6 rounded-xl text-primary-foreground">
                <h3 className="font-heading text-xl font-semibold mb-3">Why Join The Event Hub?</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4" /> Work on exciting events across the city
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4" /> Flexible working hours
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4" /> Professional training and growth
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4" /> Competitive compensation
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="bg-card p-8 rounded-2xl shadow-card">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="fullName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name *</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter your full name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email *</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="your@email.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone Number *</FormLabel>
                          <FormControl>
                            <Input placeholder="+91 XXXXXXXXXX" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="position"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Position Applying For *</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select position" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {positions.map((pos) => (
                                <SelectItem key={pos.value} value={pos.value}>
                                  {pos.label}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="experience"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Experience Level *</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select experience" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {experienceLevels.map((exp) => (
                                <SelectItem key={exp.value} value={exp.value}>
                                  {exp.label}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="city"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>City *</FormLabel>
                        <FormControl>
                          <Input placeholder="Your current city" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="about"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Tell Us About Yourself *</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Share your experience, skills, and why you want to join The Event Hub..."
                            className="min-h-[120px]"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-gradient-hero hover:opacity-90 shadow-soft"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit Application'}
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Careers;

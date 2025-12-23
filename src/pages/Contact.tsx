import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Phone, Mail, MapPin, Instagram, Twitter, Linkedin, MessageCircle, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { submitToGoogleSheets } from '@/lib/googleSheets';

const formSchema = z.object({
  fullName: z.string().min(2, 'Name must be at least 2 characters').max(100),
  email: z.string().email('Please enter a valid email'),
  phone: z.string().min(10, 'Please enter a valid phone number').max(15),
  subject: z.string().min(1, 'Please select a subject'),
  message: z.string().min(10, 'Message must be at least 10 characters').max(1000),
});

type FormValues = z.infer<typeof formSchema>;

const subjects = [
  'Event Booking Inquiry',
  'Career Opportunity',
  'Staffing Requirements',
  'Partnership Proposal',
  'Feedback',
  'Other',
];

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    
    const success = await submitToGoogleSheets({
      formType: 'Contact Form',
      timestamp: new Date().toISOString(),
      ...data,
    });

    if (success) {
      toast({
        title: 'Message Sent Successfully!',
        description: 'Thank you for contacting us. We will get back to you soon.',
      });
      form.reset();
    } else {
      toast({
        title: 'Submission Failed',
        description: 'There was an error sending your message. Please try again.',
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
          <span className="text-primary font-semibold uppercase tracking-wider text-sm animate-fade-in-up">Contact Us</span>
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mt-4 animate-fade-in-up stagger-1">
            Let's Start a <span className="text-gradient">Conversation</span>
          </h1>
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto animate-fade-in-up stagger-2">
            Have questions or ready to plan your next event? We're here to help. Reach out to us through any of the channels below.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-heading font-bold text-foreground mb-6">Get in Touch</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Whether you're planning an event, looking for career opportunities, or have a business proposal, we'd love to hear from you.
                </p>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4 p-6 bg-card rounded-xl shadow-card">
                  <div className="w-12 h-12 bg-gradient-hero rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Phone / WhatsApp</h3>
                    <a href="tel:7724965509" className="text-muted-foreground hover:text-primary transition-colors">
                      +91 7724965509
                    </a>
                    <p className="text-sm text-muted-foreground mt-1">Available 9 AM - 8 PM IST</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-6 bg-card rounded-xl shadow-card">
                  <div className="w-12 h-12 bg-gradient-hero rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Email</h3>
                    <a href="mailto:manishtiwari9685@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                      manishtiwari9685@gmail.com
                    </a>
                    <p className="text-sm text-muted-foreground mt-1">We respond within 24 hours</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-6 bg-card rounded-xl shadow-card">
                  <div className="w-12 h-12 bg-gradient-hero rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Location</h3>
                    <p className="text-muted-foreground">India</p>
                    <p className="text-sm text-muted-foreground mt-1">Serving events nationwide</p>
                  </div>
                </div>
              </div>
              
              {/* Social Links */}
              <div className="pt-6">
                <h3 className="font-semibold text-foreground mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  <a
                    href="https://instagram.com/Being_Hindu_Manish_Tiwari"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-xl bg-card shadow-card flex items-center justify-center hover:bg-gradient-hero hover:text-primary-foreground transition-all duration-300 group"
                  >
                    <Instagram className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  </a>
                  <a
                    href="https://twitter.com/Manish_Tiwari_9685"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-xl bg-card shadow-card flex items-center justify-center hover:bg-gradient-hero hover:text-primary-foreground transition-all duration-300 group"
                  >
                    <Twitter className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  </a>
                  <a
                    href="https://linkedin.com/in/Manish_Tiwari_9685"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-xl bg-card shadow-card flex items-center justify-center hover:bg-gradient-hero hover:text-primary-foreground transition-all duration-300 group"
                  >
                    <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  </a>
                  <a
                    href="https://wa.me/917724965509"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-xl bg-card shadow-card flex items-center justify-center hover:bg-gradient-hero hover:text-primary-foreground transition-all duration-300 group"
                  >
                    <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="bg-card p-8 md:p-10 rounded-2xl shadow-card">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 bg-gradient-hero rounded-lg flex items-center justify-center">
                  <Send className="w-5 h-5 text-primary-foreground" />
                </div>
                <h2 className="text-2xl font-heading font-bold text-foreground">Send us a Message</h2>
              </div>
              
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
                  
                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Subject *</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select a subject" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {subjects.map((subject) => (
                              <SelectItem key={subject} value={subject.toLowerCase().replace(/\s+/g, '-')}>
                                {subject}
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
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message *</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Tell us how we can help you..."
                            className="min-h-[150px]"
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
                    {isSubmitting ? 'Sending...' : 'Send Message'}
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

export default Contact;

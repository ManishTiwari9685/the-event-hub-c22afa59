import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Briefcase, Users, Mic, Truck, Settings, Plus, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage, FormDescription } from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { submitToGoogleSheets } from '@/lib/googleSheets';

const formSchema = z.object({
  companyName: z.string().min(2, 'Company name must be at least 2 characters').max(100),
  contactPerson: z.string().min(2, 'Contact person name is required').max(100),
  email: z.string().email('Please enter a valid email'),
  phone: z.string().min(10, 'Please enter a valid phone number').max(15),
  eventName: z.string().min(2, 'Event name is required').max(200),
  eventDate: z.string().min(1, 'Please select an event date'),
  eventLocation: z.string().min(2, 'Event location is required').max(200),
  staffTypes: z.array(z.string()).min(1, 'Please select at least one staff type'),
  volunteerCount: z.string(),
  anchorCount: z.string(),
  logisticsCount: z.string(),
  porterCount: z.string(),
  productionCount: z.string(),
  additionalRequirements: z.string().max(1000),
});

type FormValues = z.infer<typeof formSchema>;

const staffTypes = [
  { id: 'volunteers', label: 'Event Volunteers', icon: Users },
  { id: 'anchors', label: 'Anchors / Emcees', icon: Mic },
  { id: 'logistics', label: 'Logistics Staff', icon: Truck },
  { id: 'porters', label: 'Porters / Setup Crew', icon: Settings },
  { id: 'production', label: 'Production Team', icon: Briefcase },
];

const PostRequirements = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      companyName: '',
      contactPerson: '',
      email: '',
      phone: '',
      eventName: '',
      eventDate: '',
      eventLocation: '',
      staffTypes: [],
      volunteerCount: '0',
      anchorCount: '0',
      logisticsCount: '0',
      porterCount: '0',
      productionCount: '0',
      additionalRequirements: '',
    },
  });

  const selectedStaffTypes = form.watch('staffTypes');

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    
    const success = await submitToGoogleSheets({
      formType: 'Manpower Requirement',
      timestamp: new Date().toISOString(),
      ...data,
      staffTypes: data.staffTypes.join(', '),
    });

    if (success) {
      toast({
        title: 'Requirement Posted Successfully!',
        description: 'Our team will review your requirements and connect you with suitable candidates.',
      });
      form.reset();
    } else {
      toast({
        title: 'Submission Failed',
        description: 'There was an error posting your requirements. Please try again.',
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
          <span className="text-primary font-semibold uppercase tracking-wider text-sm animate-fade-in-up">For Event Organisers</span>
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mt-4 animate-fade-in-up stagger-1">
            Post Your <span className="text-gradient">Manpower Requirements</span>
          </h1>
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto animate-fade-in-up stagger-2">
            Need trained staff for your event? Post your requirements and let us connect you with verified volunteers, coordinators, anchors, and production professionals.
          </p>
        </div>
      </section>

      {/* Staff Types Overview */}
      <section className="py-12 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {staffTypes.map((type, index) => (
              <div 
                key={type.id}
                className="p-4 bg-card rounded-xl shadow-card text-center animate-fade-in-up"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="w-12 h-12 bg-gradient-hero rounded-lg flex items-center justify-center mx-auto mb-3">
                  <type.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <span className="text-sm font-medium text-foreground">{type.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirement Form */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-card p-8 md:p-12 rounded-2xl shadow-card">
              <div className="text-center mb-10">
                <h2 className="text-2xl font-heading font-bold text-foreground">Manpower Requirement Form</h2>
                <p className="text-muted-foreground mt-2">Fill in your event details and staffing needs</p>
              </div>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                  {/* Company Details */}
                  <div className="space-y-4">
                    <h3 className="font-heading text-lg font-semibold text-foreground flex items-center gap-2">
                      <Briefcase className="w-5 h-5 text-primary" /> Organisation Details
                    </h3>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="companyName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Company / Organisation Name *</FormLabel>
                            <FormControl>
                              <Input placeholder="Enter company name" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="contactPerson"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Contact Person *</FormLabel>
                            <FormControl>
                              <Input placeholder="Enter contact person name" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email *</FormLabel>
                            <FormControl>
                              <Input type="email" placeholder="company@email.com" {...field} />
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
                  </div>

                  {/* Event Details */}
                  <div className="space-y-4">
                    <h3 className="font-heading text-lg font-semibold text-foreground flex items-center gap-2">
                      <Plus className="w-5 h-5 text-primary" /> Event Details
                    </h3>
                    
                    <FormField
                      control={form.control}
                      name="eventName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Event Name *</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter event name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="eventDate"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Event Date *</FormLabel>
                            <FormControl>
                              <Input type="date" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="eventLocation"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Event Location *</FormLabel>
                            <FormControl>
                              <Input placeholder="Enter venue and city" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>

                  {/* Staff Requirements */}
                  <div className="space-y-4">
                    <h3 className="font-heading text-lg font-semibold text-foreground flex items-center gap-2">
                      <Users className="w-5 h-5 text-primary" /> Staff Requirements
                    </h3>
                    
                    <FormField
                      control={form.control}
                      name="staffTypes"
                      render={() => (
                        <FormItem>
                          <FormLabel>Select Staff Types Needed *</FormLabel>
                          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-2">
                            {staffTypes.map((type) => (
                              <FormField
                                key={type.id}
                                control={form.control}
                                name="staffTypes"
                                render={({ field }) => (
                                  <FormItem className="flex items-center space-x-3 space-y-0">
                                    <FormControl>
                                      <Checkbox
                                        checked={field.value?.includes(type.id)}
                                        onCheckedChange={(checked) => {
                                          return checked
                                            ? field.onChange([...field.value, type.id])
                                            : field.onChange(field.value?.filter((value) => value !== type.id));
                                        }}
                                      />
                                    </FormControl>
                                    <FormLabel className="font-normal cursor-pointer">{type.label}</FormLabel>
                                  </FormItem>
                                )}
                              />
                            ))}
                          </div>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    {/* Conditional Count Inputs */}
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
                      {selectedStaffTypes.includes('volunteers') && (
                        <FormField
                          control={form.control}
                          name="volunteerCount"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Volunteers Count</FormLabel>
                              <FormControl>
                                <Input type="number" min="0" placeholder="0" {...field} />
                              </FormControl>
                            </FormItem>
                          )}
                        />
                      )}
                      
                      {selectedStaffTypes.includes('anchors') && (
                        <FormField
                          control={form.control}
                          name="anchorCount"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Anchors Count</FormLabel>
                              <FormControl>
                                <Input type="number" min="0" placeholder="0" {...field} />
                              </FormControl>
                            </FormItem>
                          )}
                        />
                      )}
                      
                      {selectedStaffTypes.includes('logistics') && (
                        <FormField
                          control={form.control}
                          name="logisticsCount"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Logistics Staff Count</FormLabel>
                              <FormControl>
                                <Input type="number" min="0" placeholder="0" {...field} />
                              </FormControl>
                            </FormItem>
                          )}
                        />
                      )}
                      
                      {selectedStaffTypes.includes('porters') && (
                        <FormField
                          control={form.control}
                          name="porterCount"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Porters Count</FormLabel>
                              <FormControl>
                                <Input type="number" min="0" placeholder="0" {...field} />
                              </FormControl>
                            </FormItem>
                          )}
                        />
                      )}
                      
                      {selectedStaffTypes.includes('production') && (
                        <FormField
                          control={form.control}
                          name="productionCount"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Production Staff Count</FormLabel>
                              <FormControl>
                                <Input type="number" min="0" placeholder="0" {...field} />
                              </FormControl>
                            </FormItem>
                          )}
                        />
                      )}
                    </div>
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="additionalRequirements"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Additional Requirements</FormLabel>
                        <FormDescription>
                          Specify any special skills, dress code, language requirements, timing details, etc.
                        </FormDescription>
                        <FormControl>
                          <Textarea 
                            placeholder="Describe any additional requirements for the staff..."
                            className="min-h-[120px]"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <div className="bg-secondary/50 p-4 rounded-lg flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-muted-foreground">
                      Our team will review your requirements and connect you with verified and trained candidates within 24-48 hours.
                    </p>
                  </div>
                  
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-gradient-hero hover:opacity-90 shadow-soft"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Posting...' : 'Post Requirement'}
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

export default PostRequirements;

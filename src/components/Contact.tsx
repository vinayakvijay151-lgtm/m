import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    title: "Call Us",
    content: "+1 (555) 123-4567",
    description: "Mon-Fri 8AM-6PM"
  },
  {
    icon: Mail,
    title: "Email Us",
    content: "info@signagepro.com",
    description: "24/7 Support"
  },
  {
    icon: MapPin,
    title: "Visit Us",
    content: "123 Business Ave, Suite 100",
    description: "City, State 12345"
  },
  {
    icon: Clock,
    title: "Business Hours",
    content: "Mon-Fri: 8AM-6PM",
    description: "Sat: 9AM-4PM"
  }
];

export function Contact() {
  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl mb-6">Get In Touch</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to transform your brand's visual presence? Let's discuss your 
            signage needs and create something extraordinary together.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <Card className="p-8">
              <CardHeader className="p-0 mb-8">
                <CardTitle className="text-2xl">Send us a message</CardTitle>
              </CardHeader>
              
              <CardContent className="p-0">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm">First Name *</label>
                      <Input placeholder="John" className="h-12" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm">Last Name *</label>
                      <Input placeholder="Doe" className="h-12" />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm">Email *</label>
                      <Input type="email" placeholder="john@company.com" className="h-12" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm">Phone</label>
                      <Input type="tel" placeholder="+1 (555) 123-4567" className="h-12" />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm">Company</label>
                      <Input placeholder="Your Company" className="h-12" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm">Project Type</label>
                      <Select>
                        <SelectTrigger className="h-12">
                          <SelectValue placeholder="Select service" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="digital">Digital Displays</SelectItem>
                          <SelectItem value="storefront">Storefront Signage</SelectItem>
                          <SelectItem value="neon">Neon & LED</SelectItem>
                          <SelectItem value="custom">Custom Graphics</SelectItem>
                          <SelectItem value="consultation">Consultation</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm">Project Details *</label>
                    <Textarea 
                      placeholder="Tell us about your project, timeline, and any specific requirements..."
                      className="min-h-32 resize-none"
                    />
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button size="lg" className="flex-1">
                      Send Message
                    </Button>
                    <Button variant="outline" size="lg" className="flex-1">
                      Schedule Consultation
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
          
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-lg mb-1">{info.title}</h4>
                      <p className="text-foreground mb-1">{info.content}</p>
                      <p className="text-sm text-muted-foreground">{info.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
            
            <Card className="p-6 bg-primary text-primary-foreground">
              <CardContent className="p-0 text-center">
                <h4 className="text-xl mb-2">Emergency Service</h4>
                <p className="mb-4 opacity-90">
                  Need urgent signage repair or installation? We offer 24/7 emergency services.
                </p>
                <Button variant="secondary" size="lg" className="w-full">
                  Call Emergency Line
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
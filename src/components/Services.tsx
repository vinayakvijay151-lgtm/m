import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Monitor, Building, Zap, Palette } from "lucide-react";

const services = [
  {
    icon: Monitor,
    title: "Digital Displays",
    description: "State-of-the-art LED screens and digital billboards for maximum impact",
    image: "https://images.unsplash.com/photo-1652765436113-3f856919ff53?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZWQlMjBkaXNwbGF5JTIwc2NyZWVufGVufDF8fHx8MTc1ODg1NTI5MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    features: ["4K Resolution", "Weather Resistant", "Remote Management", "Energy Efficient"]
  },
  {
    icon: Building,
    title: "Storefront Signage",
    description: "Eye-catching storefront signs that drive foot traffic and brand recognition",
    image: "https://images.unsplash.com/photo-1642393160137-c678f6d74044?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdG9yZWZyb250JTIwYnVzaW5lc3MlMjBzaWdufGVufDF8fHx8MTc1ODg1NTI5MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    features: ["Custom Design", "Durable Materials", "LED Backlighting", "Permit Assistance"]
  },
  {
    icon: Zap,
    title: "Neon & LED",
    description: "Classic neon aesthetics with modern LED efficiency and reliability",
    image: "https://images.unsplash.com/photo-1729442853594-6aa539e44feb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBidWlsZGluZyUyMHNpZ25hZ2UlMjBuZW9ufGVufDF8fHx8MTc1ODg1NTI5MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    features: ["RGB Color Control", "Dimming Options", "Long Lifespan", "Low Maintenance"]
  },
  {
    icon: Palette,
    title: "Custom Graphics",
    description: "Bespoke design services from concept to completion for unique brand identity",
    image: "https://images.unsplash.com/photo-1728201247110-b22253a691cc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwYmlsbGJvYXJkJTIwYWR2ZXJ0aXNpbmd8ZW58MXx8fHwxNzU4ODU1MjkwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    features: ["Brand Consultation", "3D Mockups", "Material Selection", "Installation"]
  }
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl mb-6">Our Services</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive signage solutions tailored to your business needs, 
            from design to installation and maintenance.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="relative overflow-hidden rounded-t-lg">
                <ImageWithFallback
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 left-4 w-12 h-12 bg-background rounded-lg flex items-center justify-center">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <CardDescription className="text-base">
                  {service.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Award, Users, Clock, Zap } from "lucide-react";

const stats = [
  { icon: Award, label: "Years Experience", value: "15+" },
  { icon: Users, label: "Happy Clients", value: "500+" },
  { icon: Clock, label: "Projects Completed", value: "1000+" },
  { icon: Zap, label: "Cities Served", value: "25+" }
];

const values = [
  {
    title: "Innovation First",
    description: "We stay ahead of technology trends to deliver cutting-edge signage solutions that set your brand apart."
  },
  {
    title: "Quality Craftsmanship",
    description: "Every project is executed with meticulous attention to detail and the highest quality materials."
  },
  {
    title: "Customer Focus",
    description: "Your success is our priority. We work closely with you from concept to completion and beyond."
  },
  {
    title: "Sustainable Practices",
    description: "Environmentally conscious solutions that reduce energy consumption and environmental impact."
  }
];

export function About() {
  return (
    <section id="about" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h2 className="text-4xl lg:text-5xl mb-6">
              Crafting Visual Excellence Since 2009
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              SignagePro has been at the forefront of innovative signage solutions, 
              helping businesses across the country establish powerful visual presence 
              and drive meaningful customer engagement.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              Our team of designers, engineers, and installation specialists brings 
              decades of combined experience to every project, ensuring exceptional 
              results that exceed expectations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg">
                Learn More About Us
              </Button>
              <Button variant="outline" size="lg">
                Meet Our Team
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1758518729685-f88df7890776?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB0ZWFtJTIwbWVldGluZ3xlbnwxfHx8fDE3NTg4NTM1NjN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Professional team meeting"
                className="w-full h-96 object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary rounded-2xl flex items-center justify-center">
              <div className="text-center text-primary-foreground">
                <div className="text-2xl">15+</div>
                <div className="text-sm">Years</div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center p-8 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="text-3xl mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div>
          <div className="text-center mb-12">
            <h3 className="text-3xl mb-4">Our Values</h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These core principles guide everything we do and ensure we deliver 
              exceptional results for every client.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-3 h-3 bg-primary rounded-full mx-auto mb-4"></div>
                <h4 className="text-xl mb-3">{value.title}</h4>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
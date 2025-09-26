import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ExternalLink, ArrowRight } from "lucide-react";

const portfolioItems = [
  {
    title: "Downtown Digital Billboard",
    category: "Digital Display",
    description: "High-impact advertising display in prime downtown location",
    image: "https://images.unsplash.com/photo-1728201247110-b22253a691cc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwYmlsbGJvYXJkJTIwYWR2ZXJ0aXNpbmd8ZW58MXx8fHwxNzU4ODU1MjkwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    stats: ["50ft² Display", "4K Resolution", "24/7 Operation"]
  },
  {
    title: "Boutique Store Front",
    category: "Storefront",
    description: "Elegant illuminated signage for luxury retail establishment",
    image: "https://images.unsplash.com/photo-1642393160137-c678f6d74044?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdG9yZWZyb250JTIwYnVzaW5lc3MlMjBzaWdufGVufDF8fHx8MTc1ODg1NTI5MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    stats: ["LED Backlighting", "Weatherproof", "Custom Typography"]
  },
  {
    title: "Corporate Office Tower",
    category: "Building Signage",
    description: "Multi-level illuminated corporate identity installation",
    image: "https://images.unsplash.com/photo-1729442853594-6aa539e44feb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBidWlsZGluZyUyMHNpZ25hZ2UlMjBuZW9ufGVufDF8fHx8MTc1ODg1NTI5MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    stats: ["30ft Height", "Neon Aesthetic", "Smart Controls"]
  },
  {
    title: "Tech Startup Hub",
    category: "Interactive Display",
    description: "Modern LED wall installation for dynamic content display",
    image: "https://images.unsplash.com/photo-1652765436113-3f856919ff53?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZWQlMjBkaXNwbGF5JTIwc2NyZWVufGVufDF8fHx8MTc1ODg1NTI5MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    stats: ["Touch Interface", "Real-time Data", "Modular Design"]
  },
  {
    title: "Restaurant Chain Rebrand",
    category: "Brand Identity",
    description: "Complete signage overhaul for 15 location restaurant chain",
    image: "https://images.unsplash.com/photo-1729442853594-6aa539e44feb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBidWlsZGluZyUyMHNpZ25hZ2UlMjBuZW9ufGVufDF8fHx8MTc1ODg1NTI5MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    stats: ["15 Locations", "Brand Consistency", "Phase Rollout"]
  },
  {
    title: "Shopping Mall Directory",
    category: "Wayfinding",
    description: "Interactive digital directory system with real-time updates",
    image: "https://images.unsplash.com/photo-1652765436113-3f856919ff53?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZWQlMjBkaXNwbGF5JTIwc2NyZWVufGVufDF8fHx8MTc1ODg1NTI5MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    stats: ["Multi-language", "CMS Integration", "ADA Compliant"]
  }
];

export function Portfolio() {
  return (
    <section id="portfolio" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl mb-6">Our Work</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our portfolio of successful projects that have transformed 
            brands and elevated business presence across various industries.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {portfolioItems.map((item, index) => (
            <Card key={index} className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="relative overflow-hidden">
                <ImageWithFallback
                  src={item.image}
                  alt={item.title}
                  className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-10 h-10 bg-background/90 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <ExternalLink className="w-5 h-5 text-primary" />
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex flex-wrap gap-2">
                    {item.stats.map((stat, statIndex) => (
                      <span key={statIndex} className="px-2 py-1 bg-background/90 backdrop-blur-sm rounded text-xs">
                        {stat}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-primary bg-primary/10 px-3 py-1 rounded-full">
                    {item.category}
                  </span>
                </div>
                <h3 className="text-xl mb-2 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-muted-foreground">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <Button size="lg" variant="outline" className="group">
            View Full Portfolio
            <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
}
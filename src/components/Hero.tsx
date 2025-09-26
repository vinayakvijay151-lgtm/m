import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1729442853594-6aa539e44feb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBidWlsZGluZyUyMHNpZ25hZ2UlMjBuZW9ufGVufDF8fHx8MTc1ODg1NTI5MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Modern building with signage"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-background/40"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-6 text-center lg:text-left">
        <div className="max-w-4xl">
          <h1 className="text-5xl lg:text-7xl mb-6 leading-tight">
            Illuminate Your
            <span className="block text-primary">Brand Story</span>
          </h1>
          <p className="text-xl lg:text-2xl text-muted-foreground mb-8 max-w-2xl">
            From concept to installation, we create premium signage solutions that 
            captivate audiences and drive business growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button size="lg" className="px-8 py-6">
              Start Your Project
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-6">
              View Our Work
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
}
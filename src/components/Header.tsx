import { Button } from "./ui/button";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground">S</span>
            </div>
            <div>
              <div className="font-semibold">SignagePro</div>
              <div className="text-xs text-muted-foreground">Visual Solutions</div>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="hover:text-primary transition-colors">Home</a>
            <a href="#services" className="hover:text-primary transition-colors">Services</a>
            <a href="#portfolio" className="hover:text-primary transition-colors">Portfolio</a>
            <a href="#about" className="hover:text-primary transition-colors">About</a>
            <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
          </nav>
          
          <div className="flex items-center space-x-4">
            <Button variant="outline" className="hidden sm:inline-flex">
              Get Quote
            </Button>
            <Button>
              Call Now
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
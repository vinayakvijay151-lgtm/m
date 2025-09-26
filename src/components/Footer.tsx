import { Separator } from "./ui/separator";
import { Facebook, Twitter, Instagram, Linkedin, Phone, Mail, MapPin } from "lucide-react";

const services = [
  "Digital Displays",
  "Storefront Signage", 
  "Neon & LED",
  "Custom Graphics",
  "Installation",
  "Maintenance"
];

const company = [
  "About Us",
  "Our Team",
  "Careers",
  "News & Updates",
  "Case Studies",
  "Contact"
];

const resources = [
  "Design Gallery",
  "Material Guide",
  "Installation Process",
  "Maintenance Tips",
  "FAQ",
  "Support"
];

export function Footer() {
  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground">S</span>
              </div>
              <div>
                <div className="font-semibold">SignagePro</div>
                <div className="text-xs text-muted-foreground">Visual Solutions</div>
              </div>
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Creating exceptional signage solutions that elevate brands and 
              drive business success across the nation.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer">
                <Facebook className="w-5 h-5" />
              </div>
              <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer">
                <Twitter className="w-5 h-5" />
              </div>
              <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer">
                <Instagram className="w-5 h-5" />
              </div>
              <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer">
                <Linkedin className="w-5 h-5" />
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg mb-6">Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg mb-6">Company</h4>
            <ul className="space-y-3">
              {company.map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg mb-6">Resources</h4>
            <ul className="space-y-3">
              {resources.map((resource, index) => (
                <li key={index}>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    {resource}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <Separator className="my-12" />
        
        <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Phone className="w-4 h-4" />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Mail className="w-4 h-4" />
              <span>info@signagepro.com</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <MapPin className="w-4 h-4" />
              <span>123 Business Ave, City, State</span>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8 text-sm text-muted-foreground">
            <span>© 2025 SignagePro. All rights reserved.</span>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
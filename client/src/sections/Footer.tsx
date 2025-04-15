import Logo from "@/components/Logo";
import { navLinks, socialLinks } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-background py-12 border-t border-white/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Logo className="mb-4" />
            <p className="text-muted-foreground mb-4 max-w-xs">
              Engineering Intelligence. Empowering Solutions through innovation and expertise.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label={link.name}
                >
                  <i className={`fab fa-${link.icon}`}></i>
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4 text-foreground">Quick Links</h4>
            <ul className="space-y-2">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4 text-foreground">Contact</h4>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <i className="fas fa-envelope text-primary/70"></i>
                <span className="text-muted-foreground">contact@abdelrahmanemad.com</span>
              </li>
              <li className="flex items-center gap-2">
                <i className="fas fa-map-marker-alt text-primary/70"></i>
                <span className="text-muted-foreground">UAE</span>
              </li>
              <li className="flex items-center gap-2">
                <i className="fas fa-clock text-primary/70"></i>
                <span className="text-muted-foreground">Available: 9AM - 6PM (GMT+4)</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/5 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">© {new Date().getFullYear()} Abdelrahman Emad. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

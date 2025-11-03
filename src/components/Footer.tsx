import { Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">N</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg">Newton Coaching</span>
                <span className="text-xs text-muted-foreground">Building Bright Futures</span>
              </div>
            </div>
            <p className="text-muted-foreground text-sm">
              Empowering students with quality education and expert mentorship.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-muted-foreground hover:text-primary transition-smooth text-sm">
                  Home
                </a>
              </li>
              <li>
                <a href="/courses" className="text-muted-foreground hover:text-primary transition-smooth text-sm">
                  Our Courses
                </a>
              </li>
              <li>
                <a href="/admission" className="text-muted-foreground hover:text-primary transition-smooth text-sm">
                  Admission
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="text-primary mt-1 flex-shrink-0" size={16} />
                <span className="text-muted-foreground text-sm">
                  01/B, Ground Floor, Bldg No.2, RoopRajat Residency, Boisar, Maharashtra 401501
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="text-primary flex-shrink-0" size={16} />
                <span className="text-muted-foreground text-sm">7385759209 / 7020554202</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="text-primary flex-shrink-0" size={16} />
                <span className="text-muted-foreground text-sm">vikrampbsingh1996@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Newton Coaching Classes. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

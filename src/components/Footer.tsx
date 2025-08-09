import { Phone, Mail, MapPin, MessageCircle, Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const openWhatsApp = () => {
    window.open("https://wa.me/919819313251?text=Hello,%20I'd%20like%20to%20consult%20with%20CA%20Deepesh%20Sawant", "_blank");
  };

  return (
    <footer className="bg-primary text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-primary font-bold text-lg">CA</span>
              </div>
              <div>
                <h3 className="font-heading font-bold text-lg">CA Deepesh Sawant</h3>
                <p className="text-white/80 text-sm">& Associates</p>
              </div>
            </div>
            <p className="text-white/80 leading-relaxed">
              Your trusted chartered accountants providing comprehensive financial, tax, and business solutions across India and globally.
            </p>
            <div className="flex space-x-4">
              <button 
                onClick={openWhatsApp}
                className="w-10 h-10 bg-white/10 hover:bg-green-500 rounded-lg flex items-center justify-center transition-colors duration-300"
                aria-label="WhatsApp"
              >
                <MessageCircle size={20} />
              </button>
              <a 
                href="https://linkedin.com/in/deepesh-sawant"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => {
                    const element = document.getElementById("about");
                    if (element) element.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="text-white/80 hover:text-accent transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    const element = document.getElementById("services");
                    if (element) element.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="text-white/80 hover:text-accent transition-colors"
                >
                  Our Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    const element = document.getElementById("industries");
                    if (element) element.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="text-white/80 hover:text-accent transition-colors"
                >
                  Industries
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    const element = document.getElementById("contact");
                    if (element) element.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="text-white/80 hover:text-accent transition-colors"
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-6">Our Services</h4>
            <ul className="space-y-3 text-white/80">
              <li>Accounting & Bookkeeping</li>
              <li>Tax & Compliance</li>
              <li>Audit Services</li>
              <li>Business Advisory</li>
              <li>Company Registration</li>
              <li>International Services</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="text-accent mt-1 flex-shrink-0" size={18} />
                <div className="text-white/80 text-sm">
                  Mumbai, India
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="text-accent flex-shrink-0" size={18} />
                <a 
                  href="tel:+919819313251" 
                  className="text-white/80 hover:text-accent transition-colors text-sm"
                >
                  +91 98193 13251
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="text-accent flex-shrink-0" size={18} />
                <a 
                  href="mailto:cadeepesh.sawant@gmail.com" 
                  className="text-white/80 hover:text-accent transition-colors text-sm"
                >
                  cadeepesh.sawant@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="text-accent flex-shrink-0" size={18} />
                <a 
                  href="mailto:office@dscafirm.com" 
                  className="text-white/80 hover:text-accent transition-colors text-sm"
                >
                  office@dscafirm.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-white/80 text-sm">
              © {currentYear} CA Deepesh Sawant & Associates. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-white/80">
              <span>Trusted Since 2009</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import { useState, useEffect } from "react";
import { Menu, X, Phone, Mail, MessageCircle } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const openWhatsApp = () => {
    window.open("https://wa.me/919876543210?text=Hello,%20I'd%20like%20to%20consult%20with%20CA%20Deepesh%20Sawant", "_blank");
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-white/98 backdrop-blur-md shadow-professional border-b border-border" 
          : "bg-white/15 backdrop-blur-md border-b border-white/30"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-accent to-accent-light rounded-lg flex items-center justify-center shadow-glow">
              <span className="text-accent-foreground font-bold text-lg">CA</span>
            </div>
            <div>
              <h1 className={`font-heading font-bold text-lg transition-colors ${
                isScrolled ? "text-primary" : "text-white"
              }`}>CA Deepesh Sawant</h1>
              <p className={`text-sm transition-colors ${
                isScrolled ? "text-muted-foreground" : "text-white/80"
              }`}>Chartered Accountant</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection("home")}
              className={`font-medium transition-all duration-300 hover:text-accent hover:scale-105 ${
                isScrolled ? "text-foreground" : "text-white"
              }`}
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection("about")}
              className={`font-medium transition-all duration-300 hover:text-accent hover:scale-105 ${
                isScrolled ? "text-foreground" : "text-white"
              }`}
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection("services")}
              className={`font-medium transition-all duration-300 hover:text-accent hover:scale-105 ${
                isScrolled ? "text-foreground" : "text-white"
              }`}
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection("industries")}
              className={`font-medium transition-all duration-300 hover:text-accent hover:scale-105 ${
                isScrolled ? "text-foreground" : "text-white"
              }`}
            >
              Industries
            </button>
            <button 
              onClick={() => scrollToSection("contact")}
              className={`font-medium transition-all duration-300 hover:text-accent hover:scale-105 ${
                isScrolled ? "text-foreground" : "text-white"
              }`}
            >
              Contact
            </button>
          </nav>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button 
              onClick={openWhatsApp}
              className="btn-whatsapp shadow-glow hover:shadow-professional"
            >
              <MessageCircle size={18} />
              WhatsApp
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 rounded-lg transition-all duration-300 hover:bg-white/10 hover:text-accent ${
              isScrolled ? "text-foreground" : "text-white"
            }`}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white/98 backdrop-blur-md border-t border-border py-6 shadow-professional">
            <nav className="flex flex-col space-y-2">
              <button 
                onClick={() => scrollToSection("home")}
                className="text-left text-foreground hover:text-primary hover:bg-primary/5 transition-all duration-300 py-3 px-4 rounded-lg font-medium"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection("about")}
                className="text-left text-foreground hover:text-primary hover:bg-primary/5 transition-all duration-300 py-3 px-4 rounded-lg font-medium"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection("services")}
                className="text-left text-foreground hover:text-primary hover:bg-primary/5 transition-all duration-300 py-3 px-4 rounded-lg font-medium"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection("industries")}
                className="text-left text-foreground hover:text-primary hover:bg-primary/5 transition-all duration-300 py-3 px-4 rounded-lg font-medium"
              >
                Industries
              </button>
              <button 
                onClick={() => scrollToSection("contact")}
                className="text-left text-foreground hover:text-primary hover:bg-primary/5 transition-all duration-300 py-3 px-4 rounded-lg font-medium"
              >
                Contact
              </button>
              <div className="pt-4 border-t border-border mt-4">
                <button 
                  onClick={openWhatsApp}
                  className="btn-whatsapp w-full shadow-glow hover:shadow-professional"
                >
                  <MessageCircle size={18} />
                  WhatsApp Chat
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
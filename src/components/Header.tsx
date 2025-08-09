import { useState, useEffect } from "react";
import { Menu, X, Phone, Mail, MessageCircle } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const openWhatsApp = () => {
    window.open("https://wa.me/919819313251?text=Hello,%20I'd%20like%20to%20consult%20with%20CA%20Deepesh%20Sawant", "_blank");
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 w-full z-50">
      {/* Top Contact Bar */}
      <div className="bg-primary text-white py-2 px-6">
        <div className="container mx-auto flex items-center justify-center text-sm">
          <div className="flex items-center space-x-3 md:space-x-6">
            <div className="flex items-center gap-1 md:gap-2 text-xs">
              <Mail size={12} className="md:w-4 md:h-4" />
              <span className="hidden md:inline">cadeepesh.sawant@gmail.com</span>
              <span className="md:hidden">cadeepesh.sawant@gmail.com</span>
            </div>
            <div className="flex items-center gap-1 md:gap-2 text-xs">
              <Phone size={12} className="md:w-4 md:h-4" />
              <span className="whitespace-nowrap">+91-9819313251</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div 
        className={`transition-all duration-300 ${
          isScrolled 
            ? "bg-primary/98 backdrop-blur-md shadow-professional border-b border-primary/20" 
            : "bg-primary/95 backdrop-blur-sm border-b border-white/20"
        }`}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-glow">
                <span className="text-primary font-bold text-lg">CA</span>
              </div>
              <div>
                <h1 className="font-heading font-bold text-lg text-accent">CA Deepesh Sawant</h1>
                <p className="text-sm text-accent/80">Chartered Accountants</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <button 
                onClick={() => scrollToSection("home")}
                className="text-accent font-medium transition-all duration-300 hover:text-white hover:scale-105"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection("about")}
                className="text-accent font-medium transition-all duration-300 hover:text-white hover:scale-105"
              >
                About Us
              </button>
              <button 
                onClick={() => scrollToSection("services")}
                className="text-accent font-medium transition-all duration-300 hover:text-white hover:scale-105"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection("industries")}
                className="text-accent font-medium transition-all duration-300 hover:text-white hover:scale-105"
              >
                Industries
              </button>
              <button 
                onClick={() => scrollToSection("contact")}
                className="text-accent font-medium transition-all duration-300 hover:text-white hover:scale-105"
              >
                Contact Us
              </button>
            </nav>

            {/* Action Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <button 
                onClick={openWhatsApp}
                className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full shadow-card hover:shadow-glow transition-all duration-300 hover:scale-105 flex items-center gap-2"
              >
                <MessageCircle size={18} />
                WhatsApp
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg transition-all duration-300 hover:bg-white/10 hover:text-accent text-white"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden bg-primary/98 backdrop-blur-md border-t border-white/20 py-6 shadow-professional">
              <nav className="flex flex-col space-y-2">
                <button 
                  onClick={() => scrollToSection("home")}
                  className="text-left text-accent hover:text-white hover:bg-white/5 transition-all duration-300 py-3 px-4 rounded-lg font-medium"
                >
                  Home
                </button>
                <button 
                  onClick={() => scrollToSection("about")}
                  className="text-left text-accent hover:text-white hover:bg-white/5 transition-all duration-300 py-3 px-4 rounded-lg font-medium"
                >
                  About Us
                </button>
                <button 
                  onClick={() => scrollToSection("services")}
                  className="text-left text-accent hover:text-white hover:bg-white/5 transition-all duration-300 py-3 px-4 rounded-lg font-medium"
                >
                  Services
                </button>
                <button 
                  onClick={() => scrollToSection("industries")}
                  className="text-left text-accent hover:text-white hover:bg-white/5 transition-all duration-300 py-3 px-4 rounded-lg font-medium"
                >
                  Industries
                </button>
                <button 
                  onClick={() => scrollToSection("contact")}
                  className="text-left text-accent hover:text-white hover:bg-white/5 transition-all duration-300 py-3 px-4 rounded-lg font-medium"
                >
                  Contact Us
                </button>
                <div className="pt-4 border-t border-white/20 mt-4">
                  <button 
                    onClick={openWhatsApp}
                    className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full shadow-card hover:shadow-glow transition-all duration-300 hover:scale-105 flex items-center gap-2 w-full"
                  >
                    <MessageCircle size={18} />
                    WhatsApp Chat
                  </button>
                </div>
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
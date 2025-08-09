import { useEffect, useState } from "react";
import { ChevronDown, Phone, Mail, MessageCircle, Award, Globe, Users } from "lucide-react";
// Import your photo properly
import myPhoto from "@/assets/my-photo.jpg";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const openWhatsApp = () => {
    window.open("https://wa.me/919819313251?text=Hello,%20I'd%20like%20to%20consult%20with%20CA%20Deepesh%20Sawant", "_blank");
  };

  const scrollToNext = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section 
      id="home" 
      className="min-h-screen bg-gradient-to-br from-primary via-primary-light to-primary-glow relative overflow-hidden flex items-center"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className={`text-white space-y-8 ${isVisible ? 'fade-in animate' : 'fade-in'}`}>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 mb-6 mt-12">
                <Award className="text-accent" size={24} />
                <span className="text-accent font-medium">15+ Years Experience</span>
              </div>
              
              <h1 className="heading-hero text-white leading-tight animate-fade-in">
                Expert Financial, Tax & 
                <span className="text-accent block animate-slide-in-right">Business Solutions</span>
              </h1>
              
              <p className="text-xl text-white/90 leading-relaxed max-w-lg animate-fade-in delay-300">
                Your trusted partner for comprehensive accounting, taxation, and business advisory services across India and worldwide.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 py-6 border-t border-white/20">
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-1">500+</div>
                <div className="text-sm text-white/80">Assignments Handled</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-1">5+</div>
                <div className="text-sm text-white/80">Countries</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-1">15+</div>
                <div className="text-sm text-white/80">Years</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={scrollToNext}
                className="bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-light transition-all duration-300 flex items-center justify-center gap-2 shadow-professional hover:shadow-glow hover:scale-105"
              >
                GET STARTED
              </button>
            </div>

            {/* Quick Contact */}
            <div className="flex flex-col sm:flex-row gap-4 text-white/80">
              <a 
                href="mailto:cadeepesh.sawant@gmail.com"
                className="flex items-center gap-2 hover:text-accent transition-colors"
              >
                <Mail size={18} />
                cadeepesh.sawant@gmail.com
              </a>
              <a 
                href="mailto:office@dscafirm.com"
                className="flex items-center gap-2 hover:text-accent transition-colors"
              >
                <Mail size={18} />
                office@dscafirm.com
              </a>
              <a 
                href="tel:+919819313251"
                className="flex items-center gap-2 hover:text-accent transition-colors"
              >
                <Phone size={18} />
                +91 98193 13251
              </a>
            </div>
          </div>

          {/* Professional Image */}
          <div className={`relative ${isVisible ? 'slide-up animate' : 'slide-up'}`}>
            <div className="relative max-w-md mx-auto">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-accent to-white/30 rounded-full blur-2xl opacity-30"></div>
              
              {/* Main Image */}
              <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-6 border border-white/20">
                <img
                  src={myPhoto}
                  alt="CA Deepesh Sawant - Professional Chartered Accountant"
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />
                
                {/* Floating Badge */}
                <div className="absolute -bottom-4 -right-4 bg-accent text-white px-6 py-3 rounded-full shadow-glow font-semibold">
                  Trusted CA
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-white/5 rounded-full border border-white/10"></div>
              <div className="absolute -bottom-8 -left-8 w-16 h-16 bg-accent/20 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <button 
            onClick={scrollToNext}
            className="animate-bounce text-white/80 hover:text-accent transition-colors"
          >
            <ChevronDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
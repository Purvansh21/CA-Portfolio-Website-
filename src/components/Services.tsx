import { useEffect, useRef, useState } from "react";
import { 
  Calculator, 
  FileText, 
  Search, 
  TrendingUp, 
  Building, 
  BookOpen,
  Shield,
  Globe,
  Users,
  BarChart3
} from "lucide-react";

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (sectionRef.current) observer.unobserve(sectionRef.current);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: Calculator,
      title: "Accounting & Bookkeeping",
      description: "Comprehensive accounting services using Tally Prime, QuickBooks, Zoho Books, and Xero for accurate financial records.",
      features: ["Monthly Bookkeeping", "Financial Statements", "Cash Flow Management", "Multi-Currency Support"]
    },
    {
      icon: Globe,
      title: "International Taxation",
      description: "Key Areas of International Taxation Services",
      features: [
        "Cross-border structuring and DTAA planning",
        "PE risk and withholding tax planning",
        "Transfer pricing documentation, CbCR and APA support",
        "Global compliance: FATCA/CRS, BEPS, and representation"
      ]
    },
    {
      icon: FileText,
      title: "Tax & Compliance",
      description: "Complete tax solutions including Income Tax, GST, TDS compliance, and specialized NRI taxation services.",
      features: ["Income Tax Filing", "GST Registration & Returns", "TDS Compliance", "NRI Tax Services"]
    },
    {
      icon: Search,
      title: "Audit Services",
      description: "Professional audit services including statutory audits, internal audits, and specialized bank audits.",
      features: ["Statutory Audits", "Internal Audits", "Bank Audits", "Compliance Audits"]
    },
    {
      icon: TrendingUp,
      title: "Business Advisory & Setup",
      description: "Strategic business consulting and end-to-end incorporation services.",
      features: [
        "Financial planning & budgeting",
        "Business strategy & fundraising",
        "Company/LLP incorporation",
        "Trust/NGO registration"
      ]
    },
    {
      icon: BarChart3,
      title: "Financial Analysis",
      description: "Advanced financial analysis and reporting using modern tools like Power BI and Excel dashboards.",
      features: ["Financial Modeling", "Ratio Analysis", "Performance Reports", "Dashboard Creation"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-secondary md:bg-background" ref={sectionRef}>
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className={`text-center mb-16 ${isVisible ? 'fade-in animate' : 'fade-in'}`}>
          <h2 className="heading-section text-primary">Our Services</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent to-accent-light mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive financial, tax, and business solutions tailored to help your business thrive in today's dynamic environment.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`card-professional p-8 group ${
                isVisible ? 'slide-up animate' : 'slide-up'
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-gradient-to-r from-primary to-primary-glow rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="text-white" size={28} />
              </div>

              {/* Content */}
              <h3 className="heading-card text-primary">{service.title}</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features List */}
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-muted-foreground">
                    <div className="w-2 h-2 bg-accent rounded-full mr-3 flex-shrink-0"></div>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Hover Effect */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-accent/20 rounded-xl transition-colors duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className={`text-center mt-16 ${isVisible ? 'fade-in animate' : 'fade-in'}`}>
          <div className="bg-gradient-to-r from-primary to-primary-glow p-12 rounded-2xl text-white">
            <h3 className="text-3xl font-bold mb-4">Ready to Get Started?</h3>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Let's discuss how our professional services can help your business achieve its financial goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => window.open("https://wa.me/919819313251?text=Hello,%20I'd%20like%20to%20consult%20about%20your%20services", "_blank")}
                className="bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-white/90 transition-colors duration-300 flex items-center justify-center gap-2"
              >
                <Users size={20} />
                Book Consultation
              </button>
              <button 
                onClick={() => {
                  const element = document.getElementById("contact");
                  if (element) element.scrollIntoView({ behavior: "smooth" });
                }}
                className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/20 transition-colors duration-300"
              >
                Get Quote
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
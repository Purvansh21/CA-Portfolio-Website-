import { useEffect, useRef, useState } from "react";
import { 
  Building2, 
  Laptop, 
  ShoppingBag, 
  Clapperboard, 
  Factory, 
  GraduationCap,
  Globe,
  ArrowRight
} from "lucide-react";

const Industries = () => {
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

  const industries = [
    {
      icon: Building2,
      title: "Real Estate",
      description: "Property development, construction, and real estate investment advisory",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Laptop,
      title: "Information Technology",
      description: "Software companies, IT services, and technology startups",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: ShoppingBag,
      title: "Retail & E-commerce",
      description: "Traditional retail, online marketplaces, and consumer goods",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Clapperboard,
      title: "Media & Entertainment",
      description: "Film production, digital media, advertising, and creative agencies",
      color: "from-red-500 to-red-600"
    },
    {
      icon: Factory,
      title: "Manufacturing",
      description: "Industrial manufacturing, automotive, and production companies",
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: GraduationCap,
      title: "Education, Hospitals & NGOs",
      description: "Educational institutions, hospitals, non-profits, and social organizations",
      color: "from-indigo-500 to-indigo-600"
    }
  ];

  const countries = [
    { code: "in", name: "India", description: "Comprehensive local expertise" },
    { code: "us", name: "USA", description: "Cross-border tax & compliance" },
    { code: "gb", name: "UK", description: "International business setup" },
    { code: "ca", name: "Canada", description: "Immigration & business advisory" },
    { code: "au", name: "Australia", description: "Offshore company management" },
    { code: "ae", name: "UAE", description: "Middle East business solutions" },
    { code: "sg", name: "Singapore", description: "Asia-Pacific operations" }
  ];

  return (
    <section id="industries" className="py-20 bg-secondary" ref={sectionRef}>
      <div className="container mx-auto px-6">
        {/* Industries Section */}
        <div className={`text-center mb-16 ${isVisible ? 'fade-in animate' : 'fade-in'}`}>
          <h2 className="heading-section text-primary">Sectors We Cater</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent to-accent-light mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Specialized expertise across diverse industry verticals with deep understanding of sector-specific requirements.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {industries.map((industry, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-2xl bg-white border border-border hover:border-accent/30 transition-all duration-300 hover:-translate-y-2 hover:shadow-professional ${
                isVisible ? 'slide-up animate' : 'slide-up'
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="p-8">
                <div className={`w-16 h-16 bg-gradient-to-r ${industry.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <industry.icon className="text-white" size={28} />
                </div>
                
                <h3 className="heading-card text-primary">{industry.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {industry.description}
                </p>
                
                <div className="flex items-center text-accent mt-4 group-hover:translate-x-2 transition-transform duration-300">
                  <span className="text-sm font-medium">Learn More</span>
                  <ArrowRight size={16} className="ml-2" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Global Reach Section */}
        <div className={`${isVisible ? 'fade-in animate' : 'fade-in'}`}>
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-primary mb-4">Global Reach</h3>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Serving clients across multiple countries with expertise in international tax and business regulations.
            </p>
          </div>

          <div className="bg-gradient-to-r from-primary to-primary-glow rounded-2xl p-6 md:p-12 text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <Globe size={200} className="absolute -top-16 -right-16" />
              <Globe size={150} className="absolute -bottom-12 -left-12" />
            </div>

            <div className="relative grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {countries.map((country, index) => (
                <div
                  key={index}
                  className="text-center group cursor-pointer"
                >
                  <div className="mb-3 group-hover:scale-125 transition-transform duration-300">
                    <span className={`fi fi-${country.code} fis text-3xl`} aria-hidden="true"></span>
                  </div>
                  <h4 className="font-semibold text-lg mb-2">{country.name}</h4>
                  <p className="text-white/80 text-sm">{country.description}</p>
                </div>
              ))}
            </div>


          </div>
        </div>
      </div>
    </section>
  );
};

export default Industries;
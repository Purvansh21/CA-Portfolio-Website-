import { useEffect, useRef, useState } from "react";
import { Award, Users, Globe, TrendingUp } from "lucide-react";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState({ experience: 0, clients: 0, countries: 0, growth: 0 });
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          animateCounters();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const animateCounters = () => {
    const targets = { experience: 15, clients: 500, countries: 7, growth: 98 };
    const duration = 2000;
    const increment = 50;

    Object.keys(targets).forEach(key => {
      let current = 0;
      const target = targets[key as keyof typeof targets];
      const step = target / (duration / increment);

      const timer = setInterval(() => {
        current += step;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        setCounters(prev => ({ ...prev, [key]: Math.floor(current) }));
      }, increment);
    });
  };

  return (
    <section id="about" className="py-20 bg-secondary" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className={`space-y-8 ${isVisible ? 'fade-in animate' : 'fade-in'}`}>
            <div>
              <h2 className="heading-section text-primary mb-6">
                About CA Deepesh Sawant
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-accent to-accent-light mb-8"></div>
            </div>

            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p className="text-lg">
                <strong className="text-primary">Deepesh Sawant</strong>, founder and principal CA, leads a dynamic, 
                tech-first practice serving startups, MSMEs, and corporates in India & beyond, with deep 
                specialization in tax, audit, and cross-border assignments.
              </p>
              
              <p>
                With over 15 years of experience and ICAI registration, I provide comprehensive financial solutions 
                that drive business growth. My practice combines traditional accounting expertise with modern 
                technology to deliver efficient, accurate, and timely services to clients worldwide.
              </p>
              
              <p>
                From tax compliance and statutory audits to strategic business advisory, I help businesses 
                navigate complex financial landscapes while maintaining the highest standards of professional ethics.
              </p>
            </div>

            {/* ICAI Badge */}
            <div className="flex items-center space-x-4 p-6 bg-white rounded-xl border border-border">
              <div className="w-16 h-16 bg-gradient-to-r from-primary to-primary-glow rounded-full flex items-center justify-center">
                <Award className="text-white" size={24} />
              </div>
              <div>
                <h4 className="font-heading font-semibold text-primary">ICAI Registered</h4>
                <p className="text-muted-foreground">Institute of Chartered Accountants of India</p>
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className={`grid grid-cols-2 gap-6 ${isVisible ? 'slide-up animate' : 'slide-up'}`}>
            <div className="card-professional p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-primary to-primary-glow rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="text-white" size={24} />
              </div>
              <div className="text-4xl font-bold text-primary mb-2">{counters.experience}+</div>
              <div className="text-muted-foreground font-medium">Years Experience</div>
            </div>

            <div className="card-professional p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-accent to-accent-light rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-white" size={24} />
              </div>
              <div className="text-4xl font-bold text-primary mb-2">{counters.clients}+</div>
              <div className="text-muted-foreground font-medium">Clients Served</div>
            </div>

            <div className="card-professional p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-primary to-primary-glow rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="text-white" size={24} />
              </div>
              <div className="text-4xl font-bold text-primary mb-2">{counters.countries}</div>
              <div className="text-muted-foreground font-medium">Countries</div>
            </div>

            <div className="card-professional p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-accent to-accent-light rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="text-white" size={24} />
              </div>
              <div className="text-4xl font-bold text-primary mb-2">{counters.growth}%</div>
              <div className="text-muted-foreground font-medium">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
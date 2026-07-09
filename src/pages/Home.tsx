import React, { useEffect, useRef, useState } from "react";
import { Phone, MapPin, Clock, Scissors, Star, ChevronRight, Award, ShieldCheck, ThumbsUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

// Images
import ownerImg from "@/assets/owner.png";
import skinFadeImg from "@/assets/haircuts/skin fade.png";
import pompadorImg from "@/assets/haircuts/pompador.png";
import beardStylingImg from "@/assets/haircuts/Beard Styling.png";
import frenchCropImg from "@/assets/haircuts/french crop.png";
import kidHaircutImg from "@/assets/haircuts/kid haircut.png";
import headMassageImg from "@/assets/haircuts/head massage men.png";

// Service images
import lowFadeImg from "@/assets/haircuts/low fade.png";
import midFadeImg from "@/assets/haircuts/mid fade.png";
import highFadeImg from "@/assets/haircuts/high fade.png";
import taperFadeImg from "@/assets/haircuts/tapper fade.png";
import buzzCutImg from "@/assets/haircuts/buxx cut.png";
import crewCutImg from "@/assets/haircuts/crew cu.png";
import curlyFadeImg from "@/assets/haircuts/curly fade.png";
import quiffImg from "@/assets/haircuts/quiff.png";
import slickBackImg from "@/assets/haircuts/slick black.png";
import undercutImg from "@/assets/haircuts/undercut.png";
import mohawkFadeImg from "@/assets/haircuts/mohawk fade.png";
import wolfCutImg from "@/assets/haircuts/wolf cu.png";
import beardFadeImg from "@/assets/haircuts/beard fade.png";
import beardShavingImg from "@/assets/haircuts/Beard Shaving.png";
import beardTrimmingImg from "@/assets/haircuts/beard trimming.png";
import mustacheStylingImg from "@/assets/haircuts/Mustache Styling.png";
import hairColoringImg from "@/assets/haircuts/Hair Coloring.png";
import hairSmootheningImg from "@/assets/haircuts/Hair Smoothening.png";
import seniorCitizenImg from "@/assets/haircuts/Senior Citizen Haircut.png";

const popularHairstyles = [
  { img: lowFadeImg, name: "Low Fade" },
  { img: midFadeImg, name: "Mid Fade" },
  { img: highFadeImg, name: "High Fade" },
  { img: taperFadeImg, name: "Taper Fade" },
  { img: skinFadeImg, name: "Skin Fade" },
  { img: buzzCutImg, name: "Buzz Cut" },
  { img: crewCutImg, name: "Crew Cut" },
  { img: frenchCropImg, name: "French Crop" },
  { img: curlyFadeImg, name: "Curly Fade" },
  { img: pompadorImg, name: "Pompadour" },
  { img: quiffImg, name: "Quiff" },
  { img: slickBackImg, name: "Slick Back" },
  { img: undercutImg, name: "Undercut" },
  { img: mohawkFadeImg, name: "Mohawk Fade" },
  { img: wolfCutImg, name: "Wolf Cut" },
  { img: beardFadeImg, name: "Beard Fade" },
];

const groomingServices = [
  { img: beardStylingImg, name: "Beard Styling" },
  { img: beardShavingImg, name: "Beard Shaving" },
  { img: beardTrimmingImg, name: "Beard Trimming" },
  { img: mustacheStylingImg, name: "Mustache Styling" },
  { img: headMassageImg, name: "Head Massage" },
];

const specialServices = [
  { img: hairColoringImg, name: "Hair Coloring" },
  { img: hairSmootheningImg, name: "Hair Smoothening" },
  { img: kidHaircutImg, name: "Kid Haircut" },
  { img: seniorCitizenImg, name: "Senior Citizen Haircut" },
];

const ServiceCard = ({ img, name, price, delay = 0 }: { img: string, name: string, price?: string, delay?: number }) => (
  <FadeIn delay={delay}>
    <div className="group relative aspect-[4/5] overflow-hidden bg-card border border-white/10 hover:border-primary/40 transition-all duration-500 hover-lift cursor-default">
      <img
        src={img}
        alt={name}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[0.35] group-hover:grayscale-0"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full p-4 md:p-5">
        <h4 className="text-white font-serif font-bold text-base md:text-lg mb-1 leading-tight">{name}</h4>
        {price && <div className="text-primary font-bold text-sm">{price}</div>}
        <div className="h-0.5 w-8 bg-primary scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 mt-2"></div>
      </div>
    </div>
  </FadeIn>
);

// Simple intersection observer hook for scroll animations
function useIntersectionObserver(options = {}) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsIntersecting(true);
        observer.unobserve(entry.target);
      }
    }, { threshold: 0.1, ...options });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [options]);

  return [ref, isIntersecting] as const;
}

const FadeIn = ({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string }) => {
  const [ref, isVisible] = useIntersectionObserver();
  return (
    <div 
      ref={ref} 
      className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default function Home() {
  const phoneNumber = "08356902371";
  const whatsappLink = `https://wa.me/91${phoneNumber}`;
  
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary selection:text-primary-foreground font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass-panel border-b-0 border-t-0 border-l-0 border-r-0 border-primary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-3 cursor-pointer">
              <Scissors className="h-6 w-6 text-primary" />
              <span className="font-serif font-bold text-xl md:text-2xl tracking-wide text-white">Vinay Saloon</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">About</a>
              <a href="#services" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">Services</a>
              <a href="#gallery" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">Styles</a>
              <a href="#reviews" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">Reviews</a>
            </div>
            <Button 
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold uppercase tracking-wider text-xs md:text-sm px-6 rounded-none"
              onClick={() => window.location.href = whatsappLink}
            >
              Book Now
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 pattern-bg opacity-30 z-0 pointer-events-none"></div>
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-0 right-0 w-[30rem] h-[30rem] bg-primary/10 rounded-full blur-[120px] pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="max-w-2xl">
              <Badge variant="outline" className="border-primary/30 text-primary mb-6 px-3 py-1 bg-primary/5 uppercase tracking-widest text-[10px]">
                Chembur's Finest
              </Badge>
              <h1 className="text-5xl md:text-7xl font-serif font-black leading-tight mb-6 text-white">
                Mastery in <br />
                <span className="gold-gradient-text italic font-medium">Every Cut.</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed max-w-lg">
                Step into Chembur's most trusted neighborhood barbershop. Over a decade of quiet confidence, sharp fades, and the perfect straight razor shave.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button 
                  size="lg" 
                  className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold uppercase tracking-wider h-14 px-8 rounded-none hover-lift"
                  onClick={() => window.location.href = whatsappLink}
                >
                  WhatsApp Us
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-primary/30 text-white hover:bg-primary/10 font-bold uppercase tracking-wider h-14 px-8 rounded-none hover-lift"
                  onClick={() => window.location.href = `tel:${phoneNumber}`}
                >
                  <Phone className="mr-2 h-4 w-4 text-primary" />
                  Call Now
                </Button>
              </div>
              
              <div className="mt-12 flex items-center gap-8 border-t border-white/10 pt-8">
                <div>
                  <div className="text-3xl font-serif font-bold text-white mb-1">10+</div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">Years Exp.</div>
                </div>
                <div className="w-px h-10 bg-white/10"></div>
                <div>
                  <div className="text-3xl font-serif font-bold text-white mb-1">5000+</div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">Happy Clients</div>
                </div>
              </div>
            </div>
            
            <div className="relative mx-auto w-full max-w-md">
              <div className="aspect-[3/4] relative z-10">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent mix-blend-overlay z-10"></div>
                <img 
                  src={skinFadeImg} 
                  alt="Precision skin fade haircut" 
                  className="w-full h-full object-cover grayscale-[0.3] contrast-125 hover:grayscale-0 transition-all duration-700 shadow-2xl"
                />
                
                {/* Decorative elements */}
                <div className="absolute -bottom-6 -left-6 w-32 h-32 border border-primary/40 z-0"></div>
                <div className="absolute -top-6 -right-6 w-24 h-24 border border-primary/40 z-0"></div>
                <div className="absolute -right-4 top-1/4 glass-panel p-4 shadow-xl z-20 flex items-center gap-3">
                  <Star className="h-5 w-5 text-primary fill-primary" />
                  <div>
                    <div className="text-sm font-bold text-white">4.9/5</div>
                    <div className="text-[10px] text-muted-foreground uppercase">Top Rated</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-card/50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="relative">
                <div className="aspect-square max-w-md mx-auto relative rounded-full overflow-hidden border-2 border-primary/20 p-2">
                  <div className="w-full h-full rounded-full overflow-hidden relative group">
                    <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-all duration-500 z-10"></div>
                    <img 
                      src={ownerImg} 
                      alt="Vinay, Master Barber" 
                      className="w-full h-full object-cover grayscale-[0.2]"
                    />
                  </div>
                </div>
              </div>
              
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="h-px w-8 bg-primary"></div>
                  <span className="text-primary font-bold uppercase tracking-widest text-sm">The Craftsman</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-white">Meet Vinay.</h2>
                <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                  For over 10 years, Vinay has been the quiet force behind Chembur's sharpest looks. What started as a passion for the craft has grown into a neighborhood institution with over 5,000 loyal clients.
                </p>
                <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                  There are no gimmicks here—just honest, meticulous barbering. Whether you need a crisp skin fade, a classic gentleman's cut, or a traditional straight razor shave, you're in the hands of a true professional who takes pride in every detail.
                </p>
                
                <div className="grid grid-cols-2 gap-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-none text-primary">
                      <Award className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold mb-1">Master Barber</h4>
                      <p className="text-sm text-muted-foreground">Expert in modern & classic styles</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-none text-primary">
                      <ShieldCheck className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold mb-1">Premium Care</h4>
                      <p className="text-sm text-muted-foreground">Immaculate hygiene & tools</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Services Menu */}
      <section id="services" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-white">Service Menu</h2>
              <p className="text-primary uppercase tracking-widest font-bold text-sm">Premium Quality. Affordable Pricing.</p>
            </div>
          </FadeIn>

          {/* Classic Haircut Price Card */}
          <FadeIn>
            <div className="glass-panel p-8 md:p-10 relative mb-20 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 gold-gradient-bg"></div>
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="h-px w-8 bg-primary"></div>
                    <span className="text-primary font-bold uppercase tracking-widest text-xs">Everyday Essential</span>
                  </div>
                  <h3 className="text-3xl font-serif font-bold text-white mb-2">Classic Haircut</h3>
                  <p className="text-muted-foreground">A timeless, precision cut for everyday sharpness.</p>
                </div>
                <div className="flex md:justify-end items-center gap-10">
                  <div>
                    <div className="text-4xl font-serif font-black text-primary">₹60</div>
                    <div className="text-xs uppercase tracking-wider text-muted-foreground mt-1">Classic Haircut</div>
                  </div>
                  <div className="w-px h-14 bg-white/10"></div>
                  <div>
                    <div className="text-4xl font-serif font-black text-primary">₹70+</div>
                    <div className="text-xs uppercase tracking-wider text-muted-foreground mt-1">Modern Hairstyles</div>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Section 1: Popular Hairstyles */}
          <div className="mb-20">
            <FadeIn>
              <h3 className="text-2xl md:text-3xl font-serif font-bold text-white mb-2 flex items-center gap-3">
                <Scissors className="h-5 w-5 text-primary" />
                Popular Hairstyles
              </h3>
              <p className="text-muted-foreground mb-8">Starting ₹70</p>
            </FadeIn>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {popularHairstyles.map((item, idx) => (
                <ServiceCard key={item.name} img={item.img} name={item.name} price="Starting ₹70" delay={(idx % 4) * 100} />
              ))}
            </div>
          </div>

          {/* Section 2: Beard & Grooming */}
          <div className="mb-20">
            <FadeIn>
              <h3 className="text-2xl md:text-3xl font-serif font-bold text-white mb-2 flex items-center gap-3">
                <Scissors className="h-5 w-5 text-primary" />
                Beard & Grooming
              </h3>
              <p className="text-muted-foreground mb-8">Precision grooming, custom pricing</p>
            </FadeIn>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
              {groomingServices.map((item, idx) => (
                <ServiceCard key={item.name} img={item.img} name={item.name} delay={(idx % 5) * 100} />
              ))}
            </div>
          </div>

          {/* Section 3: Special Services */}
          <div>
            <FadeIn>
              <h3 className="text-2xl md:text-3xl font-serif font-bold text-white mb-2 flex items-center gap-3">
                <Scissors className="h-5 w-5 text-primary" />
                Special Services
              </h3>
              <p className="text-muted-foreground mb-8">Care beyond the everyday cut</p>
            </FadeIn>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6">
              {specialServices.map((item, idx) => (
                <ServiceCard key={item.name} img={item.img} name={item.name} delay={(idx % 4) * 100} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Banner */}
      <section className="py-12 gold-gradient-bg relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20 mix-blend-overlay"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-black mb-4">Walk-ins Always Welcome.</h2>
          <p className="text-black/80 font-medium text-lg mb-8 max-w-2xl mx-auto">
            Experience premium grooming without the wait. Drop by during our hours or text us to secure your spot.
          </p>
          <Button 
            size="lg" 
            className="bg-black text-white hover:bg-black/90 font-bold uppercase tracking-wider h-12 px-8 rounded-none hover-lift"
            onClick={() => window.location.href = whatsappLink}
          >
            Message on WhatsApp
          </Button>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="py-24 bg-card/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
              <div>
                <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-white">The Work.</h2>
                <p className="text-muted-foreground text-lg max-w-xl">Real cuts on real clients. From crisp fades to classic pompadours.</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { img: pompadorImg, name: "Pompadour" },
                { img: frenchCropImg, name: "French Crop" },
                { img: beardStylingImg, name: "Beard Styling" },
                { img: skinFadeImg, name: "Skin Fade" },
                { img: kidHaircutImg, name: "Kid's Cut" },
                { img: headMassageImg, name: "Head Massage" },
              ].map((item, idx) => (
                <div key={idx} className="group relative aspect-square overflow-hidden bg-card hover-lift cursor-pointer">
                  <img 
                    src={item.img} 
                    alt={item.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[0.2] group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
                  <div className="absolute bottom-0 left-0 w-full p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h4 className="text-white font-serif font-bold text-xl mb-1">{item.name}</h4>
                    <div className="h-0.5 w-8 bg-primary scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"></div>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 pattern-bg opacity-30"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-white">Word on the Street.</h2>
              <p className="text-primary uppercase tracking-widest font-bold text-sm">Join 5000+ Happy Customers</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { name: "Rahul D.", text: "Been coming to Vinay for 4 years. He never misses. Best skin fade in Chembur, hands down." },
                { name: "Sameer K.", text: "Premium service at local prices. The attention to detail during the beard styling is incredible. Highly recommend." },
                { name: "Amit P.", text: "Takes his time, genuinely cares about how you look walking out. A true master of his craft." }
              ].map((review, idx) => (
                <div key={idx} className="glass-panel p-8 relative">
                  <div className="flex text-primary mb-4">
                    {[1,2,3,4,5].map(star => <Star key={star} className="h-4 w-4 fill-primary" />)}
                  </div>
                  <p className="text-white/80 italic mb-6 leading-relaxed">"{review.text}"</p>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold font-serif">
                      {review.name.charAt(0)}
                    </div>
                    <div className="font-bold text-white">{review.name}</div>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Location & Contact */}
      <section className="py-24 bg-card border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="grid lg:grid-cols-2 gap-16">
              <div>
                <h2 className="text-4xl font-serif font-bold mb-8 text-white">Visit the Shop.</h2>
                
                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-none text-primary shrink-0">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold mb-2 uppercase tracking-wider text-sm">Location</h4>
                      <p className="text-muted-foreground leading-relaxed max-w-xs">
                        Shop No.49, Ashok Nagar,<br />
                        Kokan Nagar, Chembur,<br />
                        Mumbai, Maharashtra 400074
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-none text-primary shrink-0">
                      <Clock className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold mb-2 uppercase tracking-wider text-sm">Hours</h4>
                      <p className="text-muted-foreground">
                        Monday - Sunday<br />
                        <span className="text-white font-medium">9:00 AM - 10:00 PM</span>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-none text-primary shrink-0">
                      <Phone className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold mb-2 uppercase tracking-wider text-sm">Contact</h4>
                      <p className="text-white font-medium text-xl font-serif tracking-widest">{phoneNumber}</p>
                      <div className="flex gap-4 mt-4">
                        <Button 
                          variant="outline" 
                          className="border-primary text-primary hover:bg-primary hover:text-black rounded-none h-10 px-6 text-xs font-bold uppercase"
                          onClick={() => window.location.href = `tel:${phoneNumber}`}
                        >
                          Call
                        </Button>
                        <Button 
                          className="bg-primary text-black hover:bg-primary/90 rounded-none h-10 px-6 text-xs font-bold uppercase"
                          onClick={() => window.location.href = whatsappLink}
                        >
                          WhatsApp
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="h-[400px] lg:h-auto min-h-[400px] bg-muted relative overflow-hidden border border-white/10 group grayscale hover:grayscale-0 transition-all duration-700">
                {/* Embed Google Map centered roughly on coordinates 19.048214, 72.8915804 */}
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.5543666270517!2d72.88939171489953!3d19.048214087103233!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c8bb5f7b494b%3A0xc34cc5dc025a1b3!2sAshok%20Nagar%2C%20Chembur%2C%20Mumbai%2C%20Maharashtra%20400074!5e0!3m2!1sen!2sin!4v1680000000000!5m2!1sen!2sin" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={false} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Vinay Hair Cutting Saloon Map Location"
                  className="absolute inset-0"
                ></iframe>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-12 border-t border-primary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <Scissors className="h-6 w-6 text-primary" />
            <span className="font-serif font-bold text-xl text-white">Vinay Saloon</span>
          </div>
          <div className="text-muted-foreground text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} Vinay Hair Cutting Saloon. All rights reserved.<br className="md:hidden" /> Chembur, Mumbai.
          </div>
        </div>
      </footer>
    </div>
  );
}

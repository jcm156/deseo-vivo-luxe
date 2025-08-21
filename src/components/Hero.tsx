import { Button } from '@/components/ui/button';
import { ArrowRight, Shield, Truck, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroImage from '@/assets/hero-luxury.jpg';

const Hero = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-luxury-black/60" />
      
      {/* Content */}
      <div className="relative z-10 container-luxury text-center text-luxury-white">
        <div className="animate-fade-up">
          <h1 className="text-luxury-hero mb-6">
            Luxury Intimacy
            <br />
            <span className="text-luxury-gold">Redefined</span>
          </h1>
          
          <p className="text-xl md:text-2xl font-light max-w-3xl mx-auto mb-8 leading-relaxed">
            Discover our curated collection of premium intimate wellness products, 
            designed for sophisticated individuals who appreciate quality and discretion.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link to="/collections/all">
              <Button className="btn-luxury group">
                Explore Collection
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            
            <Link to="/collections/privee">
              <Button className="btn-luxury-outline">
                Privée Collection
              </Button>
            </Link>
          </div>
          
          {/* Trust Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex items-center justify-center space-x-3 animate-fade-in">
              <Shield className="h-6 w-6 text-luxury-gold" />
              <span className="text-sm font-medium">100% Discreet Shipping</span>
            </div>
            
            <div className="flex items-center justify-center space-x-3 animate-fade-in">
              <Truck className="h-6 w-6 text-luxury-gold" />
              <span className="text-sm font-medium">Free Worldwide Delivery</span>
            </div>
            
            <div className="flex items-center justify-center space-x-3 animate-fade-in">
              <Award className="h-6 w-6 text-luxury-gold" />
              <span className="text-sm font-medium">Premium Quality Guarantee</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 border border-luxury-gold/20 rounded-full animate-pulse hidden lg:block" />
      <div className="absolute bottom-20 right-20 w-16 h-16 border border-luxury-gold/30 rounded-full animate-pulse hidden lg:block" />
    </section>
  );
};

export default Hero;
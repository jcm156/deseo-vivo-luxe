import { Link } from 'react-router-dom';
import { Shield, Truck, Award, Mail, Facebook, Instagram, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Footer = () => {
  return (
    <footer className="bg-luxury-charcoal text-luxury-white">
      {/* Newsletter Section */}
      <div className="border-b border-luxury-white/10">
        <div className="container-luxury py-12">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="font-heading text-2xl font-semibold mb-4">
              Join Our Exclusive Circle
            </h3>
            <p className="text-luxury-white/70 mb-6">
              Receive first access to new collections, exclusive offers, and intimate wellness tips.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-luxury-white/10 border-luxury-white/20 text-luxury-white placeholder:text-luxury-white/50"
              />
              <Button className="btn-luxury">
                Subscribe
              </Button>
            </div>
            <p className="text-xs text-luxury-white/50 mt-3">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container-luxury py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-6">
              <div className="text-luxury-hero text-2xl font-bold">
                DeseoVivo
              </div>
            </Link>
            <p className="text-luxury-white/70 mb-6 leading-relaxed">
              Luxury intimate wellness products for sophisticated individuals who appreciate 
              quality, discretion, and exceptional design.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="text-luxury-white hover:text-luxury-gold">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-luxury-white hover:text-luxury-gold">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-luxury-white hover:text-luxury-gold">
                <Twitter className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-6">Shop</h4>
            <nav className="space-y-3">
              {[
                { name: 'For Her', path: '/collections/for-her' },
                { name: 'For Him', path: '/collections/for-him' },
                { name: 'For Couples', path: '/collections/for-couples' },
                { name: 'Privée Collection', path: '/collections/privee' },
                { name: 'Wellness', path: '/collections/wellness' },
                { name: 'Luxury Gifts', path: '/collections/luxury-gifts' }
              ].map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="block text-luxury-white/70 hover:text-luxury-gold transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-6">Support</h4>
            <nav className="space-y-3">
              {[
                { name: 'Customer Care', path: '/support' },
                { name: 'Size Guide', path: '/size-guide' },
                { name: 'Shipping & Returns', path: '/shipping' },
                { name: 'Privacy Policy', path: '/privacy' },
                { name: 'Terms of Service', path: '/terms' },
                { name: 'FAQ', path: '/faq' }
              ].map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="block text-luxury-white/70 hover:text-luxury-gold transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-6">Contact</h4>
            <div className="space-y-4">
              <div>
                <p className="text-luxury-white/70 mb-2">Customer Care</p>
                <p className="text-luxury-gold font-medium">support@deseovivo.com</p>
              </div>
              <div>
                <p className="text-luxury-white/70 mb-2">VIP Concierge</p>
                <p className="text-luxury-gold font-medium">concierge@deseovivo.com</p>
              </div>
              <div>
                <p className="text-luxury-white/70 mb-2">Business Hours</p>
                <p className="text-sm">Mon-Fri: 9AM-6PM PST</p>
                <p className="text-sm text-luxury-white/50">Discreet communication guaranteed</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Badges */}
      <div className="border-t border-luxury-white/10">
        <div className="container-luxury py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="flex items-center justify-center space-x-3">
              <Shield className="h-6 w-6 text-luxury-gold" />
              <div className="text-left">
                <p className="font-medium">SSL Encrypted</p>
                <p className="text-sm text-luxury-white/70">Secure Checkout</p>
              </div>
            </div>
            
            <div className="flex items-center justify-center space-x-3">
              <Truck className="h-6 w-6 text-luxury-gold" />
              <div className="text-left">
                <p className="font-medium">Discreet Delivery</p>
                <p className="text-sm text-luxury-white/70">Plain Packaging</p>
              </div>
            </div>
            
            <div className="flex items-center justify-center space-x-3">
              <Award className="h-6 w-6 text-luxury-gold" />
              <div className="text-left">
                <p className="font-medium">Premium Quality</p>
                <p className="text-sm text-luxury-white/70">30-Day Guarantee</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-luxury-white/10">
        <div className="container-luxury py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-luxury-white/70">
              © 2024 DeseoVivo. All rights reserved. Adult content - 18+ only.
            </p>
            <div className="flex items-center space-x-6 text-sm text-luxury-white/70">
              <Link to="/privacy" className="hover:text-luxury-gold transition-colors">
                Privacy
              </Link>
              <Link to="/terms" className="hover:text-luxury-gold transition-colors">
                Terms
              </Link>
              <Link to="/cookies" className="hover:text-luxury-gold transition-colors">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
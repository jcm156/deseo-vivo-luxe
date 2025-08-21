import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ShieldCheck, AlertTriangle } from 'lucide-react';

interface AgeVerificationProps {
  onVerified: () => void;
}

const AgeVerification = ({ onVerified }: AgeVerificationProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already verified age in this session
    const isVerified = sessionStorage.getItem('age-verified');
    if (!isVerified) {
      setIsVisible(true);
    } else {
      onVerified();
    }
  }, [onVerified]);

  const handleVerifyAge = () => {
    sessionStorage.setItem('age-verified', 'true');
    setIsVisible(false);
    onVerified();
  };

  const handleDecline = () => {
    window.location.href = 'https://www.google.com';
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-luxury-black/95 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md mx-auto card-luxury animate-scale-in">
        <CardContent className="p-8 text-center">
          <div className="mb-6">
            <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-luxury-gold/10 flex items-center justify-center">
              <ShieldCheck className="w-10 h-10 text-luxury-gold" />
            </div>
            <Badge variant="outline" className="text-luxury-gold border-luxury-gold mb-4">
              Age Verification Required
            </Badge>
            <h1 className="text-luxury-title mb-4">DeseoVivo</h1>
            <p className="text-luxury-subtitle mb-6">
              Welcome to our luxury intimate wellness boutique
            </p>
          </div>

          <div className="mb-8 p-4 bg-luxury-cream rounded-lg">
            <div className="flex items-start space-x-3">
              <AlertTriangle className="w-5 h-5 text-luxury-gold flex-shrink-0 mt-0.5" />
              <div className="text-left">
                <p className="text-sm font-medium mb-2">Adult Content Notice</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  This website contains adult content and is intended for individuals 
                  18 years of age or older. By continuing, you confirm that you are 
                  of legal age and wish to view adult content.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <Button 
              onClick={handleVerifyAge}
              className="w-full btn-luxury"
            >
              I am 18+ years old - Enter Site
            </Button>
            
            <Button 
              variant="ghost" 
              onClick={handleDecline}
              className="w-full btn-luxury-ghost"
            >
              I am under 18 - Exit
            </Button>
          </div>

          <div className="mt-6 pt-6 border-t border-border">
            <p className="text-xs text-muted-foreground">
              By entering this site, you agree to our{' '}
              <button className="text-luxury-gold hover:underline">
                Terms and Conditions
              </button>{' '}
              and{' '}
              <button className="text-luxury-gold hover:underline">
                Privacy Policy
              </button>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AgeVerification;
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Cookie, Settings, X } from 'lucide-react';
import { Link } from 'react-router-dom';

interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  preferences: boolean;
}

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true, // Always required
    analytics: false,
    marketing: false,
    preferences: false,
  });

  useEffect(() => {
    // Check if user has already made a choice
    const cookieConsent = localStorage.getItem('cookie-consent');
    if (!cookieConsent) {
      // Show banner after a slight delay for better UX
      const timer = setTimeout(() => setIsVisible(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    const allAccepted = {
      necessary: true,
      analytics: true,
      marketing: true,
      preferences: true,
    };
    
    localStorage.setItem('cookie-consent', JSON.stringify(allAccepted));
    setIsVisible(false);
    
    // Initialize analytics and marketing tools here
    initializeAnalytics();
    initializeMarketing();
  };

  const handleAcceptSelected = () => {
    localStorage.setItem('cookie-consent', JSON.stringify(preferences));
    setIsVisible(false);
    
    // Initialize only selected tools
    if (preferences.analytics) initializeAnalytics();
    if (preferences.marketing) initializeMarketing();
  };

  const handleDeclineAll = () => {
    const declined = {
      necessary: true,
      analytics: false,
      marketing: false,
      preferences: false,
    };
    
    localStorage.setItem('cookie-consent', JSON.stringify(declined));
    setIsVisible(false);
  };

  const initializeAnalytics = () => {
    // Initialize Google Analytics or other analytics tools
    console.log('Analytics initialized');
  };

  const initializeMarketing = () => {
    // Initialize marketing pixels, ads, etc.
    console.log('Marketing tools initialized');
  };

  const updatePreference = (type: keyof CookiePreferences, value: boolean) => {
    if (type === 'necessary') return; // Cannot disable necessary cookies
    setPreferences(prev => ({ ...prev, [type]: value }));
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 animate-slide-up">
      <Card className="mx-auto max-w-4xl card-luxury border-luxury-gold/20">
        <CardContent className="p-6">
          {!showSettings ? (
            // Simple Banner
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-luxury-gold/10 flex items-center justify-center flex-shrink-0">
                  <Cookie className="w-5 h-5 text-luxury-gold" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-1">
                    <h3 className="font-heading text-lg font-semibold">Cookie Preferences</h3>
                    <Badge variant="outline" className="text-xs">GDPR Compliant</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    We use cookies to enhance your browsing experience and provide personalized content. 
                    Your privacy is our priority. Choose your preferences or accept all cookies to continue.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-2 ml-auto">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowSettings(true)}
                  className="text-luxury-gold hover:text-luxury-gold-dark"
                >
                  <Settings className="w-4 h-4 mr-2" />
                  Customize
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleDeclineAll}
                  className="border-luxury-gold/30 text-luxury-charcoal hover:bg-luxury-gold/10"
                >
                  Decline All
                </Button>
                <Button
                  onClick={handleAcceptAll}
                  size="sm"
                  className="btn-luxury"
                >
                  Accept All
                </Button>
              </div>
            </div>
          ) : (
            // Detailed Settings
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-heading text-xl font-semibold mb-2">Cookie Preferences</h3>
                  <p className="text-sm text-muted-foreground">
                    Manage your cookie preferences. You can enable or disable different types of cookies below.
                  </p>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setShowSettings(false)}
                  className="text-muted-foreground hover:text-foreground"
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>

              <Separator />

              <div className="space-y-4">
                {/* Necessary Cookies */}
                <div className="flex items-start space-x-3">
                  <Checkbox 
                    checked={preferences.necessary} 
                    disabled={true}
                    className="mt-1"
                  />
                  <div className="flex-1 space-y-1">
                    <div className="flex items-center space-x-2">
                      <h4 className="font-medium">Necessary Cookies</h4>
                      <Badge variant="secondary" className="text-xs">Required</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Essential for website functionality, security, and user authentication. Cannot be disabled.
                    </p>
                  </div>
                </div>

                {/* Analytics Cookies */}
                <div className="flex items-start space-x-3">
                  <Checkbox 
                    checked={preferences.analytics}
                    onCheckedChange={(checked) => updatePreference('analytics', !!checked)}
                    className="mt-1"
                  />
                  <div className="flex-1 space-y-1">
                    <h4 className="font-medium">Analytics Cookies</h4>
                    <p className="text-sm text-muted-foreground">
                      Help us understand how you interact with our website to improve user experience.
                    </p>
                  </div>
                </div>

                {/* Marketing Cookies */}
                <div className="flex items-start space-x-3">
                  <Checkbox 
                    checked={preferences.marketing}
                    onCheckedChange={(checked) => updatePreference('marketing', !!checked)}
                    className="mt-1"
                  />
                  <div className="flex-1 space-y-1">
                    <h4 className="font-medium">Marketing Cookies</h4>
                    <p className="text-sm text-muted-foreground">
                      Used to deliver personalized advertisements and track marketing campaign effectiveness.
                    </p>
                  </div>
                </div>

                {/* Preference Cookies */}
                <div className="flex items-start space-x-3">
                  <Checkbox 
                    checked={preferences.preferences}
                    onCheckedChange={(checked) => updatePreference('preferences', !!checked)}
                    className="mt-1"
                  />
                  <div className="flex-1 space-y-1">
                    <h4 className="font-medium">Preference Cookies</h4>
                    <p className="text-sm text-muted-foreground">
                      Remember your settings and preferences for a personalized experience.
                    </p>
                  </div>
                </div>
              </div>

              <Separator />

              <div className="flex items-center justify-between">
                <Link 
                  to="/legal/cookie-policy" 
                  className="text-sm text-luxury-gold hover:underline"
                >
                  View Cookie Policy
                </Link>
                
                <div className="flex space-x-2">
                  <Button
                    variant="outline"
                    onClick={handleDeclineAll}
                    className="border-luxury-gold/30"
                  >
                    Decline All
                  </Button>
                  <Button
                    onClick={handleAcceptSelected}
                    className="btn-luxury"
                  >
                    Save Preferences
                  </Button>
                </div>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default CookieConsent;
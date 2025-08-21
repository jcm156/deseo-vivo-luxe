import { Helmet } from 'react-helmet';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Cookie, Settings, BarChart, Target, Shield, Info } from 'lucide-react';

const CookiePolicy = () => {
  const handleManageCookies = () => {
    // This would open the cookie consent modal
    localStorage.removeItem('cookie-consent');
    window.location.reload();
  };

  return (
    <>
      <Helmet>
        <title>Cookie Policy | DeseoVivo - GDPR Compliant Cookie Information</title>
        <meta name="description" content="Learn about how we use cookies to enhance your experience. GDPR compliant cookie policy with detailed information about cookie types and your choices." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://deseovivo.com/legal/cookie-policy" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="section-padding">
          <div className="container-luxury">
            <div className="max-w-4xl mx-auto">
              {/* Header */}
              <div className="text-center mb-12">
                <div className="flex items-center justify-center space-x-2 mb-4">
                  <Cookie className="w-8 h-8 text-luxury-gold" />
                  <Badge variant="outline" className="text-luxury-gold border-luxury-gold">
                    GDPR Compliant
                  </Badge>
                </div>
                <h1 className="text-luxury-hero mb-6">Cookie Policy</h1>
                <p className="text-luxury-subtitle max-w-2xl mx-auto">
                  This policy explains how we use cookies and similar technologies to provide you with a 
                  personalized and secure browsing experience on our luxury boutique website.
                </p>
                <p className="text-sm text-muted-foreground mt-4">
                  Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                </p>
              </div>

              <div className="space-y-8">
                {/* Cookie Management */}
                <Card className="card-luxury border-luxury-gold/20">
                  <CardContent className="p-8 text-center">
                    <Settings className="w-12 h-12 text-luxury-gold mx-auto mb-4" />
                    <h2 className="text-luxury-title mb-4">Manage Your Cookie Preferences</h2>
                    <p className="text-muted-foreground mb-6">
                      Take control of your cookie settings. You can modify your preferences at any time 
                      and choose which types of cookies you're comfortable with.
                    </p>
                    <Button 
                      onClick={handleManageCookies}
                      className="btn-luxury"
                    >
                      <Settings className="w-4 h-4 mr-2" />
                      Cookie Settings
                    </Button>
                  </CardContent>
                </Card>

                {/* What Are Cookies */}
                <Card className="card-luxury">
                  <CardContent className="p-8">
                    <div className="flex items-center space-x-3 mb-6">
                      <Info className="w-6 h-6 text-luxury-gold" />
                      <h2 className="text-luxury-title">What Are Cookies?</h2>
                    </div>
                    
                    <div className="space-y-4 text-muted-foreground">
                      <p>
                        Cookies are small text files that are stored on your device when you visit our website. 
                        They help us provide you with a better, faster, and more secure experience by remembering 
                        your preferences and analyzing how you use our site.
                      </p>
                      <p>
                        We use different types of cookies for various purposes, from essential functionality 
                        to personalized marketing. You have full control over which cookies you allow, except 
                        for those that are strictly necessary for the website to function.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* Cookie Types */}
                <Card className="card-luxury">
                  <CardContent className="p-8">
                    <h2 className="text-luxury-title mb-8">Types of Cookies We Use</h2>
                    
                    <div className="space-y-6">
                      {/* Necessary Cookies */}
                      <div className="border border-luxury-gold/20 rounded-lg p-6">
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 rounded-full bg-luxury-gold/10 flex items-center justify-center flex-shrink-0">
                            <Shield className="w-6 h-6 text-luxury-gold" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-2">
                              <h3 className="font-heading text-lg font-semibold">Necessary Cookies</h3>
                              <Badge variant="destructive" className="text-xs">Required</Badge>
                            </div>
                            <p className="text-sm text-muted-foreground mb-4">
                              These cookies are essential for the website to function properly. They enable core 
                              functionality such as security, network management, and accessibility. You cannot 
                              opt-out of these cookies.
                            </p>
                            <div className="space-y-2">
                              <h4 className="font-semibold text-sm">Examples include:</h4>
                              <ul className="text-sm text-muted-foreground space-y-1">
                                <li>• <strong>Authentication:</strong> Keep you logged in securely</li>
                                <li>• <strong>Shopping Cart:</strong> Remember items you've added</li>
                                <li>• <strong>Security:</strong> Protect against cross-site request forgery</li>
                                <li>• <strong>Age Verification:</strong> Remember that you've confirmed your age</li>
                                <li>• <strong>Load Balancing:</strong> Distribute requests across our servers</li>
                              </ul>
                              <div className="mt-3 p-3 bg-luxury-cream rounded text-xs">
                                <strong>Retention:</strong> Session cookies are deleted when you close your browser. 
                                Persistent cookies are stored for up to 1 year.
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Analytics Cookies */}
                      <div className="border border-border rounded-lg p-6">
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 rounded-full bg-luxury-gold/10 flex items-center justify-center flex-shrink-0">
                            <BarChart className="w-6 h-6 text-luxury-gold" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-2">
                              <h3 className="font-heading text-lg font-semibold">Analytics Cookies</h3>
                              <Badge variant="outline" className="text-xs">Optional</Badge>
                            </div>
                            <p className="text-sm text-muted-foreground mb-4">
                              These cookies help us understand how visitors interact with our website by collecting 
                              and reporting information anonymously. This helps us improve our site's performance 
                              and user experience.
                            </p>
                            <div className="space-y-2">
                              <h4 className="font-semibold text-sm">What we track:</h4>
                              <ul className="text-sm text-muted-foreground space-y-1">
                                <li>• <strong>Page Views:</strong> Which pages are most popular</li>
                                <li>• <strong>User Flow:</strong> How users navigate through our site</li>
                                <li>• <strong>Performance:</strong> Page load times and errors</li>
                                <li>• <strong>Demographics:</strong> General location and device information</li>
                                <li>• <strong>Bounce Rate:</strong> How engaging our content is</li>
                              </ul>
                              <div className="mt-3 p-3 bg-luxury-cream rounded text-xs">
                                <strong>Third-party services:</strong> Google Analytics, Hotjar
                                <br />
                                <strong>Retention:</strong> Up to 26 months, then anonymized or deleted
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Marketing Cookies */}
                      <div className="border border-border rounded-lg p-6">
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 rounded-full bg-luxury-gold/10 flex items-center justify-center flex-shrink-0">
                            <Target className="w-6 h-6 text-luxury-gold" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-2">
                              <h3 className="font-heading text-lg font-semibold">Marketing Cookies</h3>
                              <Badge variant="outline" className="text-xs">Optional</Badge>
                            </div>
                            <p className="text-sm text-muted-foreground mb-4">
                              These cookies are used to deliver advertisements that are relevant to you and your 
                              interests. They also help us measure the effectiveness of our advertising campaigns 
                              and limit the number of times you see an ad.
                            </p>
                            <div className="space-y-2">
                              <h4 className="font-semibold text-sm">Used for:</h4>
                              <ul className="text-sm text-muted-foreground space-y-1">
                                <li>• <strong>Personalized Ads:</strong> Show relevant products and offers</li>
                                <li>• <strong>Retargeting:</strong> Remind you of products you viewed</li>
                                <li>• <strong>Campaign Tracking:</strong> Measure advertising effectiveness</li>
                                <li>• <strong>Social Media:</strong> Enable sharing and social login features</li>
                                <li>• <strong>Cross-device:</strong> Provide consistent experience across devices</li>
                              </ul>
                              <div className="mt-3 p-3 bg-luxury-cream rounded text-xs">
                                <strong>Third-party services:</strong> Facebook Pixel, Google Ads, Instagram
                                <br />
                                <strong>Retention:</strong> Up to 2 years, varies by platform
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Preference Cookies */}
                      <div className="border border-border rounded-lg p-6">
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 rounded-full bg-luxury-gold/10 flex items-center justify-center flex-shrink-0">
                            <Settings className="w-6 h-6 text-luxury-gold" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-2">
                              <h3 className="font-heading text-lg font-semibold">Preference Cookies</h3>
                              <Badge variant="outline" className="text-xs">Optional</Badge>
                            </div>
                            <p className="text-sm text-muted-foreground mb-4">
                              These cookies remember your choices and preferences to provide you with a more 
                              personalized experience. They make our website work more efficiently for you.
                            </p>
                            <div className="space-y-2">
                              <h4 className="font-semibold text-sm">They remember:</h4>
                              <ul className="text-sm text-muted-foreground space-y-1">
                                <li>• <strong>Language:</strong> Your preferred language and region</li>
                                <li>• <strong>Currency:</strong> Your preferred currency for pricing</li>
                                <li>• <strong>Theme:</strong> Dark mode or light mode preference</li>
                                <li>• <strong>Layout:</strong> Grid vs list view for products</li>
                                <li>• <strong>Filters:</strong> Your product search and filter preferences</li>
                              </ul>
                              <div className="mt-3 p-3 bg-luxury-cream rounded text-xs">
                                <strong>Storage:</strong> Locally on your device
                                <br />
                                <strong>Retention:</strong> Up to 1 year or until you clear them
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Third-Party Cookies */}
                <Card className="card-luxury">
                  <CardContent className="p-8">
                    <h2 className="text-luxury-title mb-6">Third-Party Cookies</h2>
                    <p className="text-muted-foreground mb-6">
                      Some cookies are set by third-party services that appear on our pages. We work with 
                      trusted partners who help us provide better services:
                    </p>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div>
                          <h3 className="font-semibold mb-2">Google Analytics</h3>
                          <p className="text-sm text-muted-foreground">
                            Helps us understand website usage and improve user experience.
                          </p>
                        </div>
                        <div>
                          <h3 className="font-semibold mb-2">Stripe</h3>
                          <p className="text-sm text-muted-foreground">
                            Secure payment processing and fraud prevention.
                          </p>
                        </div>
                        <div>
                          <h3 className="font-semibold mb-2">Mailchimp</h3>
                          <p className="text-sm text-muted-foreground">
                            Email marketing and newsletter management.
                          </p>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <div>
                          <h3 className="font-semibold mb-2">Facebook Pixel</h3>
                          <p className="text-sm text-muted-foreground">
                            Social media advertising and remarketing campaigns.
                          </p>
                        </div>
                        <div>
                          <h3 className="font-semibold mb-2">Hotjar</h3>
                          <p className="text-sm text-muted-foreground">
                            User behavior analysis and website optimization.
                          </p>
                        </div>
                        <div>
                          <h3 className="font-semibold mb-2">Zendesk</h3>
                          <p className="text-sm text-muted-foreground">
                            Customer support and live chat functionality.
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Managing Cookies */}
                <Card className="card-luxury">
                  <CardContent className="p-8">
                    <h2 className="text-luxury-title mb-6">Managing Your Cookie Preferences</h2>
                    
                    <div className="space-y-6">
                      <div>
                        <h3 className="font-heading text-lg font-semibold mb-3">On Our Website</h3>
                        <p className="text-muted-foreground mb-4">
                          Use our cookie consent tool to manage your preferences for our website specifically:
                        </p>
                        <Button 
                          onClick={handleManageCookies}
                          variant="outline"
                          className="border-luxury-gold text-luxury-gold hover:bg-luxury-gold hover:text-luxury-black"
                        >
                          <Settings className="w-4 h-4 mr-2" />
                          Manage Cookie Settings
                        </Button>
                      </div>

                      <div>
                        <h3 className="font-heading text-lg font-semibold mb-3">In Your Browser</h3>
                        <p className="text-muted-foreground mb-4">
                          You can also manage cookies through your browser settings. Here's how:
                        </p>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="p-4 bg-luxury-cream rounded-lg">
                            <h4 className="font-semibold mb-2">Chrome</h4>
                            <p className="text-sm text-muted-foreground">
                              Settings → Privacy and Security → Cookies and other site data
                            </p>
                          </div>
                          <div className="p-4 bg-luxury-cream rounded-lg">
                            <h4 className="font-semibold mb-2">Firefox</h4>
                            <p className="text-sm text-muted-foreground">
                              Preferences → Privacy & Security → Cookies and Site Data
                            </p>
                          </div>
                          <div className="p-4 bg-luxury-cream rounded-lg">
                            <h4 className="font-semibold mb-2">Safari</h4>
                            <p className="text-sm text-muted-foreground">
                              Preferences → Privacy → Manage Website Data
                            </p>
                          </div>
                          <div className="p-4 bg-luxury-cream rounded-lg">
                            <h4 className="font-semibold mb-2">Edge</h4>
                            <p className="text-sm text-muted-foreground">
                              Settings → Cookies and site permissions → Cookies and site data
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="p-4 border border-luxury-gold/20 rounded-lg">
                        <h4 className="font-semibold mb-2 text-luxury-gold">Important Note</h4>
                        <p className="text-sm text-muted-foreground">
                          Disabling certain cookies may affect the functionality of our website. 
                          For the best experience, we recommend allowing all cookies, but you always 
                          have the choice to customize your preferences.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Contact Information */}
                <Card className="card-luxury border-luxury-gold">
                  <CardContent className="p-8">
                    <h2 className="text-luxury-title mb-4">Questions About Cookies?</h2>
                    <p className="text-muted-foreground mb-4">
                      If you have any questions about our use of cookies or this policy, please don't hesitate to contact us:
                    </p>
                    <div className="space-y-2 text-sm">
                      <p><strong>Email:</strong> privacy@deseovivo.com</p>
                      <p><strong>Subject:</strong> Cookie Policy Inquiry</p>
                      <p><strong>Response Time:</strong> Within 48 hours</p>
                    </div>
                  </CardContent>
                </Card>

                {/* Updates */}
                <Card className="card-luxury">
                  <CardContent className="p-8">
                    <h2 className="text-luxury-title mb-4">Policy Updates</h2>
                    <p className="text-muted-foreground">
                      We may update this cookie policy from time to time to reflect changes in our practices 
                      or legal requirements. When we make significant changes, we will notify you through our 
                      website or by email. The "Last updated" date at the top of this policy indicates when 
                      the most recent changes were made.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default CookiePolicy;
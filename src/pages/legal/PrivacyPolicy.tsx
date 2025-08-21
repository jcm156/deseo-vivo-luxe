import { Helmet } from 'react-helmet';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Shield, Eye, Lock, Users, Database, Globe } from 'lucide-react';

const PrivacyPolicy = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | DeseoVivo Luxury Boutique - GDPR Compliant</title>
        <meta name="description" content="Our comprehensive privacy policy detailing how we collect, use, and protect your personal data. GDPR compliant with clear data rights information." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://deseovivo.com/legal/privacy-policy" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="section-padding">
          <div className="container-luxury">
            <div className="max-w-4xl mx-auto">
              {/* Header */}
              <div className="text-center mb-12">
                <div className="flex items-center justify-center space-x-2 mb-4">
                  <Shield className="w-8 h-8 text-luxury-gold" />
                  <Badge variant="outline" className="text-luxury-gold border-luxury-gold">
                    GDPR Compliant
                  </Badge>
                </div>
                <h1 className="text-luxury-hero mb-6">Privacy Policy</h1>
                <p className="text-luxury-subtitle max-w-2xl mx-auto">
                  Your privacy is fundamental to our luxury experience. This policy explains how we collect, 
                  use, and protect your personal information with the highest standards of data protection.
                </p>
                <p className="text-sm text-muted-foreground mt-4">
                  Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                </p>
              </div>

              <div className="space-y-8">
                {/* Quick Overview */}
                <Card className="card-luxury">
                  <CardContent className="p-8">
                    <h2 className="text-luxury-title mb-6">Privacy at a Glance</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                      <div className="text-center p-4">
                        <Eye className="w-8 h-8 text-luxury-gold mx-auto mb-3" />
                        <h3 className="font-heading font-semibold mb-2">Transparent Collection</h3>
                        <p className="text-sm text-muted-foreground">
                          We clearly explain what data we collect and why
                        </p>
                      </div>
                      <div className="text-center p-4">
                        <Lock className="w-8 h-8 text-luxury-gold mx-auto mb-3" />
                        <h3 className="font-heading font-semibold mb-2">Secure Processing</h3>
                        <p className="text-sm text-muted-foreground">
                          Your data is encrypted and protected at all times
                        </p>
                      </div>
                      <div className="text-center p-4">
                        <Users className="w-8 h-8 text-luxury-gold mx-auto mb-3" />
                        <h3 className="font-heading font-semibold mb-2">Your Rights</h3>
                        <p className="text-sm text-muted-foreground">
                          Full control over your personal information
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Data Collection */}
                <Card className="card-luxury">
                  <CardContent className="p-8">
                    <div className="flex items-center space-x-3 mb-6">
                      <Database className="w-6 h-6 text-luxury-gold" />
                      <h2 className="text-luxury-title">Information We Collect</h2>
                    </div>
                    
                    <div className="space-y-6">
                      <div>
                        <h3 className="font-heading text-lg font-semibold mb-3">Personal Information You Provide</h3>
                        <ul className="space-y-2 text-muted-foreground">
                          <li>• <strong>Account Information:</strong> Name, email address, password, date of birth (for age verification)</li>
                          <li>• <strong>Purchase Information:</strong> Billing address, shipping address, payment method details</li>
                          <li>• <strong>Communication Data:</strong> Messages, reviews, customer service inquiries</li>
                          <li>• <strong>Preferences:</strong> Product interests, communication preferences, accessibility needs</li>
                        </ul>
                      </div>

                      <div>
                        <h3 className="font-heading text-lg font-semibold mb-3">Information Collected Automatically</h3>
                        <ul className="space-y-2 text-muted-foreground">
                          <li>• <strong>Device Information:</strong> IP address, browser type, device type, operating system</li>
                          <li>• <strong>Usage Data:</strong> Pages visited, time spent, click patterns, search queries</li>
                          <li>• <strong>Technical Data:</strong> Cookies, local storage, session data</li>
                          <li>• <strong>Location Data:</strong> General location for shipping and tax calculations (not precise location)</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Legal Basis */}
                <Card className="card-luxury">
                  <CardContent className="p-8">
                    <h2 className="text-luxury-title mb-6">Legal Basis for Processing (GDPR)</h2>
                    <div className="space-y-4">
                      <div className="p-4 bg-luxury-cream rounded-lg">
                        <h3 className="font-semibold mb-2">Contractual Necessity</h3>
                        <p className="text-sm text-muted-foreground">
                          Processing your orders, delivering products, providing customer service, and managing your account.
                        </p>
                      </div>
                      <div className="p-4 bg-luxury-cream rounded-lg">
                        <h3 className="font-semibold mb-2">Legitimate Interest</h3>
                        <p className="text-sm text-muted-foreground">
                          Improving our services, fraud prevention, website analytics, and security measures.
                        </p>
                      </div>
                      <div className="p-4 bg-luxury-cream rounded-lg">
                        <h3 className="font-semibold mb-2">Consent</h3>
                        <p className="text-sm text-muted-foreground">
                          Marketing communications, cookies (non-essential), and personalized recommendations.
                        </p>
                      </div>
                      <div className="p-4 bg-luxury-cream rounded-lg">
                        <h3 className="font-semibold mb-2">Legal Obligation</h3>
                        <p className="text-sm text-muted-foreground">
                          Age verification, tax reporting, fraud prevention, and compliance with applicable laws.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Data Usage */}
                <Card className="card-luxury">
                  <CardContent className="p-8">
                    <h2 className="text-luxury-title mb-6">How We Use Your Information</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="font-heading font-semibold mb-3">Core Services</h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li>• Process and fulfill your orders</li>
                          <li>• Manage your account and preferences</li>
                          <li>• Provide customer support</li>
                          <li>• Process payments and handle returns</li>
                          <li>• Send order confirmations and updates</li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="font-heading font-semibold mb-3">Enhanced Experience</h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li>• Personalize product recommendations</li>
                          <li>• Improve website functionality</li>
                          <li>• Analyze usage patterns</li>
                          <li>• Prevent fraud and ensure security</li>
                          <li>• Send marketing communications (with consent)</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Data Sharing */}
                <Card className="card-luxury">
                  <CardContent className="p-8">
                    <div className="flex items-center space-x-3 mb-6">
                      <Globe className="w-6 h-6 text-luxury-gold" />
                      <h2 className="text-luxury-title">Data Sharing and Third Parties</h2>
                    </div>
                    
                    <div className="space-y-6">
                      <div className="p-4 border border-luxury-gold/20 rounded-lg">
                        <h3 className="font-semibold mb-2 text-luxury-gold">We Never Sell Your Data</h3>
                        <p className="text-sm text-muted-foreground">
                          Your personal information is never sold to third parties. We only share data when necessary 
                          for service delivery or legal compliance.
                        </p>
                      </div>

                      <div>
                        <h3 className="font-heading text-lg font-semibold mb-3">Trusted Service Providers</h3>
                        <ul className="space-y-2 text-muted-foreground">
                          <li>• <strong>Payment Processors:</strong> Secure payment processing (Stripe, PayPal)</li>
                          <li>• <strong>Shipping Partners:</strong> Order fulfillment and delivery</li>
                          <li>• <strong>Email Services:</strong> Transactional and marketing emails</li>
                          <li>• <strong>Analytics Providers:</strong> Website performance and user experience</li>
                          <li>• <strong>Customer Support:</strong> Help desk and live chat services</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Your Rights */}
                <Card className="card-luxury border-luxury-gold/20">
                  <CardContent className="p-8">
                    <h2 className="text-luxury-title mb-6">Your Data Rights (GDPR)</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div>
                          <h3 className="font-semibold mb-2">Right to Access</h3>
                          <p className="text-sm text-muted-foreground">
                            Request a copy of all personal data we hold about you.
                          </p>
                        </div>
                        <div>
                          <h3 className="font-semibold mb-2">Right to Rectification</h3>
                          <p className="text-sm text-muted-foreground">
                            Correct any inaccurate or incomplete personal data.
                          </p>
                        </div>
                        <div>
                          <h3 className="font-semibold mb-2">Right to Erasure</h3>
                          <p className="text-sm text-muted-foreground">
                            Request deletion of your personal data (right to be forgotten).
                          </p>
                        </div>
                        <div>
                          <h3 className="font-semibold mb-2">Right to Portability</h3>
                          <p className="text-sm text-muted-foreground">
                            Receive your data in a structured, machine-readable format.
                          </p>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <div>
                          <h3 className="font-semibold mb-2">Right to Object</h3>
                          <p className="text-sm text-muted-foreground">
                            Object to processing based on legitimate interests or marketing.
                          </p>
                        </div>
                        <div>
                          <h3 className="font-semibold mb-2">Right to Restrict</h3>
                          <p className="text-sm text-muted-foreground">
                            Limit how we process your personal data.
                          </p>
                        </div>
                        <div>
                          <h3 className="font-semibold mb-2">Right to Withdraw Consent</h3>
                          <p className="text-sm text-muted-foreground">
                            Withdraw consent for processing at any time.
                          </p>
                        </div>
                        <div>
                          <h3 className="font-semibold mb-2">Right to Complain</h3>
                          <p className="text-sm text-muted-foreground">
                            Lodge a complaint with your local data protection authority.
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-6 p-4 bg-luxury-gold/10 rounded-lg">
                      <p className="text-sm">
                        <strong>Exercise Your Rights:</strong> Contact us at privacy@deseovivo.com or use your 
                        account settings. We will respond within 30 days.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* Data Security */}
                <Card className="card-luxury">
                  <CardContent className="p-8">
                    <h2 className="text-luxury-title mb-6">Data Security and Retention</h2>
                    <div className="space-y-6">
                      <div>
                        <h3 className="font-heading text-lg font-semibold mb-3">Security Measures</h3>
                        <ul className="space-y-2 text-muted-foreground">
                          <li>• <strong>Encryption:</strong> All data is encrypted in transit and at rest using industry-standard protocols</li>
                          <li>• <strong>Access Controls:</strong> Strict access controls and employee training on data protection</li>
                          <li>• <strong>Regular Audits:</strong> Security assessments and vulnerability testing</li>
                          <li>• <strong>Secure Infrastructure:</strong> Data hosted on secure, compliant cloud platforms</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h3 className="font-heading text-lg font-semibold mb-3">Data Retention</h3>
                        <div className="space-y-3">
                          <div className="p-3 bg-luxury-cream rounded">
                            <strong>Account Data:</strong> Retained while your account is active and up to 7 years after closure for legal compliance
                          </div>
                          <div className="p-3 bg-luxury-cream rounded">
                            <strong>Order History:</strong> Retained for 7 years for tax and warranty purposes
                          </div>
                          <div className="p-3 bg-luxury-cream rounded">
                            <strong>Marketing Data:</strong> Retained until you opt out or request deletion
                          </div>
                          <div className="p-3 bg-luxury-cream rounded">
                            <strong>Analytics Data:</strong> Anonymized after 26 months, in line with GDPR best practices
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* International Transfers */}
                <Card className="card-luxury">
                  <CardContent className="p-8">
                    <h2 className="text-luxury-title mb-6">International Data Transfers</h2>
                    <p className="text-muted-foreground mb-4">
                      We may transfer your personal data to countries outside the European Economic Area (EEA) 
                      for processing by our service providers. When we do this, we ensure appropriate safeguards 
                      are in place:
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• <strong>Adequacy Decisions:</strong> Transfers to countries with adequate data protection levels</li>
                      <li>• <strong>Standard Contractual Clauses:</strong> EU-approved contracts ensuring GDPR compliance</li>
                      <li>• <strong>Certification Programs:</strong> Partners certified under privacy frameworks</li>
                    </ul>
                  </CardContent>
                </Card>

                {/* Contact Information */}
                <Card className="card-luxury border-luxury-gold">
                  <CardContent className="p-8">
                    <h2 className="text-luxury-title mb-6">Contact Our Privacy Team</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="font-semibold mb-3">Data Protection Officer</h3>
                        <div className="space-y-2 text-sm">
                          <p><strong>Email:</strong> privacy@deseovivo.com</p>
                          <p><strong>Response Time:</strong> Within 30 days</p>
                          <p><strong>Subject Line:</strong> "Data Privacy Request - [Your Request Type]"</p>
                        </div>
                      </div>
                      <div>
                        <h3 className="font-semibold mb-3">Supervisory Authority</h3>
                        <div className="space-y-2 text-sm text-muted-foreground">
                          <p>You have the right to lodge a complaint with your local data protection authority if you believe we have not handled your personal data appropriately.</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Policy Updates */}
                <Card className="card-luxury">
                  <CardContent className="p-8">
                    <h2 className="text-luxury-title mb-4">Policy Updates</h2>
                    <p className="text-muted-foreground mb-4">
                      We may update this privacy policy from time to time to reflect changes in our practices 
                      or legal requirements. We will notify you of any material changes by:
                    </p>
                    <ul className="space-y-2 text-muted-foreground mb-4">
                      <li>• Email notification to registered users</li>
                      <li>• Prominent notice on our website</li>
                      <li>• Updated "Last Modified" date at the top of this policy</li>
                    </ul>
                    <p className="text-sm text-muted-foreground">
                      Your continued use of our services after any changes indicates your acceptance of the updated policy.
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

export default PrivacyPolicy;
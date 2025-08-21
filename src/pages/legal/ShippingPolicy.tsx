import { Helmet } from 'react-helmet';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Truck, Package, Shield, Clock, Globe, Lock, MapPin, CreditCard } from 'lucide-react';

const ShippingPolicy = () => {
  return (
    <>
      <Helmet>
        <title>Shipping Policy | DeseoVivo - Discreet Luxury Delivery</title>
        <meta name="description" content="Comprehensive shipping policy for luxury intimate products. Discreet packaging, delivery timeframes, international shipping, and privacy protection details." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://deseovivo.com/legal/shipping-policy" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="section-padding">
          <div className="container-luxury">
            <div className="max-w-4xl mx-auto">
              {/* Header */}
              <div className="text-center mb-12">
                <div className="flex items-center justify-center space-x-2 mb-4">
                  <Package className="w-8 h-8 text-luxury-gold" />
                  <Badge variant="outline" className="text-luxury-gold border-luxury-gold">
                    100% Discreet
                  </Badge>
                </div>
                <h1 className="text-luxury-hero mb-6">Shipping Policy</h1>
                <p className="text-luxury-subtitle max-w-2xl mx-auto">
                  Your privacy is paramount. We ensure completely discreet packaging and secure delivery 
                  of your luxury intimate wellness products with the utmost confidentiality and care.
                </p>
                <p className="text-sm text-muted-foreground mt-4">
                  Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                </p>
              </div>

              <div className="space-y-8">
                {/* Discreet Shipping Promise */}
                <Card className="card-luxury border-luxury-gold/20">
                  <CardContent className="p-8">
                    <div className="text-center mb-6">
                      <Shield className="w-12 h-12 text-luxury-gold mx-auto mb-4" />
                      <h2 className="text-luxury-title mb-4">100% Discreet Shipping Guarantee</h2>
                      <p className="text-luxury-subtitle">
                        Your privacy is our absolute priority from order to delivery
                      </p>
                    </div>
                    
                    <div className="grid md:grid-cols-3 gap-6">
                      <div className="text-center p-4">
                        <Package className="w-8 h-8 text-luxury-gold mx-auto mb-3" />
                        <h3 className="font-semibold mb-2">Plain Packaging</h3>
                        <p className="text-sm text-muted-foreground">
                          Unmarked boxes with no product or company branding visible
                        </p>
                      </div>
                      <div className="text-center p-4">
                        <Lock className="w-8 h-8 text-luxury-gold mx-auto mb-3" />
                        <h3 className="font-semibold mb-2">Generic Labels</h3>
                        <p className="text-sm text-muted-foreground">
                          Neutral sender information with no adult content indication
                        </p>
                      </div>
                      <div className="text-center p-4">
                        <Shield className="w-8 h-8 text-luxury-gold mx-auto mb-3" />
                        <h3 className="font-semibold mb-2">Secure Sealing</h3>
                        <p className="text-sm text-muted-foreground">
                          Tamper-evident security measures for your protection
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Shipping Options */}
                <Card className="card-luxury">
                  <CardContent className="p-8">
                    <div className="flex items-center space-x-3 mb-6">
                      <Truck className="w-6 h-6 text-luxury-gold" />
                      <h2 className="text-luxury-title">Shipping Options</h2>
                    </div>
                    
                    <div className="space-y-6">
                      {/* Domestic Shipping */}
                      <div>
                        <h3 className="font-heading text-lg font-semibold mb-4">Domestic Shipping (United States)</h3>
                        <div className="grid md:grid-cols-3 gap-4">
                          <div className="p-4 bg-luxury-cream rounded-lg">
                            <div className="flex items-center space-x-2 mb-2">
                              <Clock className="w-5 h-5 text-luxury-gold" />
                              <h4 className="font-semibold">Standard Shipping</h4>
                            </div>
                            <p className="text-sm text-muted-foreground mb-2">3-5 business days</p>
                            <p className="text-sm font-semibold">FREE on orders $75+</p>
                            <p className="text-xs text-muted-foreground">$8.95 on orders under $75</p>
                          </div>
                          
                          <div className="p-4 bg-luxury-cream rounded-lg">
                            <div className="flex items-center space-x-2 mb-2">
                              <Truck className="w-5 h-5 text-luxury-gold" />
                              <h4 className="font-semibold">Express Shipping</h4>
                            </div>
                            <p className="text-sm text-muted-foreground mb-2">1-2 business days</p>
                            <p className="text-sm font-semibold">$19.95</p>
                            <p className="text-xs text-muted-foreground">FREE on orders $200+</p>
                          </div>
                          
                          <div className="p-4 bg-luxury-cream rounded-lg">
                            <div className="flex items-center space-x-2 mb-2">
                              <Package className="w-5 h-5 text-luxury-gold" />
                              <h4 className="font-semibold">Overnight Shipping</h4>
                            </div>
                            <p className="text-sm text-muted-foreground mb-2">Next business day</p>
                            <p className="text-sm font-semibold">$29.95</p>
                            <p className="text-xs text-muted-foreground">Order by 2 PM EST</p>
                          </div>
                        </div>
                      </div>

                      {/* International Shipping */}
                      <div>
                        <h3 className="font-heading text-lg font-semibold mb-4">International Shipping</h3>
                        <div className="p-4 bg-luxury-gold/10 rounded-lg mb-4">
                          <div className="flex items-start space-x-3">
                            <Globe className="w-5 h-5 text-luxury-gold flex-shrink-0 mt-0.5" />
                            <div>
                              <h4 className="font-semibold text-luxury-gold mb-1">Important Notice</h4>
                              <p className="text-sm text-muted-foreground">
                                International shipping availability varies by destination due to local laws 
                                regarding adult products. Please verify legality in your country before ordering.
                              </p>
                            </div>
                          </div>
                        </div>
                        
                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="p-4 bg-luxury-cream rounded-lg">
                            <h4 className="font-semibold mb-2">Standard International</h4>
                            <p className="text-sm text-muted-foreground mb-2">7-14 business days</p>
                            <p className="text-sm font-semibold">$24.95 - $39.95</p>
                            <p className="text-xs text-muted-foreground">Varies by destination</p>
                          </div>
                          
                          <div className="p-4 bg-luxury-cream rounded-lg">
                            <h4 className="font-semibold mb-2">Express International</h4>
                            <p className="text-sm text-muted-foreground mb-2">3-7 business days</p>
                            <p className="text-sm font-semibold">$49.95 - $79.95</p>
                            <p className="text-xs text-muted-foreground">Select countries only</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Processing Time */}
                <Card className="card-luxury">
                  <CardContent className="p-8">
                    <div className="flex items-center space-x-3 mb-6">
                      <Clock className="w-6 h-6 text-luxury-gold" />
                      <h2 className="text-luxury-title">Order Processing</h2>
                    </div>
                    
                    <div className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="p-4 bg-luxury-cream rounded-lg">
                          <h3 className="font-semibold mb-3">Standard Processing</h3>
                          <ul className="text-sm space-y-2 text-muted-foreground">
                            <li>• <strong>Business Days:</strong> 1-2 business days</li>
                            <li>• <strong>Weekends:</strong> Orders placed Friday-Sunday ship Monday</li>
                            <li>• <strong>Cut-off Time:</strong> 2:00 PM EST for same-day processing</li>
                            <li>• <strong>Holidays:</strong> Extended processing during peak seasons</li>
                          </ul>
                        </div>
                        
                        <div className="p-4 bg-luxury-cream rounded-lg">
                          <h3 className="font-semibold mb-3">Expedited Processing</h3>
                          <ul className="text-sm space-y-2 text-muted-foreground">
                            <li>• <strong>Rush Orders:</strong> Same-day processing available</li>
                            <li>• <strong>Express/Overnight:</strong> Processed within 4 hours</li>
                            <li>• <strong>Business Hours:</strong> Monday-Friday, 8 AM - 5 PM EST</li>
                            <li>• <strong>Special Requests:</strong> Contact customer service</li>
                          </ul>
                        </div>
                      </div>

                      <div className="p-4 border border-luxury-gold/20 rounded-lg">
                        <h4 className="font-semibold mb-2 text-luxury-gold">Order Confirmation</h4>
                        <p className="text-sm text-muted-foreground">
                          You'll receive an order confirmation email immediately after purchase, followed by 
                          a shipping confirmation with tracking information once your order ships. All emails 
                          are sent from a discreet sender address.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Packaging Details */}
                <Card className="card-luxury">
                  <CardContent className="p-8">
                    <h2 className="text-luxury-title mb-6">Discreet Packaging Details</h2>
                    
                    <div className="space-y-6">
                      <div>
                        <h3 className="font-heading text-lg font-semibold mb-4">What You'll Receive</h3>
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="font-semibold mb-3 text-luxury-gold">Outer Packaging</h4>
                            <ul className="text-sm space-y-2 text-muted-foreground">
                              <li>• Plain brown or white shipping box</li>
                              <li>• Generic return address (no "DeseoVivo" branding)</li>
                              <li>• Neutral sender name on shipping label</li>
                              <li>• No product descriptions or images</li>
                              <li>• Standard postal/courier labeling only</li>
                            </ul>
                          </div>
                          
                          <div>
                            <h4 className="font-semibold mb-3 text-luxury-gold">Inner Packaging</h4>
                            <ul className="text-sm space-y-2 text-muted-foreground">
                              <li>• Products in individual sealed bags</li>
                              <li>• Protective bubble wrap or padding</li>
                              <li>• Discreet packing slip (no explicit descriptions)</li>
                              <li>• Quality assurance seal</li>
                              <li>• Care instructions included</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className="p-4 bg-luxury-gold/10 rounded-lg border border-luxury-gold/20">
                        <h4 className="font-semibold text-luxury-gold mb-2">Privacy Guarantee</h4>
                        <p className="text-sm text-muted-foreground">
                          No one will know what's inside your package. Our discreet packaging ensures complete 
                          privacy from the moment we ship until you open your order in the comfort of your home.
                        </p>
                      </div>

                      <div>
                        <h3 className="font-heading text-lg font-semibold mb-4">Package Tracking</h3>
                        <div className="space-y-3">
                          <div className="p-3 bg-luxury-cream rounded">
                            <h4 className="font-semibold mb-1">Tracking Information</h4>
                            <p className="text-sm text-muted-foreground">
                              Sent via discreet email with generic subject line and sender name
                            </p>
                          </div>
                          <div className="p-3 bg-luxury-cream rounded">
                            <h4 className="font-semibold mb-1">Delivery Updates</h4>
                            <p className="text-sm text-muted-foreground">
                              SMS and email notifications available (optional, privacy-focused)
                            </p>
                          </div>
                          <div className="p-3 bg-luxury-cream rounded">
                            <h4 className="font-semibold mb-1">Carrier Information</h4>
                            <p className="text-sm text-muted-foreground">
                              FedEx, UPS, USPS - all with discreet sender information
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Delivery Options */}
                <Card className="card-luxury">
                  <CardContent className="p-8">
                    <div className="flex items-center space-x-3 mb-6">
                      <MapPin className="w-6 h-6 text-luxury-gold" />
                      <h2 className="text-luxury-title">Delivery Options</h2>
                    </div>
                    
                    <div className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="p-4 bg-luxury-cream rounded-lg">
                          <h3 className="font-semibold mb-3">Standard Delivery</h3>
                          <ul className="text-sm space-y-2 text-muted-foreground">
                            <li>• Home or office address</li>
                            <li>• Signature required for orders over $100</li>
                            <li>• Safe drop-off if no one home (under $100)</li>
                            <li>• Delivery during business hours</li>
                          </ul>
                        </div>
                        
                        <div className="p-4 bg-luxury-cream rounded-lg">
                          <h3 className="font-semibold mb-3">Alternative Delivery</h3>
                          <ul className="text-sm space-y-2 text-muted-foreground">
                            <li>• P.O. Box delivery available</li>
                            <li>• Hold at facility option</li>
                            <li>• Workplace delivery (if appropriate)</li>
                            <li>• Special delivery instructions</li>
                          </ul>
                        </div>
                      </div>

                      <div className="p-4 border border-luxury-gold/20 rounded-lg">
                        <h4 className="font-semibold mb-2 text-luxury-gold">Delivery Privacy</h4>
                        <p className="text-sm text-muted-foreground">
                          All deliveries are made with complete discretion. Delivery personnel have no knowledge 
                          of package contents, and all packages appear as standard commercial shipments.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* International Shipping Details */}
                <Card className="card-luxury">
                  <CardContent className="p-8">
                    <div className="flex items-center space-x-3 mb-6">
                      <Globe className="w-6 h-6 text-luxury-gold" />
                      <h2 className="text-luxury-title">International Shipping</h2>
                    </div>
                    
                    <div className="space-y-6">
                      <div>
                        <h3 className="font-heading text-lg font-semibold mb-4">Shipping Zones</h3>
                        <div className="grid md:grid-cols-3 gap-4">
                          <div className="p-4 bg-luxury-cream rounded-lg">
                            <h4 className="font-semibold mb-2 text-green-700">Zone 1 - Available</h4>
                            <p className="text-sm text-muted-foreground mb-2">
                              Canada, UK, Australia, Germany, France, Netherlands
                            </p>
                            <p className="text-xs text-green-600">Full product range available</p>
                          </div>
                          
                          <div className="p-4 bg-luxury-cream rounded-lg">
                            <h4 className="font-semibold mb-2 text-yellow-700">Zone 2 - Limited</h4>
                            <p className="text-sm text-muted-foreground mb-2">
                              Japan, South Korea, Singapore, New Zealand
                            </p>
                            <p className="text-xs text-yellow-600">Selected products only</p>
                          </div>
                          
                          <div className="p-4 bg-luxury-cream rounded-lg">
                            <h4 className="font-semibold mb-2 text-red-700">Zone 3 - Restricted</h4>
                            <p className="text-sm text-muted-foreground mb-2">
                              Various countries with strict import laws
                            </p>
                            <p className="text-xs text-red-600">Shipping not available</p>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h3 className="font-heading text-lg font-semibold mb-4">Customs and Duties</h3>
                        <div className="space-y-4">
                          <div className="p-4 bg-luxury-gold/10 rounded-lg">
                            <h4 className="font-semibold text-luxury-gold mb-2">Important Information</h4>
                            <ul className="text-sm text-muted-foreground space-y-1">
                              <li>• Customers are responsible for all customs duties and taxes</li>
                              <li>• Packages may be delayed by customs processing</li>
                              <li>• We declare packages accurately but discreetly</li>
                              <li>• Refused packages incur return shipping charges</li>
                            </ul>
                          </div>
                          
                          <div className="grid md:grid-cols-2 gap-4">
                            <div className="p-4 bg-luxury-cream rounded-lg">
                              <h4 className="font-semibold mb-2">Documentation</h4>
                              <ul className="text-sm text-muted-foreground space-y-1">
                                <li>• Discreet product descriptions</li>
                                <li>• Accurate value declarations</li>
                                <li>• Required customs forms</li>
                                <li>• Adult content warnings (where required)</li>
                              </ul>
                            </div>
                            
                            <div className="p-4 bg-luxury-cream rounded-lg">
                              <h4 className="font-semibold mb-2">Delivery Times</h4>
                              <ul className="text-sm text-muted-foreground space-y-1">
                                <li>• Standard: 7-14 business days</li>
                                <li>• Express: 3-7 business days</li>
                                <li>• Plus customs processing time</li>
                                <li>• Tracking available throughout</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Shipping Costs */}
                <Card className="card-luxury">
                  <CardContent className="p-8">
                    <div className="flex items-center space-x-3 mb-6">
                      <CreditCard className="w-6 h-6 text-luxury-gold" />
                      <h2 className="text-luxury-title">Shipping Costs</h2>
                    </div>
                    
                    <div className="space-y-6">
                      <div>
                        <h3 className="font-heading text-lg font-semibold mb-4">Domestic (US) Rates</h3>
                        <div className="overflow-x-auto">
                          <table className="w-full text-sm">
                            <thead>
                              <tr className="border-b border-border">
                                <th className="text-left py-3 font-semibold">Shipping Method</th>
                                <th className="text-left py-3 font-semibold">Delivery Time</th>
                                <th className="text-left py-3 font-semibold">Cost</th>
                                <th className="text-left py-3 font-semibold">Free Shipping</th>
                              </tr>
                            </thead>
                            <tbody className="text-muted-foreground">
                              <tr className="border-b border-border">
                                <td className="py-3">Standard Shipping</td>
                                <td className="py-3">3-5 business days</td>
                                <td className="py-3">$8.95</td>
                                <td className="py-3">Orders $75+</td>
                              </tr>
                              <tr className="border-b border-border">
                                <td className="py-3">Express Shipping</td>
                                <td className="py-3">1-2 business days</td>
                                <td className="py-3">$19.95</td>
                                <td className="py-3">Orders $200+</td>
                              </tr>
                              <tr>
                                <td className="py-3">Overnight Shipping</td>
                                <td className="py-3">Next business day</td>
                                <td className="py-3">$29.95</td>
                                <td className="py-3">Not available</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>

                      <div>
                        <h3 className="font-heading text-lg font-semibold mb-4">International Rates</h3>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="p-4 bg-luxury-cream rounded-lg">
                            <h4 className="font-semibold mb-2">Zone 1 Countries</h4>
                            <ul className="text-sm text-muted-foreground space-y-1">
                              <li>• Standard: $24.95</li>
                              <li>• Express: $49.95</li>
                              <li>• Free shipping on orders $300+</li>
                            </ul>
                          </div>
                          
                          <div className="p-4 bg-luxury-cream rounded-lg">
                            <h4 className="font-semibold mb-2">Zone 2 Countries</h4>
                            <ul className="text-sm text-muted-foreground space-y-1">
                              <li>• Standard: $39.95</li>
                              <li>• Express: $79.95</li>
                              <li>• Free shipping on orders $500+</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Shipping Restrictions */}
                <Card className="card-luxury border-red-200">
                  <CardContent className="p-8">
                    <h2 className="text-luxury-title mb-6">Shipping Restrictions</h2>
                    
                    <div className="space-y-6">
                      <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                        <h3 className="font-semibold text-red-800 mb-3">Countries We Cannot Ship To</h3>
                        <p className="text-sm text-red-700 mb-3">
                          Due to local laws and regulations regarding adult products, we cannot ship to the following locations:
                        </p>
                        <div className="grid md:grid-cols-2 gap-4 text-sm text-red-600">
                          <ul className="space-y-1">
                            <li>• China (mainland)</li>
                            <li>• India</li>
                            <li>• Malaysia</li>
                            <li>• Thailand</li>
                            <li>• United Arab Emirates</li>
                          </ul>
                          <ul className="space-y-1">
                            <li>• Saudi Arabia</li>
                            <li>• Pakistan</li>
                            <li>• Bangladesh</li>
                            <li>• Indonesia</li>
                            <li>• And other restricted regions</li>
                          </ul>
                        </div>
                      </div>

                      <div>
                        <h3 className="font-heading text-lg font-semibold mb-4">Legal Compliance</h3>
                        <div className="space-y-3 text-muted-foreground">
                          <p>
                            <strong>Customer Responsibility:</strong> By placing an order, you confirm that the purchase 
                            and possession of adult products is legal in your jurisdiction.
                          </p>
                          <p>
                            <strong>Age Verification:</strong> All international orders are subject to age verification 
                            requirements. Additional documentation may be requested.
                          </p>
                          <p>
                            <strong>Customs Seizure:</strong> We are not responsible for packages seized by customs 
                            or delayed due to local regulations. No refunds are provided for customs-related issues.
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Contact Information */}
                <Card className="card-luxury border-luxury-gold">
                  <CardContent className="p-8">
                    <h2 className="text-luxury-title mb-6">Shipping Support</h2>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="font-semibold mb-3">Shipping Questions</h3>
                        <div className="space-y-2 text-sm">
                          <p><strong>Email:</strong> shipping@deseovivo.com</p>
                          <p><strong>Subject:</strong> Shipping Inquiry - Order #[Number]</p>
                          <p><strong>Response Time:</strong> Within 4 hours (business days)</p>
                          <p><strong>Hours:</strong> Monday-Friday, 8 AM - 8 PM EST</p>
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="font-semibold mb-3">Track Your Order</h3>
                        <div className="space-y-2 text-sm text-muted-foreground">
                          <p>Tracking information is sent via email once your order ships.</p>
                          <p>For immediate tracking updates, have your order number ready when contacting support.</p>
                          <p>All tracking communications are sent from discreet email addresses.</p>
                        </div>
                      </div>
                    </div>
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

export default ShippingPolicy;
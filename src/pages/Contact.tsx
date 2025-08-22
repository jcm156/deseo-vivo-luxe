import { Helmet } from 'react-helmet';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Contact form submitted');
  };

  return (
    <>
      <Helmet>
        <title>Contact Us | DeseoVivo Luxury Boutique</title>
        <meta name="description" content="Get in touch with our customer care team. Discreet, professional support for all your questions about luxury intimate wellness products." />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        <main>
          {/* Hero Section */}
          <section className="bg-luxury-charcoal text-luxury-white py-16">
            <div className="container-luxury text-center">
              <h1 className="text-luxury-title text-luxury-white mb-4">
                Contact Our Team
              </h1>
              <p className="text-luxury-subtitle text-luxury-white/70 max-w-2xl mx-auto">
                We're here to provide discreet, professional assistance with your questions 
                about our luxury intimate wellness products.
              </p>
            </div>
          </section>

          {/* Contact Information & Form */}
          <section className="section-padding">
            <div className="container-luxury">
              <div className="grid lg:grid-cols-2 gap-12">
                {/* Contact Information */}
                <div className="space-y-8">
                  <div>
                    <h2 className="text-2xl font-heading font-semibold mb-6">Get in Touch</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      Our customer care specialists are trained to provide confidential, 
                      expert guidance on product selection, usage, and care. All communications 
                      are handled with the utmost discretion.
                    </p>
                  </div>

                  <div className="space-y-6">
                    <Card className="card-luxury">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className="bg-luxury-gold/10 p-3 rounded-lg">
                            <Mail className="h-6 w-6 text-luxury-gold" />
                          </div>
                          <div>
                            <h3 className="font-semibold mb-1">Email Support</h3>
                            <p className="text-muted-foreground text-sm mb-2">
                              Get detailed answers to your questions
                            </p>
                            <p className="text-luxury-gold font-medium">support@deseovivo.com</p>
                            <p className="text-xs text-muted-foreground">
                              Response within 24 hours
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="card-luxury">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className="bg-luxury-gold/10 p-3 rounded-lg">
                            <Phone className="h-6 w-6 text-luxury-gold" />
                          </div>
                          <div>
                            <h3 className="font-semibold mb-1">VIP Concierge</h3>
                            <p className="text-muted-foreground text-sm mb-2">
                              Personalized product recommendations
                            </p>
                            <p className="text-luxury-gold font-medium">concierge@deseovivo.com</p>
                            <p className="text-xs text-muted-foreground">
                              Premium support for VIP members
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="card-luxury">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className="bg-luxury-gold/10 p-3 rounded-lg">
                            <Clock className="h-6 w-6 text-luxury-gold" />
                          </div>
                          <div>
                            <h3 className="font-semibold mb-1">Business Hours</h3>
                            <p className="text-muted-foreground text-sm mb-2">
                              When our team is available
                            </p>
                            <div className="space-y-1 text-sm">
                              <p>Monday - Friday: 9:00 AM - 6:00 PM PST</p>
                              <p>Saturday: 10:00 AM - 4:00 PM PST</p>
                              <p>Sunday: Closed</p>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="card-luxury">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className="bg-luxury-gold/10 p-3 rounded-lg">
                            <MapPin className="h-6 w-6 text-luxury-gold" />
                          </div>
                          <div>
                            <h3 className="font-semibold mb-1">Shipping & Returns</h3>
                            <p className="text-muted-foreground text-sm mb-2">
                              All packages shipped discreetly
                            </p>
                            <div className="space-y-1 text-sm">
                              <p>• Plain, unmarked packaging</p>
                              <p>• 30-day return policy</p>
                              <p>• Free shipping over $200</p>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                {/* Contact Form */}
                <div>
                  <Card className="card-luxury">
                    <CardHeader>
                      <CardTitle>Send Us a Message</CardTitle>
                      <p className="text-muted-foreground text-sm">
                        All inquiries are handled with complete confidentiality. 
                        We'll respond within 24 hours.
                      </p>
                    </CardHeader>
                    <CardContent>
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="firstName">First Name*</Label>
                            <Input id="firstName" required />
                          </div>
                          <div>
                            <Label htmlFor="lastName">Last Name*</Label>
                            <Input id="lastName" required />
                          </div>
                        </div>

                        <div>
                          <Label htmlFor="email">Email Address*</Label>
                          <Input id="email" type="email" required />
                        </div>

                        <div>
                          <Label htmlFor="phone">Phone Number (Optional)</Label>
                          <Input id="phone" type="tel" />
                        </div>

                        <div>
                          <Label htmlFor="subject">Subject*</Label>
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="Select a topic" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="product-inquiry">Product Inquiry</SelectItem>
                              <SelectItem value="order-status">Order Status</SelectItem>
                              <SelectItem value="returns">Returns & Exchanges</SelectItem>
                              <SelectItem value="technical-support">Technical Support</SelectItem>
                              <SelectItem value="vip-services">VIP Services</SelectItem>
                              <SelectItem value="feedback">Feedback</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div>
                          <Label htmlFor="message">Message*</Label>
                          <Textarea 
                            id="message" 
                            placeholder="Please describe how we can help you..."
                            className="min-h-32"
                            required 
                          />
                        </div>

                        <div className="bg-luxury-cream/30 p-4 rounded-lg">
                          <p className="text-sm text-muted-foreground">
                            <strong>Privacy Guarantee:</strong> Your personal information and 
                            inquiries are kept strictly confidential. We never share customer 
                            data with third parties.
                          </p>
                        </div>

                        <Button type="submit" className="w-full btn-luxury">
                          <Send className="h-4 w-4 mr-2" />
                          Send Message
                        </Button>
                      </form>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="section-padding bg-luxury-cream/30">
            <div className="container-luxury">
              <div className="text-center mb-12">
                <h2 className="text-2xl font-heading font-semibold mb-4">
                  Frequently Asked Questions
                </h2>
                <p className="text-muted-foreground">
                  Quick answers to common questions about our products and services.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                <Card className="card-luxury">
                  <CardHeader>
                    <CardTitle className="text-lg">How discreet is your packaging?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      All orders are shipped in plain, unmarked boxes with no indication 
                      of the contents or our brand name. Billing appears as "DV Wellness" 
                      on statements.
                    </p>
                  </CardContent>
                </Card>

                <Card className="card-luxury">
                  <CardHeader>
                    <CardTitle className="text-lg">What is your return policy?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      We offer a 30-day return policy for unopened items in original 
                      packaging. For hygiene reasons, some products cannot be returned 
                      once opened.
                    </p>
                  </CardContent>
                </Card>

                <Card className="card-luxury">
                  <CardHeader>
                    <CardTitle className="text-lg">Are your products body-safe?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Absolutely. All our products are made from premium, body-safe 
                      materials including medical-grade silicone, and comply with 
                      international safety standards.
                    </p>
                  </CardContent>
                </Card>

                <Card className="card-luxury">
                  <CardHeader>
                    <CardTitle className="text-lg">Do you offer product guidance?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Yes! Our VIP concierge service provides personalized product 
                      recommendations based on your preferences and needs, with complete 
                      confidentiality.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Contact;
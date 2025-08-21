import { Helmet } from 'react-helmet';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Scale, ShieldCheck, AlertTriangle, CreditCard, Truck, RotateCcw } from 'lucide-react';

const Terms = () => {
  return (
    <>
      <Helmet>
        <title>Terms & Conditions | DeseoVivo Luxury Boutique - Adult Product Terms</title>
        <meta name="description" content="Complete terms and conditions for DeseoVivo luxury intimate wellness products. Adult product specific terms, purchase agreements, and liability information." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://deseovivo.com/legal/terms" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="section-padding">
          <div className="container-luxury">
            <div className="max-w-4xl mx-auto">
              {/* Header */}
              <div className="text-center mb-12">
                <div className="flex items-center justify-center space-x-2 mb-4">
                  <Scale className="w-8 h-8 text-luxury-gold" />
                  <Badge variant="outline" className="text-luxury-gold border-luxury-gold">
                    Legal Agreement
                  </Badge>
                </div>
                <h1 className="text-luxury-hero mb-6">Terms & Conditions</h1>
                <p className="text-luxury-subtitle max-w-2xl mx-auto">
                  These terms govern your use of DeseoVivo and the purchase of our luxury intimate 
                  wellness products. Please read these terms carefully before making a purchase.
                </p>
                <p className="text-sm text-muted-foreground mt-4">
                  Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                </p>
              </div>

              <div className="space-y-8">
                {/* Important Notice */}
                <Card className="card-luxury border-luxury-gold/20">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-4">
                      <AlertTriangle className="w-8 h-8 text-luxury-gold flex-shrink-0 mt-1" />
                      <div>
                        <h2 className="text-luxury-title mb-4">Important Adult Content Notice</h2>
                        <div className="space-y-3 text-muted-foreground">
                          <p>
                            <strong>Age Requirement:</strong> You must be at least 18 years of age to access this website 
                            and purchase our products. By using this site, you confirm that you are of legal age.
                          </p>
                          <p>
                            <strong>Adult Products:</strong> Our products are designed for adult use only and are intended 
                            for intimate wellness and personal pleasure. All purchases are discreet and confidential.
                          </p>
                          <p>
                            <strong>Legal Compliance:</strong> You are responsible for ensuring that possession and use of 
                            our products is legal in your jurisdiction.
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Acceptance of Terms */}
                <Card className="card-luxury">
                  <CardContent className="p-8">
                    <h2 className="text-luxury-title mb-6">1. Acceptance of Terms</h2>
                    <div className="space-y-4 text-muted-foreground">
                      <p>
                        By accessing and using the DeseoVivo website ("the Site") and purchasing our products 
                        ("the Service"), you accept and agree to be bound by the terms and provision of this agreement.
                      </p>
                      <p>
                        These Terms of Service ("Terms") constitute a legally binding agreement between you ("User", "Customer") 
                        and DeseoVivo ("Company", "we", "us", "our") regarding your use of our website and services.
                      </p>
                      <div className="p-4 bg-luxury-cream rounded-lg">
                        <p className="font-semibold mb-2">If you do not agree to these terms:</p>
                        <p className="text-sm">
                          Please do not access or use our website. Your continued use of the site indicates 
                          your acceptance of these terms and any future modifications.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Account Registration */}
                <Card className="card-luxury">
                  <CardContent className="p-8">
                    <h2 className="text-luxury-title mb-6">2. Account Registration and Security</h2>
                    <div className="space-y-4 text-muted-foreground">
                      <p>
                        <strong>Account Creation:</strong> To make purchases, you must create an account providing 
                        accurate and complete information. You are responsible for maintaining the confidentiality 
                        of your account credentials.
                      </p>
                      <p>
                        <strong>Age Verification:</strong> During registration, you confirm that you are at least 
                        18 years old. We reserve the right to verify your age and may request additional documentation.
                      </p>
                      <p>
                        <strong>Account Security:</strong> You are responsible for all activities that occur under 
                        your account. Notify us immediately of any unauthorized use or security breach.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* Products and Services */}
                <Card className="card-luxury">
                  <CardContent className="p-8">
                    <div className="flex items-center space-x-3 mb-6">
                      <ShieldCheck className="w-6 h-6 text-luxury-gold" />
                      <h2 className="text-luxury-title">3. Products and Services</h2>
                    </div>
                    
                    <div className="space-y-6">
                      <div>
                        <h3 className="font-heading text-lg font-semibold mb-3">Product Categories</h3>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="p-4 bg-luxury-cream rounded-lg">
                            <h4 className="font-semibold mb-2">Luxury Intimate Wellness</h4>
                            <p className="text-sm text-muted-foreground">
                              Premium products designed for personal pleasure and intimate wellness, 
                              crafted with body-safe materials.
                            </p>
                          </div>
                          <div className="p-4 bg-luxury-cream rounded-lg">
                            <h4 className="font-semibold mb-2">Couples Collections</h4>
                            <p className="text-sm text-muted-foreground">
                              Products designed to enhance intimacy between consenting adults in 
                              committed relationships.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h3 className="font-heading text-lg font-semibold mb-3">Product Standards</h3>
                        <ul className="space-y-2 text-muted-foreground">
                          <li>• <strong>Body-Safe Materials:</strong> All products are made from medical-grade, body-safe materials</li>
                          <li>• <strong>Quality Assurance:</strong> Each product undergoes rigorous quality testing</li>
                          <li>• <strong>Discretion:</strong> All products are packaged and shipped discreetly</li>
                          <li>• <strong>Authenticity:</strong> We sell only authentic products from verified manufacturers</li>
                        </ul>
                      </div>

                      <div>
                        <h3 className="font-heading text-lg font-semibold mb-3">Product Information</h3>
                        <p className="text-muted-foreground mb-3">
                          We strive to provide accurate product descriptions, images, and specifications. However:
                        </p>
                        <ul className="space-y-2 text-muted-foreground">
                          <li>• Product colors may vary slightly due to monitor settings</li>
                          <li>• Dimensions and weights are approximate</li>
                          <li>• Product availability is subject to change</li>
                          <li>• We reserve the right to modify product specifications</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Ordering and Payment */}
                <Card className="card-luxury">
                  <CardContent className="p-8">
                    <div className="flex items-center space-x-3 mb-6">
                      <CreditCard className="w-6 h-6 text-luxury-gold" />
                      <h2 className="text-luxury-title">4. Ordering and Payment</h2>
                    </div>
                    
                    <div className="space-y-6">
                      <div>
                        <h3 className="font-heading text-lg font-semibold mb-3">Order Process</h3>
                        <ol className="space-y-2 text-muted-foreground list-decimal list-inside">
                          <li>Add products to your cart and proceed to checkout</li>
                          <li>Provide accurate shipping and billing information</li>
                          <li>Review your order details and total cost</li>
                          <li>Complete payment using approved payment methods</li>
                          <li>Receive order confirmation via email</li>
                        </ol>
                      </div>

                      <div>
                        <h3 className="font-heading text-lg font-semibold mb-3">Payment Terms</h3>
                        <div className="space-y-3 text-muted-foreground">
                          <p>
                            <strong>Accepted Payments:</strong> We accept major credit cards (Visa, Mastercard, American Express), 
                            PayPal, and other secure payment methods. All payments are processed securely.
                          </p>
                          <p>
                            <strong>Pricing:</strong> All prices are listed in USD and include applicable taxes. 
                            Shipping costs are calculated at checkout based on your location.
                          </p>
                          <p>
                            <strong>Payment Authorization:</strong> By placing an order, you authorize us to charge 
                            your payment method for the total amount, including products, taxes, and shipping.
                          </p>
                        </div>
                      </div>

                      <div>
                        <h3 className="font-heading text-lg font-semibold mb-3">Order Acceptance</h3>
                        <div className="p-4 bg-luxury-cream rounded-lg">
                          <p className="text-sm">
                            We reserve the right to refuse or cancel any order for any reason, including but not limited to: 
                            product availability, errors in product or pricing information, suspected fraudulent activity, 
                            or violation of these terms.
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Shipping and Delivery */}
                <Card className="card-luxury">
                  <CardContent className="p-8">
                    <div className="flex items-center space-x-3 mb-6">
                      <Truck className="w-6 h-6 text-luxury-gold" />
                      <h2 className="text-luxury-title">5. Shipping and Delivery</h2>
                    </div>
                    
                    <div className="space-y-6">
                      <div>
                        <h3 className="font-heading text-lg font-semibold mb-3">Discreet Shipping</h3>
                        <div className="p-4 bg-luxury-gold/10 rounded-lg mb-4">
                          <p className="text-sm">
                            <strong>Privacy Guaranteed:</strong> All orders are shipped in plain, unmarked packaging 
                            with discreet sender information. No product details or company branding appear on the outside.
                          </p>
                        </div>
                        <ul className="space-y-2 text-muted-foreground">
                          <li>• Neutral packaging materials and labels</li>
                          <li>• Generic return address and sender name</li>
                          <li>• No indication of package contents</li>
                          <li>• Secure, tamper-evident sealing</li>
                        </ul>
                      </div>

                      <div>
                        <h3 className="font-heading text-lg font-semibold mb-3">Delivery Timeframes</h3>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="p-4 bg-luxury-cream rounded-lg">
                            <h4 className="font-semibold mb-2">Domestic (US)</h4>
                            <ul className="text-sm text-muted-foreground space-y-1">
                              <li>• Standard: 3-5 business days</li>
                              <li>• Express: 1-2 business days</li>
                              <li>• Overnight: Next business day</li>
                            </ul>
                          </div>
                          <div className="p-4 bg-luxury-cream rounded-lg">
                            <h4 className="font-semibold mb-2">International</h4>
                            <ul className="text-sm text-muted-foreground space-y-1">
                              <li>• Standard: 7-14 business days</li>
                              <li>• Express: 3-7 business days</li>
                              <li>• Subject to customs clearance</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h3 className="font-heading text-lg font-semibold mb-3">Shipping Restrictions</h3>
                        <p className="text-muted-foreground mb-3">
                          Due to legal restrictions, we cannot ship to certain locations. Please verify that 
                          adult products are legal in your area before ordering.
                        </p>
                        <div className="p-4 border border-luxury-gold/20 rounded-lg">
                          <p className="text-sm text-muted-foreground">
                            <strong>Note:</strong> You are responsible for any customs duties, taxes, or fees 
                            imposed by your country. We are not responsible for packages seized by customs or 
                            delayed due to customs processing.
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Returns and Refunds */}
                <Card className="card-luxury">
                  <CardContent className="p-8">
                    <div className="flex items-center space-x-3 mb-6">
                      <RotateCcw className="w-6 h-6 text-luxury-gold" />
                      <h2 className="text-luxury-title">6. Returns and Refunds</h2>
                    </div>
                    
                    <div className="space-y-6">
                      <div className="p-4 bg-luxury-gold/10 rounded-lg">
                        <h3 className="font-semibold mb-2 text-luxury-gold">Health and Safety Policy</h3>
                        <p className="text-sm">
                          Due to the intimate nature of our products and health regulations, we have specific 
                          return policies to ensure customer safety and hygiene standards.
                        </p>
                      </div>

                      <div>
                        <h3 className="font-heading text-lg font-semibold mb-3">Return Eligibility</h3>
                        <div className="space-y-4">
                          <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                            <h4 className="font-semibold text-green-800 mb-2">✓ Returnable Items</h4>
                            <ul className="text-sm text-green-700 space-y-1">
                              <li>• Unopened, sealed products in original packaging</li>
                              <li>• Defective products (manufacturing defects)</li>
                              <li>• Items damaged during shipping</li>
                              <li>• Wrong items sent due to our error</li>
                            </ul>
                          </div>
                          
                          <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                            <h4 className="font-semibold text-red-800 mb-2">✗ Non-Returnable Items</h4>
                            <ul className="text-sm text-red-700 space-y-1">
                              <li>• Opened or used products (health and safety)</li>
                              <li>• Items without original packaging</li>
                              <li>• Personalized or customized products</li>
                              <li>• Items returned after 30 days</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h3 className="font-heading text-lg font-semibold mb-3">Return Process</h3>
                        <ol className="space-y-2 text-muted-foreground list-decimal list-inside">
                          <li>Contact customer service within 30 days of delivery</li>
                          <li>Provide order number and reason for return</li>
                          <li>Receive return authorization and shipping label</li>
                          <li>Package item securely in original packaging</li>
                          <li>Ship using provided return label</li>
                          <li>Receive refund confirmation once processed</li>
                        </ol>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Privacy and Confidentiality */}
                <Card className="card-luxury">
                  <CardContent className="p-8">
                    <h2 className="text-luxury-title mb-6">7. Privacy and Confidentiality</h2>
                    <div className="space-y-4 text-muted-foreground">
                      <p>
                        <strong>Discretion Commitment:</strong> We understand the private nature of our products 
                        and are committed to maintaining your confidentiality at every step of the purchase process.
                      </p>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="p-4 bg-luxury-cream rounded-lg">
                          <h4 className="font-semibold mb-2">Billing Discretion</h4>
                          <p className="text-sm text-muted-foreground">
                            Credit card statements show a discrete business name, not product details.
                          </p>
                        </div>
                        <div className="p-4 bg-luxury-cream rounded-lg">
                          <h4 className="font-semibold mb-2">Data Protection</h4>
                          <p className="text-sm text-muted-foreground">
                            Your personal information is encrypted and stored securely according to GDPR standards.
                          </p>
                        </div>
                      </div>
                      <p>
                        For complete details on how we handle your personal information, please review our 
                        <strong> Privacy Policy</strong>, which is incorporated into these terms by reference.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* Prohibited Uses */}
                <Card className="card-luxury">
                  <CardContent className="p-8">
                    <h2 className="text-luxury-title mb-6">8. Prohibited Uses</h2>
                    <div className="space-y-4 text-muted-foreground">
                      <p>You may not use our website or services for any of the following prohibited purposes:</p>
                      <div className="grid md:grid-cols-2 gap-4">
                        <ul className="space-y-2">
                          <li>• Any unlawful purpose or activity</li>
                          <li>• Violation of international, federal, or state laws</li>
                          <li>• Harassment, abuse, or harm to others</li>
                          <li>• Spam or unauthorized marketing</li>
                          <li>• Transmission of viruses or malicious code</li>
                        </ul>
                        <ul className="space-y-2">
                          <li>• Impersonation of others</li>
                          <li>• Unauthorized data collection</li>
                          <li>• Interference with website functionality</li>
                          <li>• Resale of products without authorization</li>
                          <li>• Any activity that violates these terms</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Liability and Disclaimers */}
                <Card className="card-luxury">
                  <CardContent className="p-8">
                    <h2 className="text-luxury-title mb-6">9. Liability and Disclaimers</h2>
                    <div className="space-y-6">
                      <div>
                        <h3 className="font-heading text-lg font-semibold mb-3">Product Warranties</h3>
                        <div className="space-y-3 text-muted-foreground">
                          <p>
                            We warrant that our products are free from manufacturing defects for a period of 
                            one (1) year from the date of purchase. This warranty does not cover normal wear 
                            and tear, misuse, or damage from improper care.
                          </p>
                          <div className="p-4 bg-luxury-cream rounded-lg">
                            <p className="text-sm">
                              <strong>Important:</strong> Products are sold "as is" for their intended adult use. 
                              We make no representations about their suitability for any particular person or purpose 
                              beyond their designed function.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h3 className="font-heading text-lg font-semibold mb-3">Limitation of Liability</h3>
                        <div className="p-4 border border-luxury-gold/20 rounded-lg">
                          <p className="text-sm text-muted-foreground mb-3">
                            <strong>TO THE MAXIMUM EXTENT PERMITTED BY LAW:</strong>
                          </p>
                          <ul className="text-sm text-muted-foreground space-y-1">
                            <li>• We are not liable for indirect, incidental, or consequential damages</li>
                            <li>• Our total liability is limited to the purchase price of the product</li>
                            <li>• We are not responsible for personal injury from product misuse</li>
                            <li>• Users assume all risks associated with product use</li>
                          </ul>
                        </div>
                      </div>

                      <div>
                        <h3 className="font-heading text-lg font-semibold mb-3">User Responsibility</h3>
                        <p className="text-muted-foreground">
                          You acknowledge that you are purchasing products for adult use and accept full 
                          responsibility for their proper and safe use. You agree to read all product 
                          instructions and safety information before use.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Governing Law */}
                <Card className="card-luxury">
                  <CardContent className="p-8">
                    <h2 className="text-luxury-title mb-6">10. Governing Law and Dispute Resolution</h2>
                    <div className="space-y-4 text-muted-foreground">
                      <p>
                        <strong>Governing Law:</strong> These terms are governed by the laws of [State/Country], 
                        without regard to conflict of law provisions. Any disputes will be resolved in the 
                        courts of [Jurisdiction].
                      </p>
                      <p>
                        <strong>Dispute Resolution:</strong> We encourage resolution of disputes through direct 
                        communication. If needed, disputes may be resolved through binding arbitration rather 
                        than court proceedings.
                      </p>
                      <div className="p-4 bg-luxury-cream rounded-lg">
                        <h4 className="font-semibold mb-2">Class Action Waiver</h4>
                        <p className="text-sm">
                          You agree to resolve disputes individually and waive the right to participate in 
                          class action lawsuits or class-wide arbitration.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Contact Information */}
                <Card className="card-luxury border-luxury-gold">
                  <CardContent className="p-8">
                    <h2 className="text-luxury-title mb-6">Contact Information</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="font-semibold mb-3">Legal Questions</h3>
                        <div className="space-y-2 text-sm">
                          <p><strong>Email:</strong> legal@deseovivo.com</p>
                          <p><strong>Subject:</strong> Terms and Conditions Inquiry</p>
                          <p><strong>Response Time:</strong> Within 5 business days</p>
                        </div>
                      </div>
                      <div>
                        <h3 className="font-semibold mb-3">Customer Service</h3>
                        <div className="space-y-2 text-sm">
                          <p><strong>Email:</strong> support@deseovivo.com</p>
                          <p><strong>Hours:</strong> Monday-Friday, 9 AM - 6 PM EST</p>
                          <p><strong>Response Time:</strong> Within 24 hours</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Severability and Updates */}
                <Card className="card-luxury">
                  <CardContent className="p-8">
                    <h2 className="text-luxury-title mb-6">11. General Provisions</h2>
                    <div className="space-y-4 text-muted-foreground">
                      <div>
                        <h3 className="font-semibold mb-2">Severability</h3>
                        <p className="text-sm">
                          If any provision of these terms is found to be unenforceable, the remaining 
                          provisions will continue in full force and effect.
                        </p>
                      </div>
                      
                      <div>
                        <h3 className="font-semibold mb-2">Updates to Terms</h3>
                        <p className="text-sm">
                          We reserve the right to update these terms at any time. Material changes will be 
                          communicated via email or website notice. Continued use after changes indicates acceptance.
                        </p>
                      </div>
                      
                      <div>
                        <h3 className="font-semibold mb-2">Entire Agreement</h3>
                        <p className="text-sm">
                          These terms, along with our Privacy Policy and Return Policy, constitute the 
                          entire agreement between you and DeseoVivo regarding use of our services.
                        </p>
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

export default Terms;
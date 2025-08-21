import { Helmet } from 'react-helmet';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { RotateCcw, Shield, Clock, Package, AlertTriangle, CheckCircle, XCircle, Mail } from 'lucide-react';

const ReturnPolicy = () => {
  return (
    <>
      <Helmet>
        <title>Return Policy | DeseoVivo - Intimate Product Return Guidelines</title>
        <meta name="description" content="Comprehensive return policy for luxury intimate wellness products. Health-compliant return procedures, eligibility criteria, and customer protection guidelines." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://deseovivo.com/legal/return-policy" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="section-padding">
          <div className="container-luxury">
            <div className="max-w-4xl mx-auto">
              {/* Header */}
              <div className="text-center mb-12">
                <div className="flex items-center justify-center space-x-2 mb-4">
                  <RotateCcw className="w-8 h-8 text-luxury-gold" />
                  <Badge variant="outline" className="text-luxury-gold border-luxury-gold">
                    Health & Safety Compliant
                  </Badge>
                </div>
                <h1 className="text-luxury-hero mb-6">Return Policy</h1>
                <p className="text-luxury-subtitle max-w-2xl mx-auto">
                  Your satisfaction is our priority. This policy outlines our health-compliant return 
                  procedures for luxury intimate wellness products, ensuring both customer satisfaction 
                  and hygiene standards.
                </p>
                <p className="text-sm text-muted-foreground mt-4">
                  Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                </p>
              </div>

              <div className="space-y-8">
                {/* Health & Safety Notice */}
                <Card className="card-luxury border-luxury-gold/20">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-4">
                      <Shield className="w-8 h-8 text-luxury-gold flex-shrink-0 mt-1" />
                      <div>
                        <h2 className="text-luxury-title mb-4">Health & Safety First</h2>
                        <div className="space-y-3 text-muted-foreground">
                          <p>
                            Due to the intimate nature of our products and health regulations, we maintain strict 
                            hygiene standards in our return policy. This protects all customers while ensuring 
                            your satisfaction with quality products.
                          </p>
                          <div className="p-4 bg-luxury-gold/10 rounded-lg">
                            <p className="text-sm font-semibold text-luxury-gold">
                              All returns must comply with health and safety regulations for intimate products. 
                              We cannot accept returns of opened or used items for health and hygiene reasons.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Return Window */}
                <Card className="card-luxury">
                  <CardContent className="p-8">
                    <div className="flex items-center space-x-3 mb-6">
                      <Clock className="w-6 h-6 text-luxury-gold" />
                      <h2 className="text-luxury-title">Return Timeframe</h2>
                    </div>
                    
                    <div className="grid md:grid-cols-3 gap-6">
                      <div className="text-center p-6 bg-luxury-cream rounded-lg">
                        <div className="w-16 h-16 bg-luxury-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                          <span className="text-2xl font-bold text-luxury-gold">30</span>
                        </div>
                        <h3 className="font-heading font-semibold mb-2">Days to Return</h3>
                        <p className="text-sm text-muted-foreground">
                          You have 30 days from delivery date to initiate a return
                        </p>
                      </div>
                      
                      <div className="text-center p-6 bg-luxury-cream rounded-lg">
                        <div className="w-16 h-16 bg-luxury-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                          <span className="text-2xl font-bold text-luxury-gold">24</span>
                        </div>
                        <h3 className="font-heading font-semibold mb-2">Hours Response</h3>
                        <p className="text-sm text-muted-foreground">
                          We respond to return requests within 24 hours
                        </p>
                      </div>
                      
                      <div className="text-center p-6 bg-luxury-cream rounded-lg">
                        <div className="w-16 h-16 bg-luxury-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                          <span className="text-2xl font-bold text-luxury-gold">5-7</span>
                        </div>
                        <h3 className="font-heading font-semibold mb-2">Days Processing</h3>
                        <p className="text-sm text-muted-foreground">
                          Refunds processed within 5-7 business days
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Returnable vs Non-Returnable */}
                <Card className="card-luxury">
                  <CardContent className="p-8">
                    <h2 className="text-luxury-title mb-8">Return Eligibility</h2>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      {/* Returnable Items */}
                      <div className="p-6 bg-green-50 border border-green-200 rounded-lg">
                        <div className="flex items-center space-x-2 mb-4">
                          <CheckCircle className="w-6 h-6 text-green-600" />
                          <h3 className="font-heading text-lg font-semibold text-green-800">Returnable Items</h3>
                        </div>
                        
                        <div className="space-y-4">
                          <div>
                            <h4 className="font-semibold text-green-700 mb-2">✓ Unopened Products</h4>
                            <p className="text-sm text-green-600">
                              Items in original, unopened packaging with all seals intact
                            </p>
                          </div>
                          
                          <div>
                            <h4 className="font-semibold text-green-700 mb-2">✓ Defective Items</h4>
                            <p className="text-sm text-green-600">
                              Products with manufacturing defects or quality issues
                            </p>
                          </div>
                          
                          <div>
                            <h4 className="font-semibold text-green-700 mb-2">✓ Shipping Damage</h4>
                            <p className="text-sm text-green-600">
                              Items damaged during transit (with photos required)
                            </p>
                          </div>
                          
                          <div>
                            <h4 className="font-semibold text-green-700 mb-2">✓ Wrong Item Sent</h4>
                            <p className="text-sm text-green-600">
                              Incorrect products sent due to our fulfillment error
                            </p>
                          </div>
                          
                          <div>
                            <h4 className="font-semibold text-green-700 mb-2">✓ Gift Returns</h4>
                            <p className="text-sm text-green-600">
                              Unopened gift items (store credit only without receipt)
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Non-Returnable Items */}
                      <div className="p-6 bg-red-50 border border-red-200 rounded-lg">
                        <div className="flex items-center space-x-2 mb-4">
                          <XCircle className="w-6 h-6 text-red-600" />
                          <h3 className="font-heading text-lg font-semibold text-red-800">Non-Returnable Items</h3>
                        </div>
                        
                        <div className="space-y-4">
                          <div>
                            <h4 className="font-semibold text-red-700 mb-2">✗ Opened Products</h4>
                            <p className="text-sm text-red-600">
                              Any item that has been opened, used, or had packaging tampered with
                            </p>
                          </div>
                          
                          <div>
                            <h4 className="font-semibold text-red-700 mb-2">✗ Missing Packaging</h4>
                            <p className="text-sm text-red-600">
                              Items without original packaging, manuals, or accessories
                            </p>
                          </div>
                          
                          <div>
                            <h4 className="font-semibold text-red-700 mb-2">✗ Personalized Items</h4>
                            <p className="text-sm text-red-600">
                              Custom engraved or personalized products
                            </p>
                          </div>
                          
                          <div>
                            <h4 className="font-semibold text-red-700 mb-2">✗ Hygiene Products</h4>
                            <p className="text-sm text-red-600">
                              Personal lubricants, cleaners, or hygiene items (once opened)
                            </p>
                          </div>
                          
                          <div>
                            <h4 className="font-semibold text-red-700 mb-2">✗ Final Sale Items</h4>
                            <p className="text-sm text-red-600">
                              Products marked as final sale, clearance, or special promotion
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 p-4 bg-luxury-gold/10 rounded-lg border border-luxury-gold/20">
                      <div className="flex items-start space-x-3">
                        <AlertTriangle className="w-5 h-5 text-luxury-gold flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold text-luxury-gold mb-1">Important Health Notice</h4>
                          <p className="text-sm text-muted-foreground">
                            For health and safety reasons, we cannot accept returns of intimate products that have 
                            been opened or used, even if only briefly. This policy protects all customers and complies 
                            with health regulations for adult products.
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Return Process */}
                <Card className="card-luxury">
                  <CardContent className="p-8">
                    <div className="flex items-center space-x-3 mb-6">
                      <Package className="w-6 h-6 text-luxury-gold" />
                      <h2 className="text-luxury-title">How to Return an Item</h2>
                    </div>
                    
                    <div className="space-y-6">
                      <div className="space-y-4">
                        <div className="flex items-start space-x-4">
                          <div className="w-8 h-8 bg-luxury-gold text-luxury-black rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                            1
                          </div>
                          <div>
                            <h3 className="font-semibold mb-2">Contact Customer Service</h3>
                            <p className="text-sm text-muted-foreground mb-2">
                              Email us at returns@deseovivo.com within 30 days of delivery. Include:
                            </p>
                            <ul className="text-sm text-muted-foreground space-y-1">
                              <li>• Order number</li>
                              <li>• Item(s) you want to return</li>
                              <li>• Reason for return</li>
                              <li>• Photos (if damaged or defective)</li>
                            </ul>
                          </div>
                        </div>

                        <div className="flex items-start space-x-4">
                          <div className="w-8 h-8 bg-luxury-gold text-luxury-black rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                            2
                          </div>
                          <div>
                            <h3 className="font-semibold mb-2">Receive Return Authorization</h3>
                            <p className="text-sm text-muted-foreground">
                              We'll review your request and send you a Return Merchandise Authorization (RMA) 
                              number and return shipping label if approved. This typically takes 24-48 hours.
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start space-x-4">
                          <div className="w-8 h-8 bg-luxury-gold text-luxury-black rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                            3
                          </div>
                          <div>
                            <h3 className="font-semibold mb-2">Package Your Return</h3>
                            <p className="text-sm text-muted-foreground mb-2">
                              Carefully package the item(s) for return:
                            </p>
                            <ul className="text-sm text-muted-foreground space-y-1">
                              <li>• Use original packaging when possible</li>
                              <li>• Include all original materials and accessories</li>
                              <li>• Pack securely to prevent damage</li>
                              <li>• Include the RMA number</li>
                            </ul>
                          </div>
                        </div>

                        <div className="flex items-start space-x-4">
                          <div className="w-8 h-8 bg-luxury-gold text-luxury-black rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                            4
                          </div>
                          <div>
                            <h3 className="font-semibold mb-2">Ship Your Return</h3>
                            <p className="text-sm text-muted-foreground">
                              Attach the provided return label and ship the package. We recommend using a 
                              trackable shipping method. Keep your tracking number for reference.
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start space-x-4">
                          <div className="w-8 h-8 bg-luxury-gold text-luxury-black rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                            5
                          </div>
                          <div>
                            <h3 className="font-semibold mb-2">Receive Your Refund</h3>
                            <p className="text-sm text-muted-foreground">
                              Once we receive and inspect your return, we'll process your refund within 5-7 
                              business days. You'll receive an email confirmation when the refund is issued.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Refund Information */}
                <Card className="card-luxury">
                  <CardContent className="p-8">
                    <h2 className="text-luxury-title mb-6">Refund Information</h2>
                    
                    <div className="space-y-6">
                      <div>
                        <h3 className="font-heading text-lg font-semibold mb-4">Refund Methods</h3>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="p-4 bg-luxury-cream rounded-lg">
                            <h4 className="font-semibold mb-2">Original Payment Method</h4>
                            <p className="text-sm text-muted-foreground">
                              Refunds are issued to your original payment method (credit card, PayPal, etc.). 
                              Processing time varies by payment provider.
                            </p>
                          </div>
                          <div className="p-4 bg-luxury-cream rounded-lg">
                            <h4 className="font-semibold mb-2">Store Credit</h4>
                            <p className="text-sm text-muted-foreground">
                              Gift returns without receipt receive store credit. Store credit never expires 
                              and can be used for future purchases.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h3 className="font-heading text-lg font-semibold mb-4">Processing Times</h3>
                        <div className="space-y-3">
                          <div className="flex justify-between items-center p-3 bg-luxury-cream rounded">
                            <span className="font-medium">Credit Cards</span>
                            <span className="text-sm text-muted-foreground">3-5 business days</span>
                          </div>
                          <div className="flex justify-between items-center p-3 bg-luxury-cream rounded">
                            <span className="font-medium">PayPal</span>
                            <span className="text-sm text-muted-foreground">1-2 business days</span>
                          </div>
                          <div className="flex justify-between items-center p-3 bg-luxury-cream rounded">
                            <span className="font-medium">Bank Transfers</span>
                            <span className="text-sm text-muted-foreground">5-7 business days</span>
                          </div>
                          <div className="flex justify-between items-center p-3 bg-luxury-cream rounded">
                            <span className="font-medium">Store Credit</span>
                            <span className="text-sm text-muted-foreground">Immediate</span>
                          </div>
                        </div>
                      </div>

                      <div className="p-4 border border-luxury-gold/20 rounded-lg">
                        <h4 className="font-semibold mb-2 text-luxury-gold">Shipping Costs</h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• <strong>Defective/Wrong Items:</strong> We pay return shipping</li>
                          <li>• <strong>Change of Mind:</strong> Customer pays return shipping</li>
                          <li>• <strong>Original Shipping:</strong> Non-refundable (except for our errors)</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Exchanges */}
                <Card className="card-luxury">
                  <CardContent className="p-8">
                    <h2 className="text-luxury-title mb-6">Exchanges</h2>
                    
                    <div className="space-y-4 text-muted-foreground">
                      <p>
                        <strong>Exchange Policy:</strong> Due to the intimate nature of our products and health 
                        regulations, we do not offer direct exchanges. If you need a different size, color, 
                        or model, please return the original item and place a new order.
                      </p>
                      
                      <div className="p-4 bg-luxury-gold/10 rounded-lg">
                        <h4 className="font-semibold text-luxury-gold mb-2">Why No Direct Exchanges?</h4>
                        <p className="text-sm">
                          This policy ensures that every customer receives a brand-new, unopened product. 
                          It also allows us to maintain the highest hygiene standards and comply with 
                          health regulations for intimate products.
                        </p>
                      </div>

                      <div>
                        <h3 className="font-semibold mb-3">Alternative Options:</h3>
                        <ul className="space-y-2">
                          <li>• <strong>Size Issues:</strong> Contact us before opening to discuss options</li>
                          <li>• <strong>Color Preference:</strong> Return unopened item and reorder preferred color</li>
                          <li>• <strong>Defective Items:</strong> We'll send a replacement at no charge</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* International Returns */}
                <Card className="card-luxury">
                  <CardContent className="p-8">
                    <h2 className="text-luxury-title mb-6">International Returns</h2>
                    
                    <div className="space-y-4 text-muted-foreground">
                      <p>
                        International customers can return products following the same policy, with 
                        additional considerations:
                      </p>
                      
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="p-4 bg-luxury-cream rounded-lg">
                          <h4 className="font-semibold mb-2">Return Shipping</h4>
                          <ul className="text-sm space-y-1">
                            <li>• Customer pays return shipping costs</li>
                            <li>• Use trackable shipping method</li>
                            <li>• Package securely for international transit</li>
                          </ul>
                        </div>
                        <div className="p-4 bg-luxury-cream rounded-lg">
                          <h4 className="font-semibold mb-2">Customs & Duties</h4>
                          <ul className="text-sm space-y-1">
                            <li>• Customer responsible for return duties</li>
                            <li>• Declare items accurately</li>
                            <li>• We cannot control customs processing</li>
                          </ul>
                        </div>
                      </div>

                      <div className="p-4 border border-luxury-gold/20 rounded-lg">
                        <p className="text-sm">
                          <strong>Important:</strong> Please check your local laws regarding the return of 
                          adult products. Some countries may restrict or prohibit the international shipment 
                          of intimate products.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Quality Guarantee */}
                <Card className="card-luxury border-luxury-gold/20">
                  <CardContent className="p-8">
                    <div className="text-center mb-6">
                      <Shield className="w-12 h-12 text-luxury-gold mx-auto mb-4" />
                      <h2 className="text-luxury-title mb-4">Our Quality Guarantee</h2>
                      <p className="text-luxury-subtitle">
                        We stand behind the quality of every product we sell
                      </p>
                    </div>
                    
                    <div className="grid md:grid-cols-3 gap-6">
                      <div className="text-center p-4">
                        <CheckCircle className="w-8 h-8 text-luxury-gold mx-auto mb-3" />
                        <h3 className="font-semibold mb-2">Quality Tested</h3>
                        <p className="text-sm text-muted-foreground">
                          Every product undergoes rigorous quality control
                        </p>
                      </div>
                      <div className="text-center p-4">
                        <Shield className="w-8 h-8 text-luxury-gold mx-auto mb-3" />
                        <h3 className="font-semibold mb-2">Body-Safe Materials</h3>
                        <p className="text-sm text-muted-foreground">
                          Only medical-grade, body-safe materials used
                        </p>
                      </div>
                      <div className="text-center p-4">
                        <Package className="w-8 h-8 text-luxury-gold mx-auto mb-3" />
                        <h3 className="font-semibold mb-2">Secure Packaging</h3>
                        <p className="text-sm text-muted-foreground">
                          Products arrive in pristine, hygienic condition
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Contact Information */}
                <Card className="card-luxury border-luxury-gold">
                  <CardContent className="p-8">
                    <div className="flex items-center space-x-3 mb-6">
                      <Mail className="w-6 h-6 text-luxury-gold" />
                      <h2 className="text-luxury-title">Need Help with a Return?</h2>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="font-semibold mb-3">Returns Department</h3>
                        <div className="space-y-2 text-sm">
                          <p><strong>Email:</strong> returns@deseovivo.com</p>
                          <p><strong>Subject Line:</strong> Return Request - Order #[Your Order Number]</p>
                          <p><strong>Response Time:</strong> Within 24 hours</p>
                          <p><strong>Hours:</strong> Monday-Friday, 9 AM - 6 PM EST</p>
                        </div>
                      </div>
                      <div>
                        <h3 className="font-semibold mb-3">What to Include</h3>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>✓ Order number</li>
                          <li>✓ Product name and SKU</li>
                          <li>✓ Reason for return</li>
                          <li>✓ Photos (if applicable)</li>
                          <li>✓ Preferred resolution</li>
                        </ul>
                      </div>
                    </div>
                    
                    <Separator className="my-6" />
                    
                    <div className="text-center">
                      <Button className="btn-luxury">
                        <Mail className="w-4 h-4 mr-2" />
                        Contact Returns Department
                      </Button>
                      <p className="text-sm text-muted-foreground mt-2">
                        We're here to help make your return process as smooth as possible
                      </p>
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

export default ReturnPolicy;
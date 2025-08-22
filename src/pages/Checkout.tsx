import { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Checkbox } from '@/components/ui/checkbox';
import { Badge } from '@/components/ui/badge';
import { 
  CreditCard, 
  Lock, 
  Truck, 
  Shield, 
  ArrowLeft,
  Smartphone
} from 'lucide-react';

const Checkout = () => {
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [sameAsShipping, setSameAsShipping] = useState(true);

  // Mock cart data
  const cartItems = [
    {
      id: 1,
      name: 'Aria Luxury Massager',
      variant: 'Rose Gold',
      price: 299,
      quantity: 1,
      image: 'https://images.unsplash.com/photo-1585565804773-f2b0cd3056c7?w=400'
    }
  ];

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = subtotal > 200 ? 0 : 25;
  const tax = subtotal * 0.08; // 8% tax
  const total = subtotal + shipping + tax;

  return (
    <>
      <Helmet>
        <title>Checkout | DeseoVivo Luxury Boutique</title>
        <meta name="description" content="Secure checkout for your luxury intimate wellness products. Discreet packaging and fast shipping." />
      </Helmet>

      <div className="min-h-screen bg-luxury-cream/20">
        <Header />
        
        <main className="section-padding">
          <div className="container-luxury max-w-6xl">
            {/* Breadcrumb */}
            <nav className="flex items-center space-x-2 text-sm text-muted-foreground mb-8">
              <Link to="/" className="hover:text-luxury-gold">Home</Link>
              <span>/</span>
              <Link to="/cart" className="hover:text-luxury-gold">Cart</Link>
              <span>/</span>
              <span className="text-luxury-charcoal">Checkout</span>
            </nav>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Checkout Form */}
              <div className="space-y-8">
                <div>
                  <h1 className="text-luxury-title mb-2">Secure Checkout</h1>
                  <p className="text-muted-foreground">
                    Complete your order with confidence. All information is encrypted and secure.
                  </p>
                </div>

                {/* Contact Information */}
                <Card className="card-luxury">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <span>1. Contact Information</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
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
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" type="tel" />
                    </div>
                  </CardContent>
                </Card>

                {/* Shipping Address */}
                <Card className="card-luxury">
                  <CardHeader>
                    <CardTitle>2. Shipping Address</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <Label htmlFor="address1">Address Line 1*</Label>
                      <Input id="address1" required />
                    </div>
                    <div>
                      <Label htmlFor="address2">Address Line 2 (Optional)</Label>
                      <Input id="address2" placeholder="Apartment, suite, etc." />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="city">City*</Label>
                        <Input id="city" required />
                      </div>
                      <div>
                        <Label htmlFor="state">State*</Label>
                        <Input id="state" required />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="zip">ZIP Code*</Label>
                        <Input id="zip" required />
                      </div>
                      <div>
                        <Label htmlFor="country">Country*</Label>
                        <Input id="country" defaultValue="United States" required />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Payment Method */}
                <Card className="card-luxury">
                  <CardHeader>
                    <CardTitle>3. Payment Method</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
                      <div className="space-y-4">
                        <div className="flex items-center space-x-3 p-4 border rounded-lg hover:bg-luxury-cream/30 transition-colors">
                          <RadioGroupItem value="card" id="card" />
                          <Label htmlFor="card" className="flex items-center space-x-2 cursor-pointer flex-1">
                            <CreditCard className="h-5 w-5" />
                            <span>Credit/Debit Card</span>
                          </Label>
                          <div className="flex space-x-2">
                            <img src="/visa.png" alt="Visa" className="h-6" onError={(e) => e.currentTarget.style.display = 'none'} />
                            <img src="/mastercard.png" alt="Mastercard" className="h-6" onError={(e) => e.currentTarget.style.display = 'none'} />
                            <img src="/amex.png" alt="Amex" className="h-6" onError={(e) => e.currentTarget.style.display = 'none'} />
                          </div>
                        </div>

                        <div className="flex items-center space-x-3 p-4 border rounded-lg hover:bg-luxury-cream/30 transition-colors">
                          <RadioGroupItem value="paypal" id="paypal" />
                          <Label htmlFor="paypal" className="flex items-center space-x-2 cursor-pointer flex-1">
                            <CreditCard className="h-5 w-5 text-blue-600" />
                            <span>PayPal</span>
                          </Label>
                        </div>

                        <div className="flex items-center space-x-3 p-4 border rounded-lg hover:bg-luxury-cream/30 transition-colors">
                          <RadioGroupItem value="apple" id="apple" />
                          <Label htmlFor="apple" className="flex items-center space-x-2 cursor-pointer flex-1">
                            <Smartphone className="h-5 w-5" />
                            <span>Apple Pay</span>
                          </Label>
                        </div>
                      </div>
                    </RadioGroup>

                    {paymentMethod === 'card' && (
                      <div className="space-y-4 p-4 bg-luxury-cream/20 rounded-lg">
                        <div>
                          <Label htmlFor="cardNumber">Card Number*</Label>
                          <Input id="cardNumber" placeholder="1234 5678 9012 3456" required />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="expiry">Expiry Date*</Label>
                            <Input id="expiry" placeholder="MM/YY" required />
                          </div>
                          <div>
                            <Label htmlFor="cvv">CVV*</Label>
                            <Input id="cvv" placeholder="123" required />
                          </div>
                        </div>
                        <div>
                          <Label htmlFor="cardName">Name on Card*</Label>
                          <Input id="cardName" required />
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>

                {/* Billing Address */}
                <Card className="card-luxury">
                  <CardHeader>
                    <CardTitle>4. Billing Address</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center space-x-2 mb-4">
                      <Checkbox 
                        id="sameAsShipping" 
                        checked={sameAsShipping}
                        onCheckedChange={(checked) => setSameAsShipping(checked === true)}
                      />
                      <Label htmlFor="sameAsShipping">Same as shipping address</Label>
                    </div>
                    
                    {!sameAsShipping && (
                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="billingAddress1">Address Line 1*</Label>
                          <Input id="billingAddress1" required />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="billingCity">City*</Label>
                            <Input id="billingCity" required />
                          </div>
                          <div>
                            <Label htmlFor="billingZip">ZIP Code*</Label>
                            <Input id="billingZip" required />
                          </div>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>

              {/* Order Summary */}
              <div className="space-y-6">
                <Card className="card-luxury sticky top-24">
                  <CardHeader>
                    <CardTitle>Order Summary</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* Cart Items */}
                    <div className="space-y-4">
                      {cartItems.map((item) => (
                        <div key={item.id} className="flex space-x-4">
                          <div className="w-16 h-16 bg-gray-200 rounded-lg flex-shrink-0">
                            <img
                              src={item.image}
                              alt={item.name}
                              className="w-full h-full object-cover rounded-lg"
                              onError={(e) => {
                                e.currentTarget.src = 'https://images.unsplash.com/photo-1585565804773-f2b0cd3056c7?w=400';
                              }}
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="font-medium text-sm">{item.name}</h4>
                            <p className="text-sm text-muted-foreground">{item.variant}</p>
                            <div className="flex justify-between items-center mt-1">
                              <span className="text-sm">Qty: {item.quantity}</span>
                              <span className="font-medium">${item.price}</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    <Separator />

                    {/* Pricing */}
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span>Subtotal</span>
                        <span>${subtotal}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Shipping</span>
                        <span>
                          {shipping === 0 ? (
                            <span className="text-luxury-gold">FREE</span>
                          ) : (
                            `$${shipping}`
                          )}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span>Tax</span>
                        <span>${tax.toFixed(2)}</span>
                      </div>
                      <Separator />
                      <div className="flex justify-between text-lg font-bold">
                        <span>Total</span>
                        <span>${total.toFixed(2)}</span>
                      </div>
                    </div>

                    {/* Trust Indicators */}
                    <div className="space-y-3 text-sm">
                      <div className="flex items-center space-x-2 text-muted-foreground">
                        <Lock className="h-4 w-4 text-luxury-gold" />
                        <span>SSL encrypted secure checkout</span>
                      </div>
                      <div className="flex items-center space-x-2 text-muted-foreground">
                        <Truck className="h-4 w-4 text-luxury-gold" />
                        <span>Discreet packaging & delivery</span>
                      </div>
                      <div className="flex items-center space-x-2 text-muted-foreground">
                        <Shield className="h-4 w-4 text-luxury-gold" />
                        <span>30-day return guarantee</span>
                      </div>
                    </div>

                    {/* Checkout Button */}
                    <Button className="w-full btn-luxury text-lg py-3">
                      <Lock className="h-4 w-4 mr-2" />
                      Complete Order - ${total.toFixed(2)}
                    </Button>

                    <div className="text-center">
                      <Link to="/cart" className="text-sm text-muted-foreground hover:text-luxury-gold flex items-center justify-center space-x-1">
                        <ArrowLeft className="h-3 w-3" />
                        <span>Return to Cart</span>
                      </Link>
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

export default Checkout;
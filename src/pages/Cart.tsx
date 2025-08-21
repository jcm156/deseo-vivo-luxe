import { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { Minus, Plus, X, ShoppingBag, Lock, Truck, Shield } from 'lucide-react';
import product1 from '@/assets/product-1.jpg';
import product2 from '@/assets/product-2.jpg';

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Aria Luxury Massager',
      price: 299,
      originalPrice: 399,
      quantity: 1,
      image: product1,
      variant: 'Rose Gold',
      inStock: true
    },
    {
      id: 2,
      name: 'Obsidian Couples Kit',
      price: 189,
      quantity: 2,
      image: product2,
      variant: 'Deluxe',
      inStock: true
    }
  ]);

  const [promoCode, setPromoCode] = useState('');
  const [isPromoApplied, setIsPromoApplied] = useState(false);

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity === 0) {
      removeItem(id);
      return;
    }
    setCartItems(items =>
      items.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const applyPromoCode = () => {
    if (promoCode.toLowerCase() === 'luxury20') {
      setIsPromoApplied(true);
    }
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const savings = cartItems.reduce((sum, item) => {
    const itemSavings = item.originalPrice ? (item.originalPrice - item.price) * item.quantity : 0;
    return sum + itemSavings;
  }, 0);
  const promoDiscount = isPromoApplied ? subtotal * 0.2 : 0;
  const shipping = subtotal > 200 ? 0 : 25;
  const total = subtotal - promoDiscount + shipping;

  return (
    <>
      <Helmet>
        <title>Shopping Cart | DeseoVivo Luxury Boutique</title>
        <meta name="description" content="Review your luxury intimate wellness products and proceed to secure checkout." />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="section-padding">
          <div className="container-luxury">
            {cartItems.length === 0 ? (
              // Empty Cart
              <div className="text-center py-16">
                <ShoppingBag className="h-24 w-24 text-muted-foreground mx-auto mb-6" />
                <h1 className="text-luxury-title mb-4">Your Cart is Empty</h1>
                <p className="text-luxury-subtitle mb-8">
                  Discover our curated collection of luxury intimate products
                </p>
                <Link to="/collections/all">
                  <Button className="btn-luxury">
                    Continue Shopping
                  </Button>
                </Link>
              </div>
            ) : (
              <div className="grid lg:grid-cols-3 gap-8">
                {/* Cart Items */}
                <div className="lg:col-span-2">
                  <div className="flex items-center justify-between mb-8">
                    <h1 className="text-luxury-title">Shopping Cart</h1>
                    <Badge variant="outline" className="text-luxury-gold border-luxury-gold">
                      {cartItems.length} {cartItems.length === 1 ? 'item' : 'items'}
                    </Badge>
                  </div>

                  <div className="space-y-4">
                    {cartItems.map((item) => (
                      <Card key={item.id} className="card-luxury">
                        <CardContent className="p-6">
                          <div className="flex gap-4">
                            <div className="w-24 h-24 flex-shrink-0">
                              <img
                                src={item.image}
                                alt={item.name}
                                className="w-full h-full object-cover rounded-lg"
                              />
                            </div>
                            
                            <div className="flex-1 min-w-0">
                              <div className="flex justify-between items-start mb-2">
                                <div>
                                  <h3 className="font-heading text-lg font-semibold">
                                    {item.name}
                                  </h3>
                                  <p className="text-sm text-muted-foreground">
                                    Variant: {item.variant}
                                  </p>
                                </div>
                                <Button
                                  variant="ghost"
                                  size="icon"
                                  onClick={() => removeItem(item.id)}
                                  className="text-muted-foreground hover:text-destructive"
                                >
                                  <X className="h-4 w-4" />
                                </Button>
                              </div>
                              
                              <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-2">
                                  <span className="text-lg font-bold">
                                    ${item.price}
                                  </span>
                                  {item.originalPrice && (
                                    <span className="text-sm text-muted-foreground line-through">
                                      ${item.originalPrice}
                                    </span>
                                  )}
                                </div>
                                
                                <div className="flex items-center space-x-2">
                                  <Button
                                    variant="outline"
                                    size="icon"
                                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                    className="h-8 w-8"
                                  >
                                    <Minus className="h-3 w-3" />
                                  </Button>
                                  <span className="w-8 text-center font-medium">
                                    {item.quantity}
                                  </span>
                                  <Button
                                    variant="outline"
                                    size="icon"
                                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                    className="h-8 w-8"
                                  >
                                    <Plus className="h-3 w-3" />
                                  </Button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>

                {/* Order Summary */}
                <div className="lg:col-span-1">
                  <Card className="card-luxury sticky top-24">
                    <CardContent className="p-6">
                      <h2 className="font-heading text-xl font-semibold mb-6">
                        Order Summary
                      </h2>

                      {/* Promo Code */}
                      <div className="mb-6">
                        <label className="text-sm font-medium mb-2 block">
                          Promo Code
                        </label>
                        <div className="flex gap-2">
                          <Input
                            value={promoCode}
                            onChange={(e) => setPromoCode(e.target.value)}
                            placeholder="Enter code"
                            className="flex-1"
                          />
                          <Button
                            variant="outline"
                            onClick={applyPromoCode}
                            disabled={isPromoApplied}
                          >
                            Apply
                          </Button>
                        </div>
                        {isPromoApplied && (
                          <p className="text-sm text-luxury-gold mt-1">
                            ✓ LUXURY20 applied - 20% off!
                          </p>
                        )}
                      </div>

                      <Separator className="mb-4" />

                      {/* Price Breakdown */}
                      <div className="space-y-3 mb-6">
                        <div className="flex justify-between">
                          <span>Subtotal</span>
                          <span>${subtotal}</span>
                        </div>
                        
                        {savings > 0 && (
                          <div className="flex justify-between text-luxury-gold">
                            <span>You Save</span>
                            <span>-${savings}</span>
                          </div>
                        )}
                        
                        {isPromoApplied && (
                          <div className="flex justify-between text-luxury-gold">
                            <span>Promo Discount</span>
                            <span>-${promoDiscount.toFixed(2)}</span>
                          </div>
                        )}
                        
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

                        <Separator />
                        
                        <div className="flex justify-between text-lg font-bold">
                          <span>Total</span>
                          <span>${total.toFixed(2)}</span>
                        </div>
                      </div>

                      {/* Trust Indicators */}
                      <div className="space-y-2 mb-6 text-sm text-muted-foreground">
                        <div className="flex items-center space-x-2">
                          <Lock className="h-4 w-4 text-luxury-gold" />
                          <span>Secure SSL encrypted checkout</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Truck className="h-4 w-4 text-luxury-gold" />
                          <span>Discreet packaging & delivery</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Shield className="h-4 w-4 text-luxury-gold" />
                          <span>30-day return guarantee</span>
                        </div>
                      </div>

                      {/* Checkout Button */}
                      <Link to="/checkout">
                        <Button className="w-full btn-luxury mb-4">
                          Proceed to Checkout
                        </Button>
                      </Link>

                      <Link to="/collections/all">
                        <Button variant="ghost" className="w-full btn-luxury-ghost">
                          Continue Shopping
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                </div>
              </div>
            )}
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Cart;
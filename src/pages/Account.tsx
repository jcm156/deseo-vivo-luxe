import { useState } from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  User, 
  Package, 
  Heart, 
  CreditCard, 
  MapPin, 
  Shield, 
  Settings, 
  Eye,
  EyeOff,
  Mail,
  Phone,
  Calendar,
  Truck,
  Star,
  Gift
} from 'lucide-react';

const Account = () => {
  const [showPassword, setShowPassword] = useState(false);
  
  // Mock user data - in real app, this would come from authentication state
  const user = {
    name: 'Alexandra Thompson',
    email: 'alexandra@email.com',
    joinDate: '2024-01-15',
    totalOrders: 12,
    totalSpent: 2847.50,
    loyaltyPoints: 284,
    vipStatus: 'Gold Member'
  };

  const orders = [
    {
      id: 'DV-2024-001',
      date: '2024-01-20',
      status: 'Delivered',
      total: 299.00,
      items: ['Aria Luxury Massager', 'Silk Care Kit']
    },
    {
      id: 'DV-2024-002',
      date: '2024-01-15',
      status: 'Delivered',
      total: 189.00,
      items: ['Obsidian Couples Kit']
    },
    {
      id: 'DV-2024-003',
      date: '2024-01-10',
      status: 'Processing',
      total: 449.00,
      items: ['Luxury Gift Set', 'Premium Care Collection']
    }
  ];

  const wishlistItems = [
    { id: 1, name: 'Rose Gold Elite Collection', price: 599, image: '/placeholder.jpg' },
    { id: 2, name: 'Couples Luxury Experience', price: 349, image: '/placeholder.jpg' },
    { id: 3, name: 'Wellness Starter Kit', price: 159, image: '/placeholder.jpg' }
  ];

  return (
    <>
      <Helmet>
        <title>My Account | DeseoVivo Luxury Boutique</title>
        <meta name="description" content="Manage your DeseoVivo account, view order history, update preferences, and access your luxury intimate wellness journey." />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="section-padding">
          <div className="container-luxury">
            <div className="max-w-6xl mx-auto">
              {/* Header */}
              <div className="mb-8">
                <div className="flex items-center space-x-2 mb-4">
                  <User className="w-8 h-8 text-luxury-gold" />
                  <Badge variant="outline" className="text-luxury-gold border-luxury-gold">
                    {user.vipStatus}
                  </Badge>
                </div>
                <h1 className="text-luxury-title mb-2">My Account</h1>
                <p className="text-luxury-subtitle">
                  Welcome back, {user.name.split(' ')[0]}. Manage your luxury experience here.
                </p>
              </div>

              {/* Account Overview */}
              <div className="grid md:grid-cols-4 gap-6 mb-8">
                <Card className="card-luxury">
                  <CardContent className="p-6 text-center">
                    <Package className="w-8 h-8 text-luxury-gold mx-auto mb-3" />
                    <div className="text-2xl font-bold">{user.totalOrders}</div>
                    <div className="text-sm text-muted-foreground">Total Orders</div>
                  </CardContent>
                </Card>
                
                <Card className="card-luxury">
                  <CardContent className="p-6 text-center">
                    <CreditCard className="w-8 h-8 text-luxury-gold mx-auto mb-3" />
                    <div className="text-2xl font-bold">${user.totalSpent}</div>
                    <div className="text-sm text-muted-foreground">Total Spent</div>
                  </CardContent>
                </Card>
                
                <Card className="card-luxury">
                  <CardContent className="p-6 text-center">
                    <Star className="w-8 h-8 text-luxury-gold mx-auto mb-3" />
                    <div className="text-2xl font-bold">{user.loyaltyPoints}</div>
                    <div className="text-sm text-muted-foreground">Loyalty Points</div>
                  </CardContent>
                </Card>
                
                <Card className="card-luxury">
                  <CardContent className="p-6 text-center">
                    <Gift className="w-8 h-8 text-luxury-gold mx-auto mb-3" />
                    <div className="text-2xl font-bold">Gold</div>
                    <div className="text-sm text-muted-foreground">VIP Status</div>
                  </CardContent>
                </Card>
              </div>

              {/* Account Tabs */}
              <Tabs defaultValue="profile" className="w-full">
                <TabsList className="grid w-full grid-cols-6 mb-8">
                  <TabsTrigger value="profile" className="flex items-center space-x-2">
                    <User className="w-4 h-4" />
                    <span className="hidden sm:inline">Profile</span>
                  </TabsTrigger>
                  <TabsTrigger value="orders" className="flex items-center space-x-2">
                    <Package className="w-4 h-4" />
                    <span className="hidden sm:inline">Orders</span>
                  </TabsTrigger>
                  <TabsTrigger value="wishlist" className="flex items-center space-x-2">
                    <Heart className="w-4 h-4" />
                    <span className="hidden sm:inline">Wishlist</span>
                  </TabsTrigger>
                  <TabsTrigger value="addresses" className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4" />
                    <span className="hidden sm:inline">Addresses</span>
                  </TabsTrigger>
                  <TabsTrigger value="payment" className="flex items-center space-x-2">
                    <CreditCard className="w-4 h-4" />
                    <span className="hidden sm:inline">Payment</span>
                  </TabsTrigger>
                  <TabsTrigger value="settings" className="flex items-center space-x-2">
                    <Settings className="w-4 h-4" />
                    <span className="hidden sm:inline">Settings</span>
                  </TabsTrigger>
                </TabsList>

                {/* Profile Tab */}
                <TabsContent value="profile">
                  <div className="grid md:grid-cols-2 gap-8">
                    <Card className="card-luxury">
                      <CardHeader>
                        <CardTitle className="flex items-center space-x-2">
                          <User className="w-5 h-5 text-luxury-gold" />
                          <span>Personal Information</span>
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="firstName">First Name</Label>
                            <Input id="firstName" defaultValue="Alexandra" />
                          </div>
                          <div>
                            <Label htmlFor="lastName">Last Name</Label>
                            <Input id="lastName" defaultValue="Thompson" />
                          </div>
                        </div>
                        
                        <div>
                          <Label htmlFor="email">Email Address</Label>
                          <Input id="email" type="email" defaultValue={user.email} />
                        </div>
                        
                        <div>
                          <Label htmlFor="phone">Phone Number (Optional)</Label>
                          <Input id="phone" type="tel" placeholder="Not provided" />
                        </div>
                        
                        <div>
                          <Label htmlFor="birthdate">Date of Birth</Label>
                          <Input id="birthdate" type="date" defaultValue="1990-05-15" />
                        </div>
                        
                        <Button className="btn-luxury">Update Profile</Button>
                      </CardContent>
                    </Card>

                    <Card className="card-luxury">
                      <CardHeader>
                        <CardTitle className="flex items-center space-x-2">
                          <Shield className="w-5 h-5 text-luxury-gold" />
                          <span>Security Settings</span>
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div>
                          <Label htmlFor="currentPassword">Current Password</Label>
                          <div className="relative">
                            <Input 
                              id="currentPassword" 
                              type={showPassword ? "text" : "password"} 
                              placeholder="Enter current password"
                            />
                            <Button
                              type="button"
                              variant="ghost"
                              size="icon"
                              className="absolute right-2 top-1/2 -translate-y-1/2"
                              onClick={() => setShowPassword(!showPassword)}
                            >
                              {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                            </Button>
                          </div>
                        </div>
                        
                        <div>
                          <Label htmlFor="newPassword">New Password</Label>
                          <Input id="newPassword" type="password" placeholder="Enter new password" />
                        </div>
                        
                        <div>
                          <Label htmlFor="confirmPassword">Confirm New Password</Label>
                          <Input id="confirmPassword" type="password" placeholder="Confirm new password" />
                        </div>
                        
                        <Button className="btn-luxury">Update Password</Button>
                        
                        <Separator />
                        
                        <div className="text-center">
                          <p className="text-sm text-muted-foreground mb-3">
                            Two-factor authentication adds an extra layer of security
                          </p>
                          <Button variant="outline" className="btn-luxury-outline">
                            Enable 2FA
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>

                {/* Orders Tab */}
                <TabsContent value="orders">
                  <Card className="card-luxury">
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2">
                        <Package className="w-5 h-5 text-luxury-gold" />
                        <span>Order History</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {orders.map((order) => (
                          <div key={order.id} className="p-4 border border-border rounded-lg">
                            <div className="flex justify-between items-start mb-3">
                              <div>
                                <h3 className="font-semibold">Order {order.id}</h3>
                                <p className="text-sm text-muted-foreground">
                                  Placed on {new Date(order.date).toLocaleDateString()}
                                </p>
                              </div>
                              <div className="text-right">
                                <Badge 
                                  variant={order.status === 'Delivered' ? 'default' : 'secondary'}
                                  className={order.status === 'Delivered' ? 'bg-green-100 text-green-800' : ''}
                                >
                                  {order.status}
                                </Badge>
                                <p className="text-sm font-semibold mt-1">${order.total}</p>
                              </div>
                            </div>
                            
                            <div className="mb-3">
                              <p className="text-sm text-muted-foreground mb-1">Items:</p>
                              <p className="text-sm">{order.items.join(', ')}</p>
                            </div>
                            
                            <div className="flex space-x-2">
                              <Button variant="outline" size="sm">View Details</Button>
                              {order.status === 'Delivered' && (
                                <Button variant="outline" size="sm">Reorder</Button>
                              )}
                              {order.status === 'Processing' && (
                                <Button variant="outline" size="sm">
                                  <Truck className="w-4 h-4 mr-1" />
                                  Track Order
                                </Button>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                {/* Wishlist Tab */}
                <TabsContent value="wishlist">
                  <Card className="card-luxury">
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2">
                        <Heart className="w-5 h-5 text-luxury-gold" />
                        <span>My Wishlist</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      {wishlistItems.length > 0 ? (
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                          {wishlistItems.map((item) => (
                            <div key={item.id} className="p-4 border border-border rounded-lg">
                              <div className="aspect-square bg-luxury-cream rounded-lg mb-4 flex items-center justify-center">
                                <Package className="w-12 h-12 text-luxury-gold" />
                              </div>
                              <h3 className="font-semibold mb-2">{item.name}</h3>
                              <p className="text-luxury-gold font-bold mb-3">${item.price}</p>
                              <div className="space-y-2">
                                <Button className="w-full btn-luxury" size="sm">
                                  Add to Cart
                                </Button>
                                <Button variant="ghost" size="sm" className="w-full text-muted-foreground">
                                  Remove from Wishlist
                                </Button>
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="text-center py-12">
                          <Heart className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                          <h3 className="text-lg font-semibold mb-2">Your wishlist is empty</h3>
                          <p className="text-muted-foreground mb-4">
                            Start adding products you love to keep them safe for later
                          </p>
                          <Button className="btn-luxury">Browse Products</Button>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </TabsContent>

                {/* Addresses Tab */}
                <TabsContent value="addresses">
                  <div className="grid md:grid-cols-2 gap-8">
                    <Card className="card-luxury">
                      <CardHeader>
                        <CardTitle className="flex items-center space-x-2">
                          <MapPin className="w-5 h-5 text-luxury-gold" />
                          <span>Shipping Address</span>
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div>
                          <Label htmlFor="shippingName">Full Name</Label>
                          <Input id="shippingName" defaultValue={user.name} />
                        </div>
                        
                        <div>
                          <Label htmlFor="shippingAddress1">Address Line 1</Label>
                          <Input id="shippingAddress1" placeholder="Street address" />
                        </div>
                        
                        <div>
                          <Label htmlFor="shippingAddress2">Address Line 2 (Optional)</Label>
                          <Input id="shippingAddress2" placeholder="Apartment, suite, etc." />
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="shippingCity">City</Label>
                            <Input id="shippingCity" placeholder="City" />
                          </div>
                          <div>
                            <Label htmlFor="shippingState">State</Label>
                            <Input id="shippingState" placeholder="State" />
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="shippingZip">ZIP Code</Label>
                            <Input id="shippingZip" placeholder="ZIP code" />
                          </div>
                          <div>
                            <Label htmlFor="shippingCountry">Country</Label>
                            <Input id="shippingCountry" defaultValue="United States" />
                          </div>
                        </div>
                        
                        <Button className="btn-luxury">Save Shipping Address</Button>
                      </CardContent>
                    </Card>

                    <Card className="card-luxury">
                      <CardHeader>
                        <CardTitle className="flex items-center space-x-2">
                          <CreditCard className="w-5 h-5 text-luxury-gold" />
                          <span>Billing Address</span>
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="p-4 bg-luxury-cream rounded-lg">
                          <label className="flex items-center space-x-2">
                            <input type="checkbox" className="rounded" defaultChecked />
                            <span className="text-sm">Same as shipping address</span>
                          </label>
                        </div>
                        
                        <div>
                          <Label htmlFor="billingName">Full Name</Label>
                          <Input id="billingName" defaultValue={user.name} disabled />
                        </div>
                        
                        <div>
                          <Label htmlFor="billingAddress1">Address Line 1</Label>
                          <Input id="billingAddress1" placeholder="Street address" disabled />
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="billingCity">City</Label>
                            <Input id="billingCity" placeholder="City" disabled />
                          </div>
                          <div>
                            <Label htmlFor="billingState">State</Label>
                            <Input id="billingState" placeholder="State" disabled />
                          </div>
                        </div>
                        
                        <Button variant="outline" className="btn-luxury-outline" disabled>
                          Automatically Synced
                        </Button>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>

                {/* Payment Tab */}
                <TabsContent value="payment">
                  <Card className="card-luxury">
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2">
                        <CreditCard className="w-5 h-5 text-luxury-gold" />
                        <span>Payment Methods</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="p-4 border border-border rounded-lg">
                          <div className="flex justify-between items-start">
                            <div>
                              <h3 className="font-semibold">Visa •••• 4242</h3>
                              <p className="text-sm text-muted-foreground">Expires 12/26</p>
                              <Badge variant="secondary" className="mt-2">Default</Badge>
                            </div>
                            <div className="space-x-2">
                              <Button variant="outline" size="sm">Edit</Button>
                              <Button variant="outline" size="sm">Remove</Button>
                            </div>
                          </div>
                        </div>
                        
                        <div className="p-4 border border-border rounded-lg">
                          <div className="flex justify-between items-start">
                            <div>
                              <h3 className="font-semibold">PayPal</h3>
                              <p className="text-sm text-muted-foreground">{user.email}</p>
                            </div>
                            <div className="space-x-2">
                              <Button variant="outline" size="sm">Edit</Button>
                              <Button variant="outline" size="sm">Remove</Button>
                            </div>
                          </div>
                        </div>
                        
                        <Button className="btn-luxury">
                          Add New Payment Method
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                {/* Settings Tab */}
                <TabsContent value="settings">
                  <div className="grid md:grid-cols-2 gap-8">
                    <Card className="card-luxury">
                      <CardHeader>
                        <CardTitle className="flex items-center space-x-2">
                          <Mail className="w-5 h-5 text-luxury-gold" />
                          <span>Communication Preferences</span>
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="space-y-3">
                          <label className="flex items-center space-x-3">
                            <input type="checkbox" className="rounded" defaultChecked />
                            <div>
                              <p className="font-medium">Order Updates</p>
                              <p className="text-sm text-muted-foreground">
                                Receive notifications about your orders
                              </p>
                            </div>
                          </label>
                          
                          <label className="flex items-center space-x-3">
                            <input type="checkbox" className="rounded" defaultChecked />
                            <div>
                              <p className="font-medium">New Product Alerts</p>
                              <p className="text-sm text-muted-foreground">
                                Be first to know about new arrivals
                              </p>
                            </div>
                          </label>
                          
                          <label className="flex items-center space-x-3">
                            <input type="checkbox" className="rounded" />
                            <div>
                              <p className="font-medium">Special Offers</p>
                              <p className="text-sm text-muted-foreground">
                                Exclusive deals and promotions
                              </p>
                            </div>
                          </label>
                          
                          <label className="flex items-center space-x-3">
                            <input type="checkbox" className="rounded" />
                            <div>
                              <p className="font-medium">Educational Content</p>
                              <p className="text-sm text-muted-foreground">
                                Wellness tips and product guides
                              </p>
                            </div>
                          </label>
                        </div>
                        
                        <Button className="btn-luxury">Save Preferences</Button>
                      </CardContent>
                    </Card>

                    <Card className="card-luxury">
                      <CardHeader>
                        <CardTitle className="flex items-center space-x-2">
                          <Shield className="w-5 h-5 text-luxury-gold" />
                          <span>Privacy Settings</span>
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="space-y-3">
                          <label className="flex items-center space-x-3">
                            <input type="checkbox" className="rounded" defaultChecked />
                            <div>
                              <p className="font-medium">Discreet Packaging</p>
                              <p className="text-sm text-muted-foreground">
                                All orders shipped in plain packaging
                              </p>
                            </div>
                          </label>
                          
                          <label className="flex items-center space-x-3">
                            <input type="checkbox" className="rounded" defaultChecked />
                            <div>
                              <p className="font-medium">Anonymous Billing</p>
                              <p className="text-sm text-muted-foreground">
                                Generic merchant name on statements
                              </p>
                            </div>
                          </label>
                          
                          <label className="flex items-center space-x-3">
                            <input type="checkbox" className="rounded" />
                            <div>
                              <p className="font-medium">Data Analytics</p>
                              <p className="text-sm text-muted-foreground">
                                Help improve our service with usage data
                              </p>
                            </div>
                          </label>
                        </div>
                        
                        <Separator />
                        
                        <div className="space-y-3">
                          <Button variant="outline" className="w-full btn-luxury-outline">
                            Download My Data
                          </Button>
                          <Button variant="outline" className="w-full text-red-600 border-red-200 hover:bg-red-50">
                            Delete Account
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Account;
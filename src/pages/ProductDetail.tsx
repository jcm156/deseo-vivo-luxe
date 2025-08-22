import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Heart, Star, Truck, Shield, ArrowLeft, Plus, Minus, Share2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import product1 from '@/assets/product-1.jpg';
import product2 from '@/assets/product-2.jpg';
import product3 from '@/assets/product-3.jpg';
import product4 from '@/assets/product-4.jpg';

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [quantity, setQuantity] = useState(1);
  const [selectedVariant, setSelectedVariant] = useState('Rose Gold');
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // Mock product data - in real app this would come from your product database
  const products = {
    1: {
      id: 1,
      name: 'Aria Luxury Massager',
      category: 'For Her',
      price: 299,
      originalPrice: 399,
      rating: 4.9,
      reviews: 127,
      images: [product1, product2, product3],
      variants: ['Rose Gold', 'Platinum', 'Obsidian'],
      description: 'Experience unparalleled luxury with the Aria massager, crafted from premium medical-grade silicone with whisper-quiet technology. This sophisticated piece combines elegant design with powerful performance.',
      features: [
        'Medical-grade silicone construction',
        'Whisper-quiet operation under 40dB',
        'USB rechargeable with 2-hour runtime',
        '100% waterproof design',
        '10 vibration patterns',
        '5 intensity levels'
      ],
      specifications: {
        'Dimensions': '8.5" x 1.2" x 1.1"',
        'Weight': '4.2 oz',
        'Material': 'Medical-grade silicone',
        'Battery': 'Lithium-ion rechargeable',
        'Warranty': '1 year international warranty'
      },
      inStock: true,
      stockLevel: 'low'
    },
    2: {
      id: 2,
      name: 'Obsidian Couples Kit',
      category: 'For Couples',
      price: 189,
      originalPrice: null,
      rating: 4.8,
      reviews: 89,
      images: [product2, product1, product4],
      variants: ['Standard', 'Deluxe'],
      description: 'Elevate intimate moments with this comprehensive couples collection. Each piece is designed for shared experiences and enhanced connection.',
      features: [
        'Complete couples experience',
        'Premium gift packaging',
        'Discreet storage case',
        'Body-safe materials only',
        'Multiple intensity options',
        'Easy maintenance'
      ],
      specifications: {
        'Kit Contents': '3 premium pieces',
        'Material': 'Body-safe silicone',
        'Packaging': 'Luxury gift box',
        'Care': 'Easy clean design',
        'Warranty': '1 year warranty'
      },
      inStock: true,
      stockLevel: 'high'
    }
    // Add more products as needed
  };

  const product = products[parseInt(id || '0') as keyof typeof products];

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="section-padding">
          <div className="container-luxury text-center">
            <h1 className="text-luxury-title mb-4">Product Not Found</h1>
            <p className="text-luxury-subtitle mb-8">
              The product you're looking for doesn't exist or has been removed.
            </p>
            <Link to="/collections/all">
              <Button className="btn-luxury">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Products
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const handleAddToCart = () => {
    // Add to cart logic here
    console.log('Added to cart:', { productId: product.id, quantity, variant: selectedVariant });
  };

  const increaseQuantity = () => setQuantity(prev => prev + 1);
  const decreaseQuantity = () => setQuantity(prev => Math.max(1, prev - 1));

  return (
    <>
      <Helmet>
        <title>{product.name} | DeseoVivo Luxury Boutique</title>
        <meta name="description" content={product.description} />
        <meta property="og:title" content={product.name} />
        <meta property="og:description" content={product.description} />
        <meta property="og:image" content={product.images[0]} />
        <link rel="canonical" href={`https://deseovivo.com/products/${product.id}`} />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        <main>
          {/* Breadcrumb */}
          <section className="py-4 border-b">
            <div className="container-luxury">
              <nav className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Link to="/" className="hover:text-luxury-gold">Home</Link>
                <span>/</span>
                <Link to="/collections/all" className="hover:text-luxury-gold">Products</Link>
                <span>/</span>
                <span className="text-luxury-charcoal">{product.name}</span>
              </nav>
            </div>
          </section>

          {/* Product Detail */}
          <section className="section-padding">
            <div className="container-luxury">
              <div className="grid md:grid-cols-2 gap-12">
                {/* Image Gallery */}
                <div className="space-y-4">
                  <div className="relative">
                    <img
                      src={product.images[activeImageIndex]}
                      alt={product.name}
                      className="w-full h-96 md:h-[500px] object-cover rounded-lg"
                    />
                    {product.originalPrice && (
                      <Badge className="absolute top-4 right-4 bg-destructive text-destructive-foreground">
                        Save ${product.originalPrice - product.price}
                      </Badge>
                    )}
                  </div>
                  
                  {product.images.length > 1 && (
                    <div className="flex gap-2">
                      {product.images.map((image, index) => (
                        <button
                          key={index}
                          onClick={() => setActiveImageIndex(index)}
                          className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors ${
                            index === activeImageIndex 
                              ? 'border-luxury-gold' 
                              : 'border-gray-200 hover:border-luxury-gold/50'
                          }`}
                        >
                          <img
                            src={image}
                            alt={`${product.name} view ${index + 1}`}
                            className="w-full h-full object-cover"
                          />
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Product Info */}
                <div className="space-y-6">
                  <div>
                    <Badge variant="outline" className="text-luxury-gold border-luxury-gold mb-3">
                      {product.category}
                    </Badge>
                    <h1 className="text-luxury-title">{product.name}</h1>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center space-x-2">
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-5 w-5 ${
                            i < Math.floor(product.rating)
                              ? 'fill-luxury-gold text-luxury-gold'
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {product.rating} ({product.reviews} reviews)
                    </span>
                  </div>

                  {/* Price */}
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl font-bold text-luxury-charcoal">
                      ${product.price}
                    </span>
                    {product.originalPrice && (
                      <>
                        <span className="text-xl text-muted-foreground line-through">
                          ${product.originalPrice}
                        </span>
                        <Badge className="bg-luxury-gold text-luxury-black">
                          Save ${product.originalPrice - product.price}
                        </Badge>
                      </>
                    )}
                  </div>

                  <p className="text-muted-foreground leading-relaxed">
                    {product.description}
                  </p>

                  {/* Variants */}
                  <div className="space-y-3">
                    <label className="text-sm font-medium">Finish:</label>
                    <div className="flex gap-2">
                      {product.variants.map((variant) => (
                        <button
                          key={variant}
                          onClick={() => setSelectedVariant(variant)}
                          className={`px-4 py-2 rounded-lg border transition-colors ${
                            selectedVariant === variant
                              ? 'border-luxury-gold bg-luxury-gold/10 text-luxury-gold'
                              : 'border-gray-300 hover:border-luxury-gold/50'
                          }`}
                        >
                          {variant}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Quantity & Add to Cart */}
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <label className="text-sm font-medium">Quantity:</label>
                      <div className="flex items-center space-x-2">
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={decreaseQuantity}
                          className="h-8 w-8"
                        >
                          <Minus className="h-3 w-3" />
                        </Button>
                        <span className="w-12 text-center font-medium">{quantity}</span>
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={increaseQuantity}
                          className="h-8 w-8"
                        >
                          <Plus className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <Button
                        className="flex-1 btn-luxury"
                        onClick={handleAddToCart}
                      >
                        Add to Cart - ${product.price}
                      </Button>
                      <Button variant="outline" size="icon">
                        <Heart className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="icon">
                        <Share2 className="h-4 w-4" />
                      </Button>
                    </div>

                    {product.stockLevel === 'low' && (
                      <p className="text-destructive text-sm">⚡ Only a few left in stock!</p>
                    )}
                  </div>

                  {/* Trust Indicators */}
                  <Card className="card-luxury">
                    <CardContent className="p-4 space-y-3">
                      <div className="flex items-center space-x-3 text-sm">
                        <Truck className="h-4 w-4 text-luxury-gold" />
                        <span>Free discreet shipping on orders over $200</span>
                      </div>
                      <div className="flex items-center space-x-3 text-sm">
                        <Shield className="h-4 w-4 text-luxury-gold" />
                        <span>30-day return guarantee</span>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Product Details Tabs */}
              <div className="mt-16">
                <Tabs defaultValue="description" className="w-full">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="description">Description</TabsTrigger>
                    <TabsTrigger value="specifications">Specifications</TabsTrigger>
                    <TabsTrigger value="reviews">Reviews ({product.reviews})</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="description" className="mt-6">
                    <Card className="card-luxury">
                      <CardContent className="p-6">
                        <div className="prose prose-gray max-w-none">
                          <p className="text-lg mb-4">{product.description}</p>
                          <h4 className="font-semibold mb-3">Key Features:</h4>
                          <ul className="space-y-2">
                            {product.features.map((feature, index) => (
                              <li key={index} className="flex items-start space-x-2">
                                <span className="text-luxury-gold">•</span>
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                  
                  <TabsContent value="specifications" className="mt-6">
                    <Card className="card-luxury">
                      <CardContent className="p-6">
                        <div className="space-y-4">
                          {Object.entries(product.specifications).map(([key, value]) => (
                            <div key={key} className="flex justify-between border-b pb-2">
                              <span className="font-medium">{key}:</span>
                              <span className="text-muted-foreground">{value}</span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                  
                  <TabsContent value="reviews" className="mt-6">
                    <Card className="card-luxury">
                      <CardContent className="p-6">
                        <div className="text-center py-8">
                          <h3 className="text-lg font-semibold mb-2">Customer Reviews</h3>
                          <p className="text-muted-foreground mb-4">
                            {product.reviews} verified reviews with {product.rating} average rating
                          </p>
                          <Button variant="outline" className="btn-luxury-outline">
                            Write a Review
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default ProductDetail;
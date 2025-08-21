import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Heart, Star, Filter, Grid, List } from 'lucide-react';
import { Link } from 'react-router-dom';
import product1 from '@/assets/product-1.jpg';
import product2 from '@/assets/product-2.jpg';
import product3 from '@/assets/product-3.jpg';

const Collections = () => {
  const { category } = useParams();
  const [viewMode, setViewMode] = useState('grid');
  const [sortBy, setSortBy] = useState('featured');
  const [priceRange, setPriceRange] = useState([50, 500]);

  // Mock products data
  const products = [
    {
      id: 1,
      name: 'Aria Luxury Massager',
      category: 'For Her',
      price: 299,
      originalPrice: 399,
      rating: 4.9,
      reviews: 127,
      image: product1,
      badge: 'Bestseller',
      description: 'Premium silicone with whisper-quiet technology',
      inStock: true,
      stockLevel: 'low' // low, medium, high
    },
    {
      id: 2,
      name: 'Obsidian Couples Kit',
      category: 'For Couples',
      price: 189,
      rating: 4.8,
      reviews: 89,
      image: product2,
      badge: 'New',
      description: 'Complete luxury experience for intimate moments',
      inStock: true,
      stockLevel: 'high'
    },
    {
      id: 3,
      name: 'Platinum Wellness Set',
      category: 'Wellness',
      price: 149,
      rating: 4.9,
      reviews: 156,
      image: product3,
      badge: 'Premium',
      description: 'Holistic intimacy and wellness collection',
      inStock: true,
      stockLevel: 'medium'
    },
    // Add more products...
  ];

  const categoryInfo = {
    'for-her': {
      title: 'For Her',
      description: 'Luxurious intimate products designed specifically for women\'s pleasure and wellness.',
      seoTitle: 'Luxury Intimate Products For Her | DeseoVivo',
    },
    'for-him': {
      title: 'For Him', 
      description: 'Premium intimate wellness products crafted for the sophisticated gentleman.',
      seoTitle: 'Premium Intimate Products For Him | DeseoVivo',
    },
    'for-couples': {
      title: 'For Couples',
      description: 'Enhance intimacy together with our curated couples collection.',
      seoTitle: 'Luxury Couples Intimate Products | DeseoVivo',
    },
    'privee': {
      title: 'Privée Collection',
      description: 'Our most exclusive, limited-edition luxury intimate products.',
      seoTitle: 'Exclusive Privée Collection | DeseoVivo Luxury',
    },
    'wellness': {
      title: 'Wellness',
      description: 'Holistic intimate wellness products for mind, body, and soul.',
      seoTitle: 'Intimate Wellness Products | DeseoVivo',
    },
    'luxury-gifts': {
      title: 'Luxury Gifts',
      description: 'Thoughtfully curated gift sets for special occasions.',
      seoTitle: 'Luxury Intimate Gift Sets | DeseoVivo',
    },
    'all': {
      title: 'All Products',
      description: 'Browse our complete collection of luxury intimate products.',
      seoTitle: 'All Luxury Intimate Products | DeseoVivo',
    }
  };

  const currentCategory = categoryInfo[category as keyof typeof categoryInfo] || categoryInfo['all'];

  const getStockIndicator = (stockLevel: string) => {
    switch (stockLevel) {
      case 'low':
        return <Badge variant="destructive" className="text-xs">Only 2 left</Badge>;
      case 'medium':
        return <Badge variant="secondary" className="text-xs">Limited stock</Badge>;
      default:
        return null;
    }
  };

  return (
    <>
      <Helmet>
        <title>{currentCategory.seoTitle}</title>
        <meta name="description" content={currentCategory.description} />
        <meta name="keywords" content="luxury intimate products, premium adult toys, intimate wellness" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        <main>
          {/* Hero Banner */}
          <section className="bg-luxury-charcoal text-luxury-white py-16">
            <div className="container-luxury text-center">
              <h1 className="text-luxury-title text-luxury-white mb-4">
                {currentCategory.title}
              </h1>
              <p className="text-luxury-subtitle text-luxury-white/70 max-w-2xl mx-auto">
                {currentCategory.description}
              </p>
            </div>
          </section>

          {/* Filters & Products */}
          <section className="section-padding">
            <div className="container-luxury">
              {/* Filter Bar */}
              <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-8 p-4 bg-luxury-cream/30 rounded-lg">
                <div className="flex items-center gap-4">
                  <Button variant="outline" size="sm" className="flex items-center gap-2">
                    <Filter className="h-4 w-4" />
                    Filters
                  </Button>
                  
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium">Price:</span>
                    <div className="w-32">
                      <Slider
                        value={priceRange}
                        onValueChange={setPriceRange}
                        max={1000}
                        min={0}
                        step={10}
                        className="w-full"
                      />
                    </div>
                    <span className="text-sm text-muted-foreground">
                      ${priceRange[0]} - ${priceRange[1]}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <Select value={sortBy} onValueChange={setSortBy}>
                    <SelectTrigger className="w-40">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="featured">Featured</SelectItem>
                      <SelectItem value="price-low">Price: Low to High</SelectItem>
                      <SelectItem value="price-high">Price: High to Low</SelectItem>
                      <SelectItem value="rating">Highest Rated</SelectItem>
                      <SelectItem value="newest">Newest</SelectItem>
                    </SelectContent>
                  </Select>

                  <div className="flex border rounded-md">
                    <Button
                      variant={viewMode === 'grid' ? 'default' : 'ghost'}
                      size="sm"
                      onClick={() => setViewMode('grid')}
                      className="rounded-r-none"
                    >
                      <Grid className="h-4 w-4" />
                    </Button>
                    <Button
                      variant={viewMode === 'list' ? 'default' : 'ghost'}
                      size="sm"
                      onClick={() => setViewMode('list')}
                      className="rounded-l-none"
                    >
                      <List className="h-4 w-4" />
                    </Button>
                  </div>

                  <span className="text-sm text-muted-foreground">
                    {products.length} products
                  </span>
                </div>
              </div>

              {/* Products Grid */}
              <div className={`grid gap-6 ${
                viewMode === 'grid' 
                  ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
                  : 'grid-cols-1'
              }`}>
                {products.map((product) => (
                  <Card key={product.id} className="card-luxury group">
                    <CardContent className="p-0">
                      {viewMode === 'grid' ? (
                        // Grid View
                        <>
                          <div className="relative overflow-hidden rounded-t-lg">
                            <img
                              src={product.image}
                              alt={product.name}
                              className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            
                            <Badge className="absolute top-3 left-3 bg-luxury-gold text-luxury-black">
                              {product.badge}
                            </Badge>
                            
                            <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                              <Button size="icon" variant="secondary" className="h-8 w-8">
                                <Heart className="h-4 w-4" />
                              </Button>
                            </div>

                            {product.originalPrice && (
                              <Badge className="absolute bottom-3 left-3 bg-destructive">
                                Save ${product.originalPrice - product.price}
                              </Badge>
                            )}
                          </div>

                          <div className="p-6">
                            <div className="flex items-center justify-between mb-2">
                              <Badge variant="outline" className="text-xs text-luxury-gold border-luxury-gold">
                                {product.category}
                              </Badge>
                              {getStockIndicator(product.stockLevel)}
                            </div>
                            
                            <h3 className="font-heading text-lg font-semibold mb-2">
                              {product.name}
                            </h3>
                            
                            <p className="text-sm text-muted-foreground mb-3">
                              {product.description}
                            </p>
                            
                            <div className="flex items-center space-x-1 mb-3">
                              <div className="flex space-x-1">
                                {[...Array(5)].map((_, i) => (
                                  <Star
                                    key={i}
                                    className={`h-4 w-4 ${
                                      i < Math.floor(product.rating)
                                        ? 'fill-luxury-gold text-luxury-gold'
                                        : 'text-gray-300'
                                    }`}
                                  />
                                ))}
                              </div>
                              <span className="text-sm text-muted-foreground">
                                ({product.reviews})
                              </span>
                            </div>
                            
                            <div className="flex items-center justify-between mb-4">
                              <div className="flex items-center space-x-2">
                                <span className="text-lg font-bold">
                                  ${product.price}
                                </span>
                                {product.originalPrice && (
                                  <span className="text-sm text-muted-foreground line-through">
                                    ${product.originalPrice}
                                  </span>
                                )}
                              </div>
                            </div>
                            
                            <Link to={`/products/${product.id}`}>
                              <Button className="w-full btn-luxury-outline">
                                View Details
                              </Button>
                            </Link>
                          </div>
                        </>
                      ) : (
                        // List View
                        <div className="flex p-6">
                          <div className="relative w-48 h-48 flex-shrink-0 mr-6">
                            <img
                              src={product.image}
                              alt={product.name}
                              className="w-full h-full object-cover rounded-lg"
                            />
                            <Badge className="absolute top-2 left-2 bg-luxury-gold text-luxury-black">
                              {product.badge}
                            </Badge>
                          </div>
                          
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-2">
                              <Badge variant="outline" className="text-xs text-luxury-gold border-luxury-gold">
                                {product.category}
                              </Badge>
                              {getStockIndicator(product.stockLevel)}
                            </div>
                            
                            <h3 className="font-heading text-xl font-semibold mb-2">
                              {product.name}
                            </h3>
                            
                            <p className="text-muted-foreground mb-4">
                              {product.description}
                            </p>
                            
                            <div className="flex items-center space-x-4 mb-4">
                              <div className="flex items-center space-x-1">
                                <div className="flex space-x-1">
                                  {[...Array(5)].map((_, i) => (
                                    <Star
                                      key={i}
                                      className={`h-4 w-4 ${
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
                            </div>
                            
                            <div className="flex items-center justify-between">
                              <div className="flex items-center space-x-2">
                                <span className="text-2xl font-bold">
                                  ${product.price}
                                </span>
                                {product.originalPrice && (
                                  <span className="text-lg text-muted-foreground line-through">
                                    ${product.originalPrice}
                                  </span>
                                )}
                              </div>
                              
                              <div className="flex items-center space-x-3">
                                <Button variant="outline" size="icon">
                                  <Heart className="h-4 w-4" />
                                </Button>
                                <Link to={`/products/${product.id}`}>
                                  <Button className="btn-luxury">
                                    View Details
                                  </Button>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Load More */}
              <div className="text-center mt-12">
                <Button className="btn-luxury-outline">
                  Load More Products
                </Button>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Collections;
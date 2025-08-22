import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Heart, Star, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';
import product1 from '@/assets/product-1.jpg';
import product2 from '@/assets/product-2.jpg';
import product3 from '@/assets/product-3.jpg';
import product4 from '@/assets/product-4.jpg';

const ProductShowcase = () => {
  const featuredProducts = [
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
      description: 'Premium silicone with whisper-quiet technology'
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
      description: 'Complete luxury experience for intimate moments'
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
      description: 'Holistic intimacy and wellness collection'
    },
    {
      id: 4,
      name: 'Velvet Touch Collection',
      category: 'Privée',
      price: 459,
      rating: 5.0,
      reviews: 23,
      image: product4,
      badge: 'Exclusive',
      description: 'Hand-crafted luxury with 24k gold accents'
    }
  ];

  return (
    <section className="section-padding bg-luxury-cream/30">
      <div className="container-luxury">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-luxury-title mb-4">
            Curated Luxury Collection
          </h2>
          <p className="text-luxury-subtitle max-w-2xl mx-auto">
            Discover our handpicked selection of premium intimate products, 
            crafted for those who appreciate the finest in luxury and wellness.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {featuredProducts.map((product, index) => (
            <Card 
              key={product.id} 
              className="card-luxury group animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-0">
                {/* Product Image */}
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  
                  {/* Badge */}
            <Badge className="absolute top-3 left-3 bg-luxury-gold text-luxury-black">
              {product.badge}
            </Badge>
                  
                  {/* Quick Actions */}
                  <div className="absolute top-3 right-3 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button size="icon" variant="secondary" className="h-8 w-8">
                      <Heart className="h-4 w-4" />
                    </Button>
                    <Button size="icon" variant="secondary" className="h-8 w-8">
                      <Eye className="h-4 w-4" />
                    </Button>
                  </div>

                  {/* Sale Badge */}
                  {product.originalPrice && (
                    <Badge className="absolute bottom-3 left-3 bg-destructive text-destructive-foreground">
                      Save ${product.originalPrice - product.price}
                    </Badge>
                  )}
                </div>

                {/* Product Info */}
                <div className="p-6">
                  <div className="mb-2">
                    <Badge variant="outline" className="text-xs text-luxury-gold border-luxury-gold">
                      {product.category}
                    </Badge>
                  </div>
                  
                  <h3 className="font-heading text-lg font-semibold mb-2 text-luxury-charcoal">
                    {product.name}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                    {product.description}
                  </p>
                  
                  {/* Rating */}
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
                      {product.rating} ({product.reviews})
                    </span>
                  </div>
                  
                  {/* Price */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <span className="text-lg font-bold text-luxury-charcoal">
                        ${product.price}
                      </span>
                      {product.originalPrice && (
                        <span className="text-sm text-muted-foreground line-through">
                          ${product.originalPrice}
                        </span>
                      )}
                    </div>
                  </div>
                  
                  {/* Add to Cart */}
                                <Link to={`/products/${product.id}`}>
                    <Button className="w-full btn-luxury-outline">
                      View Details
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link to="/collections/all">
            <Button className="btn-luxury">
              View All Products
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
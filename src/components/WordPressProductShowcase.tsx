import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';
import { Heart, Star, Eye, ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useFeaturedProducts, useAddToCart, useProductUtils } from '@/hooks/useWordPressProducts';

const WordPressProductShowcase = () => {
  const { data: products, isLoading, isError } = useFeaturedProducts(8);
  const addToCartMutation = useAddToCart();
  const { formatPrice, calculateSalePercentage, isOnSale, getProductImage } = useProductUtils();

  const handleAddToCart = (productId: number, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCartMutation.mutate({ productId, quantity: 1 });
  };

  if (isLoading) {
    return (
      <section className="section-padding bg-luxury-cream/30">
        <div className="container-luxury">
          <div className="text-center mb-16">
            <h2 className="text-luxury-title mb-4">
              Curated Luxury Collection
            </h2>
            <p className="text-luxury-subtitle max-w-2xl mx-auto">
              Discover our handpicked selection of premium intimate products, 
              crafted for those who appreciate the finest in luxury and wellness.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[...Array(8)].map((_, index) => (
              <Card key={index} className="card-luxury">
                <CardContent className="p-0">
                  <Skeleton className="w-full h-64 rounded-t-lg" />
                  <div className="p-6">
                    <Skeleton className="h-4 w-20 mb-2" />
                    <Skeleton className="h-6 w-full mb-2" />
                    <Skeleton className="h-4 w-full mb-3" />
                    <Skeleton className="h-4 w-24 mb-3" />
                    <Skeleton className="h-6 w-20 mb-4" />
                    <Skeleton className="h-10 w-full" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // For now, show mock products while WordPress is being configured
  const mockProducts = [
    {
      id: 1,
      name: 'Aria Luxury Massager',
      short_description: 'Premium silicone with whisper-quiet technology',
      images: [{ src: 'https://images.unsplash.com/photo-1585565804773-f2b0cd3056c7?w=400' }],
      price: '299',
      regular_price: '399',
      rating: { average: '4.9', count: 127 },
      featured: true,
      stock_status: 'instock'
    },
    {
      id: 2,
      name: 'Obsidian Couples Kit',
      short_description: 'Complete luxury experience for intimate moments',
      images: [{ src: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=400' }],
      price: '189',
      regular_price: null,
      rating: { average: '4.8', count: 89 },
      featured: true,
      stock_status: 'instock'
    },
    {
      id: 3,
      name: 'Platinum Wellness Set',
      short_description: 'Holistic intimacy and wellness collection',
      images: [{ src: 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=400' }],
      price: '149',
      regular_price: null,
      rating: { average: '4.9', count: 156 },
      featured: true,
      stock_status: 'instock'
    },
    {
      id: 4,
      name: 'Rose Gold Elegance',
      short_description: 'Sophisticated design meets powerful performance',
      images: [{ src: 'https://images.unsplash.com/photo-1522336284037-91f31aa03b65?w=400' }],
      price: '259',
      regular_price: '329',
      rating: { average: '4.7', count: 203 },
      featured: true,
      stock_status: 'instock'
    }
  ];

  // Use mock data if WordPress is not configured or failing
  const displayProducts = isError || !products ? mockProducts : products;

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
          {displayProducts.map((product, index) => {
            const isProductOnSale = isOnSale(product);
            const salePercentage = isProductOnSale 
              ? calculateSalePercentage(product.regular_price || product.price, product.price)
              : 0;

            return (
              <Card 
                key={product.id} 
                className="card-luxury group animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-0">
                  {/* Product Image */}
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img
                      src={getProductImage(product)}
                      alt={product.name}
                      className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                      onError={(e) => {
                        e.currentTarget.src = 'https://images.unsplash.com/photo-1585565804773-f2b0cd3056c7?w=400';
                      }}
                    />
                    
                    {/* Featured Badge */}
                    {product.featured && (
                      <Badge className="absolute top-3 left-3 bg-luxury-gold text-luxury-black">
                        Featured
                      </Badge>
                    )}

                    {/* Sale Badge */}
                    {isProductOnSale && (
                      <Badge className="absolute top-3 right-3 bg-destructive text-destructive-foreground">
                        -{salePercentage}%
                      </Badge>
                    )}
                    
                    {/* Quick Actions */}
                    <div className="absolute top-3 right-3 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      {!isProductOnSale && (
                        <>
                          <Button size="icon" variant="secondary" className="h-8 w-8">
                            <Heart className="h-4 w-4" />
                          </Button>
                          <Button size="icon" variant="secondary" className="h-8 w-8">
                            <Eye className="h-4 w-4" />
                          </Button>
                        </>
                      )}
                    </div>

                    {/* Quick Add to Cart */}
                    <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Button
                        size="icon"
                        className="h-10 w-10 bg-luxury-gold hover:bg-luxury-gold/90 text-luxury-black"
                        onClick={(e) => handleAddToCart(product.id, e)}
                        disabled={addToCartMutation.isPending || product.stock_status !== 'instock'}
                      >
                        <ShoppingCart className="h-4 w-4" />
                      </Button>
                    </div>

                    {/* Stock Status */}
                    {product.stock_status !== 'instock' && (
                      <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                        <Badge variant="destructive">Out of Stock</Badge>
                      </div>
                    )}
                  </div>

                  {/* Product Info */}
                  <div className="p-6">
                    {/* Categories */}
                    {product.categories && product.categories.length > 0 && (
                      <div className="mb-2">
                        <Badge variant="outline" className="text-xs text-luxury-gold border-luxury-gold">
                          {product.categories[0].name}
                        </Badge>
                      </div>
                    )}
                    
                    <h3 className="font-heading text-lg font-semibold mb-2 text-luxury-charcoal">
                      {product.name}
                    </h3>
                    
                    {/* Short Description */}
                    {product.short_description && (
                      <div 
                        className="text-sm text-muted-foreground mb-3 line-clamp-2"
                        dangerouslySetInnerHTML={{ 
                          __html: product.short_description.replace(/<[^>]*>/g, '') 
                        }}
                      />
                    )}
                    
                    {/* Rating */}
                    {(product.rating?.count || 0) > 0 && (
                      <div className="flex items-center space-x-1 mb-3">
                        <div className="flex space-x-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${
                                i < Math.floor(parseFloat(product.rating?.average || '0'))
                                  ? 'fill-luxury-gold text-luxury-gold'
                                  : 'text-gray-300'
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-sm text-muted-foreground">
                          {product.rating?.average} ({product.rating?.count})
                        </span>
                      </div>
                    )}
                    
                    {/* Price */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-2">
                        <span className="text-lg font-bold text-luxury-charcoal">
                          {formatPrice(product.price)}
                        </span>
                        {isProductOnSale && product.regular_price && (
                          <span className="text-sm text-muted-foreground line-through">
                            {formatPrice(product.regular_price)}
                          </span>
                        )}
                      </div>
                    </div>
                    
                    {/* Actions */}
                    <div className="space-y-2">
                      <Link to={`/products/${product.id}`}>
                        <Button className="w-full btn-luxury-outline">
                          View Details
                        </Button>
                      </Link>
                      
                      {product.stock_status === 'instock' && (
                        <Button 
                          className="w-full btn-luxury"
                          onClick={(e) => handleAddToCart(product.id, e)}
                          disabled={addToCartMutation.isPending}
                        >
                          {addToCartMutation.isPending ? 'Adding...' : 'Add to Cart'}
                        </Button>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
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

export default WordPressProductShowcase;
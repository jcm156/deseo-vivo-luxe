import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Skeleton } from '@/components/ui/skeleton';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Heart, Star, Truck, Shield, ArrowLeft, Plus, Minus } from 'lucide-react';
import { Link } from 'react-router-dom';
import { 
  useProductBySlug, 
  useProductVariations, 
  useProductReviews, 
  useAddToCart, 
  useProductUtils 
} from '@/hooks/useWordPressProducts';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const WordPressProductDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const [quantity, setQuantity] = useState(1);
  const [selectedVariation, setSelectedVariation] = useState<any>(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const { data: product, isLoading, isError } = useProductBySlug(slug || '');
  const { data: variations } = useProductVariations(product?.id || 0);
  const { data: reviews } = useProductReviews(product?.id || 0);
  const addToCartMutation = useAddToCart();
  const { formatPrice, calculateSalePercentage, isOnSale, getProductGallery } = useProductUtils();

  const handleAddToCart = () => {
    if (!product) return;
    
    addToCartMutation.mutate({
      productId: product.id,
      quantity,
      variation: selectedVariation
    });
  };

  const increaseQuantity = () => setQuantity(prev => prev + 1);
  const decreaseQuantity = () => setQuantity(prev => Math.max(1, prev - 1));

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="section-padding">
          <div className="container-luxury">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Image Gallery Skeleton */}
              <div className="space-y-4">
                <Skeleton className="w-full h-96 rounded-lg" />
                <div className="flex gap-2">
                  {[...Array(4)].map((_, i) => (
                    <Skeleton key={i} className="w-20 h-20 rounded-lg" />
                  ))}
                </div>
              </div>
              
              {/* Product Info Skeleton */}
              <div className="space-y-4">
                <Skeleton className="h-8 w-3/4" />
                <Skeleton className="h-6 w-1/2" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-3/4" />
                <div className="space-y-2">
                  <Skeleton className="h-10 w-full" />
                  <Skeleton className="h-10 w-full" />
                </div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (isError || !product) {
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

  const isProductOnSale = isOnSale(product);
  const salePercentage = isProductOnSale 
    ? calculateSalePercentage(product.regular_price, product.sale_price)
    : 0;
  const gallery = getProductGallery(product);
  const currentImage = gallery[activeImageIndex] || gallery[0];

  return (
    <>
      <Helmet>
        <title>{product.name} | DeseoVivo Luxury Boutique</title>
        <meta name="description" content={product.short_description.replace(/<[^>]*>/g, '')} />
        <meta property="og:title" content={product.name} />
        <meta property="og:description" content={product.short_description.replace(/<[^>]*>/g, '')} />
        <meta property="og:image" content={currentImage?.src} />
        <meta property="og:url" content={product.permalink} />
        <link rel="canonical" href={product.permalink} />
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
                  {/* Main Image */}
                  <div className="relative">
                    <img
                      src={currentImage?.src || '/placeholder-product.jpg'}
                      alt={currentImage?.alt || product.name}
                      className="w-full h-96 md:h-[500px] object-cover rounded-lg"
                    />
                    
                    {/* Sale Badge */}
                    {isProductOnSale && (
                      <Badge className="absolute top-4 right-4 bg-destructive text-destructive-foreground">
                        -{salePercentage}% OFF
                      </Badge>
                    )}
                  </div>
                  
                  {/* Thumbnail Gallery */}
                  {gallery.length > 1 && (
                    <div className="flex gap-2 overflow-x-auto">
                      {gallery.map((image, index) => (
                        <button
                          key={image.id}
                          onClick={() => setActiveImageIndex(index)}
                          className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors ${
                            index === activeImageIndex 
                              ? 'border-luxury-gold' 
                              : 'border-gray-200 hover:border-luxury-gold/50'
                          }`}
                        >
                          <img
                            src={image.src}
                            alt={image.alt}
                            className="w-full h-full object-cover"
                          />
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Product Info */}
                <div className="space-y-6">
                  {/* Categories */}
                  {product.categories && product.categories.length > 0 && (
                    <div className="flex gap-2">
                      {product.categories.map((category) => (
                        <Badge 
                          key={category.id} 
                          variant="outline" 
                          className="text-luxury-gold border-luxury-gold"
                        >
                          {category.name}
                        </Badge>
                      ))}
                    </div>
                  )}

                  {/* Title */}
                  <h1 className="text-luxury-title">{product.name}</h1>

                  {/* Rating */}
                  {product.rating_count > 0 && (
                    <div className="flex items-center space-x-2">
                      <div className="flex space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-5 w-5 ${
                              i < Math.floor(parseFloat(product.average_rating))
                                ? 'fill-luxury-gold text-luxury-gold'
                                : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-muted-foreground">
                        {product.average_rating} ({product.rating_count} reviews)
                      </span>
                    </div>
                  )}

                  {/* Price */}
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl font-bold text-luxury-charcoal">
                      {formatPrice(product.price)}
                    </span>
                    {isProductOnSale && product.regular_price && (
                      <>
                        <span className="text-xl text-muted-foreground line-through">
                          {formatPrice(product.regular_price)}
                        </span>
                        <Badge className="bg-luxury-gold text-luxury-black">
                          Save {formatPrice(parseFloat(product.regular_price) - parseFloat(product.price))}
                        </Badge>
                      </>
                    )}
                  </div>

                  {/* Short Description */}
                  {product.short_description && (
                    <div 
                      className="text-muted-foreground prose prose-sm max-w-none"
                      dangerouslySetInnerHTML={{ __html: product.short_description }}
                    />
                  )}

                  {/* Variations */}
                  {variations && variations.length > 0 && (
                    <div className="space-y-3">
                      <label className="text-sm font-medium">Options:</label>
                      <Select onValueChange={(value) => setSelectedVariation(JSON.parse(value))}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select an option" />
                        </SelectTrigger>
                        <SelectContent>
                          {variations.map((variation: any) => (
                            <SelectItem key={variation.id} value={JSON.stringify(variation)}>
                              {variation.attributes.map((attr: any) => attr.option).join(', ')} - {formatPrice(variation.price)}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  )}

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
                        disabled={addToCartMutation.isPending || product.stock_status !== 'instock'}
                      >
                        {addToCartMutation.isPending ? 'Adding...' : 'Add to Cart'}
                      </Button>
                      <Button variant="outline" size="icon" className="flex-shrink-0">
                        <Heart className="h-4 w-4" />
                      </Button>
                    </div>

                    {product.stock_status !== 'instock' && (
                      <p className="text-destructive text-sm">This product is currently out of stock.</p>
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
                    <TabsTrigger value="reviews">Reviews ({product.rating_count})</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="description" className="mt-6">
                    <Card className="card-luxury">
                      <CardContent className="p-6">
                        {product.description ? (
                          <div 
                            className="prose prose-gray max-w-none"
                            dangerouslySetInnerHTML={{ __html: product.description }}
                          />
                        ) : (
                          <p className="text-muted-foreground">No description available.</p>
                        )}
                      </CardContent>
                    </Card>
                  </TabsContent>
                  
                  <TabsContent value="specifications" className="mt-6">
                    <Card className="card-luxury">
                      <CardContent className="p-6">
                        <div className="space-y-3">
                          <div className="flex justify-between">
                            <span className="font-medium">SKU:</span>
                            <span>{product.sku || 'N/A'}</span>
                          </div>
                          {product.attributes && product.attributes.map((attr) => (
                            <div key={attr.id} className="flex justify-between">
                              <span className="font-medium">{attr.name}:</span>
                              <span>{attr.options.join(', ')}</span>
                            </div>
                          ))}
                          <Separator />
                          <div className="flex justify-between">
                            <span className="font-medium">Weight:</span>
                            <span>Varies by product</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                  
                  <TabsContent value="reviews" className="mt-6">
                    <Card className="card-luxury">
                      <CardContent className="p-6">
                        {reviews && reviews.length > 0 ? (
                          <div className="space-y-6">
                            {reviews.map((review: any) => (
                              <div key={review.id} className="border-b last:border-b-0 pb-4 last:pb-0">
                                <div className="flex items-center space-x-2 mb-2">
                                  <div className="flex space-x-1">
                                    {[...Array(5)].map((_, i) => (
                                      <Star
                                        key={i}
                                        className={`h-4 w-4 ${
                                          i < review.rating
                                            ? 'fill-luxury-gold text-luxury-gold'
                                            : 'text-gray-300'
                                        }`}
                                      />
                                    ))}
                                  </div>
                                  <span className="font-medium">{review.reviewer}</span>
                                  <span className="text-sm text-muted-foreground">
                                    {new Date(review.date_created).toLocaleDateString()}
                                  </span>
                                </div>
                                <div 
                                  className="prose prose-sm max-w-none"
                                  dangerouslySetInnerHTML={{ __html: review.review }}
                                />
                              </div>
                            ))}
                          </div>
                        ) : (
                          <p className="text-muted-foreground text-center py-8">
                            No reviews yet. Be the first to review this product!
                          </p>
                        )}
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

export default WordPressProductDetail;
import React, { useState, useMemo } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Heart, Star, Eye, ShoppingCart, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import product1 from '@/assets/product-1.jpg';
import product2 from '@/assets/product-2.jpg';
import product3 from '@/assets/product-3.jpg';
import product4 from '@/assets/product-4.jpg';

type SortOption = 'newest' | 'price-low' | 'price-high' | 'bestsellers';
type CategoryFilter = 'all' | 'for-her' | 'for-him' | 'for-couples';

const ProductShowcase = () => {
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>('all');
  const [sortBy, setSortBy] = useState<SortOption>('newest');

  const products = [
    {
      id: 1,
      name: 'Aria Luxury Massager',
      price: 299,
      category: 'for-her' as const,
      image: product1,
      isNew: false,
      isBestseller: true,
      rating: 4.9,
      reviews: 127,
      originalPrice: 399,
      description: 'Premium silicone with whisper-quiet technology'
    },
    {
      id: 2,
      name: 'Obsidian Couples Kit',
      price: 189,
      category: 'for-couples' as const,
      image: product2,
      isNew: true,
      isBestseller: false,
      rating: 4.8,
      reviews: 89,
      description: 'Complete luxury experience for intimate moments'
    },
    {
      id: 3,
      name: 'Platinum Men\'s Collection',
      price: 249,
      category: 'for-him' as const,
      image: product3,
      isNew: false,
      isBestseller: false,
      rating: 4.7,
      reviews: 156,
      description: 'Sophisticated wellness for the modern gentleman'
    },
    {
      id: 4,
      name: 'Velvet Touch Collection',
      price: 459,
      category: 'for-her' as const,
      image: product4,
      isNew: false,
      isBestseller: true,
      rating: 5.0,
      reviews: 23,
      description: 'Hand-crafted luxury with 24k gold accents'
    },
    {
      id: 5,
      name: 'Intimacy Couple\'s Set',
      price: 149,
      category: 'for-couples' as const,
      image: product1,
      isNew: true,
      isBestseller: false,
      rating: 4.6,
      reviews: 78,
      description: 'Enhance connection with premium accessories'
    },
    {
      id: 6,
      name: 'Executive Men\'s Kit',
      price: 329,
      category: 'for-him' as const,
      image: product2,
      isNew: false,
      isBestseller: true,
      rating: 4.8,
      reviews: 94,
      description: 'Luxury wellness designed for discerning men'
    }
  ];

  const categories = [
    { value: 'all', label: 'All Products' },
    { value: 'for-her', label: 'For Her' },
    { value: 'for-him', label: 'For Him' },
    { value: 'for-couples', label: 'For Couples' }
  ];

  const sortOptions = [
    { value: 'newest', label: 'Newest First' },
    { value: 'price-low', label: 'Price: Low to High' },
    { value: 'price-high', label: 'Price: High to Low' },
    { value: 'bestsellers', label: 'Bestsellers' }
  ];

  const filteredAndSortedProducts = useMemo(() => {
    let filtered = selectedCategory === 'all' 
      ? products 
      : products.filter(product => product.category === selectedCategory);

    return filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'bestsellers':
          return Number(b.isBestseller) - Number(a.isBestseller) || b.rating - a.rating;
        case 'newest':
        default:
          return Number(b.isNew) - Number(a.isNew) || b.id - a.id;
      }
    });
  }, [selectedCategory, sortBy]);

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

        {/* Filters and Sorting */}
        <div className="mb-12">
          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            {categories.map((category) => (
              <Button
                key={category.value}
                variant={selectedCategory === category.value ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.value as CategoryFilter)}
                className={`transition-all duration-300 ${
                  selectedCategory === category.value
                    ? 'bg-luxury-gold text-luxury-black hover:bg-luxury-gold/90'
                    : 'border-luxury-gold/20 text-luxury-charcoal hover:border-luxury-gold hover:bg-luxury-gold/10'
                }`}
              >
                {category.label}
              </Button>
            ))}
          </div>

          {/* Sort Dropdown */}
          <div className="flex justify-center">
            <Select value={sortBy} onValueChange={(value: SortOption) => setSortBy(value)}>
              <SelectTrigger className="w-64 border-luxury-gold/20 focus:border-luxury-gold">
                <SelectValue placeholder="Sort by..." />
                <ChevronDown className="h-4 w-4 ml-2" />
              </SelectTrigger>
              <SelectContent>
                {sortOptions.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-12">
          {filteredAndSortedProducts.map((product, index) => (
            <Card 
              key={product.id} 
              className="group cursor-pointer overflow-hidden bg-background/50 backdrop-blur-sm border-luxury-gold/10 hover:border-luxury-gold/30 transition-all duration-500 hover:shadow-2xl hover:shadow-luxury-gold/10 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-0">
                {/* Product Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-72 object-cover transition-all duration-700 group-hover:scale-105"
                  />
                  
                  {/* Badges */}
                  <div className="absolute top-4 left-4 flex flex-col gap-2">
                    {product.isNew && (
                      <Badge className="bg-luxury-gold text-luxury-black font-medium">
                        New
                      </Badge>
                    )}
                    {product.isBestseller && (
                      <Badge className="bg-luxury-charcoal text-white font-medium">
                        Bestseller
                      </Badge>
                    )}
                  </div>
                  
                  {/* Quick Actions */}
                  <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                    <Button 
                      size="icon" 
                      variant="secondary" 
                      className="h-10 w-10 rounded-full bg-white/90 hover:bg-white shadow-lg border-0"
                    >
                      <Heart className="h-4 w-4 text-luxury-charcoal" />
                    </Button>
                    <Button 
                      size="icon" 
                      variant="secondary" 
                      className="h-10 w-10 rounded-full bg-white/90 hover:bg-white shadow-lg border-0"
                    >
                      <Eye className="h-4 w-4 text-luxury-charcoal" />
                    </Button>
                  </div>

                  {/* Sale Badge */}
                  {product.originalPrice && (
                    <Badge className="absolute bottom-4 left-4 bg-red-500 text-white font-medium">
                      Save ${product.originalPrice - product.price}
                    </Badge>
                  )}

                  {/* Quick Add to Cart - appears on hover */}
                  <div className="absolute bottom-0 left-0 right-0 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <Button className="w-full h-12 rounded-none bg-luxury-gold text-luxury-black hover:bg-luxury-gold/90 font-medium flex items-center justify-center gap-2">
                      <ShoppingCart className="h-4 w-4" />
                      Quick Add to Cart
                    </Button>
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-6 bg-white">
                  <div className="mb-2">
                    <Badge 
                      variant="outline" 
                      className="text-xs text-luxury-gold border-luxury-gold/30 bg-luxury-gold/5"
                    >
                      {categories.find(cat => cat.value === product.category)?.label}
                    </Badge>
                  </div>
                  
                  <h3 className="font-heading text-xl font-medium mb-2 text-luxury-charcoal group-hover:text-luxury-gold transition-colors">
                    {product.name}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {product.description}
                  </p>
                  
                  {/* Rating */}
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex">
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
                  
                  {/* Price */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl font-bold text-luxury-charcoal">
                        ${product.price}
                      </span>
                      {product.originalPrice && (
                        <span className="text-base text-muted-foreground line-through">
                          ${product.originalPrice}
                        </span>
                      )}
                    </div>
                  </div>
                  
                  {/* View Details */}
                  <Link to={`/products/${product.id}`}>
                    <Button 
                      variant="outline" 
                      className="w-full border-luxury-gold/30 text-luxury-charcoal hover:bg-luxury-gold hover:text-luxury-black hover:border-luxury-gold transition-all duration-300"
                    >
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
import { Helmet } from 'react-helmet';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Ruler, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const SizeGuide = () => {
  const sizeCategories = [
    {
      name: 'Personal Massagers',
      description: 'Dimensions and fit guide for personal wellness products',
      items: [
        { size: 'Petite', length: '4-5 inches', diameter: '0.8-1.0 inch', description: 'Perfect for beginners' },
        { size: 'Standard', length: '5-7 inches', diameter: '1.0-1.2 inches', description: 'Most popular choice' },
        { size: 'Luxe', length: '7-9 inches', diameter: '1.2-1.5 inches', description: 'Premium experience' }
      ]
    },
    {
      name: 'Couples Products',
      description: 'Sizing guide for shared intimate experiences',
      items: [
        { size: 'Compact', length: '3-4 inches', diameter: '0.7-0.9 inch', description: 'Discreet and comfortable' },
        { size: 'Classic', length: '4-6 inches', diameter: '0.9-1.1 inches', description: 'Traditional sizing' },
        { size: 'Premium', length: '6-8 inches', diameter: '1.1-1.3 inches', description: 'Enhanced features' }
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Size Guide | DeseoVivo Luxury Boutique</title>
        <meta name="description" content="Complete sizing guide for luxury intimate wellness products. Find the perfect fit for your needs with our detailed measurements and recommendations." />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        <main>
          {/* Hero Section */}
          <section className="bg-luxury-charcoal text-luxury-white py-16">
            <div className="container-luxury text-center">
              <Ruler className="h-12 w-12 mx-auto mb-4 text-luxury-gold" />
              <h1 className="text-luxury-title text-luxury-white mb-4">
                Size Guide
              </h1>
              <p className="text-luxury-subtitle text-luxury-white/70 max-w-2xl mx-auto">
                Find the perfect fit with our comprehensive sizing guide. All measurements are carefully designed for comfort and optimal experience.
              </p>
            </div>
          </section>

          {/* Size Categories */}
          <section className="section-padding">
            <div className="container-luxury">
              <div className="space-y-12">
                {sizeCategories.map((category, index) => (
                  <div key={category.name}>
                    <div className="text-center mb-8">
                      <h2 className="text-2xl font-heading font-semibold mb-4">{category.name}</h2>
                      <p className="text-muted-foreground">{category.description}</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                      {category.items.map((item, itemIndex) => (
                        <Card key={item.size} className="card-luxury">
                          <CardHeader className="text-center">
                            <Badge 
                              variant="outline" 
                              className="text-luxury-gold border-luxury-gold w-fit mx-auto mb-2"
                            >
                              {item.size}
                            </Badge>
                            <CardTitle className="text-lg">{item.description}</CardTitle>
                          </CardHeader>
                          <CardContent className="text-center space-y-4">
                            <div className="space-y-2">
                              <div className="flex justify-between items-center">
                                <span className="text-sm text-muted-foreground">Length:</span>
                                <span className="font-medium">{item.length}</span>
                              </div>
                              <div className="flex justify-between items-center">
                                <span className="text-sm text-muted-foreground">Diameter:</span>
                                <span className="font-medium">{item.diameter}</span>
                              </div>
                            </div>

                            <div className="pt-4 border-t">
                              <Link to={`/collections/all?size=${item.size.toLowerCase()}`}>
                                <div className="flex items-center justify-center space-x-2 text-luxury-gold hover:text-luxury-gold/80 transition-colors">
                                  <span className="text-sm">View Products</span>
                                  <ArrowRight className="h-3 w-3" />
                                </div>
                              </Link>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Additional Information */}
              <div className="mt-16">
                <Card className="card-luxury">
                  <CardHeader>
                    <CardTitle>Important Sizing Notes</CardTitle>
                  </CardHeader>
                  <CardContent className="prose prose-gray max-w-none">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold mb-3">Material Considerations</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li>• Medical-grade silicone may feel larger than stated dimensions</li>
                          <li>• Body-safe materials are designed for comfort and safety</li>
                          <li>• All products are tested for optimal ergonomics</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-3">Choosing Your Size</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li>• Start with smaller sizes if you're new to intimate products</li>
                          <li>• Consider your comfort level and experience</li>
                          <li>• Our customer care team can provide personalized recommendations</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default SizeGuide;
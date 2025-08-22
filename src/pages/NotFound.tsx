import { useLocation, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Search, Home, Heart, Users, ShieldAlert } from "lucide-react";

const NotFound = () => {
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Redirect to collections with search or homepage
      window.location.href = `/?search=${encodeURIComponent(searchQuery)}`;
    }
  };

  return (
    <>
      <Helmet>
        <title>404 - Page Not Found | DeseoVivo Luxury Boutique</title>
        <meta name="description" content="The page you're looking for doesn't exist. Explore our luxury intimate wellness collection instead." />
      </Helmet>

      <div className="min-h-screen bg-luxury-cream/20">
        <Header />
        
        <main className="section-padding">
          <div className="container-luxury max-w-4xl">
            <div className="text-center space-y-8">
              {/* Error Icon */}
              <div className="flex justify-center">
                <div className="w-32 h-32 rounded-full bg-luxury-gold/10 flex items-center justify-center">
                  <ShieldAlert className="w-16 h-16 text-luxury-gold" />
                </div>
              </div>

              {/* Error Message */}
              <div className="space-y-4">
                <h1 className="text-luxury-hero">404</h1>
                <h2 className="text-luxury-title">Page Not Found</h2>
                <p className="text-luxury-subtitle max-w-2xl mx-auto">
                  We're sorry, but the page you're looking for seems to have wandered off into the night. 
                  Let us help you find what you're seeking.
                </p>
                <p className="text-sm text-muted-foreground">
                  Requested path: <code className="bg-luxury-cream px-2 py-1 rounded">{location.pathname}</code>
                </p>
              </div>

              {/* Search Bar */}
              <Card className="card-luxury max-w-md mx-auto">
                <CardContent className="p-6">
                  <form onSubmit={handleSearch} className="space-y-4">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        type="text"
                        placeholder="Search our collection..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="pl-10"
                      />
                    </div>
                    <Button type="submit" className="w-full btn-luxury">
                      <Search className="h-4 w-4 mr-2" />
                      Search Collection
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Navigation Options */}
              <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
                <Card className="card-luxury group cursor-pointer">
                  <Link to="/">
                    <CardContent className="p-6 text-center space-y-4">
                      <div className="w-12 h-12 mx-auto rounded-full bg-luxury-gold/10 flex items-center justify-center group-hover:bg-luxury-gold/20 transition-colors">
                        <Home className="h-6 w-6 text-luxury-gold" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">Return Home</h3>
                        <p className="text-sm text-muted-foreground">
                          Browse our featured collection
                        </p>
                      </div>
                    </CardContent>
                  </Link>
                </Card>

                <Card className="card-luxury group cursor-pointer">
                  <Link to="/collections/for-her">
                    <CardContent className="p-6 text-center space-y-4">
                      <div className="w-12 h-12 mx-auto rounded-full bg-luxury-gold/10 flex items-center justify-center group-hover:bg-luxury-gold/20 transition-colors">
                        <Heart className="h-6 w-6 text-luxury-gold" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">For Her</h3>
                        <p className="text-sm text-muted-foreground">
                          Explore feminine luxury
                        </p>
                      </div>
                    </CardContent>
                  </Link>
                </Card>

                <Card className="card-luxury group cursor-pointer">
                  <Link to="/collections/for-couples">
                    <CardContent className="p-6 text-center space-y-4">
                      <div className="w-12 h-12 mx-auto rounded-full bg-luxury-gold/10 flex items-center justify-center group-hover:bg-luxury-gold/20 transition-colors">
                        <Users className="h-6 w-6 text-luxury-gold" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">For Couples</h3>
                        <p className="text-sm text-muted-foreground">
                          Shared intimate experiences
                        </p>
                      </div>
                    </CardContent>
                  </Link>
                </Card>
              </div>

              {/* Additional Help */}
              <div className="bg-luxury-cream/30 rounded-lg p-6 max-w-2xl mx-auto">
                <h3 className="font-semibold mb-3">Need More Help?</h3>
                <div className="flex flex-wrap justify-center gap-4 text-sm">
                  <Link to="/contact" className="text-luxury-gold hover:underline">
                    Contact Support
                  </Link>
                  <Link to="/faq" className="text-luxury-gold hover:underline">
                    FAQ
                  </Link>
                  <Link to="/size-guide" className="text-luxury-gold hover:underline">
                    Size Guide
                  </Link>
                  <Link to="/legal/shipping-policy" className="text-luxury-gold hover:underline">
                    Shipping Info
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default NotFound;

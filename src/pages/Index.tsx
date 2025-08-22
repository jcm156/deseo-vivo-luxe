import Header from '@/components/Header';
import Hero from '@/components/Hero';
import WordPressProductShowcase from '@/components/WordPressProductShowcase';
import Footer from '@/components/Footer';
import { Helmet } from 'react-helmet';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>DeseoVivo - Luxury Intimate Wellness | Premium Erotic Boutique</title>
        <meta 
          name="description" 
          content="Discover DeseoVivo's curated collection of luxury intimate wellness products. Premium quality, discreet shipping, and sophisticated design for discerning adults." 
        />
        <meta name="keywords" content="luxury intimate wellness, premium erotic boutique, adult toys, intimate products, luxury wellness" />
        <link rel="canonical" href="https://deseovivo.com" />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <Hero />
          <WordPressProductShowcase />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;

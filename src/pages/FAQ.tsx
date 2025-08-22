import { Helmet } from 'react-helmet';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { HelpCircle, MessageCircle, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const FAQ = () => {
  const faqCategories = [
    {
      name: 'Orders & Shipping',
      icon: '📦',
      questions: [
        {
          q: 'How long does shipping take?',
          a: 'Standard shipping takes 3-5 business days. Express shipping (1-2 business days) is available. All orders over $200 qualify for free shipping.'
        },
        {
          q: 'Is packaging discreet?',
          a: 'Absolutely. All orders are shipped in plain, unmarked packaging with no indication of contents. The return address shows "DV Wellness" and billing appears the same on statements.'
        },
        {
          q: 'Can I track my order?',
          a: 'Yes, you\'ll receive a tracking number via email once your order ships. You can also track orders in your account dashboard.'
        },
        {
          q: 'Do you ship internationally?',
          a: 'Currently we ship within the United States and Canada. International shipping may be available for select products - please contact us for details.'
        }
      ]
    },
    {
      name: 'Products & Safety',
      icon: '🛡️',
      questions: [
        {
          q: 'Are your products body-safe?',
          a: 'Yes, all our products are made from premium, body-safe materials including medical-grade silicone. We comply with international safety standards and never use harmful materials.'
        },
        {
          q: 'How do I clean and care for products?',
          a: 'Most products can be cleaned with warm water and gentle soap or specialized toy cleaners. Always check the specific care instructions included with your product.'
        },
        {
          q: 'What materials do you use?',
          a: 'We use medical-grade silicone, body-safe plastics, and premium metals. All materials are phthalate-free, latex-free, and hypoallergenic.'
        },
        {
          q: 'Do products come with warranties?',
          a: 'Yes, most products include a 1-year manufacturer warranty covering defects. Some premium items have extended warranties. Check individual product pages for details.'
        }
      ]
    },
    {
      name: 'Returns & Exchanges',
      icon: '↩️',
      questions: [
        {
          q: 'What is your return policy?',
          a: 'We offer a 30-day return policy for unopened items in original packaging. For hygiene reasons, some products cannot be returned once opened.'
        },
        {
          q: 'How do I return an item?',
          a: 'Contact our customer service team to initiate a return. We\'ll provide a prepaid return label and instructions. Refunds are processed within 5-7 business days.'
        },
        {
          q: 'Can I exchange for a different size?',
          a: 'Yes, unopened items can be exchanged for different sizes or colors within 30 days. Contact us to arrange an exchange.'
        },
        {
          q: 'What if my item arrives damaged?',
          a: 'Contact us immediately with photos of the damage. We\'ll arrange a replacement or full refund at no cost to you.'
        }
      ]
    },
    {
      name: 'Privacy & Discretion',
      icon: '🔒',
      questions: [
        {
          q: 'How do you protect my privacy?',
          a: 'We take privacy seriously. All personal information is encrypted and secure. We never share customer data with third parties. Shipping is completely discreet.'
        },
        {
          q: 'Will my purchase appear on my credit card statement?',
          a: 'Purchases appear as "DV Wellness" on credit card and bank statements. There\'s no indication of the nature of the products purchased.'
        },
        {
          q: 'Do you send marketing emails?',
          a: 'Only if you opt-in to our newsletter. All marketing emails include an easy unsubscribe option, and we respect your privacy preferences.'
        },
        {
          q: 'Is my browsing information tracked?',
          a: 'We use minimal tracking for website functionality and analytics. You can review our privacy policy for full details on data collection and use.'
        }
      ]
    },
    {
      name: 'Account & Payment',
      icon: '💳',
      questions: [
        {
          q: 'Do I need to create an account?',
          a: 'You can checkout as a guest, but creating an account allows you to track orders, save favorites, and access exclusive offers.'
        },
        {
          q: 'What payment methods do you accept?',
          a: 'We accept all major credit cards (Visa, MasterCard, American Express), PayPal, Apple Pay, and Google Pay. All payments are secure and encrypted.'
        },
        {
          q: 'Can I save payment information?',
          a: 'Yes, you can securely save payment methods in your account for faster checkout. All payment data is encrypted and secure.'
        },
        {
          q: 'Are there any hidden fees?',
          a: 'No hidden fees. The price you see is the price you pay, plus applicable taxes and shipping (free over $200).'
        }
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Frequently Asked Questions | DeseoVivo Luxury Boutique</title>
        <meta name="description" content="Find answers to common questions about our luxury intimate wellness products, shipping, returns, privacy, and more." />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        <main>
          {/* Hero Section */}
          <section className="bg-luxury-charcoal text-luxury-white py-16">
            <div className="container-luxury text-center">
              <HelpCircle className="h-12 w-12 mx-auto mb-4 text-luxury-gold" />
              <h1 className="text-luxury-title text-luxury-white mb-4">
                Frequently Asked Questions
              </h1>
              <p className="text-luxury-subtitle text-luxury-white/70 max-w-2xl mx-auto">
                Find quick answers to common questions about our products, services, and policies. 
                Can't find what you're looking for? Our customer care team is here to help.
              </p>
            </div>
          </section>

          {/* FAQ Categories */}
          <section className="section-padding">
            <div className="container-luxury">
              <div className="grid lg:grid-cols-4 gap-8">
                {/* Category Navigation */}
                <div className="lg:col-span-1">
                  <div className="sticky top-24 space-y-4">
                    <h2 className="font-heading text-lg font-semibold">Categories</h2>
                    <nav className="space-y-2">
                      {faqCategories.map((category) => (
                        <a
                          key={category.name}
                          href={`#${category.name.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`}
                          className="flex items-center space-x-3 p-3 rounded-lg hover:bg-luxury-cream/30 transition-colors"
                        >
                          <span className="text-lg">{category.icon}</span>
                          <span className="text-sm font-medium">{category.name}</span>
                        </a>
                      ))}
                    </nav>

                    <Card className="card-luxury mt-8">
                      <CardContent className="p-4 text-center">
                        <MessageCircle className="h-8 w-8 mx-auto mb-2 text-luxury-gold" />
                        <h3 className="font-semibold mb-2">Still have questions?</h3>
                        <p className="text-sm text-muted-foreground mb-4">
                          Our customer care team provides confidential, expert support.
                        </p>
                        <Link to="/contact">
                          <Button className="btn-luxury w-full text-sm">
                            Contact Support
                          </Button>
                        </Link>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                {/* FAQ Content */}
                <div className="lg:col-span-3 space-y-12">
                  {faqCategories.map((category) => (
                    <div
                      key={category.name}
                      id={category.name.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}
                      className="scroll-mt-24"
                    >
                      <div className="flex items-center space-x-3 mb-6">
                        <span className="text-2xl">{category.icon}</span>
                        <h2 className="text-2xl font-heading font-semibold">{category.name}</h2>
                      </div>

                      <Accordion type="single" collapsible className="space-y-4">
                        {category.questions.map((faq, index) => (
                          <AccordionItem
                            key={index}
                            value={`${category.name}-${index}`}
                            className="border rounded-lg px-6"
                          >
                            <AccordionTrigger className="text-left font-medium hover:text-luxury-gold">
                              {faq.q}
                            </AccordionTrigger>
                            <AccordionContent className="text-muted-foreground leading-relaxed">
                              {faq.a}
                            </AccordionContent>
                          </AccordionItem>
                        ))}
                      </Accordion>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Contact CTA */}
          <section className="section-padding bg-luxury-cream/30">
            <div className="container-luxury">
              <Card className="card-luxury max-w-2xl mx-auto">
                <CardHeader className="text-center">
                  <CardTitle>Need More Help?</CardTitle>
                  <p className="text-muted-foreground">
                    Our customer care specialists provide confidential, expert guidance 
                    on product selection, usage, and care.
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    <Link to="/contact">
                      <Card className="card-luxury hover:bg-luxury-cream/30 transition-colors cursor-pointer">
                        <CardContent className="p-4 text-center">
                          <Mail className="h-6 w-6 mx-auto mb-2 text-luxury-gold" />
                          <h4 className="font-semibold mb-1">Email Support</h4>
                          <p className="text-sm text-muted-foreground">
                            Detailed answers within 24 hours
                          </p>
                        </CardContent>
                      </Card>
                    </Link>

                    <Link to="/contact">
                      <Card className="card-luxury hover:bg-luxury-cream/30 transition-colors cursor-pointer">
                        <CardContent className="p-4 text-center">
                          <Phone className="h-6 w-6 mx-auto mb-2 text-luxury-gold" />
                          <h4 className="font-semibold mb-1">VIP Concierge</h4>
                          <p className="text-sm text-muted-foreground">
                            Personalized product guidance
                          </p>
                        </CardContent>
                      </Card>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default FAQ;
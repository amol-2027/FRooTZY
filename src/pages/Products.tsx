
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Circle, Citrus } from 'lucide-react';

const Products = () => {
  const products = [
    {
      name: "Frootzy Splash",
      flavor: "Fresh Watermelon",
      description: "Light, subtly sweet, and incredibly hydrating – the taste of summer in a bottle.",
      imageSrc: "/lovable-uploads/21533967-3e57-4c29-954f-974861d0e379.png",
      gradient: "watermelon-gradient",
      benefits: ["Hydrating", "Rich in antioxidants", "Natural electrolytes"],
      details: {
        ingredients: "Cold-pressed watermelon, natural watermelon extract, filtered water",
        nutrition: {
          calories: "65 per bottle",
          sugar: "12g (all from natural fruit)",
          vitamins: "A, C, B6"
        },
        description: "Our Fresh Watermelon Frootzy Splash captures the essence of summer with every sip. Made from cold-pressed watermelon, this naturally hydrating beverage delivers a refreshing taste experience while providing essential hydration and nutrients. Perfect for hot days, post-workout recovery, or anytime you need a healthy pick-me-up."
      }
    },
    {
      name: "Frootzy Splash",
      flavor: "Summer Orange",
      description: "Bright, zesty, and packed with Vitamin C for a revitalizing lift.",
      imageSrc: "/lovable-uploads/41fbb537-90b2-496f-9702-1bf11038fd9a.png",
      gradient: "orange-gradient",
      benefits: ["Vitamin C boost", "Immunity support", "Natural energy"],
      details: {
        ingredients: "Cold-pressed oranges, orange zest extract, filtered water",
        nutrition: {
          calories: "75 per bottle",
          sugar: "15g (all from natural fruit)",
          vitamins: "C, B1, Folate, Potassium"
        },
        description: "Our Summer Orange Frootzy Splash is sunshine in a bottle. This vibrant, zesty beverage is packed with Vitamin C and natural citrus goodness. Each bottle contains cold-pressed oranges for maximum flavor and nutritional benefit. Enjoy as a morning refresher, immunity booster, or anytime you need a bright pick-me-up."
      }
    },
    {
      name: "Frootzy Splash",
      flavor: "Tangy Lemon",
      description: "A crisp, citrusy awakening – the perfect balance of sweet and tart.",
      imageSrc: "/lovable-uploads/2f57bb65-ea40-47a5-8bea-69b8faf2e8cd.png",
      gradient: "lemon-gradient",
      benefits: ["Detoxifying", "Refreshing", "Vitamin packed"],
      details: {
        ingredients: "Cold-pressed lemons, lemon zest, filtered water, hint of natural stevia",
        nutrition: {
          calories: "45 per bottle",
          sugar: "9g (all from natural fruit)",
          vitamins: "C, Potassium, Antioxidants"
        },
        description: "Our Tangy Lemon Frootzy Splash offers the perfect balance of tart and refreshing. This crisp, citrusy beverage awakens your senses while providing a nutritional boost. Made with cold-pressed lemons and just a hint of natural sweetness, it's ideal for detoxifying, refreshing on hot days, or adding a zing to your daily routine."
      }
    }
  ];

  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 px-4 bg-kraft/10">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">Our Products</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover the refreshing range of Frootzy Splash beverages, each crafted with 100% natural ingredients for pure fruity goodness.
            </p>
          </div>
        </section>

        {/* Products Tabs Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <Tabs defaultValue="all" className="w-full">
              <div className="flex justify-center mb-8">
                <TabsList className="grid grid-cols-4 w-full max-w-md">
                  <TabsTrigger value="all">All Flavors</TabsTrigger>
                  <TabsTrigger value="watermelon" className="flex items-center">
                    <Circle className="mr-1 h-4 w-4 text-watermelon" fill="#ff6b6b" /> Watermelon
                  </TabsTrigger>
                  <TabsTrigger value="orange" className="flex items-center">
                    <Citrus className="mr-1 h-4 w-4 text-orange" /> Orange
                  </TabsTrigger>
                  <TabsTrigger value="lemon" className="flex items-center">
                    <Circle className="mr-1 h-4 w-4 text-lemon" fill="#f9ed69" /> Lemon
                  </TabsTrigger>
                </TabsList>
              </div>
              
              <TabsContent value="all">
                <div className="grid grid-cols-1 gap-10">
                  {products.map((product, index) => (
                    <ProductDetail key={index} product={product} />
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="watermelon">
                <ProductDetail product={products[0]} />
              </TabsContent>
              
              <TabsContent value="orange">
                <ProductDetail product={products[1]} />
              </TabsContent>
              
              <TabsContent value="lemon">
                <ProductDetail product={products[2]} />
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

interface ProductDetailProps {
  product: any;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ product }) => {
  return (
    <div className="mb-16">
      <ProductCard 
        name={product.name}
        flavor={product.flavor}
        description={product.description}
        imageSrc={product.imageSrc}
        gradient={product.gradient}
        benefits={product.benefits}
      />
      
      <div className="mt-8 bg-white rounded-lg shadow-sm p-6">
        <h3 className="text-xl font-bold mb-4">Product Details</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h4 className="font-semibold mb-2">Ingredients</h4>
            <p className="text-gray-700">{product.details.ingredients}</p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-2">Nutritional Info</h4>
            <ul className="text-gray-700">
              <li><span className="font-medium">Calories:</span> {product.details.nutrition.calories}</li>
              <li><span className="font-medium">Sugar:</span> {product.details.nutrition.sugar}</li>
              <li><span className="font-medium">Vitamins:</span> {product.details.nutrition.vitamins}</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-2">Best For</h4>
            <ul className="text-gray-700">
              {product.benefits.map((benefit: string, i: number) => (
                <li key={i} className="flex items-center mb-1">
                  <span className="h-2 w-2 rounded-full bg-kraft mr-2"></span>
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="mt-6">
          <h4 className="font-semibold mb-2">About This Flavor</h4>
          <p className="text-gray-700">{product.details.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Products;

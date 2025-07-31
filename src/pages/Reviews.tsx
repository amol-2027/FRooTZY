
import React from 'react';
import { Star } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TestimonialCard from '@/components/TestimonialCard';

const Reviews = () => {
  const reviews = [
    {
      name: "Jenny Wilson",
      avatar: "https://images.unsplash.com/photo-1500673922987-e212871fec22",
      rating: 5,
      text: "Frootzy Splash Watermelon is my absolute favorite summer drink! It's so refreshing and naturally sweet without any artificial flavors. I love that it's low in sugar but still tastes amazing.",
      date: "August 15, 2024",
      flavor: "Watermelon"
    },
    {
      name: "Robert Fox",
      avatar: "https://images.unsplash.com/photo-1500673922987-e212871fec22",
      rating: 5,
      text: "I'm really impressed with the Orange flavor. It tastes like freshly squeezed orange juice but with way less sugar. Great for my morning routine!",
      date: "August 10, 2024",
      flavor: "Orange"
    },
    {
      name: "Esther Howard",
      avatar: "https://images.unsplash.com/photo-1500673922987-e212871fec22",
      rating: 4,
      text: "Tangy Lemon has become my go-to for post-workout hydration. Love the eco-friendly packaging too!",
      date: "July 28, 2024",
      flavor: "Lemon"
    },
    {
      name: "Jacob Jones",
      avatar: "https://images.unsplash.com/photo-1500673922987-e212871fec22",
      rating: 5,
      text: "As someone who's trying to cut down on sugary drinks, Frootzy Splash has been a game-changer. The Watermelon flavor is incredible!",
      date: "July 22, 2024",
      flavor: "Watermelon"
    },
    {
      name: "Cameron Williamson",
      avatar: "https://images.unsplash.com/photo-1500673922987-e212871fec22",
      rating: 5,
      text: "I love that Vivra has created a truly natural product. You can taste the difference compared to other so-called 'natural' drinks. The Orange flavor is my favorite!",
      date: "July 15, 2024",
      flavor: "Orange"
    },
    {
      name: "Leslie Alexander",
      avatar: "https://images.unsplash.com/photo-1500673922987-e212871fec22",
      rating: 4,
      text: "The recycling program is such a great initiative. I collect my bottles and feel good about contributing to less plastic waste. And the Lemon flavor is delicious!",
      date: "July 10, 2024",
      flavor: "Lemon"
    }
  ];

  const averageRating = reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length;

  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 px-4 bg-kraft/10">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">Customer Reviews</h1>
            <p className="text-gray-600 max-w-2xl mx-auto mb-6">
              See what our health-conscious customers have to say about Frootzy Splash.
            </p>
            
            <div className="flex justify-center items-center mb-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={24} 
                    className={i < Math.round(averageRating) ? 'text-orange fill-orange' : 'text-gray-300'} 
                  />
                ))}
              </div>
              <span className="ml-3 text-xl font-bold">{averageRating.toFixed(1)}</span>
              <span className="ml-2 text-gray-500">out of 5</span>
            </div>
            
            <p className="text-gray-600">Based on {reviews.length} customer reviews</p>
          </div>
        </section>

        {/* Reviews Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {reviews.map((review, index) => (
                <TestimonialCard key={index} {...review} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Reviews;

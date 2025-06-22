import React from 'react';
import Header from '../components/Header';
import CTA from '../components/intro';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import { Heart, Star, Quote } from 'lucide-react';

const CommunityStories = () => {
  const stories = [
    {
      id: 1,
      name: "Dr. Priya Sharma",
      role: "Cardiologist",
      hospital: "Apollo Hospital, Delhi",
      image: "https://images.pexels.com/photos/6749788/pexels-photo-6749788.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      story: "The 6sense stethoscope has completely transformed my practice. The acoustic clarity is exceptional, and I can detect even the subtlest heart murmurs with confidence. My patients often comment on how professional and comfortable I look in my Knya scrubs.",
      rating: 5,
      product: "6sense Stethoscope & Navy Scrubs"
    },
    {
      id: 2,
      name: "Dr. Rajesh Kumar",
      role: "Emergency Medicine",
      hospital: "AIIMS, New Delhi",
      image: "https://images.pexels.com/photos/6749778/pexels-photo-6749778.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      story: "Working 12-hour shifts in the ER demands comfort and durability. Knya scrubs have been my go-to for over two years now. They maintain their shape and color even after countless washes, and the fabric breathes well during intense situations.",
      rating: 5,
      product: "Black Scrub Set"
    },
    {
      id: 3,
      name: "Dr. Anita Patel",
      role: "Pediatrician",
      hospital: "Fortis Hospital, Mumbai",
      image: "https://images.pexels.com/photos/7089020/pexels-photo-7089020.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      story: "Children are naturally drawn to bright, friendly colors. My pink Knya scrubs help put young patients at ease. The fabric is soft and doesn't irritate sensitive skin when I need to hold or comfort children.",
      rating: 5,
      product: "Pink Scrub Set"
    },
    {
      id: 4,
      name: "Dr. Vikram Singh",
      role: "Surgeon",
      hospital: "Max Healthcare, Gurgaon",
      image: "https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      story: "Precision is everything in surgery. The Knya lab coat fits perfectly and doesn't restrict my movement during long procedures. The quality is outstanding - it looks as good as new even after months of use.",
      rating: 5,
      product: "Premium Lab Coat"
    },
    {
      id: 5,
      name: "Dr. Meera Reddy",
      role: "Internal Medicine",
      hospital: "Manipal Hospital, Bangalore",
      image: "https://images.pexels.com/photos/6749762/pexels-photo-6749762.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      story: "As a female doctor, finding well-fitted, professional medical wear was always a challenge. Knya's women's collection is a game-changer. The cuts are flattering, the colors are vibrant, and the quality is unmatched.",
      rating: 5,
      product: "Women's Scrub Collection"
    },
    {
      id: 6,
      name: "Dr. Arjun Mehta",
      role: "Resident Doctor",
      hospital: "KEM Hospital, Mumbai",
      image: "https://images.pexels.com/photos/8460332/pexels-photo-8460332.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      story: "As a resident on a tight budget, I was amazed by Knya's quality-to-price ratio. The wine-colored scrubs I bought have lasted through my entire residency. They still look professional and feel comfortable after countless shifts.",
      rating: 5,
      product: "Wine Scrub Set"
    }
  ];

  const stats = [
    { number: "10,000+", label: "Happy Doctors" },
    { number: "500+", label: "Hospitals" },
    { number: "4.8/5", label: "Average Rating" },
    { number: "95%", label: "Recommend Us" }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-800 to-pink-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Community Stories</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Real stories from healthcare professionals who trust Knya for their daily needs
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="p-6">
                <div className="text-4xl font-bold text-purple-800 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stories Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-purple-800">Healthcare Heroes Share Their Stories</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {stories.map((story) => (
              <div key={story.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <img 
                      src={story.image} 
                      alt={story.name}
                      className="w-16 h-16 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h3 className="font-semibold text-lg text-gray-800">{story.name}</h3>
                      <p className="text-purple-600 font-medium">{story.role}</p>
                      <p className="text-sm text-gray-600">{story.hospital}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center mb-4">
                    {[...Array(story.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  <div className="relative mb-4">
                    <Quote className="w-8 h-8 text-purple-200 absolute -top-2 -left-2" />
                    <p className="text-gray-700 italic pl-6 leading-relaxed">{story.story}</p>
                  </div>
                  
                  <div className="border-t pt-4">
                    <p className="text-sm text-purple-600 font-medium">Product: {story.product}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Share Your Story */}
      <section className="py-16 bg-purple-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <Heart className="w-16 h-16 mx-auto mb-6 text-pink-300" />
          <h2 className="text-3xl font-bold mb-6">Share Your Knya Story</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            We'd love to hear how Knya products have made a difference in your medical practice. 
            Share your story and inspire fellow healthcare professionals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded-lg transition-colors">
              Share Your Story
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-purple-800 font-semibold py-3 px-8 rounded-lg transition-colors">
              Upload Photos
            </button>
          </div>
        </div>
      </section>

      {/* Testimonial Highlights */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-purple-800">What Our Community Says</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-blue-50 rounded-lg">
              <Quote className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <p className="text-gray-700 italic mb-4">"Best medical apparel I've ever owned. Quality is exceptional!"</p>
              <p className="font-semibold text-blue-800">- Dr. Sarah Johnson</p>
            </div>
            <div className="text-center p-6 bg-green-50 rounded-lg">
              <Quote className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <p className="text-gray-700 italic mb-4">"The stethoscope acoustics are incredible. Highly recommend!"</p>
              <p className="font-semibold text-green-800">- Dr. Michael Chen</p>
            </div>
            <div className="text-center p-6 bg-pink-50 rounded-lg">
              <Quote className="w-12 h-12 text-pink-600 mx-auto mb-4" />
              <p className="text-gray-700 italic mb-4">"Comfortable, stylish, and durable. Everything I need!"</p>
              <p className="font-semibold text-pink-800">- Dr. Emily Rodriguez</p>
            </div>
          </div>
        </div>
      </section>

      <CTA />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default CommunityStories;
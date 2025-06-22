import React from 'react';
import Header from '../components/Header';
import CTA from '../components/intro';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import { Calendar, User, ArrowRight } from 'lucide-react';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Evolution of Medical Scrubs: From Function to Fashion",
      excerpt: "Discover how medical scrubs have transformed from basic workwear to stylish, functional apparel that healthcare professionals love to wear.",
      image: "https://images.pexels.com/photos/6749778/pexels-photo-6749778.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop",
      author: "Dr. Sarah Johnson",
      date: "March 15, 2024",
      category: "Fashion"
    },
    {
      id: 2,
      title: "Choosing the Right Stethoscope: A Complete Guide",
      excerpt: "Everything you need to know about selecting the perfect stethoscope for your medical practice, from acoustics to comfort.",
      image: "https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop",
      author: "Dr. Michael Chen",
      date: "March 12, 2024",
      category: "Equipment"
    },
    {
      id: 3,
      title: "Sustainable Healthcare: Eco-Friendly Medical Apparel",
      excerpt: "Learn about the importance of sustainable practices in healthcare and how eco-friendly medical apparel is making a difference.",
      image: "https://images.pexels.com/photos/6749788/pexels-photo-6749788.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop",
      author: "Dr. Emily Rodriguez",
      date: "March 10, 2024",
      category: "Sustainability"
    },
    {
      id: 4,
      title: "Comfort and Performance: The Science Behind Modern Scrubs",
      excerpt: "Explore the technology and materials that make modern medical scrubs more comfortable and functional than ever before.",
      image: "https://images.pexels.com/photos/4173239/pexels-photo-4173239.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop",
      author: "Dr. James Wilson",
      date: "March 8, 2024",
      category: "Technology"
    },
    {
      id: 5,
      title: "Healthcare Heroes: Stories from the Frontline",
      excerpt: "Inspiring stories from healthcare professionals who make a difference every day, featuring their experiences with Knya products.",
      image: "https://images.pexels.com/photos/7089020/pexels-photo-7089020.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop",
      author: "Knya Team",
      date: "March 5, 2024",
      category: "Stories"
    },
    {
      id: 6,
      title: "Maintaining Your Medical Apparel: Care Tips and Tricks",
      excerpt: "Essential tips for keeping your scrubs, lab coats, and medical accessories in perfect condition for longer-lasting wear.",
      image: "https://images.pexels.com/photos/6749762/pexels-photo-6749762.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop",
      author: "Dr. Lisa Thompson",
      date: "March 3, 2024",
      category: "Care"
    }
  ];

  const categories = ["All", "Fashion", "Equipment", "Sustainability", "Technology", "Stories", "Care"];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-800 to-blue-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Knya Blog</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Insights, tips, and stories from the world of medical apparel and healthcare
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                className="px-6 py-2 rounded-full border border-purple-800 text-purple-800 hover:bg-purple-800 hover:text-white transition-colors"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-bold mb-3 text-gray-800 line-clamp-2">{post.title}</h2>
                  <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-1" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      <span>{post.date}</span>
                    </div>
                  </div>
                  <button className="flex items-center text-purple-800 font-semibold hover:text-purple-900 transition-colors">
                    Read More
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTA />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Blog;
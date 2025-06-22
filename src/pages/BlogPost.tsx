import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Calendar, User, ArrowLeft, Share2, Heart } from 'lucide-react';

const BlogPost = () => {
  const { slug } = useParams();

  // Mock blog post data
  const post = {
    title: "The Evolution of Medical Scrubs: From Function to Fashion",
    content: `
      <p>Medical scrubs have come a long way from their humble beginnings as simple, functional garments. Today, they represent a perfect blend of practicality, comfort, and style that reflects the modern healthcare professional's needs.</p>
      
      <h2>A Brief History</h2>
      <p>The concept of specialized medical clothing dates back to the early 20th century when the importance of hygiene in medical settings became widely recognized. Initially, medical professionals wore white coats and uniforms, symbolizing cleanliness and professionalism.</p>
      
      <p>The term "scrubs" originated from the practice of "scrubbing in" before surgery, where medical professionals would thoroughly wash their hands and arms before entering the operating room. The clothing worn during this process became known as scrubs.</p>
      
      <h2>The Modern Revolution</h2>
      <p>Today's medical scrubs are a far cry from their predecessors. Modern scrubs incorporate advanced fabric technologies, ergonomic designs, and fashion-forward aesthetics. Healthcare professionals no longer have to choose between functionality and style.</p>
      
      <h3>Key Features of Modern Scrubs:</h3>
      <ul>
        <li><strong>Moisture-wicking fabrics:</strong> Keep healthcare workers dry and comfortable during long shifts</li>
        <li><strong>Antimicrobial properties:</strong> Help prevent the growth of bacteria and odors</li>
        <li><strong>Stretch materials:</strong> Provide freedom of movement for active healthcare professionals</li>
        <li><strong>Multiple pockets:</strong> Offer convenient storage for essential tools and devices</li>
        <li><strong>Fade-resistant colors:</strong> Maintain professional appearance wash after wash</li>
      </ul>
      
      <h2>The Psychology of Color</h2>
      <p>The choice of scrub colors is no longer limited to traditional white or green. Different colors can have psychological effects on both patients and healthcare workers:</p>
      
      <ul>
        <li><strong>Navy Blue:</strong> Conveys trust, reliability, and professionalism</li>
        <li><strong>Burgundy/Wine:</strong> Represents sophistication and warmth</li>
        <li><strong>Teal:</strong> Associated with healing and tranquility</li>
        <li><strong>Black:</strong> Projects authority and elegance</li>
      </ul>
      
      <h2>Sustainability in Medical Apparel</h2>
      <p>As environmental consciousness grows, the medical apparel industry is embracing sustainable practices. Eco-friendly scrubs made from recycled materials and organic fabrics are becoming increasingly popular among environmentally conscious healthcare professionals.</p>
      
      <h2>The Future of Medical Scrubs</h2>
      <p>Looking ahead, we can expect to see even more innovations in medical apparel:</p>
      
      <ul>
        <li>Smart fabrics with integrated technology</li>
        <li>Temperature-regulating materials</li>
        <li>Enhanced antimicrobial properties</li>
        <li>Customizable fit and style options</li>
        <li>Sustainable and biodegradable materials</li>
      </ul>
      
      <p>The evolution of medical scrubs reflects the broader changes in healthcare itself – a move towards more personalized, comfortable, and efficient care delivery. As healthcare continues to evolve, so too will the clothing that healthcare professionals wear.</p>
    `,
    author: "Dr. Sarah Johnson",
    date: "March 15, 2024",
    category: "Fashion",
    image: "https://images.pexels.com/photos/6749778/pexels-photo-6749778.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop",
    readTime: "8 min read",
    tags: ["Medical Fashion", "Healthcare", "Scrubs", "Innovation"]
  };

  const relatedPosts = [
    {
      id: 1,
      title: "Choosing the Right Stethoscope: A Complete Guide",
      excerpt: "Everything you need to know about selecting the perfect stethoscope for your medical practice.",
      image: "https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=400&h=200&fit=crop",
      slug: "choosing-right-stethoscope-guide"
    },
    {
      id: 2,
      title: "Sustainable Healthcare: Eco-Friendly Medical Apparel",
      excerpt: "Learn about the importance of sustainable practices in healthcare and eco-friendly medical apparel.",
      image: "https://images.pexels.com/photos/6749788/pexels-photo-6749788.jpeg?auto=compress&cs=tinysrgb&w=400&h=200&fit=crop",
      slug: "sustainable-healthcare-eco-friendly-apparel"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Article Header */}
      <article className="max-w-4xl mx-auto px-4 py-8">
        <div className="mb-8">
          <Link 
            to="/blog" 
            className="inline-flex items-center text-purple-600 hover:text-purple-800 mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Link>
          
          <div className="mb-6">
            <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
              {post.category}
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 leading-tight">
            {post.title}
          </h1>
          
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-6 text-gray-600">
              <div className="flex items-center">
                <User className="w-4 h-4 mr-2" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                <span>{post.date}</span>
              </div>
              <span>{post.readTime}</span>
            </div>
            
            <div className="flex items-center space-x-4">
              <button className="flex items-center text-gray-600 hover:text-purple-600">
                <Heart className="w-5 h-5 mr-1" />
                <span>Like</span>
              </button>
              <button className="flex items-center text-gray-600 hover:text-purple-600">
                <Share2 className="w-5 h-5 mr-1" />
                <span>Share</span>
              </button>
            </div>
          </div>
        </div>
        
        {/* Featured Image */}
        <div className="mb-8">
          <img 
            src={post.image} 
            alt={post.title}
            className="w-full h-96 object-cover rounded-lg"
          />
        </div>
        
        {/* Article Content */}
        <div 
          className="prose prose-lg max-w-none mb-12"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
        
        {/* Tags */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-4">Tags</h3>
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag, index) => (
              <span 
                key={index}
                className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        
        {/* Author Bio */}
        <div className="bg-gray-50 rounded-lg p-6 mb-12">
          <div className="flex items-center mb-4">
            <div className="w-16 h-16 bg-purple-200 rounded-full flex items-center justify-center mr-4">
              <User className="w-8 h-8 text-purple-600" />
            </div>
            <div>
              <h3 className="text-xl font-semibold">{post.author}</h3>
              <p className="text-gray-600">Medical Writer & Healthcare Professional</p>
            </div>
          </div>
          <p className="text-gray-700">
            Dr. Sarah Johnson is a practicing physician and medical writer with over 10 years of experience 
            in healthcare. She specializes in medical apparel research and has contributed to numerous 
            publications on healthcare innovation and professional development.
          </p>
        </div>
        
        {/* Related Posts */}
        <div>
          <h2 className="text-2xl font-bold mb-8">Related Articles</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {relatedPosts.map((relatedPost) => (
              <Link 
                key={relatedPost.id} 
                to={`/blog/${relatedPost.slug}`}
                className="group"
              >
                <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <img 
                    src={relatedPost.image} 
                    alt={relatedPost.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-3 group-hover:text-purple-600 transition-colors">
                      {relatedPost.title}
                    </h3>
                    <p className="text-gray-600">{relatedPost.excerpt}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </article>
      
      <Footer />
    </div>
  );
};

export default BlogPost;
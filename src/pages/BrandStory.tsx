import React from 'react';
import Header from '../components/Header';
import CTA from '../components/intro';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import { Heart, Users, Award, Target } from 'lucide-react';

const BrandStory = () => {
  const milestones = [
    { year: "2018", title: "Founded", description: "Knya was born with a vision to revolutionize medical apparel in India" },
    { year: "2019", title: "First Product Launch", description: "Launched our first line of premium medical scrubs" },
    { year: "2020", title: "10,000+ Customers", description: "Reached our first major milestone of serving 10,000+ healthcare professionals" },
    { year: "2021", title: "6sense Stethoscope", description: "Introduced our flagship stethoscope with superior acoustics" },
    { year: "2022", title: "Ecoflex Collection", description: "Launched sustainable medical apparel line" },
    { year: "2023", title: "National Expansion", description: "Expanded to serve healthcare professionals across India" },
    { year: "2024", title: "Innovation Continues", description: "Continuing to innovate and serve the medical community" }
  ];

  const values = [
    {
      icon: <Heart className="w-12 h-12 text-red-500" />,
      title: "Care",
      description: "We care deeply about the comfort and well-being of healthcare professionals"
    },
    {
      icon: <Users className="w-12 h-12 text-blue-500" />,
      title: "Community",
      description: "Building a strong community of medical professionals who trust our products"
    },
    {
      icon: <Award className="w-12 h-12 text-yellow-500" />,
      title: "Quality",
      description: "Uncompromising quality in every product we create and deliver"
    },
    {
      icon: <Target className="w-12 h-12 text-green-500" />,
      title: "Innovation",
      description: "Constantly innovating to meet the evolving needs of healthcare"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-800 to-pink-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Story</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            From a simple idea to India's most loved medical apparel brand
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6 text-purple-800">The Beginning</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Knya was founded with a simple yet powerful vision: to create medical apparel that healthcare 
              professionals would love to wear. We noticed that while doctors and nurses dedicate their lives 
              to caring for others, they often had to compromise on comfort and style in their work attire.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-purple-800">Our Mission</h3>
              <p className="text-gray-600 mb-6">
                To provide healthcare professionals with comfortable, stylish, and functional medical apparel 
                that enhances their confidence and performance while caring for patients.
              </p>
              <h3 className="text-2xl font-bold mb-4 text-purple-800">Our Vision</h3>
              <p className="text-gray-600">
                To become the most trusted and loved medical apparel brand globally, known for innovation, 
                quality, and our commitment to the healthcare community.
              </p>
            </div>
            <div>
              <img 
                src="https://images.pexels.com/photos/6749778/pexels-photo-6749778.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" 
                alt="Healthcare professionals" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-purple-800">Our Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-lg shadow-lg">
                <div className="flex justify-center mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-purple-800">Our Journey</h2>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-purple-200"></div>
              {milestones.map((milestone, index) => (
                <div key={index} className={`relative flex items-center mb-8 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-purple-500">
                      <div className="text-2xl font-bold text-purple-800 mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-semibold mb-2 text-gray-800">{milestone.title}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-purple-500 rounded-full border-4 border-white"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-purple-800">Our Team</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
            Behind Knya is a passionate team of designers, healthcare professionals, and innovators 
            who work tirelessly to create products that make a difference in the lives of medical professionals.
          </p>
          <div className="bg-purple-800 text-white p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Join Our Mission</h3>
            <p className="text-lg mb-6">
              We're always looking for talented individuals who share our passion for healthcare and innovation.
            </p>
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded-lg transition-colors">
              View Careers
            </button>
          </div>
        </div>
      </section>

      <CTA />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default BrandStory;
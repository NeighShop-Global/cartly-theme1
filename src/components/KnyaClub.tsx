import React from 'react';

const KnyaClub = () => {
  const ugcPosts = [
    {
      image: 'https://images.pexels.com/photos/6749762/pexels-photo-6749762.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      tag: '#MyKnyaLook'
    },
    {
      image: 'https://images.pexels.com/photos/4173239/pexels-photo-4173239.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      tag: 'Is this the Knya stethoscope?'
    },
    {
      image: 'https://images.pexels.com/photos/6749788/pexels-photo-6749788.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      tag: '#KnyaLife'
    },
    {
      image: 'https://images.pexels.com/photos/8460332/pexels-photo-8460332.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      tag: '#ScrubStyle'
    },
    {
      image: 'https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      tag: '#MedicalFashion'
    },
    {
      image: 'https://images.pexels.com/photos/6749778/pexels-photo-6749778.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      tag: '#KnyaFamily'
    },
    {
      image: 'https://images.pexels.com/photos/7089020/pexels-photo-7089020.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      tag: '#HealthcareHeroes'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-purple-800">Join the Knya Club</h2>
        <div className="overflow-hidden">
          <div className="animate-marquee flex space-x-6">
            {[...ugcPosts, ...ugcPosts].map((post, index) => (
              <div key={index} className="flex-shrink-0 w-80 relative group cursor-pointer">
                <div className="relative overflow-hidden rounded-lg">
                  <img 
                    src={post.image} 
                    alt={post.tag}
                    className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-black bg-opacity-50 text-white px-3 py-2 rounded text-sm font-medium">
                      {post.tag}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default KnyaClub;
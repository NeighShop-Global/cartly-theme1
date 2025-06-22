import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { User, Package, Heart, Settings, MapPin, CreditCard, Bell, LogOut } from 'lucide-react';

const Account = () => {
  const [activeTab, setActiveTab] = useState('profile');

  const tabs = [
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'orders', label: 'Orders', icon: Package },
    { id: 'wishlist', label: 'Wishlist', icon: Heart },
    { id: 'addresses', label: 'Addresses', icon: MapPin },
    { id: 'payments', label: 'Payment Methods', icon: CreditCard },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  const orders = [
    {
      id: 'KNY123456',
      date: '2024-03-15',
      status: 'Delivered',
      total: 3499,
      items: [
        { name: '6sense Stethoscope', quantity: 1, price: 2499 },
        { name: 'Navy Scrub Set', quantity: 1, price: 1899 }
      ]
    },
    {
      id: 'KNY123457',
      date: '2024-03-10',
      status: 'Shipped',
      total: 1299,
      items: [
        { name: 'Premium Lab Coat', quantity: 1, price: 1299 }
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">My Account</h1>
        
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-purple-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <User className="w-10 h-10 text-purple-600" />
                </div>
                <h2 className="text-xl font-semibold">Dr. John Doe</h2>
                <p className="text-gray-600">john.doe@example.com</p>
              </div>
              
              <nav className="space-y-2">
                {tabs.map((tab) => {
                  const Icon = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full flex items-center px-4 py-3 rounded-lg text-left transition-colors ${
                        activeTab === tab.id
                          ? 'bg-purple-100 text-purple-800'
                          : 'text-gray-600 hover:bg-gray-50'
                      }`}
                    >
                      <Icon className="w-5 h-5 mr-3" />
                      {tab.label}
                    </button>
                  );
                })}
                
                <button className="w-full flex items-center px-4 py-3 rounded-lg text-left text-red-600 hover:bg-red-50 transition-colors">
                  <LogOut className="w-5 h-5 mr-3" />
                  Logout
                </button>
              </nav>
            </div>
          </div>
          
          {/* Content */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-lg shadow-lg p-6">
              {/* Profile Tab */}
              {activeTab === 'profile' && (
                <div>
                  <h2 className="text-2xl font-semibold mb-6">Profile Information</h2>
                  <form className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                      <input
                        type="text"
                        defaultValue="John"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                      <input
                        type="text"
                        defaultValue="Doe"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                      <input
                        type="email"
                        defaultValue="john.doe@example.com"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                      <input
                        type="tel"
                        defaultValue="+91 9876543210"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">Profession</label>
                      <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent">
                        <option>Doctor</option>
                        <option>Nurse</option>
                        <option>Medical Student</option>
                        <option>Other Healthcare Professional</option>
                      </select>
                    </div>
                    <div className="md:col-span-2">
                      <button className="bg-purple-800 hover:bg-purple-900 text-white font-semibold py-3 px-8 rounded-lg transition-colors">
                        Update Profile
                      </button>
                    </div>
                  </form>
                </div>
              )}

              {/* Orders Tab */}
              {activeTab === 'orders' && (
                <div>
                  <h2 className="text-2xl font-semibold mb-6">Order History</h2>
                  <div className="space-y-6">
                    {orders.map((order) => (
                      <div key={order.id} className="border border-gray-200 rounded-lg p-6">
                        <div className="flex items-center justify-between mb-4">
                          <div>
                            <h3 className="text-lg font-semibold">Order #{order.id}</h3>
                            <p className="text-gray-600">Placed on {order.date}</p>
                          </div>
                          <div className="text-right">
                            <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                              order.status === 'Delivered' 
                                ? 'bg-green-100 text-green-800'
                                : 'bg-blue-100 text-blue-800'
                            }`}>
                              {order.status}
                            </span>
                            <p className="text-lg font-semibold mt-1">₹{order.total.toLocaleString()}</p>
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          {order.items.map((item, index) => (
                            <div key={index} className="flex justify-between text-sm">
                              <span>{item.name} (Qty: {item.quantity})</span>
                              <span>₹{item.price.toLocaleString()}</span>
                            </div>
                          ))}
                        </div>
                        
                        <div className="flex space-x-4 mt-4">
                          <button className="text-purple-600 hover:text-purple-800 font-medium">
                            View Details
                          </button>
                          <button className="text-purple-600 hover:text-purple-800 font-medium">
                            Track Order
                          </button>
                          <button className="text-purple-600 hover:text-purple-800 font-medium">
                            Reorder
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Wishlist Tab */}
              {activeTab === 'wishlist' && (
                <div>
                  <h2 className="text-2xl font-semibold mb-6">My Wishlist</h2>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Wishlist items would be mapped here */}
                    <div className="text-center py-12">
                      <Heart className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                      <p className="text-gray-600">Your wishlist is empty</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Addresses Tab */}
              {activeTab === 'addresses' && (
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-semibold">Saved Addresses</h2>
                    <button className="bg-purple-800 hover:bg-purple-900 text-white font-semibold py-2 px-4 rounded-lg transition-colors">
                      Add New Address
                    </button>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="border border-gray-200 rounded-lg p-6">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="font-semibold">Home</h3>
                        <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">Default</span>
                      </div>
                      <p className="text-gray-600 mb-4">
                        123 Medical Street<br />
                        Mumbai, Maharashtra 400001<br />
                        India
                      </p>
                      <div className="flex space-x-4">
                        <button className="text-purple-600 hover:text-purple-800 font-medium">Edit</button>
                        <button className="text-red-600 hover:text-red-800 font-medium">Delete</button>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Other tabs would be implemented similarly */}
              {activeTab === 'payments' && (
                <div>
                  <h2 className="text-2xl font-semibold mb-6">Payment Methods</h2>
                  <p className="text-gray-600">Manage your saved payment methods</p>
                </div>
              )}

              {activeTab === 'notifications' && (
                <div>
                  <h2 className="text-2xl font-semibold mb-6">Notification Preferences</h2>
                  <p className="text-gray-600">Customize your notification settings</p>
                </div>
              )}

              {activeTab === 'settings' && (
                <div>
                  <h2 className="text-2xl font-semibold mb-6">Account Settings</h2>
                  <p className="text-gray-600">Manage your account preferences</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Account;
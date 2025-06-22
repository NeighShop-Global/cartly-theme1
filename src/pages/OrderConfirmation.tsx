import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { CheckCircle, Package, Truck, Calendar, Download } from 'lucide-react';

const OrderConfirmation = () => {
  // Mock order data
  const order = {
    id: 'KNY123456',
    date: '2024-03-15',
    total: 4397,
    items: [
      {
        id: '1',
        name: '6sense (Black) Stethoscope',
        price: 2499,
        quantity: 1,
        image: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop'
      },
      {
        id: '2',
        name: 'Navy Blue Scrub Set',
        price: 1899,
        quantity: 1,
        image: 'https://images.pexels.com/photos/6749778/pexels-photo-6749778.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop'
      }
    ],
    shipping: {
      address: '123 Medical Street, Mumbai, Maharashtra 400001',
      method: 'Standard Delivery',
      estimatedDate: '2024-03-20'
    },
    payment: {
      method: 'Credit Card',
      last4: '1234'
    }
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {/* Success Message */}
        <div className="text-center mb-12">
          <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6" />
          <h1 className="text-4xl font-bold mb-4 text-gray-800">Order Confirmed!</h1>
          <p className="text-xl text-gray-600 mb-2">Thank you for your purchase</p>
          <p className="text-gray-600">Order #{order.id}</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Order Details */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
              <h2 className="text-2xl font-semibold mb-6">Order Details</h2>
              
              <div className="space-y-4">
                {order.items.map((item) => (
                  <div key={item.id} className="flex items-center space-x-4 p-4 border border-gray-200 rounded-lg">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded"
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold">{item.name}</h3>
                      <p className="text-gray-600">Quantity: {item.quantity}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold">₹{item.price.toLocaleString()}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Shipping Information */}
            <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
              <h2 className="text-2xl font-semibold mb-6 flex items-center">
                <Truck className="w-6 h-6 mr-2" />
                Shipping Information
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-2">Delivery Address</h3>
                  <p className="text-gray-600">{order.shipping.address}</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Delivery Method</h3>
                  <p className="text-gray-600">{order.shipping.method}</p>
                  <div className="flex items-center mt-2 text-sm text-gray-600">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span>Expected delivery: {order.shipping.estimatedDate}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Payment Information */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-semibold mb-6">Payment Information</h2>
              
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold">{order.payment.method}</p>
                  <p className="text-gray-600">**** **** **** {order.payment.last4}</p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-purple-800">₹{order.total.toLocaleString()}</p>
                  <p className="text-sm text-gray-600">Total Amount</p>
                </div>
              </div>
            </div>
          </div>

          {/* Order Summary & Actions */}
          <div>
            <div className="bg-white rounded-lg shadow-lg p-6 sticky top-24">
              <h2 className="text-xl font-semibold mb-6">What's Next?</h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-purple-100 rounded-full p-2">
                    <Package className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Order Processing</h3>
                    <p className="text-sm text-gray-600">We're preparing your items for shipment</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 rounded-full p-2">
                    <Truck className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Shipping Updates</h3>
                    <p className="text-sm text-gray-600">You'll receive tracking information via email</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 rounded-full p-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Delivery</h3>
                    <p className="text-sm text-gray-600">Expected by {order.shipping.estimatedDate}</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-3 mt-8">
                <Link
                  to={`/track-order?order=${order.id}`}
                  className="w-full bg-purple-800 hover:bg-purple-900 text-white font-semibold py-3 px-6 rounded-lg transition-colors block text-center"
                >
                  Track Your Order
                </Link>
                
                <button className="w-full border border-purple-800 text-purple-800 hover:bg-purple-50 font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center">
                  <Download className="w-5 h-5 mr-2" />
                  Download Invoice
                </button>
                
                <Link
                  to="/"
                  className="w-full border border-gray-300 text-gray-700 hover:bg-gray-50 font-semibold py-3 px-6 rounded-lg transition-colors block text-center"
                >
                  Continue Shopping
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Support Information */}
        <div className="bg-gray-50 rounded-lg p-8 mt-12 text-center">
          <h2 className="text-2xl font-semibold mb-4">Need Help?</h2>
          <p className="text-gray-600 mb-6">
            Our customer support team is here to assist you with any questions about your order.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/faq"
              className="bg-purple-800 hover:bg-purple-900 text-white font-semibold py-3 px-8 rounded-lg transition-colors"
            >
              View FAQ
            </Link>
            <a
              href="tel:+919987200005"
              className="border border-purple-800 text-purple-800 hover:bg-purple-50 font-semibold py-3 px-8 rounded-lg transition-colors"
            >
              Call Support
            </a>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default OrderConfirmation;
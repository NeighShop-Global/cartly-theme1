import React, { useState } from 'react';
import Header from '../components/Header';
import CTA from '../components/intro';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import { ChevronDown, ChevronUp, Search } from 'lucide-react';

const FAQ = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  const faqCategories = [
    {
      category: "Orders & Shipping",
      faqs: [
        {
          question: "How long does shipping take?",
          answer: "We offer free shipping on orders over ₹999. Standard delivery takes 3-5 business days, while express delivery takes 1-2 business days. You'll receive a tracking number once your order ships."
        },
        {
          question: "Can I track my order?",
          answer: "Yes! Once your order ships, you'll receive a tracking number via email and SMS. You can also track your order on our Track Order page using your order number and email address."
        },
        {
          question: "What if I need to change my shipping address?",
          answer: "You can change your shipping address within 2 hours of placing your order by contacting our customer support. After this window, we cannot modify the address as the order enters processing."
        },
        {
          question: "Do you ship internationally?",
          answer: "Currently, we only ship within India. We're working on expanding our international shipping options and will update customers when available."
        }
      ]
    },
    {
      category: "Products & Sizing",
      faqs: [
        {
          question: "How do I choose the right size?",
          answer: "We provide detailed size charts for all our products. Measure yourself according to our sizing guide and compare with the chart. If you're between sizes, we recommend sizing up for a more comfortable fit."
        },
        {
          question: "What materials are your scrubs made from?",
          answer: "Our scrubs are made from high-quality cotton-polyester blends that are breathable, durable, and easy to care for. Our Ecoflex collection uses sustainable materials including organic cotton and recycled polyester."
        },
        {
          question: "Are your stethoscopes suitable for all medical specialties?",
          answer: "Our 6sense stethoscopes are designed for general medical use and are suitable for most specialties. They feature superior acoustics and are trusted by doctors across various fields including cardiology, internal medicine, and pediatrics."
        },
        {
          question: "How do I care for my medical apparel?",
          answer: "Machine wash in cold water with like colors. Use mild detergent and avoid bleach. Tumble dry on low heat or hang dry. Iron on low heat if needed. Detailed care instructions are included with each product."
        }
      ]
    },
    {
      category: "Returns & Exchanges",
      faqs: [
        {
          question: "What is your return policy?",
          answer: "We offer a 30-day return policy for unused items in original condition with tags attached. Returns are free for defective items, while customer-initiated returns may have a small processing fee."
        },
        {
          question: "Can I exchange for a different size?",
          answer: "Yes! We offer free size exchanges within 30 days of purchase. The item must be unused, unwashed, and in original condition. Contact our support team to initiate an exchange."
        },
        {
          question: "What about the 7-day free trial for stethoscopes?",
          answer: "Our 6sense stethoscopes come with a 7-day free trial. If you're not completely satisfied, return it within 7 days for a full refund, no questions asked. The stethoscope should be in original condition."
        },
        {
          question: "How long does it take to process a return?",
          answer: "Once we receive your returned item, we'll process it within 3-5 business days. Refunds are issued to the original payment method and may take 5-7 business days to appear in your account."
        }
      ]
    },
    {
      category: "Account & Payment",
      faqs: [
        {
          question: "Do I need to create an account to place an order?",
          answer: "While you can checkout as a guest, creating an account allows you to track orders, save addresses, view order history, and receive exclusive offers. It only takes a minute to sign up!"
        },
        {
          question: "What payment methods do you accept?",
          answer: "We accept all major credit cards, debit cards, UPI, net banking, and digital wallets. We also offer EMI options for orders above ₹3,000 through select banks and payment partners."
        },
        {
          question: "Is my payment information secure?",
          answer: "Absolutely! We use industry-standard SSL encryption to protect your payment information. We never store your complete card details on our servers and comply with PCI DSS security standards."
        },
        {
          question: "Can I get a GST invoice?",
          answer: "Yes, we provide GST invoices for all orders. You can add your GST details during checkout, and the invoice will be emailed to you along with your order confirmation."
        }
      ]
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const filteredFAQs = faqCategories.map(category => ({
    ...category,
    faqs: category.faqs.filter(faq => 
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.faqs.length > 0);

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-800 to-blue-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Frequently Asked Questions</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Find answers to common questions about our products, orders, and services
          </p>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search FAQs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          {filteredFAQs.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-purple-800">{category.category}</h2>
              <div className="space-y-4">
                {category.faqs.map((faq, faqIndex) => {
                  const globalIndex = categoryIndex * 100 + faqIndex;
                  return (
                    <div key={faqIndex} className="bg-white rounded-lg shadow-lg overflow-hidden">
                      <button
                        onClick={() => toggleFAQ(globalIndex)}
                        className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                      >
                        <h3 className="text-lg font-semibold text-gray-800 pr-4">{faq.question}</h3>
                        {openFAQ === globalIndex ? (
                          <ChevronUp className="w-5 h-5 text-purple-600 flex-shrink-0" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-purple-600 flex-shrink-0" />
                        )}
                      </button>
                      {openFAQ === globalIndex && (
                        <div className="px-6 pb-4">
                          <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Support */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h2 className="text-3xl font-bold mb-6 text-purple-800">Still Have Questions?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Our customer support team is here to help you with any questions not covered in our FAQ.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-semibold mb-2">Phone Support</h3>
              <p className="text-purple-800 font-bold mb-1">+91 9987200005</p>
              <p className="text-sm text-gray-600">Mon-Sat (10am-6pm)</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-semibold mb-2">Email Support</h3>
              <p className="text-purple-800 font-bold mb-1">support@knya.com</p>
              <p className="text-sm text-gray-600">24/7 Support</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-semibold mb-2">Live Chat</h3>
              <p className="text-purple-800 font-bold mb-1">Chat with us</p>
              <p className="text-sm text-gray-600">Mon-Sun (8am-8pm)</p>
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

export default FAQ;
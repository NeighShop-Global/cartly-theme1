import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { FileText, Shield, AlertCircle } from 'lucide-react';

const TermsConditions = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-800 to-blue-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Terms & Conditions</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Please read these terms carefully before using our services
          </p>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <div className="bg-blue-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
              <div className="flex items-center mb-4">
                <AlertCircle className="w-6 h-6 text-blue-600 mr-2" />
                <h3 className="text-lg font-semibold text-blue-800">Last Updated: March 1, 2024</h3>
              </div>
              <p className="text-blue-700">
                These Terms and Conditions govern your use of the Knya website and services. By accessing or using our services, you agree to be bound by these terms.
              </p>
            </div>

            <h2 className="text-2xl font-bold mb-4 text-purple-800 flex items-center">
              <FileText className="w-6 h-6 mr-2" />
              1. Acceptance of Terms
            </h2>
            <p className="mb-6 text-gray-700">
              By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
            </p>

            <h2 className="text-2xl font-bold mb-4 text-purple-800">2. Use License</h2>
            <p className="mb-4 text-gray-700">
              Permission is granted to temporarily download one copy of the materials on Knya's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li>modify or copy the materials</li>
              <li>use the materials for any commercial purpose or for any public display (commercial or non-commercial)</li>
              <li>attempt to decompile or reverse engineer any software contained on the website</li>
              <li>remove any copyright or other proprietary notations from the materials</li>
            </ul>

            <h2 className="text-2xl font-bold mb-4 text-purple-800">3. Product Information</h2>
            <p className="mb-6 text-gray-700">
              We strive to provide accurate product information, including descriptions, prices, and availability. However, we do not warrant that product descriptions or other content is accurate, complete, reliable, current, or error-free. Colors shown in product images may vary due to monitor settings and lighting conditions.
            </p>

            <h2 className="text-2xl font-bold mb-4 text-purple-800">4. Pricing and Payment</h2>
            <p className="mb-4 text-gray-700">
              All prices are listed in Indian Rupees (INR) and include applicable taxes unless otherwise stated. We reserve the right to change prices at any time without notice. Payment must be received before products are shipped. We accept the following payment methods:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li>Credit and Debit Cards</li>
              <li>UPI and Digital Wallets</li>
              <li>Net Banking</li>
              <li>EMI options (for eligible orders)</li>
            </ul>

            <h2 className="text-2xl font-bold mb-4 text-purple-800">5. Shipping and Delivery</h2>
            <p className="mb-6 text-gray-700">
              We ship to addresses within India only. Delivery times are estimates and may vary based on location and product availability. Risk of loss and title for products pass to you upon delivery to the shipping address. We are not responsible for delays caused by shipping carriers or circumstances beyond our control.
            </p>

            <h2 className="text-2xl font-bold mb-4 text-purple-800">6. Returns and Refunds</h2>
            <p className="mb-6 text-gray-700">
              Our return policy allows returns within 30 days of delivery for most items in original condition. Certain items may have different return policies as specified on the product page. Refunds will be processed to the original payment method within 5-7 business days after we receive and process the returned item.
            </p>

            <h2 className="text-2xl font-bold mb-4 text-purple-800">7. User Accounts</h2>
            <p className="mb-6 text-gray-700">
              When you create an account with us, you must provide information that is accurate, complete, and current at all times. You are responsible for safeguarding the password and for all activities that occur under your account. You agree to immediately notify us of any unauthorized use of your account.
            </p>

            <h2 className="text-2xl font-bold mb-4 text-purple-800">8. Privacy Policy</h2>
            <p className="mb-6 text-gray-700">
              Your privacy is important to us. Our Privacy Policy explains how we collect, use, and protect your information when you use our services. By using our services, you agree to the collection and use of information in accordance with our Privacy Policy.
            </p>

            <h2 className="text-2xl font-bold mb-4 text-purple-800">9. Intellectual Property</h2>
            <p className="mb-6 text-gray-700">
              The service and its original content, features, and functionality are and will remain the exclusive property of Knya and its licensors. The service is protected by copyright, trademark, and other laws. Our trademarks and trade dress may not be used in connection with any product or service without our prior written consent.
            </p>

            <h2 className="text-2xl font-bold mb-4 text-purple-800">10. Limitation of Liability</h2>
            <p className="mb-6 text-gray-700">
              In no event shall Knya, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your use of the service.
            </p>

            <h2 className="text-2xl font-bold mb-4 text-purple-800">11. Governing Law</h2>
            <p className="mb-6 text-gray-700">
              These Terms shall be interpreted and governed by the laws of India. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts in Mumbai, Maharashtra.
            </p>

            <h2 className="text-2xl font-bold mb-4 text-purple-800">12. Changes to Terms</h2>
            <p className="mb-6 text-gray-700">
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days notice prior to any new terms taking effect.
            </p>

            <h2 className="text-2xl font-bold mb-4 text-purple-800 flex items-center">
              <Shield className="w-6 h-6 mr-2" />
              13. Contact Information
            </h2>
            <p className="mb-4 text-gray-700">
              If you have any questions about these Terms and Conditions, please contact us:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="mb-2"><strong>Email:</strong> legal@knya.com</p>
              <p className="mb-2"><strong>Phone:</strong> +91 9987200005</p>
              <p className="mb-2"><strong>Address:</strong> Knya Enterprise Pvt. Ltd.</p>
              <p className="mb-2">401, Todi Building, Mathuradas Mill Compound</p>
              <p>Lower Parel, Mumbai 400013, MH, India</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TermsConditions;
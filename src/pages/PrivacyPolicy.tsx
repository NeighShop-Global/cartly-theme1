import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Shield, Eye, Lock, UserCheck } from 'lucide-react';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-800 to-blue-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Privacy Policy</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Your privacy is important to us. Learn how we collect, use, and protect your information.
          </p>
        </div>
      </section>

      {/* Privacy Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="text-center">
              <Shield className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Data Protection</h3>
              <p className="text-sm text-gray-600">We use industry-standard security measures</p>
            </div>
            <div className="text-center">
              <Eye className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Transparency</h3>
              <p className="text-sm text-gray-600">Clear information about data usage</p>
            </div>
            <div className="text-center">
              <Lock className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Secure Storage</h3>
              <p className="text-sm text-gray-600">Encrypted data storage and transmission</p>
            </div>
            <div className="text-center">
              <UserCheck className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">User Control</h3>
              <p className="text-sm text-gray-600">You control your personal information</p>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-blue-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
            <h3 className="text-lg font-semibold text-blue-800 mb-2">Last Updated: March 1, 2024</h3>
            <p className="text-blue-700">
              This Privacy Policy describes how Knya Enterprise Pvt. Ltd. collects, uses, and protects your personal information when you use our website and services.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6 text-purple-800">1. Information We Collect</h2>
            
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Personal Information</h3>
            <p className="mb-4 text-gray-700">
              We collect information you provide directly to us, such as when you:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li>Create an account or make a purchase</li>
              <li>Subscribe to our newsletter</li>
              <li>Contact customer support</li>
              <li>Participate in surveys or promotions</li>
            </ul>

            <h3 className="text-xl font-semibold mb-4 text-gray-800">Information Collected Automatically</h3>
            <p className="mb-4 text-gray-700">
              When you visit our website, we automatically collect certain information, including:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li>IP address and device information</li>
              <li>Browser type and version</li>
              <li>Pages visited and time spent on site</li>
              <li>Referring website information</li>
            </ul>

            <h2 className="text-2xl font-bold mb-6 text-purple-800 mt-8">2. How We Use Your Information</h2>
            <p className="mb-4 text-gray-700">
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li>Process and fulfill your orders</li>
              <li>Provide customer support and respond to inquiries</li>
              <li>Send you important updates about your orders</li>
              <li>Improve our website and services</li>
              <li>Send marketing communications (with your consent)</li>
              <li>Prevent fraud and ensure security</li>
            </ul>

            <h2 className="text-2xl font-bold mb-6 text-purple-800 mt-8">3. Information Sharing</h2>
            <p className="mb-4 text-gray-700">
              We do not sell, trade, or rent your personal information to third parties. We may share your information in the following circumstances:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li>With service providers who help us operate our business</li>
              <li>To comply with legal obligations</li>
              <li>To protect our rights and prevent fraud</li>
              <li>With your explicit consent</li>
            </ul>

            <h2 className="text-2xl font-bold mb-6 text-purple-800 mt-8">4. Data Security</h2>
            <p className="mb-6 text-gray-700">
              We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. This includes SSL encryption for data transmission and secure storage of sensitive information.
            </p>

            <h2 className="text-2xl font-bold mb-6 text-purple-800 mt-8">5. Cookies and Tracking</h2>
            <p className="mb-4 text-gray-700">
              We use cookies and similar technologies to:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li>Remember your preferences and settings</li>
              <li>Analyze website traffic and usage patterns</li>
              <li>Provide personalized content and advertisements</li>
              <li>Improve website functionality</li>
            </ul>
            <p className="mb-6 text-gray-700">
              You can control cookie settings through your browser preferences.
            </p>

            <h2 className="text-2xl font-bold mb-6 text-purple-800 mt-8">6. Your Rights</h2>
            <p className="mb-4 text-gray-700">
              You have the right to:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li>Access and update your personal information</li>
              <li>Request deletion of your personal data</li>
              <li>Opt-out of marketing communications</li>
              <li>Request a copy of your data</li>
              <li>Lodge a complaint with relevant authorities</li>
            </ul>

            <h2 className="text-2xl font-bold mb-6 text-purple-800 mt-8">7. Data Retention</h2>
            <p className="mb-6 text-gray-700">
              We retain your personal information for as long as necessary to fulfill the purposes outlined in this policy, comply with legal obligations, resolve disputes, and enforce our agreements. Account information is typically retained for the duration of your account plus a reasonable period thereafter.
            </p>

            <h2 className="text-2xl font-bold mb-6 text-purple-800 mt-8">8. Third-Party Links</h2>
            <p className="mb-6 text-gray-700">
              Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to review the privacy policies of any third-party sites you visit.
            </p>

            <h2 className="text-2xl font-bold mb-6 text-purple-800 mt-8">9. Children's Privacy</h2>
            <p className="mb-6 text-gray-700">
              Our services are not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If we become aware that we have collected such information, we will take steps to delete it promptly.
            </p>

            <h2 className="text-2xl font-bold mb-6 text-purple-800 mt-8">10. Changes to This Policy</h2>
            <p className="mb-6 text-gray-700">
              We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on this page and updating the "Last Updated" date. Your continued use of our services after such changes constitutes acceptance of the updated policy.
            </p>

            <h2 className="text-2xl font-bold mb-6 text-purple-800 mt-8">11. Contact Us</h2>
            <p className="mb-4 text-gray-700">
              If you have any questions about this Privacy Policy or our data practices, please contact us:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="mb-2"><strong>Email:</strong> privacy@knya.com</p>
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

export default PrivacyPolicy;
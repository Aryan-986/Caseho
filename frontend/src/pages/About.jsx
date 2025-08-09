import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Shield, Truck, Award, Heart, } from 'lucide-react';
import NewsletterBox from '../components/NewsletterBox';

const AboutUs = () => {
  const [expandedFaq, setExpandedFaq] = useState(null);
  const [expandedSection, setExpandedSection] = useState(null);

  const toggleFaq = (index) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const faqs = [
    {
      question: "📦 What models of iPhone do your cases support?",
      answer: "We offer cases for iPhone and newer — including all Pro, Plus, and Max models. Our collection covers iPhone 11, 12, 13, 14, 15 and more upcomming series with precise cutouts and perfect fit guaranteed."
    },
    {
      question: "🧲 Are your cases MagSafe compatible?",
      answer: "Yes! Most of our premium cases are MagSafe compatible with built-in magnetic rings. Check individual product descriptions for MagSafe compatibility confirmation."
    },
    {
      question: "🚚 How long does delivery take?",
      answer: "Delivery within Kathmandu Valley: 1-2 business days. Outside valley (within Nepal): 3-5 business days. International delivery: 7-14 business days depending on location."
    },
  
    {
      question: "💵 Do you accept Cash on Delivery (COD)?",
      answer: "Yes! COD is available within Kathmandu Valley and major cities in Nepal. A small COD fee may apply depending on location."
    },
    {
      question: "🎨 Do you offer custom cases?",
      answer: "Custom and personalized cases are coming soon! Subscribe to our newsletter to be the first to know when they're available."
    },
    {
      question: "🛡️ Are your cases drop-tested?",
      answer: "Absolutely! All our cases are rigorously tested for drops up to 6 feet (1.8m) and meet military-grade protection standards."
    },
    {
      question: "💳 What payment methods do you accept?",
      answer: "We are on process to accept all major payment methods: eSewa, Khalti, IME Pay, bank transfers, credit/debit cards, and cash on delivery."
    }
  ];

  const features = [
    {
      icon: <Shield className="w-8 h-8 text-blue-600" />,
      title: "Premium Protection",
      description: "Military-grade drop protection with reinforced corners and raised edges for screen safety."
    },
    {
      icon: <Award className="w-8 h-8 text-green-600" />,
      title: "Quality Guarantee",
      description: "100% authentic products with manufacturer warranty and quality assurance."
    },
    {
      icon: <Truck className="w-8 h-8 text-purple-600" />,
      title: "Fast Delivery",
      description: "Quick and reliable delivery across Nepal with tracking and insurance."
    },
    {
      icon: <Heart className="w-8 h-8 text-red-600" />,
      title: "Customer First",
      description: "Dedicated customer support with 24/7 assistance and satisfaction guarantee."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      
      {/* About Story */}
      <div className="py-16 container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-8">Our Story</h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            Founded with a passion for protecting what matters most to you, Realprotech began as a dream to bring 
            premium iPhone protection to Nepal. We understand that your iPhone isn't just a device - it's your 
            connection to the world, your memories, and your productivity.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            Today, we're proud to be Nepal's trusted online retailer for iPhone cases and accessories, serving 
            customers across the country with authentic products, competitive prices, and exceptional service.
          </p>
        </div>
      </div>

      {/* Features Grid */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Why Choose Realprotech?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6 rounded-xl bg-gradient-to-br from-white to-gray-50 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Guide Sections */}
      <div className="py-16 container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Customer Guide</h2>
        <div className="max-w-4xl mx-auto space-y-6">
          
          {/* Shopping Guide */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <button 
              onClick={() => toggleSection('shopping')}
              className="w-full p-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
            >
              <h3 className="text-xl font-bold text-gray-800">🛍️ Shopping Guide</h3>
              {expandedSection === 'shopping' ? <ChevronUp /> : <ChevronDown />}
            </button>
            {expandedSection === 'shopping' && (
              <div className="p-6 pt-0 text-gray-600">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">How to Choose the Right Case:</h4>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Select your exact iPhone model from our compatibility list</li>
                      <li>Consider your lifestyle: heavy-duty vs. slim protection</li>
                      <li>Check MagSafe compatibility if you use wireless charging</li>
                      <li>Read customer reviews for real-world feedback</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Ordering Process:</h4>
                    <ol className="list-decimal list-inside space-y-1">
                      <li>Browse our collection and add items to cart</li>
                      <li>Review your order and apply any discount codes</li>
                      <li>Choose delivery method and payment option</li>
                      <li>Confirm order and receive confirmation email</li>
                      <li>Track your package with provided tracking number</li>
                    </ol>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Shipping Info */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <button 
              onClick={() => toggleSection('shipping')}
              className="w-full p-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
            >
              <h3 className="text-xl font-bold text-gray-800">🚚 Shipping Information</h3>
              {expandedSection === 'shipping' ? <ChevronUp /> : <ChevronDown />}
            </button>
            {expandedSection === 'shipping' && (
              <div className="p-6 pt-0 text-gray-600">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Domestic Shipping (Nepal):</h4>
                    <ul className="space-y-2">
                      <li><strong>Kathmandu Valley:</strong> 1-2 business days (Free shipping over Rs. 4000)</li>
                      <li><strong>Outside Valley:</strong> 3-5 business days (Rs. 100 shipping fee)</li>
                      
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">International Shipping:</h4>
                    <ul className="space-y-2">
                      <li><strong>India:</strong> 7-10 business days</li>
                      <li><strong>Other Countries:</strong> 10-14 business days</li>
                      <li><strong>Shipping Cost:</strong> Calculated at checkout or contact on whatsapp or insta berfore confirmation</li>
                      <li><strong>Customs:</strong> Customer responsible for duties</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Privacy Policy */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <button 
              onClick={() => toggleSection('privacy')}
              className="w-full p-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
            >
              <h3 className="text-xl font-bold text-gray-800">🔒 Privacy Policy</h3>
              {expandedSection === 'privacy' ? <ChevronUp /> : <ChevronDown />}
            </button>
            {expandedSection === 'privacy' && (
              <div className="p-6 pt-0 text-gray-600 space-y-4">
                <p><strong>Information We Collect:</strong> We collect only necessary information for order processing including name, address, phone number, and email.</p>
                <p><strong>How We Use Information:</strong> Your data is used solely for order fulfillment, customer service, and optional marketing communications.</p>
                <p><strong>Data Security:</strong> We use industry-standard encryption and secure servers to protect your personal information.</p>
                <p><strong>Third Parties:</strong> We never sell or share your personal information with third parties except as required for shipping and payment processing.</p>
                <p><strong>Your Rights:</strong> You can request data deletion, modification, or opt-out of marketing communications at any time.</p>
              </div>
            )}
          </div>

        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Frequently Asked Questions</h2>
          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-xl shadow-sm overflow-hidden">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full p-6 text-left flex justify-between items-center hover:bg-gray-100 transition-colors"
                >
                  <h3 className="font-semibold text-gray-800">{faq.question}</h3>
                  {expandedFaq === index ? <ChevronUp /> : <ChevronDown />}
                </button>
                {expandedFaq === index && (
                  <div className="p-6 pt-0 text-gray-600">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div>
        
      </div>
      
    </div>
  );
};

export default AboutUs;
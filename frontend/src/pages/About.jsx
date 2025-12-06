import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Shield, Truck, Award, Heart } from 'lucide-react';
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

  // ------------------ FAQ FOR WATCH BRAND ------------------
  const faqs = [
    {
      question: "⌚ What types of watches do you sell?",
      answer:
        "We offer premium wristwatches including analog, digital, smartwatches, hybrid watches, luxury dress watches, and rugged sports models. Our collection includes men's, women’s, and unisex watches from top-quality manufacturers."
    },
    {
      question: "🔋 Are your smartwatches compatible with my phone?",
      answer:
        "Yes! Most of our smartwatches support both iOS and Android. Check individual product descriptions for detailed compatibility."
    },
    {
      question: "🚚 How long does delivery take?",
      answer:
        "Inside Kathmandu Valley: 1–2 days. Outside valley: 3–5 days. International delivery usually completes in 7–14 days depending on location."
    },
    {
      question: "💵 Do you support Cash on Delivery (COD)?",
      answer:
        "Yes, COD is available inside Kathmandu Valley and major cities of Nepal. A small fee may apply depending on location."
    },
    {
      question: "🎁 Do you offer custom watch straps?",
      answer:
        "Yes! We provide premium replacement straps in leather, silicone, metal, and sports bands. More custom strap options coming soon."
    },
    {
      question: "🛡️ Are your watches water-resistant?",
      answer:
        "Most watches come with 3ATM, 5ATM, or 10ATM water resistance ratings. Check product details to know exactly how much water exposure your watch can handle."
    },
    {
      question: "💳 What payment methods do you accept?",
      answer:
        "We accept eSewa, Khalti, IME Pay, bank transfer, debit/credit cards, and COD (where applicable)."
    }
  ];

  // ------------------ WATCH BRAND FEATURES ------------------
  const features = [
    {
      icon: <Shield className="w-8 h-8 text-blue-600" />,
      title: "Durability You Can Trust",
      description:
        "Scratch-resistant glass, stainless steel frames, and premium materials built for long-term use."
    },
    {
      icon: <Award className="w-8 h-8 text-green-600" />,
      title: "Authentic Quality",
      description:
        "All watches are sourced directly from verified suppliers with full authenticity checks."
    },
    {
      icon: <Truck className="w-8 h-8 text-purple-600" />,
      title: "Fast & Secure Delivery",
      description:
        "Nationwide express delivery with transit safety checks and optional insurance."
    },
    {
      icon: <Heart className="w-8 h-8 text-red-600" />,
      title: "Customer Satisfaction First",
      description:
        "24/7 support, easy returns, and dedicated assistance for every purchase."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">

      {/* ------------------ ABOUT STORY ------------------ */}
      <div className="pt-32 pb-40 container mx-auto px-7">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-8">Our Story</h2>

          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            RealReal Watches was born from a passion for timeless craftsmanship. 
            We believe a watch is more than just a device that tells time — it’s 
            a personal statement, a reflection of style, and a companion in your daily journey.
          </p>

          <p className="text-lg text-gray-600 leading-relaxed">
            Today, we proudly serve customers across Nepal with premium watches 
            that blend durability, elegance, and modern innovation. Whether you’re 
            looking for a luxury showpiece, a rugged sports watch, or a smart companion, 
            we bring hand-selected collections suited for every lifestyle.
          </p>
        </div>
      </div>

      {/* ------------------ FEATURES ------------------ */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            Why Choose RealReal Watches?
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-xl bg-gradient-to-br from-white to-gray-50 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="flex justify-center mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ------------------ CUSTOMER GUIDE ------------------ */}
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
                    <h4 className="font-semibold text-gray-800 mb-2">Choosing the Right Watch:</h4>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Identify your style: sporty, casual, luxury, or digital</li>
                      <li>Check strap materials based on your comfort and usage</li>
                      <li>Review water resistance and battery life</li>
                      <li>Read product details for movement type: Quartz, Automatic, Smart</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Ordering Process:</h4>
                    <ol className="list-decimal list-inside space-y-1">
                      <li>Browse collections and add your favorite watch to cart</li>
                      <li>Review your order before checkout</li>
                      <li>Select shipping and payment method</li>
                      <li>Confirm your order and track it from your account</li>
                      <li>Receive your watch with secure packaging</li>
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
                      <li><strong>Kathmandu Valley:</strong> 1–2 days (Free shipping over Rs. 4000)</li>
                      <li><strong>Outside Valley:</strong> 3–5 days (Rs. 100 shipping fee)</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">International Shipping:</h4>
                    <ul className="space-y-2">
                      <li><strong>India:</strong> 7–10 business days</li>
                      <li><strong>Worldwide:</strong> 10–14 business days</li>
                      <li><strong>Shipping Cost:</strong> Calculated at checkout</li>
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
                <p><strong>What We Collect:</strong> Basic personal info like name, address, and contact details for order processing.</p>
                <p><strong>How We Use It:</strong> To process orders, assist customers, and send updates only when needed.</p>
                <p><strong>Security:</strong> All data is stored securely with industry-standard encryption.</p>
                <p><strong>Third-Party Policy:</strong> We only share data with delivery and payment partners — never sold to others.</p>
                <p><strong>Your Rights:</strong> You can request data deletion, changes, or opt out anytime.</p>
              </div>
            )}
          </div>

        </div>
      </div>

      {/* ------------------ FAQ SECTION ------------------ */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            Frequently Asked Questions
          </h2>

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

    </div>
  );
};

export default AboutUs;

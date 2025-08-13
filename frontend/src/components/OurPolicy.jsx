import React from 'react';
import { assets } from '../assets/assets';

const OurPolicy = () => {
  return (
    <div className="py-20 text-center">
      <h2 className="text-3xl font-bold mb-5">Why Choose Real Protech?</h2>

      <div className="flex flex-col sm:flex-row justify-around gap-12 sm:gap-2">
        {/* Policy Cards */}
        <div className="bg-gray-100 p-5 rounded-lg shadow-md w-full sm:w-[30%]">
          <img src={assets.exchange_icon} className="w-20 m-auto mb-5" alt="" />
          <h3 className="font-semibold text-lg">Easy Exchange Policy</h3>
          <p className="text-gray-400">At Real Protech, we offer a hassle-free exchange policy. If you're not happy with your iPhone case, you can exchange it easily within a few days.</p>
        </div>

        <div className="bg-gray-100 p-5 rounded-lg shadow-md w-full sm:w-[30%]">
          <img src={assets.quality_icon} className="w-20 m-auto mb-5" alt="" />
          <h3 className="font-semibold text-lg">7 Days Return Policy</h3>
          <p className="text-gray-400">We provide a 7-day free return policy. If you're not satisfied with your purchase, you can return it within 7 days for a full refund.</p>
        </div>

        <div className="bg-gray-100 p-5 rounded-lg shadow-md w-full sm:w-[30%]">
          <img src={assets.support_img} className="w-20 m-auto mb-5" alt="" />
          <h3 className="font-semibold text-lg">Best Customer Support</h3>
          <p className="text-gray-400">At Real Protech, we pride ourselves on providing 24/7 customer support. Our dedicated team is always here to help you with any questions or concerns.</p>
        </div>
      </div>

      {/* Brand Highlight */}
      <div className="text-center mt-10">
        <h3 className="text-lg font-bold">About Real Protech</h3>
        <p className="text-gray-400">Real Protech is your one-stop shop for the best iPhone cases. We offer a wide range of stylish and protective cases designed to fit your lifestyle.</p>
      </div>
    </div>
  );
};

export default OurPolicy;

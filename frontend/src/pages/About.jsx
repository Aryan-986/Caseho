import Title from '../components/Title';
import { assets } from '../assets/assets';
import NewsletterBox from '../components/NewsletterBox';

const About = () => {
  return (
    <div className="bg-gray-100">
      {/* About Us Section */}
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1="ABOUT" text2="US" />
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-16 px-6 md:px-16">
        <img className="w-full md:max-w-[450px] rounded-lg shadow-md" src={assets.aboutimg} alt="About CaseHo" />
        <div className="flex flex-col justify-center gap-6 md:w-3/5 text-gray-700">
          <p className="text-lg leading-relaxed">
            <span className="text-gray-900 font-semibold">CaseHo</span> was founded with a passion for combining style, protection, and innovation in iPhone accessories. We believe your phone case should be more than just protection—it should be an extension of your personality.
          </p>
          <p className="text-lg leading-relaxed">
            From sleek minimalistic designs to bold statement pieces, our collection is crafted with high-quality materials, ensuring durability without compromising aesthetics. We meticulously select every design to meet the highest standards of protection and elegance.
          </p>
          <b className="text-xl text-gray-900">Our Mission</b>
          <p className="text-lg leading-relaxed">
            Our mission at CaseHo is to offer premium iPhone cases that reflect style, durability, and innovation. We are committed to delivering products that not only protect but also enhance your device, giving you confidence in every grip.
          </p>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="text-xl py-4 text-center">
        <Title text1="WHY" text2="CHOOSE US" />
      </div>

      <div className="flex flex-col md:flex-row text-sm mb-20 px-6 md:px-16">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 bg-white shadow-md rounded-lg">
          <b className="text-gray-900">Premium Quality Materials:</b>
          <p className="text-gray-600">
            Our cases are made with top-tier materials like shock-absorbing TPU, reinforced polycarbonate, and scratch-resistant coatings to ensure your iPhone is fully protected.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 bg-white shadow-md rounded-lg">
          <b className="text-gray-900">Innovative & Trendy Designs:</b>
          <p className="text-gray-600">
            Stay ahead of the trends with our ever-evolving designs that cater to both minimalists and bold trendsetters.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 bg-white shadow-md rounded-lg">
          <b className="text-gray-900">Customer Satisfaction Guarantee:</b>
          <p className="text-gray-600">
            Our priority is your happiness! We offer hassle-free returns and top-tier customer support to ensure a seamless shopping experience.
          </p>
        </div>
      </div>

      {/* Newsletter Section */}
      <NewsletterBox />
    </div>
  );
};

export default About;

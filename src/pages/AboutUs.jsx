
import React from 'react';


export const AboutUs = () => {
  return (
    <div className="bg-green-50 min-h-screen w-screen">
      {/* Hero Section */}
      <header className="bg-green-600 text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-extrabold">
            Pure Prakruti: Sustainable Logistics for a Better Tomorrow
          </h1>
          <p className="mt-6 text-xl">
            Reducing carbon emissions in road logistics and ensuring compliance with global environmental standards.
          </p>
          <button className="mt-8 bg-green-800 py-3 px-8 rounded-lg text-white hover:bg-green-700 transition-all">
            Explore Our Solutions
          </button>
        </div>
      </header>

      {/* About Us Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-green-700">About Pure Prakruti</h2>
          <p className="mt-6 text-lg text-gray-700 text-center ml-4">
            Pure Prakruti is your partner in building a sustainable future. Focused on the road logistics industry,
            responsible for 27% of global emissions, we offer tools and insights to help businesses reduce their carbon footprint.
            Together, we can make a meaningful impact on climate change.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
            {/* Mission Section */}
            <div className="bg-green-100 p-6 rounded-lg shadow-md transform transition-all hover:scale-105 hover:shadow-xl">
              <h3 className="text-xl font-semibold text-green-700">Mission</h3>
              <p className="mt-2 text-gray-600">
                Our mission is to offer innovative technologies and services that allow logistics companies to track, analyze, and reduce their carbon emissions. We are dedicated to empowering businesses to adopt more sustainable practices and drive the shift toward a zero-carbon future.
              </p>
            </div>

            {/* Vision Section */}
            <div className="bg-green-100 p-6 rounded-lg shadow-md transform transition-all hover:scale-105 hover:shadow-xl">
              <h3 className="text-xl font-semibold text-green-700">Vision</h3>
              <p className="mt-2 text-gray-600">
              With the EU's Carbon Border Adjustment Mechanism (CBAM) approaching, we're focused on cutting down road logistics emissions, which account for approx. 27% of the carbon footprint. Through Pure Prakruti, we aim to educate, create awareness, and promote greener solutions to protect both our industry and the planet.
              </p>
            </div>

            {/* Values Section */}
            <div className="bg-green-100 p-6 rounded-lg shadow-md transform transition-all hover:scale-105 hover:shadow-xl">
              <h3 className="text-xl font-semibold text-green-700">Values</h3>
              <p className="mt-2 text-gray-600">
                We believe in integrity, innovation, and collaboration. Our core values drive us to provide transparent and impactful solutions that not only meet our client's needs but also contribute to a sustainable planet.
              </p>
            </div>
          </div>

        </div>
      </section>


            {/* Features Section */}
            <section className="py-16 bg-green-50 ml-4">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-green-700">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
            <div className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-xl font-semibold text-green-700">Emission Tracking</h3>
              <p className="mt-2 text-gray-600">
                Measure and monitor your carbon emissions in real-time, giving you actionable insights to reduce them.
              </p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-xl font-semibold text-green-700">Custom Solutions</h3>
              <p className="mt-2 text-gray-600">
                Tailored recommendations to optimize your logistics operations and reduce your environmental impact.
              </p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-xl font-semibold text-green-700">CBAM Compliance</h3>
              <p className="mt-2 text-gray-600">
                Ensure compliance with the EU Carbon Border Adjustment Mechanism and other global regulations.
              </p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-xl font-semibold text-green-700">Environmental Awareness</h3>
              <p className="mt-2 text-gray-600">
                Educational resources to help your team understand the environmental impact of road logistics.
              </p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-xl font-semibold text-green-700">Interactive Dashboard</h3>
              <p className="mt-2 text-gray-600">
                A user-friendly dashboard to track progress and implement sustainable logistics strategies.
              </p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-xl font-semibold text-green-700">Data-Driven Insights</h3>
              <p className="mt-2 text-gray-600">
                Leverage advanced analytics to identify areas for improvement and measure your impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
<section className="py-16 bg-white ml-4">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-green-700">Frequently Asked Questions</h2>
          <div className="mt-10 space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-green-700">What is Pure Prakruti?</h3>
              <p className="mt-2 text-gray-600">
                Pure Prakruti is a cutting-edge platform designed to assist businesses in the logistics industry with reducing their carbon footprint. By leveraging advanced technologies, we help companies track emissions, improve sustainability practices, and ensure compliance with global environmental standards such as the EU's Carbon Border Adjustment Mechanism (CBAM).
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-green-700">How does emission tracking work?</h3>
              <p className="mt-2 text-gray-600">
                Our platform utilizes a combination of real-time data, machine learning algorithms, and sophisticated analytics to accurately track carbon emissions throughout the logistics supply chain. We provide businesses with actionable insights that can help them make informed decisions to minimize their environmental impact.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-green-700">Can Pure Prakruti help my business comply with environmental regulations?</h3>
              <p className="mt-2 text-gray-600">
                Yes! Pure Prakruti is designed to support businesses in achieving compliance with key environmental regulations. Whether it’s reducing emissions to meet national or international standards or preparing for upcoming regulations like CBAM, our platform equips businesses with the tools to stay ahead of environmental policies and regulations.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-green-700">Is Pure Prakruti suitable for small and medium-sized enterprises (SMEs)?</h3>
              <p className="mt-2 text-gray-600">
                Absolutely! Pure Prakruti offers flexible solutions that can be scaled to fit the needs of businesses of all sizes. Whether you are a small local operation or a large enterprise, our platform provides tools that are both easy to implement and cost-effective, making sustainability accessible to everyone.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-green-700">What support does Pure Prakruti provide to users?</h3>
              <p className="mt-2 text-gray-600">
                We offer comprehensive support to all of our users, including setup assistance, user training, and ongoing customer service. Our team is dedicated to ensuring that your experience with Pure Prakruti is seamless and that you are empowered to make data-driven decisions that positively impact your business and the environment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white ml-4">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-green-700">What Our Users Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
            <div className="bg-green-100 p-6 rounded-lg shadow-md">
              <p className="text-gray-700">
                "Pure Prakruti has completely transformed how we approach sustainability. Thanks to their platform, we've been able to reduce our carbon emissions by over 30% and are now fully aligned with global standards. This has made a huge impact on both our operational efficiency and environmental responsibility."
              </p>
              <p className="mt-4 font-bold text-green-700">- Alex M., Logistics Manager</p>
            </div>
            <div className="bg-green-100 p-6 rounded-lg shadow-md">
              <p className="text-gray-700">
                "As a company committed to sustainability, Pure Prakruti is an indispensable tool for us. Their user-friendly platform has made it so much easier to track emissions and ensure we’re meeting both current and future regulatory requirements. It’s a must-have for any logistics business serious about reducing its carbon footprint."
              </p>
              <p className="mt-4 font-bold text-green-700">- Priya K., Operations Head</p>
            </div>
            <div className="bg-green-100 p-6 rounded-lg shadow-md">
              <p className="text-gray-700">
                "The analytics dashboard provided by Pure Prakruti is incredibly intuitive. It allows us to track and visualize our emissions in real-time, which has been a game-changer for our sustainability initiatives. Thanks to their insights, we’ve been able to set realistic goals and make meaningful improvements."
              </p>
              <p className="mt-4 font-bold text-green-700">- John D., CEO</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="bg-green-50 text-green-700 py-16 ml-4">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold">Take the First Step Towards a Greener Future</h2>
          <p className="mt-4 text-lg">
            Join the growing number of businesses committed to reducing their carbon emissions and embracing sustainability in logistics. Let Pure Prakruti help you track, reduce, and meet global environmental standards. Together, we can create a sustainable future.
          </p>
          <button className="mt-6 bg-white text-green-700 py-3 px-8 rounded-lg hover:bg-gray-200">
            Get Started Now
          </button>
        </div>
      </section>
    </div>
  );
};



// import React from 'react';
// import pure from '../resource/mobile.png';

// export const AboutUs = () => {
//   return (
//     <div className="bg-green-50 min-h-screen w-screen">
//       {/* Hero Section */}
//       <header className="bg-green-600 text-white py-16">
//         <div className="container mx-auto px-6 text-center">
//           <h1 className="text-5xl font-extrabold">
//             Pure Prakruti: Sustainable Logistics for a Better Tomorrow
//           </h1>
//           <p className="mt-6 text-xl">
//             Reducing carbon emissions in road logistics and ensuring compliance with global environmental standards.
//           </p>
//           <button className="mt-8 bg-green-800 py-3 px-8 rounded-lg text-white hover:bg-green-700 transition-all">
//             Explore Our Solutions
//           </button>
//         </div>
//       </header>

//       <section className="py-16 bg-white">
//   <div className="container mx-auto px-6">
//     {/* Title and Introduction */}
//     <h2 className="text-4xl font-bold text-center text-green-700">About Pure Prakruti</h2>
//     <p className="mt-6 text-lg text-gray-700 text-center">
//       Pure Prakruti is on a mission to reshape the logistics industry by making it sustainable and environmentally responsible. 
//       We provide cutting-edge tools and data-driven solutions to empower businesses to reduce their carbon footprint and 
//       meet global sustainability standards.
//     </p>

//     {/* Mission, Vision, and Values */}
//     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
//       {/* Mission */}
//       <div className="bg-green-100 p-6 rounded-lg shadow-md">
//         <h3 className="text-xl font-semibold text-green-700">Our Mission</h3>
//         <p className="mt-4 text-gray-600">
//           To transform the logistics industry by providing businesses with sustainable solutions that reduce emissions and 
//           align with environmental regulations.
//         </p>
//       </div>
//       {/* Vision */}
//       <div className="bg-green-100 p-6 rounded-lg shadow-md">
//         <h3 className="text-xl font-semibold text-green-700">Our Vision</h3>
//         <p className="mt-4 text-gray-600">
//           To lead the way in carbon reduction for logistics, creating a greener, more sustainable world for future generations.
//         </p>
//       </div>
//       {/* Values */}
//       <div className="bg-green-100 p-6 rounded-lg shadow-md">
//         <h3 className="text-xl font-semibold text-green-700">Our Values</h3>
//         <ul className="mt-4 list-disc pl-4 text-gray-600">
//           <li>Sustainability: Making every action environmentally conscious.</li>
//           <li>Innovation: Leveraging technology for impactful change.</li>
//           <li>Integrity: Transparent and honest in all our dealings.</li>
//           <li>Collaboration: Building partnerships to achieve common goals.</li>
//         </ul>
//       </div>
//     </div>

//     {/* Why Choose Us */}
//     <div className="mt-16 text-center">
//       <h3 className="text-3xl font-bold text-green-700">Why Choose Pure Prakruti?</h3>
//       <p className="mt-6 text-lg text-gray-700">
//         Pure Prakruti understands the complexities of the logistics industry. Our solutions are tailored to help businesses 
//         reduce emissions, optimize operations, and achieve compliance with global environmental standards.
//       </p>
//     </div>
//     <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//       <div className="bg-green-50 p-6 rounded-lg shadow-md">
//         <h4 className="text-lg font-semibold text-green-700">Emission Tracking</h4>
//         <p className="mt-2 text-gray-600">
//           Monitor and measure carbon emissions in real-time, enabling actionable insights for reduction.
//         </p>
//       </div>
//       <div className="bg-green-50 p-6 rounded-lg shadow-md">
//         <h4 className="text-lg font-semibold text-green-700">Custom Solutions</h4>
//         <p className="mt-2 text-gray-600">
//           Tailored recommendations to optimize logistics operations and reduce environmental impact.
//         </p>
//       </div>
//       <div className="bg-green-50 p-6 rounded-lg shadow-md">
//         <h4 className="text-lg font-semibold text-green-700">CBAM Compliance</h4>
//         <p className="mt-2 text-gray-600">
//           Ensure compliance with the EU Carbon Border Adjustment Mechanism and other global standards.
//         </p>
//       </div>
//       <div className="bg-green-50 p-6 rounded-lg shadow-md">
//               <h3 className="text-xl font-semibold text-green-700">Environmental Awareness</h3>
//               <p className="mt-2 text-gray-600">
//                 Educational resources to help your team understand the environmental impact of road logistics.
//               </p>
//             </div>
//       <div className="bg-green-50 p-6 rounded-lg shadow-md">
//         <h4 className="text-xl font-semibold text-green-700">Educational Resources</h4>
//         <p className="mt-2 text-gray-600">
//           Equip your team with knowledge about sustainable practices and their impact.
//         </p>
//       </div>
//       <div className="bg-green-50 p-6 rounded-lg shadow-md">
//         <h4 className="text-lg font-semibold text-green-700">Advanced Analytics</h4>
//         <p className="mt-2 text-gray-600">
//           Use data-driven insights to identify inefficiencies and maximize sustainability efforts.
//         </p>
//       </div>
//     </div>

//     {/* Our Goals */}
//     <div className="mt-16">
//       <h3 className="text-3xl font-bold text-center text-green-700">Our Goals</h3>
//       <p className="mt-6 text-lg text-gray-700 text-center">
//         Pure Prakruti is committed to:
//       </p>
//       <ul className="mt-8 space-y-4 list-disc pl-8 text-gray-600">
//         <li>
//           Reducing carbon emissions in the road logistics industry by 30% by 2030.
//         </li>
//         <li>
//           Helping businesses achieve compliance with global environmental regulations seamlessly.
//         </li>
//         <li>
//           Educating businesses about the importance of sustainability and empowering them to make informed decisions.
//         </li>
//         <li>
//           Innovating with cutting-edge tools that make logistics more efficient and eco-friendly.
//         </li>
//       </ul>
//     </div>
    
//   </div>
// </section>



//       {/* FAQ Section */}
//       <section className="py-16 bg-white">
//         <div className="container mx-auto px-6">
//           <h2 className="text-3xl font-bold text-center text-green-700">Frequently Asked Questions</h2>
//           <div className="mt-10 space-y-8">
//             <div>
//               <h3 className="text-xl font-semibold text-green-700">What is Pure Prakruti?</h3>
//               <p className="mt-2 text-gray-600">
//                 Pure Prakruti is a platform that helps businesses in the logistics industry reduce their carbon emissions 
//                 and comply with global environmental standards.
//               </p>
//             </div>
//             <div>
//               <h3 className="text-xl font-semibold text-green-700">How does emission tracking work?</h3>
//               <p className="mt-2 text-gray-600">
//                 Our platform uses advanced algorithms and real-time data to monitor and measure your carbon emissions, 
//                 providing actionable insights to reduce them effectively.
//               </p>
//             </div>
//             <div>
//               <h3 className="text-xl font-semibold text-green-700">Is the platform suitable for small businesses?</h3>
//               <p className="mt-2 text-gray-600">
//                 Absolutely! Pure Prakruti is designed to cater to businesses of all sizes, offering scalable solutions 
//                 tailored to your needs.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>


//       {/* Testimonials Section */}
//       <section className="py-16 bg-white">
//         <div className="container mx-auto px-6">
//           <h2 className="text-3xl font-bold text-center text-green-700">What Our Users Say</h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
//             <div className="bg-green-100 p-6 rounded-lg shadow-md">
//               <p className="text-gray-700">
//                 "Pure Prakruti transformed our logistics operations. We've cut emissions by 30% and are fully CBAM compliant!"
//               </p>
//               <p className="mt-4 font-bold text-green-700">- Alex M., Logistics Manager</p>
//             </div>
//             <div className="bg-green-100 p-6 rounded-lg shadow-md">
//               <p className="text-gray-700">
//                 "An indispensable tool for businesses aiming to prioritize sustainability in logistics."
//               </p>
//               <p className="mt-4 font-bold text-green-700">- Priya K., Operations Head</p>
//             </div>
//             <div className="bg-green-100 p-6 rounded-lg shadow-md">
//               <p className="text-gray-700">
//                 "The dashboard and analytics are incredibly intuitive. Pure Prakruti is a game-changer for logistics sustainability."
//               </p>
//               <p className="mt-4 font-bold text-green-700">- John D., CEO</p>
//             </div>
//           </div>
//         </div>
//       </section>


      

// {/* Call-to-Action Section */}
// <section className="bg-green-50 text-green-700 py-16">
//   <div className="container mx-auto px-6 text-center">
//     <h2 className="text-3xl font-bold">Join Us on the Path to Sustainability</h2>
//     <p className="mt-4 text-lg">
//       Get started with Pure Prakruti and take the first step toward a greener future.
//     </p>
//     <button className="mt-6 bg-white text-green-700 py-3 px-8 rounded-lg hover:bg-gray-200">
//     Contact Us
//     </button>
//   </div>
// </section>




//     </div>
//   );
// };




// import React from "react";
// import crausal1 from "../resource/DevtaGensets2.jpg";
// import crausal2 from "../resource/crausal2.jpg";
// import crausal3 from "../resource/crausal3.jpg";
// import crausal4 from "../resource/crausal4.jpg";
// import crausal5 from "../resource/crausal5.jpg";
// import crausal6 from "../resource/crausal6.jpg";
// import crausal7 from "../resource/crausal7.jpg";
// import crausal8 from "../resource/crausal18.png";
// import crausal16 from "../resource/crausal16.png";
// import { Book } from "../components/Book";
// import { Button2 } from "../components/Button2";
// import { keyBenefits } from "../Data/KeyBenefits";
// import { BenefitCard } from "../components/BenefitCard";
// import { Link } from "react-router-dom";
// import { BusinessBook } from "../components/BusinessBook";
// import { Carousel } from 'react-responsive-carousel';
// import 'react-responsive-carousel/lib/styles/carousel.min.css';
// import { MissionVision } from "../components/MissionVision";
// import devrana from "../resource/devrana.png";
// import devprakash from "../resource/devprakash.jpg";
// import brahamrana from "../resource/brahamrana.png";
// import logoabout4 from "../resource/logoabout4.png";
// import logoabout3 from "../resource/logoabout3.png";
// import logoabout5 from "../resource/logoabout5.png";
// import logoabout6 from "../resource/logoabout6.png";
// import dmrc from "../resource/dmrc images.jpg";
// import coconstructionSite from "../resource/construction_sites.jpeg";
// import factoryImage from "../resource/factory image.jpg";
// import mall from "../resource/mall.jpg";
// import hospital from "../resource/hospital.jpg";
// import braham from "../resource/braham.jpg";
// import banquet from "../resource/banquet.png";
// import { FaCircle } from 'react-icons/fa';

// import pusparaj from "../resource/pusparaj.png";

// export const AboutUs = () => {

//   const images = [
//     crausal1,
//     crausal2,
//     crausal3,
//     crausal4,
//     crausal5,
//     crausal6,
//     crausal7,
//     crausal8,
//   ];

//   return (
//     <div className="w-screen bg-gradient-to-b from-white to-white">

// <div className="relative min-h-screen pt-24 bg-blue-400">
//   {/* Background Image */}
//   <div
//     className="absolute inset-0 bg-cover bg-center z-0"
//     style={{ backgroundImage: `url(${crausal8})` }}
//   ></div>

//   {/* Header Section */}
//   <header className="relative z-10 text-center mb-0 px-4">
//     <h1
//       className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-bold"
//       style={{ textShadow: "2px 2px 4px black, 4px 4px 6px rgba(0, 0, 0, 0.6)" }}
//     >
//       ABOUT US
//     </h1>
//     <h2
//       className="text-sm sm:text-base md:text-lg lg:text-xl text-white font-semibold mt-8 sm:mt-12 md:mt-20 px-4 sm:px-8 md:px-16"
//       style={{ textShadow: "2px 2px 4px black, 4px 4px 6px rgba(0, 0, 0, 0.6)" }}
//     >
//       Devta Gensets Private Limited has been at the forefront of providing world-class power solutions for over three decades. We specialize in the sales, rental, and service of high-performance diesel and gas generators, ranging from 125 kVA to 2500 kVA, catering to a wide range of industries, businesses, and residential needs. Our goal is to ensure uninterrupted energy supply for our clients, allowing them to focus on what matters most—growing their businesses and achieving their goals.
//     </h2>
//   </header>

//   {/* Benefits Section */}
//   <section className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-0 sm:mt-0 px-4 lg:px-24">
//     <div className="bg-white bg-opacity-30 backdrop-blur-md p-4 sm:p-6 rounded-lg shadow-lg border border-transparent transform transition duration-500 hover:scale-105 hover:border-blue-600 hover:shadow-2xl mt-2">
//       <h2 className="text-md sm:text-lg md:text-xl font-bold text-blue-600 mb-2 sm:mb-4">Who Are We</h2>
//       <p className="text-white text-xs sm:text-sm md:text-base">
//         Devta Gensets Private Limited is a leading provider of power solutions with over three decades of experience in the industry. Established in 1991, we have built a strong reputation for excellence, reliability, and customer satisfaction. Our dedicated team of professionals is committed to delivering high-performance generators and tailored services to meet the unique energy requirements of our clients.
//       </p>
//     </div>
//     <div className="bg-white bg-opacity-30 backdrop-blur-md p-4 sm:p-6 rounded-lg shadow-lg border border-transparent transform transition duration-500 hover:scale-105 hover:border-blue-600 hover:shadow-2xl mt-2">
//       <h2 className="text-md sm:text-lg md:text-xl font-bold text-blue-600 mb-2 sm:mb-4">Our Mission</h2>
//       <p className="text-white text-xs sm:text-sm md:text-base">
//         At Devta Gensets Private Limited, our mission is to transform lives and support progress by providing high-quality, efficient generators. We are dedicated to delivering exceptional service and fostering long-term relationships, driven by a commitment to excellence and a passion for enhancing the well-being of society through reliable power solutions.
//       </p>
//     </div>
//     <div className="bg-white bg-opacity-30 backdrop-blur-md p-4 sm:p-6 rounded-lg shadow-lg border border-transparent transform transition duration-500 hover:scale-105 hover:border-blue-600 hover:shadow-2xl mt-2">
//       <h2 className="text-md sm:text-lg md:text-xl font-bold text-blue-600 mb-2 sm:mb-4">What We Do</h2>
//       <p className="text-white text-xs sm:text-sm md:text-base">
//         We specialize in providing comprehensive power solutions tailored to meet diverse energy needs. Our services include the rental and sale of high-quality diesel and gas generators, ranging from 125 kVA to 2500 kVA, ensuring reliable power for industrial, commercial, and residential applications. We pride ourselves on delivering exceptional customer service, timely installations, and maintenance support.
//       </p>
//     </div>
//   </section>
// </div>

// <div className="bg-black py-12 px-6 mt-0">
//   {/* Container */}
//   <div className="max-w-7xl mx-auto text-center">
//     {/* Heading */}
//     <h2 className="text-4xl font-extrabold text-blue-700 mb-4">
//       About Devta Gensets
//     </h2>
//     <p className="text-xl text-white mb-8">
//       Devta Gensets Private Limited is a leading provider of power solutions,
//       committed to delivering high-quality generators for industrial,
//       commercial, and residential use. With a strong focus on innovation and
//       customer satisfaction, we offer a range of rental, purchase, and sales
//       options for reliable power solutions.
//     </p>
//   </div> 
//   <MissionVision />
// </div>



//       <div className="bg-black py-12 px-6">
//       {/* Container */}
//       <div className="max-w-7xl mx-auto text-center">


//         {/* Image and text section */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
//           {/* Image */}
//           <div>
//             <img
//               src={logoabout3}
//               alt="Devta Gensets"
//               className="rounded-lg shadow-lg"
//             />
//           </div>

//           {/* Text */}
//           <div className="text-left">
//             <h3 className="text-3xl font-semibold text-blue-700 mb-4">
//             Why Choose Us?
//             </h3>

//             <ul className="space-y-4 text-white">
//             <li className="flex items-center">
//             <span className="mr-3">
//         <FaCircle className="text-blue-500" />
//       </span>
//       Tailored Solutions:We provide customized IT and digital services, ensuring that every solution fits your business needs.
//             </li>

//             <li className="flex items-center">
//             <span className="mr-3">
//         <FaCircle className="text-blue-500" />
//       </span>
//       Top Brands: We partner with global leaders in power generation technology, ensuring you have access to the most reliable, cutting-edge products available in the market.
//             </li>

//             <li className="flex items-center">
//             <span className="mr-3">
//         <FaCircle className="text-blue-500" />
//       </span>
//       Nationwide Service: No matter where your business is located, we are equipped to provide our services across India, with quick turnaround times and local support.
//             </li>

//             <li className="flex items-center">
//             <span className="mr-3">
//         <FaCircle className="text-blue-500" />
//       </span>
//       Customer-Centric Approach: Our clients are our top priority. We pride ourselves on being responsive, attentive, and committed to delivering the highest level of customer satisfaction.
//             </li>

//             <li className="flex items-center">
//             <span className="mr-3">
//         <FaCircle className="text-blue-500" />
//       </span>
//       Sustainability Focus: As part of our commitment to a sustainable future, we offer energy-efficient generators and power solutions that help reduce environmental impact.
//             </li>


     
//           </ul>

//           </div>
//         </div>
//       </div>
//     </div>


//     <div className="bg-black py-12 px-6">
//       {/* Container */}
//       <div className="max-w-7xl mx-auto">


//         {/* Image and text section */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
//           {/* Text (Left Side) */}
//           <div className="text-left">
//             <h3 className="text-3xl font-semibold text-blue-700 mb-4">
//             Industries We Serve?
//             </h3>


//             <ul className="space-y-4 text-white">
//             <li className="flex items-center">
//             <span className="mr-3">
//         <FaCircle className="text-blue-500" />
//       </span>
//       Manufacturing and Industrial Facilities
//             </li>
//             <li className="flex items-center">
//             <span className="mr-3">
//         <FaCircle className="text-blue-500" />
//       </span>
//       Healthcare and Hospitals
//             </li>

//             <li className="flex items-center">
//             <span className="mr-3">
//         <FaCircle className="text-blue-500" />
//       </span>
//    Telecommunications and Data Centers
//             </li>

//             <li className="flex items-center">
//             <span className="mr-3">
//         <FaCircle className="text-blue-500" />
//       </span>
//   Construction and Infrastructure
//             </li>

//             <li className="flex items-center">
//             <span className="mr-3">
//         <FaCircle className="text-blue-500" />
//       </span>
//  Commercial Real Estate
//             </li>

//             <li className="flex items-center">
//             <span className="mr-3">
//         <FaCircle className="text-blue-500" />
//       </span>
//   Agriculture
//             </li>

//             <li className="flex items-center">
//             <span className="mr-3">
//         <FaCircle className="text-blue-500" />
//       </span>
//  Residential Properties
//             </li>

//             <li className="flex items-center">
//             <span className="mr-3">
//         <FaCircle className="text-blue-500" />
//       </span>
//    Events and Temporary Power Needs
//             </li>
//           </ul>

//           </div>

//           {/* Image (Right Side) */}
//           <div className="text-center">
//             <img
//               src={logoabout6}
//               alt="Devta Gensets"
//               className="rounded-lg shadow-lg"
//             />
//           </div>
//         </div>
//       </div>
//     </div>


//     <div className="bg-black py-12 px-6">
//       {/* Container */}
//       <div className="max-w-7xl mx-auto text-center">



//         {/* Image and text section */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
//           {/* Image */}
//           <div>
//             <img
//               src={logoabout5}
//               alt="Devta Gensets"
//               className="rounded-lg shadow-lg"
//             />
//           </div>

//           {/* Text */}
//           <div className="text-left">
//             <h3 className="text-3xl font-semibold text-blue-700 mb-4">
//             Core Values
//             </h3>

//             <ul className="space-y-4 text-white">
//             <li className="flex items-center">
//             <span className="mr-3">
//         <FaCircle className="text-blue-500" />
//       </span>
//       Customer-Centric Approach: Our customers are our top priority. We listen to their needs, understand their challenges, and offer customized solutions that align with their specific requirements. Our success is measured by the success of our clients.
//             </li>

//             <li className="flex items-center">
//             <span className="mr-3">
//         <FaCircle className="text-blue-500" />
//       </span>
//        Integrity and Trust: We believe in doing business with integrity. Transparency and honesty are the cornerstones of our relationships with clients, partners, and employees.
//             </li>

//             <li className="flex items-center">
//             <span className="mr-3">
//         <FaCircle className="text-blue-500" />
//       </span>
//        Excellence in Execution: We strive for perfection in every project we undertake, from the initial consultation to the final installation and beyond. Our team is dedicated to delivering solutions that consistently meet the highest standards of quality and performance.
//             </li>

//             <li className="flex items-center">
//             <span className="mr-3">
//         <FaCircle className="text-blue-500" />
//       </span>
//       Sustainability: We are committed to protecting the environment. By promoting energy-efficient and sustainable power solutions, we aim to reduce carbon footprints and contribute to a greener planet.
//             </li>

//             <li className="flex items-center">
//             <span className="mr-3">
//         <FaCircle className="text-blue-500" />
//       </span>
//       Continuous Improvement: We are dedicated to learning, evolving, and innovating. Through ongoing research, development, and training, we ensure that our team stays ahead of industry trends and advancements.
//             </li>

//           </ul>
//           </div>
//         </div>
//       </div>
//     </div>

//     <div className="flex flex-col min-h-screen w-full justify-around items-center py-12 px-4 bg-black">
//         {/* Heading */}
//         <div
//           className="font-extrabold text-4xl md:text-5xl text-blue-700 text-center mb-4"
//           style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)" }}
//         >
//           "About Devta Gensets Private Limited"
//         </div>

//         {/* Subheading Text */}
//         <div className="text-lg text-white text-center mb-8 max-w-2xl">
//           Meet our leader, Braham Rana & Dev Prakash Rana, driving innovation at Devta Gensets. Discover the benefits of our services and how they can make a positive impact on your life.
//         </div>

//         {/* Braham Rana Section */}
//         <div className="mt-8 flex flex-col md:flex-row justify-center items-center mb-6 space-y-6 md:space-y-0 md:space-x-4">
//           {/* Image container */}
//           <img
//             src={braham}
//             alt="Mr. Braham Rana"
//             className="w-48 h-48 rounded-full object-cover shadow-lg"
//           />
//           {/* Text container */}
//           <div className="text-center md:text-left max-w-3xl">
//             <h3 className="text-2xl font-bold text-white">Mr. Braham Rana</h3>
//             <p className="text-white text-lg mb-2">Director</p>
//             <p className="text-white text-md leading-relaxed line-clamp-7">
//               Braham Rana is the Director of Devta Gensets Private Limited, registered with the Ministry of Corporate Affairs under DIN 02805943. Based in North Delhi, India, he plays a pivotal role in overseeing the company’s operations and strategic direction. With a strong commitment to innovation and service excellence, Braham Rana has been instrumental in leading Devta Gensets to new heights, focusing on providing top-quality power solutions. Under his leadership, the company, with a paid-up capital of ₹1,840,000.00, continues to thrive in delivering reliable energy systems and maintaining a reputation for industry expertise and customer satisfaction.
//             </p>
//           </div>
//         </div>

//         {/* Dev Rana Section */}
//         <div className="mt-4 flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-4">
//           {/* Image container */}
//           <img
//             src={devprakash}
//             alt="Mr. Dev Rana"
//             className="w-48 h-48 rounded-full object-cover shadow-lg"
//           />
//           {/* Text container */}
//           <div className="text-center md:text-left max-w-3xl">
//             <h3 className="text-2xl font-bold text-white">Mr. Dev Rana</h3>
//             <p className="text-white text-lg mb-2">Director</p>
//             <p className="text-white text-md leading-relaxed line-clamp-7">
//               Dev Rana is the Director of DEVTA GENSETS PRIVATE LIMITED, bringing visionary leadership and extensive expertise in the power solutions industry. Under his guidance, the company has grown to provide reliable, high-quality energy solutions. His dedication to innovation and operational excellence drives DEVTA GENSETS’ commitment to empowering communities and businesses with dependable power systems. Dev Prakash Rana's leadership ensures that the company maintains a strong focus on customer satisfaction, sustainability, and continuous improvement in all aspects of its operations.
//             </p>
//           </div>
//         </div>
//       </div>


//       <div className="flex flex-col min-h-fit w-full justify-items-center items-center py-4 px-4 bg-black">
//         {/* Heading */}
//         <div className="font-extrabold text-4xl md:text-5xl text-blue-700 text-center mb-8"
//           style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)" }}>
//           Our Customers
//         </div>

//         {/* Subheading Text */}
//         <div className="text-lg text-white text-center mb-4 max-w-2xl">
//           We take pride in serving a diverse group of customers who trust our services to enhance their work and life.
//         </div>

       
//         <div className="m-16 mt-4 mb-4 max-w-screen-xl mx-auto">
//   <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
//     <img 
//       src={coconstructionSite} 
//       alt="Customer Image 1" 
//       className="w-full h-40 object-cover rounded-lg transition-transform duration-300 transform hover:scale-105 hover:shadow-lg"
//     />
//     <img 
//       src={factoryImage} 
//       alt="Customer Image 2" 
//       className="w-full h-40 object-cover rounded-lg transition-transform duration-300 transform hover:scale-105 hover:shadow-lg"
//     />
//     <img 
//       src={dmrc} 
//       alt="Customer Image 3" 
//       className="w-full h-40 object-cover rounded-lg transition-transform duration-300 transform hover:scale-105 hover:shadow-lg"
//     />
//     <img 
//       src={mall} 
//       alt="Customer Image 4" 
//       className="w-full h-40 object-cover rounded-lg transition-transform duration-300 transform hover:scale-105 hover:shadow-lg"
//     />
//     <img 
//       src={hospital} 
//       alt="Customer Image 5" 
//       className="w-full h-40 object-cover rounded-lg transition-transform duration-300 transform hover:scale-105 hover:shadow-lg"
//     />
//     <img 
//       src={banquet} 
//       alt="Customer Image 6" 
//       className="w-full h-40 object-cover rounded-lg transition-transform duration-300 transform hover:scale-105 hover:shadow-lg"
//     />
//   </div>
// </div>
//       </div>

// <BusinessBook />

//     </div>
//   );
// };



// import React from "react";
// import crausal1 from "../resource/DevtaGensets1.jpeg";
// import crausal2 from "../resource/crausal2.jpg";
// import crausal3 from "../resource/crausal3.jpg";
// import crausal4 from "../resource/crausal4.jpg";
// import crausal5 from "../resource/crausal5.jpg";
// import crausal6 from "../resource/crausal6.jpg";
// import crausal7 from "../resource/crausal7.jpg";
// import crausal8 from "../resource/crausal8.jpg";

// import pusparaj from "../resource/pusparaj.png";
// import uttam from "../resource/uttam.png";

// import wave from "../resource/wave_final.png";
// import goldenwave from "../resource/golden_wave.png";
// import { Book } from "../components/Book";
// import { Button2 } from "../components/Button2";
// import { keyBenefits } from "../Data/KeyBenefits";
// import { BenefitCard } from "../components/BenefitCard";

// import news from "../resource/news_clipping.jpeg";
// import news1 from "../resource/news1.jpg";
// import news2 from "../resource/news2.jpg";
// import { Link } from "react-router-dom";
// import { BusinessBook } from "../components/BusinessBook";
// import bike5 from '../resource/bike_main.png';
// import { Carousel } from 'react-responsive-carousel';
// import 'react-responsive-carousel/lib/styles/carousel.min.css';
// import { MissionVision } from "../components/MissionVision";

// export const AboutUs = () => {

//   const images = [
//     crausal1,
//     crausal2,
//     crausal3,
//     crausal4,
//     crausal5,
//     crausal6,
//     crausal7,
//     crausal8,
  
//   ];

//   return (
//     <div className="w-screen bg-gradient-to-b from-white to-white">

// <div className="relative min-h-screen pt-24 bg-blue-400">
//   {/* Background Image */}
//   <div
//     className="absolute inset-0 bg-cover bg-center z-0"
//     style={{ backgroundImage: `url(${crausal1})` }}
//   ></div>

//   <header className="relative z-10 text-center mb-6 px-4">
//     <h1 className="text-6xl text-white font-bold"
//     style={{ textShadow: "2px 2px 4px yellow, 4px 4px 6px rgba(0, 0, 0, 0.6)" }}>ABOUT US</h1>
//     <h2 className="text-xl text-white font-semibold">Welcome to The Digital Agency</h2>
//     <p className="text-sm text-white mt-2">
//       Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse et justo. Praesent mattis commodo augue. Aliquam ornare hendrerit augue.
//     </p>
//   </header>

//   <section className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6 mt-24 px-4 lg:px-24">
//     <div className="bg-white p-6 rounded-lg shadow-lg">
//       <h2 className="text-lg font-bold mb-4">Who Are We</h2>
//       <p>
//       Devta Gensets Private Limited is a leading provider of power solutions with over three decades of experience in the industry. Established in 1991, we have built a strong reputation for excellence, reliability, and customer satisfaction. Our dedicated team of professionals is committed to delivering high-performance generators and tailored services to meet the unique energy requirements of our clients. With a focus on quality and innovation, we partner with renowned brands to offer a wide range of diesel and gas generators. At Devta Gensets, we strive to empower businesses and communities with dependable power solutions that fuel progress and success.
//       </p>
//     </div>
//     <div className="bg-white p-6 rounded-lg shadow-lg">
//       <h2 className="text-lg font-bold mb-4">Our Mission</h2>
//       <p>
//       At Devta Gensets Private Limited, our mission is to transform lives and support progress by providing high-quality, efficient generators. We are dedicated to delivering exceptional service and fostering long-term relationships, driven by a commitment to excellence and a passion for enhancing the well-being of society through reliable power solutions.
//       </p>
//     </div>
//     <div className="bg-white p-6 rounded-lg shadow-lg">
//     <h2 className="text-lg font-bold mb-4">What We Do</h2>
//       <p>
//       we specialize in providing comprehensive power solutions tailored to meet diverse energy needs. Our services include the rental and sale of high-quality diesel and gas generators, ranging from 125 kVA to 2500 kVA, ensuring reliable power for industrial, commercial, and residential applications. We pride ourselves on delivering exceptional customer service, timely installations, and maintenance support, ensuring our clients have uninterrupted access to energy. With a commitment to quality and innovation, we empower businesses and communities to thrive with dependable power solutions.
//       </p>
    
      

//     </div>
//   </section>
// </div>


// {/* Key benefits section */}
// <div className="flex flex-col min-h-screen w-full justify-around items-center py-12 px-4">
//   {/* Heading */}
//   <div className="font-extrabold text-4xl md:text-5xl text-blue-400 text-center mb-4"
//     style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)" }}>
//     How can we help you
//   </div>
  
//   {/* Subheading Text */}
//   <div classNa me="text-lg text-gray-600 text-center mb-8 max-w-2xl">
//     Discover the benefits of our services and how they can improve your life. 
//     Here are some key benefits that make us stand out.
//   </div>
  
//   {/* Key Benefits Grid */}
//   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto max-w-[1204px] w-full">
//     {keyBenefits.map((benefits, index) => {
//       return <BenefitCard key={index} passed={benefits} />;
//     })}
//   </div>
// </div>




// <div className="flex w-full h-auto bg-white">
//       {/* Image Container */}
//       <div className="w-1/2">
//         <img src={crausal1} alt="Office" className="w-full h-full object-cover" />
//       </div>
      
//       {/* Content Container */}
//       <div className="w-1/2 p-12">
//         <h1 className="text-4xl font-semibold mb-6">Why Choose Us?</h1>
//         <p className="text-gray-700 mb-6">
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar.
//         </p>
//         <ul className="space-y-4">
//           <li className="flex items-center">
//             <span className="bg-blue-500 h-3 w-3 rounded-full mr-3"></span>
//             Best Quality Designs
//           </li>
//           <li className="flex items-center">
//             <span className="bg-blue-500 h-3 w-3 rounded-full mr-3"></span>
//             24x7 Live Support
//           </li>
//           <li className="flex items-center">
//             <span className="bg-blue-500 h-3 w-3 rounded-full mr-3"></span>
//             Result Oriented Projects
//           </li>
//           <li className="flex items-center">
//             <span className="bg-blue-500 h-3 w-3 rounded-full mr-3"></span>
//             Award Winning Support Team
//           </li>
//           <li className="flex items-center">
//             <span className="bg-blue-500 h-3 w-3 rounded-full mr-3"></span>
//             Best ROI Techniques
//           </li>
//           <li className="flex items-center">
//             <span className="bg-blue-500 h-3 w-3 rounded-full mr-3"></span>
//             Experienced Professionals
//           </li>
//         </ul>
//       </div>
//     </div>



//     <div className="bg-white p-10">
//       {/* Statistics Section */}
//       <div className="mb-12">
//         <h2 className="text-2xl font-semibold mb-4">Some Numbers</h2>
//         <p className="text-gray-600 mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//         <div className="flex justify-between">
//           <div className="text-center">
//             <h3 className="text-3xl font-bold text-blue-500">87</h3>
//             <p className="text-gray-800">Satisfied Clients</p>
//           </div>
//           <div className="text-center">
//             <h3 className="text-3xl font-bold text-blue-500">150</h3>
//             <p className="text-gray-800">Projects Completed</p>
//           </div>
//           <div className="text-center">
//             <h3 className="text-3xl font-bold text-blue-500">28</h3>
//             <p className="text-gray-800">Accolades Earned</p>
//           </div>
//           <div className="text-center">
//             <h3 className="text-3xl font-bold text-blue-500">56K+</h3>
//             <p className="text-gray-800">Lines of Code</p>
//           </div>
//         </div>
//       </div>


//     </div>


//       <BusinessBook />
//     </div>
//   );
// };



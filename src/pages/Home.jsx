import React, { useEffect, useState } from 'react';
import { Chart } from 'react-google-charts';
import axios from 'axios';

export const Home = () => {
  const [carbonFootprintData, setCarbonFootprintData] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:4500/api/vehicle/carbonfootprint/diesel/DIESEL')
      .then((response) => {
        const data = response.data.carbonFootprintData;
        setCarbonFootprintData(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  // Find maximum and minimum values for highlighting
  const maxValue = Math.max(
    ...carbonFootprintData.map((item) => parseFloat(item.carbonFootprint))
  );
  const minValue = Math.min(
    ...carbonFootprintData.map((item) => parseFloat(item.carbonFootprint))
  );

  // Prepare data for Google Charts
  const chartData = [
    ['Date', 'Carbon Footprint', { role: 'style' }],
    ...carbonFootprintData.map((item) => {
      const color =
        parseFloat(item.carbonFootprint) === maxValue
          ? '#dc2626' // Red for maximum
          : parseFloat(item.carbonFootprint) === minValue
            ? '#16a34a' // Green for minimum
            : '#3b82f6'; // Blue for others
      return [item.date, parseFloat(item.carbonFootprint), color];
    }),
  ];

  return (
    <div className="bg-green-50 min-h-screen w-screen">
      {/* Hero Section */}
      <header className="bg-green-600 text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-extrabold leading-tight mb-6">
            Pure Prakruti: Sustainable Logistics for a Better Tomorrow
          </h1>
          <p className="mt-4 text-xl md:text-2xl max-w-3xl mx-auto text-gray-200">
            Join the revolution in road logistics by reducing carbon emissions
            and ensuring compliance with global environmental standards.
          </p>
          <div className="mt-8 flex justify-center gap-6">
            <button className="bg-green-800 py-3 px-10 rounded-lg text-white hover:bg-green-700 transition-all transform hover:scale-105">
              Explore Our Solutions
            </button>
            <button className="border-2 border-white py-3 px-10 rounded-lg text-white hover:bg-green-700 transition-all transform hover:scale-105">
              Learn More
            </button>
          </div>
        </div>
      </header>

      {/* Charts Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-6 text-center">
          {/* Line Chart */}
          <h3 className="text-2xl font-semibold mb-4 text-blue-500">Line Chart</h3>
          <Chart
            chartType="LineChart"
            width="100%"
            height="400px"
            data={chartData}
            options={{
              title: 'Carbon Footprint Over Time (in kg CO2)',
              titleTextStyle: { color: '#1e3a8a', fontSize: 20 },
              hAxis: {
                title: 'Date',
                titleTextStyle: { color: '#4b5563' },
                textStyle: { color: '#9ca3af' },
              },
              vAxis: {
                title: 'Carbon Footprint (kg)',
                titleTextStyle: { color: '#4b5563' },
                textStyle: { color: '#9ca3af' },
              },
              legend: { position: 'top', textStyle: { color: '#10b981' } },
              curveType: 'function',
              chartArea: { width: '80%', height: '70%' },
              series: {
                0: {
                  color: '#3b82f6', // Default line color
                  pointSize: 6, // Highlight all points
                },
              },
              annotations: {
                textStyle: {
                  fontSize: 12,
                  color: '#000',
                  bold: true,
                },
              },
              tooltip: { trigger: 'both' },
            }}
          />

          {/* Vertical Bar Chart */}
          <h3 className="text-2xl font-semibold mt-12 mb-4 text-purple-500">
            Vertical Bar Chart
          </h3>
          <Chart
            chartType="BarChart"
            width="100%"
            height="400px"
            data={chartData}
            options={{
              title: 'Carbon Footprint Over Time (in kg CO2)',
              titleTextStyle: { color: '#6b21a8', fontSize: 20 },
              hAxis: {
                title: 'Carbon Footprint (kg)',
                titleTextStyle: { color: '#4b5563' },
                textStyle: { color: '#9ca3af' },
              },
              vAxis: {
                title: 'Date',
                titleTextStyle: { color: '#4b5563' },
                textStyle: { color: '#9ca3af' },
              },
              chartArea: { width: '80%', height: '70%' },
              bars: 'vertical',
              bar: { groupWidth: '75%' },
              animation: {
                duration: 1000,
                easing: 'out',
              },
              tooltip: { trigger: 'focus' },
            }}
          />

        </div>
      </section>
    </div>
  );
};


// import React from 'react';
// import pure from '../resource/purePrakrutiQR.PNG';
// import Description from '../resource/Description.jpg';
// import Signup from '../resource/Signup.jpg';
// import Login from '../resource/Login.jpg';
// import Result1 from '../resource/Result1.jpg';
// import Result2 from '../resource/Result2.jpg';

// export const Home = () => {
//   return (
//     <div className="bg-green-50 min-h-screen w-screen">

//       {/* Hero Section */}
//       <header className="bg-green-600 text-white py-16">
//         <div className="container mx-auto px-6 text-center">
//           <h1 className="text-5xl font-extrabold leading-tight mb-6">
//             Pure Prakruti: Sustainable Logistics for a Better Tomorrow
//           </h1>
//           <p className="mt-4 text-xl md:text-2xl max-w-3xl mx-auto text-gray-200">
//             Join the revolution in road logistics by reducing carbon emissions and ensuring compliance with global environmental standards.
//           </p>
//           <div className="mt-8 flex justify-center gap-6">
//             <button className="bg-green-800 py-3 px-10 rounded-lg text-white hover:bg-green-700 transition-all transform hover:scale-105">
//               Explore Our Solutions
//             </button>
//             <button className="border-2 border-white py-3 px-10 rounded-lg text-white hover:bg-green-700 transition-all transform hover:scale-105">
//               Learn More
//             </button>
//           </div>
//         </div>
//       </header>


//       {/* About Us Section */}
//       <section className="py-16 bg-white">
//         <div className="container mx-auto px-6">
//           <h2 className="text-3xl font-bold text-center text-green-700">About Pure Prakruti</h2>
//           <p className="mt-6 text-lg text-gray-700 text-center ml-4">
//             Pure Prakruti is your partner in building a sustainable future. Focused on the road logistics industry,
//             responsible for 27% of global emissions, we offer tools and insights to help businesses reduce their carbon footprint.
//             Together, we can make a meaningful impact on climate change.
//           </p>
//           {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
//             <div className="bg-green-100 p-6 rounded-lg shadow-md  transform transition-all hover:scale-105 hover:shadow-xl">
//               <h3 className="text-xl font-semibold text-green-700">Mission</h3>
//               <p className="mt-2 text-gray-600">
//                 Our mission is to offer innovative technologies and services that allow logistics companies to track, analyze, and reduce their carbon emissions. We are dedicated to empowering businesses to adopt more sustainable practices and drive the shift toward a zero-carbon future.
//               </p>
//             </div>
//             <div className="bg-green-100 p-6 rounded-lg shadow-md transform transition-all hover:scale-105 hover:shadow-xl">
//               <h3 className="text-xl font-semibold text-green-700">Vision</h3>
//               <p className="mt-2 text-gray-600">
//                 Our vision is to be a global leader in green logistics, providing innovative solutions that not only reduce emissions but also help businesses thrive in an eco-conscious world.
//               </p>
//             </div>
//             <div className="bg-green-100 p-6 rounded-lg shadow-md transform transition-all hover:scale-105 hover:shadow-xl">
//               <h3 className="text-xl font-semibold text-green-700">Values</h3>
//               <p className="mt-2 text-gray-600">
//                 We believe in integrity, innovation, and collaboration. Our core values drive us to provide transparent and impactful solutions that not only meet our client's needs but also contribute to a sustainable planet.
//               </p>
//             </div>
//           </div> */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
//             {/* Mission Section */}
//             <div className="bg-green-100 p-6 rounded-lg shadow-md transform transition-all hover:scale-105 hover:shadow-xl">
//               <h3 className="text-xl font-semibold text-green-700">Mission</h3>
//               <p className="mt-2 text-gray-600">
//                 Our mission is to offer innovative technologies and services that allow logistics companies to track, analyze, and reduce their carbon emissions. We are dedicated to empowering businesses to adopt more sustainable practices and drive the shift toward a zero-carbon future.
//               </p>
//             </div>

//             {/* Vision Section */}
//             <div className="bg-green-100 p-6 rounded-lg shadow-md transform transition-all hover:scale-105 hover:shadow-xl">
//               <h3 className="text-xl font-semibold text-green-700">Vision</h3>
//               <p className="mt-2 text-gray-600">
//                 Our vision is to be a global leader in green logistics, providing innovative solutions that not only reduce emissions but also help businesses thrive in an eco-conscious world.
//               </p>
//             </div>

//             {/* Values Section */}
//             <div className="bg-green-100 p-6 rounded-lg shadow-md transform transition-all hover:scale-105 hover:shadow-xl">
//               <h3 className="text-xl font-semibold text-green-700">Values</h3>
//               <p className="mt-2 text-gray-600">
//                 We believe in integrity, innovation, and collaboration. Our core values drive us to provide transparent and impactful solutions that not only meet our client's needs but also contribute to a sustainable planet.
//               </p>
//             </div>
//           </div>

//         </div>
//       </section>

//       {/* Features Section */}
//       <section className="py-16 bg-green-50 ml-4">
//         <div className="container mx-auto px-6">
//           <h2 className="text-3xl font-bold text-center text-green-700">Key Features</h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
//             <div className="bg-white shadow-md rounded-lg p-6">
//               <h3 className="text-xl font-semibold text-green-700">Emission Tracking</h3>
//               <p className="mt-2 text-gray-600">
//                 Measure and monitor your carbon emissions in real-time, giving you actionable insights to reduce them.
//               </p>
//             </div>
//             <div className="bg-white shadow-md rounded-lg p-6">
//               <h3 className="text-xl font-semibold text-green-700">Custom Solutions</h3>
//               <p className="mt-2 text-gray-600">
//                 Tailored recommendations to optimize your logistics operations and reduce your environmental impact.
//               </p>
//             </div>
//             <div className="bg-white shadow-md rounded-lg p-6">
//               <h3 className="text-xl font-semibold text-green-700">CBAM Compliance</h3>
//               <p className="mt-2 text-gray-600">
//                 Ensure compliance with the EU Carbon Border Adjustment Mechanism and other global regulations.
//               </p>
//             </div>
//             <div className="bg-white shadow-md rounded-lg p-6">
//               <h3 className="text-xl font-semibold text-green-700">Environmental Awareness</h3>
//               <p className="mt-2 text-gray-600">
//                 Educational resources to help your team understand the environmental impact of road logistics.
//               </p>
//             </div>
//             <div className="bg-white shadow-md rounded-lg p-6">
//               <h3 className="text-xl font-semibold text-green-700">Interactive Dashboard</h3>
//               <p className="mt-2 text-gray-600">
//                 A user-friendly dashboard to track progress and implement sustainable logistics strategies.
//               </p>
//             </div>
//             <div className="bg-white shadow-md rounded-lg p-6">
//               <h3 className="text-xl font-semibold text-green-700">Data-Driven Insights</h3>
//               <p className="mt-2 text-gray-600">
//                 Leverage advanced analytics to identify areas for improvement and measure your impact.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>


//       <section className="bg-gray-50 py-12 px-6 text-center">
//         <h2 className="text-3xl font-bold text-green-700 mb-6">
//           How Pure Prakruti Works for Android
//         </h2>
//         <div className="mt-10">
//           <p className="text-gray-700 font-bold text-lg">Download the App for Easy Tracking!</p>
//           <img
//             src={pure}
//             alt="QR Code"
//             className="w-40 h-40 mx-auto mt-6"
//           />
//           <button className="bg-green-600 text-white px-6 py-3 rounded-lg mt-6 hover:bg-green-700">
//             Scan QR Code
//           </button>
//         </div>

//         <div className="space-y-4 mt-12 p-6 md:p-12 rounded-lg shadow-lg">
//           {[
//             {
//               step: "Step 1: Sign Up",
//               description: [
//                 "Register your account using your username and mobile number.",
//                 "Verify your mobile number by entering the OTP sent to you.",
//                 "Create a secure PIN and confirm it to proceed.",
//                 "Review and accept the terms and conditions to complete the registration process.",
//               ],
//               image: Signup,
//             },
//             {
//               step: "Step 2: Log In",
//               description: [
//                 "To access your account, enter your registered mobile number and PIN.",
//               ],
//               image: Login,
//             },
//             {
//               step: "Step 3: Enter Details",
//               description: [
//                 "Provide your vehicle number, source and destination pincodes, and the weight of the goods.",
//                 "GSTIN, mobilized distance, and demobilized distance are optional fields.",
//               ],
//               image: Description,
//             },
//             {
//               step: "Step 4: Print Certificate",
//               description: [
//                 "View your carbon footprint and print your certificate.",
//               ],
//               image: Result1,
//             },
//           ].map((item, index) => (
//             <div
//               key={index}
//               className={`flex flex-row items-center justify-center space-y-6 p-4 rounded-lg`}
//             >
//               {/* Text Section */}
//               <div className="text-left w-full md:w-1/2">
//                 <p className="font-bold text-xl text-gray-800">{item.step}</p>
//                 <div className="text-gray-600 text-base mt-2 space-y-2 text-left">
//                   {item.description.map((line, idx) => (
//                     <p key={idx}>{line}</p>
//                   ))}
//                 </div>
//               </div>
//               {/* Image Section */}
//               <div className="w-40 h-80 flex justify-center items-center">
//                 <img
//                   src={item.image}
//                   alt={item.step}
//                   className="w-full h-auto max-w-xs object-contain rounded-md shadow-md"
//                 />
//               </div>
//             </div>
//           ))}
//         </div>


//       </section>

//       {/* FAQ Section */}
//       <section className="py-16 bg-white ml-4">
//         <div className="container mx-auto px-6">
//           <h2 className="text-3xl font-bold text-center text-green-700">Frequently Asked Questions</h2>
//           <div className="mt-10 space-y-8">
//             <div>
//               <h3 className="text-xl font-semibold text-green-700">What is Pure Prakruti?</h3>
//               <p className="mt-2 text-gray-600">
//                 Pure Prakruti is a cutting-edge platform designed to assist businesses in the logistics industry with reducing their carbon footprint. By leveraging advanced technologies, we help companies track emissions, improve sustainability practices, and ensure compliance with global environmental standards such as the EU's Carbon Border Adjustment Mechanism (CBAM).
//               </p>
//             </div>
//             <div>
//               <h3 className="text-xl font-semibold text-green-700">How does emission tracking work?</h3>
//               <p className="mt-2 text-gray-600">
//                 Our platform utilizes a combination of real-time data, machine learning algorithms, and sophisticated analytics to accurately track carbon emissions throughout the logistics supply chain. We provide businesses with actionable insights that can help them make informed decisions to minimize their environmental impact.
//               </p>
//             </div>
//             <div>
//               <h3 className="text-xl font-semibold text-green-700">Can Pure Prakruti help my business comply with environmental regulations?</h3>
//               <p className="mt-2 text-gray-600">
//                 Yes! Pure Prakruti is designed to support businesses in achieving compliance with key environmental regulations. Whether it’s reducing emissions to meet national or international standards or preparing for upcoming regulations like CBAM, our platform equips businesses with the tools to stay ahead of environmental policies and regulations.
//               </p>
//             </div>
//             <div>
//               <h3 className="text-xl font-semibold text-green-700">Is Pure Prakruti suitable for small and medium-sized enterprises (SMEs)?</h3>
//               <p className="mt-2 text-gray-600">
//                 Absolutely! Pure Prakruti offers flexible solutions that can be scaled to fit the needs of businesses of all sizes. Whether you are a small local operation or a large enterprise, our platform provides tools that are both easy to implement and cost-effective, making sustainability accessible to everyone.
//               </p>
//             </div>
//             <div>
//               <h3 className="text-xl font-semibold text-green-700">What support does Pure Prakruti provide to users?</h3>
//               <p className="mt-2 text-gray-600">
//                 We offer comprehensive support to all of our users, including setup assistance, user training, and ongoing customer service. Our team is dedicated to ensuring that your experience with Pure Prakruti is seamless and that you are empowered to make data-driven decisions that positively impact your business and the environment.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Testimonials Section */}
//       <section className="py-16 bg-white ml-4">
//         <div className="container mx-auto px-6">
//           <h2 className="text-3xl font-bold text-center text-green-700">What Our Users Say</h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
//             <div className="bg-green-100 p-6 rounded-lg shadow-md">
//               <p className="text-gray-700">
//                 "Pure Prakruti has completely transformed how we approach sustainability. Thanks to their platform, we've been able to reduce our carbon emissions by over 30% and are now fully aligned with global standards. This has made a huge impact on both our operational efficiency and environmental responsibility."
//               </p>
//               <p className="mt-4 font-bold text-green-700">- Alex M., Logistics Manager</p>
//             </div>
//             <div className="bg-green-100 p-6 rounded-lg shadow-md">
//               <p className="text-gray-700">
//                 "As a company committed to sustainability, Pure Prakruti is an indispensable tool for us. Their user-friendly platform has made it so much easier to track emissions and ensure we’re meeting both current and future regulatory requirements. It’s a must-have for any logistics business serious about reducing its carbon footprint."
//               </p>
//               <p className="mt-4 font-bold text-green-700">- Priya K., Operations Head</p>
//             </div>
//             <div className="bg-green-100 p-6 rounded-lg shadow-md">
//               <p className="text-gray-700">
//                 "The analytics dashboard provided by Pure Prakruti is incredibly intuitive. It allows us to track and visualize our emissions in real-time, which has been a game-changer for our sustainability initiatives. Thanks to their insights, we’ve been able to set realistic goals and make meaningful improvements."
//               </p>
//               <p className="mt-4 font-bold text-green-700">- John D., CEO</p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Call-to-Action Section */}
//       <section className="bg-green-50 text-green-700 py-16 ml-4">
//         <div className="container mx-auto px-6 text-center">
//           <h2 className="text-3xl font-bold">Take the First Step Towards a Greener Future</h2>
//           <p className="mt-4 text-lg">
//             Join the growing number of businesses committed to reducing their carbon emissions and embracing sustainability in logistics. Let Pure Prakruti help you track, reduce, and meet global environmental standards. Together, we can create a sustainable future.
//           </p>
//           <button className="mt-6 bg-white text-green-700 py-3 px-8 rounded-lg hover:bg-gray-200">
//             Get Started Now
//           </button>
//         </div>
//       </section>

//     </div>
//   );
// };

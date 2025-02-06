// import React, {useEffect, useState, useContext } from 'react';
// import { AuthContext } from "../AuthContext";
// import { Chart } from 'react-google-charts';

// export const Home1 = () => {
//   const authContext = useContext(AuthContext);
//   const user = authContext?.user;
//   const userId = user?.userId;
//   console.log(userId)

//   const [carbonFootprintData, setCarbonFootprintData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);


//   useEffect(() => {
//     if (!userId) {
//       setError('User ID not found');
//       setLoading(false);
//       return;
//     }

//     const fetchCarbonFootprintData = async () => {
//       try {
//         const response = await fetch(`http://localhost:5000/api/vehicle/carbonfootprint/dieselvehicles/${userId}`);
//         if (!response.ok) throw new Error("Failed to fetch data");

//         const data = await response.json();
//         if (data?.carbonFootprintData) {
//           setCarbonFootprintData(data.carbonFootprintData);
//         } else {
//           setError('Invalid data structure');
//         }
//       } catch (err) {
//         setError(err.message || 'Failed to fetch data');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchCarbonFootprintData();
//   }, [userId]);  // Ensure API is called when userId changes

//   const chartData = [
//     ['Date', 'Carbon Footprint (kg CO2)'],
//     ...carbonFootprintData
//       .filter(item => item.carbonFootprint) 
//       .map(item => [item.date, parseFloat(item.carbonFootprint)]),
//   ];

//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>{error}</div>;

//   return (
//     <div className="bg-green-50 min-h-screen w-screen">
//     <header className="bg-green-600 text-white py-16">
//       <div className="container mx-auto px-6 text-center">
//         <h1 className="text-5xl font-extrabold leading-tight mb-6">
//           Pure Prakruti: Sustainable Logistics for a Better Tomorrow
//         </h1>
//         <p className="mt-4 text-xl md:text-2xl max-w-3xl mx-auto text-gray-200">
//           Join the revolution in road logistics by reducing carbon emissions and ensuring compliance with global environmental standards.
//         </p>
//       </div>
//     </header>

//     {chartData.length > 1 && (
//       <section className="py-16 px-6 text-center">
//         <h2 className="text-3xl font-bold mb-6">Carbon Footprint Tracking</h2>
//         <div className="w-full max-w-4xl mx-auto">
//           <Chart
//             chartType="Bar"
//             width="100%"
//             height="400px"
//             data={chartData}
//             options={{
//               chart: {
//                 title: 'Carbon Footprint of Diesel Vehicles',
//                 subtitle: 'In Kilograms of CO2',
//               },
//             }}
//           />
//           <Chart
//             chartType="LineChart"
//             width="100%"
//             height="400px"
//             data={chartData}
//             options={{
//               chart: {
//                 title: 'Carbon Footprint of Diesel Vehicles',
//                 subtitle: 'In Kilograms of CO2',
//               },
//             }}
//           />
//         </div>
//       </section>
//     )}

//     <section className="bg-green-50 text-green-700 py-16 ml-4">
//       <div className="container mx-auto px-6 text-center">
//         <h2 className="text-3xl font-bold">Take the First Step Towards a Greener Future</h2>
//         <p className="mt-4 text-lg">
//           Join the growing number of businesses committed to reducing their carbon emissions and embracing sustainability in logistics. Let Pure Prakruti help you track, reduce, and meet global environmental standards.
//         </p>
//         <button className="mt-6 bg-white text-green-700 py-3 px-8 rounded-lg hover:bg-gray-200">
//           Get Started Now
//         </button>
//       </div>
//     </section>
//   </div>
//   )
// }



import React, { useContext } from 'react';
import { AuthContext } from "../AuthContext";

export const Home1 = () => {
  const authContext = useContext(AuthContext);
  const user = authContext?.user;
  const userId = user?.userId;
  console.log(userId)
  return (
    <div>
      home1
      <p>User ID: {userId}</p>
    </div>
  )
}




// import React, { useEffect, useState, useContext } from 'react';
// import { Chart } from 'react-google-charts';

// import { AuthContext } from "../AuthContext";

// export const Home1 = () => {
//   const authContext = useContext(AuthContext);
//   const user = authContext?.user;
//   const userId = user?.userId;
//   const [carbonFootprintData, setCarbonFootprintData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);



//   // Fetch data from the API using userId from cookies
//   useEffect(() => {

//     if (userId) {
//       const fetchCarbonFootprintData = async () => {
//         try {
//           const response = await fetch(`http://localhost:4500/api/vehicle/carbonfootprint/dieselvehicles/${userId}`);
//           const data = await response.json();

//           // Check if data exists and has the required structure
//           if (data?.carbonFootprintData) {
//             setCarbonFootprintData(data.carbonFootprintData);
//           }
//           // else {
//           //   setError('Invalid data structure');
//           // }
//         } catch (err) {
//           setError('Failed to fetch data');
//         } finally {
//           setLoading(false);
//         }
//       };

//       fetchCarbonFootprintData();
//     } else {
//       setError('User ID not found in cookies');
//       setLoading(false);
//     }
//   }, []);

//   // Prepare data for the Google Charts
//   const chartData = [
//     ['Date', 'Carbon Footprint (kg CO2)'],
//     ...carbonFootprintData
//       .filter(item => item.carbonFootprint) // Filter out null values
//       .map(item => [item.date, parseFloat(item.carbonFootprint)]), // Map to the format required by Google Charts
//   ];

//   if (loading) return;
//   if (error) return <div>{error}</div>;

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

//       {/* Google Chart Section */}
//       {chartData && chartData[1]?.length > 0 && <section className="py-16 px-6 text-center">
//         <h2 className="text-3xl font-bold mb-6">Carbon Footprint Tracking</h2>
//         <div className="w-full max-w-4xl mx-auto">
//           <Chart
//             chartType="Bar"
//             width="100%"
//             height="400px"
//             data={chartData}
//             options={{
//               chart: {
//                 title: 'Carbon Footprint of Diesel Vehicles',
//                 subtitle: 'In Kilograms of CO2',
//               },
//               hAxis: {
//                 title: 'Carbon Footprint (kg CO2)',
//                 minValue: 0,
//               },
//               vAxis: {
//                 title: 'Date',
//               },
//             }}
//           />
//           <Chart
//             chartType="LineChart"
//             width="100%"
//             height="400px"
//             data={chartData}
//             options={{
//               chart: {
//                 title: 'Carbon Footprint of Diesel Vehicles',
//                 subtitle: 'In Kilograms of CO2',
//               },
//               hAxis: {
//                 title: 'Carbon Footprint (kg CO2)',
//                 minValue: 0,
//               },
//               vAxis: {
//                 title: 'Date',
//               },
//             }}
//           />
//         </div>
//       </section>}

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

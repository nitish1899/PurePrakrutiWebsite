import { useState } from "react";
import React from 'react';
import crausal1 from "../resource/DevtaGensets2.jpg";
import crausal16 from "../resource/crausal18.png";
import { BusinessBook } from "../components/BusinessBook";
import { ContactCompany } from "../components/ContactCompany";
import { MdEmail } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
import { FaLocationDot } from "react-icons/fa6";
export const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    query: ""
  });

  const { firstName, lastName, email, address, query } = formData;

  const handleOnChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://devtagenset-backend.onrender.com/api/query", {
        firstName,
        lastName,
        email,
        address,
        query,
      });

      if (response.status === 200) {
        console.log("Query submitted successfully!");
        tostershow();
      } else {
        console.error("Failed to submit query.");
      }
    } catch (error) {
      console.error("Error submitting query:", error);
    }

    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      address: "",
      query: ""
    });
  };

  const tostershow = () => {
    toast.success('Query Raised successfully!', {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <div className="overflow-hidden relative w-screen">
      <ToastContainer />



      {/* Contact Form Section */}
      <div className="bg-white">
       
        <div className="flex flex-col md:flex-row md:space-x-10 items-start justify-between p-6">
          {/* Form Section */}
          <div className="w-full md:w-1/2 bg-black bg-opacity-10 p-8 rounded-md shadow-md">
            <h2 className="text-2xl font-bold mb-6">Request Free Consultation</h2>
            <form onSubmit={handleOnSubmit} className="flex flex-col gap-y-4 font-inter">
              <div className="flex flex-col sm:flex-row gap-6">
                <div className="flex flex-col w-full">
                  <label className="mb-4">
                    <p className="text-[0.875rem] font-semibold text-white">First Name <sup className="text-pink-200">*</sup></p>
                    <div className="flex items-center bg-white p-2 rounded-md">
                      <FaUser className="text-black mr-2" />
                      <input
                        type="text"
                        name="firstName"
                        value={firstName}
                        onChange={handleOnChange}
                        placeholder="Enter first name"
                        className="w-full p-1 outline-none"
                      />
                    </div>
                  </label>

                  <label className="mb-4">
                    <p className="text-[0.875rem] font-semibold text-white">Last Name <sup className="text-pink-200">*</sup></p>
                    <div className="flex items-center bg-white p-2 rounded-md">
                      <FaUser className="text-black mr-2" />
                      <input
                        type="text"
                        name="lastName"
                        value={lastName}
                        onChange={handleOnChange}
                        placeholder="Enter last name"
                        className="w-full p-1 outline-none"
                      />
                    </div>
                  </label>

                  <label className="mb-4">
                    <p className="text-[0.875rem] font-semibold text-white">Email Address <sup className="text-pink-200">*</sup></p>
                    <div className="flex items-center bg-white p-2 rounded-md">
                      <MdEmail className="text-black mr-2" />
                      <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={handleOnChange}
                        placeholder="Enter email address"
                        className="w-full p-1 outline-none"
                      />
                    </div>
                  </label>

                  <label className="mb-4">
                    <p className="text-[0.875rem] font-semibold text-white">Address <sup className="text-pink-200">*</sup></p>
                    <div className="flex items-center bg-white p-2 rounded-md">
                      <FaLocationDot className="text-black mr-2" />
                      <input
                        type="text"
                        name="address"
                        value={address}
                        onChange={handleOnChange}
                        placeholder="Enter address"
                        className="w-full p-1 outline-none"
                      />
                    </div>
                  </label>
                </div>

                <div className="w-full">
                  <label>
                    <p className="text-[0.875rem] font-semibold text-white">Query <sup className="text-pink-200">*</sup></p>
                    <textarea
                      name="query"
                      value={query}
                      onChange={handleOnChange}
                      placeholder="Enter your query"
                      className="w-full h-40 p-2 rounded-md outline-none"
                    />
                  </label>
                </div>
              </div>

              <div className="flex justify-center mt-4">
                <button
                  type="submit"
                  onClick={handleOnSubmit}
                  className="py-3 px-5 bg-[#57E226] text-white font-semibold rounded-md"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
          <div className="w-full md:w-1/2 mt-10 md:mt-0 bg-black bg-opacity-10">
          <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28911.023034541106!2d77.22371!3d28.6333333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd7fc38a8187%3A0x7abb73aa8c418882!2sParivahan%20Vings%20(KAL)%20Private%20Limited!5e0!3m2!1sen!2sin!4v1690137192828!5m2!1sen!2sin"
  width="100%"
  height="540"
  allowFullScreen
  loading="lazy"
  title="Transport Wings (Cal) Pvt. Ltd. Set"
></iframe>

</div>
        </div>
      </div>

      {/* Other Sections */}
      <ContactCompany />

      {/* Call-to-Action Section */}
<section className="bg-green-50 text-green-700 py-16">
  <div className="container mx-auto px-6 text-center">
    <h2 className="text-3xl font-bold">Join Us on the Path to Sustainability</h2>
    <p className="mt-4 text-lg">
      Get started with Pure Prakruti and take the first step toward a greener future.
    </p>
    <button className="mt-6 bg-white text-green-700 py-3 px-8 rounded-lg hover:bg-gray-200">
      Sign Up Now
    </button>
  </div>
</section>
    </div>
  );
};


// import { useState } from "react";
// import React from 'react';
// import crausal1 from "../resource/DevtaGensets2.jpg";
// import crausal16 from "../resource/crausal18.png";
// import { BusinessBook } from "../components/BusinessBook";
// import { ContactCompany } from "../components/ContactCompany";
// import { MdEmail } from "react-icons/md";
// import { FaUser } from "react-icons/fa";
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import axios from "axios";
// import { FaLocationDot } from "react-icons/fa6";
// export const ContactUs = () => {
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     address: "",
//     query: ""
//   });

//   const { firstName, lastName, email, address, query } = formData;

//   const handleOnChange = (e) => {
//     setFormData((prevData) => ({
//       ...prevData,
//       [e.target.name]: e.target.value,
//     }));
//   };

//   const handleOnSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post("https://devtagenset-backend.onrender.com/api/query", {
//         firstName,
//         lastName,
//         email,
//         address,
//         query,
//       });

//       if (response.status === 200) {
//         console.log("Query submitted successfully!");
//         tostershow();
//       } else {
//         console.error("Failed to submit query.");
//       }
//     } catch (error) {
//       console.error("Error submitting query:", error);
//     }

//     setFormData({
//       firstName: "",
//       lastName: "",
//       email: "",
//       address: "",
//       query: ""
//     });
//   };

//   const tostershow = () => {
//     toast.success('Query Raised successfully!', {
//       position: "bottom-right",
//       autoClose: 3000,
//       hideProgressBar: false,
//       closeOnClick: true,
//       pauseOnHover: true,
//       draggable: true,
//       progress: undefined,
//     });
//   };

//   return (
//     <div className="overflow-hidden relative w-screen">
//       <ToastContainer />



//       {/* Contact Form Section */}
//       <div className="bg-white">
       
//         <div className="flex flex-col md:flex-row md:space-x-10 items-start justify-between p-6">
//           {/* Form Section */}
//           <div className="w-full md:w-1/2 bg-black bg-opacity-10 p-8 rounded-md shadow-md">
//             <h2 className="text-2xl font-bold mb-6">Request Free Consultation</h2>
//             <form onSubmit={handleOnSubmit} className="flex flex-col gap-y-4 font-inter">
//               <div className="flex flex-col sm:flex-row gap-6">
//                 <div className="flex flex-col w-full">
//                   <label className="mb-4">
//                     <p className="text-[0.875rem] font-semibold text-white">First Name <sup className="text-pink-200">*</sup></p>
//                     <div className="flex items-center bg-white p-2 rounded-md">
//                       <FaUser className="text-black mr-2" />
//                       <input
//                         type="text"
//                         name="firstName"
//                         value={firstName}
//                         onChange={handleOnChange}
//                         placeholder="Enter first name"
//                         className="w-full p-1 outline-none"
//                       />
//                     </div>
//                   </label>

//                   <label className="mb-4">
//                     <p className="text-[0.875rem] font-semibold text-white">Last Name <sup className="text-pink-200">*</sup></p>
//                     <div className="flex items-center bg-white p-2 rounded-md">
//                       <FaUser className="text-black mr-2" />
//                       <input
//                         type="text"
//                         name="lastName"
//                         value={lastName}
//                         onChange={handleOnChange}
//                         placeholder="Enter last name"
//                         className="w-full p-1 outline-none"
//                       />
//                     </div>
//                   </label>

//                   <label className="mb-4">
//                     <p className="text-[0.875rem] font-semibold text-white">Email Address <sup className="text-pink-200">*</sup></p>
//                     <div className="flex items-center bg-white p-2 rounded-md">
//                       <MdEmail className="text-black mr-2" />
//                       <input
//                         type="email"
//                         name="email"
//                         value={email}
//                         onChange={handleOnChange}
//                         placeholder="Enter email address"
//                         className="w-full p-1 outline-none"
//                       />
//                     </div>
//                   </label>

//                   <label className="mb-4">
//                     <p className="text-[0.875rem] font-semibold text-white">Address <sup className="text-pink-200">*</sup></p>
//                     <div className="flex items-center bg-white p-2 rounded-md">
//                       <FaLocationDot className="text-black mr-2" />
//                       <input
//                         type="text"
//                         name="address"
//                         value={address}
//                         onChange={handleOnChange}
//                         placeholder="Enter address"
//                         className="w-full p-1 outline-none"
//                       />
//                     </div>
//                   </label>
//                 </div>

//                 <div className="w-full">
//                   <label>
//                     <p className="text-[0.875rem] font-semibold text-white">Query <sup className="text-pink-200">*</sup></p>
//                     <textarea
//                       name="query"
//                       value={query}
//                       onChange={handleOnChange}
//                       placeholder="Enter your query"
//                       className="w-full h-40 p-2 rounded-md outline-none"
//                     />
//                   </label>
//                 </div>
//               </div>

//               <div className="flex justify-center mt-4">
//                 <button
//                   type="submit"
//                   onClick={handleOnSubmit}
//                   className="py-3 px-5 bg-[#57E226] text-white font-semibold rounded-md"
//                 >
//                   Submit
//                 </button>
//               </div>
//             </form>
//           </div>
//           <div className="w-full md:w-1/2 mt-10 md:mt-0 bg-black bg-opacity-10">
//           <iframe
//   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28911.023034541106!2d77.22371!3d28.6333333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd7fc38a8187%3A0x7abb73aa8c418882!2sParivahan%20Vings%20(KAL)%20Private%20Limited!5e0!3m2!1sen!2sin!4v1690137192828!5m2!1sen!2sin"
//   width="100%"
//   height="540"
//   allowFullScreen
//   loading="lazy"
//   title="Transport Wings (Cal) Pvt. Ltd. Set"
// ></iframe>

// </div>
//         </div>
//       </div>

//       {/* Other Sections */}
//       <ContactCompany />

//       {/* Call-to-Action Section */}
// <section className="bg-green-50 text-green-700 py-16">
//   <div className="container mx-auto px-6 text-center">
//     <h2 className="text-3xl font-bold">Join Us on the Path to Sustainability</h2>
//     <p className="mt-4 text-lg">
//       Get started with Pure Prakruti and take the first step toward a greener future.
//     </p>
//     <button className="mt-6 bg-white text-green-700 py-3 px-8 rounded-lg hover:bg-gray-200">
//       Sign Up Now
//     </button>
//   </div>
// </section>
//     </div>
//   );
// };

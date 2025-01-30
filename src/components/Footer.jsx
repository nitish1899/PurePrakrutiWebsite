import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaGoogle, FaInstagram, FaLinkedin } from 'react-icons/fa';
import pure from '../resource/purePrakruti3.png';
export const Footer = () => {
  return (
    <footer className="bg-green-500 text-black p-10 w-screen">
      <div className="max-w-[1240px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo and Description */}
        <div>
          <Link to="/">
            <img src={pure} className="w-[80px] h-[60px] mb-4" alt="Pure Prakruti Logo" />
          </Link>
          <p className="text-sm">
            Corporate Office: 609, Tower II, Pearls Omaxe, Netaji Subash Place, Pitampura, New Delhi - 110034. Delhi, INDIA.
          </p>
          <div className="flex mt-4 space-x-4 text-black">
            <a href="#" className="hover:text-white">
              <FaFacebook />
            </a>
            <a href="#" className="hover:text-white">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-white">
              <FaGoogle />
            </a>
            <a href="#" className="hover:text-white">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-white">
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* Company Links */}
        <div>
          <h3 className="font-semibold mb-4">Company</h3>
          <ul>
            <li className="mb-2">
              <Link to="/" className="hover:text-white">Home</Link>
            </li>
            <li className="mb-2">
              <Link to="/about" className="hover:text-white">About</Link>
            </li>
            <li className="mb-2">
              <Link to="/services" className="hover:text-white">Services</Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-white">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Business Links */}
        <div>
          <h3 className="font-semibold mb-4">Business</h3>
          <ul>
            <li className="mb-2">
              <Link to="/team" className="hover:text-white">Our Team</Link>
            </li>
            <li className="mb-2">
              <Link to="/facts" className="hover:text-white">Facts</Link>
            </li>
            <li>
              <Link to="/customers" className="hover:text-white">Customers</Link>
            </li>
          </ul>
        </div>

        {/* Contact Information */}
        <div>
          <h3 className="font-semibold mb-4">Get In Touch</h3>
          <p className="text-sm">
            Corporate Office: 609, Tower II, Pearls Omaxe, Netaji Subash Place, Pitampura, New Delhi - 110034. Delhi, INDIA.
          </p>
          <p className="text-sm">Email: <a href="mailto:customercare@twcpl.in" className="hover:underline">customercare@twcpl.in</a></p>
          <p className="text-sm">Email: <a href="mailto:support@pureprakruti.com" className="hover:underline">support@pureprakruti.com</a></p>
        </div>
      </div>

      <div className="border-t border-gray-300 mt-8 pt-4 text-center text-sm">
        <p>&copy; 2024 Pure Prakruti. All rights reserved.</p>
        <p>
          Follow us on{' '}
          <a href="#" className="text-white underline hover:text-gray-200">
            LinkedIn
          </a>{' '}
          |{' '}
          <a href="#" className="text-white underline hover:text-gray-200">
            Twitter
          </a>
        </p>
      </div>
    </footer>
  );
};

// import React from 'react';
// import { Link } from 'react-router-dom';
// import { FaFacebook, FaTwitter, FaGoogle, FaInstagram, FaLinkedin } from 'react-icons/fa';
// import pure from '../resource/purePrakruti3.png';
// export const Footer = () => {
//   return (
//     <footer className="bg-green-500 text-black p-10 w-screen">
//       <div className="max-w-[1240px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
//         {/* Logo and Description */}
//         <div>
//           <Link to="/">
//             <img src={pure} className="w-[80px] h-[60px] mb-4" alt="Pure Prakruti Logo" />
//           </Link>
//           <p className="text-sm">
//             Corporate Office: 609, Tower II, Pearls Omaxe, Netaji Subash Place, Pitampura, New Delhi - 110034. Delhi, INDIA.
//           </p>
//           <div className="flex mt-4 space-x-4 text-black">
//             <a href="#" className="hover:text-white" target="_blank">
//               <FaFacebook />
//             </a>
//             <a href="#" className="hover:text-white" target="_blank">
//               <FaTwitter />
//             </a>
//             <a href="#" className="hover:text-white" target="_blank">
//               <FaGoogle />
//             </a>
//             <a href="https://www.instagram.com/pure_prakruti?igsh=ZzFwNzVqdmc5c2lk" className="hover:text-white" target="_blank">
//               <FaInstagram />
//             </a>
//             <a href="#" className="hover:text-white" target="_blank">
//               <FaLinkedin />
//             </a>
//           </div>
//         </div>

//         {/* Company Links */}
//         <div>
//           <h3 className="font-semibold mb-4">Company</h3>
//           <ul>
//             <li className="mb-2">
//               <Link to="/" className="hover:text-white">Home</Link>
//             </li>
//             <li className="mb-2">
//               <Link to="/about" className="hover:text-white">About</Link>
//             </li>
//             <li className="mb-2">
//               <Link to="/services" className="hover:text-white">Services</Link>
//             </li>
//             <li>
//               <Link to="/contact" className="hover:text-white">Contact</Link>
//             </li>
//           </ul>
//         </div>

//         {/* Business Links */}
//         <div>
//           <h3 className="font-semibold mb-4">Business</h3>
//           <ul>
//             <li className="mb-2">
//               <Link to="/team" className="hover:text-white">Our Team</Link>
//             </li>
//             <li className="mb-2">
//               <Link to="/facts" className="hover:text-white">Facts</Link>
//             </li>
//             <li>
//               <Link to="/customers" className="hover:text-white">Customers</Link>
//             </li>
//           </ul>
//         </div>

//         {/* Contact Information */}
//         <div>
//           <h3 className="font-semibold mb-4">Get In Touch</h3>
//           <p className="text-sm">
//             Corporate Office: 609, Tower II, Pearls Omaxe, Netaji Subash Place, Pitampura, New Delhi - 110034. Delhi, INDIA.
//           </p>
//           <p className="text-sm">Email: <a href="mailto:customercare@twcpl.in" className="hover:underline">team@tsil.net.in</a></p>
//           <p className="text-sm">Email: <a href="mailto:support@pureprakruti.com" className="hover:underline">siddharth@tsil.net.in</a></p>
//         </div>
//       </div>

//       <div className="border-t border-gray-300 mt-8 pt-4 text-center text-sm">
//         <p>&copy; 2024 Pure Prakruti. All rights reserved.</p>
//         <p>
//           Follow us on{' '}
//           <a href="#" className="text-white underline hover:text-gray-200">
//             LinkedIn
//           </a>{' '}
//           |{' '}
//           <a href="#" className="text-white underline hover:text-gray-200">
//             Twitter
//           </a>
//         </p>
//       </div>
//     </footer>
//   );
// };

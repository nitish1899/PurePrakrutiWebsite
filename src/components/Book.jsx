// import React from 'react';
// import { Link } from 'react-router-dom';

// export const Book = () => {
//   return (
//     <div className='flex justify-center'>
//       <Link to={"/ContactUs"}>
//         <div className='
//           text-white font-inter font-semibold rounded-full 
//           bg-blue-400 
//           px-3 py-2 text-sm
//           md:text-base md:px-4 md:py-3
//           lg:text-lg lg:px-5 lg:py-4
//           min-[420px]:text-xs min-[420px]:px-2 min-[420px]:py-2
//         '>
//           Request Quote
//         </div>
//       </Link>
//     </div>
//   );
// }



import React from 'react'
import { Link } from 'react-router-dom'

export const Book = () => {
  return (
    <div className='' >
      <Link to={"/ContactUs"}>
        <div className=' md:text-[60%] sm:text-[60%] py-3 px-5 rounded-full bg-blue-400 font-inter font-semibold min-[420px]:p-2 min-[420px]:text-[70%]  sm:py-3 sm:px-5 text-white '>Request Quote</div>
      </Link>
    </div>
  )
}

import React from 'react';

// Capitalize the container component name
const MissionVisionContainer = ({ title, content }) => {
  return (
    <div
      className="flex flex-col justify-center rounded-lg h-auto p-8 w-[90%] min-w-[300px] bg-white border-4 border-blue-400 shadow-xl items-center gap-y-6"
      style={{ boxShadow: '0 10px 20px rgba(0, 0, 0, 0.9)' }}
    >
      <div
        className="mt-3 tracking-wider font-extrabold text-4xl md:text-5xl"
        style={{
          color: '#FFD700',
          textShadow: '3px 3px 6px rgba(0, 0, 0, 0.8)',
          fontFamily: 'Cinzel, serif', 
          letterSpacing: '2px', 
        }}
      >
        {title}
      </div>
      {content.map((text, index) => (
        <div key={index} className="font-bold max-w-[80%]">
          {text}
        </div>
      ))}
    </div>
  );
};

// Export the MissionVision component
export const MissionVision = () => {
  const visionContent = [
    "Our vision is to empower communities worldwide with dependable, innovative energy solutions, ensuring that every individual and business has access to reliable power. By fostering growth through sustainable technologies, we aim to create a future where energy is abundant, accessible, and fuels the aspirations and dreams of all.",
  ];

  const missionContent = [
    "At Devta Gensets Private Limited, our mission is to transform lives and support progress by providing high-quality, efficient generators. We are dedicated to delivering exceptional service and fostering long-term relationships, driven by a commitment to excellence and a passion for enhancing the well-being of society through reliable power solutions.",
  ];

  return (
    <div className="w-full mx-auto flex flex-col pt-10 pb-16 gap-8 text-center items-center bg-black">
      <MissionVisionContainer title="Vision" content={visionContent} />
      <MissionVisionContainer title="Mission" content={missionContent} />
    </div>
  );
};

// import React from 'react';

// // Capitalize the container component name
// const MissionVisionContainer = ({ title, content }) => {
//   return (
//     <div
//       className="flex flex-col justify-center rounded-lg h-auto p-8 w-[90%] min-w-[300px] bg-white border-4 border-blue-400 shadow-xl items-center gap-y-6"
//       style={{ boxShadow: '0 10px 20px rgba(0, 0, 0, 0.9)' }}
//     >
//       <div
//         className="mt-3 tracking-wider font-extrabold text-4xl md:text-5xl"
//         style={{
//           color: '#FFD700',
//           textShadow: '3px 3px 6px rgba(0, 0, 0, 0.8)',
//           fontFamily: 'Cinzel, serif', 
//           letterSpacing: '2px', 
//         }}
//       >
//         {title}
//       </div>
//       {content.map((text, index) => (
//         <div key={index} className="font-bold max-w-[80%]">
//           {text}
//         </div>
//       ))}
//     </div>
//   );
// };

// // Export the MissionVision component
// export const MissionVision = () => {
//   const visionContent = [
//     "Our vision is to empower communities worldwide with dependable, innovative energy solutions, ensuring that every individual and business has access to reliable power. By fostering growth through sustainable technologies, we aim to create a future where energy is abundant, accessible, and fuels the aspirations and dreams of all.",
//   ];

//   const missionContent = [
//     "At Devta Gensets Private Limited, our mission is to transform lives and support progress by providing high-quality, efficient generators. We are dedicated to delivering exceptional service and fostering long-term relationships, driven by a commitment to excellence and a passion for enhancing the well-being of society through reliable power solutions.",
//   ];

//   return (
//     <div className="w-full mx-auto flex flex-col pt-10 pb-16 gap-8 text-center items-center bg-black">
//       <MissionVisionContainer title="Vision" content={visionContent} />
//       <MissionVisionContainer title="Mission" content={missionContent} />
//     </div>
//   );
// };



// import React from 'react';

// // Capitalize the container component name
// const MissionVisionContainer = ({ title, content }) => {
//   return (
//     <div className="flex flex-col justify-center rounded-lg h-auto p-8 w-[90%] min-w-[300px] bg-white border-4 border-blue-400 shadow-xl items-center gap-y-6 "
//     style={{ boxShadow: '0 10px 20px rgba(0, 0, 0, 0.9)' }}>
//       <div className=" uppercase mt-3 tracking-wider font-extrabold text-4xl md:text-5xl text-blue-700"
//         style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)" }}>
//         {title}
//       </div>
//       {content.map((text, index) => (
//         <div key={index} className="font-bold max-w-[80%]">
//           {text}
//         </div>
//       ))}
//     </div>
//   );
// };

// // Export the MissionVision component
// export const MissionVision = () => {
//   const visionContent = [
//     "Our vision is to empower communities worldwide with dependable, innovative energy solutions, ensuring that every individual and business has access to reliable power. By fostering growth through sustainable technologies, we aim to create a future where energy is abundant, accessible, and fuels the aspirations and dreams of all."
//   ];

//   const missionContent = [
//     " At Devta Gensets Private Limited, our mission is to transform lives and support progress by providing high-quality, efficient generators. We are dedicated to delivering exceptional service and fostering long-term relationships, driven by a commitment to excellence and a passion for enhancing the well-being of society through reliable power solutions.",
   
//   ];

//   return (
//     <div className="w-full mx-auto flex flex-col pt-10 pb-16 gap-8 text-center items-center bg-black ">
//       <MissionVisionContainer title="Vision" content={visionContent} />
//       <MissionVisionContainer title="Mission" content={missionContent} />
//     </div>
//   );
// };

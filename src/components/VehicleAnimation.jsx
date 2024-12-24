import React, { useEffect, useState } from 'react';

const VehicleAnimation = () => {
  const [showTree, setShowTree] = useState(false);

  useEffect(() => {
    // Trigger tree planting animation after the vehicle animation is complete (5 seconds).
    const timer = setTimeout(() => {
      setShowTree(true);
    }, 5000);

    return () => clearTimeout(timer); // Cleanup timer
  }, []);

  return (
    <div className="relative w-full h-screen bg-green-100 overflow-hidden">
      {/* Vehicle Moving from Left to Right */}
      <div className="absolute left-[-100px] top-1/2 transform -translate-y-1/2 animate-moveVehicle">
        <div className="flex items-center space-x-2">
          <div className="w-16 h-8 bg-blue-500 rounded-xl"></div>
          {/* Smoke Animation */}
          <div className="smoke w-6 h-6 bg-gray-400 rounded-full animate-smoke"></div>
        </div>
      </div>

      {/* Tree Planting Animation */}
      {showTree && (
        <div className="absolute left-2/3 top-1/2 transform -translate-y-1/2 animate-plantTree">
          <div className="flex items-center space-x-2">
            {/* People planting tree */}
            <div className="w-10 h-10 bg-brown-700 rounded-full animate-peopleMove"></div>
            <div className="w-12 h-16 bg-green-500 rounded-tl-lg rounded-tr-lg"></div>
          </div>
        </div>
      )}

      {/* TailwindCSS Custom Animation Styles */}
      <style jsx>{`
        @keyframes moveVehicle {
          0% {
            left: -100px;
          }
          100% {
            left: 100%;
          }
        }

        @keyframes smoke {
          0% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
          50% {
            opacity: 0.6;
            transform: translateY(-10px) scale(1.1);
          }
          100% {
            opacity: 0;
            transform: translateY(-20px) scale(1.3);
          }
        }

        @keyframes plantTree {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }

        @keyframes peopleMove {
          0% {
            transform: translateX(-50px);
          }
          100% {
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
};

export default VehicleAnimation;

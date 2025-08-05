import React from "react";
import { useNavigate } from "react-router-dom";

function NotFound() {
  let navigate = useNavigate();

  return (
    <div className="w-[100vw] h-[100vh] bg-gradient-to-l from-[#141414] to-[#0c2025] flex flex-col items-center justify-center text-white gap-8">
      
      {/* 404 Text */}
      <h1 className="text-[60px] md:text-[120px] font-bold tracking-widest drop-shadow-lg">
        404
      </h1>

      {/* Subtitle */}
      <p className="text-[20px] md:text-[30px] text-gray-300 mb-4">
        Oops! Page Not Found
      </p>

      {/* Stylish Button */}
      <button
        className="bg-white text-black px-8 py-3 rounded-full text-lg font-semibold shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300 cursor-pointer"
        onClick={() => navigate("/login")}
      >
        Go to Login
      </button>

    </div>
  );
}

export default NotFound;

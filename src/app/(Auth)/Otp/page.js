'use client'

import Image from 'next/image';
import { useState } from 'react';

export default function OTPPage() {
  const [OTP, setOTP] = useState(Array(6).fill(''));

  const handleChange = (digit, i) => {
    const newOTP = [...OTP];
    newOTP[i] = digit;
    setOTP(newOTP);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle the OTP verification logic
    alert(`OTP Submitted: ${OTP.join('')}`);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-200">
      <div className="flex  w-3/5 shadow-lg">
        {/* Left Side: Image */}
        <div className="w-1/2 bg-blue-950 ">
       
          <div className="h-full flex justify-center items-center">
          <Image
  src="/ootp.png"  // Use a forward slash (/) to start the path
  alt="Hero image description"
  width={300}  // Adjust width as needed
  height={300}  // Adjust height as needed
  // Other props as desired (layout, sizes, etc.)
/>
      
        
          </div>
        </div>
        {/* Right Side: OTP Form */}
        <form onSubmit={handleSubmit} className="w-1/2 p-20 bg-white rounded shadow">
          <h1 className="text-xl font-bold mb-4">Enter The Code</h1>
          <p className="text-sm mb-4">Enter The Code that we send to your email m*****r 546@gmail.com be careful not to share code with any one.</p>
          <div className="flex justify-between mb-4 " >
            {OTP.map((digit, i) => (
              <input
                key={i}
                type="text"
                value={digit}
                onChange={(e) => handleChange(e.target.value, i)}
                className="w-10 h-10 text-center shadow-lg m-1 border border-gray-400 rounded "
              />
            ))}
          </div>
          <button type="submit" className=" w-full py-1.5 ml-5 bg-blue-950 text-white rounded mb-2">
            Verify Email
          </button>
          <button type="button" className="w-full py-2 text-black rounded">
            Cancel
          </button>
          <p className="text-sm text-center mt-4">Don't have an account? <a href="#" className="text-blue-900">Sign up for free</a></p>
        </form>
      </div>
    </div>
  );
}

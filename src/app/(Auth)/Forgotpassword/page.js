// 'use client'
// import { useState } from 'react';

// export default function ForgotPasswordPage() {
//   const [email, setEmail] = useState('');

//   const handleChange = (e) => {
//     setEmail(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Here you can handle the password reset logic
//     alert(`Password reset link sent to: ${email}`);
//   };

//   return (
//     <div className="flex justify-center items-center h-screen bg-gray-200">
//       <div className="flex w-3/5 shadow-lg">
//         {/* Left Side: Image */}
//         <div className="w-1/2 bg-blue-950 ">
//           {/* Replace with your image */}
//           <div className="h-full flex justify-center items-center">
//             <span className="text-white text-2xl">Image Here</span>
//           </div>
//         </div>
//         {/* Right Side: Forgot Password Form */}
//         <form onSubmit={handleSubmit} className="w-1/2 p-20 bg-white rounded shadow">
//           <h1 className="text-xl font-bold mb-4">Forgot Password</h1>
//           <p className="text-sm mb-4">Enter your email address and we'll send you a link to reset your password.</p>
//           <div className="flex justify-between mb-4">
//             <input
//               type="email"
//               value={email}
//               onChange={handleChange}
//               className="w-full py-1.5 px-10  text-center m-1 border border-blue-900 rounded "
//               placeholder=" Enter your email"
//             />
//           </div>
//           <button type="submit" className="w-full py-1.5  bg-blue-950 text-white rounded mb-2">
//             Send Reset Link
//           </button>
//           <button type="button" className="w-full py-2 text-black rounded">
//             Cancel
//           </button>
//           <p className="text-sm text-center mt-4">Remembered your password? <a href="#" className="text-blue-900">Sign in</a></p>
//         </form>
//       </div>
//     </div>
//   );
// }
'use client'
'use client'
import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import Image from 'next/image';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Password reset link sent to: ${email}`);
  };

  return (
    <div className={`flex ${isMobile ? 'flex-col' : 'flex-row'} justify-center items-center h-screen bg-gray-200 rounded`}>
      <div className={`flex ${isMobile ? 'flex-col' : 'flex-row'} w-full md:w-3/5 shadow-lg`}>
        {/* Left Side: Image */}
        <div className={`w-full ${!isMobile && 'w-1/2'} bg-blue-950 rounded-left`}>
          {/* Replace with your image */}
          <div className=" h-full flex flex-col justify-center items-center rounded-lg bg-blue-950 text-white p-9">
        
     <div className='font-bold' >
     <p> Recover  Your Password</p>
     </div>
            <div>
            <Image
  src="/ffpass.png"  // Use a forward slash (/) to start the path
  alt="Hero image description"
  width={500}  // Adjust width as needed
  height={500}  // Adjust height as needed
  // Other props as desired (layout, sizes, etc.)
/>
            </div>
        
          </div>
        </div>
        {/* Right Side: Forgot Password Form */}
        <form onSubmit={handleSubmit} className={`w-full ${!isMobile && 'w-1/2'} p-20 bg-white rounded shadow`}>
          <h1 className="text-xl font-bold mb-4">Forgot Password</h1>
          <p className="text-sm mb-4">Enter your email address and we'll send you a link to reset your password.</p>
          <div className="flex justify-between mb-4">
            <input
              type="email"
              value={email}
              onChange={handleChange}
              className="w-full py-1.5 px-10  text-center m-1 border border-blue-900 rounded "
              placeholder=" Enter your email"
            />
          </div>
          <button type="submit" className="w-full py-1.5  bg-blue-950 text-white rounded mb-2">
            Send Reset Link
          </button>
          <button type="button" className="w-full py-2 text-black rounded">
            Cancel
          </button>
          <p className="text-sm text-center mt-4">Remembered your password? <a href="#" className="text-blue-900">Sign in</a></p>
        </form>
      </div>
    </div>
  );
}

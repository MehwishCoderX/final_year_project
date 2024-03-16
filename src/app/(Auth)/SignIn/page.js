// pages/Login.js
'use client'
// pages/login.js
import Navbar from '@/components/Nav';
import Head from 'next/head';
import Image from 'next/image';

export default function Login() {
  return (
    <>
      <Head>
        <title>Login Page</title>
      </Head>
      <div className='sm:px-12 lg:px-24 xl:px-36 bg-blue-100'>
        <div className="flex flex-col min-h-screen bg-white shadow-md rounded-lg lg:flex-row">
          {/* Left Side: Abstract Background and Quote */}
          <div className="hidden lg:block lg:w-1/2">
            <div className="h-full flex flex-col justify-center items-center rounded-lg bg-blue-950 text-white p-12">
              <div className="max-w-lg">
                <p className="text-lg font-semibold">A WISE QUOTE</p>
                <p className="mt-4 text-2xl font-bold">Get Everything You Want</p>
                <p className="mt-2 text-lg">You can get everything you want if you work hard, trust the process, and stick to the plan.</p>
              <div>


              
            <Image
  src="/Hero1.png"  // Use a forward slash (/) to start the path
  alt="Hero image description"
  width={500}  // Adjust width as needed
  height={500}  // Adjust height as needed
  // Other props as desired (layout, sizes, etc.)
/>
              </div>
              
              </div>
            </div>
          </div>
          {/* Right Side: Login Form */}
          <div className="w-full lg:w-1/2 p-5 rounded-lg max-w-md m-auto bg-grey-900">  
            <div className="max-w-md w-full space-y-8">
              <div>
                <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                  ARCHITECTURAL DESIGN AUTOMATION
                </h2>
                <p className="mt-2 text-center text-sm text-gray-600">
                  Enter your email and password to access your account
                </p>
              </div>
              <form className="mt-8 space-y-6 cursor-pointer">
                <div className="rounded-md p-7 ">
                  <div className='p-4' >
                    <label htmlFor="Username" className="sr-only">Username</label>
                    <input id="username" name="email" type="email" autoComplete="Username" required 
                      className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 
                      placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 
                      focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Username" />
                  </div>
                  <div className='p-4'>
                    <label htmlFor="email-address" className="sr-only">Email address</label>
                    <input id="email-address" name="email" type="email" autoComplete="email" required 
                      className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 
                      placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 
                      focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email" />
                  </div>
                  <div className='p-4'>
                    <label htmlFor="password" className="sr-only">Password</label>
                    <input id="password" name="password" type="password" autoComplete="current-password" required 
                      className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 
                      placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 
                      focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password" />
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input id="remember-me" name="remember-me" type="checkbox" 
                      className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
                    <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                      Remember me
                    </label>
                  </div>
                  <div className="text-sm">
                    <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                      Forgot your password?
                    </a>
                  </div>
                </div>
                <div>
                  <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-950 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    Sign in
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

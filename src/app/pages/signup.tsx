
import React from 'react'
import Link from 'next/link'
import { FiUser } from 'react-icons/fi'
import { MdOutlineMail } from 'react-icons/md'
import { TbLockPassword } from 'react-icons/tb'
import Image from 'next/image'

function Signup() {
  return (
    <>
    <section className='w-full bg-[url("/heropic.png")] bg-cover bg-no-repeat bg-center py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28'>
      <div className='container mx-auto px-4'>
        <div className='flex flex-col items-center'>
          <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight text-white font-bold text-center mb-4 sm:mb-6'>
            Sign up page
          </h1>
          
        </div>
      </div>
    </section>
    <div className="min-h-screen bg-white">
    {/* Hero Section */}
    <section
      className="bg-cover bg-center h-64 flex items-center justify-center"
      style={{ backgroundImage: "url('/signupimg.png')" }}
    >
      <div className="text-center text-white">
        <h2 className="text-4xl font-bold">Sign up page</h2>
        <p>
          <Link href="/" className="text-yellow-500">Home</Link> › Sign up
        </p>
      </div>
    </section>

    {/* Signup Form */}
    <section className="py-16">
      <div className="container mx-auto max-w-md bg-white shadow-lg rounded-md p-8">
        <h3 className="text-2xl font-bold mb-6 text-center">Sign Up</h3>
        <form>
          {/* Name Field */}
          <div className="mb-4">
            <div className="flex items-center space-x-2">
              <FiUser className="text-black  h-6 w-6" />
              <label className="block  font-medium">Name</label>
            </div>
            <input
              type="text"
              className="w-full border rounded px-3 py-2 focus:ring focus:ring-yellow-300"
              placeholder="Enter your name"
            />
          </div>

          {/* Email Field */}
          <div className="mb-4">
            <div className="flex items-center space-x-2">
              <MdOutlineMail className="text-black h-6 w-6" />
              <label className="block  font-medium">Email</label>
            </div>
            <input
              type="email"
              className="w-full border rounded px-3 py-2 focus:ring focus:ring-yellow-300"
              placeholder="Enter your email"
            />
          </div>

          {/* Password Field */}
          <div className="mb-4">
            <div className="flex items-center space-x-2">
              <TbLockPassword className="text-black h-6 w-6 " />
              <label className="block  font-medium">Password</label>
            </div>
            <input
              type="password"
              className="w-full border rounded px-3 py-2 focus:ring focus:ring-yellow-300"
              placeholder="Enter your password"
            />
          </div>

          {/* Remember me checkbox */}
          <div className="flex items-center mb-4">
            <input type="checkbox" className="mr-2" />
            <span>Remember me?</span>
          </div>

          {/* Sign Up Button */}
          <button
            type="submit"
            className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 rounded"
          >
            Sign Up
          </button>

          {/* Forgot Password Link */}
          <p className="text-center mt-4">
            <Link href="/forgot-password" className="text-yellow-500">Forgot password?</Link>
          </p>
        </form>

        {/* Social Login Options */}
        <div className="text-center mt-8">
          <p>or</p>
          <button className="w-full bg-gray-100 border text-black py-2 rounded mt-2 flex items-center justify-center">
            <Image src="/Google.png" alt="Google" width={400} height={400} className="h-6 mr-2" />
            Sign up with Google
          </button>
          <button className="w-full bg-gray-100 border text-black py-2 rounded mt-2 flex items-center justify-center">
            <Image src="/apple.png" alt="Apple" width={400} height={400} className="h-6 mr-2" />
            Sign up with Apple
          </button>
        </div>
      </div>
    </section>
  </div>

</>
  )
}

export default Signup
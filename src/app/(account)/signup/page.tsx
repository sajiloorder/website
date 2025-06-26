"use client";
import { FaGoogle, FaFacebookF } from "react-icons/fa";

export default function SignupPage() {
  return (
    <div className="min-h-screen bg-cover bg-center bg-[url('/images/combo.jpeg')] flex items-center justify-center">
      <div className="bg-primary/80 font-serif backdrop-blur-lg justify-center items-center border border-white/30 p-14 rounded-2xl shadow-2xl w-95 max-w-md">
        <h2 className="text-3xl font-bold text-center text-white mb-4">sajilo order </h2>
        <h2 className="text-2xl font-bold text-center text-white mb-1">Create Your Account </h2>
        <p className="text-center text-white mb-6">Sign up to start ordering your favorite meals!</p>

        <form className=" justify-center items-center space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full px-4 py-2 rounded-xl bg-white/80 hover:bg-white placeholder-gray-600 text-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="w-full px-4 py-2 rounded-xl bg-white/80 hover:bg-white placeholder-gray-600 text-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 rounded-xl bg-white/80 hover:bg-white placeholder-gray-500 text-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="w-35  bg-white/80  hover:bg-white  text-gray-700 py-2 rounded-xl font-light transition"
            >
              Sign Up
            </button>
          </div>
        </form>

        <div className="text-center text-white my-4">or continue with</div>

        <div className="flex gap-4">
          <button className="flex-1 border border-gray-300 bg-white/80 hover:bg-white  rounded-xl flex items-center justify-center gap-2 transition">
            <FaGoogle className="text-red-500" />
            Google
          </button>
          <button className="flex-1 border border-gray-300 bg-white/80 hover:bg-white  py-2 rounded-xl flex items-center justify-center gap-2 transition">
            <FaFacebookF className="text-blue-600" />
            Facebook
          </button>
        </div>

        <p className="mt-6 text-sm text-center text-white">
          Already have an account?{' '}
          <a href="/login" className="text-white font-light hover:text-blue-700">
            Log In
          </a>
        </p>
      </div>
    </div>
  );
}
``
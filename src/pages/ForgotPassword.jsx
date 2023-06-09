import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import OAuth from '../components/OAuth';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  function onChange(e) {
    setEmail(e.target.value);
  }
  return (
    <section>
      <h1 className="text-center text-3xl mt-6 font-bold">Forgot Password</h1>
      <div className="flex justify-center flex-wrap items-center px-6 py-12 max-w-6xl mx-auto lg:gap-20">
        <div className="md:w-[67%] lg:w-[50%] mb-12 md:mb-6">
          <img
            src="https://images.unsplash.com/photo-1529539795054-3c162aab037a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt="Log In"
            className="w-full rounded-2xl"
          />
        </div>
        <div className="w-full md:w-[67%] lg:w-[40%]">
          <form>
            <input
              className="w-full px-4 py-2 mb-6 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-out"
              type="email"
              id="email"
              value={email}
              onChange={onChange}
              placeholder="Enter email address"
            />
            <div className="flex justify-between whitespace-nowrap text-sm sm:text-lg">
              <p className="mb-6">
                Don't have an account?{' '}
                <Link
                  to="/sign-up"
                  className="text-red-600 hover:text-red-700 transition duration-200 ease-in-out ml-1 "
                >
                  Sign Up
                </Link>
              </p>
              <p>
                <Link
                  to="/sign-in"
                  className="text-blue-600 hover:text-blue-800 transition duration-200 ease-in-out "
                >
                  Sign In instead
                </Link>
              </p>
            </div>
            <button
              className="w-full bg-blue-600 text-white px-7 py-3 text-sm font-medium uppercase rounded-2xl shadow-md hover:bg-blue-700 transition duration-150 ease-in-out hover:shadow-lg active:bg-blue-800"
              type="submit"
            >
              Send Reset Password
            </button>
            <div className="flex my-4  items-center before:border-t  before:flex-1 before:border-gray-400 after:border-t  after:flex-1 after:border-gray-400">
              <p className="text-center font-semibold mx-4">OR</p>
            </div>
            <OAuth />
          </form>
        </div>
      </div>
    </section>
  );
}

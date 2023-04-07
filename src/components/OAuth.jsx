import React from 'react';
import { FcGoogle } from 'react-icons/fc';
export default function OAuth() {
  return (
    <button className="flex items-center justify-center gap-2 w-full bg-red-500 text-white px-7 py-3 text-sm font-medium hover:bg-red-600 active:bg-red-700 shadow-md hover:shadow-lg active:shadow-lg transition duration-150 ease-in-out rounded-2xl">
      <FcGoogle className="text-2xl bg-white rounded-full" /> Continue with
      Google
    </button>
  );
}

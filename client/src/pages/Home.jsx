import React from 'react';
import { Link } from 'react-router-dom';

export default function Home({ username }) {
  return (
    <div className="flex flex-col max-w-7xl mx-auto items-center justify-center min-h-screen">
      <h1 className="font-bold text-3xl mb-8">WELCOME</h1>
      <div className="flex flex-wrap gap-4 justify-center">
        <div className="flex flex-col">
          <Link to="/profile" className="w-52 mb-4">
            <div className="bg-blue-500 text-white rounded-2xl p-9 h-30 flex items-center justify-center">
              <p className="text-lg text-center font-semibold">Profile</p>
            </div>
          </Link>
          <Link to="/request-leave" className="w-52">
            <div className="bg-green-500 text-white rounded-2xl p-4 h-24 flex items-center justify-center">
              <p className="text-lg font-semibold">Request Leave</p>
            </div>
          </Link>
        </div>
        <div className="flex flex-col">
          <Link to="/my-attendance" className="w-52 mb-4">
            <div className="bg-orange-500 text-white rounded-2xl p-4 h-24 flex items-center justify-center">
              <p className="text-lg font-semibold">My Attendance</p>
            </div>
          </Link>
          <Link to="/student-attendance" className="w-52">
            <div className="bg-purple-500 text-white rounded-2xl p-4 h-24 flex items-center justify-center">
              <p className="text-lg font-semibold">Student Attendance</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
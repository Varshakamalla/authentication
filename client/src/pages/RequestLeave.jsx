import React, { useState } from 'react';

const RequestLeave = () => {
  const [leaveRequest, setLeaveRequest] = useState({
    startDate: '',
    endDate: '',
    reason: '',
    toEmail: '',
    fromEmail: '',
  });

  const handleInputChange = (e) => {
    setLeaveRequest({ ...leaveRequest, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit leave request logic goes here
    console.log(leaveRequest);
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-semibold mb-4 text-slate-700">
        Request Leave
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="startDate" className="block mb-2 font-semibold text-slate-600">
            Start Date
          </label>
          <input
            type="date"
            id="startDate"
            name="startDate"
            value={leaveRequest.startDate}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="endDate" className="block mb-2 font-semibold text-slate-600">
            End Date
          </label>
          <input
            type="date"
            id="endDate"
            name="endDate"
            value={leaveRequest.endDate}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="toEmail" className="block mb-2 font-semibold text-slate-600">
            To Email
          </label>
          <input
            type="email"
            id="toEmail"
            name="toEmail"
            value={leaveRequest.toEmail}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="fromEmail" className="block mb-2 font-semibold text-slate-600">
            From Email
          </label>
          <input
            type="email"
            id="fromEmail"
            name="fromEmail"
            value={leaveRequest.fromEmail}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="reason" className="block mb-2 font-semibold text-slate-600">
            Reason
          </label>
          <textarea
            id="reason"
            name="reason"
            value={leaveRequest.reason}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>
        <div className="text-right">
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default RequestLeave;
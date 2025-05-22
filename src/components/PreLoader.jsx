import React from 'react';

const PreLoader = () => (
  <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-br from-indigo-100 via-violet-100 to-white">
    <div className="flex space-x-2 mb-4">
      <div className="w-4 h-4 rounded-full bg-indigo-500 animate-bounce" style={{ animationDelay: '0s' }} />
      <div className="w-4 h-4 rounded-full bg-violet-500 animate-bounce" style={{ animationDelay: '0.15s' }} />
      <div className="w-4 h-4 rounded-full bg-indigo-400 animate-bounce" style={{ animationDelay: '0.3s' }} />
    </div>
    <span className="text-lg font-semibold text-indigo-700 tracking-wide">Loading Chat...</span>
  </div>
);

export default PreLoader; 
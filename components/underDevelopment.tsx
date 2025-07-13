import React from 'react';
import { Wrench, Hourglass, MessageCircle } from 'lucide-react';

function UnderDevelopment() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col items-center justify-center p-6">
      <div className="max-w-2xl w-full bg-white rounded-xl shadow-lg p-8 text-center">
        <div className="flex justify-center mb-6">
          <div className="bg-yellow-100 p-4 rounded-full flex items-center">
            <Wrench className="text-yellow-500 w-8 h-8" />
            <Hourglass className="text-blue-500 w-8 h-8 -ml-2" />
          </div>
        </div>
        
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Package Under Development</h1>
        <p className="text-lg text-gray-600 mb-6">
          We're currently working hard to bring you an amazing experience. Please check back soon!
        </p>
        
        <div className="bg-blue-50 rounded-lg p-4 mb-6">
          <p className="text-blue-800 font-medium">STAY TUNED</p>
          <p className="text-sm text-gray-600 mt-1">Exciting updates coming your way!</p>
        </div>
        
        {/* <div className="border-t pt-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-3">Contact Us</h2>
          <p className="text-gray-600 mb-4">Click on the WhatsApp icon for more information</p>
          <a 
            href="https://wa.me/yourphonenumber" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-green-500 hover:bg-green-600 text-white rounded-full p-3 transition-colors duration-200"
          >
            <MessageCircle className="w-6 h-6" />  
          </a>
        </div> */}
      </div>
    </div>
  );
}

export default UnderDevelopment;
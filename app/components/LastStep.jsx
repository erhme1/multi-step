import React from 'react';
 
const StepFour = ({ formData }) => {
  return (
    <div>
      <p className="text-xl font-semibold mb-4 text-[#202124] mt-3">You're All Set 🔥</p>
      <p className="text-[18px] font-normal mb-4 text-[#8E8E8E]">We have received your submission. Thank you!</p>
      <p className="text-xl font-semibold text-gray-700">Welcome, {formData.firstName}!</p>
    </div>
  );
};
 
export default StepFour;
 
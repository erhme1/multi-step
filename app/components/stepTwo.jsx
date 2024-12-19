import React from 'react';
 
const StepTwo = ({ formData, errors, handleChange, handleBack, setStep }) => {
  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validatePhoneNumber = (phone) => /^[0-9]{8}$/.test(phone);
  const validatePassword = (password) => password.length >= 8;
  const passwordsMatch = () => formData.password === formData.confirmPassword;
 
  const isFormValid = () => {
    return (
      validateEmail(formData.email) &&
      validatePhoneNumber(formData.phoneNumber) &&
      validatePassword(formData.password) &&
      passwordsMatch()
    );
  };
 
  const defaultErrorMessages = {
    email: 'Please enter a valid email address.',
    phoneNumber: 'Phone number must be 8 digits.',
    password: 'Password must be at least 8 characters long.',
    confirmPassword: 'Passwords must match.',
  };
 
  return (
    <div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Email <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={`w-full mt-1 px-3 py-2 border ${
            (!validateEmail(formData.email) && formData.email) ||
            errors.email
              ? 'border-red-500'
              : 'border-gray-300'
          } ${formData.email ? 'text-black' : 'text-gray-500'} rounded-md`}
          placeholder="Enter email"
        />
        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        {!validateEmail(formData.email) && formData.email && (
          <p className="text-red-500 text-sm mt-1">{defaultErrorMessages.email}</p>
        )}
      </div>
 
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Phone Number <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          className={`w-full mt-1 px-3 py-2 border ${
            (!validatePhoneNumber(formData.phoneNumber) &&
              formData.phoneNumber) ||
            errors.phoneNumber
              ? 'border-red-500'
              : 'border-gray-300'
          } ${formData.phoneNumber ? 'text-black' : 'text-gray-500'} rounded-md`}
          placeholder="Enter phone number"
        />
        {errors.phoneNumber && <p className="text-red-500 text-sm mt-1">{errors.phoneNumber}</p>}
        {!validatePhoneNumber(formData.phoneNumber) && formData.phoneNumber && (
          <p className="text-red-500 text-sm mt-1">
            {defaultErrorMessages.phoneNumber}
          </p>
        )}
      </div>
 
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Password <span className="text-red-500">*</span>
        </label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          className={`w-full mt-1 px-3 py-2 border ${
            (!validatePassword(formData.password) && formData.password) ||
            errors.password
              ? 'border-red-500'
              : 'border-gray-300'
          } ${formData.password ? 'text-black' : 'text-gray-500'} rounded-md`}
          placeholder="Enter password"
        />
        {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
        {!validatePassword(formData.password) && formData.password && (
          <p className="text-red-500 text-sm mt-1">{defaultErrorMessages.password}</p>
        )}
      </div>
 
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Confirm Password <span className="text-red-500">*</span>
        </label>
        <input
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          className={`w-full mt-1 px-3 py-2 border ${
            (!passwordsMatch() && formData.confirmPassword) ||
            errors.confirmPassword
              ? 'border-red-500'
              : 'border-gray-300'
          } ${formData.confirmPassword ? 'text-black' : 'text-gray-500'} rounded-md`}
          placeholder="Confirm password"
        />
        {errors.confirmPassword && (
          <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>
        )}
        {!passwordsMatch() && formData.confirmPassword && (
          <p className="text-red-500 text-sm mt-1">
            {defaultErrorMessages.confirmPassword}
          </p>
        )}
      </div>
 
      <div className="flex justify-between mt-6">
        <button
          onClick={handleBack}
          className="w-32 h-11 bg-white text-gray-700 py-2 px-4 border-[1px] border-[#CBD5E1] rounded-md before:content-['<'] before:mr-3"
        >
          Back
        </button>
        <button
          onClick={() => setStep(3)}
          disabled={!isFormValid()}
          className={`ml-4 w-[100%] py-3 rounded-md after:content-['>'] after:ml-3 ${
            isFormValid()
              ? 'bg-[#202124] text-[#FFFFFF]'
              : 'bg-[#D6D8DB] text-[#A9ACAF] opacity-50 cursor-not-allowed'
          }`}
        >
          Continue 2/3
        </button>
      </div>
    </div>
  );
};
 
export default StepTwo;
 
 
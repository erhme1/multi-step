import React, { useState } from 'react';
 
const StepOne = ({ formData, errors, handleChange, handleNext }) => {
  const [touched, setTouched] = useState({
    firstName: false,
    lastName: false,
    username: false,
  });
  const [usernameTaken, setUsernameTaken] = useState(false);
 
  const validateName = (name) => /^[a-zA-Z]+$/.test(name);
  const validateUsername = (username) => /^[a-zA-Z0-9_]+$/.test(username);
 
  const checkUsernameAvailability = (username) => {
    const takenUsernames = ['user1', 'admin', 'guest'];
    setUsernameTaken(takenUsernames.includes(username));
  };
 
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const capitalizedValue = value.charAt(0).toUpperCase() + value.slice(1);
    handleChange({ target: { name, value: capitalizedValue } });
 
    if (name === 'username') {
      checkUsernameAvailability(capitalizedValue);
    }
 
    setTouched({ ...touched, [name]: true });
  };
 
  const isFormValid = () => {
    return (
      validateName(formData.firstName) &&
      validateName(formData.lastName) &&
      validateUsername(formData.username) &&
      !usernameTaken
    );
  };
 
  return (
    <div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          First Name <span className="text-black">*</span>
        </label>
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleInputChange}
          onBlur={() => setTouched({ ...touched, firstName: true })}
          className={`w-full mt-1 px-3 py-2 border ${(!validateName(formData.firstName) && touched.firstName) ? "border-red-500" : errors.firstName ? "border-red-500" : "border-gray-300"} ${formData.firstName ? "text-black" : "text-gray-500"} rounded-md`}
          placeholder="Enter first name"
        />
        {!validateName(formData.firstName) && touched.firstName && (
          <p className="text-red-500 text-sm mt-1">First name cannot contain special characters or numbers.</p>
        )}
        {errors.firstName && (
          <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>
        )}
      </div>
 
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Last Name <span className="text-black">*</span>
        </label>
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleInputChange}
          onBlur={() => setTouched({ ...touched, lastName: true })}
          className={`w-full mt-1 px-3 py-2 border ${(!validateName(formData.lastName) && touched.lastName) ? "border-red-500" : errors.lastName ? "border-red-500" : "border-gray-300"} ${formData.lastName ? "text-black" : "text-gray-500"} rounded-md`}
          placeholder="Enter last name"
        />
        {!validateName(formData.lastName) && touched.lastName && (
          <p className="text-red-500 text-sm mt-1">Last name cannot contain special characters or numbers.</p>
        )}
        {errors.lastName && (
          <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
        )}
      </div>
 
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Username <span className="text-black">*</span>
        </label>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleInputChange}
          onBlur={() => setTouched({ ...touched, username: true })}
          className={`w-full mt-1 px-3 py-2 border ${validateUsername(formData.username) ? (usernameTaken ? "border-black" : "border-gray-300") : "border-red-500"} ${formData.username ? "text-black" : "text-gray-500"} rounded-md`}
          placeholder="Enter username"
        />
        {usernameTaken && touched.username && (
          <p className="text-red-500 text-sm mt-1">This username is already taken. Please choose another one.</p>
        )}
        {!validateUsername(formData.username) && touched.username && (
          <p className="text-red-500 text-sm mt-1">Username can only contain letters, numbers, and underscores.</p>
        )}
      </div>
 
      <div className="flex justify-between mt-6">
        <button
          onClick={handleNext}
          disabled={!isFormValid()}
          className={`px-[10px] w-[100%] py-3 rounded-md after:content-['>'] after:ml-3 ${
            isFormValid()
              ? 'bg-[#202124] text-[#FFFFFF]'
              : 'bg-[#D6D8DB] text-[#A9ACAF] opacity-50 cursor-not-allowed'
          }`}
        >
          Continue 1/3
        </button>
      </div>
    </div>
  );
};
 
export default StepOne;
 
 
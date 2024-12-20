import React, { useState } from 'react';
 
const StepThree = ({ formData, handleChange, handleFileChange, handleBack, setStep }) => {
  const [errors, setErrors] = useState({});
  const [imagePreview, setImagePreview] = useState(null);
 
  const handleSubmit = (e) => {
    e.preventDefault();
    if (new Date(formData.dateOfBirth) > new Date()) {
      setErrors({ dateOfBirth: 'Date of birth cannot be in the future.' });
      return;
    }
    setStep(4);
  };
 
  const today = new Date().toISOString().split('T')[0];
 
  const handleDateChange = (e) => {
    handleChange(e);
    if (new Date(e.target.value) > new Date()) {
      setErrors({ dateOfBirth: 'Date of birth cannot be in the future.' });
    } else {
      setErrors({});
    }
  };
 
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImagePreview(reader.result);
        handleFileChange(e);
      };
      reader.readAsDataURL(file);
    }
  };
 
  const isFormValid = () => {
    return formData.dateOfBirth && formData.profileImage;
  };
 
  return (
    <div>
 
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Date of Birth <span className="text-black">*</span>
        </label>
        <input
          type="date"
          name="dateOfBirth"
          value={formData.dateOfBirth || ""}
          onChange={handleDateChange}
          max={today}
          placeholder="--/--/--"
          className={`w-full mt-1 px-3 py-2 border ${errors.dateOfBirth ? "border-red-500" : "border-gray-300"} ${formData.dateOfBirth ? "text-black" : "text-gray-500"} rounded-md`}
        />
        {errors.dateOfBirth && <p className="text-black text-sm mt-1">{errors.dateOfBirth}</p>}
      </div>
 
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Profile Image <span className="text-red-500">*</span>
        </label>
        <div
          className={`w-full h-44 mt-1 border-2 ${
            !formData.profileImage ? "border-blue-400" : "border-gray-300"
          } border-dashed rounded-md flex items-center justify-center relative`}
        >
          {imagePreview ? (
            <img
              src={imagePreview}
              alt="Preview"
              className="absolute inset-0 w-full h-full object-cover rounded-md"
            />
          ) : (
            <div className="flex flex-col items-center text-gray-500">
              <span className="text-3xl"></span>
              <p className="mt-2">Add image</p>
            </div>
          )}
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="absolute inset-0 opacity-0 cursor-pointer"
          />
        </div>
        {!formData.profileImage && (
          <p className="text-red-500 text-sm mt-1">Profile image is required.</p>
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
          onClick={handleSubmit}
          disabled={!isFormValid()}
          className={`ml-3 w-[100%] py-3 rounded-md after:content-['>'] after:ml-3
            ${
              isFormValid()
                ? 'bg-[#202124] text-[#FFFFFF]'
                : 'bg-[#D6D8DB] text-[#A9ACAF] opacity-50 cursor-not-allowed'
            }`}
        >
          Submit 3/3
        </button>
      </div>
    </div>
  );
};
 
export default StepThree;
 
 
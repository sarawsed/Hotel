import React from "react";

const InputField = ({ label, name, type, register, errors }) => {
  return (
    <div className="mb-4">
      <label htmlFor={name} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        {...register(name)}
      />
      {errors[name] && (
        <p className="text-sm text-red-500 mt-1">{errors[name].message}</p>
      )}
    </div>
  );
};

export default InputField;

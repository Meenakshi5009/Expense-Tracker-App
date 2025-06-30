import React, { useState } from 'react';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';

const Input = ({
  value = '',
  onChange = () => {},
  placeholder = '',
  label = '',
  type = 'text',
  clearable = false,
  className = '',
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const isPassword = type === 'password';
  const inputType = isPassword ? (showPassword ? 'text' : 'password') : type;
  const showClear = clearable && value && !isPassword;

  return (
    <div className="mb-4">
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-1">
          {label}
        </label>
      )}

      <div className="relative">
        <input
          type={inputType}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className={`w-full px-4 py-2.5 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-700 placeholder-gray-400 ${className}`}
        />

        {/* Toggle password visibility */}
        {isPassword && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 transform -translate-y-1/2"
          >
            {showPassword ? (
              <FaRegEye className="text-gray-500" size={18} />
            ) : (
              <FaRegEyeSlash className="text-gray-500" size={18} />
            )}
          </button>
        )}

        {/* Clearable button */}
        {showClear && (
          <button
            type="button"
            onClick={() => onChange('')}
            className="absolute right-3 top-1/2 transform -translate-y-1/2"
          >
            <IoClose className="text-gray-500 hover:text-gray-700" size={18} />
          </button>
        )}
      </div>
    </div>
  );
};

export default Input;

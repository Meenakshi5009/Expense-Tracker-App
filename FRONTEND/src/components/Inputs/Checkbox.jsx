// src/components/inputs/Checkbox.jsx
import React from "react";

const Checkbox = ({ label, checked, onChange }) => {
  return (
    <div className="flex items-center">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="w-4 h-4 text-purple-600 rounded focus:ring-purple-500 border-gray-300"
      />
      <label className="ml-2 text-gray-700 text-sm">{label}</label>
    </div>
  );
};

export default Checkbox;
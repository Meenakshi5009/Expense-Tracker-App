import React, { useState } from 'react';
import AuthLayout from '../../components/layouts/AuthLayout';
import Input from '../../components/Inputs/Input';
import Checkbox from '../../components/Inputs/Checkbox';
import GoogleIcon from '../../components/inputs/GoogleIcon';
import {
  UserIcon,
  PencilIcon
} from '@heroicons/react/24/outline';

const SignUp = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  return (
    <AuthLayout image="/assets/images/card.png">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Sign Up.</h1>
          <p className="text-gray-500 mt-1">Please fill your details to access your account</p>
        </div>

        {/* Form Inputs */}
        <div className="space-y-4">
          {/* Full Name with Avatar */}
          <div className="flex items-center gap-3">
            <div className="w-3/4 relative">
              <Input
                label="Full Name"
                type="text"
                placeholder="John Smith"
                value={fullName}
                onChange={(val) => setFullName(val)}
                clearable={true}
              />
            </div>
            <div className="relative w-12 h-12 shrink-0">
  {/* Purple background with blue-outlined user icon */}
  <div className="bg-[#bd99eb] shadow-md overflow-hidden rounded-full w-full h-full flex items-center justify-center">
    <UserIcon className="text-[#500cf1]  translate-y-2 w-12 h-12" />
  </div>

  {/* Gray circle with black pencil */}
  <div className="absolute bottom-0 right-0 bg-gray-200 rounded-full p-1">
    <PencilIcon className="w-3 h-3 text-black" />
  </div>
</div>

          </div>

          {/* Email */}
          <Input
            label="Email Address"
            type="email"
            placeholder="abdddddd@example.com"
            value={email}
            onChange={(val) => setEmail(val)}
            clearable
          />

          {/* Password */}
          <Input
            label="Password"
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(val) => setPassword(val)}
          />
        </div>

        {/* Checkbox & Link */}
        <div className="flex items-center justify-between">
          <Checkbox label="Remember me" />
          <a href="/forgot-password" className="text-sm text-purple-600 font-medium hover:underline">
            Forgot Password?
          </a>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-2.5 px-4 rounded-md transition duration-200"
        >
          Sign In
        </button>

        {/* Divider */}
        

        {/* Google Signup */}
        <button
          type="button"
          className="w-full flex items-center justify-center gap-2 border border-gray-300 py-2.5 px-4 rounded-md hover:bg-gray-50 transition duration-200"
        >
          <GoogleIcon />
          <span className="text-gray-700 font-medium">Sign up with Google</span>
        </button>

        {/* Sign In Link */}
        <p className="text-center text-gray-500 text-sm">
          Already have an account?{' '}
          <a href="/login" className="text-purple-600 font-medium hover:underline">
            Log in
          </a>
        </p>
      </div>
    </AuthLayout>
  );
};

export default SignUp;

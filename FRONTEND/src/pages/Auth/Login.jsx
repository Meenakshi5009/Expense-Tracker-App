import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AuthLayout from '../../components/layouts/AuthLayout';
import Input from '../../components/Inputs/Input';
import GoogleIcon from '../../components/inputs/GoogleIcon';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, password, rememberMe });
    // TODO: Add your login API call here
  };

  return (
    <AuthLayout>
      <div className="w-full max-w-md p-8 space-y-6 bg-gray-200 rounded-lg">
        <div className="text-center font-['Roboto']">
          <h1 className="text-3xl font-bold text-gray-800 tracking-wide">Welcome Back.</h1>
          <p className="text-gray-600 tracking-normal mt-2">
            Please fill your details to log in to your account.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <Input
              type="email"
              placeholder="abdaddad@example.com"
              value={email}
              onChange={setEmail}
            />
          </div>

          {/* Password Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <Input
              type="password"
              placeholder="********"
              value={password}
              onChange={setPassword}
            />
          </div>

          {/* Remember Me + Forgot Password */}
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                Remember me
              </label>
            </div>
            <div className="text-sm">
              <Link to="/forgot-password" className="font-medium text-blue-600 hover:text-blue-500">
                Forgot Password?
              </Link>
            </div>
          </div>

          {/* Sign In Button */}
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
          >
            Sign in
          </button>
        </form>

        {/* Or Continue With */}
        <div className="mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-gray-200 text-gray-500">Or continue with</span>
            </div>
          </div>

          {/* Google Sign In Button */}
          <div className="mt-6">
            <button
              type="button"
              className="w-full flex justify-center items-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
            >
              <GoogleIcon />
              <span className="ml-2">Sign in with Google</span>
            </button>
          </div>
        </div>

        {/* Sign Up Redirect */}
        <div className="text-center text-sm text-gray-600">
          Don't have an account?{' '}
          <Link to="/signup" className="font-medium text-blue-600 hover:text-blue-500">
            Sign up
          </Link>
        </div>
      </div>
    </AuthLayout>
  );
};

export default Login;

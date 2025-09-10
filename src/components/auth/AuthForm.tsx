'use client';

import { useState } from 'react';

type Variant = 'LOGIN' | 'SIGNUP';

export default function AuthForm() {
  const [variant, setVariant] = useState<Variant>('LOGIN');

  const toggleVariant = () => {
    setVariant((prev) => (prev === 'LOGIN' ? 'SIGNUP' : 'LOGIN'));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Logic will be added in the next phase
    console.log('Form submitted');
  };

  return (
    <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div className="bg-white px-4 py-8 shadow sm:rounded-lg sm:px-10">
        <form className="space-y-6" onSubmit={handleSubmit}>
          {variant === 'SIGNUP' && (
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Name
              </label>
              <div className="mt-2">
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  aria-label="Name"
                  className="form-input"
                />
              </div>
            </div>
          )}

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                aria-label="Email address"
                className="form-input"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Password
            </label>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                aria-label="Password"
                className="form-input"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-[#0070f3] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 min-h-[48px] items-center"
            >
              {variant === 'LOGIN' ? 'Sign in' : 'Register'}
            </button>
          </div>
        </form>

        <div className="mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="bg-white px-2 text-gray-500">Or</span>
            </div>
          </div>

          <div className="mt-6 flex justify-center text-sm text-gray-500">
            <p>
              {variant === 'LOGIN'
                ? 'New to this app?'
                : 'Already have an account?'}
              <button
                onClick={toggleVariant}
                className="ml-1 font-semibold text-[#0070f3] hover:text-blue-600"
              >
                {variant === 'LOGIN' ? 'Create an account' : 'Sign in'}
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
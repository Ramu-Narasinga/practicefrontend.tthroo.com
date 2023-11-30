import React, { useState } from 'react';
import TThroo from '../../assets/img/tthroo.svg';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    setError('');

    const userData = {
      email,
      password,
    };

    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        const data = await response.json();
        // Store the JWT token in local storage or cookies for future requests
        localStorage.setItem('token', data.token);
        // Redirect to a dashboard or home page
        window.location.href = '/practice'; // Replace with your desired route
      } else {
        const data = await response.json();
        setError(`Login failed: ${data.error}`)
      }
    } catch (error) {
      console.error(error);
      alert('Login failed. Please try again later.');
    }
  };

  return (
    <div className="fixed top-0 left-0 w-screen h-screen bg-white flex items-center justify-center z-50 overflow-y-scroll">
      <div className="shadow w-96 h-fit-content top-24 left-0 absolute mx-auto left-0 right-0 bg-slate-50 flex flex-col gap-6 p-4">
        <div className="mx-auto ">
          <img className="w-12 h-12" src={TThroo} alt="TThroo Logo" />
        </div>
        <div className="text-black text-xl font-normal ">
          Sign in to Practice Coding
        </div>
        {
          error &&
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative block" role="alert">
            <span className="block sm:inline">{error}</span>
          </div>
        }
        <div className="pl-4 text-left">
          <div className="text-black text-base font-normal ">Email address</div>
          <input
            type="text"
            className="w-80 h-12 bg-white rounded-md mt-4 border-b-2"
            placeholder="Please enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="pl-4 text-left">
          <div className="text-black text-base font-normal ">Password</div>
          <input
            type="password"
            className="w-80 h-12 bg-white rounded-md mt-4 border-b-2"
            placeholder="Please enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button
          className="w-80 h-8 mx-auto bg-violet-700 rounded-md text-white text-base font-normal "
          onClick={handleLogin}
        >
          Sign in
        </button>

        <div>Or</div>

        <button
          className="w-80 h-8 mx-auto text-violet-700 underline rounded-md text-base font-normal "
          onClick={() => {
            window.location.href = '/signup';
          }}
        >
          Create an account
        </button>
      </div>
    </div>
  );
}

export default Login;

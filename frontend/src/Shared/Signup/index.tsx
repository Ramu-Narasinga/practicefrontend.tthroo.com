import React, { useState } from 'react';
import TThroo from '../../assets/img/tthroo.svg';
import { useNavigate } from 'react-router';

function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();

    // Form validation
    if (!email || !password || !confirmPassword) {
      setError('Please fill in all fields.');
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    // Additional password constraints can be added here if needed

    const userData = {
      email,
      password,
      isVerified: false
    };

    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/signup`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem('token', data.token);
        navigate('/practice');
      } else {
        const data = await response.json();
        setError(`Signup failed: ${data.error}`);
      }
    } catch (error) {
      console.error(error);
      setError('Signup failed. Please try again later.');
    }
  };

  return (
    <div className="fixed top-0 left-0 w-screen h-screen bg-white flex items-center justify-center z-50 overflow-y-scroll">
      <div className="shadow w-96 h-fit-content top-24 left-0 absolute mx-auto left-0 right-0 bg-slate-50 flex flex-col gap-6 p-4">
        <div className="mx-auto">
          <img className="w-12 h-12" src={TThroo} alt="TThroo Logo" />
        </div>
        <div className="text-black text-xl font-normal ">
          Sign up
        </div>
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
            <span className="block sm:inline">{error}</span>
          </div>
        )}
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

        <div className="pl-4 text-left">
          <div className="text-black text-base font-normal ">Confirm Password</div>
          <input
            type="password"
            className="w-80 h-12 bg-white rounded-md mt-4 border-b-2"
            placeholder="Please confirm your password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>

        <button
          className="w-80 h-8 mx-auto bg-violet-700 rounded-md text-white text-base font-normal "
          onClick={handleSignup}
        >
          Sign up
        </button>

        <div>Or</div>

        <button
          className="w-80 h-8 mx-auto text-violet-700 underline rounded-md text-base font-normal "
          onClick={() => {
            // Redirect to the login page
            window.location.href = '/login'; // Replace with your login route
          }}
        >
          Already have an account? Login.
        </button>
      </div>
    </div>
  );
}

export default Signup;

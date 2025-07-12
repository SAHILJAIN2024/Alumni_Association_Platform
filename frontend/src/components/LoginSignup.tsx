'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FaGoogle, FaFacebookF, FaLinkedinIn } from 'react-icons/fa';

export default function LoginSignup() {
  const router = useRouter();
  const [isSignup, setIsSignup] = useState(false);

  // Login form fields
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Signup form fields
  const [username, setUsername] = useState('');
  const [signupEmail, setSignupEmail] = useState('');
  const [signupPassword, setSignupPassword] = useState('');
  const [enrollmentNumber, setEnrollmentNumber] = useState('');
  const [year, setYear] = useState('');
  const [branch, setBranch] = useState('');
  const [role, setRole] = useState('');

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const res = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });


      const data = await res.json();

      if (res.ok) {
        const role = data.user.role;
        localStorage.setItem('token', data.token);

        router.push(role === 'admin' ? '/admin-dashboard' : '/user-dashboard');
      } else {
        alert(data.message || 'Login failed');
      }
    } catch (err) {
      console.error(err);
      alert('Something went wrong');
    }
  };

  const handleSignup = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const res = await fetch('http://localhost:5000/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username,
          email: signupEmail,
          password: signupPassword,
          enrollment_number: enrollmentNumber,
          year,
          branch,
          role,
        }),
      });


      const data = await res.json();

      if (res.ok) {
        alert('Signup successful!');
        setIsSignup(false);
      } else {
        alert(data.message || 'Signup failed');
      }
    } catch (err) {
      console.error(err);
      alert('Something went wrong');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-100 to-white p-4">
      <div className="relative w-full max-w-5xl h-[520px] bg-white rounded-3xl overflow-hidden shadow-2xl flex">

        {/* Login Form */}
        <div className={`w-1/2 p-10 transition-all duration-700 ${isSignup ? '-translate-x-full opacity-0 absolute' : 'relative opacity-100'}`}>
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Sign In</h2>

          <div className="flex justify-center gap-4 mb-6">
            <button className="bg-gray-100 p-2 rounded-full hover:bg-gray-200"><FaGoogle /></button>
            <button className="bg-gray-100 p-2 rounded-full hover:bg-gray-200"><FaFacebookF /></button>
            <button className="bg-gray-100 p-2 rounded-full hover:bg-gray-200"><FaLinkedinIn /></button>
          </div>

          <p className="text-center text-gray-400 mb-4">or use your email account</p>

          <form className="space-y-4" onSubmit={handleLogin}>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-purple-500"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-purple-500"
            />
            <div className="text-sm text-purple-500 text-right cursor-pointer hover:underline">Forgot Your Password?</div>
            <button type="submit" className="w-full bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700">Sign In</button>
          </form>
        </div>

        {/* Signup Form */}
        <div className={`w-1/2 p-10 transition-all duration-700 ${isSignup ? 'relative opacity-100' : 'translate-x-full opacity-0 absolute'}`}>
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Sign Up</h2>

          <form className="space-y-3" onSubmit={handleSignup}>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)}
              className="w-full px-4 py-2 border rounded-md"
            />
            <input
              type="email"
              placeholder="Email"
              value={signupEmail}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSignupEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded-md"
            />
            <input
              type="password"
              placeholder="Password"
              value={signupPassword}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSignupPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-md"
            />
            <input
              type="text"
              placeholder="Enrollment Number"
              value={enrollmentNumber}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEnrollmentNumber(e.target.value)}
              className="w-full px-4 py-2 border rounded-md"
            />
            <input
              type="number"
              placeholder="Year (e.g., 2023)"
              value={year}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setYear(e.target.value)}
              className="w-full px-4 py-2 border rounded-md"
            />
            <select
              value={role}
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setRole(e.target.value)}
              className="w-full px-4 py-2 border rounded-md"
            >
              <option value="" disabled>Select Role</option>
              <option value="student">Student</option>
              <option value="alumni">Alumni</option>
              <option value="admin">Admin</option>
            </select>
            <select
              value={branch}
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setBranch(e.target.value)}
              className="w-full px-4 py-2 border rounded-md"
            >
              <option value="" disabled>Select Branch</option>
              <option value="CSE">Computer Science</option>
              <option value="ECE">Electronics and Communication</option>
              <option value="ME">Mechanical Engineering</option>
              <option value="CE">Civil Engineering</option>
              <option value="EE">Electrical Engineering</option>
            </select>
            <button type="submit" className="w-full bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700">Sign Up</button>
          </form>
        </div>

        {/* Overlay */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-br from-purple-600 to-purple-700 text-white flex flex-col justify-center items-center p-10 transition-all duration-700 z-10 rounded-l-[3rem]">
          <h2 className="text-3xl font-bold mb-4">{isSignup ? "Welcome Back!" : "Hello, Friend!"}</h2>
          <p className="text-center text-sm mb-6 max-w-xs">
            {isSignup
              ? "To stay connected with us, please login with your credentials"
              : "Register with your personal details to use all of site features"}
          </p>
          <button
            onClick={() => setIsSignup(!isSignup)}
            className="border border-white px-6 py-2 rounded-full hover:bg-white hover:text-purple-700 transition"
          >
            {isSignup ? "Sign In" : "Sign Up"}
          </button>
        </div>
      </div>
    </div>
  );
}

'use client';

import { useRouter } from 'next/navigation';
import Navbar from '@/components/navbar';
import { FaUsers, FaNetworkWired, FaHandshake, FaAward } from "react-icons/fa";
export default function HomePage() {
  const router = useRouter();

  return (
    <>
      <Navbar />
      <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-white px-6 text-center">
        <h1 className="text-9xl md:text-7xl font-extrabold text-blue-800 mb-10 mt-10">
          🎓 Alumni Association Platform
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-xl mb-20">
          Connect, share, contribute and grow with your alma mater's alumni network.
        </p>

        {/* 🔽 Responsive Containers Grid */}
        <section className="w-full max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {/* Events & Meetups */}
          <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition">
            <div className="text-blue-700 text-3xl mb-3">
              <FaUsers />
            </div>
            <h2 className="text-xl font-semibold text-blue-700 mb-2">Events & Meetups</h2>
            <p className="text-gray-600 text-md text-justify">
              Stay updated with alumni events, college fests, and virtual reunions.
            </p>
          </div>

          {/* Professional Networking */}
          <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition">
            <div className="text-purple-700 text-3xl mb-3 ">
              <FaNetworkWired />
            </div>
            <h2 className="text-xl font-semibold text-purple-700 mb-2">Professional Networking</h2>
            <p className="text-gray-600 text-md text-justify">
              Engage in industry groups, webinars, and networking sessions to build meaningful connections.
            </p>
          </div>

          {/* Join the Community */}
          <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition">
            <div className="text-yellow-400 text-3xl mb-3">
              <FaHandshake />
            </div>
            <h2 className="text-xl font-semibold text-yellow-400 mb-2">Join the Community</h2>
            <p className="text-gray-600 text-md text-justify">
              Become a part of our vibrant alumni community. Share your experiences, network with fellow alumni,
              and contribute to the growth of our institution.
            </p>
          </div>

          {/* Alumni Recognition */}
          <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition">
            <div className="text-green-700 text-3xl mb-3">
              <FaAward />
            </div>
            <h2 className="text-xl font-semibold text-green-700 mb-2">Alumni Recognition</h2>
            <p className="text-gray-600 text-md text-justify">
              Get acknowledged for your contributions and achievements through awards and features.
            </p>
          </div>

        </section>



        {/* description section */}

        <section className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">

          {/* 🎓 Alumni Features */}
          <div className="bg-blue-300 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-white mb-6 text-center">👨‍🎓 Alumni Features</h2>
            <div className="grid gap-4">
              <div className="p-4 border rounded-lg shadow-sm hover:shadow-md transition">
                <h3 className="font-semibold text-white mb-1">Referrals</h3>
                <p className="text-gray-600 text-sm">Refer peers to the platform and expand the alumni network.</p>
              </div>
              <div className="p-4 border rounded-lg shadow-sm hover:shadow-md transition">
                <h3 className="font-semibold text-white mb-1">Contributions</h3>
                <p className="text-gray-600 text-sm">Donate time, funds, or expertise to support students and initiatives.</p>
              </div>
              <div className="p-4 border rounded-lg shadow-sm hover:shadow-md transition">
                <h3 className="font-semibold text-white mb-1">Counseling & Guidance</h3>
                <p className="text-gray-600 text-sm">Provide career support and mentorship to students and alumni.</p>
              </div>
              <div className="p-4 border rounded-lg shadow-sm hover:shadow-md transition">
                <h3 className="font-semibold text-white mb-1">Join the Community</h3>
                <p className="text-gray-600 text-sm">Engage with fellow alumni through events and discussions.</p>
              </div>
            </div>
          </div>

          {/* 🏫 Alma Mater Features */}
          <div className="bg-green-300 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-green-800 mb-6 text-center">🏫 Alma Mater Features</h2>
            <div className="grid gap-4">
              <div className="p-4 border rounded-lg shadow-sm hover:shadow-md transition">
                <h3 className="font-semibold text-green-700 mb-1">Opportunities</h3>
                <p className="text-gray-600 text-sm">Post internships, research opportunities, and campus jobs.</p>
              </div>
              <div className="p-4 border rounded-lg shadow-sm hover:shadow-md transition">
                <h3 className="font-semibold text-green-700 mb-1">Manage Contributions</h3>
                <p className="text-gray-600 text-sm">Oversee alumni donations, requests, and initiatives.</p>
              </div>
              <div className="p-4 border rounded-lg shadow-sm hover:shadow-md transition">
                <h3 className="font-semibold text-green-700 mb-1">Networking Support</h3>
                <p className="text-gray-600 text-sm">Foster communication between alumni and current students.</p>
              </div>
              <div className="p-4 border rounded-lg shadow-sm hover:shadow-md transition">
                <h3 className="font-semibold text-green-700 mb-1">Event Coordination</h3>
                <p className="text-gray-600 text-sm">Organize reunions, guest lectures, and interactive sessions.</p>
              </div>
            </div>
          </div>

        </section>


        {/* Footer */}
        <p className="mt-8 text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Alumni Association. All rights reserved.
        </p>
      </main>
    </>
  );
}

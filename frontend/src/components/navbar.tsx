'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Navbar() {
    const router = useRouter();

return (
    <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
                <div className="flex items-center">
                    <span className="text-xl font-bold text-blue-600">Alumni Platform</span>
                </div>
                <div className="flex items-center space-x-4">
                    <button
                        onClick={() => router.push('/')}
                        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                    >
                        Home
                    </button>
                    <button
                        onClick={() => router.push('/auth')}
                        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                    >
                        Register/Login
                    </button>
                </div>
            </div>
        </div>
    </nav>
)
}
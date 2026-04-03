'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from './ui/button';
import { PenBox, LayoutDashboard, Sparkles } from 'lucide-react';
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs';

const Header = () => {
  return (
    <header className="fixed top-0 w-screen bg-white/80 backdrop-blur-md z-50 border-b">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="rounded-xl bg-[#6c47ff]/10 p-2 ring-1 ring-[#6c47ff]/20 transition group-hover:scale-105">
            <Image
              src="/logo.png"
              alt="FinAI"
              width={34}
              height={34}
              className="h-8 w-8 object-contain"
            />
          </div>

          <div className="hidden sm:block">
            <p className="text-sm font-semibold text-gray-900">FinAI</p>
            <p className="text-xs text-gray-500">Smart finance tracking</p>
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-2 rounded-full bg-gray-100/80 px-3 py-2 text-sm text-gray-600">
          <Sparkles size={16} className="text-[#6c47ff]" />
          <span>Track. Analyze. Grow.</span>
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <SignedOut>
            <a
              href="#features"
              className="hidden lg:inline-flex rounded-full px-4 py-2 text-sm font-medium text-gray-600 transition hover:bg-gray-100 hover:text-gray-900"
            >
              Features
            </a>

            <SignInButton forceRedirectUrl="/dashboard">
              <button className="rounded-full border border-gray-200 bg-white/80 px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-100">
                Login
              </button>
            </SignInButton>

            <Link href="/sign-up">
              <Button className="rounded-full bg-gradient-to-r from-[#6c47ff] to-[#8b5cf6] px-4 sm:px-5 shadow-lg shadow-[#6c47ff]/25 transition hover:scale-[1.02]">
                Sign Up
              </Button>
            </Link>
          </SignedOut>

          <SignedIn>
            <Link href="/dashboard">
              <Button variant="outline" className="rounded-full border-gray-200 bg-white/80 px-4 sm:px-5">
                <LayoutDashboard size={18} className="mr-2" />
                <span className="hidden sm:inline">Dashboard</span>
              </Button>
            </Link>

            <Link href="/transaction/create">
              <Button className="rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 px-4 sm:px-5 shadow-lg shadow-emerald-500/25 transition hover:scale-[1.02]">
                <PenBox size={18} className="mr-2" />
                <span className="hidden sm:inline">Add Transaction</span>
              </Button>
            </Link>

            <div className="rounded-full border border-gray-200 bg-white p-1 shadow-sm">
              <UserButton
                appearance={{
                  elements: {
                    avatarBox: 'w-10 h-10',
                  },
                }}
              />
            </div>
          </SignedIn>
        </div>
      </nav>
    </header>
  );
};

export default Header;

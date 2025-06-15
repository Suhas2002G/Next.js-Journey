

import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="w-full px-6 py-4 bg-black text-white border-b shadow-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Left: Logo + App Name */}
        <div className="flex items-center space-x-3">
          <Image
            src="/applogo.avif"
            alt="Logo"
            width={32}
            height={32}
            className="rounded-full"
          />
          <Link href="/" className="text-xl font-semibold tracking-tight">
            MyNextApp
          </Link>
        </div>

        {/* Right: Nav Links */}
        <div className="flex space-x-6">
          <Link
            href="/"
            className="hover:text-emerald-500 transition-colors font-medium"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="hover:text-emerald-500 transition-colors font-medium"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="hover:text-emerald-500 transition-colors font-medium"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}

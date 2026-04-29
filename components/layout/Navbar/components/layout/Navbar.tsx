"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 glass">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <img src="/logo.png" alt="HN RCM" className="h-12 w-auto" />
        </Link>

        <nav className="hidden md:flex gap-8 text-sm">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/services">Services</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        <button className="bg-cyanPrimary px-5 py-2 rounded-full text-black font-semibold">
          Schedule Consultation
        </button>
      </div>
    </header>
  );
}
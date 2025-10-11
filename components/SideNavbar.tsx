// components/SideNavbar.tsx
"use client";

import Link from "next/link";

export default function SideNavbar() {
  return (
    <div className="relative min-h-screen">
      {/* Toggle Checkbox */}
      <input
        type="checkbox"
        id="nav-toggle"
        className="hidden peer"
      />

      {/* Sidebar */}
      <div
        className="fixed top-0 left-0 h-screen bg-[#284351] text-white
        transition-all duration-500 overflow-hidden
        w-16 peer-checked:w-56"
      >
        {/* Header / Toggle Button */}
        <label
          htmlFor="nav-toggle"
          className="block cursor-pointer p-4 font-bold text-lg tracking-widest"
        >
          N
        </label>

        {/* Menu Items */}
        <nav className="flex flex-col mt-5 space-y-2">
          <Link
            href="/Home"
            className="flex items-center gap-3 px-4 py-2 hover:bg-[#34546A] transition-all"
          >
            <span className="font-bold text-lg">🏠</span>
            <span className="text-white transition-all duration-500 
                overflow-hidden 
              peer-checked:opacity-100 peer-checked:w-auto">
              Home
            </span>
          </Link>

          <Link
            href="/popular"
            className="flex items-center gap-3 px-4 py-2 hover:bg-[#34546A] transition-all"
          >
            <span className="font-bold text-lg">🔥</span>
            <span className="text-white transition-all duration-500 
                overflow-hidden 
              peer-checked:opacity-100 peer-checked:w-auto">
              Popular
            </span>
          </Link>

          <Link
            href="/anime"
            className="flex items-center gap-3 px-4 py-2 hover:bg-[#34546A] transition-all"
          >
            <span className="font-bold text-lg">🎞️</span>
            <span className="text-white transition-all duration-500 
                overflow-hidden 
              peer-checked:opacity-100 peer-checked:w-auto">
              Anime List
            </span>
          </Link>

          <Link
            href="/about"
            className="flex items-center gap-3 px-4 py-2 hover:bg-[#34546A] transition-all"
          >
            <span className="font-bold text-lg">ℹ️</span>
            <span className="text-white transition-all duration-500 
                overflow-hidden 
              peer-checked:opacity-100 peer-checked:w-auto">
              Info
            </span>
          </Link>
        </nav>
      </div>

    
    </div>
  );
}

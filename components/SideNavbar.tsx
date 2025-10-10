"use client"

import { useRouter } from 'next/navigation'
import React from 'react'

const SideNavbar = () => {
    const router = useRouter();
    const romance = "genre/romance"
  return (
    <div>
         <div className="flex flex-row md:flex-col p-4 gap-3 md:h-screen w-full md:w-60 
                      bg-white/10 backdrop-blur-md border border-white/20 rounded-xl shadow-lg overflow-y-auto">
        <h2 className="text-2xl font-bold mb-4 text-white">Menu</h2>
        {[
          "Home", "top-search", "Categories", "top-Airing", "Top Rated",
          "Upcoming", "Movies", "TV Series", "Dubbed Anime", "Subbed Anime"
          , romance
        ].map((item) => (
          <div
            key={item}
            className="py-2 px-3 rounded-md cursor-pointer hover:bg-white/30 text-white transition"
            onClick={() => router.push(`/${item}`)}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  )
}

export default SideNavbar
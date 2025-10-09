"use client";
import React, { useEffect, useState } from "react";
import { Bebas_Neue } from "next/font/google";
import { animeCategories } from "@/utils/category";
import AnimeCard from "@/components/HeroAnimeCard";

const bebas = Bebas_Neue({ subsets: ["latin"], weight: ["400"] });

const CategoryPage = () => {
  const [animedata, setAnimedata] = useState([]);
  const [category, setCategory] = useState("top-airing");
  const [loading, setLoading] = useState(false);

  const getData = async () => {
    setLoading(true);
    try {
      const res = await fetch(`https://anime-streaming-chi.vercel.app/api/${category}`);
      if (!res.ok) throw new Error("Failed to fetch");
      const data = await res.json();
      setAnimedata(data?.results?.data || []);
    } catch (error) {
      console.error(error);
      setAnimedata([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, [category]);

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-[#132a38] text-white">

      {/* Left Sidebar */}
      <div className="flex flex-row md:flex-col p-4 gap-3 md:h-screen w-full md:w-60 
                      bg-white/10 backdrop-blur-md border border-white/20 rounded-xl shadow-lg overflow-y-auto">
        <h2 className="text-2xl font-bold mb-4 text-white">Menu</h2>
        {[
          "Home", "Watchlist", "Categories", "Top Airing", "Top Rated",
          "Upcoming", "Movies", "TV Series", "Dubbed Anime", "Subbed Anime",
          "Genres", "Seasonal Anime"
        ].map((item) => (
          <div
            key={item}
            className="py-2 px-3 rounded-md cursor-pointer hover:bg-white/30 text-white transition"
            onClick={() => console.log(`${item} clicked`)}
          >
            {item}
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col p-4 md:p-6 overflow-y-auto">
        <h1 className={`${bebas.className} text-5xl md:text-8xl mb-4 text-white`}>
          Explore By Category
        </h1>

        {/* Scrollable Category Bar */}
        <div className="flex gap-4 overflow-x-auto scroll-smooth snap-x py-2 mb-4 md:mb-6">
          {animeCategories.map((cat) => (
            <div
              key={cat}
              onClick={() => setCategory(cat)}
              className={`min-w-[7rem] h-10 md:h-12 flex items-center justify-center rounded-md cursor-pointer transition-all duration-300 snap-center
                         ${category === cat
                           ? "bg-purple-800 border-b-4 border-yellow-400 font-semibold"
                           : "bg-purple-600 hover:bg-purple-700"}`}
            >
              {cat}
            </div>
          ))}
        </div>

        {/* Anime Grid */}
        {loading ? (
          <div className="text-white text-xl py-5 text-center animate-pulse">
            Loading...
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {animedata.map((an) => (
              <AnimeCard
                key={an.id || an.title}
                data={an}
                variant="small"
                className="transform hover:scale-105 transition duration-300 shadow-lg hover:shadow-purple-800/50"
              />
            ))}
          </div>
        )}
      </div>

      {/* Right Sidebar */}
      <div className="w-full md:w-1/5 p-4 mt-4 md:mt-0 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl shadow-lg">
        <h2 className="text-xl font-bold text-white mb-4">Trending</h2>
        <p className="text-white/70">Coming soon...</p>
      </div>
    </div>
  );
};

export default CategoryPage;

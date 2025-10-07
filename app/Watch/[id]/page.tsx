"use client";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const Page = () => {
  const params = useParams();
  const id = params?.id;

  const [animeData, setAnimeData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [link,setlink] = useState("nnnnnnn");
  const changeEpisode = (id)=>{
    setlink(id)
  }
  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!id) return; // Prevent fetch if id is undefined
        const res = await fetch(
          `https://anime-streaming-chi.vercel.app/api/episodes/${id}`
        );
        if (!res.ok) throw new Error(`HTTP error: ${res.status}`);
        const data = await res.json();
        console.log("All Data is this:", data?.results);
        setAnimeData(data?.results);
      } catch (err: any) {
        setError(err.message || "Failed to fetch data");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if (loading)
    return <div className="text-center mt-10 text-white">Loading...</div>;
  if (error)
    return (
      <div className="text-red-500 mt-10 text-center font-semibold">
        Error: {error}
      </div>
    );

  const { episodes = [], totalEpisodes = 0 } = animeData || {};

  return (
    <div className="min-h-screen bg-gray-900 text-white flex justify-around items-start py-10 px-6">
      {/* Left Sidebar */}
      <aside className="w-1/5 bg-gray-800 p-4 rounded-xl shadow-lg">
        <h2 className="font-semibold text-lg mb-2">Sidebar</h2>
        <p className="text-sm text-gray-400">Left sidebar content...</p>
      </aside>

      {/* Main Player Area */}
      <main className="w-1/2 bg-gray-800 p-6 rounded-xl shadow-lg">
        <div className="bg-gray-700 h-[30rem] rounded-lg flex items-center justify-center">
          <span className="text-gray-300">Video Player Area</span>
         
          <h1>this is {link}</h1>
        </div>
      </main>

      {/* Right Sidebar */}
      <aside className="w-1/5 bg-gray-800 p-4 rounded-xl shadow-lg">
        <h1 className="text-xl font-bold mb-2 text-center">All Episodes</h1>
        <h3 className="text-sm text-gray-300 mb-4 text-center">
          Total Episodes: {totalEpisodes}
        </h3>

        <div className="grid grid-cols-3 sm:grid-cols-4 gap-3 overflow-y-auto max-h-[28rem] pr-2 scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800">
          {episodes.map((ep: any, index: number) => (
            <div onClick={()=>changeEpisode(ep?.id)}
              key={index}
              className="bg-green-500 hover:bg-green-600 text-black text-center font-semibold rounded-md p-2 text-sm transition-all cursor-pointer"
            >
              {ep?.episode_no}
            </div>
          ))}
        </div>
      </aside>
    </div>
  );
};

export default Page;

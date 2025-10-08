"use client";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const Page = () => {
  const params = useParams();
  const id = params?.id;

  const [animeData, setAnimeData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [link, setLink] = useState<string>("");
  const [name,setname] = useState<string>("");
  const [epno,setepno] = useState<string>('');
  const [user,setuser] = useState("sub")

  // Fetch anime data when id changes
  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!id) return;
        const res = await fetch(
          `https://anime-streaming-chi.vercel.app/api/episodes/${id}`
        );
        if (!res.ok) throw new Error(`HTTP error: ${res.status}`);
        const data = await res.json();
        console.log('kkkkkk',data)
        setAnimeData(data?.results);

        // Set the first episode link by default
        if (data?.results?.episodes?.length > 0) {
          const id = data.results.episodes[0].id;
          const epName = data.results.episodes[0].title;
          
  const cleanId = id.includes("?ep=") ? id.split("?ep=")[1] : id;
          setLink(cleanId);
          setname(epName)
          setepno(data?.results?.episodes[0]?.episode_no)
        }
      } catch (err: any) {
        setError(err.message || "Failed to fetch data");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  // Construct the embed URL directly
  const embedUrl = link ? `https://megaplay.buzz/stream/s-2/${link}/${user}` : "";

const changeEpisode = (id: string) => {
  const cleanId = id.includes("?ep=") ? id.split("?ep=")[1] : id;
  console.log("niggggggg",cleanId)
  setLink(cleanId);
};


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
    <main className="w-full md:w-3/5 lg:w-1/2 mx-auto bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-2xl shadow-2xl border border-gray-700 backdrop-blur-sm">
  {/* Video Container */}
  <div className="relative bg-gray-700/50 h-[30rem] rounded-xl overflow-hidden flex items-center justify-center shadow-inner">
    {embedUrl ? (
      <iframe
        src={embedUrl}
        width="100%"
        height="100%"
        frameBorder="0"
        allowFullScreen
        className="rounded-xl transition-all duration-500 hover:scale-[1.01]"
      ></iframe>
    ) : (
      <p className="text-gray-400 text-lg">🎬 Select an episode to play</p>
    )}
    {/* Optional Overlay Gradient */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none"></div>
  </div>

  {/* Controls */}
  <div className="flex flex-col items-center mt-6 gap-4">
    <div className="flex justify-center gap-6">
      <button
        className="px-5 py-2 rounded-full bg-pink-400 text-gray-900 font-semibold hover:bg-pink-300 hover:scale-105 transition-all duration-200 shadow-md"
        onClick={() => setuser("sub")}
      >
        💬 Sub
      </button>
      <button
        className="px-5 py-2 rounded-full bg-pink-400 text-gray-900 font-semibold hover:bg-pink-300 hover:scale-105 transition-all duration-200 shadow-md"
        onClick={() => setuser("dub")}
      >
        🔊 Dub
      </button>
    </div>

    <h1 className="text-lg font-semibold text-gray-200">
      You are watching <span className="text-pink-400">{user}</span> the episode
    </h1>
    <h2 className="text-gray-300">Episode Number: {epno}</h2>
    <p className="mt-3 text-center text-sm text-gray-400 italic">
      Currently Playing: {name || "None"}
    </p>
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
            <div
              onClick={() =>{
                changeEpisode(ep?.id)
                setname(ep?.title)
                setepno(ep?.episode_no)

              } }
              key={index}
              className={`bg-green-500 hover:bg-green-600 text-black text-center font-semibold rounded-md p-2 text-sm transition-all cursor-pointer ${
                link === ep?.id ? "ring-2 ring-white" : ""
              }`}
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

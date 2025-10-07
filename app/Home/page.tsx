import HeroAnimeCard from "@/components/HeroAnimeCard";
import HeroBanner from "@/components/HeroBanner";

export default async function HomePage() {
  const res = await fetch("http://anime-streaming-chi.vercel.app/api/", {
    cache: "no-store",
  });

  const data = await res.json();
  console.log(data)
  const trending = data?.results?.trending || [];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Banner */}
      <HeroBanner res={data?.results?.spotlights} />

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row px-6 py-8 gap-8">
        {/* Left / Main Section */}
        <div className="flex-1 space-y-8">
          {/* Intro Section */}
          <div className="p-6 rounded-2xl bg-black/30 backdrop-blur-md shadow-lg">
            <h1 className="text-3xl font-bold mb-2">Love the Site</h1>
            <p>Follow our social handle for more anime updates</p>
          </div>

          {/* Options Section */}
          <div className="p-4 rounded-2xl bg-black/20 backdrop-blur-md shadow-lg">
            Options / Filters
          </div>

          {/* Trending Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {trending.map((anime, idx) => (
              <HeroAnimeCard key={idx} data={anime} />
            ))}
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="w-full lg:w-1/4 space-y-6">
          <div className="p-6 rounded-2xl bg-black/30 backdrop-blur-md shadow-lg">
            Sidebar Content
          </div>
        </div>
      </div>
    </div>
  );
}

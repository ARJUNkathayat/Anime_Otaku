"use client"
import HeroAnimeCard from "@/components/HeroAnimeCard";
import HeroBanner from "@/components/HeroBanner";
import { useEffect,useState } from "react";
import SideNavbar from "@/components/SideNavbar";
import AnimeCard from "@/components/HeroAnimeCard";
import HeroCard from "@/components/HeroCard";
import RightSideBar from "@/components/RightSidebar";

export default  function HomePage() {
 
   const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const[nav,setnav] = useState(false);
  // const [error, setError] = useState(null);
  // const[latest,setlatest] = useState([])
  // const[latestep,setlatestep] = useState([])
  // const[fav,setfav] = useState([])




  // Fetch data when the component loads
  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch("https://anime-streaming-chi.vercel.app/api", {
          cache: "no-store",
        });

        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }

        const json = await res.json();
        console.log(json?.results)
        setData(json?.results);
      } catch (err) {
        console.error("Fetch error:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, []);

  if(loading){
    return(
      <div><h1>Loading</h1></div>
    )
  }

  const {latestCompleted,latestEpisode,mostFavorite,mostPopular,spotlights,topAiring,trending} = data;




  // return (
  //   // <div className="min-h-screen bg-gray-900 text-white">
  //   //   {/* Hero Banner */}
  //   //   <HeroBanner res={data?.results?.spotlights} />

  //   //   {/* Main Content */}
  //   //   <div className="flex flex-col lg:flex-row px-6 py-8 gap-8">
  //   //     {/* Left / Main Section */}
  //   //     <div className="flex-1 space-y-8">
  //   //       {/* Intro Section */}
  //   //       <div className="p-6 rounded-2xl bg-black/30 backdrop-blur-md shadow-lg">
  //   //         <h1 className="text-3xl font-bold mb-2">Love the Site</h1>
  //   //         <p>Follow our social handle for more anime updates</p>
  //   //       </div>

  //   //       {/* Options Section */}
  //   //       <div className="p-4 rounded-2xl bg-black/20 backdrop-blur-md shadow-lg">
  //   //         Options / Filters
  //   //       </div>

  //   //       {/* Trending Grid */}
  //   //       <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
  //   //         {trending.map((anime, idx) => (
  //   //           <HeroAnimeCard key={idx} data={anime} />
  //   //         ))}
  //   //       </div>
  //   //     </div>

  //   //     {/* Right Sidebar */}
  //   //     <div className="w-full lg:w-1/4 space-y-6">
  //   //       <div className="p-6 rounded-2xl bg-black/30 backdrop-blur-md shadow-lg">
  //   //         Sidebar Content
  //   //       </div>
  //   //     </div>
  //   //   </div>
  //   // </div>
  // );

  return(
    <div className="flex" >
    <div>
  {nav ? (
    // ✅ Expanded Sidebar
    <div className="w-[14rem] bg-gradient-to-b from-red-500 to-red-700 h-[100vh] text-white flex flex-col items-start p-4 space-y-4 transition-all duration-300">
      <button
        className="self-end bg-red-800 px-3 py-1 rounded hover:bg-red-900 transition"
        onClick={() => setnav(!nav)}
      >
        ✖
      </button>

      <div className="flex flex-col space-y-6 mt-4 w-full">
        <button className="flex items-center gap-3 hover:bg-red-600 px-3 py-2 rounded transition">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12" />
          </svg>
          <span>Home</span>
        </button>

        <button className="flex items-center gap-3 hover:bg-red-600 px-3 py-2 rounded transition">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318l9.581 9.581 7.83-7.83L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z" />
          </svg>
          <span>Discover</span>
        </button>

        <button className="flex items-center gap-3 hover:bg-red-600 px-3 py-2 rounded transition">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18 9 11.25l9.12 9.12" />
          </svg>
          <span>Trending</span>
        </button>

        <button className="flex items-center gap-3 hover:bg-red-600 px-3 py-2 rounded transition">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5" />
          </svg>
          <span>Favorites</span>
        </button>

        <button className="flex items-center gap-3 hover:bg-red-600 px-3 py-2 rounded transition">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196" />
          </svg>
          <span>Search</span>
        </button>

        <button className="flex items-center gap-3 hover:bg-red-600 px-3 py-2 rounded transition">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653l11.54 6.347-11.54 6.347V5.653Z" />
          </svg>
          <span>Watch</span>
        </button>
      </div>
    </div>
  ) : (
    // ✅ Collapsed Sidebar
    <div className="w-[4.5rem] bg-gradient-to-b from-red-500 to-red-700 h-[100vh] text-white flex flex-col items-center p-2 space-y-6 transition-all duration-300">
      <button
        className="bg-red-800 p-2 rounded hover:bg-red-900 transition"
        onClick={() => setnav(!nav)}
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5M3.75 9.75h16.5M3.75 14.25h16.5" />
        </svg>
      </button>

      <button className="hover:scale-110 transition">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955L21.75 12" />
        </svg>
      </button>

      <button className="hover:scale-110 transition">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25v4.318l9.581 9.581 7.83-7.83L11.16 3.66Z" />
        </svg>
      </button>

      <button className="hover:scale-110 transition">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18 9 11.25l9.12 9.12" />
        </svg>
      </button>

      <button className="hover:scale-110 transition">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5" />
        </svg>
      </button>

      <button className="hover:scale-110 transition">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196" />
        </svg>
      </button>

      <button className="hover:scale-110 transition">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653l11.54 6.347-11.54 6.347V5.653Z" />
        </svg>
      </button>
    </div>
  )}
</div>

      <div  className={`h-[80rem] pt-10 pl-[3rem] ${ nav ? "w-[55rem]" : "w-[66rem]"}`}>
        <div className={`h-[28rem]  flex overflow-x-auto rounded-3xl bg-pink-300 ${ nav ? "w-[49rem]" : "w-[52.5rem]"}`}>
          {spotlights.map((anime,idx)=>(
            <HeroCard data={anime} key={idx}/>
            
          ))}
        </div>

        <div className={` h-[70rem]   mt-10 ${ nav ? "w-[48rem]" : "w-[53rem]"}` }>
          <div className="   h-[20rem]">
            <h1 className="font-serif font-bold text-3xl">Trending</h1>
            <div className="flex overflow-x-auto space-x-4 pb-4 ">
                {trending.map((anime,idx)=>(
              <AnimeCard  key={idx} data={anime} variant="verySmall"/>
            ))}
            </div>
          
          </div>

           <div className="   h-[20rem] mt-20">
            <h1 className="font-serif font-bold text-3xl">Trending</h1>
            <div className="flex overflow-x-auto space-x-4 pb-4 ">
                {trending.map((anime,idx)=>(
              <AnimeCard  key={idx} data={anime} variant="verySmall"/>
            ))}
            </div>
          
          </div>

            <div className="   h-[20rem] mt-20">
            <h1 className="font-serif font-bold text-3xl">Latest Completed</h1>
            <div className="flex overflow-x-auto space-x-4 pb-4 ">
                {latestCompleted.map((anime,idx)=>(
              <AnimeCard  key={idx} data={anime} variant="verySmall"/>
            ))}
            </div>
          
          </div>
            <div className="   h-[20rem] mt-20">
            <h1 className="font-serif font-bold text-3xl">Latest Episode</h1>
            <div className="flex overflow-x-auto space-x-4 pb-4 ">
                {latestEpisode.map((anime,idx)=>(
              <AnimeCard  key={idx} data={anime} variant="verySmall"/>
            ))}
            </div>
          
          </div>
            <div className="   h-[20rem] mt-20">
            <h1 className="font-serif font-bold text-3xl">Most Popular</h1>
            <div className="flex overflow-x-auto space-x-4 pb-4 ">
                {mostFavorite.map((anime,idx)=>(
              <AnimeCard  key={idx} data={anime} variant="verySmall"/>
            ))}
            </div>
          
          </div>
            <div className="   h-[20rem] mt-20">
            <h1 className="font-serif font-bold text-3xl">Top Airing</h1>
            <div className="flex overflow-x-auto space-x-4 pb-4 ">
                {topAiring.map((anime,idx)=>(
              <AnimeCard  key={idx} data={anime} variant="verySmall"/>
            ))}
            </div>
          
          </div>
            <div className="   h-[20rem] mt-20">
            <h1 className="font-serif font-bold text-3xl">Most Popular</h1>
            <div className="flex overflow-x-auto space-x-4 pb-4 ">
                {mostPopular.map((anime,idx)=>(
              <AnimeCard  key={idx} data={anime} variant="verySmall"/>
            ))}
            </div>
          
          </div>
            <div className="   h-[20rem] mt-20">
            <h1 className="font-serif font-bold text-3xl">Spotlights</h1>
            <div className="flex overflow-x-auto space-x-4 pb-4 ">
                {spotlights.map((anime,idx)=>(
              <AnimeCard  key={idx} data={anime} variant="verySmall"/>
            ))}
            </div>
          
          </div>
            <div className="   h-[20rem] mt-20">
            <h1 className="font-serif font-bold text-3xl">Top Upcoming</h1>
            <div className="flex overflow-x-auto space-x-4 pb-4 ">
                {trending.map((anime,idx)=>(
              <AnimeCard  key={idx} data={anime} variant="verySmall"/>
            ))}
            </div>
          
          </div>


        </div>
      </div>
      <div className="bg-red-300 h-[40rem] w-[20rem]">
        

      </div>
    </div>
  )
}

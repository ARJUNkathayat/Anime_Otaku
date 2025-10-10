"use client"
import HeroAnimeCard from "@/components/HeroAnimeCard";
import HeroBanner from "@/components/HeroBanner";
import { useEffect,useState } from "react";
import SideNavbar from "@/components/SideNavbar";
import AnimeCard from "@/components/HeroAnimeCard";
import HeroCard from "@/components/HeroCard";

export default  function HomePage() {
 
   const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
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
        <SideNavbar/>

      </div>
      <div className="w-[55rem]  h-[80rem]  pt-10 pl-[3rem]">
        <div className=" h-[20rem] w-[48rem] flex overflow-x-auto rounded-3xl bg-pink-300">
          {spotlights.map((anime,idx)=>(
            <HeroCard data={anime} id={idx}/>
          ))}
        </div>

        <div className=" h-[70rem] w-[48rem] mt-10">
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
      <div></div>
    </div>
  )
}

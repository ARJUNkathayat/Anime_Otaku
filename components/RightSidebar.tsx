import { Bebas_Neue } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const bebas = Bebas_Neue({ subsets: ["latin"], weight: ["400"] });

export default async function RightSideBar() {
  // Server-side fetch
  const res = await fetch(
    "https://anime-streaming-chi.vercel.app/api/most-popular"
  );
  const animeData = await res.json();
  const sliceData = animeData?.results?.data.slice(0, 10);

  return (
    <div  className="w-[22rem] pt-5 px-6 rounded-xl ">
      <h1 className={`${bebas.className} font-semibold text-white text-4xl`}>
        Most Popular
      </h1>

      <div  className="mt-5 space-y-5">
        {sliceData.map((anime, idx) => (
          <Link key={idx} href={`/animeInfo/${anime.id}`}>
            <div
              style={{backgroundColor:"#394f5a"}}
              className="flex mt-6 rounded-3xl overflow-hidden h-[10rem] shadow-lg cursor-pointer hover:scale-105 transition-transform duration-300"
            >
              {/* Poster */}
              <div className="w-1/3 p-2">
                <div className="relative w-full h-full rounded-xl overflow-hidden">
                  <Image
                    src={anime.poster}
                    alt={anime.id}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Info */}
              <div className="w-2/3 text-white p-4 flex flex-col justify-center">
                <h2 className="font-bold text-lg">{anime.id}</h2>
                <div className="flex gap-2 mt-2">
                  {/* Sub Badge */}
                  <span className="relative inline-flex h-8 overflow-hidden rounded-full p-[1px]">
                    <span className="absolute inset-[-500%] animate-spin bg-[conic-gradient(from_90deg_at_50%_50%,#284351_0%,#E2CBFF_50%,#284351_100%)]">
                      
                    </span>
                    <span className="relative inline-flex h-full w-full items-center justify-center rounded-full bg-[#284351] px-6 text-white text-sm font-semibold">
                      Sub:{anime.tvInfo.sub}
                    </span>
                  </span>

                  {/* Dub Badge */}
                  <span className="relative inline-flex h-8 overflow-hidden rounded-full w-[10rem]">
                    <span className="absolute inset-[-500%] animate-spin bg-[conic-gradient(from_90deg_at_50%_50%,#284351_0%,#E2CBFF_50%,#284351_100%)]" />
                    <span className="relative inline-flex h-full w-full items-center justify-center rounded-full bg-[#284351] px-3 text-white text-sm font-semibold">
                      Dub: {anime.tvInfo.dub}
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

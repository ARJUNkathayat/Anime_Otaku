"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

interface TVInfo {
  dub?: string;
  sub?: string;
  duration?: string;
  eps?: string
}

interface AnimeData {
  id: string;
  poster: string;
  title: string;
  year: string;
  type: string;
  episodes: number;
  tvInfo?: TVInfo;
  rating: number; // 0-100 scale
}

const AnimeCard = ({ data, variant = "default" }: { data: AnimeData; variant?: string }) => {
  const router = useRouter();
  const handleClick = () => router.push(`/animeInfo/${data.id}`);

  // Responsive size based on variant
  let cardClass = "";
  switch (variant) {
    case "verySmall":
      cardClass = "w-[12rem] h-[20rem]"
      break;
    case "small":
      cardClass = "w-full aspect-[2/3]"; // fits grid cell nicely
      break;
    case "medium":
      cardClass = "w-56 h-72";
      break;
    case "large":
      cardClass = "w-72 h-96";
      break;
    default:
      cardClass = "w-64 h-96";
  }

  const { dub = "N/A", sub = "N/A", duration = "N/A" ,eps="N/A"} = data.tvInfo || {};

  return (
    <div
      onClick={handleClick}
      className={`${cardClass} snap-start flex-shrink-0 relative rounded-2xl overflow-hidden shadow-lg cursor-pointer transform hover:scale-105 transition-transform duration-300`}
      aria-label={`View details for ${data.title}`}
    >
      {/* Poster */}
      <div className="relative w-full h-full">
        <Image
          src={data.poster}
          alt={data.title}
          fill
          className="object-cover transition-transform duration-500 hover:scale-110"
        />
        {/* Play button overlay */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 hover:opacity-100 transition-opacity duration-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-12 h-12 text-white"
            fill="currentColor"
            viewBox="0 0 448 512"
          >
            <path d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z" />
          </svg>
        </div>
      </div>

      {/* Info */}
      <div className="absolute bottom-0 w-full p-3 bg-black/60 text-white backdrop-blur-md">
        <h3 className="font-bold text-lg truncate">{data.title}</h3>
        <div className="flex justify-between mt-1 text-sm text-gray-300">
          <span>{data.type}</span>
          <span>{data.year}</span>
        </div>
        <div className="flex justify-between mt-1 text-xs text-gray-200">
          <span>Episodes: { sub}</span>
          <span>Duration: {duration}</span>
        </div>
        <div className="flex justify-between mt-1 text-xs text-gray-200">
          <span>Dub: {dub}</span>
          <span>Sub: {sub}</span>
        </div>
        
      </div>
    </div>
  );
};

export default AnimeCard;

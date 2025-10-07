"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

interface TVInfo {
  dub?: string;
  sub?: string;
  duration?: string;
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

const AnimeCard = ({ data }: { data: AnimeData }) => {
  const router = useRouter();
  const handleClick = () => router.push(`/animeInfo/${data.id}`);

  // Safely destructure tvInfo with defaults
  const { dub = "N/A", sub = "N/A", duration = "N/A" } = data.tvInfo || {};

  return (
    <div
      onClick={handleClick}
      className="relative w-64 h-96 rounded-2xl overflow-hidden shadow-lg cursor-pointer transform hover:scale-105 transition-transform duration-300"
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
      <div className="absolute bottom-0 w-full p-4 bg-black/60 text-white backdrop-blur-md">
        <h3 className="font-bold text-lg truncate">{data.title}</h3>
        <div className="flex justify-between mt-1 text-sm text-gray-300">
          <span>{data.type}</span>
          <span>{data.year}</span>
        </div>
        <div className="flex justify-between mt-2 text-xs text-gray-200">
          <span>Episodes: {data.episodes}</span>
          <span>Duration: {duration}</span>
        </div>
        <div className="flex justify-between mt-1 text-xs text-gray-200">
          <span>Dub: {dub}</span>
          <span>Sub: {sub}</span>
        </div>
        <div className="mt-1 text-xs text-yellow-400">
          Rating: {data.rating}/100
        </div>
      </div>
    </div>
  );
};

export default AnimeCard;

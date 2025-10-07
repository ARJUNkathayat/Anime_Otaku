import React from "react";

const HeroCard = ({ data }) => {
  const { title, description, poster, tvInfo } = data;

  return (
    <div className="relative w-full h-[35rem] overflow-hidden rounded-xl shadow-2xl group cursor-pointer transition-all duration-300 hover:shadow-3xl hover:scale-105">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
        style={{
          backgroundImage: `url(${poster})`,
        }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
      
      {/* Content Container */}
      <div className="relative h-full flex flex-col justify-end p-6 text-white">
        <div className="backdrop-blur-sm bg-black/30 p-5 rounded-lg border border-white/10 transform transition-all duration-300 group-hover:bg-black/40">
          {/* Title */}
          <h1 className="text-3xl font-bold mb-2 leading-tight line-clamp-2 group-hover:text-yellow-400 transition-colors duration-300">
            {title}
          </h1>
          
          {/* Description */}
          <p className="text-gray-200 text-sm mb-3 line-clamp-2 leading-relaxed">
            {description}
          </p>
          
          {/* Info Grid */}
          <div className="grid grid-cols-2 gap-2 text-xs">
            {tvInfo?.releaseData && (
              <div className="flex items-center space-x-1">
                <span className="text-gray-400">📅</span>
                <span className="text-gray-300">{tvInfo.releaseData}</span>
              </div>
            )}
            
            {tvInfo?.duration && (
              <div className="flex items-center space-x-1">
                <span className="text-gray-400">⏱️</span>
                <span className="text-gray-300">{tvInfo.duration}</span>
              </div>
            )}
            
            {tvInfo?.episodeInfo?.sub && (
              <div className="flex items-center space-x-1 col-span-2">
                <span className="text-gray-400">💬</span>
                <span className="text-gray-300">Sub: {tvInfo.episodeInfo.sub}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroCard;

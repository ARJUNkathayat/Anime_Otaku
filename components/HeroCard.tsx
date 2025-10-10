  import React from "react";

const HeroCard = ({ data }) => {
  const { title, description, poster, tvInfo } = data;

  return (
 <div className="w-full h-[20rem] flex-shrink-0 rounded-xl shadow-2xl overflow-hidden group cursor-pointer hover:scale-105 transition-transform duration-300">
  {/* Background */}
  <img src={poster} alt={title} className="w-full h-full object-cover" />
  
  {/* Content Overlay */}
  <div className="bg-gradient-to-t from-black/80 via-black/40 to-transparent absolute bottom-0 w-full p-4 text-white">
    <h1 className="text-xl font-bold">{title}</h1>
    <p className="text-sm line-clamp-2">{description}</p>
  </div>
</div>

  );
};

export default HeroCard;

  import { useRouter } from "next/navigation";
import React from "react";

const HeroCard = ({ data }) => {
  const { title, description, poster, tvInfo,id } = data;
  const router = useRouter()
  const handleClick = ()=>{
   router.push(`/animeInfo/${id}`)

  }

  return (
 <div onClick={handleClick} className=  " cursor-pointer relative flex-shrink-0 w-[50rem] h-[27rem] rounded-lg overflow-hidden shadow-lg">
  {/* Background */}
  <img src={poster} alt={title} className="w-full h-full object-cover" />
  
  {/* Content Overlay */}
  <div className="absolute bottom-0  bg-black/70 mx-5 mb-3 rounded-2xl p-4 flex flex-col justify-end text-white h-[10rem]">
    <h1 className="text-xl font-bold">{title}</h1>
    <p className="text-sm line-clamp-2">{description}</p>
  </div>
</div>

  );
};

export default HeroCard;

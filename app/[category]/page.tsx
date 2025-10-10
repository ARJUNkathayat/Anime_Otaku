"use client"
import SideNavbar from '@/components/SideNavbar'
import { useParams } from 'next/navigation'
import React, { useEffect } from 'react'
import { useState } from 'react'
import AnimeCard from '@/components/HeroAnimeCard'

const page = () => {
      const [animedata, setAnimedata] = useState([]);
      const [loading,setLoading] = useState(false)
      const params = useParams();
      const {category}=params;
        const getData = async () => {
    setLoading(true);
    try {
      const res = await fetch(`https://anime-streaming-chi.vercel.app/api/${category}`);
      if (!res.ok) throw new Error("Failed to fetch");
      const data = await res.json();
      console.log("kkk",data?.results?.data)
      setAnimedata(data?.results?.data || []);
    } catch (error) {
      console.error(error);
      setAnimedata([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(()=>{
    getData();
  },[])

  return (
    <div className='flex'>
        <div>
            <SideNavbar/>
             </div>
        <div className='bg-red-800  h-[20rem] w-[50rem]'>
             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {animedata.map((an) => (
              <AnimeCard
                key={an.id || an.title}
                data={an}
                variant="small"
                className="transform hover:scale-105 transition duration-300 shadow-lg hover:shadow-purple-800/50"
              />
            ))}
          </div>
        </div>
        <div></div>
    </div>
  )
}

export default page
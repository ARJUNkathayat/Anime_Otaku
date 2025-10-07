"use client"

import { useParams, useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import HeroAnimeCard from '@/components/HeroAnimeCard'

const Page = () => {
  const params = useParams()
  const { id } = params

  const [apidata, setapiData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const router = useRouter();
  const handleClick = ()=>{

    router.push(`/Watch/${id}`)
  }
  useEffect(() => {
    if (!id) return

    const fetchData = async () => {
      try {
        const res = await fetch(`https://anime-streaming-chi.vercel.app/api/info?id=${id}`)
        if (!res.ok) throw new Error('Failed to fetch data')
        const json = await res.json()
        const allData = json?.results?.data
        console.log("Hurrrrrra", json)
        console.log("kkk", json?.results?.data)
        setapiData(allData)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

 

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {error}</div>
  if (!apidata) return null

  const { title, japanese_title, poster, showType, synonym, animeInfo,related_data } = apidata
  const genres = animeInfo?.Genres
  const episodesInfo = animeInfo?.tvInfo
  console.log("m111mm",related_data)

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* --- Hero Section --- */}
      <div className="flex flex-col md:flex-row bg-gray-900">
        <div className="flex justify-center items-center md:w-1/3 p-8">
          <Image
            src={poster}
            alt={`${title} Poster`}
            width={300}
            height={450}
            className="rounded-lg shadow-lg object-cover"
            priority
          />
        </div>

        <div className="md:w-2/3 p-8 flex flex-col justify-center">
          <h1 className="text-4xl font-extrabold mb-3">{title}</h1>
          <h2 className="text-lg text-gray-300 mb-4">
            Japanese Title: <span className="text-white font-semibold">{japanese_title}</span>
          </h2>
          <p className="text-gray-300 mb-6 leading-relaxed">{animeInfo.Overview}</p>
          <div className="flex gap-4 flex-wrap">
            <button onClick={handleClick} className="bg-purple-600 hover:bg-purple-700 transition px-6 py-2 rounded-full font-bold">
              Watch Now
            </button>
            <button className="bg-pink-600 hover:bg-pink-700 transition px-6 py-2 rounded-full font-bold">
              Add to Watchlist
            </button>
          </div>
        </div>
      </div>

      {/* --- Anime Details Section --- */}
      <div className="bg-gray-800 py-10 px-6 md:px-16">
        <div className="max-w-5xl mx-auto bg-gray-900 rounded-2xl p-6 shadow-lg">
          <h2 className="text-2xl font-bold mb-6 border-b border-gray-700 pb-2">Anime Information</h2>

          <div className="space-y-3 text-gray-300">
            <p><span className="font-semibold text-white">Episode Duration:</span> {animeInfo.Duration}</p>
            <p><span className="font-semibold text-white">Status:</span> {animeInfo.Status}</p>
            <p><span className="font-semibold text-white">Studios:</span> {animeInfo.Studios}</p>
          </div>

          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-3 text-white">Genres</h3>
            <div className="flex flex-wrap gap-3">
              {genres.map((genre, idx) => (
                <span
                  key={idx}
                  className="bg-purple-700 hover:bg-purple-800 px-4 py-2 rounded-full text-sm font-medium"
                >
                  {genre}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-2 text-white">Episode Info</h3>
            <p>Sub Episodes Available: <span className="font-bold text-purple-400">{episodesInfo.sub}</span></p>
            <p>Dub Episodes Available: <span className="font-bold text-pink-400">{episodesInfo.dub}</span></p>
          </div>
        </div>
      </div>

      <div className=" bg-gray-900 mt-10">
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6'>
          {related_data.map((anime,idx)=>(
            <HeroAnimeCard key={idx} data={anime}/>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Page

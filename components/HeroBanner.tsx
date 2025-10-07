import HeroCard from "./HeroCard";

interface HeroListProps {
  res: any[];
}

export default function HeroList({ res }: HeroListProps) {
  if (!res || res.length === 0) {
    return <p>No anime data available</p>;
  }

  return (
    <div className="w-full overflow-x-auto scrollbar-hide scroll-smooth snap-x snap-mandatory">

  <div className="flex gap-6 pr-5 py-2 ">
    {res.map((anime, idx) => (
      <div key={idx} className="min-w-[20rem] h-[37rem] w-[83rem] flex-shrink-0 snap-start">
        <HeroCard data={anime} />
      </div>
    ))}
  </div>
  </div>


  );
}

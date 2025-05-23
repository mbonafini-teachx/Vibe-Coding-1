// app/page.js

import PlayingCard from "./components/PlayingCards";

export default function Home() {
  return (
    <div
      className="
        min-h-screen 
        bg-[url('/back.webp')] bg-cover bg-center bg-fixed // Italian-style screen background
        flex flex-col items-center justify-center p-4
      "
    >
      <h1 className="text-2xl font-serif font-bold text-gray-800 mb-4 drop-shadow-md">
        Solitario Napoletano
      </h1>
      <div className="grid grid-cols-4 gap-4">
        {/* Sample cards */}
        <PlayingCard suit="Coppe" rank="Asso" />
        <PlayingCard suit="Spade" rank="7" />
        <PlayingCard suit="Denari" rank="Fante" />
        <PlayingCard suit="Bastoni" rank="Re" />
      </div>
    </div>
  );
}

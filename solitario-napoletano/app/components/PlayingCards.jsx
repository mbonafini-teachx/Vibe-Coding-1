// components/PlayingCard.jsx
import React from "react";

const PlayingCard = ({ suit, rank }) => {
  // Simple text-based symbols for suits (vintage feel; replace with SVGs if desired)
  const suitSymbols = {
    Coppe: "🍷", // Cup
    Spade: "⚔️", // Sword
    Denari: "💰", // Coin
    Bastoni: "🏏", // Baton
  };

  return (
    <div
      className="
        relative w-24 h-36 md:w-32 md:h-48 
        [perspective:1000px] // For 3D effect
        [transform:rotateY(0deg)] // Explicitly start with front face visible
        hover:[transform:rotateY(180deg)] // Flip to back on hover
        transition-all duration-600 ease-in-out // Slightly longer for smoothness
        group
      "
    >
      {/* Front Face - Higher z-index to ensure it's on top initially */}
      <div
        className="
          absolute inset-0 z-10 // Prioritize front layer
          bg-parchment bg-[url('/vintage-paper.jpg')] bg-cover bg-center 
          border-2 border-faded-gold rounded-lg shadow-md 
          flex flex-col justify-between p-2 
          text-center font-serif text-lg 
          backface-hidden
          [transform:rotateY(0deg)]
        "
      >
        {/* Top-left rank and suit */}
        <div className="absolute top-1 left-1 text-sm font-bold text-gray-800 drop-shadow-md">
          {rank} <br /> {suit}
        </div>

        {/* Center suit symbol */}
        <div className="flex-grow flex items-center justify-center text-4xl text-gray-700 opacity-90 drop-shadow-lg">
          {suitSymbols[suit] || suit}
        </div>

        {/* Bottom-right rank and suit (mirrored) */}
        <div className="absolute bottom-1 right-1 text-sm font-bold text-gray-800 drop-shadow-md [transform:rotate(180deg)]">
          {rank} <br /> {suit}
        </div>

        {/* Gold trim overlay */}
        <div className="absolute inset-0 border-2 border-dashed border-faded-gold opacity-50 rounded-lg pointer-events-none"></div>
      </div>

      {/* Back Face - Lower z-index when not flipped */}
      <div
        className="
          absolute inset-0 z-0 // Back layer behind front initially
          bg-parchment bg-[url('/vintage-paper.jpg')] bg-cover bg-center 
          border-2 border-faded-gold rounded-lg shadow-md 
          flex items-center justify-center 
          text-center font-serif text-lg text-gray-600 
          backface-hidden
          [transform:rotateY(180deg)]
        "
      >
        <div className="text-2xl font-bold opacity-70 drop-shadow-md">
          Solitario
        </div>
        <div className="absolute inset-0 border-2 border-dashed border-faded-gold opacity-50 rounded-lg pointer-events-none"></div>
      </div>
    </div>
  );
};

export default PlayingCard;

"use client";

// components/Game.jsx
import React, { useState, useEffect } from "react";
import PlayingCard from "./PlayingCards";
import { generateDeck, shuffleDeck } from "../lib/gameLogic";

const Game = () => {
  const [deck, setDeck] = useState([]);
  const [stock, setStock] = useState([]);
  const [waste, setWaste] = useState([]);
  const [tableau, setTableau] = useState(Array(7).fill([])); // 7 piles
  const [foundations, setFoundations] = useState(Array(4).fill([])); // 4 suits
  const [selectedCard, setSelectedCard] = useState(null);

  useEffect(() => {
    const newDeck = shuffleDeck(generateDeck());
    const newTableau = [];
    let cardIndex = 0;
    for (let i = 0; i < 7; i++) {
      const pile = newDeck.slice(cardIndex, cardIndex + i + 1);
      pile[pile.length - 1].faceUp = true; // Top card face-up
      newTableau.push(pile);
      cardIndex += i + 1;
    }
    setTableau(newTableau);
    setStock(newDeck.slice(cardIndex));
    setDeck(newDeck);
  }, []);

  // Draw from stock to waste
  const drawCard = () => {
    if (stock.length > 0) {
      const [drawn] = stock.splice(0, 1);
      drawn.faceUp = true;
      setWaste([...waste, drawn]);
      setStock([...stock]);
    }
  };

  // Basic move logic (expand for full rules)
  const moveCard = (fromPileIndex, toPileIndex) => {
    // TODO: Implement full move logic using isValidMove from gameLogic
    // For example: Check if selectedCard can move to tableau[toPileIndex]
    console.log("Move logic placeholder");
  };

  return (
    <div className="min-h-screen bg-[url('/back.webp')] bg-cover bg-center bg-fixed p-4">
      <h1 className="text-2xl font-serif font-bold text-gray-800 mb-4 drop-shadow-md">
        Solitario Napoletano
      </h1>
      <div className="flex justify-between">
        {/* Stock and Waste */}
        <div className="flex gap-2">
          <div onClick={drawCard} className="w-24 h-36 bg-gray-300 rounded-lg">
            {stock.length} Cards
          </div>
          <div>
            {waste.length > 0 && <PlayingCard {...waste[waste.length - 1]} />}
          </div>
        </div>
        {/* Foundations */}
        <div className="flex gap-2">
          {foundations.map((pile, index) => (
            <div key={index} className="w-24 h-36 bg-gray-200 rounded-lg">
              {pile.length > 0 && <PlayingCard {...pile[pile.length - 1]} />}
            </div>
          ))}
        </div>
      </div>
      {/* Tableau */}
      <div className="grid grid-cols-7 gap-2 mt-4">
        {tableau.map((pile, pileIndex) => (
          <div key={pileIndex} className="flex flex-col">
            {pile.map((card, cardIndex) => (
              <div
                key={cardIndex}
                className={card.faceUp ? "" : "opacity-50"}
                onClick={() => setSelectedCard(card)}
              >
                <PlayingCard {...card} />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Game;

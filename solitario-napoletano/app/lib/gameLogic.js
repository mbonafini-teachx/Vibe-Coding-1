// lib/gameLogic.js
const suits = ["Coppe", "Spade", "Denari", "Bastoni"];
const ranks = ["1", "2", "3", "4", "5", "6", "7", "Fante", "Cavallo", "Re"];
const rankValues = {
  1: 1,
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  Fante: 8,
  Cavallo: 9,
  Re: 10,
};

// Generate full deck
export const generateDeck = () =>
  suits.flatMap((suit) => ranks.map((rank) => ({ suit, rank, faceUp: false })));

// Shuffle deck
export const shuffleDeck = (deck) => {
  const shuffled = [...deck];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

// Check if move is valid (e.g., descending rank, alternating color)
export const isValidMove = (fromCard, toCard) => {
  if (!toCard) return rankValues[fromCard.rank] === 10; // Kings to empty piles
  const fromValue = rankValues[fromCard.rank];
  const toValue = rankValues[toCard.rank];
  const isAlternatingColor =
    suits.indexOf(fromCard.suit) % 2 !== suits.indexOf(toCard.suit) % 2; // Coppe/Denari red, Spade/Bastoni black
  return fromValue === toValue - 1 && isAlternatingColor;
};

// ... (Add more helpers as needed, e.g., for foundations: ascending same suit)

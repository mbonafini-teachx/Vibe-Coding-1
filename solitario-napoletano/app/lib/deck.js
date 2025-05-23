const suits = ["Coppe", "Spade", "Denari", "Bastoni"];
const ranks = ["1", "2", "3", "4", "5", "6", "7", "Fante", "Cavallo", "Re"];
export const deck = suits.flatMap((suit) =>
  ranks.map((rank) => ({ suit, rank }))
);

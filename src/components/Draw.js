import React, { useContext, useEffect } from "react";

import { GameContext } from "../contexts/GameContext";

export default function Draw() {
  const { squares, draw, setDraw, whoIsWinner } = useContext(GameContext);

  useEffect(() => {
    const a = squares.includes(null);
    if (a === false && whoIsWinner === null) {
      setDraw(true);
    }
  }, [squares, whoIsWinner]);

  return <h1>{draw ? `DRAW!` : ""}</h1>;
}

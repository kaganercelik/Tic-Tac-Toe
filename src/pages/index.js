import styles from "./style.css";
import React from "react";

import GameContextProvider, { GameContext } from "../contexts/GameContext";
import Board from "../components/Board";

export default function Home() {
  return (
    <GameContextProvider>
      <Board />
    </GameContextProvider>
  );
}

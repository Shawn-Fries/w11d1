import React from 'react';
import ReactDOM from 'react-dom';
import Tile from "./minesweeper";
import Board from "./minesweeper"


document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  ReactDOM.render(<Game />, root)
})


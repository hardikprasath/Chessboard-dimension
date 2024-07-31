import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

export const ChessBoard = () => {
  const [dimension, setDimension] = useState(0);
  const [chess, setChess] = useState([]);

  const black = {
    width: "100px",
    height: "100px",
    backgroundColor: "black"
  }

  const white = {
    width: "100px",
    height: "100px",
    backgroundColor: "white"
  }

  const chessBoard = {
    width: 100 * dimension,
    display: "flex",
    flexWrap: "wrap",
    marginTop: "20px",
    boxShadow: "0px 10px 10px rgba(0,0,0,0.2)"
  }

  const makeChessBoard = () => {
    let arr = [];
    for (let i = 0; i < dimension; i++) {
      let temp = [];
      for (let j = 0; j < dimension; j++) {
        if ((i + j) % 2==0) {
          temp.push(<div style={black}></div>)
        }
        else {
          temp.push(<div style={white}></div>)
        }
      }
      arr.push(temp);
    }
    setChess(arr);
  }

  useEffect(() => {
    if (dimension > 0) {
      makeChessBoard();
    }
  }, [dimension])


  return (
    <div>
      <div>
        <h2>
          N x N ChessBoard
        </h2>
        <input type="number" placeholder='Type dimension' onChange={(e) => setDimension(e.target.value)} />
      </div>

      <section style={chessBoard}>
        {chess}
      </section>
    </div>
  )
}

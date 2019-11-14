import React, { useState } from 'react';
import { Square } from './square';

const Board = ({ onClick, squares, winMoves }) => {
    const [clicked, setClicked] = useState(Array(9).fill(false));
    const [highlighted, setHighlighted] = useState(false);

    if (winMoves.length > 0 && !highlighted) {
        const clk = Array(9).fill(false);
        winMoves.forEach(m => clk[m] = true);
        setClicked(clk);
        setHighlighted(true);
    }

    const click = (val, row, col) => {
        if (winMoves.length === 0) {
            const clk = Array(9).fill(false);
            clk[val] = true;
            setClicked(clk);
            return onClick(val, row, col);
        }
    }
    const renderBoardRow = (row, ...list) => list.map((val, col) => (
        <Square
            key={val * 2}
            clicked={clicked[val]}
            value={squares[val]}
            onClick={() => click(val, row, col)} />
    ));
    const renderBoard = (...times) => times.map((val, row) => (
        <div className="board-row">
            {renderBoardRow(row, val * 3, val * 3 + 1, val * 3 + 2)}
        </div>
    ))
    return (
        <div>
            {renderBoard(0, 1, 2)}
        </div>
    );
}

export { Board };
import React from 'react';
import { Square } from './square';

const Board = ({ onClick, squares }) => {
    const renderBoardRow = (row, ...list) => list.map((val, col) => (
        <Square key={col * 2} value={squares[val]} onClick={() => onClick(val, row, col)} />
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
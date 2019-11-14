import React from 'react';
import { Square } from './square';

const Board = ({ onClick, squares }) => {
    const renderBoardRow = (...list) => list.map((val, i) => (
        <Square key={i * 2} value={squares[val]} onClick={() => onClick(val)} />
    ));
    return (
        <div>
            <div className="board-row">
                {renderBoardRow(0, 1, 2)}
            </div>
            <div className="board-row">
                {renderBoardRow(3, 4, 5)}
            </div>
            <div className="board-row">
                {renderBoardRow(6, 7, 8)}
            </div>
        </div>
    );
}

export { Board };
import React, { useState } from 'react';
import { Square } from './square';
import calculateWinner from '../helpers/calculateWinner';

const Board = props => {
    const [state, setState] = useState(Array(9).fill(null));
    const [xIsNext, setxIsNext] = useState(true);
    const turn = xIsNext ? 'X' : 'O';
    const winner = calculateWinner(state);
    const status = winner ? `Winner: ${winner}` : `Next player: ${turn}`;
    const handleClick = val => {
        const squares = state.slice();
        if (winner || squares[val]) {
            return;
        }
        squares[val] = turn;
        setState(squares);
        setxIsNext(!xIsNext);
        return;
    }
    const renderBoardRow = (...list) => list.map(val => (
        <Square value={state[val]} onClick={() => handleClick(val)} />
    ));
    return (
        <div>
            <div className="status">{status}</div>
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
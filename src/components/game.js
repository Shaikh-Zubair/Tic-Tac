import React, { useState } from 'react';
import { Board } from './board';
import calculateWinner from '../helpers/calculateWinner'
import { Moves } from './moves';

const Game = () => {
    const [history, setHistory] = useState([{ squares: Array(9).fill(null) }]);
    const [xIsNext, setxIsNext] = useState(true);
    const [stepNumber, setStepNumber] = useState(0);

    const History = history.slice(0, stepNumber + 1);
    const current = History[stepNumber];
    const winner = calculateWinner(current.squares);
    const turn = xIsNext ? 'X' : 'O';
    const status = winner ? `Winner: ${winner}` : `Next player: ${turn}`;
    const jumpTo = step => {
        setStepNumber(step);
        setxIsNext(step % 2 === 0);
    }
    const handleClick = val => {
        const squares = current.squares.slice();
        if (winner || squares[val]) {
            return;
        }
        squares[val] = turn;
        setHistory(History.concat({ squares }));
        setxIsNext(!xIsNext);
        setStepNumber(History.length);
        return;
    }

    return (
        <div className="game">
            <div className="game-board">
                <Board onClick={val => handleClick(val)} squares={current.squares} />
            </div>
            <div className="game-info">
                <div>{status}</div>
                <Moves history={history} onClick={step => jumpTo(step)} />
            </div>
        </div>
    );
}

export { Game };
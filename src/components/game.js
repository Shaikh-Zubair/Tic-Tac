import React, { useState } from 'react';
import { Board } from './board';
import calculateWinner from '../helpers/calculateWinner'
import { Moves } from './moves';

const Game = () => {
    const [history, setHistory] = useState([{ squares: Array(9).fill(null), loc: null }]);
    const [xIsNext, setxIsNext] = useState(true);
    const [stepNumber, setStepNumber] = useState(0);

    const History = history.slice(0, stepNumber + 1);
    const current = History[stepNumber];
    const { message, win, finish, winMoves } = calculateWinner(current.squares);
    const turn = xIsNext ? 'X' : 'O';
    const status = win ? `Winner: ${message}` : [finish ? message : `Next player: ${turn}`];
    const jumpTo = step => {
        setStepNumber(step);
        setxIsNext(step % 2 === 0);
    }
    const handleClick = (val, row, col) => {
        const squares = current.squares.slice();
        if (win || squares[val] || finish) {
            return;
        }
        squares[val] = turn;
        setHistory(History.concat({ squares, loc: { row, col } }));
        setxIsNext(!xIsNext);
        setStepNumber(History.length);
        return;
    }

    return (
        <div className="game">
            <div className="game-board">
                <Board
                    onClick={(val, row, col) => handleClick(val, row, col)}
                    winMoves={winMoves}
                    squares={current.squares} />
            </div>
            <div className="game-info">
                <div>{status}</div>
                <Moves history={history} onClick={step => jumpTo(step)} />
            </div>
        </div>
    );
}

export { Game };
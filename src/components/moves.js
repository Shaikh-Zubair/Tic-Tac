import React from 'react';

const Moves = ({ history, onClick }) => {
    return (
        <ol>
            {history.map(({ loc }, move) => {
                const desc = move ?
                    `Go to move #${move} at (${loc.row + 1}, ${loc.col + 1})` :
                    'Go to game start';
                return (
                    <li>
                        <button key={desc} onClick={() => onClick(move)}>{desc}</button>
                    </li>
                );
            })}
        </ol>
    );
}

export { Moves };
import React from 'react';

const Moves = ({ history, onClick }) => {
    return (
        <ol>
            {history.map((step, move) => {
                const desc = move ?
                    'Go to move #' + move :
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
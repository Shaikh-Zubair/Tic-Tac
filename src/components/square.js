import React from 'react';

const Square = ({ value, onClick, clicked }) => {
    return (
        <button
            className="square"
            style={clicked ? styleBold : { fontWeight: 'normal', color: 'grey' }}
            onClick={() => onClick()}
        >{value}</button>
    );
}

const styleBold = {
    fontWeight: 'bold',
    color: 'black',
}
export { Square };
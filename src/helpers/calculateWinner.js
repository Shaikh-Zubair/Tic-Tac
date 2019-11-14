export default squares => {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return { message: squares[a], win: true, finish: true, winMoves: lines[i] };
        } else if (isAllFilled(squares)) {
            return { message: 'Tie match', win: false, finish: true, winMoves: [] };
        }
    }
    return { message: null, win: false, finish: false, winMoves: [] };
}

const isAllFilled = squares => {
    const ans = squares.find(s => s === null)
    return ans !== null;
}

function TicTacToe() {

    return (
        <div className="container">
            <h1>Tic-Tac-Toe</h1>
            <div className="row-1">
                <button className="moves"></button>
                <button className="moves"></button>
                <button className="moves"></button>
            </div>
            <div className="row-2">
                <button className="moves"></button>
                <button className="moves"></button>
                <button className="moves"></button>
            </div>
            <div className="row-3">
                <button className="moves"></button>
                <button className="moves"></button>
                <button className="moves"></button>
            </div>

            <button className="reset-button">Reset</button>
        </div>
    );
}

export default TicTacToe;
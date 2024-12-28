
function TicTacToe() {
    let board=["X","O","","X","O","","X","O",""];
  

    return (
        <div className="container">
            <h1>Tic-Tac-Toe</h1>
            <div className="row">
                {board.slice(0,3).map((object,index)=>(
                    <button key={index} className="moves"
                    disabled={object!==""}>{object}</button>
                ))}
            </div>
            <div className="row">
                {board.slice(3,6).map((object,index)=>(
                    <button key={index+6} className="moves"
                    disabled={object!==""}>{object}</button>
                ))}
            </div>
            <div className="row">
                {board.slice(6,9).map((object,index)=>(
                    <button key={index+6} className="moves"
                    disabled={object!=""}>{object}</button>
                ))}
            </div>

            <button className="reset-button">Reset</button>
            
        </div>
    );
}

export default TicTacToe;
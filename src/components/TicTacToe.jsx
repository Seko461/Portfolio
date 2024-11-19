import React from 'react'
import { useEffect, useState } from "react";
import '../assets/styles/TicTacToe.css'

const TicTacToe = () => {
    function Square({ value, onClick }) {
        return (
            <button onClick={onClick} className="square">
                {value}
            </button>
        );
    }
    const [squares, setSquares] = useState(Array(9).fill(""));
    const [isXTurn, setIsXTurn] = useState(true);
    const [status, setStatus] = useState("");
    const [scoreX, setScoreX] = useState(0);
    const [scoreO, setScoreO] = useState(0);

    function upDateScore() {
        if (getWinner(squares) === 'X') {
            setScoreX(scoreX + 1)
        } else {
            setScoreO(scoreO + 1)
        }
    }

    function restartScore() {
        setScoreX(0);
        setScoreO(0)
    }

    function getWinner(squares) {
        const winningPatterns = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
            [0, 3, 6],
            [1, 4, 7],
        ];

        for (let i = 0; i < winningPatterns.length; i++) {
            const [x, y, z] = winningPatterns[i];

            if (
                squares[x] &&
                squares[x] === squares[y] &&
                squares[x] === squares[z]
            ) {
                return squares[x];
            }
        }

        return null;
    }

    function handleClick(getCurrentSquare) {
        let cpySquares = [...squares];
        if (getWinner(cpySquares) || cpySquares[getCurrentSquare]) return;
        cpySquares[getCurrentSquare] = isXTurn ? "X" : "O";
        setIsXTurn(!isXTurn);
        setSquares(cpySquares);
    }

    function handleRestart() {
        setIsXTurn(true);
        setSquares(Array(9).fill(""));
    }

    useEffect(() => {
        if (!getWinner(squares) && squares.every((item) => item !== "")) {
            setStatus(`This is a draw ! Please restart the game`);
        } else if (getWinner(squares)) {
            setStatus(`Winner is ${getWinner(squares)}. Please restart the game`);
            upDateScore()

        } else {
            setStatus(`Next player is ${isXTurn ? "X" : "O"}`);
        }
    }, [squares, isXTurn]);



    console.log(squares);
    return (
        <>
            <div className="gameContainer">
                <h1>Tic Tac Toe</h1>
                <div className="tic-tac-toe-container">
                    <div className="row">
                        <Square value={squares[0]} onClick={() => handleClick(0)} />
                        <Square value={squares[1]} onClick={() => handleClick(1)} />
                        <Square value={squares[2]} onClick={() => handleClick(2)} />
                    </div>
                    <div className="row">
                        <Square value={squares[3]} onClick={() => handleClick(3)} />
                        <Square value={squares[4]} onClick={() => handleClick(4)} />
                        <Square value={squares[5]} onClick={() => handleClick(5)} />
                    </div>
                    <div className="row">
                        <Square value={squares[6]} onClick={() => handleClick(6)} />
                        <Square value={squares[7]} onClick={() => handleClick(7)} />
                        <Square value={squares[8]} onClick={() => handleClick(8)} />
                    </div>

                </div>
                <div className='gameButton'>
                    <h1>{status}</h1>
                    <button onClick={handleRestart}>Restart Game</button>
                </div>
                <div
                    style={{
                        display: 'flex',
                        gap: '100px',
                        justifyContent: 'center',
                        margin: '30px'
                    }} className="score-counter-container">
                    <div style={{ display: 'flex', flexDirection: 'column' }} >
                        <div className="score-label-X">Score 'X'</div>
                        <div className="scoreX">{scoreX}</div>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <div className="score-label-O">Score 'O'</div>
                        <div className="scoreO">{scoreO} </div>
                    </div>
                </div>
                <button className="restartScore" onClick={restartScore}>Restart Score</button>
            </div>
        </>

    )
}

export default TicTacToe

import React, { useState } from "react";
import GameContext from "./gameContext";

const GameContextProvider = ({ children }) => {
    const [gameQuestions, setGameQuestions] = useState([]);
    const [gameDifficulty, setGameDifficulty] = useState('easy');
    const [gameCategory, setGameCategory] = useState(9);
    const [score, setScore] = useState(0);
    const [categoryIndex, setCategoryIndex] = useState(0);
    return (
        <GameContext.Provider value={{
            gameQuestions,
            setGameQuestions,
            gameDifficulty,
            setGameDifficulty,
            gameCategory,
            setGameCategory,
            score,
            setScore,
            categoryIndex,
            setCategoryIndex
        }}>
            {children}
        </GameContext.Provider>
    )

}

export default GameContextProvider;
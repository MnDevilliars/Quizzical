import React, { useContext, useEffect, useState } from 'react';
import { decode } from 'html-entities';
import { useNavigate } from 'react-router-dom';
import playClickSound from '../sound/sound.js';
import GameContext from '../context/gameContext.js'

function Questions() {
    const { gameQuestions, setScore } = useContext(GameContext);
    const [points, setPoints] = useState(0);
    const [currentQuestion, setCurrentQuestion] = useState("");
    const [currentOption, setCurrentOption] = useState([]);
    const [current, setCurrent] = useState(0);
    const [timeLeft, setTimeLeft] = useState(30);

    const navigate = useNavigate();

    useEffect(() => {
        if (current >= gameQuestions.length) {
            setScore(points);
            navigate('/result');
            return;
        }

        if (gameQuestions.length > 0 && gameQuestions[current]?.options?.length) {
            setCurrentQuestion(gameQuestions[current].question);

            const shuffledOptions = [...gameQuestions[current].options];
            for (let i = shuffledOptions.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [shuffledOptions[i], shuffledOptions[j]] = [shuffledOptions[j], shuffledOptions[i]];
            }
            setCurrentOption(shuffledOptions);
        } else {
            console.error("Invalid options for the question!");
        }
    }, [current, gameQuestions, points, setScore, navigate]);


    useEffect(() => {
        const quizTimer = setInterval(() => {
            setTimeLeft((prev) => {
                if (prev > 1) return prev - 1;

                handleSubmitAnswer("xxxxx");
                return 30;
            });
        }, 1000);

        return () => clearInterval(quizTimer);
    }, [current]);

    const handleSubmitAnswer = (value) => {
        if (current >= gameQuestions.length) return;


        if (value === gameQuestions[current].correctAnswer) {
            setPoints((prev) => prev + 10);
        }

        setTimeLeft(30);
        setCurrent((prev) => prev + 1);
    };

    return (
        <div className="flex items-center justify-center my-12">
            <div className="bg-emerald-50 py-8 px-6 rounded-lg shadow-lg max-w-screen-md w-full mx-5">
                <div className="flex justify-between items-center mb-6">
                    <span className="text-emerald-800 font-medium">
                        Question <b>{current + 1 <= 10 ? current + 1 : '10'}</b> of <b>10</b>
                    </span>
                    <span className="text-emerald-800 font-medium text-md">
                        Time Left: <span className="text-lg text-red-600 font-bold">{timeLeft < 10 ? `00:0${timeLeft}` : `00:${timeLeft}`}</span>
                    </span>
                </div>
                <h2 className="text-emerald-800 text-xl font-bold mb-6">
                    {decode(currentQuestion)}
                </h2>
                <div className="space-y-4">
                    {currentOption.map((opt, index) => (
                        <button
                            key={`${opt}-${index}`}
                            className="bg-emerald-100 text-lg text-left w-full font-bold text-emerald-700 px-6 py-4 rounded-lg cursor-pointer hover:bg-emerald-200"
                            value={opt}
                            onClick={(e) => {
                                playClickSound();
                                handleSubmitAnswer(e.target.value);
                            }}
                        >
                            {decode(opt)}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Questions;

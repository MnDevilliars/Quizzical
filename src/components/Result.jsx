import React, { useContext } from 'react';
import { FaWhatsapp, FaFacebook, FaInstagram } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import playClickSound from '../sound/sound.js';
import GameContext from '../context/gameContext.js'
import sadImgUrl from '../assets/sad_emoji.png'
import trophyImgUrl from '../assets/trophy.png'

function Result() {
    const { score } = useContext(GameContext)
    const percentage = Math.round((score / 10) * 100)
    const navigate = useNavigate()

    const getMotivation = () => {
        let motivation = [
            "Push harder than yesterday if you want a different tomorrow",
            "Change is the end of all true learning",
            "You have to think you can and I know you can",
            "Don't worry! Try again and improve your score."
        ]
        let idx = Math.floor(Math.random() * motivation.length);
        return motivation[idx];
    }

    const resultMessage =
        percentage === 100
            ? 'Perfect! You got every question right!'
            : percentage >= 50
                ? 'Great job! Keep it up!'
                : getMotivation();

    const shareMessage = `I scored ${percentage / 10}% in the quiz! Try it now https://quizzical-mnd-1715.vercel.app/`;

    return (
        <div className="flex items-center justify-center min-h-[70vh] md:min-h-[78vh] ">
            <div className="bg-emerald-50 px-4 py-6 rounded-lg shadow-lg max-w-lg w-full mx-5 mt-12 mb-7">


                <div className="flex justify-center mb-3">
                    <img
                        src={(score < 50) ? sadImgUrl : trophyImgUrl}
                        alt="Trophy"
                        className="w-24 h-24"
                    />
                </div>

                <div className="text-center mb-3">
                    <h2 className="text-emerald-800 text-2xl font-bold">{(score < 50) ? "" : "Congrats!"}</h2>
                    <p className="text-emerald-700 text-lg mt-2">{resultMessage}</p>
                </div>


                <div className="flex justify-center gap-4 mb-3">
                    <span className="text-emerald-800 text-xl font-bold">Your Score:</span>
                    <span className="text-emerald-800 text-xl font-bold">
                        {score}/{100} ({percentage / 10}%)
                    </span>
                </div>


                <div className="text-center mb-6">
                    <p className="text-emerald-700 text-lg">
                        Quiz completed successfully!
                    </p>
                </div>


                <div className="flex justify-center">
                    <button
                        className="bg-emerald-600 text-white px-6 py-2 rounded-lg w-1/2 hover:bg-emerald-700 transition duration-300"
                        onClick={() => {
                            playClickSound()
                            navigate('/')
                        }}
                    >
                        Go to Home
                    </button>
                </div>


                <div className="flex justify-center items-center space-x-4 mt-6">
                    <a
                        href={`https://wa.me/?text=${shareMessage}`}
                        target="_blank"
                        onClick={playClickSound}
                        rel="noopener noreferrer"
                        className="bg-emerald-600 text-white p-3 rounded-full hover:bg-emerald-700 transition duration-300"
                    >
                        <FaWhatsapp size={24} />
                    </a>
                    <a
                        href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}&quote=${shareMessage}`}
                        target="_blank"
                        onClick={playClickSound}
                        rel="noopener noreferrer"
                        className="bg-emerald-600 text-white p-3 rounded-full hover:bg-emerald-700 transition duration-300"
                    >
                        <FaFacebook size={24} />
                    </a>
                    <a
                        href={`https://www.instagram.com/?url=${window.location.href}`}
                        target="_blank"
                        onClick={playClickSound}
                        rel="noopener noreferrer"
                        className="bg-emerald-600 text-white p-3 rounded-full hover:bg-emerald-700 transition duration-300"
                    >
                        <FaInstagram size={24} />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Result;

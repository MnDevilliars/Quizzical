import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import playClickSound from '../sound/sound.js';
import GameContext from '../context/gameContext.js'

function Start({
    categories = {}
}) {

    const [category, setCategory] = useState(9);
    const [difficulty, setDifficulty] = useState("easy")

    const { setGameDifficulty, setGameCategory, setGameQuestions } = useContext(GameContext);
    const navigate = useNavigate();

    const backupData = [
        {
            question: ".rs is the top-level domain for what country?",
            options: ["Serbia", "Romania", "Russia", "Rwanda"],
            correctAnswer: "Serbia"
        },
        {
            question: "Which operating system was released first?",
            options: ["Mac OS", "Windows", "Linux", "OS/2"],
            correctAnswer: "Mac OS"
        },
        {
            question: "In computing terms, typically what does CLI stand for?",
            options: ["Command Line Interface", "Common Language Input", "Control Line Interface", "Common Language Interface"],
            correctAnswer: "Command Line Interface"
        },
        {
            question: "What is known as &quot;the brain&quot; of the Computer?",
            options: ["Central Processing Unit", "Motherboard", "Graphics Processing Unit", "Keyboard"],
            correctAnswer: "Central Processing Unit"
        },
        {
            question: "In programming, the ternary operator is mostly defined with what symbol(s)?",
            options: ["?:", "??", "if then", "?"],
            correctAnswer: "?:"
        },
        {
            question: "What is the main CPU is the Sega Mega Drive / Sega Genesis?",
            options: ["Motorola 68000", "Zilog Z80", "Yamaha YM2612", "Intel 8088"],
            correctAnswer: "Motorola 68000"
        },
        {
            question: "Which one of these is not an official development name for a Ubuntu release?",
            options: ["Mystic Mansion", "Trusty Tahr", "Utopic Unicorn", "Wily Werewolf"],
            correctAnswer: "Mystic Mansion"
        },
        {
            question: "What does RAID stand for?",
            options: ["Redundant Array of Independent Disks", "Rapid Access for Indexed Devices", "Range of Applications with Identical Designs", "Randomized Abstract Identification Description"],
            correctAnswer: "Redundant Array of Independent Disks"
        },
        {
            question: "What does AD stand for in relation to Windows Operating Systems? ",
            options: ["Active Directory", "Alternative Drive", "Automated Database", "Active Department"],
            correctAnswer: "Active Directory"
        },
        {
            question: ".at is the top-level domain for what country?",
            options: ["Austria", "Argentina", "Australia", "Angola"],
            correctAnswer: "Austria"
        }
    ]


    const getQuestions = async (cat, diff) => {
        try {
            const response = await fetch(
                `https://opentdb.com/api.php?amount=10&category=${cat}&difficulty=${diff}&type=multiple`
            );
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            return data.results;
        } catch (error) {
            console.error("Error fetching questions:", error);
            console.log(backupData);
            setGameQuestions(backupData)
        }
    };

    const handleStart = async (e) => {
        playClickSound()
        e.preventDefault()

        try {
            setGameCategory(category)
            setGameDifficulty(difficulty)

            const data = await getQuestions(category, difficulty)
            const arr = [];

            data.forEach(({ question, correct_answer, incorrect_answers }) => {
                const obj = {
                    question: question,
                    options: [correct_answer, ...incorrect_answers],
                    correctAnswer: correct_answer
                }
                arr.push(obj)
            });
            setGameQuestions(arr)
        } catch (error) {
            console.log("Game Start ERROR :: ", error);
        } finally {
            navigate('/question')
        }
    }

    return (
        <div className="px-5 flex items-center justify-center my-12 min-h-[60vh]">
            <div className="bg-emerald-600 shadow-md rounded-lg p-6 sm:p-8 max-w-sm w-full">
                <div className="mb-6">
                    <label className="block text-lg text-emerald-100 font-bold mb-2">Select Category</label>
                    <select
                        onClick={playClickSound}
                        onChange={(e) => setCategory(e.target.value)}
                        className="w-full border border-emerald-300 cursor-pointer rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400">
                        {
                            Object.entries(categories).map(([key, value]) => (
                                <option key={value} value={value}>{key}</option>
                            ))
                        }
                    </select>
                </div>
                <div className="mb-6">
                    <label className="block text-lg text-emerald-100 font-bold mb-2">Select Difficulty</label>
                    <select
                        onChange={(e) => setDifficulty(e.target.value)}
                        onClick={playClickSound}
                        className="w-full border cursor-pointer border-emerald-300 rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400">
                        <option value="easy">Easy</option>
                        <option value="medium">Medium</option>
                        <option value="hard">Hard</option>
                    </select>
                </div>
                <div
                    className='flex gap-4'
                >

                    <button
                        onClick={() => {
                            playClickSound()
                            navigate('/quizzes')
                        }}
                        className="w-full bg-emerald-800 text-lg text-white font-bold py-2 px-4 rounded-lg hover:bg-emerald-900 transition duration-300">
                        Back
                    </button>
                    <button
                        onClick={handleStart}
                        className="w-full bg-emerald-800 text-lg text-white font-bold py-2 px-4 rounded-lg hover:bg-emerald-900 transition duration-300">
                        Let's Start
                    </button>
                </div>
            </div>
        </div>

    )
}

export default Start
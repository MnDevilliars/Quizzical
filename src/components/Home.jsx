import React from 'react'
import { useNavigate } from 'react-router-dom';
import playClickSound from '../sound/sound.js';
import trophyImgUrl from '../assets/trophy.png'
import bulbImgUrl from '../assets/bulb.webp'
import friendsImgUrl from '../assets/friends.webp'


function Home() {

    const categories = [
        { id: "art-literature", category: "Art and Literature", imageIconURL: "https://englishpluspodcast.com/wp-content/uploads/2024/02/Literary-Characters-Quiz.jpg" },
        { id: "general-knowledge", category: "General Knowledge", imageIconURL: "https://www.euroschoolindia.com/wp-content/uploads/2024/07/GK-Questions-for-Class-5.webp" },
        { id: "science", category: "Science and Nature", imageIconURL: "https://png.pngtree.com/thumb_back/fw800/background/20240119/pngtree-kids-science-student-3d-design-image_15611523.jpg" },
        { id: "art", category: "Art and Literature", imageIconURL: "https://englishpluspodcast.com/wp-content/uploads/2024/02/Literary-Characters-Quiz.jpg" },
        { id: "general", category: "General Knowledge", imageIconURL: "https://www.euroschoolindia.com/wp-content/uploads/2024/07/GK-Questions-for-Class-5.webp" },
        { id: "literature", category: "Science and Nature", imageIconURL: "https://png.pngtree.com/thumb_back/fw800/background/20240119/pngtree-kids-science-student-3d-design-image_15611523.jpg" },

    ];

    const navigate = useNavigate()

    const handleButtonClick = () => {
        playClickSound();
        navigate('/quizzes');
    };

    return (
        <div className="relative min-h-screen w-full flex flex-col justify-center items-center text-center text-white">
            <div className="relative z-10 flex flex-col items-center justify-center h-full space-y-6 px-5 md:px-12 pt-10 pb-6">
                <h1 className="text-4xl sm:text-5xl font-bold tracking-wide">
                    Welcome to Quzzical
                </h1>
                <p className="text-xl sm:text-2xl font-medium">
                    Test your knowledge with fun and engaging quizzes. Get started now and challenge yourself!
                </p>


                <div className="space-y-4 sm:space-y-6">
                    <div className="flex items-center justify-start space-x-4">
                        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-indigo-600 shadow-xl">
                            <img
                                className='w-9'
                                src={trophyImgUrl} alt="Trophy" />

                        </div>
                        <div className="text-lg font-bold">Track Your Progress</div>
                    </div>
                    <div className="flex items-center justify-start space-x-4">
                        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-indigo-600 shadow-xl">
                            <img
                                className='w-10'
                                src={bulbImgUrl} alt="Bulb" />
                        </div>
                        <div className="text-lg font-semibold">Engaging Content</div>
                    </div>
                    <div className="flex items-center justify-start space-x-4">
                        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-indigo-600 shadow-xl">
                            <img
                                className='w-10'
                                src={friendsImgUrl} alt="Challenge" />
                        </div>
                        <div className="text-lg font-semibold">Challenge Your Friends</div>
                    </div>
                </div>

                <button
                    onClick={handleButtonClick}
                    className="px-6 py-3 bg-emerald-500 text-white text-lg font-bold rounded-lg shadow-lg mt-10 hover:bg-emerald-700 transition duration-300"
                >
                    Start Quiz
                </button>
            </div>
        </div>
    )
}

export default Home
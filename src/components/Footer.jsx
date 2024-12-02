import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import playClickSound from '../sound/sound';

function Footer() {

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const navigation = [
        { id: 1, nav: "Home", path: "/" },
        { id: 2, nav: "Quizzes", path: "/quizzes" },
        { id: 3, nav: "Categories", path: "/categories" },
        { id: 4, nav: "About Us", path: "/about-us" },
    ];

    return (
        <footer className="bg-emerald-900 text-white py-4 mt-0 bottom-0">
            <div className="max-w-screen-xl mx-auto px-4 text-center gap-2 flex flex-col md:flex-row justify-between items-center">
                <p className="text-lg font-semibold">Quizzical - The Ultimate Quiz Experience</p>
                <div className="justify-center space-x-6 hidden md:flex">
                    {navigation.map((item) => (
                        <Link
                            key={item.id}
                            to={item.path}
                            onClick={playClickSound}
                            className="text-base hover:text-emerald-300 transition font-bold"
                        >
                            {item.nav}
                        </Link>
                    ))}
                </div>
                <div className="text-sm">
                    <p>© 2024 <b>Quizzical</b>. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
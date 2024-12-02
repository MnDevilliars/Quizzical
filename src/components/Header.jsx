import React, { useState } from 'react'
import playClickSound from '../sound/sound'
import { NavLink } from 'react-router-dom';
import Logo from './Logo';

function Header() {

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
        <>
            <header className="bg-emerald-900 rounded-b-3xl text-white flex justify-between items-center p-4 md:px-14">
                <button
                    className="md:hidden p-2 focus:outline-none"
                    onClick={() => {
                        playClickSound()
                        toggleSidebar()
                    }}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>
                </button>

                <h2 className="text-xl font-bold">Quizzical</h2>
                <nav className="hidden md:flex justify-center space-x-6 text-white">
                    {navigation.map((item) => (
                        <NavLink
                            key={item.id}
                            to={item.path}
                            onClick={playClickSound}
                            className={({ isActive }) => `px-4 py-2 rounded text-md font-bold hover:text-emerald-900 hover:bg-emerald-400 ${isActive ? "text-emerald-900 bg-emerald-400" : "text-white"
                                }`}
                        >
                            {item.nav}
                        </NavLink>
                    ))}
                </nav>
                <div>
                    <Logo />
                </div>
            </header>

            <div
                className={`fixed inset-0 bg-black bg-opacity-50 z-10 transition-opacity duration-300 ${isSidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
                    }`}
                onClick={() => {
                    playClickSound()
                    toggleSidebar()
                }}
            ></div>

            <aside
                className={`fixed top-0 left-0 h-full w-64 bg-emerald-900 bg-opacity-90 text-white z-20 transform transition-transform duration-300 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
                    }`}
            >
                <button
                    className="absolute top-4 right-4 p-2 focus:outline-none"
                    onClick={() => {
                        playClickSound()
                        toggleSidebar()
                    }}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </button>
                <nav className="mt-16 flex flex-col gap-4 text-lg">
                    {navigation.map((item) => (
                        <NavLink
                            key={item.id}
                            to={item.path}
                            onClick={playClickSound}
                            className={({ isActive }) => `px-16 py-2 text-md font-bold hover:text-emerald-900 hover:bg-emerald-400 ${isActive ? "text-emerald-900 bg-emerald-400" : "text-white"
                                }`}
                        >
                            {item.nav}
                        </NavLink>
                    ))}
                </nav>
            </aside>
        </>
    )
}

export default Header
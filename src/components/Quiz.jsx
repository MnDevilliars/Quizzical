import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import playClickSound from '../sound/sound.js';
import GameContext from '../context/gameContext.js'
import litImgUrl from '../assets/literature.webp'
import gkImgUrl from '../assets/gk.webp'
import sciImgUrl from '../assets/science.jpg'

function Quiz() {
    const categories = [
        { id: "art-literature", index: 0, category: "Art and Literature", imageIconURL: litImgUrl },
        { id: "general-knowledge", index: 1, category: "General Knowledge", imageIconURL: gkImgUrl },
        { id: "science", index: 2, category: "Science and Nature", imageIconURL: sciImgUrl },
    ];

    const { setCategoryIndex } = useContext(GameContext)

    const handleSubmit = (index) => {
        playClickSound()
        setCategoryIndex(index)
    }

    return (

        <div className="flex items-center justify-center min-h-screen text-emerald-100 pb-4">
            <section className="p-4 px-5 w-full mx-auto flex flex-col items-center">
                <h3 className="text-2xl font-bold text-left w-full md:max-w-2xl">Categories</h3>
                <div className="flex flex-col gap-6 mt-4 w-full md:max-w-2xl">
                    {categories.map((item) => (
                        <NavLink
                            onClick={() => handleSubmit(item.index)}
                            to={`/${item.id}`}
                            key={item.id}
                            className="block p-4 border border-none rounded-lg shadow hover:shadow-[0_4px_6px_rgba(0,0,0,0.5)] transition bg-emerald-600"
                        >
                            <div>
                                <img
                                    src={item.imageIconURL || 'https://via.placeholder.com/150'}
                                    alt={item.category || 'Category Image'}
                                    className="w-full h-32 object-cover rounded shadow-[0_4px_6px_rgba(0,0,0,0.5)]"
                                />
                                <h4 className="mt-2 text-center text-emerald-50 text-xl font-bold">{item.category}</h4>
                            </div>
                        </NavLink>
                    ))}
                </div>
            </section>
        </div>

    );
}

export default Quiz
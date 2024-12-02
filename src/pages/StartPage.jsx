import React, { useContext } from 'react'
import { Start } from '../components/index.js'
import GameContext from '../context/gameContext.js';

function StartPage(){

    const category = [
        {
            "Entertainment: Japanese Anime & Manga": '31',
            "Entertainment: Cartoon & Animations": '32',
            "Entertainment: Comics": '29',
            "Art": '25',
            "Entertainment: Music": '12',
            "Entertainment: Books": '10'
        },
        {
            "General Knowledge": '9',
            "Geography": '22',
            "Sports": '21',
            "History": '23',
            "Vehicles": '28',
            "Celebrities": '26',
            "Animals": '27',
            "Politics": '24'
        },
        {
            "Science Mathematics": '19',
            "Science: Nature": '17',
            "Science: Computer": '18',
            "Science: Gadgets": '30'
        }
    ]

    const { categoryIndex } = useContext(GameContext);

    return (
        <>
            <Start categories={category[categoryIndex]} />
        </>
    )
}

export default StartPage
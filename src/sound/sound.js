import sound from '../assets/pop.mp3'

const playClickSound = () => {
    const audio = new Audio(sound); 
    audio.play();
};

export default playClickSound;
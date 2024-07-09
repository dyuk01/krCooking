import React, { useState, useEffect } from 'react';
import GameUI from '/src/components/GameUI';
import './phaser';

const App = () => {
    const [score, setScore] = useState(0);
    const [ingredients, setIngredients] = useState([]);

    useEffect(() => {
        const handleResourceCollected = (event) => {
            setIngredients((prevIngredients) => [...prevIngredients, event.detail]);
            setScore((prevScore) => prevScore + 10);
        };

        const handleStoreResource = () => {
            // Implement logic to handle storing resources and checking the correct ingredients
        };

        window.addEventListener('resource-collected', handleResourceCollected);
        window.addEventListener('store-resource', handleStoreResource);

        return () => {
            window.removeEventListener('resource-collected', handleResourceCollected);
            window.removeEventListener('store-resource', handleStoreResource);
        };
    }, []);

    return (
        <div className="app">
            <GameUI score={score} ingredients={ingredients} />
            <div id="phaser-game"></div>
        </div>
    );
};

export default App;
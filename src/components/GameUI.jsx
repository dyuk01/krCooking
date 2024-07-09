import React from 'react';

const GameUI = ({ score, ingredients }) => {
    return (
        <div className="game-ui">
            <h1>2D Pixel Survival Game</h1>
            <p>Score: {score}</p>
            <div className="ingredients">
                <h2>Ingredients Collected:</h2>
                <ul>
                    {ingredients.map((ingredient, index) => (
                        <li key={index}>{ingredient}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default GameUI;
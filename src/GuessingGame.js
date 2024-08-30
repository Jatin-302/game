// GuessingGame.js
import React, { useState } from 'react';
import { useAuth } from './Authcontext';
import { useNavigate } from 'react-router-dom';
import './GuessingGame.css';

const GuessingGame = () => {
    const [inputNumber, setInputNumber] = useState('');
    const [message, setMessage] = useState('');
    const { user, updateUserCredit } = useAuth();
    const navigate = useNavigate(); // For navigation

    const handleGuess = (guessType) => {
        const randomNumber = Math.floor(Math.random() * 10) + 1;
        const userNumber = parseInt(inputNumber);
        if (isNaN(userNumber)) {
            setMessage('Please enter a valid number.');
            return;
        }

        if ((guessType === 'less' && randomNumber < userNumber) || (guessType === 'greater' && randomNumber > userNumber)) {
            setMessage(`You win! The number was ${randomNumber}. ₹100 has been added to your credit.`);
            updateUserCredit(user.credit + 100);
        } else {
            setMessage(`You lose! The number was ${randomNumber}. ₹100 has been deducted from your credit.`);
        }
    };
    const handleEndGame = () => {
        // Navigate back to the main games screen
        navigate('/');
    };

    return (
        <div className="guessing-game-container">
            <h2>Guess the Number Game</h2>
            <p>Your Credit: ₹{user.credit}</p>
            <input
            type="number"
            placeholder="Enter a number (1-10)"
            value={inputNumber}
            min="0"
            max="10"
            onChange={(e) => {
                const value = Math.max(0, Math.min(10, Number(e.target.value)));
                setInputNumber(value);
                }
                }
/>
            <div className="buttons-container">
                <button onClick={() => handleGuess('less')}>Guess Less Than</button>
                <button onClick={() => handleGuess('greater')}>Guess Greater Than</button>
            </div>
            {message && <p className="message">{message}</p>}
            <button className="end-game-button" onClick={handleEndGame}>End Game</button> {/* End Game button */}
        </div>
    );
};

export default GuessingGame;

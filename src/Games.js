// Games.js
import React from 'react';
import { useAuth } from './Authcontext';
import { useNavigate } from 'react-router-dom';
import './Games.css';

const Games = () => {
    const { user, updateUserCredit, logout } = useAuth();
    const navigate = useNavigate();

    const playGame1 = () => {
      const cost = 100;
      if (user.credit >= cost) {
        const newCredit = user.credit - cost;
        updateUserCredit(newCredit);
        navigate('/guessing-game'); // Navigate to the guessing game
      } else {
        alert('Not enough credit!');
      }
    };

    const playGame2 = () => {
      const cost = 200;
      if (user.credit >= cost) {
        const newCredit = user.credit - cost;
        updateUserCredit(newCredit);
        // Add navigation or logic for Game 2 here
      } else {
        alert('Not enough credit!');
      }
    };

    return (
      <div className="games-container">
        <div className="games-header">
          <h2>Welcome, {user.username}</h2>
          <h3>Your Credit: ₹{user.credit}</h3>
          <button className="logout-button" onClick={logout}>Logout</button>
        </div>
        <div className="game-buttons">
          <button onClick={playGame1}>Play Game 1 (₹100)</button>
          <button onClick={playGame2}>Play Game 2 (₹200)</button>
        </div>
      </div>
    );
  };

export default Games;

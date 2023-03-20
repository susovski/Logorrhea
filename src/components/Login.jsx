//import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import avatar1 from "../images/logorrhea_avatar_1.png"
import avatar2 from "../images/logorrhea_avatar_2.png"
import avatar3 from "../images/logorrhea_avatar_3.png"
import { Link } from 'react-router-dom';

function Login({ handleNameChange, handleAvatarChange, name, avatar, avatarColor }) {

  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    if (name && avatar) {
      navigate("/room");
    }
  };

  return (



    <div className="Login">
      <div className="App-info"><Link to="/About">info</Link></div>
      <div className="Hero-headline">Unleash Your Inner Monster!</div>
      <p className="Hero-description">
        <b>Logorrhea</b> <i>(log·​or·​rhea)</i>: <i>excessive and often incoherent talkativeness or wordiness</i>. Perfect chat app for anyone who loves to talk, chat and express themselves in the most lively way possible.
        Our fluffy avatars will inspire you to unleash your inner monster and communicate your ideas and feelings like never before! Enter your name, choose your avatar and hit Enter!
      </p>
      <form className="Name-selector" onSubmit={handleSubmit}>
        <label>
          <input type="text" placeholder="Enter your name" value={name} onChange={handleNameChange} />
        </label>
        <br />
        <div className="Avatar-selector" >
          <div className="Avatar-choice">
            <label htmlFor="avatar1">
              <img src={avatar1} alt="Avatar 1" height={100} width={100} />
            </label>
            <input
              type="radio"
              id="avatar1"
              name="avatar"
              color='#fdcd8d'
              value={avatar1}
              checked={avatar === avatar1}
              onChange={handleAvatarChange}
            />
          </div>
          <div className="Avatar-choice">
            <label htmlFor="avatar2">
              <img src={avatar2} alt="Avatar 2" height={100} width={100} />
            </label>
            <input
              type="radio"
              id="avatar2"
              name="avatar"
              color='#fdcd8d'
              value={avatar2}
              checked={avatar === avatar2}
              onChange={handleAvatarChange}
            />
          </div>
          <div className="Avatar-choice">
            <label htmlFor="avatar3">
              <img src={avatar3} alt="Avatar 3" height={100} width={100} />
            </label>
            <input
              type="radio"
              id="avatar3"
              name="avatar"
              color='#fdcd8d'
              value={avatar3}
              checked={avatar === avatar3}
              onChange={handleAvatarChange}
            />
          </div>
        </div>
        <br />
        <button className="Enter-button" type="submit">Enter chat</button>
      </form>
    </div>
  );
}

export default Login;
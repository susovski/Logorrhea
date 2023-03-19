import './App.css';
import { useState } from 'react';
import Header from './components/Header';
import Room from './components/Room';
import Login from './components/Login';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import avatar1 from "./images/logorrhea_avatar_1.png"
import avatar2 from "./images/logorrhea_avatar_2.png"
import avatar3 from "./images/logorrhea_avatar_3.png"

function App(props) {

  const [name, setName] = useState('');
  const [avatar, setAvatar] = useState('');
  const [avatarColor, setAvatarColor] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleAvatarChange = (event) => {
    const selectedAvatar = event.target.value;
    setAvatar(selectedAvatar);
    setAvatarColor(event.target.color);

    switch (selectedAvatar) {
      case avatar1:
        setAvatarColor('#7ab6ae');
        break;
      case avatar2:
        setAvatarColor('#e9ada3');
        break;
      case avatar3:
        setAvatarColor('#fdcd8d');
        break;
      default:
        setAvatarColor('#786c7d');
    }
  };

  return (

    <Router>
      <Header />
      <main>
        <div className="App">
          <Routes>
            <Route path="/" element={
              <Login
                handleNameChange={handleNameChange}
                handleAvatarChange={handleAvatarChange}
                name={name}
                avatar={avatar}
              />} />

            <Route path="/room" element={
              <Room
                name={name}
                avatar={avatar}
                color={avatarColor}
              />} />
          </Routes>
        </div>
      </main>
    </Router>
  );
}

export default App;









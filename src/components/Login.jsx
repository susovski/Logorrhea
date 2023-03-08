import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";

function Login() {
  const [name, setName] = useState('');
  const [avatar, setAvatar] = useState('');

  const history = useNavigate();

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleAvatarChange = (event) => {
    setAvatar(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (name && avatar) {
      history.push({
        pathname: '/room',
        state: { name, avatar },
      });
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={handleNameChange} />
        </label>
        <br />
        <label>
          Avatar:
          <div>
            <input
              type="radio"
              id="avatar1"
              name="avatar"
              value="https://png.pngtree.com/png-clipart/20200701/original/pngtree-character-default-avatar-png-image_5407167.jpg"
              checked={avatar === 'https://png.pngtree.com/png-clipart/20200701/original/pngtree-character-default-avatar-png-image_5407167.jpg'}
              onChange={handleAvatarChange}
            />
            <label htmlFor="avatar1">
              <img src="https://png.pngtree.com/png-clipart/20200701/original/pngtree-character-default-avatar-png-image_5407167.jpg" alt="Avatar 1" height={60} width={60} />
            </label>
          </div>
          <div>
            <input
              type="radio"
              id="avatar2"
              name="avatar"
              value="https://simg.nicepng.com/png/small/115-1150821_default-avatar-comments-sign-in-icon-png.png"
              checked={avatar === 'https://simg.nicepng.com/png/small/115-1150821_default-avatar-comments-sign-in-icon-png.png'}
              onChange={handleAvatarChange}
            />
            <label htmlFor="avatar2">
              <img src="https://simg.nicepng.com/png/small/115-1150821_default-avatar-comments-sign-in-icon-png.png" alt="Avatar 2" height={60} width={60}  />
            </label>
          </div>
          <div>
            <input
              type="radio"
              id="avatar3"
              name="avatar"
              value="https://www.seekpng.com/png/small/115-1150053_avatar-png-transparent-png-royalty-free-default-user.png"
              checked={avatar === 'https://www.seekpng.com/png/small/115-1150053_avatar-png-transparent-png-royalty-free-default-user.png'}
              onChange={handleAvatarChange}
            />
            <label htmlFor="avatar3">
              <img src="https://www.seekpng.com/png/small/115-1150053_avatar-png-transparent-png-royalty-free-default-user.png" alt="Avatar 3" height={60} width={60}  />
            </label>
          </div>
        </label>
        <br />
        <Link to="/room"><button type="submit">Enter</button></Link>
        {/* <button type="submit"><link to="/room">Enter</link></button> */}
      </form>
    </div>
  );
}

export default Login;
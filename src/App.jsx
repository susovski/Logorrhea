import logo from './logo.svg';
import './App.css';
import Messages from './components/Messages';
import { useState } from 'react';
import Input from './components/Input';

function App(props) {


  //RANDOM NAME FUNCTION
  function randomName() {
    const adjectives = ["autumn", "hidden", "bitter", "misty", "silent", "empty", "dry", "dark", "summer", "icy", "delicate", "quiet", "white", "cool", "spring", "winter", "patient", "twilight", "dawn", "crimson", "wispy", "weathered", "blue", "billowing", "broken", "cold", "damp", "falling", "frosty", "green", "long", "late", "lingering", "bold", "little", "morning", "muddy", "old", "red", "rough", "still", "small", "sparkling", "throbbing", "shy", "wandering", "withered", "wild", "black", "young", "holy", "solitary", "fragrant", "aged", "snowy", "proud", "floral", "restless", "divine", "polished", "ancient", "purple", "lively", "nameless"];
    const nouns = ["waterfall", "river", "breeze", "moon", "rain", "wind", "sea", "morning", "snow", "lake", "sunset", "pine", "shadow", "leaf", "dawn", "glitter", "forest", "hill", "cloud", "meadow", "sun", "glade", "bird", "brook", "butterfly", "bush", "dew", "dust", "field", "fire", "flower", "firefly", "feather", "grass", "haze", "mountain", "night", "pond", "darkness", "snowflake", "silence", "sound", "sky", "shape", "surf", "thunder", "violet", "water", "wildflower", "wave", "water", "resonance", "sun", "wood", "dream", "cherry", "tree", "fog", "frost", "voice", "paper", "frog", "smoke", "star"];
    const adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
    const noun = nouns[Math.floor(Math.random() * nouns.length)];
    return adjective + noun;
  }



  //RANDOM COLOR FUNCTION
  function randomColor() {
    return '#' + Math.floor(Math.random() * 0xFFFFFF).toString(16);
  }


  //ARRAYEVI S PRIMJERIMAP
 /*  state = {
    messages: [
      {
        text: "This is a test message!",
        member: {
          color: "blue",
          username: "bluemoon"
        }
      }
    ],
    member: {
      username: randomName(),
      color: randomColor()
    }
  }
 */
  const [messages, setMessages] = useState ([
    {
      text: "This is a test message!",
      member: {
        color: "blue",
        username: "bluemoon"
      }
    }
  ])


  const [member, setMember] = useState (

    {
      username: randomName(),
      color: randomColor()
    }
  )



  const onSendMessage = (message) => {
    setMessages([...messages, { text: message, member }]);
  };
    


  return (
    <div className="App">

<div className="App-header">
        <h1>Logorrhea</h1>
      </div>




      <Messages messages={messages} currentMember={member} /> 

      <Input onSendMessage={onSendMessage}/>


    </div>
  );
}

export default App;

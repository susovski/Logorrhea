import Input from "./Input";
import Messages from "./Messages";
import { useState } from 'react';
import { useEffect } from "react";
import { useLocation } from 'react-router-dom';

const Room = (props) => {



  const location = useLocation();
  const { name, avatar } = location.state;



/////////////////------------------------------------------------------------

   //RANDOM NAME FUNCTION
  function randomName() {
    const adjectives = ["autumn", "hidden", "bitter", "misty", "silent", "empty", "dry", "dark", "summer", "icy", "delicate", "quiet", "white", "cool", "spring", "winter", "patient", "twilight", "dawn", "crimson", "wispy", "weathered", "blue", "billowing", "broken", "cold", "damp", "falling", "frosty", "green", "long", "late", "lingering", "bold", "little", "morning", "muddy", "old", "red", "rough", "still", "small", "sparkling", "throbbing", "shy", "wandering", "withered", "wild", "black", "young", "holy", "solitary", "fragrant", "aged", "snowy", "proud", "floral", "restless", "divine", "polished", "ancient", "purple", "lively", "nameless"];
    const nouns = ["waterfall", "river", "breeze", "moon", "rain", "wind", "sea", "morning", "snow", "lake", "sunset", "pine", "shadow", "leaf", "dawn", "glitter", "forest", "hill", "cloud", "meadow", "sun", "glade", "bird", "brook", "butterfly", "bush", "dew", "dust", "field", "fire", "flower", "firefly", "feather", "grass", "haze", "mountain", "night", "pond", "darkness", "snowflake", "silence", "sound", "sky", "shape", "surf", "thunder", "violet", "water", "wildflower", "wave", "water", "resonance", "sun", "wood", "dream", "cherry", "tree", "fog", "frost", "voice", "paper", "frog", "smoke", "star"];
    const adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
    const noun = nouns[Math.floor(Math.random() * nouns.length)];
    return adjective + noun;
  }

  //RANDOM COLOR FUNCTION-----------------------------------------------------------
  function randomColor() {
    return '#' + Math.floor(Math.random() * 0xFFFFFF).toString(16);
  }
 
  //DEFINICIJE STATEOVA--------------------------------------------------------------
  const [messages, setMessages] = useState([
    /* {
      text: "This is a test message!",
      member: {
        color: "blue",
        username: "bluemoon"
      }
    } */
  ])


   const [member, setMember] = useState(

    {
      username: props.member.username,
      color: randomColor()
    }
  ) 

  //const [member, setMember] = useState({});
  //const [messages, setMessages] = useState([]);
  const [drone, setDrone] = useState(null);
  const [room, setRoom] = useState(null);


  //DEFINICIJE STATEOVA--------------------------------------------------------------

  const onSendMessage = (message) => {
    //setMessages([...messages, { text: message, member }]);
    drone.publish({
      room: 'observable-room',
      message,
    });
  };

//sCQTtqgc9lORXtLw - Teina soba
//'APZQ06BmYVq7Oa5j'- Moja Soba
  useEffect(() => {
    const newDrone = new window.Scaledrone('APZQ06BmYVq7Oa5j', { data: member });
    setDrone(newDrone);
  }, [])

  useEffect(() => {
    console.log('ovdje nova poruka', messages)
  }, [messages])
 





  //DEFINICIJA SCALEDRONEA-------------------------------------------------------------

  useEffect(() => {
    if (drone) {
      //const newDrone = new window.Scaledrone('APZQ06BmYVq7Oa5j', { data: member });

      drone.on('open', (error) => {
        if (error) {
          console.error(error);
        } else {
          setMember({ ...props.member, id: drone.clientId });


          const newRoom = drone.subscribe('observable-room');
          setRoom(newRoom);

          //----New Room------------------------------------------------
          newRoom.on('data', (data, member) => {
            const newMessage = { member, text: data };
            setMessages((messages) => [...messages, newMessage]);
          });
          //----New Room------------------------------------------------
        }
      });

      // setDrone(newDrone);
    }
  }, [drone]);









    return (<>

    OVO JE ROOM
    
    <Messages messages={messages} currentMember={member} />
    <Input onSendMessage={onSendMessage} />
    


    </>)
}

export default Room;
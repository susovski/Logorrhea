import Input from "./Input";
import Messages from "./Messages";
import { useState } from 'react';
import { useEffect } from "react";


const Room = ({ name, avatar, color }) => {

  const [drone, setDrone] = useState(null);
  const [room, setRoom] = useState(null);
  const [messages, setMessages] = useState([])
  const [member, setMember] = useState(
    {
      username: name,
      avatar: avatar,
      color: color
    }
  )

  const onSendMessage = (message) => {
    //setMessages([...messages, { text: message, member }]);
    drone.publish({
      room: 'observable-room',
      message,
    });
  };

  useEffect(() => {
    const newDrone = new window.Scaledrone('APZQ06BmYVq7Oa5j', { data: member });
    setDrone(newDrone);
  }, [])

  useEffect(() => {
    if (drone) {
      drone.on('open', (error) => {
        if (error) {
          console.error(error);
        } else {
          setMember({ ...member, id: drone.clientId });
          const newRoom = drone.subscribe('observable-room');
          setRoom(newRoom);


          newRoom.on('data', (data, member) => {
            const newMessage = { member, text: data };
            setMessages((messages) => [...messages, newMessage]);
          });
        }
      });
    }
  }, [drone]);

  return (<>
    <div className="Room">
      <Messages messages={messages} currentMember={member} />
      <Input onSendMessage={onSendMessage} />
    </div>
  </>)
}

export default Room;
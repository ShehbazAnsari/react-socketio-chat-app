import React, { useState, useEffect } from 'react'
import queryString from 'query-string'
import io from 'socket.io-client'
import './Chat.css'
import ChatBox from '../ChatBox/ChatBox'

let socket

const Chat = ({ location }) => {

  //UseState Hooks for name & room
  const [name, setName] = useState('')
  const [room, setRoom] = useState('')
  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState([])

  //Constant Parameter
  const ENDPOINT = `https://react-socketio-chats-app.herokuapp.com/`

  //UseEffect Hooks for parsing name and room from JOIN component
  useEffect(() => {
    const { name, room } = queryString.parse(location.search)
    //Connecting to server side
    socket = io(ENDPOINT)
    setName(name)
    setRoom(room)

    //Three Parameters 1) name of socket , 2)Data or payload, 3)callback from server to client side
    socket.emit('join', { name, room }, () => {

    })

    return () => {
      socket.emit('disconnect')
      socket.off()
    }
  }, [ENDPOINT, location.search])

  useEffect(() => {
    socket.on('message', (message, callback) => {
      setMessages([...messages, message])
    })
  }, [messages])

  //Function for sending messages
  const sendMessage = (e) => {
    e.preventDefault()
    if (message) {
      socket.emit('sendMessage', message, () => setMessage(''))
    }

  }
  console.log(message, messages)

  return (
    <div>
      <ChatBox name={name} room={room} message={message} messages={messages} setMessage={setMessage} setMessages={setMessages} sendMessage={sendMessage} />
    </div>
  )
}

export default Chat


/*  <Container>
     <input
       type="text"
       className="form-control"
       onChange={(e) => setMessage(e.target.value)}
       value={message}
       onKeyPress={(e) => e.key === 'Enter' ? sendMessage(e) : null}
     />

   </Container> */
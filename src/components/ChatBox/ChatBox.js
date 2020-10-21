import React from 'react'
import './ChatBox.css'
import { Container } from 'react-bootstrap'
import ScrollToBottom from 'react-scroll-to-bottom'
import Message from '../Message/Message'

const ChatBox = ({ name, room, message, messages, setMessage, setMesages, sendMessage }) => {
  return (
    <div>
      <div className="chatOuterContainer">
        <div className="chatInnerContainer">
          <Container>
            <div className="card chatbox">

              <div className="card-header bg-primary text-white">
                <div className="d-flex">
                  <div className="mr-auto">
                    <i className="far fa-smile mr-2"></i>
                    <span className='lead'>{room}</span>
                  </div>
                  <div>
                    <a href="/" className="text-white" title="Exit Room">
                      <i className="fas fa-power-off"></i>
                    </a>
                  </div>
                </div>
              </div>


              <div className="card-body">
                <ScrollToBottom>
                  {messages.map((bodymessage, i) => <div key={i}><Message bodymessage={bodymessage} name={name} /></div>)}
                </ScrollToBottom>
              </div>

              <div className="card-footer">
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    onChange={(e) => setMessage(e.target.value)}
                    value={message}
                    onKeyPress={(e) => e.key === 'Enter' ? sendMessage(e) : null}
                  />
                  <div className="input-group-append">
                    <button className="input-group-text btn btn-primary" onClick={e => sendMessage(e)}>Send</button>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </div>
  )
}

export default ChatBox


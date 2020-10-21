import React from 'react'
import ReactEmoji from 'react-emoji'
import './Message.css'

const Message = ({ bodymessage: { user, text }, name }) => {

  let isSentbyCurrentUser = false

  const trimmedName = name.trim().toLowerCase()
  if (user === trimmedName) {
    isSentbyCurrentUser = true
  }
  return (
    isSentbyCurrentUser ?
      (
        <div className='d-flex justify-content-end'>
          <p>{ReactEmoji.emojify(text)} <small class="badge badge-pill badge-primary"> {user}</small></p>
        </div>
      )
      :
      (
        <div className='d-flex justify-content-start'>
          <p>{ReactEmoji.emojify(text)} <small class="badge badge-pill badge-secondary"> {user}</small></p>
        </div>
      )
  )
}
export default Message
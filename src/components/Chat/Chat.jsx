import './chat.css'
import React from 'react'
import EmojiPicker from 'emoji-picker-react'

const Chat = () => {
  const [open,setOpen] = React.useState(false)
  return (
    <div className='chat'>
      <div className="top">
        <div className="user">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <span>Aashvi</span>
            <p>Lorem ipsum dolor sit </p>
          </div>
        </div>
        <div className="icons">
          <img src="./phone.png" alt="" />
          <img src="./video.png" alt="" />
          <img src="./info.png" alt="" />
        </div>
      </div>
      <div className="center"></div>
      <div className="bottom">
        <div className="icons">
          <img src="./img.png" alt="" />
          <img src="./mic.png" alt="" />
        </div>
        <input type="text" placeholder='Type a Message....' />
        <div className="emoji">
          <img src="./emoji.png" alt="" onClick={()=>{setOpen(prev=>!prev)}} />
          <EmojiPicker open={open}/>
          <div className="sendButton">
            <button>send</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Chat
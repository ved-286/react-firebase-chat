import './chat.css'
import React from 'react'
import EmojiPicker from 'emoji-picker-react'
import { BsSend } from "react-icons/bs";

const Chat = () => {
  const [open, setOpen] = React.useState(false)
  const [text , setText] = React.useState('')


  const handleEmojiClick = (emojiData) => {
    setText(prev => prev + emojiData.emoji)
    setOpen(false)
  }

  const HandleSend = () => {
    if(text.length > 0) {
      console.log(text)
      setText('')
    }
  }
  return (
    <div className='chat'>
      <div className="top">
        <div className="user">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <span>jon Doe</span>
            <p>Lorem ipsum dolor sit </p>
          </div>
        </div>
        <div className="icons">
          <img src="./phone.png" alt="" />
          <img src="./video.png" alt="" />
          <img src="./info.png" alt="" />
        </div>
      </div>
      <div className="center">
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.</p>
            <span>Just Now</span>
          </div>
        </div>
        <div className="message own">ī
          <div className="texts">
            <img src="https://images.pexels.com/photos/2446760/pexels-photo-2446760.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.</p>
            <span>Just Now</span>
          </div>
        </div>
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.</p>
            <span>Just Now</span>
          </div>
        </div>
        <div className="message own">
          <div className="texts">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.</p>
            <span>Just Now</span>
          </div>
        </div>
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.</p>
            <span>Just Now</span>
          </div>
        </div>
      </div>
      <div className="bottom">
        <div className="emoji">
          <img src="./emoji.png" alt="" onClick={() => setOpen(prev => !prev)} />
          {open && (
            <div className="pickerContainer">
              <EmojiPicker open={open} onEmojiClick={handleEmojiClick} />
            </div>
          )}
        </div>
        <input type="text"
        onChange={e => setText(e.target.value)}
        value={text} 
        placeholder='Type a Message....' />
        <div className="icons">
          <img src="./img.png" alt="" />
          <img src="./mic.png" alt="" />
        </div>
        <div className="sendButton">
        <BsSend Fill onClick={HandleSend} />
        </div>
      </div>
    </div>
  )
}

export default Chat
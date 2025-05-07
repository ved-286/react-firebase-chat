import './details.css'
import React from 'react'

const Details = () => {
  return (
    <div className='detail'>
    <div className="user">
      <img src="./avatar.png" alt="" />
      <h2>Jon Doe</h2>
      <p>Lorem ipsum dolor sit amet consectetur.</p>
    </div>
    <div className="info">
      <div className="option">
        <div className="title">
          <span>Privecy % help</span>
          <img src="./arrowUp.png" alt="" />
        </div>
      </div>
      <div className="option">
        <div className="title">
          <span>Shared Photos</span>
          <img src="./arrowDown.png" alt="" />
        </div>
        <div className="photos">
         <div className="photoItem">
          <div className="photoDetail">
         <img src="https://images.pexels.com/photos/2446760/pexels-photo-2446760.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
         <span>photo_2024_2.png</span>
         </div>
         <img src="./download.png"  className="download-icon" alt="" />
         </div>
        </div>
      </div>
      <div className="option">
        <div className="title">
          <span>Shered Files</span>
          <img src="./arrowUp.png" alt="" />
        </div>
      </div>
      <button>Block User</button>
    </div>

    </div>
  )
}

export default Details
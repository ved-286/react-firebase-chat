import './list.css'

import React from 'react'
import UserInfo from './userInfo/UserInfo'
import ChatList from './chatList/chatList'


const List = () => {
  return (
    <div className='list'>
        <UserInfo />
        <ChatList />
        
    </div>
  )
}

export default List
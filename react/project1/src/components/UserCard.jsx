import React from 'react'

import Ananaya_Singh_Image from '../assets/Ananya_Singh_Image.jpg'
import './UserCard.css'

const  UserCard = (props) => {
  return (    

        <div className='user-container'>
        <p id='user-name'>{props.name}</p>
        <img id = 'user-image' src={Ananaya_Singh_Image} alt="image" />
        <p id='user-desc'>Hi my anme is Ananya</p>
        </div>

  )
}

export default UserCard
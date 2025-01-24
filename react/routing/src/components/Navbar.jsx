import React from 'react'
import {Link,NavLink} from 'react-router'
import './Navbar.css'

export const Navbar = () => {
  return (
    <div>
        <ul>
            <li>
                <NavLink to='/' className={({isActive}) => isActive? "active-link":""}>home</NavLink>
            </li>
            <li>
                <NavLink to='/about'className={({isActive}) => isActive? "active-link":""}>about</NavLink>
            </li>
            <li>
                <NavLink to='/dashboard'className={({isActive}) => isActive? "active-link":""}>dashboard</NavLink>
            </li>
        </ul>
    </div>
  )
}

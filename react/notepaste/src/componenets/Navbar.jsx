import React from 'react'
import { NavLink } from 'react-router-dom'

export const Navbar = () => {
  return (
    
    <div className="max-w-3xl mx-auto px-4 py-4">
        <NavLink to="/"
        className={({ isActive }) => 
          `px-4 py-2 rounded-lg transition-colors ${
            isActive 
              ? 'text-blue-600 font-medium bg-blue-50' 
              : 'text-slate-600 hover:bg-slate-100'
          }`
        }>
            Home
        </NavLink>

        <NavLink to="/pastes"
        className={({ isActive }) => 
          `px-4 py-2 rounded-lg transition-colors ${
            isActive 
              ? 'text-blue-600 font-medium bg-blue-50' 
              : 'text-slate-600 hover:bg-slate-100'
          }`
        }>
            Pastes
        </NavLink>
    </div>
    
  )
}

import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Navbar() {
    const navig=useNavigate();
    const handleHome=()=>{
        navig("/Home")
    }
    const handleAbout=()=>{
        navig("/About")
    }
  return (
    <div>
        <ul>
            <li onClick={handleHome}>HomeNav</li>
            <li onClick={handleAbout}>HomeNav</li>
        </ul>
    </div>
  )
}

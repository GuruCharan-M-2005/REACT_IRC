import React,{Routes,Route,BrowserRouter,Link ,Router} from 'react'
import Home from './Day_7_Routers/Home'
import About from './Day_7_Routers/About'
// import Navbar from './Day_7_Routers/Navbar'

{/*USE THIS BELOW CODES FOR APP.JS WHENEVER USED*/}
export default function Apps() {
  return (
    <div>
      {/*<Navbar/>             {/*DONT USE NAVBAR IF USE BOTH LINK LINES INSIDE ROUTES TAG*/}
     <BrowserRouter>
          <Link to="/Home">Link1</Link>                    {/*DONT USE BOTH  LINKS IF NAVBAR IS USED*/}   
          <Link to="/About">Link2</Link>
        <Routes>
           <Route path="/Home" element={<Home/>}></Route>
           <Route path="/About" element={<About/>}></Route>
         </Routes>
     </BrowserRouter> 
    </div>
  )
}

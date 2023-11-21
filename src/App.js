import React from 'react'
import './App.css'
import AxiosGet from './Day_8_Axios/AxiosGet'
import PostAxios from './Day_8_Axios/PostAxios'
import DeleteAxios from './Day_8_Axios/DeleteAxios'
import AxiosUpdate from './Day_8_Axios/AxiosUpdate'




export default function App() {
  return (
    <div>
      <AxiosGet/>
      <PostAxios/>
      <DeleteAxios/>
      <AxiosUpdate/>
    </div>
  )
}


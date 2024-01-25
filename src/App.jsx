import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from '../Components/Navbar'
import Feed from '../Components/Feed'
import Widget from '../Components/Widget'
import Profile from './Profile';
function App() {
  return (
    <body>
      <BrowserRouter>
        <div className="app">
          <Navbar />
          <Routes>
            <Route path="/"  element= {<Feed/>}/>
            {/* <Route path="/explore">Explore</Route>
            <Route path="/notification" >Notification</Route>
            <Route path="/message" >Message</Route>
            <Route path="/mookmarks" >Bookmarks</Route>
            <Route path="/lists" >Lists</Route> */}
            <Route path="/profile"element={<Profile/>} ></Route>
            {/* <Route path="/more" >More</Route> */}
          </Routes>
          {/* <Feed /> */}
          <Widget />
        </div >
      </BrowserRouter>


    </body >
  )
}

export default App

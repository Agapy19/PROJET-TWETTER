import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Tweet from '../Components/Tweet'
import Container from '../Components/Actions'
import Actions from '../Components/Actions'
import Navbar from '../Components/Navbar'
import Feed from '../Components/Feed'
// import Squid from '../Components/Squid'
// import Follow from '../Components/Follow'
import Widget from '../Components/Widget'
// import Widget from '../Components/Widget'
// import Button from '../Components/Button'


const data = [9, 9, 0];

function App() {


  return (
    <body>
      <div className="app">
        <div className="nav">
          <Navbar logo="Images/logotwitter.png" />
          <Navbar nameStyle="nav-bar__option" icon="Images/Home-Fill.png" name="Home" />
          <Navbar nameStyle="nav-bar__option" icon="Images/Explore.png" name="Explore" />
          <Navbar nameStyle="nav-bar__option" icon="Images/Notifications.png" name="Notification" />
          <Navbar nameStyle="nav-bar__option" icon="Images/Messages.png" name="Messages" />
          <Navbar nameStyle="nav-bar__option" icon="Images/Bookmarks.png" name="Bookmarks" />
          <Navbar nameStyle="nav-bar__option" icon="Images/Lists.png" name="Lists" />
          <Navbar nameStyle="nav-bar__option" icon="Images/Profile.png" name="Profile" />
          <Navbar nameStyle="nav-bar__option" icon="Images/More.png" name="More" />
          <button class="btn">Tweet</button>
        </div>
        {/* TWEET */}
        <Feed/>
        {/* WIDGETS */}
        <Widget/>
      </div >

    </body>
  )
}

export default App

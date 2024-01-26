import React, { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from '../Components/Navbar'
import Feed from '../Components/Feed'
import Widget from '../Components/Widget'
import Profile from './Profile';
function App() {
  const [tweets, setTweets] = useState([]);
  useEffect(() => {
    fetchData();
  }, [])
  const fetchData = async () => {
    await fetch('https://jsonplaceholder.typicode.com/tweets')
      .then((res) => res.json)
      .then((data) => setTweets(data))
      .catch((err) => {
        console.log(err);
      })
  }
  console.log(tweets);
  return (

    <body>
      <BrowserRouter>
        <div className="app">
          <Navbar />
          <Routes>
            <Route path="/" element={<Feed />} />
            <Route path="/profile" element={<Profile />} ></Route>
          </Routes>
          {/* {
            tweets.map((tweet) => (
              tweet
            ))
          } */}
          <Widget />
        </div >
      </BrowserRouter>


    </body >
  )
}

export default App

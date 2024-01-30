import React, { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from '../Components/Navbar'
import Feed from '../Components/Feed'
import Widget from '../Components/Widget'
import Profile from './Profile';
import axios from 'axios';
function App() {
  const [persons, setPersons] = useState([]);
  useEffect(() => {
      axios.get('https://my-json-server.typicode.com/amare53/twiterdb/users')
          .then((res) => {
              console.log(res.data);
              setPersons(res.data)
          })
  }, [])
  return (


    <div className="app">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Feed />} />
          <Route path="/profile" element={<Profile />} ></Route>
        </Routes>
        <Widget />
      </BrowserRouter>

    </div>

  )
}

export default App

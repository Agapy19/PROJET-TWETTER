import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Tweet from '../Components/Tweet'
import Container from '../Components/Actions'
import Actions from '../Components/Actions'

const data = [9, 9, 0];

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="timeline">
        <div className="tweets">
          <div className="header">
            <div className="page-title">
              <h3>Home</h3>
            </div>
            <div className="top-tweet">
              <img src="Images/Top-Tweets.svg" alt="" />
            </div>
          </div>
        </div>
        <div className="tweet-editor">
          <img src="Images/Profile-Photo.png" alt="" />
          <div className="tweet-editor__form">
            <div className="tweet-editor__input">
              <input type="text" placeholder="What's happening?" />
            </div>
            <div className="tweet-editor__buttons">
              <Actions styleName="tweet-editor__actions"/>
              <button className="button">Tweet</button>
            </div>
          </div>
        </div>
        <Tweet src="Images/cnn-Profile-Photo.png" p="President Joe Biden tooded the new agreement reached with the european Union to ease
                Trump-era tariffis on alluminum and steel as a major breakthroutghthat would serve to
                both strengthen the US steel industry and combat the global climate crisis" title="CNN" reply="57" epingle="144" like="184" />
        <div className="tweet-content">
     g     <Tweet src="Images/newyork.png" p="Gardening boomed during the pandemic. Six Black writers share how it has helped them re-establish, and reimagine, a connection to cultivation and the land.
        " title="The New York Times" image="Images/Img.png" reply="19" epingle="48" like="482" />
        </div>
        <Tweet src="Images/logotwitter.png" p="Big NEWS lol still Twitter jk" title="Twitter" reply="6.8K" epingle="36.8K" like="267.1K" />
        <Tweet src="Images/logotwitter.png" p="hello litterally everyone" title="Twitter" reply="118.7K" epingle="785.4K" like="3.3M" />
        <Tweet src="Images/logotwitter.png" p="hello litterally everyone" title="Twitter" image="Images/Img.png" reply="118.7K" epingle="785.4K" like="3.3M" />
        <Tweet src="Images/logotwitter.png" p="hello litterally everyone" title="Twitter" />
      </div>
    </>
  )
}

export default App

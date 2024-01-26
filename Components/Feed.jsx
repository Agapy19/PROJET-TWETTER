import React from 'react'
import BoxTweet from './BoxTweet';
import Post from './Post';

// import './Feed.css'
function Feed() {
    return (
        <div className="timeline ">
            <div className="tweets">
                {/* Home */}
                <div className="header">
                    <div className="page-title">
                        <h2>Home</h2>
                    </div>
                    <div className="top-tweet">
                        <img src="Images/top-Tweets.svg" alt="" />
                    </div>

                </div>
                {/* Tweet box */}
                <BoxTweet />
            </div>
            {/* Post */}
            <Post/>
             {/* <Post avatar="Images/cnn-Profile-Photo.png" name="CNN" userName="@CNN" paragraph="President Joe Biden tooded the new agreement reached with the european Union to ease
                Trump-era tariffis on alluminum and steel as a major breakthroutghthat would serve to
                both strengthen the US steel industry and combat the global climate crisis" reply="57" epingle="144" like="184" />
            <Post avatar="Images/newyork.png" name="The New York Times" userName="@nytimes" paragraph="Gardening boomed during the pandemic. Six Black writers share how it has helped them re-establish, and reimagine, a connection to cultivation and the land" image="Images/Img.png" reply="19" epingle="48" like="482" />
            <Post avatar="Images/logotwitter.png" name="Twitter" userName="@Twitter" paragraph="Big NEWS lol still Twitter jk" reply="6.8K" epingle="36.8K" like="267.1K" />
            <Post avatar="Images/logotwitter.png" name="Twitter" userName="@Twitter" paragraph="Big NEWS lol still Twitter jk" reply="118.7K" epingle="785.4K" like="3.3M" />
            <Post avatar="Images/logotwitter.png" name="Twitter" userName="@Twitter" paragraph="Big NEWS lol still Twitter jk" reply="118.7K" epingle="785.4K" like="3.3M" image="Images/Img.png"/>  */}
        </div>
    )
}
export default Feed;
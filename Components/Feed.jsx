import React from 'react'
import BoxTweet from './BoxTweet';
import Post from './Post';
import axios from 'axios';
import  { useState, useEffect } from 'react';
function Feed() {
    const [tweets, setTweets] = useState([]);
    useEffect(()=>{
        axios.get('https://my-json-server.typicode.com/amare53/twiterdb/posts')
        .then((res) =>{
            console.log(res);
           setTweets(res.data)
        })
        // .catch((error) => {
        //     console.log(error);
        // } )
    },[])
   
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
            {tweets.map((item)=>{
                <Post titre={item.userId} avatar={item.url} text={item.body} retweets={item.repost} />
            })}
        </div>
    )
}
export default Feed;
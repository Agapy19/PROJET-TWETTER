import React from 'react'
import BoxTweet from './BoxTweet';
import Post from './Post';
import axios from 'axios';
import { useState, useEffect } from 'react';
function Feed() {
    const [tweets, setTweets] = useState([]);
    useEffect(() => {
        axios.get('https://my-json-server.typicode.com/amare53/twiterdb/posts')
            .then((res) => {
                console.log(res.data);
                setTweets(res.data)
            })
    }, [])
    const [users, setUsers] = useState([]);
    useEffect(() => {
        axios.get('https://my-json-server.typicode.com/amare53/twiterdb/users')
            .then((res) => {
                console.log(res.data);
                setUsers(res.data)
            })
    }, [])

    return (

        <div className="feed ">
            {/* Home */}
            <div className="feed-header">
                <h2>Home</h2>
                <div className="top-tweet">
                    <img src="/src/Images/top-Tweets.svg" alt="" />
                </div>
            </div>
            {/* Tweet box */}
          
            <BoxTweet  />
           
            {/* Post */}
            {tweets.map((item) =>
            
                <Post userName={users.find((user) => user.id == item.userId)?.username} id={item.userId} avatar={users.find((user) => user.id == item.userId)?.profil} text={item.body} retweets={item.repost} image={item.url} nom={users.find((user) => user.id == item.userId)?.name} />
            )}
        </div>
    )
}
export default Feed;
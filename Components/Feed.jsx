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
            {tweets.map((item) =>
                <Post userName={users.find((user) => user.id==item.userId)?.username}  id={item.userId} avatar={users.find((user) => user.id==item.userId)?.profil} text={item.body} retweets={item.repost} image={item.url} nom={users.find((user) => user.id==item.userId)?.name} />
            )}
        </div>
    )
}
export default Feed;
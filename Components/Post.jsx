import { useState } from "react";
import Json from '/src/tweets-x.json'



function Post(props) {
    const  {
        avatar,
        titre,
        id,
        text,
        image,
        replies,
        retweets

    }= props
    const [count, setCount] = useState(0);
    const [like, setLike] = useState(false);
    const handleClick = () => {
        setCount(count + (like ? -1 : 1));
        console.log(count);
        setLike(!like)



    }


    return (
        <div className="Tweet">
            <div className="tweet-profile">
                <img src={avatar} alt="" />
                <h2> {titre} </h2>
                <div className="tweet-profile__verified">
                    {/* {(tweet.isVerified == true) && <img src="Images/verified.png" alt="" />} */}

                </div>

                {/* <span>  {FormData(tweet.date)}min </span> */}
            </div>
            <span>@{id} </span>
            <div className="tweet-image">
                <p> {text} </p>
                {(image)} && <img src={image} alt="" />
            </div>
            <div className="tweet-actions">
                <img src="Images/reply.png" alt="" />
                <p> {replies} </p>
                <img src="Images/icon-epingle.png" alt="" />
                <p> {retweets} </p>
                {!like && <img onClick={handleClick} src="Images/icon-like.png" alt="" />}
                {like && <img onClick={handleClick} src="Images/heart-solid.svg" alt="" className="icon" />}
                <span>{count} </span>
                {/* <p> {tweet.favorites} </p> */}
                <img src="Images/telecharge.png" alt="" />
            </div>

        </div >
    );
}
export default Post;
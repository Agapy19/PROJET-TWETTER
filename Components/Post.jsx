import { useState } from "react";
import Json from '/src/tweets-x.json'

function Post(props) {
    const [count, setCount] = useState(0);
    const [like, setLike] = useState(false);
    const handleClick = () => {
        setCount(count + (like ? -1 : 1));
        console.log(count);
        setLike(!like)

    }
    return Json.map((tweet) => (
        <div className="Tweet">
            <div className="tweet-profile">
                <img src={tweet.author_avatar} alt="" />
                <h2> {tweet.source} </h2>
                <div className="tweet-profile__verified">
                    {(tweet.isVerified == true) && <img src="Images/verified.png" alt="" />}
                    <span>@{tweet.id} </span>
                </div>
              
            </div>

            <div className="tweet-image">
                <p> {tweet.text} </p>
                {(tweet.image)} && <img src={tweet.image} alt="" />
            </div>
            <div className="tweet-actions">
                <img src="Images/reply.png" alt="" />
                <p> {props.reply} </p>
                <img src="Images/icon-epingle.png" alt="" />
                <p> {props.epingle} </p>
                {!like && <img onClick={handleClick} src="Images/icon-like.png" alt="" />}
                {like && <img onClick={handleClick} src="Images/heart-solid.svg" alt="" className="icon" />}
                <span>{count} </span>
                <img src="Images/telecharge.png" alt="" />
            </div>

        </div >
    ));
}
export default Post;
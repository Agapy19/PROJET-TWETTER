import { useState } from "react";
import Json from '/src/tweets-x.json'

function Post(props) {
    const  {
        avatar,
        userName,
        text,
        image,
        replies,
        retweets,
        nom

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
                <h2> {nom} </h2>
                <div className="tweet-profile__verified">
                </div>
            </div>
            <span>@{userName} </span>
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
                <img src="Images/telecharge.png" alt="" />
            </div>

        </div >
    );
}
export default Post;
import { useState } from "react";

function Post(props) {
    const [count, setCount] = useState(0);
    const [like, setLike] = useState(false);
    const handleClick = () => {
       setCount(count + (like ? -1 : 1) );
        console.log(count);
        setLike(!like)

    }
    return (
        <div className="Tweet">
            <div className="tweet-profile">
                <img src={props.avatar} alt="" />
                <h3> {props.name} </h3>
                <div className="tweet-profile__verified">
                    <img src="Images/verified.png" alt="" />
                    <span>{props.userName} </span>
                </div>
            </div>
            <p> {props.paragraph} </p>
            <div className="tweet-image">
                <img src={props.image} alt="" />
            </div>
            <div className="tweet-actions">
                <img src="Images/reply.png" alt="" />
                <p> {props.reply} </p>
                <img src="Images/icon-epingle.png" alt="" />
                <p> {props.epingle} </p>
                {!like && <img onClick={handleClick} src="Images/icon-like.png" alt="" /> }
                { like && <img onClick={handleClick} src="Images/heart-solid.svg" alt="" className="icon"/> }
                <span>{count} </span>
                <img src="Images/telecharge.png" alt="" />
            </div>

        </div >
    )
}
export default Post;
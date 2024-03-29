import { useState } from "react"
function Post({ avatar, userName, text, image, replies, retweets, nom }) {

    const [count, setCount] = useState(0);
    const [like, setLike] = useState(false);
    const handleClick = () => {
        setCount(count + (like ? -1 : 1));
        console.log(count);
        setLike(!like)

    }
    return (
        <div className="post">
            <div className="photo">
                <img src={avatar} alt="" />
            </div>
            <div className="post-body">
                <div className="post-header">
                    <div className="post-headerText">

                        <h3>
                            {nom}

                        </h3>
                        <span className="post-headerSpecial">
                            <img src="/src/Images/verified.png" alt="" className="post-badge" />
                            <span>@{userName} </span>
                        </span>
                    </div>
                    <div className="post-headerDescription">
                        <p>{text}</p>
                    </div>
                </div>
                <div className="post-img">
                    {(image)} && <img src={image} alt="" />
                </div>

                <div className="post-footer">
                    <img src="src/Images/reply.png" alt="" />
                    <p> {replies} </p>
                    <img src="/src/Images/icon-epingle.png" alt="" />
                    <p> {retweets} </p>
                    {!like && <img onClick={handleClick} src="src/Images/icon-like.png" alt="" />}
                    {like && <img onClick={handleClick} src="src/Images/heart-solid.svg" alt="" className="icon" />}
                    <span>{count} </span>
                    <img src="/src/Images/telecharge.png" alt="" />
                </div>
            </div>

        </div >
    );
}
export default Post;
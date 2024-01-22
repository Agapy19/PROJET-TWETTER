function Post(props
    // name,
    // userName,
    // Verified,
    // timestamp,
    // paragraph,
    // image,
    // avatar

) {
    return (
        <div className="tweet">
            <div className="tweet-profile">
                <img src={props.avatar} alt="" />
                <h3> {props.name} </h3>
                <div className="tweet-profile__verified">
                    <img src="Images/Verified.png" alt="" />
                    <span>{props.userName} </span>
                </div>
            </div>
            <p> {props.paragraph} </p>
            <div className="tweet-image">
                <img src={props.image} alt="" />
            </div>
            <div className="tweet-actions">
                <img src="Images/Reply.png" alt="" />
                <p> {props.reply} </p>
                <img src="Images/icon-epingle.png" alt="" />
                <p> {props.epingle} </p>
                <img src="Images/icon-like.png" alt="" />
                <p> {props.like} </p>
                <img src="Images/buton-telecharge.png" alt="" />
            </div>
            
        </div >
    )
}
export default Post;
export default function Tweet(props) {
    return (
        <div className="tweet">
            <div className="tweet-profile">
                <img src={props.src} alt="" />
                <h3> {props.title} </h3>
                <div className="tweet-profile__verified">
                    <img src="Images/Verified.png" alt="" />
                </div>
            </div>
            <p> {props.p} </p>
            <div className="tweet-image">
                <img src={props.image} alt="" />
            </div>
            <div className="tweet-actions">
                <img src="Images/Reply.png" alt="" />
                <span> {props.reply} </span>
                <img src="Images/icon-epingle.png" alt="" />
                <span> {props.epingle} </span>
                <img src="Images/icon-like.png" alt="" />
                <span> {props.like} </span>
                <img src="Images/buton-telecharge.png" alt="" />
            </div>
        </div>


    )
}

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
                <img src="Images/reply.png" alt="" />
                <span> {props.reply} </span>
                <img src="Images/icon-epingle.png" alt="" />
                <span> {props.epingle} </span>
                <img src="Images/heart-solid.svg" alt="" className='icon' />
                <span> {props.like} </span>
                <img src="Images/telecharge.png" alt="" />

            </div>
        </div>


    )
}
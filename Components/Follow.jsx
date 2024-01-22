export default function Follow(props) {
    return (
        <div className="mytweet">
            <div className="mytweet-profile">
                <div className="mytweet-profile__img">
                <img src={props.image} alt="" />
                    <button className="btn-follow">Follow</button>
                </div>
                <h4> {props.titre} </h4>
                <div className="tweet-profile__verified">
                    <img src="Images/Verified.png" alt="" />
                </div>
            </div>
            <span> {props.p} </span>
        </div>

    )
}
export default function Follow(props) {
    return (

        <div>
            <div className="mytweet-profile">
                <div className="mytweet-profile__img">
                    <img src={props.image} alt="" />
                </div>
                <h4> {props.titre} </h4>

                <div className="tweet-profile__verified">
                    <img src="/src/Images/verified.png" alt="" />
                </div>
                {/* <span> {props.p} </span> */}
                <button className="btn-follow">Follow</button>

            </div>
         

        </div>

    )
}
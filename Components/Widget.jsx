import Follow from "./Follow";
import Squid from "./Squid";
function Widget() {
    return (
        <div className="widgets">
            <div className="contain">
                <div className="widgets__input">
                    <img src="src/Images/search.png" alt="" />
                    <input type="text" placeholder='search Twetter' />
                </div>
                <div className="widgets__widget-contain">
                    <div className="widget-contain__trend">
                        <div className="widget-contain-trend__title">
                            <h2>Trend for you</h2>
                        </div>
                        <div className='widget-contain-trend__icon'>
                            <img src="src/Images/settings.png" alt="" />
                        </div>
                    </div>
                    <Squid />
                    <Squid />

                    <button className="mybtn">Show more</button>
                </div>
                <div className="mytweet">
                    <h2>How to follow</h2>
                    <Follow image="src/Images/cnn-Profile-Photo.png" titre="CNN" p="@CNN" />
                    <Follow image="src/Images/newyork.png" titre="New" p="@nytimes" />
                    <button className="mybtn">Show more</button>

                </div>
            </div>
        </div>
    )
}
export default Widget;
import Follow from "./Follow";
import Squid from "./Squid";
function Widget() {
    return (
        <div className="widgets">
            <div className="widgets__input">
                <img src="Images/Search.png" alt="" />
                <input type="text" placeholder='search Twetter' />
            </div>
            <div className="widgets__widget-contain">
                <div className="widget-contain__trend">
                    <div className="widget-contain-trend__title">
                        <h2>Trend for you</h2>
                    </div>
                    <div className='widget-contain-trend__icon'>
                        <img src="Images/Settings.png" alt="" />
                    </div>
                </div>
                <Squid />
                <Squid />
                <Squid />
                <Squid />
               <button className="mybtn">Show more</button>
            </div>
            <Follow image="Images/cnn-Profile-Photo.png" titre="CNN" p="@CNN"/>
            {/* <Follow image="Images/newyork.png" titre=" New York Times" p="@nytimes"/> */}
        </div>
    )
}
export default Widget;
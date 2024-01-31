import Actions from "./Actions";
function TweetBox() {
   
    return (
        <div className="boxtweet">
            <form>
                <div className="boxtweet__input">
                    <div className="photo">
                        <img src={"/src/Images/aga.jpeg"} alt="" />
                    </div>
                    <input type="text" placeholder="What's happening?" />
                </div>
                <div className="boxtweet__buttons">
                    <Actions styleName="boxtwet__actions" />
                    <button className="button">Tweet</button>
                </div>
            </form>
        </div>
    )
}
export default TweetBox;
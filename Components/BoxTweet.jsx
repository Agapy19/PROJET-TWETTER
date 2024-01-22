import Actions from "./Actions";
function TweetBox() {
    return (
        <div className="tweet-editor">
            <form>
                <div className="tweet-editor__input">
                    <div className="avatar">
                        <img src="Images/Profile-Photo.png" alt="" />
                    </div>
                    <input type="text" placeholder="What's happening?" />
                </div>
                <div className="tweet-editor__buttons">
                    <Actions styleName="tweet-editor__actions" />
                    <button className="button">Tweet</button>
                </div>
            </form>
        </div>
    )
}
export default TweetBox;
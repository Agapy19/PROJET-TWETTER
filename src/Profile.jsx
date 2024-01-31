import Follow from "../Components/Follow";
import ProfileNav from "../ProfileNav";
function Profile({ profile, nom, paragraph, photo, email, join, userName }) {
    return (

        <div className="profile-header">
            <div className="profile-header__prem">
                <img src="src/Images/arrow-left-solid.svg" alt="" />
                <h1>{nom} </h1>
                {/* <img src="src/Images/Private.png" alt="" /> */}
            </div>
            <div className="profile-header__duo">

            </div>

            <div className="profile-header__image">
                <img src={profile} alt="" className="profile" />
                <button>Edit profil</button>
            </div>
            <div className="profile-header__tri">
                <div className="profile-header__title">
                    <h2>{userName}</h2>
                    <img src="src/Images/Private.png" alt="" />
                </div>
                <p>{email}</p>
                <p>{join}</p>
            </div>
            <div className="profile-nav">
            <ProfileNav />
            </div>
            <div className="profile-header__post">
                <h2>How to follow</h2>
                <Follow image="src/Images/cnn-Profile-Photo.png" titre="CNN" p="@CNN" />
                <Follow image="src/Images/newyork.png" titre="New" p="@nytimes" />
            </div>
        </div>

    )
}
export default Profile;

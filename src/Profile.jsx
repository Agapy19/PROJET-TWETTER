//  import './Profile.css'
// import './Profile.css'
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
                <button>Editer le profile</button>
            </div>
            <div className="profile-header__tri">
                <div className="profile-header__title">
                    <h2>{userName}</h2>
                    <img src="src/Images/Private.png" alt="" />
                </div>
                <p>{email}</p>
                <p>{join}</p>
            </div>
        </div>
    )
}
export default Profile;

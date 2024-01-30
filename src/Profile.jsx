//  import './Profile.css'
// import './Profile.css'
function Profile({profile, nom, paragraph, photo, email,  join}) {
    return (

        <div className="profile-header">
            <div className="profile-header__prem">
                <img src="src/Images/arrow-left-solid.svg" alt="" />
                <h1>{nom} </h1>
                <img src="Images/Private.png" alt="" />
            </div>

            <div className="profile-header__image">
                <img src={profile} alt="" className="profile" />
                <button className="btn-config">Editer le profile</button>
            </div>
            <div className="profile-header__title">
                <h2>nom</h2>
                <img src="src/Images/Private.png" alt="" />
            </div>
            <p>{email}</p>
            <p>{join}</p>
            <img src={photo} alt="" />
        </div>
    )
}
export default Profile;

//  import './Profile.css'
// import './Profile.css'
function Profile() {
    return (

        <div className="profile-header">
            <div className="profile-header__prem">
                <img src="Images/arrow-left-solid.svg" alt="" />
                <h1>Mafo Agapy</h1>
                <img src="Images/Private.png" alt="" />
            </div>

            <div className="profile-header__image">
                <img src="Images/aga.jpeg" alt="" className="profile" />
                <button className="btn-config">Editer le profile</button>
            </div>
            <div className="profile-header__title">
                <h2>Mafo Agapy</h2>
                <img src="Images/Private.png" alt="" />
            </div>
            <p>@Agapymafo</p>
            <p>Inscris en 2024</p>
            <img src="Images/agaa.jpeg" alt="" />
        </div>
    )
}
export default Profile;
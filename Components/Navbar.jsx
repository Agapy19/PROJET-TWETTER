export default function Navbar(props) {
    return (
        <div className="navbar">
            <div className="nave-bar_logo">
            <img src={props.logo} alt="" />
            </div>
            <div className="nav-bar__option">
                <img src={props.icon} alt="" />
                <h2>{props.name} </h2>
            </div>
        </div >


    )

}
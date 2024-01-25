import { Link } from 'react-router-dom'
import './Navbar.css'
function Navbar() {
    return (
        <div className="nav-bar">
            <div className="contain">
                <header>
                    <img src="Images/logotwitter.png" alt="" />
                </header>
                <>
                <nav>
                    <Link to="" activeClassName="selected">
                        <span> <img src="Images/home-Fill.png" alt="" />Home</span>
                    </Link>
                    <Link activeClassName="selected">
                        <span> <img src="Images/Explore.png" alt="" />Explore</span></Link>
                    <Link activeClassName="selected">
                        <span><img src="Images/notifications.png" alt="" />Notifications</span></Link>
                    <Link activeClassName="selected">
                        <span><img src="Images/messages.png" alt="" />Messages</span></Link>
                    <Link activeClassName="'selected'">
                        <span><img src="Images/Bookmarks.png" alt="" />Bookmarks</span></Link>
                    <Link activeClassName="selected">
                        <span><img src="Images/Lists.png" alt="" />Lists</span></Link>
                    <Link to="/profile" activeClassName="selected">
                        <span><img src="Images/profile.png" alt="" />Profile</span>
                    </Link>
                    <Link activeClassName="selected">
                        <span><img src="Images/more.png" alt="" />More</span>
                    </Link>
                    </nav>
                </>
                <button className='tweet'>Tweet</button>


                <footer>
                    <button className='account'>
                        <div className="photo">
                            <img
                                src="Images/aga.jpeg"
                                alt="" />
                        </div>
                        <div>
                            <div className='name'>Agapy Mafo</div>
                            <div className='username'>@agapymk</div>
                        </div>
                    </button>
                </footer>
            </div>
        </div>
    )
}
export default Navbar;
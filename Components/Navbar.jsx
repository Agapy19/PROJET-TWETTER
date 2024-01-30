import { Link } from 'react-router-dom'
import './Navbar.css'
function Navbar() {
    return (
        <div className="nav-bar">
            <div className="contain">
                <header>
                    <img src="/src/Images/logotwitter.png" alt="" />
                </header>
                <>
                    <nav>
                        <Link to="" activeClassName="selected">
                            <span> <img src="/src/Images/home-Fill.png" alt="" />Home</span>
                        </Link>
                        <Link activeClassName="selected">
                            <span> <img src="/src/Images/Explore.png" alt="" />Explore</span></Link>
                        <Link activeClassName="selected">
                            <span><img src="/src/Images/notifications.png" alt="" />Notifications</span></Link>
                        <Link activeClassName="selected">
                            <span><img src="/src/Images/messages.png" alt="" />Messages</span></Link>
                        <Link activeClassName="'selected'">
                            <span><img src="/src/Images/Bookmarks.png" alt="" />Bookmarks</span></Link>
                        <Link activeClassName="selected">
                            <span><img src="/src/Images/Lists.png" alt="" />Lists</span></Link>
                        <Link to="/profile" activeClassName="selected">
                            <span><img src="/src/Images/profile.png" alt="" />Profile</span>
                        </Link>
                        <Link activeClassName="selected">
                            <span><img src="/src/Images/more.png" alt="" />More</span>
                        </Link>
                    </nav>
                </>
                <button variant="outlined" className="tweet" fullWidth>Tweet</button>


                <footer>
                    <button className='account'>
                        <div className="photo">
                            <img
                                src="/src/Images/aga.jpeg"
                                alt="" />
                        </div>
                        <div>
                            <div className='name'>
                                Agapy Mafo
                                <img src="/src/Images/Private.png" alt="" />
                            </div>
                            <div className='username'>@agapymk</div>
                        </div>
                    </button>
                </footer>
            </div>
        </div>
    )
}
export default Navbar;
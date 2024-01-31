import { Link } from 'react-router-dom'
import './src/ProfileNave.css'
function ProfileNav() {
    return (
        <div className="side-bar">
                <>
                    <nav>
                        <Link to="" activeClassName="selected">
                            <span>Post</span>
                        </Link>
                        <Link activeClassName="selected">
                            <span>Replies</span></Link>
                        <Link activeClassName="selected">
                            <span>Highlights</span></Link>
                        <Link activeClassName="selected">
                            <span>Medias</span></Link>
                        <Link activeClassName="'selected'">
                            <span>Likes</span></Link>
                    </nav>
                </>

            </div>
       
    )
}
export default ProfileNav;
import '../Navbar/navbar.scss'
import MainLogo from '../MainLogo/MainLogo'
import SearchBar from '../SearchBar/SearchBar'
import Button from  '../Button/Button'
import ProfileIcon from '../ProfileIcon/ProfileIcon'
import { Link } from "react-router-dom";

const NavBar = () => {

    return (

    <div className='navbar'>
        <Link to="/">
            <MainLogo />
        </Link>
        <div className='navbar__sub-container'>
            <SearchBar className="navbar__sub-container--search-bar"/>
            <ProfileIcon className="navbar__sub-container--profile-image" />
            <div className='navbar__sub-container--button-container'>
                <Link to="/upload">
                    <Button className="navbar__sub-container--button" type='upload'/>
                </Link>
            </div>
        </div>
    </div>
    )
};

export default NavBar;


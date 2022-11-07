import '../Navbar/navbar.scss'
import MainLogo from '../MainLogo/MainLogo'
import SearchBar from '../SearchBar/SearchBar'
import Button from  '../Button/Button'
import ProfileIcon from '../ProfileIcon/ProfileIcon'

const NavBar = () => {

    return (

    <div className='navbar'>
        <MainLogo className="navbar__main-logo"/>
        <div className='navbar__sub-container'>
            <SearchBar className="navbar__sub-container--search-bar"/>
            <ProfileIcon className="navbar__sub-container--profile-image" />
            <Button className="navbar__sub-container--button" type='upload'/>
        </div>
    </div>
    )
};

export default NavBar;


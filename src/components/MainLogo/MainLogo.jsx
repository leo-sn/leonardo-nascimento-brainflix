import  './MainLogo.scss'
import logo_path from '../../assets/images/BrainFlix-logo.svg'

const MainLogo = () => {
    
    return (
        <div className='main-logo'>
            <img className='main-logo--image' src={logo_path} alt='logo image'></img>
        </div>
    )
}

export default MainLogo;
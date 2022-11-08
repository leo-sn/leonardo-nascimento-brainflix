import './LikeAndView.scss';
import viewIcon from '../../assets/images/views.svg';
import likeIcon from '../../assets/images/likes.svg';


const LikeAndView = () => {

    return (
        <div className='container'>
        
            <div className='container__view'> 
                <img 
                    className='container__view--icon' 
                    src={viewIcon}
                    alt="viewIcon"
                ></img>
                <p className='silver'>1,001,023</p>
            </div>
            <div className='container__like'>
                <img 
                    className='container__like--icon' 
                    src={likeIcon}
                    alt="like icon"
                ></img>
                <p className='silver'>1,001,023</p>
            </div>
        </div>
    )
}

export default LikeAndView;
import './LikeAndView.scss';
import viewIcon from '../../assets/images/views.svg';
import likeIcon from '../../assets/images/likes.svg';


const LikeAndView = (props) => {

    return (
        <div className='container'>
        
            <div className='container__view'> 
                <img 
                    className='container__view--icon' 
                    src={viewIcon}
                    alt="viewIcon"
                ></img>
                <p className='silver'>{props.views}</p>
            </div>
            <div className='container__like'>
                <img 
                    className='container__like--icon' 
                    src={likeIcon}
                    alt="like icon"
                ></img>
                <p className='silver'>{props.likes}</p>
            </div>
        </div>
    )
}

export default LikeAndView;
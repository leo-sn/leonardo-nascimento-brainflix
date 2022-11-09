import './NextVideoCard.scss'
import currentSrc from '../../assets/images/thumbnail.png'


const NextVideoCard = () => {

    return (
        <div className='next-video-card-container'>
            <div className='next-video-card-container--img'>
                <img src={currentSrc} ></img>
            </div>
            <div className='next-video-card-container--info'>
                <p className='bold'>Become A Travel Pro In One Easy lesson</p>
                <p>Todd Welch</p>
            </div>
        </div>
    )
}

export default NextVideoCard;
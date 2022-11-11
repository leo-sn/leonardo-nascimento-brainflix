import './NextVideoCard.scss'

const NextVideoCard = (props) => {

    const { title, image, channel } = props;

    return (
        <div className='next-video-card-container'>
            <div className='next-video-card-container--img'>
                <img src={image}></img>
            </div>
            <div className='next-video-card-container--info'>
                <p className='bold'>{title}</p>
                <p>{channel}</p>
            </div>
        </div>
    )
}

export default NextVideoCard;
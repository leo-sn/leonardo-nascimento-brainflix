import './NextVideoCard.scss'
import { Link } from 'react-router-dom'

const NextVideoCard = (props) => {

    const { title, image, channel, id } = props;

    return (
        <Link to={`/videos/${id}`} className='related-video-link'>
            <div className='next-video-card-container' 
                // onClick={() => {props.handleSelectedVideo(id)}}
                >
                <div className='next-video-card-container--img'>
                    <img src={image} alt="thumbnail"></img>
                </div>
                <div className='next-video-card-container--info'>
                    <p className='bold'>{title}</p>
                    <p>{channel}</p>
                </div>
            </div>
        </Link>
    )
}

export default NextVideoCard;
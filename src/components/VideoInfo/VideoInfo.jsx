import './VideoInfo.scss';
import Divider from '../Divider/Divider';
import VideoMakeData from '../VideoMakeData/VideoMakeData';
import LikeAndView from '../LikeAndView/LikeAndView'

const VideoInfo = (props) => {

    return (
        <div className='video-info-container'>
            <h1>{props.title}</h1>
            <Divider />
            <div className='video-info-container__data'>
                <VideoMakeData channel={props.channel} timestamp={props.timestamp}/>
                <LikeAndView />
            </div>
            <Divider />
            <p>{props.description}</p>
        </div>
    );
}

export default VideoInfo;
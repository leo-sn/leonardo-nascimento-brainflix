import './VideoInfo.scss';
import Divider from '../Divider/Divider';
import VideoMakeData from '../VideoMakeData/VideoMakeData';
import LikeAndView from '../LikeAndView/LikeAndView'

const VideoInfo = () => {

    return (
        <div className='video-info-container'>
            <h1>BMX Rampage: 2021 Highlights</h1>
            <Divider />
            <div className='video-info-container__data'>
                <VideoMakeData />
                <LikeAndView />
            </div>
            <Divider />
        </div>
    );
}

export default VideoInfo;
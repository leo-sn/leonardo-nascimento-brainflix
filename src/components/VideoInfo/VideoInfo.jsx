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
            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
        </div>
    );
}

export default VideoInfo;
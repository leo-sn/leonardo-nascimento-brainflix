import './MainContent.scss'
import VideoInfo from '../VideoInfo/VideoInfo'
import CommentForm from '../CommentForm/CommentForm';
import CommentSection from '../CommentSection/CommentSection';
import RelatedVideos from '../RelatedVideos/RelatedVideos';

const MainContent = (props) => {

    //APIdata={firstLoad} 
    //selectedVideoContent={videoSelected}
    //handleSelectVideo={handleSelectVideo}

    const {title, views, likes, timestamp, channel, comments } = props.selectedVideoContent;
    
    console.log('PROPS=',props)

    return (

        <>
            <div className='main-container'>
                <div className='video-data'>
                    <VideoInfo 
                        title={title} 
                        views={views} 
                        likes={likes}
                        timestamp={timestamp} 
                        channel={channel}/>
                    <CommentForm />
                    <CommentSection comments={comments}/> 
                </div>
                <div className='related-container'>
                    <RelatedVideos
                    selectedVideoContent={props.selectedVideoContent}
                    handleSelectVideo={props.handleSelectVideo}
                    APIdata={props.firstLoad}
                    />
                </div>
            </div>
        </>
    )
}

export default MainContent;
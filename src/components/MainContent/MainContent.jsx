import './MainContent.scss'
import VideoInfo from '../VideoInfo/VideoInfo'
import CommentForm from '../CommentForm/CommentForm';
import CommentSection from '../CommentSection/CommentSection';
import RelatedVideos from '../RelatedVideos/RelatedVideos';

const MainContent = (props) => {

    const { title, 
            views, 
            likes, 
            timestamp, 
            channel, 
            comments, 
            description 
        } = props.selectedVideoContent;

    return (

        <>
            <div className='main-container'>
                <div className='video-data'>
                    <VideoInfo 
                        title={title} 
                        views={views} 
                        likes={likes}
                        timestamp={timestamp} 
                        description={description}
                        channel={channel}/>
                    <CommentForm />
                    <CommentSection sentComments={comments}/> 
                </div>
                <div className='related-container'>
                    <RelatedVideos
                    selectedVideoContent={props.selectedVideoContent}
                    handleSelectedVideo={props.handleSelectedVideo}
                    APIdata={props.APIdata}
                    />
                </div>
            </div>
        </>
    )
}

export default MainContent;
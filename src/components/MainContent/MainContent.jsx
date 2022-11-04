import './MainContent.scss'
import VideoInfo from '../VideoInfo/VideoInfo'
import CommentForm from '../CommentForm/CommentForm';
import CommentSection from '../CommentSection/CommentSection';
import RelatedVideos from '../RelatedVideos/RelatedVideos';

const MainContent = () => {

    return (
        <>
            <div className='main-container'>
                <div className='video-data'>
                    <VideoInfo />
                    <CommentForm />
                    <CommentSection/>
                </div>
                <div className='related-container'>
                    <RelatedVideos />
                </div>
            </div>
        </>
    )
}

export default MainContent;
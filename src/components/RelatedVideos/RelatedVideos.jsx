import './RelatedVideos.scss'
import NextVideoCard from '../NextVideoCard/NextVideoCard'
const RelatedVideos = () => {

    return (
        <div className='related-video-container'>
            <p className='silver bold'>NEXT VIDEOS</p> 
            <NextVideoCard />
        </div>
    )
}

export default RelatedVideos;
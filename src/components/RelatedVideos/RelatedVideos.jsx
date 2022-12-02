import './RelatedVideos.scss'
import NextVideoCard from '../NextVideoCard/NextVideoCard'

const RelatedVideos = (props) => {

    return (
        <div className='related-video-container'>
            <p className='silver bold'>NEXT VIDEOS</p> 

            {props.APIdata.map((video) => {
                return(
                    video.id !== props.selectedVideoContent.id &&
                    <NextVideoCard
                        handleSelectedVideo = {props.handleSelectedVideo}
                        key = {video.id} 
                        id = {video.id}
                        image = {video.image}
                        channel = {video.channel}
                        title = {video.title}
                    />
                )
            })}

        </div>
    )
}

export default RelatedVideos
import './RelatedVideos.scss'
import NextVideoCard from '../NextVideoCard/NextVideoCard'
import allVideos from '../../data/video-details.json'


const RelatedVideos = (props) => {

    console.log('RELATED-VIDEOS-PROPS', props)


    return (
        <div className='related-video-container'>
            <p className='silver bold'>NEXT VIDEOS</p> 

            {allVideos.map((video) => {
                return(
                    video.id != props.selectedVideoContent.id &&
                    <NextVideoCard
                        onClick={props.handleSelectedVideo}
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

export default RelatedVideos;
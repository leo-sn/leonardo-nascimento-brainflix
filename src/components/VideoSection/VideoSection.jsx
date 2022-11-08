import './VideoSection.scss'

const VideoSection = (props) => {

    return (
        <div className='video-container'>
            <video 
                controls poster={props.poster} 
                src="">

            </video>
        </div>
    )
}

export default VideoSection;
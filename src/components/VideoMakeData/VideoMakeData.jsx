import './VideoMakeData.scss'

const VideoMakeData = (props) => {

    const {channel, timestamp} = props

    let videoDate = timestamp

    function formatDateComments (timestamp){
        var date = new Date(timestamp)
        const videoDate = date.toISOString().replaceAll('-','/').split('T')[0];
        return videoDate
    }

    return (

        <div className='video-information-container'>
            <h3>{channel}</h3>
            <p className='silver'>{formatDateComments(videoDate)}</p>
        </div>
    )
}

export default VideoMakeData;
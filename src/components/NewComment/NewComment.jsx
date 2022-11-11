import './NewComment.scss';
import ProfileIcon from '../ProfileIcon/ProfileIcon'

const NewComment = (props) => {

    function formatDateComments (timestamp){
        var date = new Date(timestamp)
        const videoDate = date.toISOString().replaceAll('-','/').split('T')[0];
        return videoDate
    }

    return (
        <div className='new-comment-container'>
            <div className='new-comment-container__profile-img'>
            <ProfileIcon type={null}/>
            </div>
            <div className='comment-container'>
                <div className='comment-container__header'>
                    <h3>{props.name}</h3>
                    <p className='silver'>{formatDateComments(props.timestamp)}</p>
                </div>
                <p>{props.comment}</p>
            </div>
        </div>
    )
}

export default NewComment;
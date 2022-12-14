import ProfileIcon from '../ProfileIcon/ProfileIcon';
import './CommentForm.scss';
import Button from '../Button/Button'
import Divider from '../Divider/Divider'


const CommentForm = () => {

    return (
        <>
        <h3>3 Comments</h3>
            <div>
                <div className="comment-form-container">
                    <div className="comment-form-container__profile-icon"><ProfileIcon /></div>
                    <div className="comment-form-container__input-area">
                        <p className='silver'>JOIN THE CONVERSATION</p>
                        <div className="comment-form-container__input-area--form">
                            <textarea className="comment-form-container__form" placeholder="Add a new Comment"></textarea>
                            <Button kind="comment"/>
                        </div>
                    </div>
                </div>
            </div>
            <Divider />
      </>
    )
}

export default CommentForm;
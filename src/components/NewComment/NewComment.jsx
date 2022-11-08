import './NewComment.scss';
import ProfileIcon from '../ProfileIcon/ProfileIcon'

const NewComment = () => {

    return (
        <div className='new-comment-container'>
            <div className='new-comment-container__profile-img'>
            <ProfileIcon />
            </div>
            <div className='comment-container'>
                <div className='comment-container__header'>
                    <h3>Michael Lyons</h3>
                    <p className='silver'>08/09/2021</p>
                </div>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sollicitudin scelerisque congue. Suspendisse vitae consectetur mauris. Duis cursus euismod vestibulum. Aliquam euismod felis ut turpis vehicula, eu commodo diam tristique. Donec elementum ligula nec nulla pretium ullamcorper. Curabitur vel finibus sapien. Suspendisse in orci laoreet, tempus nisi ut, aliquet eros. Curabitur tristique blandit velit, nec suscipit neque mollis nec. Proin vehicula eros vel viverra tristique. Aliquam egestas ac ex non vehicula.
                </p>
            </div>
        </div>
    )
}

export default NewComment;
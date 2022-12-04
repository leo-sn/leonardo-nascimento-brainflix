import './CommentSection.scss'
import NewComment from '../NewComment/NewComment'
import Divider from '../Divider/Divider'

const CommentSection = (props) => {

    return (
        <>
            {props.sentComments.map(comment => {
                return(
                    <>
                        <NewComment 
                            comment={comment.comment} 
                            name={comment.name} 
                            timestamp={comment.timestamp}
                        
                        />
                        <Divider />
                    </>
                )
            })}
        </>
    )
}

export default CommentSection;
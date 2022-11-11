import './CommentSection.scss'
import NewComment from '../NewComment/NewComment'
import Divider from '../Divider/Divider'

const CommentSection = (props) => {

    // const [comments] = props.sentComments;

    console.log('CommentSEction Props', props)
    // console.log(props.sentComments[1])
    // const [comment, timestamp, name] = comments

    return (
        <>
            {props.sentComments.map(comment => {
                return(
                    <>
                        <Divider />
                        <NewComment 
                            comment={comment.comment} 
                            name={comment.name} 
                            timestamp={comment.timestamp}
                        />
                    </>
                )
            })}
        </>
    )
}

export default CommentSection;
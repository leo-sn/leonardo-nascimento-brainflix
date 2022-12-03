import './UploadContent.scss'
import thumbnail from '../../assets/images/Upload-video-preview.jpg'
import Button from '../Button/Button'
import Divider from '../Divider/Divider'

const UploadContent = () => {

    return (
        
        <div className='upload-container'>
            <Divider className="upload-container-divider"/>
            
            <div className="upload-container__form-container">
                <div>
                <p className='silver'>VIDEO THUMBNAIL</p>
                <img src={thumbnail} alt="thumbnail"></img>
                </div>
                <form>
                    <p className='silver'>TITLE YOUR VIDEO</p>
                    <input className='upload-container__form' placeholder='Add a title to your video'></input>
                    <p className='silver'>ADD A VIDEO DESCRIPTION</p>
                    <textarea className='upload-container__form' placeholder='Add a description to your video'></textarea>
                </form>
            </div>
            <Divider className="upload-container-divider"/>
            <div className='upload-container__buttons'>
                <Button className="navbar__sub-container--button" type='publish'/>
                <p className='upload-container__cancel bold'>CANCEL</p>
            </div>
        </div>  
    )
}   

export default UploadContent;
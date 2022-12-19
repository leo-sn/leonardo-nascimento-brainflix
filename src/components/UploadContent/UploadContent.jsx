import './UploadContent.scss'
import thumbnail from '../../assets/images/Upload-video-preview.jpg'
import Button from '../Button/Button'
import Divider from '../Divider/Divider'
import { useState } from 'react';

const UploadContent = () => {

    const [inputs, setInputs] = useState({});

    const handleUploadSubmit = (e) => {
        e.preventDefault();
        console.log(inputs)

        //CREATE THE AXIOS POST CALL TO LOCALHOST:3030/videos
    }

    const handleChange = (event) => {
        const {name , value} = event.target;
        const url = 'link'
        setInputs(values => ({...values,[url]:'link',[name]: value}))
        console.log(inputs)
      }

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
                    <input 
                        className='upload-container__form' 
                        placeholder='Add a title to your video'
                        type='text'
                        name='videoTitle'
                        onChange={handleChange}>
                    </input>
                    <p className='silver'>ADD A VIDEO DESCRIPTION</p>
                    <textarea 
                        className='upload-container__form' 
                        placeholder='Add a description to your video'
                        type='text'
                        name='videoDescription'
                        onChange={handleChange}>
                    </textarea>
                </form>
            </div>
            <Divider className="upload-container-divider"/>
            <div className='upload-container__buttons'>
                <button onClick={handleUploadSubmit} className="navbar__sub-container--button button button__publish" kind='publish'></button>
                <p className='upload-container__cancel bold'>CANCEL</p>
            </div>
        </div>  
    )
}   

export default UploadContent;
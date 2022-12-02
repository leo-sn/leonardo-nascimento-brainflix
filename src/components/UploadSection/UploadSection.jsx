import '../UploadSection/UploadSection.scss';
import Button from '../../components/Button/Button'

const UploadSection = () => {

    return (
            <div className='main-container'>
                <h1>Upload Video</h1>
                <Button className="navbar__sub-container--button" type='publish'/>
            </div>                      
    )
}   

export default UploadSection;
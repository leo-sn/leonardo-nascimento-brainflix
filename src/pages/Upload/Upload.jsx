import NavBar from "../../components/Navbar/NavBar";
import UploadSection from "../../components/UploadSection/UploadSection"
import Divider from '../../components/Divider/Divider'

function Upload() {

    return (
        <>
        <NavBar />
        <Divider className="upload-container-divider"/>
        <UploadSection />
        </>
    );
  }
  
  export default Upload;
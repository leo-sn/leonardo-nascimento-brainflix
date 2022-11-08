import './App.scss';
import NavBar from './components/Navbar/NavBar'
import VideoSection from './components/VideoSection/VideoSection'
import MainContent from './components/MainContent/MainContent'
import videoData from '../src/data/video-details.json';




function App() {

  const LEO = videoData[7];

  return (
    <div className="App">
     <NavBar />
     <VideoSection poster={LEO.image}/>
     <MainContent />
    </div>
  );
}

export default App;

import './App.scss';
import React , { useState } from 'react';
import NavBar from './components/Navbar/NavBar';
import VideoSection from './components/VideoSection/VideoSection';
import MainContent from './components/MainContent/MainContent';
import firstLoad from './data/video-details.json';




function App() {

  const [videoSelected, setVideoSelected] = useState(firstLoad[0]);

  function handleSelectVideo() {
  //Create function that when a relatedVideo is clicked, all the information
  //about that video will be passed as videoSelected by setVideoSelected.

    return console.log('videoHandled')

  }



  const {image, video, id} = videoSelected;
  

  return (
    <div className="App">
     <NavBar />
     <VideoSection poster={image} video={''} />
     <MainContent APIdata={firstLoad} selectedVideoContent={videoSelected} handleSelectVideo={handleSelectVideo}/>
    </div>
  );
}

export default App;

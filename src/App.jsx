import './App.scss';
import React , { useState } from 'react';
import NavBar from './components/Navbar/NavBar';
import VideoSection from './components/VideoSection/VideoSection';
import MainContent from './components/MainContent/MainContent';
import firstLoad from './data/video-details.json';




function App() {

  const [videoSelected, setVideoSelected] = useState(firstLoad[0]);

  const handleSelectedVideo = (event) => {
  //Create function that when a relatedVideo is clicked, all the information
  //about that video will be passed as videoSelected by setVideoSelected.

    return console.log('videoHandled', event)
  }



  const {image, video, id} = videoSelected;
  

  return (
    <div className="App">
     <NavBar />
     <VideoSection poster={image} video={''} />
     <MainContent APIdata={firstLoad} selectedVideoContent={videoSelected} handleSelectedVideo={handleSelectedVideo}/>
    </div>
  );
}

export default App;

import React , { useState } from 'react';
import NavBar from '../../components/Navbar/NavBar'
import VideoSection from '../../components/VideoSection/VideoSection';
import MainContent from '../../components/MainContent/MainContent';
import firstLoad from '../../data/video-details.json';

function Home() {

  const [videoSelected, setVideoSelected] = useState(firstLoad[2]);

  const handleSelectedVideo = (clickedId) => {
  //Create function that when a relatedVideo is clicked, all the information
  //about that video will be passed as videoSelected by setVideoSelected.
    firstLoad.map((object) => {
      return object.id === clickedId && setVideoSelected(object)
    })
  }

  const {image, video } = videoSelected;

  return (
    <div>
      <NavBar />
      <VideoSection poster={image} video={video} />
      <MainContent 
        APIdata={firstLoad} 
        selectedVideoContent={videoSelected} 
        handleSelectedVideo={handleSelectedVideo}
      />
    </div>
  );
}

export default Home;

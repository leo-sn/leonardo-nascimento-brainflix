import React , { useState, useEffect } from 'react';
import NavBar from '../../components/Navbar/NavBar'
import VideoSection from '../../components/VideoSection/VideoSection';
import MainContent from '../../components/MainContent/MainContent';
import firstLoad from '../../data/video-details.json';
import axios from 'axios'

function Home() {

  const [videoSelected, setVideoSelected] = useState(firstLoad[2]);
  const [videos, setVideos] = useState([]);
  const [apiKey, setApiKey] = useState('');

  useEffect(() => {
    if(!apiKey) {
      axios.get('https://project-2-api.herokuapp.com/register')
      .then((res) => {
        setApiKey(res.data);
        }
      )
    } else {
      return apiKey;
    }
  },[])

  useEffect(() => {
    getVideosList()
  },[apiKey])

  function getVideosList() {
    axios.get(`https://project-2-api.herokuapp.com/videos?api_key=${apiKey}`)
    .then((res) => {
      setVideos(res.data)
    })
  }

  const handleSelectedVideo = (clickedId) => {
  //Create function that when a relatedVideo is clicked, all the information
  //about that video will be passed as videoSelected by setVideoSelected.
    // firstLoad.map((object) => {
    //   return object.id === clickedId && setVideoSelected(object)
    // })
    axios.get(`https://project-2-api.herokuapp.com/videos/${clickedId}?api_key=${apiKey}`)
    .then(res => setVideoSelected(res.data))
  }

  const {image, video } = videoSelected;

  return (
    <div>
      <NavBar />
      <VideoSection poster={image} video={video} />
      <MainContent 
        APIdata={videos} 
        selectedVideoContent={videoSelected} 
        handleSelectedVideo={handleSelectedVideo}
      />
    </div>
  );
}

export default Home;

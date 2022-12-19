import React , { useState, useEffect } from 'react';
import NavBar from '../../components/Navbar/NavBar'
import VideoSection from '../../components/VideoSection/VideoSection';
import MainContent from '../../components/MainContent/MainContent';
import axios from 'axios'
import { useParams } from 'react-router-dom';

function Home() {

  const [videoSelected, setVideoSelected] = useState();
  const [videos, setVideos] = useState([]);
  const [apiKey, setApiKey] = useState(null);
  const { videoId } = useParams();
  
  //getting an API key when the app starts
  useEffect(() => {
      axios.get('https://project-2-api.herokuapp.com/register')
      .then((res) => {
        setApiKey(res.data.api_key)
        }
      )
  },[])

  // if apiKey exists, call axios and setVideoSelected
  useEffect(() => {
    if(apiKey){ axios.get(`http://localhost:3030/videos/84e96018-4022-434e-80bf-000ce4cd12b8`)
    .then(res => setVideoSelected(res.data))}
  },[apiKey])

  // useEffect(() => {
  //   if(apiKey){ axios.get(`https://project-2-api.herokuapp.com/videos/84e96018-4022-434e-80bf-000ce4cd12b8?api_key=${apiKey}`)
  //   .then(res => setVideoSelected(res.data))}
  // },[apiKey])

  useEffect(() => {
    apiKey && getVideosList()
  },[apiKey])

  function getVideosList() {
    axios.get(`http://localhost:3030/videos`)
    .then((res) => {
      setVideos(res.data)
    })
  }
  // function getVideosList() {
  //   axios.get(`https://project-2-api.herokuapp.com/videos?api_key=${apiKey}`)
  //   .then((res) => {
  //     setVideos(res.data)
  //   })
  // }

  useEffect( () => {
    axios.get(`http://localhost:3030/videos/${videoId}`)
    .then(res => setVideoSelected(res.data))
    window.scrollTo(0, 0);
  }, [videoId])

  // useEffect( () => {
  //   axios.get(`https://project-2-api.herokuapp.com/videos/${videoId}?api_key=${apiKey}`)
  //   .then(res => setVideoSelected(res.data))
  //   window.scrollTo(0, 0);
  // }, [apiKey, videoId])


  return (
    <>
    {!videoSelected && <h1>Loading BrainFlix...</h1>}
    { videoSelected &&
      <div>
        <NavBar />
        <VideoSection poster={videoSelected.image} video={videoSelected.video} />
        <MainContent 
          APIdata={videos} 
          selectedVideoContent={videoSelected} 
        />
      </div>
    } 
    </>
  );
}

export default Home;

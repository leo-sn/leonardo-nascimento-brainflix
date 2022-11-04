import './App.scss';
import NavBar from './components/Navbar/NavBar'
import VideoSection from './components/VideoSection/VideoSection'
import MainContent from './components/MainContent/MainContent'



function App() {
  return (
    <div className="App">
     <NavBar />
     <VideoSection />
     <MainContent />
    </div>
  );
}

export default App;

import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home'
import Upload from './pages/Upload/Upload'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Upload" element={<Upload/>} />
        <Route path="/videos/:videoId" element={<Home/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

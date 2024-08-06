import './App.css';
import image from './assets/imageGradient.jpg';
import Content from './components/Content';
import Home from './components/Home';
import Welcome from './components/Welcome';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      {/* <LoginFields/> */}
      {/* <Welcome image={image}/>      */}

      <Router>
        <Routes>
          <Route path="/url/:shortId" element={<Content />} />
          <Route path="/" element={<Home />} />
          {/* Add other routes here */}
        </Routes>
      </Router>
    </>
  );
}

export default App;

import './App.css'
import image from "./assets/imageGradient.jpg"
import Welcome from './components/Welcome'

function App() {
  return (
    <>
     {/* <LoginFields/> */}
     <Welcome image={image}/>     
    </>
  )
}

export default App

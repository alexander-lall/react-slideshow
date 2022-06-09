import './App.css';

import Slider from './components/slider/slider.component';

import IMAGES from "./data.json";

function App() {
  return (
    <Slider slides={IMAGES}/>
  );
}

export default App;

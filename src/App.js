import Slider from "./components/slider/slider.component";
import MultiSlider from "./components/multi-slider/multi-slider.component";
import SpringSlider from './components/spring-slider/spring-slider.component';
import SpringMultiSlider from "./components/spring-multi-slider/spring-multi-slider.component";

import IMAGES from "./data.json";

import "./App.css";

function App() {
  return (
    <>
      <Slider slides={IMAGES} />
      <MultiSlider slides={IMAGES} slidesPerView={3} />
      <SpringSlider slides={IMAGES} />
      <SpringMultiSlider slides={IMAGES} slidesPerView={3} />
    </>
  );
}

export default App;

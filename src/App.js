import { useState } from 'react';
import './App.css';
import Homepage from './components/Homepage';
import WeatherInfo from './utils/WeatherInfo';
import overcast_clouds from '../src/images/overcast_clouds.jpg'
import broken_clouds from '../src/images/broken_clouds.jpg'
import clear_sky from '../src/images/clear_sky.jpg'


function App() {
  const [weather, setWeather] = useState({});
  const [imageValue, setImageValue] = useState("");
  const handleClick = (value) => {
    console.log(value)
    switch (value) {
      case "overcast clouds":
        (setImageValue(overcast_clouds))
        break;
      case "broken clouds":
        (setImageValue(broken_clouds))
      case "clear sky":
        (setImageValue(clear_sky))
    }
  }
  return (
    <div className="App">
      <Homepage weather={weather} imageValue={imageValue} />
      <WeatherInfo weather={weather} setWeather={setWeather} handleClick={handleClick} />
    </div>
  );
}

export default App;

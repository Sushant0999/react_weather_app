import { useState } from 'react';
import './App.css';
import Homepage from './components/Homepage';
import WeatherData from './utils/WeatherData'
import overcast_clouds from '../src/images/overcast_clouds.jpg'
import broken_clouds from '../src/images/broken_clouds.jpg'
import clear_sky from '../src/images/clear_sky.jpg'
import rain from '../src/images/rain.gif'


function App() {
  // const [weatherCon, setweatherCon] = useState({});
  // const [imageValue, setImageValue] = useState("");
  // const handleClick = (value) => {
  //   console.log(value)
  //   value = "light rain";
  //   switch (value) {
  //     case "overcast clouds":
  //       (setImageValue(overcast_clouds))
  //       break;
  //     case "broken clouds":
  //       (setImageValue(broken_clouds))
  //       break;
  //     case "clear sky":
  //       (setImageValue(clear_sky))
  //       break;
  //     case "light rain":
  //       (setImageValue(rain))
  //       break;
  //     default:

  //       break;
  //   }
  // }
  return (
    <div className="App">
      <Homepage />
      {/* <weatherConInfo weatherCon={weatherCon} setweatherCon={setweatherCon} handleClick={handleClick} /> */}
    </div>
  );
}

export default App;

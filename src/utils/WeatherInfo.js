// import React, { useState, useEffect } from 'react';

// export default function WeatherInfo({weather,setWeather,handleClick}) {
//     const [isError, setIsError] = useState(false);
//     const [errorMessage, setErrorMessage] = useState('');

//     async function fetchData() {
//         try {
//             const response = await fetch('https://api.openweathermap.org/data/2.5/forecast?id=1260086&appid=59e30983d7b7f60075b0b823a0b41e1b&units=metric');
//             const data = await response.json();
//             if (response.status === 404) {
//                 throw new Error('NO DATA FOUND');
//             }
//             if (response.status === 401) {
//                 throw new Error(response.statusText);
//             }
//             setWeather(data);
//             // console.log(data.list[0].main.humidity); // Use 'data' instead of 'weather' here
//         } catch (error) {
//             setIsError(true);
//             setErrorMessage(error.message);
//         }
//     }

//     useEffect(() => {
//         fetchData();
//     }, []);
// //  weather.list[0].weather[0].description
//     return (
//         <div>
//             <button onClick={fetchData}>CHECK</button>
//             {isError && <p>Error: {errorMessage}</p>}
//             <p>Cod: {weather.cod}</p>
//             <p>Message: {weather.message}</p>
//             <p>City Name: {weather.city?.name}</p>
//             <p>Country Name: {weather.city?.country}</p>
//             <div style={{display:'flex'}}>
//                 {weather.list?.map((data, index) => (
//                 <div key={index} style={{border:"1px red solid"}}>
//                     <p>Date and Time: {new Date(data.dt * 1000).toString()}</p>
//                     <p>Temperature: {data.main.temp} K</p>
//                     <p >Weather Description: {data.weather[0].description}</p>
//                     <p>Wind Speed: {data.wind.speed} m/s</p>
//                     <p>Humidity: {data.main.humidity}%</p>
//                     <hr />
//                 </div>
//             ))}
//             </div>

//         </div>
//     );
// }
